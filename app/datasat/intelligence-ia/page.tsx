import { Brain, Eye, Zap, Target } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'

const aiFeatures = [
  { icon: <Eye size={32} />, title: 'Détection d\'Objets', 
    description: 'Identification automatique de bâtiments, véhicules, navires, cultures' },
  { icon: <Target size={32} />, title: 'Détection de Changements', 
    description: 'Comparaison temporelle pour identifier les modifications' },
  { icon: <Brain size={32} />, title: 'Classification Intelligente', 
    description: 'Catégorisation automatique par type, usage, état' },
  { icon: <Zap size={32} />, title: 'Prédiction', 
    description: 'Anticipation des évolutions futures basée sur l\'historique' },
]

export default function IntelligenceIAPage() {
  return (
    <>
      <PageHeader badge="DataSAT" subtitle="INTELLIGENCE ARTIFICIELLE" 
        title="IA Géospatiale"
        description="Nos modèles d\'IA propriétaires transforment les images satellitaires en insights actionnables." />
      <Section>
        <div className="grid md:grid-cols-2 gap-8">
          {aiFeatures.map((f, i) => <Card key={i} {...f} />)}
        </div>
      </Section>
    </>
  )
}
