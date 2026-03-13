"use client"

import Link from "next/link"
import Image from "next/image"
import { Search, Clock, ChevronRight, ArrowRight, School, Users, Building2 } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useState } from "react"

const categories = [
  { id: "all", label: "Tous", checked: true },
  { id: "certificats", label: "Certificats Pro", checked: false },
  { id: "diplomes", label: "Diplômes d'État", checked: false },
  { id: "masters", label: "Executive Masters", checked: false },
]

const modalities = [
  { id: "presentiel", label: "Présentiel" },
  { id: "elearning", label: "E-learning / Distanciel" },
  { id: "hybride", label: "Format Hybride" },
]

const durations = [
  { id: "short", label: "Courte (< 1 mois)" },
  { id: "medium", label: "Moyenne (1 - 6 mois)" },
  { id: "long", label: "Longue (> 6 mois)" },
]

const trainings = [
  {
    id: "expert-bim-manager",
    title: "Expert BIM Manager",
    institution: "Ecole Supérieure des Travaux Publics",
    level: "Niveau Bac+5",
    mode: "Hybride",
    duration: "6 mois",
    description: "Maîtrisez les outils de modélisation numérique et la gestion collaborative de projets d'envergure.",
    tags: ["Revit & Archicad", "Coordination BIM", "Standards ISO"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlalM8Sawmvhdm2rntzjZjrcq1E54QOmFg1SnnvbvYbrxy7NDNbzOQtfjMBfKwuApddxsC4VMPsgk1hq85oVxhJlgOrQIsmvjL52VajxKZ9nU1aOaUW6QYPNfkxHHm1gUUacvdBUvAWJLtLWvOjiEfaYCub-dKwYfEaaAPlf4f4Y7VSy_T-mK3GpEoEgQfldKwU8nFEFr4MUmp6Vl2qLXJr5U4uTiVFOIW0Cf4nkdRT-Uu_RKVkHA6GGE9Snly4i9XQoOF2YojIUz-",
  },
  {
    id: "management-chantiers-eco",
    title: "Management de Chantiers Éco-responsables",
    institution: "Institut de Management Africain",
    level: "Certification",
    mode: "Présentiel",
    duration: "3 mois",
    description: "Gérez vos ressources et déchets de manière durable tout en optimisant la rentabilité opérationnelle.",
    tags: ["HQE / LEED", "Économie Circulaire", "RSE"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCgA4YmmEqcdzQLpDgnWyhlhzFQvPeSGd739KHPi4xSvYItyWv3MBhTMtXq-p98qO6LOIhALz6QEh_QzxFWWJG1jWZCiGdHP-DAdsYuDEa3Y9IJDh3jnm6NS-hYZe-Hq3ocqm7UERRRaGbANgR_QKVXsx21Id6EOEWlcex7BwT8QSLWg3O4tLxeFEEliF7unuH0qLLOnt02XC0Rsc-SdOesdphfdZXFPTNcWRDmQ-9dZ3h5j_60r33aksctiezOchS71MgWxfrguAq",
  },
  {
    id: "directeur-operations-immobilieres",
    title: "Directeur des Opérations Immobilières",
    institution: "Polytechnique Business School",
    level: "Executive Master",
    mode: "Hybride",
    duration: "12 mois",
    description: "Maîtrisez la chaîne de valeur du montage financier à la livraison technique de programmes immobiliers.",
    tags: ["Finance Immo", "Droit de l'Urbanisme", "Leadership"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwOKHue2WHculo3yBAxldDx_Zre-rNrjwQam7AqWCehEMOViU1XPqt8dERfiz2QV4KAblCz_CPpuHqShR27FswOfh5AN_-Bc4MZRZYKt-WqRNGSyshdR6sv_BC6kEgRXdepDh9URWJvKiqlWpt-4ut79QSV_K0nC4N7ZidGFKMjg1bsjRUtHWCtDFH5OP0U1lNJFeSv8aN_tr1Rw8g7HaEflkJV1iS4Rt7cETvMQpIrHSBBKsPSUFtRfpMI-vZnp5QuoXaQ68l1SSf",
  },
  {
    id: "efficacite-energetique",
    title: "Expertise en Efficacité Énergétique",
    institution: "Centre de Formation Technique",
    level: "Diplôme Pro",
    mode: "E-learning",
    duration: "4 mois",
    description: "Audit et optimisation de la performance énergétique des bâtiments existants et neufs.",
    tags: ["Audit Thermique", "EnR", "Simulation"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAHvM8O2rVbd-HV3gLI3YExaFz5Xl-6bZ8Jq0uF90dHEylwdaMcVEpRfRI7TT05xSwGMte7Q799Yc7hLxnFSuEd3gEg2XW5vXqNcfidtzV5kcPGWvtdsgvcqmNQzUa1qNQWbgVGHf1yrPEK5RQOHj-5dmb2afRCqwLa1qIiNg1IcvUi9tlEJAzMR-_VYF5t50X0SDRFUatcDG4_XuCECUIXeTEQW_eTBQG_p7lLFVQJBFyShABBzUN8vAQvzNVXROrG0YqSSURfkaZ",
  },
  {
    id: "conducteur-travaux",
    title: "Conducteur de Travaux Senior",
    institution: "Institut Africain du Bâtiment",
    level: "Niveau Bac+3",
    mode: "Présentiel",
    duration: "8 mois",
    description: "Formation complète pour piloter des chantiers de construction du début à la livraison.",
    tags: ["Gestion Chantier", "Planning", "Sécurité"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlalM8Sawmvhdm2rntzjZjrcq1E54QOmFg1SnnvbvYbrxy7NDNbzOQtfjMBfKwuApddxsC4VMPsgk1hq85oVxhJlgOrQIsmvjL52VajxKZ9nU1aOaUW6QYPNfkxHHm1gUUacvdBUvAWJLtLWvOjiEfaYCub-dKwYfEaaAPlf4f4Y7VSy_T-mK3GpEoEgQfldKwU8nFEFr4MUmp6Vl2qLXJr5U4uTiVFOIW0Cf4nkdRT-Uu_RKVkHA6GGE9Snly4i9XQoOF2YojIUz-",
  },
  {
    id: "smart-building",
    title: "Smart Building & IoT Construction",
    institution: "Tech Construction Academy",
    level: "Certification",
    mode: "Hybride",
    duration: "5 mois",
    description: "Intégrez les technologies IoT et la domotique dans vos projets de construction modernes.",
    tags: ["IoT", "Domotique", "GTB/GTC"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCgA4YmmEqcdzQLpDgnWyhlhzFQvPeSGd739KHPi4xSvYItyWv3MBhTMtXq-p98qO6LOIhALz6QEh_QzxFWWJG1jWZCiGdHP-DAdsYuDEa3Y9IJDh3jnm6NS-hYZe-Hq3ocqm7UERRRaGbANgR_QKVXsx21Id6EOEWlcex7BwT8QSLWg3O4tLxeFEEliF7unuH0qLLOnt02XC0Rsc-SdOesdphfdZXFPTNcWRDmQ-9dZ3h5j_60r33aksctiezOchS71MgWxfrguAq",
  },
]

const modeColors: Record<string, string> = {
  "Présentiel": "bg-[#0E1F2F] text-white",
  "E-learning": "bg-[#F28C28] text-white",
  "Hybride": "bg-[#0E1F2F] text-white",
}

export default function FormationsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedModality, setSelectedModality] = useState("presentiel")

  return (
    <main className="bg-secondary min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-[#0E1F2F] overflow-hidden py-16 lg:py-24">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAu3kAioDH9r8M7oAZ5ftZDQhLhd22lZl7G5V69texw-5UUSoWgPux-NLNRHlFQKLZ77s-0bNx-2yU6UVOfLfZoZlwMD8weXDqVOuHtvyfnZ5bxcwvF5heuCETOC8FYVWM0qlhrWN1MRTCguFBqOY4wLT4ed1YR0BlVRzECjSeSxnm01bYytlOTAK2UPZJqkBzrXiz77J-tXHrJf8oHcp1OYir5C0JZWwrmfFzdQL8nvuDoVnl2xS9Qqiro14fayv27AqS7JSdKtDrf"
            alt="Construction background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E1F2F] via-[#0E1F2F]/90 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 bg-[#F28C28] text-[#0E1F2F] text-xs font-bold rounded-full mb-4 uppercase tracking-wider">
              Pôle Excellence BTP
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Formations & <br />
              <span className="text-[#F28C28]">Montée en Compétences</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-10 leading-relaxed">
              Accédez aux certifications professionnelles de haut niveau adaptées aux enjeux de la construction moderne et durable en Afrique.
            </p>

            {/* Search bar */}
            <div className="flex flex-col sm:flex-row gap-2 max-w-xl">
              <div className="flex-grow relative">
                <School className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Rechercher une formation (ex: BIM, Management...)"
                  className="w-full pl-12 pr-4 py-4 rounded-lg text-foreground border-none focus:ring-2 focus:ring-[#F28C28] bg-white"
                />
              </div>
              <button className="bg-[#F28C28] text-[#0E1F2F] px-8 py-4 rounded-lg font-bold hover:bg-orange-500 transition-all flex items-center justify-center gap-2">
                Trouver <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 flex-shrink-0 space-y-8">
            {/* Categories */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#0E1F2F] mb-4 border-l-4 border-[#F28C28] pl-3">
                Catégories
              </h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <label key={cat.id} className="flex items-center gap-3 p-2 hover:bg-white rounded-lg cursor-pointer transition-colors">
                    <input
                      type="checkbox"
                      defaultChecked={cat.checked}
                      className="rounded border-border text-[#F28C28] focus:ring-[#F28C28]"
                    />
                    <span className="text-sm font-medium text-foreground">{cat.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Modality */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#0E1F2F] mb-4 border-l-4 border-[#F28C28] pl-3">
                Modalité
              </h3>
              <div className="space-y-2">
                {modalities.map((mod) => (
                  <label key={mod.id} className="flex items-center gap-3 p-2 hover:bg-white rounded-lg cursor-pointer transition-colors">
                    <input
                      type="radio"
                      name="modality"
                      value={mod.id}
                      checked={selectedModality === mod.id}
                      onChange={(e) => setSelectedModality(e.target.value)}
                      className="border-border text-[#F28C28] focus:ring-[#F28C28]"
                    />
                    <span className="text-sm font-medium text-foreground">{mod.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Duration */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#0E1F2F] mb-4 border-l-4 border-[#F28C28] pl-3">
                Durée
              </h3>
              <div className="space-y-2">
                {durations.map((dur) => (
                  <label key={dur.id} className="flex items-center gap-3 p-2 hover:bg-white rounded-lg cursor-pointer transition-colors">
                    <input
                      type="checkbox"
                      className="rounded border-border text-[#F28C28] focus:ring-[#F28C28]"
                    />
                    <span className="text-sm font-medium text-foreground">{dur.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-[#0E1F2F]/5 p-6 rounded-xl border border-[#0E1F2F]/10">
              <p className="text-xs font-bold text-[#0E1F2F] mb-2 italic">Besoin d'un conseil ?</p>
              <p className="text-sm text-muted-foreground mb-4">
                Nos conseillers vous accompagnent dans le choix de votre parcours.
              </p>
              <button className="w-full py-2 bg-[#0E1F2F] text-white text-xs font-bold rounded-lg hover:bg-[#F28C28] hover:text-[#0E1F2F] transition-all">
                Nous Contacter
              </button>
            </div>
          </aside>

          {/* Course Listing */}
          <div className="flex-grow">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold text-[#0E1F2F]">{trainings.length} formations disponibles</h2>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                Trier par:
                <select className="bg-transparent border-none text-[#0E1F2F] font-bold focus:ring-0 cursor-pointer">
                  <option>Pertinence</option>
                  <option>Nouveauté</option>
                  <option>Niveau d'études</option>
                </select>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {trainings.map((training) => (
                <Link
                  key={training.id}
                  href={`/formations/${training.id}`}
                  className="group bg-white rounded-xl border border-border overflow-hidden hover:shadow-xl hover:border-[#F28C28]/50 transition-all duration-300 flex flex-col"
                >
                  {/* Image */}
                  <div className="h-48 relative overflow-hidden">
                    <Image
                      src={training.image}
                      alt={training.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-[#F28C28]/90 backdrop-blur-sm text-[#0E1F2F] text-[10px] font-bold px-2 py-1 rounded-full uppercase">
                        {training.level}
                      </span>
                      <span className={`backdrop-blur-sm text-[10px] font-bold px-2 py-1 rounded-full uppercase ${modeColors[training.mode]}`}>
                        {training.mode}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    {/* Institution */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center border border-border">
                        <Building2 className="w-4 h-4 text-[#0E1F2F]" />
                      </div>
                      <span className="text-xs font-bold text-muted-foreground uppercase tracking-tight">
                        {training.institution}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#0E1F2F] mb-3 group-hover:text-[#F28C28] transition-colors text-balance">
                      {training.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-6">
                      {training.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {training.tags.map((tag) => (
                        <span key={tag} className="bg-secondary text-foreground px-2 py-1 rounded text-[10px] font-semibold">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="mt-auto flex items-center justify-between pt-6 border-t border-border">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span className="text-xs font-bold">{training.duration}</span>
                      </div>
                      <span className="text-[#0E1F2F] hover:text-[#F28C28] font-bold text-xs uppercase tracking-widest flex items-center gap-1">
                        Demander le programme <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex items-center justify-center gap-2">
              <button className="px-4 py-2 bg-white border border-border rounded-lg text-sm font-medium hover:bg-secondary transition-colors">
                Précédent
              </button>
              <button className="px-4 py-2 bg-[#0E1F2F] text-white rounded-lg text-sm font-bold">1</button>
              <button className="px-4 py-2 bg-white border border-border rounded-lg text-sm font-medium hover:bg-secondary transition-colors">2</button>
              <button className="px-4 py-2 bg-white border border-border rounded-lg text-sm font-medium hover:bg-secondary transition-colors">3</button>
              <button className="px-4 py-2 bg-white border border-border rounded-lg text-sm font-medium hover:bg-secondary transition-colors">
                Suivant
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
