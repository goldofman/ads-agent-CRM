// pages/budget-optimizer.js
import Head from "next/head";
import { useState } from "react";

const BudgetOptimizer = () => {
  const [facebookCpa, setFacebookCpa] = useState(0);
  const [googleAdsCpa, setGoogleAdsCpa] = useState(0);
  const [totalBudget, setTotalBudget] = useState(0);
  const [allocation, setAllocation] = useState({});

  const handleCalculate = () => {
    const totalInverseCpa = 1 / facebookCpa + 1 / googleAdsCpa;
    const facebookShare = 1 / facebookCpa / totalInverseCpa;
    const googleAdsShare = 1 / googleAdsCpa / totalInverseCpa;
    setAllocation({
      Facebook: Math.round(facebookShare * totalBudget),
      GoogleAds: Math.round(googleAdsShare * totalBudget),
    });
  };

  return (
    <>
      <Head>
        <title>Budget Optimizer - Your Agency Name</title>
        <meta
          name="description"
          content="Suggest the best budget allocation across platforms to maximize your ad campaign's return on investment."
        />
      </Head>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-4">Budget Optimizer</h1>
        <div className="mb-4">
          <label className="block text-base font-semibold mb-2">
            Facebook CPA
          </label>
          <input
            type="number"
            placeholder="Enter Facebook CPA"
            value={facebookCpa}
            className="input input-primary w-full max-w-xs"
            onChange={(e) => setFacebookCpa(Number(e.target.value))}
          />
        </div>
        <div className="mb-4">
          <label className="block text-base font-semibold mb-2">
            Google Ads CPA
          </label>
          <input
            type="number"
            placeholder="Enter Google Ads CPA"
            value={googleAdsCpa}
            className="input input-primary w-full max-w-xs"
            onChange={(e) => setGoogleAdsCpa(Number(e.target.value))}
          />
        </div>
        <div className="mb-4">
          <label className="block text-base font-semibold mb-2">
            Total Budget
          </label>
          <input
            type="number"
            placeholder="Enter total budget"
            value={totalBudget}
            className="input input-primary w-full max-w-xs"
            onChange={(e) => setTotalBudget(Number(e.target.value))}
          />
        </div>
        <button className="btn btn-primary" onClick={handleCalculate}>
          Calculate Allocation
        </button>
        {Object.keys(allocation).length > 0 && (
          <div className="mt-4">
            <h2 className="text-base font-semibold mb-2">Allocation</h2>
            <ul>
              {Object.keys(allocation).map((platform) => (
                <li key={platform} className="text-base">
                  {platform}: ${allocation[platform]}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default BudgetOptimizer;
