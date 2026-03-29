import { motion } from 'framer-motion'
import { Code2, Coffee, Zap, Users, Award, Target } from 'lucide-react'
import { personalInfo, aboutStats } from '../../data/portfolioData'
import SectionHeading from '../ui/SectionHeading'
import AvatarImage from '../../assets/images/Avatar2.jpeg'

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code Advocate",
      description: "Writing maintainable, well-documented code that scales"
    },
    {
      icon: Zap,
      title: "Performance Focused",
      description: "Optimizing for speed and exceptional user experiences"
    },
    {
      icon: Users,
      title: "Team Collaborator",
      description: "Working effectively in agile, cross-functional teams"
    },
    {
      icon: Target,
      title: "Problem Solver",
      description: "Tackling complex challenges with creative solutions"
    }
  ]

  return (
    <section id="about" className="py-20 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="Get to know me"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image / Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                <img
                  src={AvatarImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent" />
              </div>

              {/* Stats card overlay */}
              <motion.div
                className="absolute -bottom-6 -right-6 glass-card p-6 shadow-xl max-w-xs"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="grid grid-cols-2 gap-4">
                  {aboutStats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                      <div className="text-xs text-dark-600 dark:text-dark-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Decorative element */}
              <div className="absolute -z-10 -top-4 -left-4 w-full h-full rounded-2xl border-2 border-primary-500/30" />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-dark-900 dark:text-white mb-6">
              Passionate about creating impactful digital experiences
            </h3>
            
            <div className="space-y-4 text-dark-600 dark:text-dark-400 mb-8">
              <p className="leading-relaxed">
                {personalInfo.description}
              </p>
              <p className="leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or taking online courses.
              </p>
            </div>

            {/* Highlights grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-dark-50 dark:bg-dark-800/50"
                  >
                    <div className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-900 dark:text-white text-sm">
                        {highlight.title}
                      </h4>
                      <p className="text-xs text-dark-500 dark:text-dark-400 mt-1">
                        {highlight.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Fun fact */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 border border-primary-100 dark:border-primary-800">
              <Coffee className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              <div>
                <p className="text-sm text-dark-900 dark:text-white font-medium">
                  Fun fact: I've consumed approximately
                </p>
                <p className="text-xs text-dark-600 dark:text-dark-400">
                  <span className="font-bold text-primary-600 dark:text-primary-400">2,847 cups of coffee</span> while writing code
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
