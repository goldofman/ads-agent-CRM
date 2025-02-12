import { NextResponse } from "next/server";
import { auth } from "@/auth";
import connectMongo from "@/libs/mongoose";
import User from "@/app/models/User";
import {
  lemonSqueezySetup,
  createCheckout,
} from "@lemonsqueezy/lemonsqueezy.js";

export async function POST(req) {
  try {
    const body = await req.json();
    if (!body.successUrl || !body.cancelUrl) {
      return NextResponse.json(
        { error: "Success URL is required" },
        { status: 400 }
      );
    }

    const session = await auth();
    await connectMongo();
    const user = await User.findById(session.user.id);

    lemonSqueezySetup({
      apiKey: process.env.LS_API_KEY,
    });

    console.log("LS_STORE_ID:", process.env.LS_STORE_ID);
    console.log("LS_VARIANT_ID:", process.env.LS_VARIANT_ID);

    const checkoutLS = await createCheckout(
      process.env.LS_STORE_ID,
      process.env.LS_VARIANT_ID,
      {
        productOptions: { redirectUrl: body.successUrl },
        checkoutData: {
          email: user.email,
          custom: { userId: user._id.toString() },
        },
      }
    );

    console.log("createCheckout response:", checkoutLS);

    if (checkoutLS?.data?.data?.attributes?.url) {
      return NextResponse.json({ url: checkoutLS.data.data.attributes.url });
    } else {
      console.error("Invalid response from createCheckout:", checkoutLS);
      return NextResponse.json(
        { error: "Invalid response from createCheckout", details: checkoutLS },
        { status: 500 }
      );
    }
  } catch (e) {
    console.error("Error in POST /create-checkout:", e);
    return NextResponse.json({ error: e?.message }, { status: 500 });
  }
}
