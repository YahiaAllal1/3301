export default async function handler(req, res) {
  if (req.method === "POST") {
    const message = req.body.message;
    const apiKey = "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";

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: message }],
        }),
      });
      const data = await response.json();
      res.status(200).json({ reply: data.choices[0].message.content });
    } catch (err) {
      res.status(500).json({ reply: "حدث خطأ ما" });
    }
  } else {
    res.status(405).json({ message: "الطريقة غير مدعومة" });
  }
}