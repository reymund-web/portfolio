import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Code2, ExternalLink, CheckCircle } from 'lucide-react'
import Button from './Button'

export default function ProjectModal({ project, isOpen, onClose }) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [onClose])

  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-dark-900/80 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-dark-900 rounded-2xl shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm text-dark-600 dark:text-dark-400 hover:text-dark-900 dark:hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image */}
            <div className="relative aspect-video">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-dark-900 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-8 -mt-16 relative">
              {/* Category badge */}
              <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-primary-900/30 rounded-full">
                {project.category}
              </span>

              <h3 className="text-2xl md:text-3xl font-bold text-dark-900 dark:text-white mb-4">
                {project.title}
              </h3>

              <p className="text-dark-600 dark:text-dark-400 mb-6 leading-relaxed">
                {project.longDescription}
              </p>

              {/* Highlights */}
              {project.highlights && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-dark-900 dark:text-white mb-3 uppercase tracking-wider">
                    Key Features
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {project.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center gap-2 text-dark-600 dark:text-dark-400">
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        <span className="text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech stack */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-dark-900 dark:text-white mb-3 uppercase tracking-wider">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-sm font-medium text-dark-700 dark:text-dark-300 bg-dark-100 dark:bg-dark-800 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-4">
                {project.demo && (
                  <Button
                    as="a"
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={ExternalLink}
                    iconPosition="right"
                  >
                    Live Demo
                  </Button>
                )}
                {project.github && (
                  <Button
                    as="a"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    icon={Code2}
                  >
                    View Code
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
