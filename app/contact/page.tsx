'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronRight,
  ChevronDown,
  Send,
  Home,
  Building2,
  Newspaper,
  Briefcase,
  User,
  ArrowLeft,
  MessageCircle,
} from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SectionHeader } from '@/components/section-header'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Adresse',
    lines: ['45, Rue Casablanca', 'Quartier Affaires, Casablanca', 'Maroc'],
  },
  {
    icon: Phone,
    title: 'Telephone',
    lines: ['+212 (0) 522 33 13 28', 'Du lundi au vendredi', '9h00 - 18h00'],
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['contact@batimag.com', 'Reponse dans les 48h', 'Jours ouvrables'],
  },
]

const faqItems = [
  {
    q: "Comment m'inscrire sur BATIMAG ?",
    a: "L'inscription sur BATIMAG est gratuite et simple. Cliquez sur \"S'inscrire\" en haut de la page, remplissez vos informations et commencez a explorer nos contenus et services.",
  },
  {
    q: 'Quels sont les tarifs des services premium ?',
    a: 'Nos tarifs varient selon les services. Pour obtenir un devis personnalise selon vos besoins specifiques, veuillez nous contacter directement.',
  },
  {
    q: "Comment publier une offre d'emploi ?",
    a: "Les entreprises peuvent publier des offres d'emploi directement sur notre plateforme. Contactez notre equipe pour les modalites et tarifs de publication.",
  },
  {
    q: 'Pouvez-vous m\'aider a trouver un partenaire commercial ?',
    a: 'Oui ! Notre annuaire repertorie les principales entreprises du secteur. Contactez notre equipe B2B pour explorer les opportunites de partenariat.',
  },
]

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    terms: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <>
      {/* MOBILE LAYOUT */}
      <div className="lg:hidden flex flex-col min-h-screen bg-[#f6f7f8]">
        {/* Mobile Header */}
        <header className="sticky top-0 z-40 bg-[#0e1f2f] text-white">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <Link href="/" className="p-1">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <h1 className="text-lg font-bold">Nous Contacter</h1>
            </div>
            <button className="p-2 hover:bg-white/10 rounded-full">
              <MessageCircle className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 pb-24">
          {/* Contact Cards */}
          <div className="p-4 space-y-3">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white p-4 rounded-xl shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F28C28]/10 rounded-xl flex items-center justify-center shrink-0">
                    <info.icon className="w-6 h-6 text-[#F28C28]" />
                  </div>
                  <div>
                    <h3 className="text-[#0e1f2f] font-bold text-sm mb-1">{info.title}</h3>
                    {info.lines.map((line, i) => (
                      <p key={i} className={`text-[#0e1f2f]/60 text-sm ${i === 0 ? 'font-semibold text-[#0e1f2f]' : ''}`}>
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="p-4">
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h2 className="text-[#0e1f2f] font-bold text-lg mb-4">Envoyez-nous un message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[#0e1f2f] text-sm font-medium mb-1.5">Nom complet</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Votre nom"
                    className="w-full px-4 py-3 border border-[#0e1f2f]/10 rounded-xl text-sm focus:ring-2 focus:ring-[#F28C28] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-[#0e1f2f] text-sm font-medium mb-1.5">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="votre.email@example.com"
                    className="w-full px-4 py-3 border border-[#0e1f2f]/10 rounded-xl text-sm focus:ring-2 focus:ring-[#F28C28] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-[#0e1f2f] text-sm font-medium mb-1.5">Sujet</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 border border-[#0e1f2f]/10 rounded-xl text-sm focus:ring-2 focus:ring-[#F28C28] focus:border-transparent bg-white"
                  >
                    <option value="">Selectionnez un sujet</option>
                    <option value="partnership">Partenariat</option>
                    <option value="advertising">Publicite</option>
                    <option value="content">Contenu</option>
                    <option value="job">Offre d'emploi</option>
                    <option value="training">Formation</option>
                    <option value="other">Autre</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#0e1f2f] text-sm font-medium mb-1.5">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Votre message..."
                    rows={4}
                    className="w-full px-4 py-3 border border-[#0e1f2f]/10 rounded-xl text-sm focus:ring-2 focus:ring-[#F28C28] focus:border-transparent resize-none"
                  />
                </div>
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={formData.terms}
                    onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
                    className="mt-1 w-5 h-5 border-[#0e1f2f]/20 rounded focus:ring-[#F28C28] text-[#F28C28]"
                  />
                  <label className="text-[#0e1f2f]/60 text-xs leading-relaxed">
                    J'accepte de recevoir des communications de la part de BATIMAG et j'ai lu la politique de confidentialite.
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#0e1f2f] text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-[#0e1f2f]/90 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="p-4">
            <h2 className="text-[#0e1f2f] font-bold text-lg mb-3">Questions frequentes</h2>
            <div className="space-y-2">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-4 text-left"
                  >
                    <span className="text-[#0e1f2f] font-semibold text-sm pr-4">{item.q}</span>
                    <ChevronDown className={`w-5 h-5 text-[#F28C28] shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === index && (
                    <div className="px-4 pb-4">
                      <p className="text-[#0e1f2f]/60 text-sm leading-relaxed">{item.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#0e1f2f]/10 px-2 pb-6 pt-2 z-40">
          <div className="flex justify-around items-center max-w-md mx-auto">
            <Link href="/" className="flex flex-col items-center gap-1 py-1 px-3 text-[#0e1f2f]/50 hover:text-[#0e1f2f] transition-colors">
              <Home className="w-5 h-5" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Accueil</span>
            </Link>
            <Link href="/annuaire" className="flex flex-col items-center gap-1 py-1 px-3 text-[#0e1f2f]/50 hover:text-[#0e1f2f] transition-colors">
              <Building2 className="w-5 h-5" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Annuaire</span>
            </Link>
            <Link href="/actualites" className="flex flex-col items-center gap-1 py-1 px-3 text-[#0e1f2f]/50 hover:text-[#0e1f2f] transition-colors">
              <Newspaper className="w-5 h-5" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Actus</span>
            </Link>
            <Link href="/emplois" className="flex flex-col items-center gap-1 py-1 px-3 text-[#0e1f2f]/50 hover:text-[#0e1f2f] transition-colors">
              <Briefcase className="w-5 h-5" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Emplois</span>
            </Link>
            <Link href="/profile" className="flex flex-col items-center gap-1 py-1 px-3 text-[#0e1f2f]/50 hover:text-[#0e1f2f] transition-colors">
              <User className="w-5 h-5" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Profil</span>
            </Link>
          </div>
        </nav>
      </div>

      {/* DESKTOP LAYOUT */}
      <div className="hidden lg:block">
        <Navbar />
        <main>
          {/* Hero Section */}
          <section className="py-16 px-4 bg-[#0e1f2f] text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-4">Nous Contacter</h1>
              <p className="text-xl text-white/90">
                Vous avez des questions, des suggestions ou vous souhaitez collaborer ?
                <br />
                Notre equipe est a votre ecoute.
              </p>
            </div>
          </section>

          {/* Contact Info & Form */}
          <section className="py-16 px-4 bg-background">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-secondary p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-[#F28C28]/10 rounded-full flex items-center justify-center">
                      <info.icon className="w-8 h-8 text-[#F28C28]" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">{info.title}</h3>
                    {info.lines.map((line, i) => (
                      <p key={i} className={`text-muted-foreground ${i === 0 ? 'font-semibold' : ''}`}>
                        {line}
                      </p>
                    ))}
                  </div>
                ))}
              </div>

              {/* Contact Form */}
              <div className="max-w-2xl mx-auto border border-border p-8">
                <h2 className="text-3xl font-bold text-primary mb-8">Envoyez-nous un Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                        Nom Complet
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2 border border-input bg-background text-foreground rounded focus:outline-none focus:ring-2 focus:ring-[#F28C28]"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2 border border-input bg-background text-foreground rounded focus:outline-none focus:ring-2 focus:ring-[#F28C28]"
                        placeholder="votre.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-primary mb-2">
                        Entreprise / Organisation
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-2 border border-input bg-background text-foreground rounded focus:outline-none focus:ring-2 focus:ring-[#F28C28]"
                        placeholder="Votre entreprise"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-primary mb-2">
                        Sujet
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-2 border border-input bg-background text-foreground rounded focus:outline-none focus:ring-2 focus:ring-[#F28C28]"
                      >
                        <option value="">Selectionnez un sujet</option>
                        <option value="partnership">Partenariat</option>
                        <option value="advertising">Publicite</option>
                        <option value="content">Contenu</option>
                        <option value="job">Offre d'emploi</option>
                        <option value="training">Formation</option>
                        <option value="other">Autre</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2 border border-input bg-background text-foreground rounded focus:outline-none focus:ring-2 focus:ring-[#F28C28] resize-none"
                      placeholder="Votre message..."
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="terms"
                      name="terms"
                      required
                      checked={formData.terms}
                      onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
                      className="mt-1 w-4 h-4 border border-input rounded focus:ring-2 focus:ring-[#F28C28] cursor-pointer"
                    />
                    <label htmlFor="terms" className="text-sm text-muted-foreground">
                      J'accepte de recevoir des communications de la part de BATIMAG et j'ai lu la politique de confidentialite.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#F28C28] text-white font-bold py-3 rounded hover:bg-[#F28C28]/90 transition"
                  >
                    Envoyer le Message
                  </button>
                </form>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 px-4 bg-secondary">
            <div className="max-w-4xl mx-auto">
              <SectionHeader
                title="Questions Frequemment Posees"
                subtitle="Trouvez les reponses a vos questions"
              />
              <div className="space-y-6 mt-12">
                {faqItems.map((item, i) => (
                  <details key={i} className="bg-background p-6 border border-border group">
                    <summary className="cursor-pointer font-bold text-primary flex justify-between items-center">
                      {item.q}
                      <span className="text-[#F28C28] group-open:rotate-180 transition">
                        <ChevronDown className="w-5 h-5" />
                      </span>
                    </summary>
                    <p className="text-muted-foreground mt-4">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4 bg-[#0e1f2f] text-white">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">Vous n'avez pas trouve ce que vous cherchiez ?</h2>
              <p className="text-lg mb-8 text-white/90">
                Consultez notre documentation complete ou explorez les differentes sections de BATIMAG.
              </p>
              <Link
                href="/"
                className="inline-block bg-[#F28C28] text-white px-8 py-3 rounded font-medium hover:bg-[#F28C28]/90 transition"
              >
                Retour a l'Accueil
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
