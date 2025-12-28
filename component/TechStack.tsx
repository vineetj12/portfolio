import React from 'react'

const TechStack = () => {
  const techCategories = [
    {
      title: "Languages",
      skills: ["Java", "Python", "JavaScript", "TypeScript"]
    },
    {
      title: "Frontend",
      skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "Prisma", "WebSockets"]
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Redis"]
    },
    {
      title: "DevOps & Cloud",
      skills: ["AWS", "Docker", "Kubernetes", "Vercel"]
    },
    {
      title: "Tools & Others",
      skills: ["Git", "GitHub", "Jest", "Mocha/Chai"]
    }
  ]

  return (
    <div id="tech" className="min-h-screen bg-black-100 p-10 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Tech Stack</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-lg p-6 hover:border-purple-500/50 transition"
            >
              <h3 className="text-xl font-bold mb-4 text-blue-400">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-slate-700 hover:bg-slate-600 text-gray-200 rounded-full text-sm transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4 text-blue-400">What I'm Currently Learning</h3>
          <p className="text-gray-300 text-lg">
            I'm actively exploring advanced cloud architectures, Kubernetes orchestration, and AI/ML integration into web applications. I'm also keen on exploring Rust and Go for high-performance backend services.
          </p>
        </div>
      </div>
    </div>
  )
}

export default TechStack
