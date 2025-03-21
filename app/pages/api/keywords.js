// pages/api/keywords.js
export default function handler(req, res) {
  const { query } = req.body;
  // Mock keyword suggestions
  const keywords = [
    `${query} tips`,
    `best ${query} practices`,
    `how to improve ${query}`,
  ];
  res.status(200).json({ keywords });
}
