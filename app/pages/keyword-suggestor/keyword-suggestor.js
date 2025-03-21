// pages/keyword-suggestor.js
import Head from "next/head";
import { useState } from "react";

const KeywordSuggestor = () => {
  const [query, setQuery] = useState("");
  const [keywords, setKeywords] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("@/app/api/keywords", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    });
    const data = await response.json();
    setKeywords(data.keywords);
  };

  return (
    <>
      <Head>
        <title>Keyword Suggestor - Your Agency Name</title>
        <meta
          name="description"
          content="Find optimal keywords for your ad campaigns with our keyword suggestor."
        />
      </Head>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-4">Keyword Suggestor</h1>
        <form className="mb-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter a topic or phrase"
            value={query}
            className="input input-primary w-full max-w-xs"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="btn btn-primary ml-2">
            Suggest Keywords
          </button>
        </form>
        <ul>
          {keywords.map((keyword) => (
            <li key={keyword} className="text-base">
              {keyword}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default KeywordSuggestor;
