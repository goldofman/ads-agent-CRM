// pages/api/generate-ad-copy.js
export default function handler(req, res) {
  const { productName, targetAudience } = req.body;
  // Mock ad copy generation
  const adCopy = `Introducing ${productName}, perfect for ${targetAudience}! Get yours today!`;
  res.status(200).json({ adCopy });
}
