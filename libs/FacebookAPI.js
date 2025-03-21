import { FacebookAdsApi } from "@facebook/ads-sdk";

const appId = "your_app_id";
const appSecret = "your_app_secret";
const access_token = "your_access_token";

const api = new FacebookAdsApi({
  appId,
  appSecret,
  access_token,
});

export const fetchFacebookData = async (campaignId) => {
  try {
    const campaign = api.newCampaign(campaignId);
    const response = await campaign.read([
      "impressions",
      "clicks",
      "conversions",
      "spend",
    ]);
    return response;
  } catch (error) {
    console.error(error);
    return {};
  }
};
