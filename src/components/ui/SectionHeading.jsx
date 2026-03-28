import { motion } from 'framer-motion'

export default function SectionHeading({ 
  title, 
  subtitle, 
  align = "center",
  className = "" 
}) {
  return (
    <motion.div 
      className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.span 
        className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-primary-900/30 rounded-full"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        {subtitle}
      </motion.span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 dark:text-white">
        {title}
      </h2>
    </motion.div>
  )
}
