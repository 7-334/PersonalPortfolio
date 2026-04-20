// Footer component - displays copyright and additional links
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-lg font-semibold gradient-text">Portfolio</div>
            <div className="text-gray-500 text-sm">© 2024 二狗. 保留所有权利.</div>
          </div>

          <div className="flex gap-6">
            <a 
              href="#hero" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              首页
            </a>
            <a 
              href="#about" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              关于我
            </a>
            <a 
              href="#projects" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              项目展示
            </a>
            <a 
              href="#contact" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              联系方式
            </a>
          </div>

          <div className="mt-4 md:mt-0 text-gray-500 text-sm">
            Built with React & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer