const cards = [
  {
    id: 1,
    label: "Sentry",
    url: "https://github.com/vineetj12/sentry",
    githubUrl: "https://github.com/vineetj12/sentry",
    content: (
      <div className="text-white">
        <h2 className="text-xl font-bold">🛰 Sentry</h2>
        <p>Real-Time Monitoring System with secure access and fast alerts.</p>
        <p className="text-sm mt-2">Tech: Node.js, WebSockets, Prisma, PostgreSQL</p>
        <div className="flex gap-3 mt-4">
          <a href="https://github.com/vineetj12/sentry" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded text-sm transition">
            GitHub Code
          </a>
        </div>
      </div>
    ),
    className: "md:col-span-2",
    thumbnail: "/picture/sentry.png",
  },
  {
    id: 2,
    label: "AI Interviewer",
    url: "https://ai-interviewer-xi-indol.vercel.app/",
    githubUrl: "https://github.com/vineetj12/ai-interviewer",
    content: (
      <div className="text-white">
        <h2 className="text-xl font-bold">🎤 AI Interviewer</h2>
        <p>AI-driven mock interviews with automated feedback and scoring.</p>
        <p className="text-sm mt-2">Tech: React, Node.js, OpenAI API</p>
        <div className="flex gap-3 mt-4">
          <a href="https://ai-interviewer-xi-indol.vercel.app/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded text-sm transition">
            Live Project
          </a>
          <a href="https://github.com/vineetj12/ai-interviewer" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded text-sm transition">
            GitHub Code
          </a>
        </div>
      </div>
    ),
    className: "h-[300px]",
    thumbnail: "/picture/ai-interview.png",
  },
  {
    id: 3,
    label: "URL Shortener",
    url: "https://shorturl-ten-mocha.vercel.app/",
    githubUrl: "https://github.com/vineetj12/url_shortener",
    content: (
      <div className="text-white">
        <h2 className="text-xl font-bold">🔗 URL Shortener</h2>
        <p>Fast, simple link shortener with automated deployment.</p>
        <p className="text-sm mt-2">Tech: Next.js, TypeScript, PostgreSQL</p>
        <div className="flex gap-3 mt-4">
          <a href="https://shorturl-ten-mocha.vercel.app/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded text-sm transition">
            Live Project
          </a>
          <a href="https://github.com/vineetj12/url_shortener" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded text-sm transition">
            GitHub Code
          </a>
        </div>
      </div>
    ),
    className: "h-[300px]",
    thumbnail: "/picture/url.png", 
  },
  {
    id: 4,
    label: "VibeNet",
    url: "https://vineetj12-vibenet.vercel.app/",
    githubUrl: "https://github.com/vineetj12/vibenet",
    content: (
      <div className="text-white">
        <h2 className="text-xl font-bold">📹 VibeNet</h2>
        <p>Real-time WebRTC video chat app with room management and optional recording.</p>
        <p className="text-sm mt-2">Tech: React, TypeScript, Vite, Tailwind CSS, WebRTC, WebSocket</p>
        <div className="flex gap-3 mt-4">
          <a href="https://vineetj12-vibenet.vercel.app/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded text-sm transition">
            Live Project
          </a>
          <a href="https://github.com/vineetj12/vibenet" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded text-sm transition">
            GitHub Code
          </a>
        </div>
      </div>
    ),
    className: "md:col-span-2",
    thumbnail: "/picture/vibenet.png", 
  }
];

export default cards;
