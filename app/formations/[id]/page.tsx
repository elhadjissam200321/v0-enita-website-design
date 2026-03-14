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
  Network,
  ArrowLeft,
  Share2,
  Home,
  Briefcase,
  Newspaper,
  User
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
      { number: "M1", title: "BIM Methodology & Process", topics: ["L'écosystème du BIM et les enjeux du cycle de vie", "Rédaction de la charte et du protocole BIM"] },
      { number: "M2", title: "Project Information Management" },
      { number: "M3", title: "The BIM Manager Toolkit", topics: ["Selecting collaborative platforms (CDE)", "Automated quality control of IFC models", "Resource and cost management in BIM"] },
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
  const [expandedModule, setExpandedModule] = useState<string | null>("M1")
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <>
      {/* MOBILE VERSION */}
      <div className="lg:hidden min-h-screen bg-white dark:bg-slate-900 pb-24">
        {/* Sticky Header */}
        <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center p-4 justify-between max-w-md mx-auto">
            <Link href="/formations" className="text-[#0E1F2F] dark:text-slate-100 cursor-pointer">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-[#0E1F2F] dark:text-slate-100 text-sm font-bold leading-tight truncate px-4">
              {training.title}
            </h1>
            <button className="text-[#0E1F2F] dark:text-slate-100 p-1">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <div className="relative w-full h-64 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E1F2F]/90 via-[#0E1F2F]/20 to-transparent z-10"></div>
          <Image
            src={training.image}
            alt={training.title}
            fill
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 p-6 z-20">
            <span className="bg-[#F28C28] text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded mb-2 inline-block">
              {training.subtitle.split(" ").pop()}
            </span>
            <h2 className="text-white text-3xl font-bold leading-tight">{training.title}</h2>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-2 p-4 -mt-6 relative z-30">
          <div className="bg-white dark:bg-slate-800 p-3 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center">
            <GraduationCap className="w-5 h-5 text-[#F28C28] mb-1" />
            <p className="text-[10px] text-slate-500 uppercase font-bold">Level</p>
            <p className="text-[#0E1F2F] dark:text-slate-100 text-sm font-bold">{training.level}</p>
          </div>
          <div className="bg-white dark:bg-slate-800 p-3 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center">
            <Clock className="w-5 h-5 text-[#F28C28] mb-1" />
            <p className="text-[10px] text-slate-500 uppercase font-bold">Duration</p>
            <p className="text-[#0E1F2F] dark:text-slate-100 text-sm font-bold">{training.duration}</p>
          </div>
          <div className="bg-white dark:bg-slate-800 p-3 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center">
            <BadgeCheck className="w-5 h-5 text-[#F28C28] mb-1" />
            <p className="text-[10px] text-slate-500 uppercase font-bold">Certif.</p>
            <p className="text-[#0E1F2F] dark:text-slate-100 text-sm font-bold">RNCP</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-slate-200 dark:border-slate-800 overflow-x-auto sticky top-[61px] z-40 bg-white dark:bg-slate-900">
          <div className="flex px-4 max-w-md mx-auto">
            {["overview", "program", "experts", "partners"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`border-b-2 py-4 px-4 text-xs font-bold whitespace-nowrap transition-colors ${
                  activeTab === tab
                    ? "border-[#F28C28] text-[#0E1F2F] dark:text-slate-100"
                    : "border-transparent text-slate-400"
                }`}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content - Overview Tab */}
        {activeTab === "overview" && (
          <>
            {/* Objectives Section */}
            <section className="p-6 bg-white dark:bg-slate-900/50">
              <h3 className="text-[#0E1F2F] dark:text-slate-100 text-lg font-bold mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#F28C28] rounded-full"></span>
                Pedagogical Objectives
              </h3>
              <div className="space-y-4">
                {training.objectives.map((obj, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 shrink-0 bg-[#0E1F2F]/5 dark:bg-[#0E1F2F]/20 rounded-lg flex items-center justify-center">
                      {iconMap[obj.icon]}
                    </div>
                    <div>
                      <h4 className="text-[#0E1F2F] dark:text-slate-200 font-bold text-sm">{obj.title}</h4>
                      <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">{obj.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Expert Testimonial */}
            <section className="p-6 bg-slate-100 dark:bg-slate-800/40">
              <div className="flex items-center gap-2 mb-4">
                <Quote className="w-5 h-5 text-[#F28C28]" />
                <h3 className="text-[#0E1F2F] dark:text-slate-100 text-lg font-bold">Expert Voice</h3>
              </div>
              <div className="bg-white dark:bg-slate-800 p-5 rounded-xl shadow-sm italic text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                "{training.testimonials[0].quote}"
                <div className="mt-4 flex items-center gap-3 not-italic">
                  <Image
                    src={training.testimonials[0].image}
                    alt={training.testimonials[0].name}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover grayscale"
                  />
                  <div>
                    <p className="text-[#0E1F2F] dark:text-slate-100 font-bold text-xs">{training.testimonials[0].name}</p>
                    <p className="text-[10px] text-slate-400">{training.testimonials[0].role}</p>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {/* Program Tab */}
        {activeTab === "program" && (
          <section className="p-6">
            <div className="space-y-3">
              {training.program.map((module) => (
                <div key={module.number} className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                  <button
                    onClick={() => setExpandedModule(expandedModule === module.number ? null : module.number)}
                    className="w-full p-4 flex justify-between items-center"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[#F28C28] font-bold text-xs">{module.number}</span>
                      <h4 className="text-[#0E1F2F] dark:text-slate-100 font-bold text-sm">{module.title}</h4>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${expandedModule === module.number ? "rotate-180" : ""}`} />
                  </button>
                  {expandedModule === module.number && module.topics && (
                    <div className="px-4 pb-4 border-t border-slate-200 dark:border-slate-700">
                      <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-2 mt-3 ml-6 list-disc">
                        {module.topics.map((topic, i) => (
                          <li key={i}>{topic}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Experts Tab */}
        {activeTab === "experts" && (
          <section className="p-6 space-y-4">
            {training.testimonials.map((testimonial, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 p-4 rounded-xl">
                <p className="text-[#0E1F2F] dark:text-slate-300 italic text-sm leading-relaxed mb-3">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-[#0E1F2F] dark:text-slate-100 font-bold text-xs">{testimonial.name}</p>
                    <p className="text-[10px] text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </section>
        )}

        {/* Partners Tab */}
        {activeTab === "partners" && (
          <section className="p-6 bg-[#0E1F2F] dark:bg-slate-800 mx-4 my-4 rounded-xl text-white">
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-white rounded-xl flex items-center justify-center p-3 mb-4 shrink-0">
                <span className="text-[#0E1F2F] font-bold text-[10px] text-center">POLYTECHNIQUE PARTNER</span>
              </div>
              <h2 className="text-lg font-bold italic mb-2">{training.partner.name}</h2>
              <p className="text-white/70 text-xs leading-relaxed mb-4">
                {training.partner.description}
              </p>
              <div className="flex flex-col gap-2">
                {training.partner.badges.map((badge, i) => (
                  <div key={i} className="flex items-center justify-center gap-2">
                    <Medal className="w-4 h-4 text-[#F28C28]" />
                    <span className="text-xs font-semibold">{badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>

      {/* DESKTOP VERSION */}
      <div className="hidden lg:block min-h-screen bg-slate-50 dark:bg-background-dark">
        <Navbar />

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
                <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                  {training.description}
                </p>
              </div>

              {/* Key Info Cards */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex-1 min-w-[160px]">
                  <GraduationCap className="w-8 h-8 text-[#F28C28]" />
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold">Niveau</p>
                    <p className="text-lg font-bold text-[#0E1F2F]">{training.level}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex-1 min-w-[160px]">
                  <Clock className="w-8 h-8 text-[#F28C28]" />
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold">Durée</p>
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
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-slate-200 relative">
                <Image
                  src={training.image}
                  alt={training.title}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Alumni Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-[240px] border border-slate-200">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex -space-x-2">
                    {training.testimonials.slice(0, 3).map((t, i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden relative">
                        <Image src={t.image} alt={t.name} fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                  <span className="text-xs font-bold text-slate-500">+450 alumni</span>
                </div>
                <p className="text-sm font-medium text-[#0E1F2F] italic">"Une formation qui a propulsé ma carrière de 10 ans."</p>
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
                    <div key={i} className="p-6 bg-white rounded-2xl border border-slate-200 space-y-3">
                      <span className="text-[#0E1F2F] bg-[#0E1F2F]/5 p-2 rounded-lg inline-block">
                        {iconMap[obj.icon] || <Target className="w-5 h-5" />}
                      </span>
                      <h3 className="font-bold text-lg text-[#0E1F2F]">{obj.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{obj.description}</p>
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
                      className="group border border-slate-200 rounded-2xl overflow-hidden bg-white hover:border-[#F28C28]/50 transition-colors"
                    >
                      <button
                        onClick={() => setExpandedModule(expandedModule === module.number ? null : module.number)}
                        className="w-full p-6 flex items-center justify-between cursor-pointer"
                      >
                        <div className="flex items-center gap-4">
                          <span className="w-8 h-8 flex items-center justify-center bg-[#0E1F2F] text-white rounded-lg font-bold text-sm">
                            {module.number}
                          </span>
                          <h3 className="font-bold text-xl text-[#0E1F2F]">{module.title}</h3>
                        </div>
                        <ChevronDown className={`w-5 h-5 text-slate-400 group-hover:text-[#F28C28] transition-transform ${expandedModule === module.number ? "rotate-180" : ""}`} />
                      </button>
                      {expandedModule === module.number && module.topics && (
                        <div className="px-6 pb-6 pt-0 border-t border-slate-200">
                          <ul className="space-y-3 mt-4 text-slate-600">
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
                      <p className="text-[#0E1F2F] italic leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full grayscale overflow-hidden relative">
                          <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" />
                        </div>
                        <div>
                          <p className="font-bold text-[#0E1F2F]">{testimonial.name}</p>
                          <p className="text-xs text-slate-500">{testimonial.role}</p>
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
              <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-xl shadow-[#0E1F2F]/5 sticky top-28">
                <h3 className="text-xl font-bold text-[#0E1F2F] mb-6">Informations clés</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Euro className="w-5 h-5 text-[#F28C28] mt-1" />
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase">Frais de scolarité</p>
                      <p className="text-xl font-bold text-[#0E1F2F]">{training.price}</p>
                      <p className="text-xs text-slate-500 mt-1">Éligible au CPF et OPCO</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Calendar className="w-5 h-5 text-[#F28C28] mt-1" />
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase">Prochaine rentrée</p>
                      <p className="text-lg font-bold text-[#0E1F2F]">{training.nextSession}</p>
                      <p className="text-xs text-slate-500 mt-1">Date limite de candidature : {training.deadline}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-[#F28C28] mt-1" />
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase">Lieu</p>
                      <p className="text-lg font-bold text-[#0E1F2F]">{training.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Medal className="w-5 h-5 text-[#F28C28] mt-1" />
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase">Certification</p>
                      <p className="text-lg font-bold text-[#0E1F2F]">{training.certification}</p>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-8 bg-[#F28C28] hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-[#F28C28]/20 transition-colors">
                  Postuler maintenant
                </button>
              </div>
            </aside>
          </div>
        </section>

        <Footer />
      </div>

      {/* Mobile Bottom Action Bar */}
      <footer className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 p-4">
        <div className="max-w-md mx-auto flex gap-3">
          <button className="flex-1 flex items-center justify-center gap-2 border-2 border-[#0E1F2F] dark:border-slate-600 text-[#0E1F2F] dark:text-slate-100 py-3 rounded-lg font-bold text-sm">
            <Download className="w-4 h-4" />
            Brochure
          </button>
          <button className="flex-[1.5] bg-[#F28C28] hover:bg-orange-600 text-white py-3 rounded-lg font-bold text-sm shadow-lg shadow-[#F28C28]/20 transition-colors">
            Apply Now
          </button>
        </div>
      </footer>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-20 left-0 right-0 z-40 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="flex justify-around items-center max-w-md mx-auto">
          <Link href="/" className="flex flex-col items-center py-3 text-slate-400 hover:text-[#0E1F2F]">
            <Home className="w-5 h-5" />
          </Link>
          <Link href="/annuaire" className="flex flex-col items-center py-3 text-slate-400 hover:text-[#0E1F2F]">
            <Users className="w-5 h-5" />
          </Link>
          <Link href="/formations" className="flex flex-col items-center py-3 text-[#F28C28]">
            <GraduationCap className="w-5 h-5" />
          </Link>
          <Link href="/actualites" className="flex flex-col items-center py-3 text-slate-400 hover:text-[#0E1F2F]">
            <Newspaper className="w-5 h-5" />
          </Link>
          <Link href="/emplois" className="flex flex-col items-center py-3 text-slate-400 hover:text-[#0E1F2F]">
            <Briefcase className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </>
  )
}
