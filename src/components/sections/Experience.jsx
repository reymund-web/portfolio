import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Award, ExternalLink, Calendar, MapPin } from 'lucide-react'
import { experience, education, certifications } from '../../data/portfolioData'
import SectionHeading from '../ui/SectionHeading'

export default function Experience() {
  const formatDate = (dateStr) => {
    if (dateStr === 'Present') return 'Present'
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
  }

  return (
    <section id="experience" className="py-20 md:py-28 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Experience & Education"
          subtitle="My journey"
        />

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
          {/* Work Experience */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Work Experience
              </h3>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500" />

              {/* Experience items */}
              <div className="space-y-8">
                {experience.map((job, index) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-12"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-white dark:bg-dark-800 border-4 border-primary-500 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary-500" />
                    </div>

                    {/* Content card */}
                    <div className="bg-white dark:bg-dark-900 rounded-xl p-6 border border-dark-200 dark:border-dark-800 hover-lift">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h4 className="text-lg font-bold text-dark-900 dark:text-white">
                            {job.role}
                          </h4>
                          <a
                            href={job.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-primary-600 dark:text-primary-400 hover:underline font-medium"
                          >
                            {job.company}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                        <div className="flex flex-col items-end gap-1 text-sm text-dark-500 dark:text-dark-400">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {formatDate(job.startDate)} - {formatDate(job.endDate)}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </span>
                        </div>
                      </div>

                      <p className="text-dark-600 dark:text-dark-400 text-sm mb-4">
                        {job.description}
                      </p>

                      {/* Achievements */}
                      <ul className="space-y-2 mb-4">
                        {job.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-dark-600 dark:text-dark-400">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs font-medium text-dark-600 dark:text-dark-400 bg-dark-100 dark:bg-dark-800 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-8">
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-dark-900 dark:text-white">
                  Education
                </h3>
              </div>

              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-dark-900 rounded-xl p-6 border border-dark-200 dark:border-dark-800"
                >
                  <h4 className="font-bold text-dark-900 dark:text-white mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-primary-600 dark:text-primary-400 font-medium text-sm mb-2">
                    {edu.school}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-dark-500 dark:text-dark-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {edu.startDate} - {edu.endDate}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {edu.location}
                    </span>
                  </div>
                  <p className="text-sm text-dark-600 dark:text-dark-400 mb-3">
                    {edu.description}
                  </p>
                  <ul className="space-y-1">
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-dark-500 dark:text-dark-400">
                        <span className="mt-1 w-1 h-1 rounded-full bg-accent-500 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-dark-900 dark:text-white">
                  Certifications
                </h3>
              </div>

              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <motion.a
                    key={index}
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="block bg-white dark:bg-dark-900 rounded-xl p-4 border border-dark-200 dark:border-dark-800 hover:border-primary-300 dark:hover:border-primary-700 transition-colors group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-dark-900 dark:text-white text-sm group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {cert.name}
                        </h4>
                        <p className="text-xs text-dark-500 dark:text-dark-400">
                          {cert.issuer} • {cert.date}
                        </p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-dark-400 group-hover:text-primary-500 transition-colors" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
