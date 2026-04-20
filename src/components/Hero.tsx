// Hero component - displays the main landing section with introduction and profile image
const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              我是 <span className="gradient-text">二狗</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              AI入门选手
            </p>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl">
              欢迎来湖南大学找我
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="#projects" 
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:opacity-90 transition-opacity"
              >
                查看项目
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 border-2 border-gray-500 rounded-full font-semibold hover:border-blue-400 hover:text-blue-400 transition-colors"
              >
                联系我
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center md:justify-end animate-slide-up">
            <div className="relative">
              {/* Gradient circle background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              
              {/* Profile image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-800">
                <img 
                  src="/src/assets/images/human.png" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <svg 
            className="w-6 h-6 text-gray-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero