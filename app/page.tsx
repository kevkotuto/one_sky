import Hero from '@/components/sections/Hero'
import Stats from '@/components/sections/Stats'
import BusinessActivities from '@/components/sections/BusinessActivities'
import Features from '@/components/sections/Features'
import DataSATPreview from '@/components/sections/DataSATPreview'
import CTA from '@/components/sections/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <BusinessActivities />
      <Features />
      <DataSATPreview />
      <CTA />
    </>
  )
}
