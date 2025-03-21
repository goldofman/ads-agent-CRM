// pages/competitor-analysis-tool.js
import Head from "next/head";
import { useState } from "react";

const CompetitorAnalysisTool = () => {
  const [competitorName, setCompetitorName] = useState("");
  const [analysis, setAnalysis] = useState("");

  const handleAnalyze = async () => {
    const response = await fetch("/api/analyze-competitor", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ competitorName }),
    });
    const data = await response.json();
    setAnalysis(data.analysis);
  };

  return (
    <>
      <Head>
        <title>Competitor Analysis Tool - Your Agency Name</title>
        <meta
          name="description"
          content="Analyze competitors' ad campaigns to gain strategic insights."
        />
      </Head>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-4">
          Competitor Analysis Tool
        </h1>
        <div className="mb-4">
          <label className="block text-base font-semibold mb-2">
            Competitor Name
          </label>
          <input
            type="text"
            placeholder="Enter competitor name"
            value={competitorName}
            className="input input-primary w-full max-w-xs"
            onChange={(e) => setCompetitorName(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" onClick={handleAnalyze}>
          Analyze
        </button>
        {analysis && (
          <div className="mt-4">
            <h2 className="text-base font-semibold mb-2">Analysis</h2>
            <p>{analysis}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default CompetitorAnalysisTool;
