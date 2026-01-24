import { Eye, MapPin, Clock, Camera } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'

const features = [
  { icon: <Eye size={32} />, title: 'Surveillance 24/7',
    description: "Monitoring continu de vos zones d'intérêt critiques" },
  { icon: <MapPin size={32} />, title: 'Géolocalisation Précise',
    description: "Résolution jusqu'à 25cm pour une précision maximale" },
  { icon: <Clock size={32} />, title: 'Historique Complet', 
    description: 'Accès aux archives pour analyse temporelle' },
  { icon: <Camera size={32} />, title: 'Multi-Spectral', 
    description: 'Imagerie optique, infrarouge et radar' },
]

export default function ObservationPage() {
  return (
    <>
      <PageHeader subtitle="SOLUTIONS" title="Observation & Monitoring"
        description="Surveillez en continu vos actifs, territoires et infrastructures critiques avec notre constellation satellitaire." />
      <Section>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((f, i) => <Card key={i} {...f} />)}
        </div>
      </Section>
    </>
  )
}
