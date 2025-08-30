'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Footer from '@/components/Footer'

export default function AIWebCreationPage() {
  return (
    <main>
      <section className="min-h-screen bg-gradient-to-br from-cyan-500 to-cyan-700 flex items-center">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8">
              AI Web Creation
            </h1>
            <p className="text-white text-xl mb-8">
              AIが設計から実装まで｜最速3日でサイト完成
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block"
            >
              <button className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-cyan-500 transition-all duration-300 group">
                <ArrowRight className="text-white group-hover:text-cyan-500" size={32} />
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
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800"
                alt="AI Web Creation"
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
          <h2 className="text-4xl font-bold text-white mb-12">AI-Powered Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-white mb-4">AI-Driven Development</h3>
              <p className="text-gray-400">
                GPT-4やClaudeを活用し、コード生成からテストまで完全自動化
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Intelligent Design</h3>
              <p className="text-gray-400">
                MidjourneyやDALL-E 3でデザインアセットを瞬時に生成
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-white mb-4">24/7 AI Support</h3>
              <p className="text-gray-400">
                AIチャットボットが24時間365日、サイトの運用をサポート
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}