import { GoogleAdsClient } from "google-ads-node";
import { NextResponse } from "next/server";

// Тут встав свої креденшіали для Google Ads API
const client = new GoogleAdsClient({
  client_id: process.env.GOOGLE_ADS_CLIENT_ID,
  client_secret: process.env.GOOGLE_ADS_CLIENT_SECRET,
  developer_token: process.env.GOOGLE_ADS_DEVELOPER_TOKEN,
  refresh_token: process.env.GOOGLE_ADS_REFRESH_TOKEN,
});

export async function GET() {
  try {
    const response = await client.getAccountBudgetProposals(); // Отримуємо дані
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
