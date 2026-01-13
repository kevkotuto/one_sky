'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Rocket, CheckCircle } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const pocSchema = z.object({
  name: z.string().min(2, 'Nom requis'),
  email: z.string().email('Email invalide'),
  organization: z.string().min(2, 'Organisation requise'),
  phone: z.string().optional(),
  platform: z.string().min(1, 'Sélectionnez une plateforme'),
  useCase: z.string().min(20, 'Décrivez votre cas d\'usage (min 20 caractères)'),
})

type POCForm = z.infer<typeof pocSchema>

const platforms = ['SKY LOUPE', 'SKY SENTINEL', 'SKY FOREST', 'SKY FISH', 'SKY CADASTRE', 'SKY TRANSPORT', 'Autre']

const pocSteps = [
  { icon: <CheckCircle size={24} />, title: 'Semaine 1-2', desc: 'Atelier découverte et cadrage' },
  { icon: <CheckCircle size={24} />, title: 'Semaine 3-4', desc: 'Configuration et première livraison' },
  { icon: <CheckCircle size={24} />, title: 'Semaine 5-6', desc: 'Itérations et ajustements' },
  { icon: <CheckCircle size={24} />, title: 'Semaine 7-8', desc: 'Présentation résultats et next steps' },
]

export default function POCPage() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<POCForm>({
    resolver: zodResolver(pocSchema)
  })

  const onSubmit = async (data: POCForm) => {
    console.log('POC Request:', data)
    setSubmitted(true)
  }

  return (
    <>
      <PageHeader badge="DataSAT" subtitle="PROOF OF CONCEPT" title="Démarrer un POC Gratuit"
        description="Testez nos plateformes DataSAT sur votre cas d'usage en 6-8 semaines, sans engagement." />
      
      <Section className="bg-midnight-blue/30">
        <h2 className="text-3xl font-bold text-lunar-white mb-8 text-center">Déroulement du POC</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {pocSteps.map((step, i) => (
            <div key={i} className="text-center">
              <div className="bg-cosmic-blue/50 backdrop-blur-sm border border-stellar-blue/30 rounded-lg p-6">
                <div className="text-cyber-cyan mb-3">{step.icon}</div>
                <h3 className="text-lg font-semibold text-lunar-white mb-2">{step.title}</h3>
                <p className="text-nebula-gray text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        {submitted ? (
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-success-green/20 border border-success-green/50 rounded-lg p-8">
              <Rocket size={48} className="text-success-green mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-lunar-white mb-4">Demande envoyée !</h2>
              <p className="text-nebula-gray">
                Merci pour votre demande de POC. Notre équipe vous contactera sous 24-48h pour planifier 
                l\'atelier de cadrage.
              </p>
            </div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            <div className="bg-cosmic-blue/50 backdrop-blur-sm border border-stellar-blue/30 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-lunar-white mb-6">Formulaire de demande</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-lunar-white mb-2 font-medium">Nom complet *</label>
                    <input
                      {...register('name')}
                      className="w-full px-4 py-3 bg-midnight-blue border border-stellar-blue/30 rounded-lg text-lunar-white focus:border-cyber-cyan focus:outline-none"
                      placeholder="Jean Dupont"
                    />
                    {errors.name && <p className="text-alert-orange text-sm mt-1">{errors.name.message}</p>}
                  </div>

                  <div>
                    <label className="block text-lunar-white mb-2 font-medium">Email *</label>
                    <input
                      {...register('email')}
                      type="email"
                      className="w-full px-4 py-3 bg-midnight-blue border border-stellar-blue/30 rounded-lg text-lunar-white focus:border-cyber-cyan focus:outline-none"
                      placeholder="jean.dupont@exemple.fr"
                    />
                    {errors.email && <p className="text-alert-orange text-sm mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-lunar-white mb-2 font-medium">Organisation *</label>
                    <input
                      {...register('organization')}
                      className="w-full px-4 py-3 bg-midnight-blue border border-stellar-blue/30 rounded-lg text-lunar-white focus:border-cyber-cyan focus:outline-none"
                      placeholder="Ministère / Entreprise"
                    />
                    {errors.organization && <p className="text-alert-orange text-sm mt-1">{errors.organization.message}</p>}
                  </div>

                  <div>
                    <label className="block text-lunar-white mb-2 font-medium">Téléphone</label>
                    <input
                      {...register('phone')}
                      type="tel"
                      className="w-full px-4 py-3 bg-midnight-blue border border-stellar-blue/30 rounded-lg text-lunar-white focus:border-cyber-cyan focus:outline-none"
                      placeholder="+33 X XX XX XX XX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-lunar-white mb-2 font-medium">Plateforme d\'intérêt *</label>
                  <select
                    {...register('platform')}
                    className="w-full px-4 py-3 bg-midnight-blue border border-stellar-blue/30 rounded-lg text-lunar-white focus:border-cyber-cyan focus:outline-none"
                  >
                    <option value="">Sélectionnez une plateforme</option>
                    {platforms.map(p => <option key={p} value={p}>{p}</option>)}
                  </select>
                  {errors.platform && <p className="text-alert-orange text-sm mt-1">{errors.platform.message}</p>}
                </div>

                <div>
                  <label className="block text-lunar-white mb-2 font-medium">Cas d\'usage *</label>
                  <textarea
                    {...register('useCase')}
                    rows={5}
                    className="w-full px-4 py-3 bg-midnight-blue border border-stellar-blue/30 rounded-lg text-lunar-white focus:border-cyber-cyan focus:outline-none"
                    placeholder="Décrivez votre besoin, contexte, objectifs..."
                  />
                  {errors.useCase && <p className="text-alert-orange text-sm mt-1">{errors.useCase.message}</p>}
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Soumettre ma demande de POC
                </Button>
              </form>
            </div>
          </div>
        )}
      </Section>
    </>
  )
}
