// pages/creative-asset-generator.js
import Head from "next/head";
import { useState } from "react";

const CreativeAssetGenerator = () => {
  const [productName, setProductName] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [adCopy, setAdCopy] = useState("");

  const handleGenerate = async () => {
    const response = await fetch("@/app/api/generate-ad-copy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productName, targetAudience }),
    });
    const data = await response.json();
    setAdCopy(data.adCopy);
  };

  return (
    <>
      <Head>
        <title>Creative Asset Generator - Your Agency Name</title>
        <meta
          name="description"
          content="Generate ad creatives using AI or templates based on your input."
        />
      </Head>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-4">
          Creative Asset Generator
        </h1>
        <div className="mb-4">
          <label className="block text-base font-semibold mb-2">
            Product Name
          </label>
          <input
            type="text"
            placeholder="Enter product name"
            value={productName}
            className="input input-primary w-full max-w-xs"
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-base font-semibold mb-2">
            Target Audience
          </label>
          <input
            type="text"
            placeholder="Enter target audience"
            value={targetAudience}
            className="input input-primary w-full max-w-xs"
            onChange={(e) => setTargetAudience(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" onClick={handleGenerate}>
          Generate Ad Copy
        </button>
        {adCopy && (
          <div className="mt-4">
            <h2 className="text-base font-semibold mb-2">Generated Ad Copy</h2>
            <p>{adCopy}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default CreativeAssetGenerator;
