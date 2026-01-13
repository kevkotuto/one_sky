import Link from 'next/link'
import { Home } from 'lucide-react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-deep-space via-midnight-blue to-deep-space" />

      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-cyber-cyan/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-aurora-violet/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      <Container className="relative z-10 text-center">
        <div className="space-y-6">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-aurora-violet">
            404
          </h1>

          <h2 className="text-4xl font-bold text-lunar-white">
            Page introuvable
          </h2>

          <p className="text-xl text-nebula-gray max-w-2xl mx-auto">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>

          <div className="flex items-center justify-center pt-8">
            <Link href="/">
              <Button size="lg" className="group">
                <Home className="mr-2 w-5 h-5" />
                Retour à l'accueil
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}
