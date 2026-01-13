'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { SITE_CONFIG, NAVIGATION } from '@/lib/constants'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import AnimatedLogo from '@/components/ui/AnimatedLogo'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={'fixed top-0 w-full z-50 transition-all duration-300 ' + (scrolled ? 'bg-deep-space/95 backdrop-blur-md' : 'bg-transparent')}
    >
      <Container>
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="transition-transform group-hover:scale-105">
              <AnimatedLogo size={60} />
            </div>
            <div className="text-lunar-white font-bold text-xl tracking-wider group-hover:text-cyber-cyan transition-colors">
              {SITE_CONFIG.name}
            </div>
          </Link>

          {/* Desktop Navigation with shadcn/ui NavigationMenu */}
          <NavigationMenu className="hidden lg:flex [&_[data-slot=navigation-menu-viewport]]:bg-midnight-blue/98 [&_[data-slot=navigation-menu-viewport]]:backdrop-blur-xl [&_[data-slot=navigation-menu-viewport]]:border-stellar-blue/30">
            <NavigationMenuList>
              {NAVIGATION.main.map((item) => (
                <NavigationMenuItem key={item.name}>
                  {item.children ? (
                    <>
                      <NavigationMenuTrigger className="bg-transparent text-lunar-white hover:text-cyber-cyan hover:bg-cosmic-blue/10 data-[state=open]:bg-cosmic-blue/20 data-[state=open]:text-cyber-cyan">
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid w-[calc(100vw-2rem)] md:w-[500px] lg:w-[600px] max-w-[600px] grid-cols-2 gap-1 p-2">
                          {item.children.map((child) => (
                            <NavigationMenuLink key={child.name} asChild>
                              <Link
                                href={child.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-cosmic-blue/20 hover:text-cyber-cyan focus:bg-cosmic-blue/20 focus:text-cyber-cyan"
                              >
                                <div className="text-sm font-medium leading-none text-lunar-white">
                                  {child.name}
                                </div>
                                {child.description && (
                                  <p className="line-clamp-2 text-xs leading-snug text-nebula-gray">
                                    {child.description}
                                  </p>
                                )}
                              </Link>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className="bg-transparent text-lunar-white hover:text-cyber-cyan hover:bg-cosmic-blue/10 px-4 py-2 text-sm font-medium rounded-md inline-flex items-center"
                      >
                        {item.name}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden lg:block">
            <Link href="/contact">
              <Button size="sm">Nous contacter</Button>
            </Link>
          </div>

          <button
            className="lg:hidden text-lunar-white hover:text-cyber-cyan transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu with Opaque Background */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-20 bg-deep-space/98 backdrop-blur-lg">
            <div className="py-6 px-4 overflow-y-auto h-full">
              <nav className="flex flex-col space-y-4">
                {NAVIGATION.main.map((item) => (
                  <div key={item.name} className="border-b border-stellar-blue/20 pb-4 last:border-b-0">
                    <Link
                      href={item.href}
                      className="block text-lunar-white hover:text-cyber-cyan transition-colors duration-200 font-medium mb-3"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.children && (
                      <div className="space-y-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block p-3 bg-cosmic-blue/10 rounded-lg hover:bg-cosmic-blue/20 transition-all duration-200"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <div className="text-sm font-medium text-lunar-white mb-1">{child.name}</div>
                            {child.description && (
                              <div className="text-xs text-nebula-gray/70 leading-relaxed">{child.description}</div>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full mt-4">Nous contacter</Button>
                </Link>
              </nav>
            </div>
          </div>
        )}
      </Container>
    </header>
  )
}
