'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const BlogSection = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-white text-xl mb-8 max-w-3xl">
            AIとクリエイティビティの融合<br />
            最新テクノロジーが実現する<br />
            次世代のWeb体験を<br />
            あなたのビジネスに。
          </p>

          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-16">
            Blog
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800 rounded-lg overflow-hidden"
            >
              <div className="relative h-64">
                <Image 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800"
                  alt="Technology"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-cyan-500 text-white px-3 py-1 rounded text-sm">Technology</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-white text-xl font-bold mb-2">
                  生成AIを活用したWeb制作で開発期間を70%短縮した事例
                </h3>
                <p className="text-gray-400 text-sm">2024.08.28</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800 rounded-lg overflow-hidden"
            >
              <div className="relative h-64">
                <Image 
                  src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800"
                  alt="Corporate"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gray-600 text-white px-3 py-1 rounded text-sm">Corporate</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-white text-xl font-bold mb-2">
                  ChatGPTとMidjourneyで実現する、コンテンツ制作の完全自動化
                </h3>
                <p className="text-gray-400 text-sm">2024.08.27</p>
              </div>
            </motion.div>
          </div>

          <div className="mt-12 bg-gray-800 rounded-lg p-8">
            <h3 className="text-white text-2xl font-bold mb-4">AI Stack</h3>
            <p className="text-gray-400">
              OpenAI、Anthropic、Google AIなど最新のAI技術スタックを活用した開発事例
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogSection