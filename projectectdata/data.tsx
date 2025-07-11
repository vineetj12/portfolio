const cards = [
  {
    id: 1,
    label: "AI Interviewer",
    url: "https://ai-interviewer-xi-indol.vercel.app/",
    content: (
      <div className="text-white">
        <h2 className="text-xl font-bold">AI Interview Assistant</h2>
        <p>An AI-powered mock interview tool with dynamic questions, feedback, and scoring.</p>
      </div>
    ),
    className: "h-[300px]",
    thumbnail: "/picture/ai-interview.png",
  },
  {
    id: 2,
    label: "URL Shortener",
    url: "https://shorturl-ten-mocha.vercel.app/",
    content: (
      <div className="text-white">
        <h2 className="text-xl font-bold">URL Shortener</h2>
        <p>A web tool to shorten long URLs using hash-based keys with redirection support</p>
      </div>
    ),
    className: "h-[300px]",
    thumbnail: "/picture/url.png", 
  }
];

export default cards;
