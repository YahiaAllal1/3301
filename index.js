import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });
    const data = await res.json();
    setResponse(data.reply);
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>مساعد يحيى الذكي</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="اكتب هنا"
          style={{ padding: 8, width: "80%", fontSize: 16 }}
        />
        <button type="submit" style={{ padding: 8, marginLeft: 10 }}>أرسل</button>
      </form>
      {response && (
        <div style={{ marginTop: 20 }}>
          <strong>الرد:</strong>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}