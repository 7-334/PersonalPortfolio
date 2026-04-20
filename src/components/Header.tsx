import { useEffect } from 'react'

interface HeaderProps {
  isMenuOpen: boolean
  toggleMenu: () => void
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, toggleMenu }) => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header')
      if (window.scrollY > 50) {
        header?.classList.add('bg-gray-900/90', 'backdrop-blur-sm')
        header?.classList.remove('bg-transparent')
      } else {
        header?.classList.add('bg-transparent')
        header?.classList.remove('bg-gray-900/90', 'backdrop-blur-sm')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold gradient-text">
            Portfolio
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#hero" className="hover:text-blue-400 transition-colors">首页</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">关于我</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">项目展示</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">联系方式</a>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden flex items-center text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg 
              className={`w-6 h-6 transition-transform ${isMenuOpen ? 'rotate-90' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen 
            ? 'max-h-64 mt-4 opacity-100' 
            : 'max-h-0 mt-0 opacity-0'
        }`}>
          <div className="py-2 space-y-2 bg-gray-800 rounded-lg p-4">
            <a 
              href="#hero" 
              className="block hover:text-blue-400 transition-colors"
              onClick={toggleMenu}
            >
              首页
            </a>
            <a 
              href="#about" 
              className="block hover:text-blue-400 transition-colors"
              onClick={toggleMenu}
            >
              关于我
            </a>
            <a 
              href="#projects" 
              className="block hover:text-blue-400 transition-colors"
              onClick={toggleMenu}
            >
              项目展示
            </a>
            <a 
              href="#contact" 
              className="block hover:text-blue-400 transition-colors"
              onClick={toggleMenu}
            >
              联系方式
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header