import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, MapPin, Clock, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { personalInfo, socialLinks } from '../../data/portfolioData'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState(null) // null, 'loading', 'success', 'error'
  const [errors, setErrors] = useState({})

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('loading')
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // In production, replace with actual API call
    setStatus('success')
    setFormData({ name: '', email: '', subject: '', message: '' })
    
    // Reset status after 5 seconds
    setTimeout(() => setStatus(null), 5000)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: null
    },
    {
      icon: Clock,
      label: 'Response Time',
      value: 'Within 24 hours',
      href: null
    }
  ]

  return (
    <section id="contact" className="py-20 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Get In Touch"
          subtitle="Let's connect"
        />

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">
              Let's work together
            </h3>
            <p className="text-dark-600 dark:text-dark-400 mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. 
              Feel free to reach out!
            </p>

            {/* Contact details */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((item, index) => {
                const Icon = item.icon
                const content = (
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-dark-50 dark:bg-dark-800/50 hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors">
                    <div className="p-3 rounded-xl bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-dark-500 dark:text-dark-400 uppercase tracking-wider">
                        {item.label}
                      </p>
                      <p className="font-medium text-dark-900 dark:text-white">
                        {item.value}
                      </p>
                    </div>
                  </div>
                )
                
                return item.href ? (
                  <motion.a
                    key={index}
                    href={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="block"
                  >
                    {content}
                  </motion.a>
                ) : (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {content}
                  </motion.div>
                )
              })}
            </div>

            {/* Social links */}
            <div>
              <p className="text-sm font-medium text-dark-900 dark:text-white mb-4">
                Find me on
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-all"
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
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-white dark:bg-dark-900 rounded-2xl p-6 md:p-8 border border-dark-200 dark:border-dark-800 shadow-xl shadow-dark-900/5">
              {/* Status messages */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 mb-6 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 mb-6 rounded-xl bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300"
                >
                  <AlertCircle className="w-5 h-5" />
                  <span>Something went wrong. Please try again.</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`
                        w-full px-4 py-3 rounded-xl
                        bg-dark-50 dark:bg-dark-800
                        border ${errors.name ? 'border-red-500' : 'border-dark-200 dark:border-dark-700'}
                        text-dark-900 dark:text-white
                        placeholder:text-dark-400 dark:placeholder:text-dark-500
                        focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
                        transition-all
                      `}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`
                        w-full px-4 py-3 rounded-xl
                        bg-dark-50 dark:bg-dark-800
                        border ${errors.email ? 'border-red-500' : 'border-dark-200 dark:border-dark-700'}
                        text-dark-900 dark:text-white
                        placeholder:text-dark-400 dark:placeholder:text-dark-500
                        focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
                        transition-all
                      `}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="
                      w-full px-4 py-3 rounded-xl
                      bg-dark-50 dark:bg-dark-800
                      border border-dark-200 dark:border-dark-700
                      text-dark-900 dark:text-white
                      placeholder:text-dark-400 dark:placeholder:text-dark-500
                      focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
                      transition-all
                    "
                    placeholder="What's this about?"
                  />
                </div>

                {/* Message field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`
                      w-full px-4 py-3 rounded-xl resize-none
                      bg-dark-50 dark:bg-dark-800
                      border ${errors.message ? 'border-red-500' : 'border-dark-200 dark:border-dark-700'}
                      text-dark-900 dark:text-white
                      placeholder:text-dark-400 dark:placeholder:text-dark-500
                      focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
                      transition-all
                    `}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>

                {/* Submit button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={status === 'loading'}
                  icon={status === 'loading' ? Loader2 : Send}
                  iconPosition="right"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
