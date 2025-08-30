'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const services = [
  {
    title: 'AI Web Creation',
    subtitle: 'AIが設計から実装まで｜最速3日でサイト完成',
    color: 'bg-cyan-500',
    link: '/ai-web-creation'
  },
  {
    title: 'AI Automation',
    subtitle: '業務自動化AI｜人的作業を80%削減',
    color: 'bg-pink-500',
    link: '/ai-automation'
  },
  {
    title: 'AI Consulting',
    subtitle: 'AI導入コンサル｜最適なソリューション提案',
    color: 'bg-green-500',
    link: '/ai-consulting'
  }
]

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href={service.link}>
                <div className={`${service.color} p-12 rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer`}>
                  <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-white text-sm opacity-90">{service.subtitle}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection