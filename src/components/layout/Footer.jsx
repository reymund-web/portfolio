import { motion } from 'framer-motion'
import { Heart, ArrowUp, Code2 } from 'lucide-react'
import { socialLinks, navLinks } from '../../data/portfolioData'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-dark-50 dark:bg-dark-900 border-t border-dark-200 dark:border-dark-800">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent" />

      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.a
              href="#"
              className="flex items-center gap-2 mb-4"
              whileHover={{ scale: 1.02 }}
              onClick={(e) => {
                e.preventDefault()
                scrollToTop()
              }}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center text-white">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-dark-900 dark:text-white">Reymund Patrick Marin Monterola</span>
            </motion.a>
            <p className="text-dark-600 dark:text-dark-400 max-w-sm mb-6">
              Building digital experiences that make a difference. Always learning, always creating.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-dark-900 dark:text-white mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-dark-600 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-dark-900 dark:text-white mb-4 uppercase tracking-wider">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:reymundpmonterola05@gmail.com"
                  className="text-dark-600 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  reymundpmonterola05@gmail.com
                </a>
              </li>
              <li className="text-dark-600 dark:text-dark-400">
                Putatan, Muntinlupa City, Philippines
              </li>
              <li>
                <span className="inline-flex items-center gap-2 px-3 py-1 text-sm text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/30 rounded-full">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  Available for work
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-dark-200 dark:border-dark-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-dark-600 dark:text-dark-400 flex items-center gap-1">
            © {currentYear} Reymund Patrick Marin Monterola. Made with 
            <Heart className="w-4 h-4 text-red-500 fill-red-500" /> 
            and React.
          </p>
          
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-dark-600 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            whileHover={{ y: -2 }}
          >
            Back to top
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
