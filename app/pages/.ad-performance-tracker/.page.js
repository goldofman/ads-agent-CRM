// pages/ad-performance-tracker.js
"use client";

import Head from "next/head";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { fetchFacebookData } from "@/libs/FacebookAPI";
import { fetchGoogleAdsData } from "@/libs/GoogleAdsAPI";

const AdPerformanceTracker = () => {
  const [platform, setPlatform] = useState("Facebook");
  const [campaignId, setCampaignId] = useState("");
  const [campaignData, setCampaignData] = useState({});

  const fetchData = async () => {
    let data;
    if (platform === "Facebook") {
      data = await fetchFacebookData(campaignId);
    } else if (platform === "Google Ads") {
      data = await fetchGoogleAdsData(campaignId);
    }
    setCampaignData(data);
  };

  const chartData = {
    labels: ["Impressions", "Clicks", "Conversions", "Spend"],
    datasets: [
      {
        label: "Performance Metrics",
        data: [
          campaignData.impressions || 0,
          campaignData.clicks || 0,
          campaignData.conversions || 0,
          campaignData.spend || 0,
        ],
        backgroundColor: ["blue", "green", "red", "yellow"],
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Ad Performance Tracker - Your Agency Name</title>
        <meta
          name="description"
          content="Track your ad campaign performance in real-time with our customizable dashboards."
        />
      </Head>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-4">Ad Performance Tracker</h1>
        <div className="mb-4">
          <label className="block text-base font-semibold mb-2">Platform</label>
          <select
            value={platform}
            className="select select-primary w-full max-w-xs"
            onChange={(e) => setPlatform(e.target.value)}
          >
            <option value="Facebook">Facebook</option>
            <option value="Google Ads">Google Ads</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-base font-semibold mb-2">
            Campaign ID
          </label>
          <input
            type="text"
            placeholder="Enter campaign ID"
            value={campaignId}
            className="input input-primary w-full max-w-xs"
            onChange={(e) => setCampaignId(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" onClick={fetchData}>
          Fetch Data
        </button>
        {Object.keys(campaignData).length > 0 && (
          <div className="mt-4">
            <h2 className="text-base font-semibold mb-2">
              Performance Metrics
            </h2>
            <Bar data={chartData} />
          </div>
        )}
      </div>
    </>
  );
};

export default AdPerformanceTracker;
