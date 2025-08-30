'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const KnowledgeSection = () => {
  return (
    <section className="min-h-screen bg-gray-800 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8">
            AI Technology<br />
            Insights
          </h2>
          <p className="text-white text-lg mb-12 max-w-2xl mx-auto">
            最先端のAI技術とWeb制作の融合。
            革新的なソリューションと成功事例を通じて、未来のデジタル体験をご提案します。
          </p>
          
          <Link href="/contact">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block"
            >
              <button className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group mx-auto">
                <ArrowRight className="text-white group-hover:text-black" size={32} />
              </button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default KnowledgeSection