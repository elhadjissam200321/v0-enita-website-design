"use client"

import Link from "next/link"
import Image from "next/image"
import {
  Search,
  Clock,
  ChevronRight,
  ArrowRight,
  Building2,
  BookOpen,
  Newspaper,
  Briefcase,
  Home,
  MapPin,
  Monitor,
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useState } from "react"

const mobileCategoryChips = ["Tous", "Certificats", "Diplômes", "Technique", "Management"]

const desktopCategories = [
  { id: "all", label: "Tous", checked: true },
  { id: "certificats", label: "Certificats Pro" },
  { id: "diplomes", label: "Diplômes d'État" },
  { id: "masters", label: "Executive Masters" },
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
    title: "Expert BIM Manager : Coordination & Processus",
    institution: "Ecole Supérieure des Travaux Publics",
    level: "Niveau Bac+5",
    levelBadge: "Certifié",
    mode: "Hybride",
    duration: "6 Mois • Temps plein",
    location: "Abidjan / Hybride",
    price: "2.400 €",
    category: "Infrastructure",
    description: "Maîtrisez les outils de modélisation numérique et la gestion collaborative de projets d'envergure.",
    tags: ["Revit & Archicad", "Coordination BIM", "Standards ISO"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDlalM8Sawmvhdm2rntzjZjrcq1E54QOmFg1SnnvbvYbrxy7NDNbzOQtfjMBfKwuApddxsC4VMPsgk1hq85oVxhJlgOrQIsmvjL52VajxKZ9nU1aOaUW6QYPNfkxHHm1gUUacvdBUvAWJLtLWvOjiEfaYCub-dKwYfEaaAPlf4f4Y7VSy_T-mK3GpEoEgQfldKwU8nFEFr4MUmp6Vl2qLXJr5U4uTiVFOIW0Cf4nkdRT-Uu_RKVkHA6GGE9Snly4i9XQoOF2YojIUz-",
  },
  {
    id: "chef-de-chantier",
    title: "Chef de Chantier BTP : Gros Œuvre & Sécurité",
    institution: "Institut Africain du Bâtiment",
    level: "Diplôme",
    levelBadge: "Diplôme",
    mode: "Présentiel",
    duration: "12 Mois • Alternance",
    location: "Bac+2 Requis",
    price: "1.850 €",
    category: "Chantier",
    description: "Formation complète pour piloter des chantiers de construction du début à la livraison en toute sécurité.",
    tags: ["Gestion Chantier", "Planning", "Sécurité"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD2I-u16JjQ2culYdMk4U7hOyun07HPwttzS8jfr06lNFKOdlyH22gnim1BXvFLs-A7B3MyJ_97D-Iej146tu6cr7QkFUG65sVCOQWPwLMWzleW6HqMCw9RESra6jQvMSxzZHWfbDUtQzMIK6fjn_NLyFfZhmVVQr3sfW_bOAYNlAvA2EBN4UzNIBBE5Ax_YU5Qk5rmywqc61vJXzFaFwf3Rt6hn93KqnIREsv0AtyJoOmi4wOp1MaFA_QNTzZkiGUrJQH5P-J8L66_",
  },
  {
    id: "diagnostic-energetique",
    title: "Diagnostic de Performance Énergétique (Afrique)",
    institution: "Centre de Formation Technique",
    level: "Certification",
    levelBadge: "Certifié",
    mode: "E-learning",
    duration: "3 Semaines",
    location: "100% en ligne",
    price: "950 €",
    category: "Technique",
    description: "Audit et optimisation de la performance énergétique des bâtiments existants et neufs.",
    tags: ["Audit Thermique", "EnR", "Simulation"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuANpSxXLUK-9jDx1E7eLuZSF995X-2pbEzfZbgEfm75GYUg6hnNJFy-kQyl-LipQ_x1JnyldWdJFNalojgaKTCjKgng8eDRjmNw6PsEZggcAXJ7nb4nRVMyuznZG7N8zVVGHHdWU1TLRqy-OGindq_pgU3HYU2girHVbj7M3QGucGnI8MulKlpz-461B46SsKcsykeaIzwz4DQ8NSOAzbAy3NynWxLxsTqH6qmTbcAeyZHKqT9N6aISv9aUCQU6GQglrGE6-RuemQXe",
  },
  {
    id: "management-chantiers-eco",
    title: "Management de Chantiers Éco-responsables",
    institution: "Institut de Management Africain",
    level: "Certification",
    levelBadge: "Certifié",
    mode: "Présentiel",
    duration: "3 mois",
    location: "Dakar / Présentiel",
    price: "1.200 €",
    category: "Management",
    description:
      "Gérez vos ressources et déchets de manière durable tout en optimisant la rentabilité opérationnelle.",
    tags: ["HQE / LEED", "Économie Circulaire", "RSE"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBCgA4YmmEqcdzQLpDgnWyhlhzFQvPeSGd739KHPi4xSvYItyWv3MBhTMtXq-p98qO6LOIhALz6QEh_QzxFWWJG1jWZCiGdHP-DAdsYuDEa3Y9IJDh3jnm6NS-hYZe-Hq3ocqm7UERRRaGbANgR_QKVXsx21Id6EOEWlcex7BwT8QSLWg3O4tLxeFEEliF7unuH0qLLOnt02XC0Rsc-SdOesdphfdZXFPTNcWRDmQ-9dZ3h5j_60r33aksctiezOchS71MgWxfrguAq",
  },
  {
    id: "directeur-operations-immobilieres",
    title: "Directeur des Opérations Immobilières",
    institution: "Polytechnique Business School",
    level: "Executive Master",
    levelBadge: "Master",
    mode: "Hybride",
    duration: "12 mois",
    location: "Paris / Hybride",
    price: "3.800 €",
    category: "Management",
    description:
      "Maîtrisez la chaîne de valeur du montage financier à la livraison technique de programmes immobiliers.",
    tags: ["Finance Immo", "Droit de l'Urbanisme", "Leadership"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDwOKHue2WHculo3yBAxldDx_Zre-rNrjwQam7AqWCehEMOViU1XPqt8dERfiz2QV4KAblCz_CPpuHqShR27FswOfh5AN_-Bc4MZRZYKt-WqRNGSyshdR6sv_BC6kEgRXdepDh9URWJvKiqlWpt-4ut79QSV_K0nC4N7ZidGFKMjg1bsjRUtHWCtDFH5OP0U1lNJFeSv8aN_tr1Rw8g7HaEflkJV1iS4Rt7cETvMQpIrHSBBKsPSUFtRfpMI-vZnp5QuoXaQ68l1SSf",
  },
  {
    id: "smart-building",
    title: "Smart Building & IoT Construction",
    institution: "Tech Construction Academy",
    level: "Diplôme Pro",
    levelBadge: "Diplôme Pro",
    mode: "Hybride",
    duration: "5 mois",
    location: "En ligne / Hybride",
    price: "1.650 €",
    category: "Technique",
    description:
      "Intégrez les technologies IoT et la domotique dans vos projets de construction modernes.",
    tags: ["IoT", "Domotique", "GTB/GTC"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCAHvM8O2rVbd-HV3gLI3YExaFz5Xl-6bZ8Jq0uF90dHEylwdaMcVEpRfRI7TT05xSwGMte7Q799Yc7hLxnFSuEd3gEg2XW5vXqNcfidtzV5kcPGWvtdsgvcqmNQzUa1qNQWbgVGHf1yrPEK5RQOHj-5dmb2afRCqwLa1qIiNg1IcvUi9tlEJAzMR-_VYF5t50X0SDRFUatcDG4_XuCECUIXeTEQW_eTBQG_p7lLFVQJBFyShABBzUN8vAQvzNVXROrG0YqSSURfkaZ",
  },
]

export default function FormationsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeMobileChip, setActiveMobileChip] = useState("Tous")
  const [selectedModality, setSelectedModality] = useState("presentiel")

  const filtered = trainings.filter((t) => {
    const matchSearch =
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.institution.toLowerCase().includes(searchQuery.toLowerCase())
    const matchChip =
      activeMobileChip === "Tous" ||
      t.category.toLowerCase().includes(activeMobileChip.toLowerCase())
    return matchSearch && matchChip
  })

  return (
    <>
      {/* ─────────────────────────────────────────────────────────────
          MOBILE LAYOUT  (visible on < lg)
      ───────────────────────────────────────────────────────────── */}
      <div className="lg:hidden flex flex-col min-h-screen bg-[#f6f7f8]">
        {/* Sticky Header */}
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md px-4 pt-4 pb-2 border-b border-[#0e1f2f]/5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="bg-[#0e1f2f] text-white p-1.5 rounded-lg">
                <BookOpen className="w-5 h-5" />
              </div>
              <h1 className="text-xl font-bold tracking-tight text-[#0e1f2f]">BTP Academy</h1>
            </div>
            <button className="size-10 flex items-center justify-center rounded-full bg-[#0e1f2f]/5">
              <span className="text-[#0e1f2f] text-sm font-bold">AB</span>
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative mb-3">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0e1f2f]/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher une formation BTP..."
              className="block w-full pl-10 pr-4 py-3 bg-[#0e1f2f]/5 border-none rounded-xl focus:ring-2 focus:ring-[#F28C28]/50 text-sm placeholder:text-[#0e1f2f]/40"
            />
          </div>

          {/* Category Chips */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {mobileCategoryChips.map((chip) => (
              <button
                key={chip}
                onClick={() => setActiveMobileChip(chip)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                  activeMobileChip === chip
                    ? "bg-[#0e1f2f] text-white"
                    : "bg-[#0e1f2f]/5 text-[#0e1f2f] border border-[#0e1f2f]/10"
                }`}
              >
                {chip}
              </button>
            ))}
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 px-4 py-4 space-y-6 pb-28">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-[#0e1f2f]">Catalogue Formations</h2>
            <span className="text-xs font-medium text-[#F28C28]">{filtered.length} formations</span>
          </div>

          <div className="grid gap-6">
            {filtered.map((training) => (
              <Link
                key={training.id}
                href={`/formations/${training.id}`}
                className="group bg-white rounded-xl overflow-hidden border border-[#0e1f2f]/5 shadow-sm"
              >
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={training.image}
                    alt={training.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Badge top-left */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider shadow-sm ${
                        training.mode === "E-learning"
                          ? "bg-[#F28C28] text-white"
                          : "bg-[#0e1f2f] text-white"
                      }`}
                    >
                      {training.levelBadge}
                    </span>
                  </div>
                  {/* Price badge bottom-right */}
                  <div className="absolute bottom-3 right-3">
                    <span className="bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-[#0e1f2f] font-bold text-sm shadow-sm">
                      {training.price}
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-4">
                  <div className="flex gap-2 mb-2">
                    <span className="text-[10px] font-semibold text-[#0e1f2f]/60 border border-[#0e1f2f]/20 px-2 py-0.5 rounded uppercase">
                      {training.category}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#0e1f2f] leading-tight mb-2 text-balance">
                    {training.title}
                  </h3>
                  <div className="flex items-center justify-between mt-4 text-xs text-[#0e1f2f]/70">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-[#F28C28]" />
                      <span>{training.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {training.mode === "E-learning" ? (
                        <Monitor className="w-4 h-4 text-[#F28C28]" />
                      ) : (
                        <MapPin className="w-4 h-4 text-[#F28C28]" />
                      )}
                      <span>{training.location}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </main>

        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-t border-[#0e1f2f]/10 px-2 pb-6 pt-2 z-50">
          <div className="flex justify-around items-center max-w-md mx-auto">
            {[
              { icon: Home, label: "Accueil", href: "/" },
              { icon: Building2, label: "Annuaire", href: "/annuaire" },
              { icon: BookOpen, label: "Formations", href: "/formations", active: true },
              { icon: Newspaper, label: "Actualités", href: "/actualites" },
              { icon: Briefcase, label: "Emplois", href: "/emplois" },
            ].map(({ icon: Icon, label, href, active }) => (
              <Link
                key={label}
                href={href}
                className={`relative flex flex-col items-center gap-1 p-2 ${
                  active ? "text-[#0e1f2f]" : "text-[#0e1f2f]/40"
                }`}
              >
                {active && (
                  <span className="absolute -top-1 size-1.5 bg-[#F28C28] rounded-full" />
                )}
                <Icon className="w-6 h-6" strokeWidth={active ? 2.5 : 1.5} />
                <span className={`text-[10px] ${active ? "font-bold" : "font-medium"}`}>
                  {label}
                </span>
              </Link>
            ))}
          </div>
        </nav>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          DESKTOP LAYOUT  (visible on >= lg)
      ───────────────────────────────────────────────────────────── */}
      <div className="hidden lg:block bg-[#f6f7f8] min-h-screen">
        <Navbar />

        {/* Hero */}
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

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 bg-[#F28C28] text-[#0E1F2F] text-xs font-black rounded-full mb-4 uppercase tracking-wider">
                Pôle Excellence BTP
              </span>
              <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight mb-6 text-balance">
                Formations &amp; <br />
                <span className="text-[#F28C28]">Montée en Compétences</span>
              </h1>
              <p className="text-slate-300 text-xl mb-10 leading-relaxed">
                Accédez aux certifications professionnelles de haut niveau adaptées aux enjeux de la
                construction moderne et durable en Afrique.
              </p>
              {/* Search */}
              <div className="flex gap-2 max-w-xl">
                <div className="flex-grow relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Rechercher une formation (ex: BIM, Management...)"
                    className="w-full pl-12 pr-4 py-4 rounded-lg text-slate-900 border-none focus:ring-2 focus:ring-[#F28C28] bg-white"
                  />
                </div>
                <button className="bg-[#F28C28] text-[#0E1F2F] px-8 py-4 rounded-lg font-black hover:bg-orange-500 transition-all flex items-center gap-2">
                  Trouver <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Main content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex gap-10">
            {/* Sidebar */}
            <aside className="w-64 flex-shrink-0 space-y-8">
              {/* Categories */}
              <div>
                <h3 className="text-sm font-black uppercase tracking-widest text-[#0e1f2f] mb-4 border-l-4 border-[#F28C28] pl-3">
                  Catégories
                </h3>
                <div className="space-y-1">
                  {desktopCategories.map((cat) => (
                    <label
                      key={cat.id}
                      className="flex items-center gap-3 p-2 hover:bg-white rounded-lg cursor-pointer transition-colors"
                    >
                      <input
                        type="checkbox"
                        defaultChecked={cat.checked}
                        className="rounded border-slate-300 text-[#F28C28] focus:ring-[#F28C28]"
                      />
                      <span className="text-sm font-medium text-slate-700">{cat.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Modalité */}
              <div>
                <h3 className="text-sm font-black uppercase tracking-widest text-[#0e1f2f] mb-4 border-l-4 border-[#F28C28] pl-3">
                  Modalité
                </h3>
                <div className="space-y-1">
                  {modalities.map((mod) => (
                    <label
                      key={mod.id}
                      className="flex items-center gap-3 p-2 hover:bg-white rounded-lg cursor-pointer transition-colors"
                    >
                      <input
                        type="radio"
                        name="modality"
                        value={mod.id}
                        checked={selectedModality === mod.id}
                        onChange={(e) => setSelectedModality(e.target.value)}
                        className="border-slate-300 text-[#F28C28] focus:ring-[#F28C28]"
                      />
                      <span className="text-sm font-medium text-slate-700">{mod.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Durée */}
              <div>
                <h3 className="text-sm font-black uppercase tracking-widest text-[#0e1f2f] mb-4 border-l-4 border-[#F28C28] pl-3">
                  Durée
                </h3>
                <div className="space-y-1">
                  {durations.map((dur) => (
                    <label
                      key={dur.id}
                      className="flex items-center gap-3 p-2 hover:bg-white rounded-lg cursor-pointer transition-colors"
                    >
                      <input
                        type="checkbox"
                        className="rounded border-slate-300 text-[#F28C28] focus:ring-[#F28C28]"
                      />
                      <span className="text-sm font-medium text-slate-700">{dur.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-[#0e1f2f]/5 p-6 rounded-xl border border-[#0e1f2f]/10">
                <p className="text-xs font-black text-[#0e1f2f] mb-2 italic">Besoin d'un conseil ?</p>
                <p className="text-sm text-slate-600 mb-4">
                  Nos conseillers vous accompagnent dans le choix de votre parcours.
                </p>
                <button className="w-full py-2 bg-[#0e1f2f] text-white text-xs font-black rounded-lg hover:bg-[#F28C28] hover:text-[#0e1f2f] transition-all">
                  Nous Contacter
                </button>
              </div>
            </aside>

            {/* Course listing */}
            <div className="flex-grow">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold text-[#0e1f2f]">{filtered.length} formations disponibles</h2>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  Trier par:
                  <select className="bg-transparent border-none text-[#0e1f2f] font-bold focus:ring-0 cursor-pointer">
                    <option>Pertinence</option>
                    <option>Nouveauté</option>
                    <option>Niveau d'études</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {filtered.map((training) => (
                  <Link
                    key={training.id}
                    href={`/formations/${training.id}`}
                    className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-[#F28C28] transition-all duration-300 flex flex-col"
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
                        <span className="bg-[#F28C28]/90 backdrop-blur-sm text-[#0e1f2f] text-[10px] font-black px-2 py-1 rounded-full uppercase">
                          {training.level}
                        </span>
                        <span className="bg-[#0e1f2f]/90 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase">
                          {training.mode}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex-grow flex flex-col">
                      {/* Institution */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200">
                          <Building2 className="w-4 h-4 text-[#0e1f2f]" />
                        </div>
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-tight">
                          {training.institution}
                        </span>
                      </div>

                      <h3 className="text-xl font-black text-[#0e1f2f] mb-3 group-hover:text-[#F28C28] transition-colors text-balance">
                        {training.title}
                      </h3>

                      <p className="text-sm text-slate-600 line-clamp-2 mb-6">{training.description}</p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {training.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-[10px] font-semibold"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-100">
                        <div className="flex items-center gap-1 text-slate-500">
                          <Clock className="w-4 h-4" />
                          <span className="text-xs font-bold">{training.duration}</span>
                        </div>
                        <span className="text-[#0e1f2f] hover:text-[#F28C28] font-black text-xs uppercase tracking-widest flex items-center gap-1 transition-colors">
                          Demander le programme <ChevronRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex items-center justify-center gap-2">
                <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
                  Précédent
                </button>
                <button className="px-4 py-2 bg-[#0e1f2f] text-white rounded-lg text-sm font-bold">1</button>
                <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
                  2
                </button>
                <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
                  3
                </button>
                <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
                  Suivant
                </button>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}
