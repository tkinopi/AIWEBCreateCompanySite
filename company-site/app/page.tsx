import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import KnowledgeSection from '@/components/KnowledgeSection'
import ServiceShowcase from '@/components/ServiceShowcase'
import BlogSection from '@/components/BlogSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <KnowledgeSection />
      <ServiceShowcase />
      <BlogSection />
      <Footer />
    </main>
  );
}
