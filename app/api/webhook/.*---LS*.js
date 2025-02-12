import { NextResponse } from "next/server";
import { headers } from "next/headers";
import crypto from "crypto";
import connectMongo from "@/libs/mongoose";
import User from "@/app/models/User";

export async function POST(req) {
  try {
    // Verify webhook is coming from LemonSqueezy
    const body = await req.text();

    const secret = "SIGNING_SECRET";
    const hmac = crypto.createHmac("sha256", secret);
    const digest = Buffer.from(
      hmac.update(request.rawBody).digest("hex"),
      "utf8"
    );
    const signature = Buffer.from(request.get("X-Signature") || "", "utf8");

    if (!crypto.timingSafeEqual(digest, signature)) {
      throw new Error("Invalid signature.");
    }

    const payload = JSON.parse(body);
    const eventName = payload.meta.event_name;

    if (eventName === "order_created") {
      // Grant access to the product
      await connectMongo();
      const user = await User.findById(payload.meta.custom_data.user_id);

      user.hasAccess = true;
      user.customerId = payload.data.attributes.customer_id;

      await user.save();
    } else if (
      eventName === "subscription_expired" ||
      "subscription_payment-failed"
    ) {
      // Revoke access to the product
      await connectMongo();
      const user = await User.findById(payload.meta.custom_data.user_id);
      user.hasAccess = false;
      await user.save();
    }
  } catch (e) {
    console.error("LemonSqueezy error: ", e?.message);
  }

  return NextResponse.json({});
}
