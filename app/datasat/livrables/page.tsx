import { FileJson, FileImage, Database, Code } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'

const deliverables = [
  { icon: <FileImage size={32} />, title: 'Images Géoréférencées', description: 'GeoTIFF orthorectifiés, RGB + NIR' },
  { icon: <FileJson size={32} />, title: 'Analyses GeoJSON', description: 'Objets détectés et classifications' },
  { icon: <Database size={32} />, title: 'Bases de Données', description: 'PostgreSQL/PostGIS, exports CSV' },
  { icon: <Code size={32} />, title: 'APIs REST', description: 'Accès programmatique temps réel' },
]

export default function LivrablesPage() {
  return (
    <>
      <PageHeader badge="DataSAT" subtitle="LIVRABLES" title="Formats de Sortie"
        description="Nos plateformes DataSAT délivrent des données structurées et intégrables." />
      <Section>
        <div className="grid md:grid-cols-2 gap-8">
          {deliverables.map((d, i) => <Card key={i} {...d} />)}
        </div>
      </Section>
    </>
  )
}
