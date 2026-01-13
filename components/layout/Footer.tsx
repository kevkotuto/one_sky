import Link from 'next/link'
import { Linkedin, Twitter } from 'lucide-react'
import { SITE_CONFIG, NAVIGATION, SOCIAL_LINKS } from '@/lib/constants'
import Container from '@/components/ui/Container'

export default function Footer() {
  return (
    <footer className="bg-midnight-blue border-t border-stellar-blue/30">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-1">
            <div className="text-cyber-cyan font-bold text-2xl mb-4">
              {SITE_CONFIG.name}
            </div>
            <p className="text-nebula-gray text-sm">
              {SITE_CONFIG.tagline}
            </p>
          </div>

          <div>
            <h3 className="text-lunar-white font-semibold mb-4">À PROPOS</h3>
            <ul className="space-y-2">
              {NAVIGATION.footer.apropos.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-nebula-gray hover:text-cyber-cyan transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lunar-white font-semibold mb-4">SOLUTIONS</h3>
            <ul className="space-y-2">
              {NAVIGATION.footer.solutions.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-nebula-gray hover:text-cyber-cyan transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lunar-white font-semibold mb-4">DATASAT</h3>
            <ul className="space-y-2">
              {NAVIGATION.footer.datasat.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-nebula-gray hover:text-cyber-cyan transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lunar-white font-semibold mb-4">LÉGAL</h3>
            <ul className="space-y-2">
              {NAVIGATION.footer.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-nebula-gray hover:text-cyber-cyan transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="mt-6">
              <h3 className="text-lunar-white font-semibold mb-4">SUIVEZ-NOUS</h3>
              <div className="flex space-x-4">
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-nebula-gray hover:text-cyber-cyan transition-colors duration-200"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={SOCIAL_LINKS.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-nebula-gray hover:text-cyber-cyan transition-colors duration-200"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-stellar-blue/30 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-nebula-gray text-sm">
              © 2026 {SITE_CONFIG.name}. Tous droits réservés.
            </div>
            <div className="text-nebula-gray text-sm space-x-4">
              <span>{SITE_CONFIG.email}</span>
              <span>|</span>
              <span>{SITE_CONFIG.phone}</span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
