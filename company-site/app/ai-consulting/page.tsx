'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'

export default function AIConsultingPage() {
  return (
    <main>
      <section className="min-h-screen bg-gradient-to-br from-green-500 to-green-700 flex items-center">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8">
              AI Consulting
            </h1>
            <p className="text-white text-xl mb-8">
              AI導入コンサル｜最適なソリューション提案
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block"
            >
              <button className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-green-500 transition-all duration-300 group">
                <ArrowRight className="text-white group-hover:text-green-500" size={32} />
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
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800"
                alt="AI Consulting"
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
          <h2 className="text-4xl font-bold text-white mb-12">AI Consulting Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-white mb-4">AI Strategy</h3>
              <p className="text-gray-400">
                ビジネス目標に合わせたAI戦略の立案と実行ロードマップ作成
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Tool Selection</h3>
              <p className="text-gray-400">
                ChatGPT、Claude、Geminiなど最適なAIツールの選定と導入支援
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-white mb-4">AI Training</h3>
              <p className="text-gray-400">
                社員向けAI活用研修とプロンプトエンジニアリング講座
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-12">Content Marketing with AI</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-900 p-8 rounded-lg"
            >
              <h3 className="text-3xl font-bold text-white mb-6">AIコンテンツ生成</h3>
              <ul className="text-gray-400 space-y-3">
                <li>• SEO最適化された記事の自動生成</li>
                <li>• ソーシャルメディア投稿の自動作成</li>
                <li>• 動画スクリプトとナレーション生成</li>
                <li>• 多言語コンテンツの即時展開</li>
              </ul>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-900 p-8 rounded-lg"
            >
              <h3 className="text-3xl font-bold text-white mb-6">パーソナライゼーション</h3>
              <ul className="text-gray-400 space-y-3">
                <li>• ユーザー行動分析による最適化</li>
                <li>• AIによる個別カスタマイズ配信</li>
                <li>• リアルタイムコンテンツ最適化</li>
                <li>• 予測分析による戦略立案</li>
              </ul>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-green-500 to-blue-500 p-8 rounded-lg text-center"
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              AIが変えるコンテンツマーケティングの未来
            </h3>
            <p className="text-white text-lg mb-6">
              月間1000本のコンテンツを自動生成、CTR300%向上の実績
            </p>
            <Link href="/contact">
              <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
                無料相談を予約する
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}