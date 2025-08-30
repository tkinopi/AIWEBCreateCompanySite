'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'AI Web Creation',
    subtitle: 'AIが設計から実装まで',
    description: 'GPT-4とClaudeを活用し、要件定義からデプロイまで全工程をAIが担当。最速3日でプロフェッショナルなWebサイトを構築します。',
    color: 'bg-gradient-to-br from-cyan-400 via-cyan-500 to-cyan-600',
    textColor: 'text-cyan-500',
    link: '/ai-web-creation',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200',
    stats: ['01', '02', '03', '04', '05']
  },
  {
    title: 'AI Automation',
    subtitle: '業務自動化AI',
    description: 'RPAとAIの融合により、繰り返し作業から複雑な判断業務まで自動化。人的作業を80%削減し、生産性を飛躍的に向上させます。',
    color: 'bg-gradient-to-br from-pink-400 via-pink-500 to-pink-600',
    textColor: 'text-pink-500',
    link: '/ai-automation',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200',
    stats: ['01', '02', '03', '04', '05']
  },
  {
    title: 'AI Consulting',
    subtitle: 'AI導入コンサルティング',
    description: '最適なAIツールの選定から導入、運用まで一貫してサポート。ChatGPT、Claude、Geminiなど、貴社に最適なソリューションを提案します。',
    color: 'bg-gradient-to-br from-green-400 via-green-500 to-green-600',
    textColor: 'text-green-500',
    link: '/ai-consulting',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200',
    stats: ['01', '02', '03', '04', '05']
  }
]

const ServiceShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isSticky, setIsSticky] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !containerRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      
      // セクションが画面内に入ったら固定
      if (rect.top <= 0 && rect.bottom > window.innerHeight) {
        setIsSticky(true)
        
        // スクロール量に応じてサービスを切り替え
        const scrollProgress = Math.abs(rect.top) / (rect.height - window.innerHeight)
        const serviceIndex = Math.min(
          Math.floor(scrollProgress * services.length),
          services.length - 1
        )
        setCurrentIndex(serviceIndex)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative bg-gray-900 w-full"
      style={{ height: `${services.length * 100}vh` }}
    >
      <div
        ref={containerRef}
        className={`${isSticky ? 'fixed top-0' : 'absolute'} inset-x-0 h-screen w-full bg-gray-900`}
        style={{ bottom: isSticky ? 'auto' : '0' }}
      >
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full flex items-center"
            >
              <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
              
              {/* Left Side - Text Content */}
              <div className="relative z-10 order-2 lg:order-1">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <div className="mb-4 lg:mb-6">
                    <span className={`inline-block px-3 py-1 lg:px-4 lg:py-2 rounded-full ${services[currentIndex].color} text-white text-xs lg:text-sm font-semibold`}>
                      Service {String(currentIndex + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-3 lg:mb-6">
                    {services[currentIndex].title}
                  </h2>
                  <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 mb-3 lg:mb-6">
                    {services[currentIndex].subtitle}
                  </p>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 lg:mb-8 leading-relaxed">
                    {services[currentIndex].description}
                  </p>
                  
                  <Link href={services[currentIndex].link}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="group flex items-center gap-3 lg:gap-4 text-white"
                    >
                      <span className="text-base lg:text-lg font-semibold">詳しく見る</span>
                      <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-full border-2 border-white flex items-center justify-center group-hover:bg-white transition-all duration-300">
                        <ArrowRight className="text-white group-hover:text-gray-900" size={20} />
                      </div>
                    </motion.button>
                  </Link>
                </motion.div>
              </div>

              {/* Right Side - Visual Content */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="relative order-1 lg:order-2 w-full"
              >
                <div className={`relative rounded-xl lg:rounded-2xl overflow-hidden ${services[currentIndex].color} p-0.5 lg:p-1 w-full`}>
                  <div className="relative bg-gray-900 rounded-xl lg:rounded-2xl overflow-hidden w-full">
                    <div className="relative h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px] w-full">
                      <Image
                        src={services[currentIndex].image}
                        alt={services[currentIndex].title}
                        fill
                        className="object-cover"
                      />
                      
                      {/* Overlay Controls */}
                      <div className="absolute bottom-2 left-2 right-2 lg:bottom-4 lg:left-4 lg:right-4 bg-black bg-opacity-75 rounded-lg p-2 lg:p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex gap-2 lg:gap-4">
                            {services[currentIndex].stats.map((stat) => (
                              <span key={stat} className="text-white text-xs lg:text-sm opacity-70">
                                {stat}
                              </span>
                            ))}
                          </div>
                          <div className="flex gap-1 lg:gap-2">
                            {services.map((_, index) => (
                              <div 
                                key={index}
                                className={`h-1.5 lg:h-2 rounded-full transition-all duration-300 ${
                                  index === currentIndex ? 'bg-white w-6 lg:w-8' : 'bg-white opacity-30 w-1.5 lg:w-2'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Indicator - Hidden on mobile */}
        <div className="hidden lg:flex absolute right-4 xl:right-8 top-1/2 transform -translate-y-1/2 flex-col gap-4 z-20">
          {services.map((_, index) => (
            <motion.div
              key={index}
              className={`w-1 h-12 rounded-full transition-all duration-300 ${
                index === currentIndex ? services[currentIndex].color : 'bg-gray-700'
              }`}
              animate={{
                scale: index === currentIndex ? 1.2 : 1,
              }}
            />
          ))}
        </div>
        
        {/* Mobile Progress Dots - Bottom of screen */}
        <div className="lg:hidden absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {services.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-white w-8' : 'bg-white opacity-30 w-2'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceShowcase