'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <section className="min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] font-bold mb-8 px-4">
              Let's Create
            </h2>
            
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block"
              >
                <button className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group mx-auto">
                  <ArrowRight className="text-white group-hover:text-black" size={40} />
                </button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="py-12 sm:py-16 md:py-20 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
            <div>
              <h3 className="text-xl font-bold mb-6">Office</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="text-gray-600">📍</span> Tokyo
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gray-600">📍</span> Osaka
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gray-600">📍</span> San Francisco
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gray-600">📍</span> Singapore
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/overview" className="hover:text-white transition-colors">Overview</Link></li>
                <li><Link href="/culture" className="hover:text-white transition-colors">Culture</Link></li>
                <li><Link href="/leadership" className="hover:text-white transition-colors">Leadership</Link></li>
              </ul>

              <h3 className="text-xl font-bold mt-8 mb-6">Solutions</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/overview" className="hover:text-white transition-colors">Overview</Link></li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-500">🤖</span>
                  <Link href="/ai-web-creation" className="hover:text-white transition-colors">AI Web Creation</Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-pink-500">⚙️</span>
                  <Link href="/ai-automation" className="hover:text-white transition-colors">AI Automation</Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">💡</span>
                  <Link href="/ai-consulting" className="hover:text-white transition-colors">AI Consulting</Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-500">🚀</span>
                  <Link href="/ai-transformation" className="hover:text-white transition-colors">AI Transformation</Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">🎓</span>
                  <Link href="/ai-education" className="hover:text-white transition-colors">AI Education</Link>
                </li>
              </ul>

              <h3 className="text-xl font-bold mt-8 mb-6">Blog</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog Top</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Members</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/members" className="hover:text-white transition-colors">Members List</Link></li>
              </ul>

              <h3 className="text-xl font-bold mt-8 mb-6">Recruit</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/recruit/top" className="hover:text-white transition-colors">Top</Link></li>
                <li><Link href="/recruit/mid-career" className="hover:text-white transition-colors">Mid Career</Link></li>
                <li><Link href="/recruit/new-graduates" className="hover:text-white transition-colors">New Graduates</Link></li>
              </ul>

              <h3 className="text-xl font-bold mt-8 mb-6">Others</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/cookie" className="hover:text-white transition-colors">Cookie Policy</Link></li>
                <li><Link href="/security" className="hover:text-white transition-colors">Information Security</Link></li>
                <li><Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link></li>
                <li><Link href="/advertising" className="hover:text-white transition-colors">Advertising</Link></li>
                <li><Link href="/mail-magazine" className="hover:text-white transition-colors">Mail Magazine</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Social</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
              </ul>

              <h3 className="text-xl font-bold mt-8 mb-6">Tel</h3>
              <p className="text-gray-400">03-1234-5678</p>

              <h3 className="text-xl font-bold mt-8 mb-6">Address</h3>
              <p className="text-gray-400">
                1-2-3<br />
                Shibuya, Shibuya-ku, Tokyo<br />
                150-0002 Japan
              </p>
              <a href="#" className="text-gray-400 hover:text-white transition-colors mt-2 inline-block">
                Google maps
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 sm:py-24 md:py-32 border-t border-gray-800 overflow-hidden">
        <div className="container mx-auto px-4 max-w-full">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-7xl md:text-[10rem] lg:text-[12rem] xl:text-[16rem] font-black leading-none text-center break-words px-4"
          >
            NEXUS AI
          </motion.h1>
          <p className="text-center text-gray-400 mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-xl px-4">Building Tomorrow's Web Today</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer