'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  ChevronRight,
  Target,
  Lightbulb,
  TrendingUp,
  Users,
  Award,
  Globe,
  Home,
  Building2,
  Newspaper,
  Briefcase,
  User,
  ArrowLeft,
  CheckCircle2,
} from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SectionHeader } from '@/components/section-header'

const values = [
  {
    icon: CheckCircle2,
    title: 'Integrite',
    description: 'Nous maintenons les plus hauts standards d\'ethique journalistique et professionnelle dans tous nos contenus et services.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Nous adoptons les dernieres technologies pour offrir une experience utilisateur moderne et des solutions digitales pertinentes.',
  },
  {
    icon: TrendingUp,
    title: 'Impact',
    description: 'Nous mesurons notre succes par l\'impact positif que nous creons pour le secteur et pour le developpement economique en Afrique.',
  },
]

const team = [
  { name: 'Ahmed Bennani', role: 'Directeur General', image: '/images/interview-1.jpg' },
  { name: 'Fatima Kone', role: 'Directrice Editoriale', image: '/images/interview-2.jpg' },
  { name: 'Pierre Luc', role: 'Responsable Annuaire & B2B', image: '/images/interview-1.jpg' },
]

const stats = [
  { value: '50K+', label: 'Professionnels' },
  { value: '1200+', label: 'Entreprises' },
  { value: '35', label: 'Pays Africains' },
  { value: '500+', label: 'Formations' },
]

const advantages = [
  {
    number: '01',
    title: 'Audience Qualifiee',
    description: 'Accedez a des milliers de professionnels actifs du secteur BTP a travers l\'Afrique.',
  },
  {
    number: '02',
    title: 'Contenu Exclusif',
    description: 'Beneficiez d\'analyses approfondies, de rapports sectoriels et de contenus premium.',
  },
  {
    number: '03',
    title: 'Opportunites Commerciales',
    description: 'Trouvez des partenaires, des clients et des opportunites d\'affaires dans le repertoire des entreprises.',
  },
  {
    number: '04',
    title: 'Formation Continue',
    description: 'Acceder a des programmes de formation et de certification pour developper vos competences.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* MOBILE LAYOUT */}
      <div className="lg:hidden flex flex-col min-h-screen bg-[#f6f7f8]">
        {/* Mobile Header */}
        <header className="sticky top-0 z-40 bg-[#0e1f2f] text-white">
          <div className="flex items-center gap-3 p-4">
            <Link href="/" className="p-1">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-lg font-bold">A Propos</h1>
          </div>
        </header>

        {/* Hero */}
        <div className="relative h-48">
          <Image src="/images/about-hero.jpg" alt="A propos de BATIMAG" fill className="object-cover" />
          <div className="absolute inset-0 bg-[#0e1f2f]/70 flex items-center justify-center">
            <div className="text-center px-6">
              <h2 className="text-white font-bold text-2xl mb-2">A Propos de BATIMAG</h2>
              <p className="text-white/80 text-sm">La voix du secteur de la construction en Afrique</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 pb-24">
          {/* Stats */}
          <div className="bg-white p-4 -mt-6 mx-4 rounded-xl shadow-sm relative z-10">
            <div className="grid grid-cols-4 gap-2">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-[#F28C28] font-bold text-xl">{stat.value}</p>
                  <p className="text-[#0e1f2f]/50 text-[10px] uppercase font-semibold">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mission Section */}
          <div className="p-4 mt-4">
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#F28C28]/10 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-[#F28C28]" />
                </div>
                <h3 className="text-[#0e1f2f] font-bold text-lg">Notre Mission</h3>
              </div>
              <p className="text-[#0e1f2f]/70 text-sm leading-relaxed mb-4">
                BATIMAG cree un pont entre les professionnels du secteur de la construction, des infrastructures et de l'immobilier en Afrique. Nous rassemblons les acteurs cles de l'industrie sur une plateforme unique.
              </p>
              <p className="text-[#0e1f2f]/70 text-sm leading-relaxed">
                Que vous soyez entrepreneur, ingenieur, fournisseur ou investisseur, BATIMAG est votre lieu de connexion pour les opportunites, les partenariats et la croissance.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="p-4">
            <h3 className="text-[#0e1f2f] font-bold text-lg mb-3">Nos Valeurs</h3>
            <div className="space-y-3">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#F28C28]/10 rounded-lg flex items-center justify-center shrink-0">
                      <value.icon className="w-5 h-5 text-[#F28C28]" />
                    </div>
                    <div>
                      <h4 className="text-[#0e1f2f] font-bold text-sm">{value.title}</h4>
                      <p className="text-[#0e1f2f]/60 text-xs mt-1 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="p-4">
            <h3 className="text-[#0e1f2f] font-bold text-lg mb-3">Notre Equipe</h3>
            <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
              {team.map((member, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-sm shrink-0 w-36 text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#0e1f2f]/10 mb-3 overflow-hidden">
                    <Image src={member.image} alt={member.name} width={64} height={64} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-[#0e1f2f] font-bold text-sm">{member.name}</h4>
                  <p className="text-[#0e1f2f]/50 text-xs">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Advantages Section */}
          <div className="p-4">
            <h3 className="text-[#0e1f2f] font-bold text-lg mb-3">Pourquoi Choisir BATIMAG</h3>
            <div className="space-y-3">
              {advantages.map((adv, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex items-start gap-3">
                    <span className="text-[#F28C28] font-bold text-2xl">{adv.number}</span>
                    <div>
                      <h4 className="text-[#0e1f2f] font-bold text-sm">{adv.title}</h4>
                      <p className="text-[#0e1f2f]/60 text-xs mt-1 leading-relaxed">{adv.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="p-4">
            <div className="bg-[#0e1f2f] rounded-xl p-6 text-center">
              <h3 className="text-white font-bold text-lg mb-2">Rejoignez BATIMAG</h3>
              <p className="text-white/70 text-sm mb-4">
                Devenez part de la plus grande communaute BTP en Afrique.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#F28C28] text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-[#F28C28]/90 transition-colors"
              >
                Nous Contacter
              </Link>
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
          <section className="relative h-96 overflow-hidden">
            <Image
              src="/images/about-hero.jpg"
              alt="A propos de BATIMAG"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-4">A Propos de BATIMAG</h1>
                <p className="text-xl">La voix du secteur de la construction en Afrique</p>
              </div>
            </div>
          </section>

          {/* Mission Section */}
          <section className="py-16 px-4 bg-background">
            <div className="max-w-4xl mx-auto">
              <SectionHeader
                title="Notre Mission"
                subtitle="Connecter, informer et developper"
              />
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Connecter l'ecosysteme BTP</h3>
                  <p className="text-muted-foreground mb-4">
                    BATIMAG cree un pont entre les professionnels du secteur de la construction, des infrastructures et de l'immobilier en Afrique. Nous rassemblons les acteurs cles de l'industrie sur une plateforme unique.
                  </p>
                  <p className="text-muted-foreground">
                    Que vous soyez entrepreneur, ingenieur, fournisseur ou investisseur, BATIMAG est votre lieu de connexion pour les opportunites, les partenariats et la croissance.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Informer avec rigueur</h3>
                  <p className="text-muted-foreground mb-4">
                    Notre equipe de journalistes et d'experts produit quotidiennement des contenus de qualite couvrant les actualites, tendances et enjeux du secteur en Afrique.
                  </p>
                  <p className="text-muted-foreground">
                    Nous nous engageons a offrir une information fiable, pertinente et exploitable pour les decideurs et professionnels du secteur.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-16 px-4 bg-secondary">
            <div className="max-w-4xl mx-auto">
              <SectionHeader
                title="Nos Valeurs"
                subtitle="Ce qui nous guide"
              />
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                {values.map((value, index) => (
                  <div key={index} className="bg-background p-8 border border-border">
                    <div className="w-12 h-12 bg-[#F28C28] text-white rounded flex items-center justify-center mb-4">
                      <value.icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold text-primary mb-2">{value.title}</h4>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="py-16 px-4 bg-background">
            <div className="max-w-4xl mx-auto">
              <SectionHeader
                title="Notre Equipe"
                subtitle="Des experts passionnes"
              />
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                {team.map((member, i) => (
                  <div key={i} className="text-center">
                    <div className="relative h-48 mb-4 overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h4 className="text-lg font-bold text-primary">{member.name}</h4>
                    <p className="text-muted-foreground">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Section */}
          <section className="py-16 px-4 bg-secondary">
            <div className="max-w-4xl mx-auto">
              <SectionHeader
                title="Pourquoi Choisir BATIMAG"
                subtitle="Les avantages de notre plateforme"
              />
              <div className="space-y-6 mt-12">
                {advantages.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="text-3xl text-[#F28C28] font-bold flex-shrink-0">{item.number}</div>
                    <div>
                      <h4 className="text-xl font-bold text-primary mb-2">{item.title}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4 bg-[#0e1f2f] text-white">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">Rejoignez BATIMAG</h2>
              <p className="text-lg mb-8 text-white/90">
                Devenez part de la plus grande communaute BTP en Afrique et accedez a des opportunites sans precedent.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link
                  href="/contact"
                  className="bg-[#F28C28] text-white px-8 py-3 rounded font-medium hover:bg-[#F28C28]/90 transition"
                >
                  Nous Contacter
                </Link>
                <Link
                  href="/"
                  className="bg-white text-[#0e1f2f] px-8 py-3 rounded font-medium hover:bg-white/90 transition"
                >
                  Retour a l'Accueil
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
