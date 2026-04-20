import { skills } from '../data/skills'

// About component - displays detailed introduction and skills list
const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-800/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          关于<span className="gradient-text">我</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-16">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              我是一名拥有5年经验的全栈开发工程师，专注于使用现代 Web 技术构建高性能、可扩展的应用程序。
              我热爱技术，喜欢挑战复杂的问题，并始终追求代码质量和用户体验的完美结合。
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              在过去的几年中，我参与了多个大型项目的开发，从前端界面到后端架构，积累了丰富的实战经验。
              我擅长使用 React、TypeScript、Node.js 等技术栈，同时也对 UI/UX 设计有着深入的理解。
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              除了技术能力，我还具备良好的团队协作精神和项目管理能力，能够有效地与产品、设计等团队沟通合作，
              确保项目按时高质量交付。
            </p>
          </div>

          {/* Skills Grid */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">技能专长</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="bg-gray-800/50 rounded-lg p-4 text-center hover:bg-gray-800 transition-colors duration-300"
                >
                  <div className="text-3xl mb-2">{skill.icon}</div>
                  <div className="font-semibold">{skill.name}</div>
                  <div className="text-sm text-gray-400 mt-1">{skill.level}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About