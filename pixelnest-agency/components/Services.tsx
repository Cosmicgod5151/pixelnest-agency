
'use client'
import { motion } from 'framer-motion'

const services = [
  {
    title: 'Web Design',
    description: 'We design responsive, user-focused websites built to convert. Every layout is tailored for performance and brand impact.',
  },
  {
    title: 'Branding & Identity',
    description: 'We craft brand systems that communicate clearly and stand out. From logos to tone of voice—we make you memorable.',
  },
  {
    title: 'SEO & Content Strategy',
    description: 'Your site should be seen. We optimize your SEO foundation and help you rank higher with conversion-driven content.',
  },
  {
    title: 'Digital Marketing',
    description: 'From social ads to growth campaigns—we strategize, run, and scale your marketing across all major platforms.',
  },
]

export default function Services() {
  return (
    <section className="bg-white py-16 px-4 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-gray-900 mb-12 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
