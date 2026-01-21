'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { SITE_CONFIG } from '@/lib/constants'

const contactSchema = z.object({
  name: z.string().min(2, 'Nom requis'),
  email: z.string().email('Email invalide'),
  organization: z.string().min(2, 'Organisation requise'),
  phone: z.string().optional(),
  subject: z.string().min(5, 'Sujet requis'),
  message: z.string().min(20, 'Message trop court (min 20 caractères)'),
})

type ContactForm = z.infer<typeof contactSchema>

const contactInfo = [
  { icon: <Mail size={24} />, title: 'Email', value: SITE_CONFIG.email },
  { icon: <Phone size={24} />, title: 'Téléphone', value: SITE_CONFIG.phone },
  { icon: <MapPin size={24} />, title: 'Adresse', value: 'Paris, France' },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data: ContactForm) => {
    console.log('Contact Form:', data)
    // Ici vous pourriez envoyer à une API
    setSubmitted(true)
  }

  return (
    <>
      <PageHeader
        subtitle="CONTACT"
        title="Parlons de votre projet"
        description="Notre équipe est à votre écoute pour discuter de vos besoins en intelligence géospatiale."
      />

      <Section className="bg-midnight-blue/30">
        <div className="grid md:grid-cols-3 gap-8">
          {contactInfo.map((info, i) => (
            <Card key={i} icon={info.icon} title={info.title} hover={false}>
              <p className="text-cyber-cyan font-medium">{info.value}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        {submitted ? (
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-success-green/20 border border-success-green/50 rounded-lg p-8">
              <CheckCircle size={48} className="text-success-green mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-lunar-white mb-4">Message envoyé !</h2>
              <p className="text-nebula-gray">
                Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais,
                généralement sous 24-48 heures.
              </p>
            </div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            <div className="bg-cosmic-blue/50 backdrop-blur-sm border border-stellar-blue/30 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-lunar-white mb-6">Envoyez-nous un message</h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-lunar-white mb-2 font-medium">
                      Nom complet *
                    </label>
                    <input
                      {...register('name')}
                      className="w-full px-4 py-3 bg-midnight-blue border border-stellar-blue/30 rounded-lg text-lunar-white placeholder-nebula-gray focus:border-cyber-cyan focus:outline-none transition-colors"
                      placeholder="Jean Dupont"
                    />
                    {errors.name && (
                      <p className="text-alert-orange text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-lunar-white mb-2 font-medium">
                      Email professionnel *
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      className="w-full px-4 py-3 bg-midnight-blue border border-stellar-blue/30 rounded-lg text-lunar-white placeholder-nebula-gray focus:border-cyber-cyan focus:outline-none transition-colors"
                      placeholder="jean.dupont@exemple.fr"
                    />
                    {errors.email && (
                      <p className="text-alert-orange text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-lunar-white mb-2 font-medium">
                      Organisation *
                    </label>
                    <input
                      {...register('organization')}
                      className="w-full px-4 py-3 bg-midnight-blue border border-stellar-blue/30 rounded-lg text-lunar-white placeholder-nebula-gray focus:border-cyber-cyan focus:outline-none transition-colors"
                      placeholder="Ministère / Entreprise"
                    />
                    {errors.organization && (
                      <p className="text-alert-orange text-sm mt-1">{errors.organization.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-lunar-white mb-2 font-medium">
                      Téléphone
                    </label>
                    <input
                      {...register('phone')}
                      type="tel"
                      className="w-full px-4 py-3 bg-midnight-blue border border-stellar-blue/30 rounded-lg text-lunar-white placeholder-nebula-gray focus:border-cyber-cyan focus:outline-none transition-colors"
                      placeholder="+33 X XX XX XX XX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-lunar-white mb-2 font-medium">
                    Sujet *
                  </label>
                  <input
                    {...register('subject')}
                    className="w-full px-4 py-3 bg-midnight-blue border border-stellar-blue/30 rounded-lg text-lunar-white placeholder-nebula-gray focus:border-cyber-cyan focus:outline-none transition-colors"
                    placeholder="Demande d'information, démo, partenariat..."
                  />
                  {errors.subject && (
                    <p className="text-alert-orange text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-lunar-white mb-2 font-medium">
                    Message *
                  </label>
                  <textarea
                    {...register('message')}
                    rows={6}
                    className="w-full px-4 py-3 bg-midnight-blue border border-stellar-blue/30 rounded-lg text-lunar-white placeholder-nebula-gray focus:border-cyber-cyan focus:outline-none transition-colors resize-none"
                    placeholder="Décrivez votre besoin, projet ou question..."
                  />
                  {errors.message && (
                    <p className="text-alert-orange text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <Button type="submit" size="lg" className="w-full group">
                  Envoyer le message
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>
        )}
      </Section>
    </>
  )
}
