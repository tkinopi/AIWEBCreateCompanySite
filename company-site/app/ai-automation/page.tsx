'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Footer from '@/components/Footer'

export default function AIAutomationPage() {
  return (
    <main>
      <section className="min-h-screen bg-gradient-to-br from-pink-500 to-pink-700 flex items-center">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8">
              AI Automation
            </h1>
            <p className="text-white text-xl mb-8">
              業務自動化AI｜人的作業を80%削減
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block"
            >
              <button className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-pink-500 transition-all duration-300 group">
                <ArrowRight className="text-white group-hover:text-pink-500" size={32} />
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-96 bg-gray-800 rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800"
                alt="AI Automation"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-75 rounded p-2 flex gap-4 text-white text-xs">
                <span>01</span>
                <span>02</span>
                <span>03</span>
                <span>04</span>
                <span>05</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-12">Automation Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Process Automation</h3>
              <p className="text-gray-400">
                RPAとAIを組み合わせ、複雑な業務プロセスを完全自動化
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Content Generation</h3>
              <p className="text-gray-400">
                AIがコンテンツ作成からSEO最適化まで完全サポート
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Data Analytics</h3>
              <p className="text-gray-400">
                AIがデータを分析し、ビジネスインサイトを自動抽出
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}