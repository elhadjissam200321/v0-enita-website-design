"use client"

import Link from "next/link"
import Image from "next/image"
import { 
  Clock, 
  MapPin, 
  GraduationCap, 
  Euro, 
  Calendar, 
  Medal, 
  Download, 
  ChevronDown, 
  CheckCircle2, 
  Quote,
  Target,
  Users,
  Database,
  BadgeCheck,
  Building2,
  Network
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useState, use } from "react"

const trainingsData: Record<string, {
  id: string
  title: string
  subtitle: string
  level: string
  duration: string
  location: string
  certification: string
  price: string
  nextSession: string
  deadline: string
  description: string
  image: string
  objectives: { icon: string; title: string; description: string }[]
  program: { number: string; title: string; topics?: string[] }[]
  partner: { name: string; description: string; badges: string[] }
  testimonials: { quote: string; name: string; role: string; image: string }[]
  targetAudience: { icon: string; label: string }[]
}> = {
  "expert-bim-manager": {
    id: "expert-bim-manager",
    title: "Expert BIM Manager",
    subtitle: "Formation Certifiante RNCP Niveau 7",
    level: "Bac +5",
    duration: "6 mois",
    location: "Hybride (Paris / Online)",
    certification: "Titre RNCP Niveau 7",
    price: "8 400 € TTC",
    nextSession: "12 Octobre 2024",
    deadline: "15 Septembre",
    description: "Devenez un leader de la transformation numérique du bâtiment. Une certification d'excellence pour piloter des projets complexes et coordonner les équipes techniques.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB711r0nUq8AURVuDCRy9JZeCvgEIDGkVWpaQhSjlvOO06h0ozxX3NWaMqE7dBOHe3bLs9GnIqEG5xcuHu_HvyE3DXtp8VxDPA1HUj5iMZZssibqU3uox31HOOTzFcDXhACyLEhGxgv66TEdOUD-3pVTzPmiyuIcWnDGaH9tPzSMjT38JF9eHSJ5Y85BcXTj-_CYHvTTbiVNeDd4WhD8wKQMK-WBmN2UvL8_0ZiO61ovvtn4vPAyAheKFvl7_5iBW1SX00Kub4MibX4",
    objectives: [
      { icon: "hub", title: "Stratégie BIM", description: "Définir et mettre en œuvre une convention BIM adaptée aux enjeux du projet et du client." },
      { icon: "groups", title: "Management Agile", description: "Coordonner les équipes pluridisciplinaires (architectes, ingénieurs, exploitants)." },
      { icon: "dataset", title: "Gestion de Data", description: "Assurer l'interopérabilité des données via les standards IFC et BCF." },
      { icon: "verified", title: "Contrôle Qualité", description: "Vérifier la conformité des maquettes numériques et la cohérence des modèles." },
    ],
    program: [
      { number: "01", title: "Fondamentaux et Stratégie BIM", topics: ["L'écosystème du BIM et les enjeux du cycle de vie", "Rédaction de la charte et du protocole BIM"] },
      { number: "02", title: "Outils et Coordination Technique" },
      { number: "03", title: "Management de Projet et Soft Skills" },
    ],
    partner: {
      name: "En partenariat avec Polytechnique",
      description: "Ce programme d'excellence bénéficie de l'expertise académique de l'École Polytechnique. Nos intervenants sont des experts reconnus du secteur et des professeurs de rang international.",
      badges: ["Diplôme Co-signé", "Réseau Alumni"],
    },
    testimonials: [
      { quote: "La formation m'a permis de structurer ma démarche BIM sur des projets hospitaliers complexes. L'approche par la donnée est révolutionnaire.", name: "Marc L.", role: "BIM Manager @ Vinci Construction", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPfyyNSXNELb4Dr8OAupfpRZvGqTTktxempbvGHxEPNH3ZfFDHRjAbvEUZ8JMOpZHbffElzr-IMdrlEboqCWe4wktMndGe8XM751srbDQjoVDyug2mvMvKk3FdTFicccUVtB-s1WBJK0kng4hVpy2q5poN0e-oaJLhVFubIVijG2_bm11w3qsDsBnbH-QVN60lMou1qLWj2FXWlCPzPIyOVUSdJNETaAHPTmmqotCFegRZh5Ucz4fI6fg27Fhqqe7IQ6bHnMG6hFmB" },
      { quote: "Un programme dense et complet. J'ai particulièrement apprécié les modules sur le cadre juridique et contractuel du BIM.", name: "Sophie D.", role: "Architecte Associée @ AIA Life Designers", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2N27MgQA2McLnOf4IOmjYCUb3murLivksI9gPZsBj71m22VQlvKjJTLpmVdN9_yRzdkxbHS29G_y-5RjNrQXa-LX6Y-IeCi5GTrGKhjTCgaSjZyvGhG9pW8iSoNts7p0f6p8lCjofW8atQjAggwjGpDA6UVSOeWKwsLgHytdKmqXxEk1kWsdYUeegtfMh2qoCnaa1bss5Quut0rrI_Nb0teShCJszqKJHBY3w3S-KkENhVFaH7u1QRAknQR4opjLPujHUujiL4ea1" },
    ],
    targetAudience: [
      { icon: "engineering", label: "Ingénieurs structures & CVC" },
      { icon: "architecture", label: "Architectes & Maîtres d'œuvre" },
      { icon: "apartment", label: "Gestionnaires de patrimoine" },
    ],
  },
  "management-chantiers-eco": {
    id: "management-chantiers-eco",
    title: "Management de Chantiers Éco-responsables",
    subtitle: "Certification Professionnelle",
    level: "Bac +3",
    duration: "3 mois",
    location: "Présentiel (Dakar)",
    certification: "Certificat de Compétences",
    price: "4 500 € TTC",
    nextSession: "15 Janvier 2025",
    deadline: "20 Décembre",
    description: "Gérez vos ressources et déchets de manière durable tout en optimisant la rentabilité opérationnelle de vos chantiers.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCgA4YmmEqcdzQLpDgnWyhlhzFQvPeSGd739KHPi4xSvYItyWv3MBhTMtXq-p98qO6LOIhALz6QEh_QzxFWWJG1jWZCiGdHP-DAdsYuDEa3Y9IJDh3jnm6NS-hYZe-Hq3ocqm7UERRRaGbANgR_QKVXsx21Id6EOEWlcex7BwT8QSLWg3O4tLxeFEEliF7unuH0qLLOnt02XC0Rsc-SdOesdphfdZXFPTNcWRDmQ-9dZ3h5j_60r33aksctiezOchS71MgWxfrguAq",
    objectives: [
      { icon: "hub", title: "Économie Circulaire", description: "Mettre en place une gestion des déchets efficace et valoriser les matériaux." },
      { icon: "groups", title: "Management Durable", description: "Piloter des équipes sensibilisées aux enjeux environnementaux." },
      { icon: "dataset", title: "Certifications HQE/LEED", description: "Préparer et accompagner les projets vers les certifications environnementales." },
      { icon: "verified", title: "RSE & Reporting", description: "Intégrer les indicateurs RSE dans le suivi de chantier." },
    ],
    program: [
      { number: "01", title: "Fondamentaux du Développement Durable", topics: ["Enjeux climatiques et réglementation", "Introduction aux certifications environnementales"] },
      { number: "02", title: "Gestion des Ressources et Déchets" },
      { number: "03", title: "Management et Communication RSE" },
    ],
    partner: {
      name: "En partenariat avec l'Institut de Management Africain",
      description: "Une formation développée avec des experts du terrain et des professionnels de la construction durable en Afrique.",
      badges: ["Certificat Reconnu", "Accompagnement Terrain"],
    },
    testimonials: [
      { quote: "Cette formation a transformé ma vision du chantier. On peut être rentable ET responsable.", name: "Amadou K.", role: "Chef de Chantier @ Eiffage Sénégal", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPfyyNSXNELb4Dr8OAupfpRZvGqTTktxempbvGHxEPNH3ZfFDHRjAbvEUZ8JMOpZHbffElzr-IMdrlEboqCWe4wktMndGe8XM751srbDQjoVDyug2mvMvKk3FdTFicccUVtB-s1WBJK0kng4hVpy2q5poN0e-oaJLhVFubIVijG2_bm11w3qsDsBnbH-QVN60lMou1qLWj2FXWlCPzPIyOVUSdJNETaAHPTmmqotCFegRZh5Ucz4fI6fg27Fhqqe7IQ6bHnMG6hFmB" },
      { quote: "Les cas pratiques sur des projets africains rendent la formation très concrète.", name: "Fatou M.", role: "Ingénieure Environnement @ Bouygues Africa", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2N27MgQA2McLnOf4IOmjYCUb3murLivksI9gPZsBj71m22VQlvKjJTLpmVdN9_yRzdkxbHS29G_y-5RjNrQXa-LX6Y-IeCi5GTrGKhjTCgaSjZyvGhG9pW8iSoNts7p0f6p8lCjofW8atQjAggwjGpDA6UVSOeWKwsLgHytdKmqXxEk1kWsdYUeegtfMh2qoCnaa1bss5Quut0rrI_Nb0teShCJszqKJHBY3w3S-KkENhVFaH7u1QRAknQR4opjLPujHUujiL4ea1" },
    ],
    targetAudience: [
      { icon: "engineering", label: "Chefs de chantier" },
      { icon: "architecture", label: "Conducteurs de travaux" },
      { icon: "apartment", label: "Responsables QSE" },
    ],
  },
}

// Default formation for fallback
const defaultFormation = trainingsData["expert-bim-manager"]

const iconMap: Record<string, React.ReactNode> = {
  hub: <Network className="w-5 h-5" />,
  groups: <Users className="w-5 h-5" />,
  dataset: <Database className="w-5 h-5" />,
  verified: <BadgeCheck className="w-5 h-5" />,
  engineering: <Building2 className="w-5 h-5" />,
  architecture: <GraduationCap className="w-5 h-5" />,
  apartment: <Building2 className="w-5 h-5" />,
}

export default function FormationDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const training = trainingsData[resolvedParams.id] || defaultFormation
  const [expandedModule, setExpandedModule] = useState<string | null>("01")

  return (
    <main className="bg-secondary min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F28C28]/10 text-[#F28C28] text-xs font-bold uppercase tracking-wider">
                {training.subtitle}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-[#0E1F2F] leading-tight">
                {training.title}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                {training.description}
              </p>
            </div>

            {/* Key Info Cards */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-border flex-1 min-w-[160px]">
                <GraduationCap className="w-8 h-8 text-[#F28C28]" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-bold">Niveau</p>
                  <p className="text-lg font-bold text-[#0E1F2F]">{training.level}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-border flex-1 min-w-[160px]">
                <Clock className="w-8 h-8 text-[#F28C28]" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-bold">Durée</p>
                  <p className="text-lg font-bold text-[#0E1F2F]">{training.duration}</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4">
              <button className="bg-[#0E1F2F] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#0E1F2F]/95 shadow-lg shadow-[#0E1F2F]/20 transition-all">
                Postuler à la session
              </button>
              <button className="flex items-center gap-2 text-[#0E1F2F] font-bold px-6 py-4 rounded-xl hover:bg-[#0E1F2F]/5 border border-transparent hover:border-[#0E1F2F]/10 transition-all">
                <Download className="w-5 h-5" />
                Brochure PDF
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-muted">
              <Image
                src={training.image}
                alt={training.title}
                fill
                className="object-cover"
              />
            </div>
            {/* Alumni Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-[240px] border border-border">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex -space-x-2">
                  {training.testimonials.slice(0, 3).map((t, i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-muted overflow-hidden relative">
                      <Image src={t.image} alt={t.name} fill className="object-cover" />
                    </div>
                  ))}
                </div>
                <span className="text-xs font-bold text-muted-foreground">+450 alumni</span>
              </div>
              <p className="text-sm font-medium text-foreground italic">"Une formation qui a propulsé ma carrière de 10 ans."</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Objectives */}
            <section>
              <h2 className="text-3xl font-bold text-[#0E1F2F] mb-8 flex items-center gap-3">
                <Target className="w-8 h-8 text-[#F28C28]" />
                Objectifs Pédagogiques
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {training.objectives.map((obj, i) => (
                  <div key={i} className="p-6 bg-white rounded-2xl border border-border space-y-3">
                    <span className="text-[#0E1F2F] bg-[#0E1F2F]/5 p-2 rounded-lg inline-block">
                      {iconMap[obj.icon] || <Target className="w-5 h-5" />}
                    </span>
                    <h3 className="font-bold text-lg text-foreground">{obj.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{obj.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Program */}
            <section>
              <h2 className="text-3xl font-bold text-[#0E1F2F] mb-8">Programme détaillé</h2>
              <div className="space-y-4">
                {training.program.map((module) => (
                  <div
                    key={module.number}
                    className="group border border-border rounded-2xl overflow-hidden bg-white hover:border-[#F28C28]/50 transition-colors"
                  >
                    <button
                      onClick={() => setExpandedModule(expandedModule === module.number ? null : module.number)}
                      className="w-full p-6 flex items-center justify-between cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <span className="w-8 h-8 flex items-center justify-center bg-[#0E1F2F] text-white rounded-lg font-bold text-sm">
                          {module.number}
                        </span>
                        <h3 className="font-bold text-xl text-foreground">{module.title}</h3>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-muted-foreground group-hover:text-[#F28C28] transition-transform ${expandedModule === module.number ? "rotate-180" : ""}`} />
                    </button>
                    {expandedModule === module.number && module.topics && (
                      <div className="px-6 pb-6 pt-0 border-t border-border">
                        <ul className="space-y-3 mt-4 text-muted-foreground">
                          {module.topics.map((topic, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm">
                              <CheckCircle2 className="w-5 h-5 text-[#F28C28] mt-0.5 shrink-0" />
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Partner School */}
            <section className="bg-[#0E1F2F] rounded-3xl p-8 text-white">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center p-4 shrink-0">
                  <div className="text-[#0E1F2F] font-bold text-center text-xs">POLYTECHNIQUE PARTNER</div>
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold italic">{training.partner.name}</h2>
                  <p className="text-white/70">
                    {training.partner.description}
                  </p>
                  <div className="flex gap-4 pt-2">
                    {training.partner.badges.map((badge, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Medal className="w-5 h-5 text-[#F28C28]" />
                        <span className="text-sm font-semibold">{badge}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Testimonials */}
            <section>
              <h2 className="text-3xl font-bold text-[#0E1F2F] mb-8">Ce qu'en disent nos experts</h2>
              <div className="grid sm:grid-cols-2 gap-8">
                {training.testimonials.map((testimonial, i) => (
                  <div key={i} className="space-y-4 p-8 bg-[#F28C28]/5 rounded-3xl relative">
                    <Quote className="w-16 h-16 text-[#F28C28]/20 absolute top-4 right-4" />
                    <p className="text-foreground italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full grayscale overflow-hidden relative">
                        <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" />
                      </div>
                      <div>
                        <p className="font-bold text-[#0E1F2F]">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Info Card */}
            <div className="bg-white rounded-3xl border border-border p-8 shadow-xl shadow-[#0E1F2F]/5 sticky top-28">
              <h3 className="text-xl font-bold text-[#0E1F2F] mb-6">Informations clés</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Euro className="w-5 h-5 text-[#F28C28] mt-1" />
                  <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase">Frais de scolarité</p>
                    <p className="text-xl font-bold text-[#0E1F2F]">{training.price}</p>
                    <p className="text-xs text-muted-foreground mt-1">Éligible au CPF et OPCO</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Calendar className="w-5 h-5 text-[#F28C28] mt-1" />
                  <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase">Prochaine rentrée</p>
                    <p className="text-lg font-bold text-[#0E1F2F]">{training.nextSession}</p>
                    <p className="text-xs text-muted-foreground mt-1">Date limite de candidature : {training.deadline}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#F28C28] mt-1" />
                  <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase">Lieu</p>
                    <p className="text-lg font-bold text-[#0E1F2F]">{training.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Medal className="w-5 h-5 text-[#F28C28] mt-1" />
                  <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase">Certification</p>
                    <p className="text-lg font-bold text-[#0E1F2F]">{training.certification}</p>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="mt-10 p-6 bg-[#0E1F2F] rounded-2xl text-white space-y-4">
                <h4 className="font-bold text-center">Recevoir le programme</h4>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Email professionnel"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm focus:ring-[#F28C28] focus:border-[#F28C28] placeholder:text-white/50"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#F28C28] text-white font-bold py-3 rounded-xl hover:bg-[#F28C28]/90 transition-all shadow-lg shadow-[#F28C28]/20"
                  >
                    Demander la brochure
                  </button>
                </form>
              </div>
            </div>

            {/* Target Audience */}
            <div className="bg-secondary rounded-3xl p-8 space-y-4">
              <h3 className="font-bold text-[#0E1F2F]">Public visé</h3>
              <div className="space-y-3">
                {training.targetAudience.map((audience, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="text-[#0E1F2F]">
                      {iconMap[audience.icon] || <Users className="w-5 h-5" />}
                    </span>
                    {audience.label}
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  )
}
