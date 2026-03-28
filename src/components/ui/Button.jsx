import { forwardRef } from 'react'
import { motion } from 'framer-motion'

const variants = {
  primary: "bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40",
  secondary: "bg-dark-100 dark:bg-dark-800 hover:bg-dark-200 dark:hover:bg-dark-700 text-dark-900 dark:text-dark-100",
  outline: "border-2 border-primary-500 text-primary-600 dark:text-primary-400 hover:bg-primary-500 hover:text-white",
  ghost: "text-dark-600 dark:text-dark-400 hover:text-dark-900 dark:hover:text-dark-100 hover:bg-dark-100 dark:hover:bg-dark-800",
}

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
}

const Button = forwardRef(({ 
  children, 
  variant = "primary", 
  size = "md", 
  className = "", 
  icon: Icon,
  iconPosition = "left",
  loading = false,
  disabled = false,
  as = "button",
  ...props 
}, ref) => {
  const Component = as === 'a' ? motion.a : motion.button
  
  return (
    <Component
      ref={ref}
      className={`
        inline-flex items-center justify-center gap-2 
        font-semibold rounded-xl
        transition-all duration-200
        focus-ring
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      )}
      {!loading && Icon && iconPosition === "left" && <Icon className="w-5 h-5" />}
      {children}
      {!loading && Icon && iconPosition === "right" && <Icon className="w-5 h-5" />}
    </Component>
  )
})

Button.displayName = 'Button'

export default Button
