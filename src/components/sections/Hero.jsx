import { personalInfo } from '../../data/portfolioData'
import AvatarImage from '../../assets/images/Avatar.jpg'
import { Download } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="py-20 md:py-32 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
              Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{personalInfo.name}</span>
            </h1>
            <p className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6">{personalInfo.title}</p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">{personalInfo.description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#projects" className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">View My Work</a>
              <a href="#contact" className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-gray-800 transition">Get in Touch</a>
              <a href={personalInfo.resumeUrl} download className="px-8 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition flex items-center justify-center gap-2"><Download className="w-5 h-5" />Resume</a>
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-blue-500/30 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
              <img src={AvatarImage} alt={personalInfo.name} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
