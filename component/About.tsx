import React from 'react'

const About = () => {
  return (
    <div id="about" className="min-h-screen bg-black-100 p-10 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-300 mb-6">
              Hi, I'm <span className="text-blue-400 font-bold">Vineet</span>, a passionate Full-Stack Developer with a keen interest in building scalable real-time applications and integrating AI into practical tools.
            </p>
            
            <p className="text-lg text-gray-300 mb-6">
              Currently pursuing <span className="font-semibold">B.Tech CSE at NIT Delhi (2023 - 2027)</span>, I love exploring cloud infrastructure, distributed systems, and DevOps practices.
            </p>

            <p className="text-lg text-gray-300 mb-6">
              I'm always open to collaboration, learning new technologies, and working on projects that solve real-world problems.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a href="https://www.linkedin.com/in/vineet0123" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-full text-white transition">
                LinkedIn
              </a>
              <a href="https://leetcode.com/u/01234vineet/" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-yellow-600 hover:bg-yellow-700 rounded-full text-white transition">
                LeetCode
              </a>
              <a href="https://github.com/vineetj12" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-gray-700 hover:bg-gray-800 rounded-full text-white transition">
                GitHub
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-6 rounded-lg border border-blue-500/30">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Key Highlights</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <span className="text-blue-400">✓</span>
                  <span>216+ GitHub contributions in the last year</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-400">✓</span>
                  <span>Expert in building real-time applications with WebSockets</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-400">✓</span>
                  <span>Passionate about AI integration and automation</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-400">✓</span>
                  <span>Cloud & DevOps learner (AWS, Docker, Kubernetes)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
