// lib/GoogleAdsAPI.js
import { GoogleAdsClient } from "google-ads-node";

const client = new GoogleAdsClient({
  developerToken: "your_developer_token",
  loginCustomerId: "your_customer_id",
  // Other credentials
});

export const fetchGoogleAdsData = async (campaignId) => {
  try {
    const response = await client.campaigns.get(
      {
        customerId: "your_customer_id",
        campaignId,
      },
      ["impressions", "clicks", "conversions", "spend"]
    );
    return response;
  } catch (error) {
    console.error(error);
    return {};
  }
};
