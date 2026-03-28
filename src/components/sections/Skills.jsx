import { motion } from 'framer-motion'
import { skills } from '../../data/portfolioData'
import SectionHeading from '../ui/SectionHeading'
import Card, { CardContent } from '../ui/Card'

export default function Skills() {
  const colorClasses = {
    primary: {
      bg: 'bg-blue-100 dark:bg-blue-900/30',
      text: 'text-blue-600 dark:text-blue-400',
      progress: 'bg-gradient-to-r from-blue-600 to-blue-400'
    },
    accent: {
      bg: 'bg-purple-100 dark:bg-purple-900/30',
      text: 'text-purple-600 dark:text-purple-400',
      progress: 'bg-gradient-to-r from-purple-600 to-purple-400'
    },
    emerald: {
      bg: 'bg-emerald-100 dark:bg-emerald-900/30',
      text: 'text-emerald-600 dark:text-emerald-400',
      progress: 'bg-gradient-to-r from-emerald-600 to-emerald-400'
    },
    orange: {
      bg: 'bg-orange-100 dark:bg-orange-900/30',
      text: 'text-orange-600 dark:text-orange-400',
      progress: 'bg-gradient-to-r from-orange-600 to-orange-400'
    }
  }

  return (
    <section id="skills" className="py-20 md:py-28 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="What I work with"
        />

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {Object.entries(skills).map(([key, category], categoryIndex) => {
            const Icon = category.icon
            const colors = colorClasses[category.color]
            
            return (
              <Card key={key} hover={false} className="overflow-visible">
                <CardContent className="p-6 lg:p-8">
                  {/* Category header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl ${colors.bg} ${colors.text}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-dark-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills list */}
                  <div className="space-y-4">
                    {category.items.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-dark-700 dark:text-dark-300">
                            {skill.name}
                          </span>
                          <span className="text-xs font-semibold text-dark-500 dark:text-dark-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 bg-dark-200 dark:bg-dark-700 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full rounded-full ${colors.progress}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 1, 
                              delay: (categoryIndex * 0.1) + (skillIndex * 0.05),
                              ease: "easeOut"
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Additional tech badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-dark-500 dark:text-dark-400 mb-4">
            Also experienced with
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {['Webpack', 'Vite', 'Jest', 'Cypress', 'Storybook', 'Figma', 'Jira', 'Notion'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm font-medium text-dark-600 dark:text-dark-400 bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 rounded-full hover:border-primary-300 dark:hover:border-primary-700 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
