import { motion } from 'framer-motion'

export default function Card({ 
  children, 
  className = "", 
  hover = true,
  gradient = false,
  ...props 
}) {
  return (
    <motion.div
      className={`
        relative rounded-2xl overflow-hidden
        bg-white dark:bg-dark-900
        border border-dark-200 dark:border-dark-800
        ${hover ? 'hover-lift cursor-pointer' : ''}
        ${gradient ? 'gradient-border' : ''}
        ${className}
      `}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function CardHeader({ children, className = "" }) {
  return (
    <div className={`p-6 pb-0 ${className}`}>
      {children}
    </div>
  )
}

export function CardContent({ children, className = "" }) {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  )
}

export function CardFooter({ children, className = "" }) {
  return (
    <div className={`p-6 pt-0 ${className}`}>
      {children}
    </div>
  )
}
