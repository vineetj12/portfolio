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
    url: "https://shorturl-vineetj12.vercel.app/",
    content: (
      <div className="text-white">
        <h2 className="text-xl font-bold">URL Shortener</h2>
        <p>A simple and fast tool to shorten long URLs, track clicks, and manage links.</p>
      </div>
    ),
    className: "h-[300px]",
    thumbnail: "/picture/url.png",
  },
];

export default cards;
