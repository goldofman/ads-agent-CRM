// pages/api/analyze-competitor.js
export default function handler(req, res) {
  const { competitorName } = req.body;
  // Mock analysis
  const analysis = `Competitor ${competitorName} has a strong presence on social media with high engagement rates.`;
  res.status(200).json({ analysis });
}
