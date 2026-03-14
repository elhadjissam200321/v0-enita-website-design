'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ChevronRight,
  MapPin,
  BadgeCheck,
  Share2,
  UserPlus,
  FileText,
  Download,
  Send,
  Factory,
  Leaf,
  Building2,
  Mountain,
  Award,
  TrendingFlat,
  Home,
  Newspaper,
  User,
  Grid3x3,
  ArrowLeft,
  Bookmark,
} from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

// ─── Static data (replace with DB fetch later) ───────────────────────────────
const company = {
  id: 'lafarge-holcim-maroc',
  name: 'LafargeHolcim Maroc',
  tagline: 'Matériaux de construction & Solutions durables',
  city: 'Casablanca, Maroc',
  badge: 'Leader Industriel',
  verified: true,
  about:
    'Leader national du secteur des matériaux de construction au Maroc, LafargeHolcim Maroc propose des solutions innovantes en ciment, béton et granulats. Filiale du groupe Holcim, nous sommes engagés dans la construction durable et l\'économie circulaire.',
  about_full: [
    'Lafarge Holcim Maroc est le leader national du secteur des matériaux de construction au Maroc. Fruit d\'un partenariat entre le groupe Holcim, leader mondial des solutions de construction innovantes et durables, et Al Mada, fonds d\'investissement privé panafricain.',
    'Avec une présence historique ancrée dans le tissu économique du Royaume, l\'entreprise opère à travers un réseau industriel de premier plan, incluant des cimenteries de dernière génération, des centrales à béton et des carrières de granulats. Elle se distingue par son engagement en faveur de la construction durable et de la décarbonation du secteur en Afrique.',
  ],
  stats: [
    { value: '3 000+', label: 'Collaborateurs au Maroc' },
    { value: '7', label: 'Cimenteries opérationnelles' },
  ],
  expertise: [
    {
      icon: 'precision_manufacturing',
      title: 'Gamme Ciment',
      description: 'Infrastructures et bâtiments',
    },
    {
      icon: 'architecture',
      title: 'Béton Prêt',
      description: 'Agilia, Artevia, Hydromedia',
    },
    {
      icon: 'eco',
      title: 'ECOPact',
      description: 'Béton bas carbone',
    },
    {
      icon: 'foundation',
      title: 'Mortiers',
      description: 'Colles et enduits façade',
    },
  ],
  projects: [
    {
      title: 'Pont Mohammed VI',
      category: 'Infrastructure',
      description: 'Fourniture de bétons spéciaux Agilia.',
      image: '/images/project-bridge.jpg',
    },
    {
      title: 'Casablanca Finance City Tower',
      category: 'Tertiaire',
      description: 'Solutions béton haute performance.',
      image: '/images/project-tower.jpg',
    },
  ],
  certifications: [
    { code: 'ISO 9001', label: 'Qualité' },
    { code: 'ISO 14001', label: 'Environnement' },
    { code: 'ISO 45001', label: 'Santé & Sécurité' },
    { code: 'Label RSE', label: 'CGEM' },
  ],
  documents: [
    { title: 'Catalogue Béton 2024', size: 'PDF • 4.2 MB' },
    { title: 'Guide ECOPact Maroc', size: 'PDF • 1.8 MB' },
  ],
}

const tabs = ['Aperçu', 'Expertise', 'Projets', 'Documents']

// ─── Expert icon renderer ─────────────────────────────────────────────────────
function MaterialIcon({ name, className }: { name: string; className?: string }) {
  return (
    <span
      className={`material-symbols-outlined ${className ?? ''}`}
      style={{ fontFamily: "'Material Symbols Outlined'" }}
    >
      {name}
    </span>
  )
}

export default function AnnuaireDetailPage() {
  const [activeTab, setActiveTab] = useState('Aperçu')
  const [formData, setFormData] = useState({ nom: '', entreprise: '', email: '', message: '' })

  return (
    <div className="min-h-screen bg-[#f6f7f8] font-sans text-[#0e1f2f]">
      {/* Load Material Symbols font */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />

      {/* MOBILE LAYOUT */}
      <div className="lg:hidden flex flex-col h-screen overflow-hidden">
        {/* Mobile Header */}
        <header className="sticky top-0 z-50 flex items-center bg-white p-4 border-b border-[#0e1f2f]/10 justify-between">
          <div className="flex items-center gap-3">
            <button className="flex items-center justify-center p-2 text-[#0e1f2f] hover:bg-slate-100 rounded-full">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-lg font-bold leading-tight tracking-tight">{company.name}</h1>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center justify-center p-2 text-[#0e1f2f] hover:bg-slate-100 rounded-full">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="flex items-center justify-center p-2 text-[#0e1f2f] hover:bg-slate-100 rounded-full">
              <Bookmark className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Company Profile Summary */}
        <div className="bg-white p-4 border-b border-[#0e1f2f]/10">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <div className="bg-slate-100 rounded-lg min-w-[80px] h-[80px] flex items-center justify-center border border-slate-200">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0e1f2f] text-lg font-black text-white">
                  LH
                </div>
              </div>
              <div className="flex flex-col flex-1">
                <h2 className="text-xl font-bold text-[#0e1f2f]">{company.name}</h2>
                <p className="text-slate-600 text-sm">{company.tagline.split('&')[0].trim()}</p>
                <div className="flex items-center gap-1 mt-1 text-[#F28C28]">
                  <MapPin className="w-4 h-4" />
                  <span className="text-xs font-medium">{company.city}</span>
                </div>
              </div>
            </div>
            <div className="flex w-full gap-3 mt-2">
              <button className="flex-1 flex items-center justify-center rounded-lg h-11 bg-slate-100 text-[#0e1f2f] text-sm font-bold border border-slate-200 hover:bg-slate-200">
                Suivre
              </button>
              <button className="flex-1 flex items-center justify-center rounded-lg h-11 bg-[#0e1f2f] text-white text-sm font-bold shadow-sm hover:bg-[#0e1f2f]/90">
                Contacter
              </button>
            </div>
          </div>
        </div>

        {/* Tabbed Navigation */}
        <nav className="bg-white border-b border-slate-200 sticky top-[120px] z-40 overflow-x-auto no-scrollbar">
          <div className="flex px-4 gap-6 min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex flex-col items-center justify-center border-b-2 ${
                  activeTab === tab
                    ? 'border-[#F28C28] text-[#0e1f2f]'
                    : 'border-transparent text-slate-500 hover:text-[#0e1f2f]'
                } py-4 text-sm font-bold transition-colors`}
              >
                {tab}
              </button>
            ))}
          </div>
        </nav>

        {/* Main Content Section */}
        <main className="flex-1 overflow-y-auto pb-24">
          <div className="flex flex-col gap-6 p-4">
            {/* About Section */}
            {activeTab === 'Aperçu' && (
              <>
                <section>
                  <h3 className="text-lg font-bold text-[#0e1f2f] mb-3">À propos</h3>
                  <div className="text-slate-600 text-sm leading-relaxed">{company.about}</div>
                </section>

                {/* Expertise Grid */}
                <section>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-bold text-[#0e1f2f]">Expertise & Solutions</h3>
                    <a className="text-[#F28C28] text-sm font-semibold hover:underline">Voir tout</a>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {company.expertise.map((item) => (
                      <div
                        key={item.title}
                        className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-2 hover:border-[#F28C28]"
                      >
                        <div className="w-10 h-10 bg-[#0e1f2f]/10 rounded-lg flex items-center justify-center text-[#0e1f2f]">
                          <MaterialIcon name={item.icon} className="text-base" />
                        </div>
                        <p className="font-bold text-sm text-[#0e1f2f]">{item.title}</p>
                        <p className="text-xs text-slate-500">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Lead Gen Form */}
                <section className="bg-[#0e1f2f] rounded-2xl p-6 text-white overflow-hidden relative">
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-2">Demande de devis</h3>
                    <p className="text-slate-300 text-sm mb-4">Contactez nos experts pour vos projets de construction.</p>
                    <form className="flex flex-col gap-3">
                      <input
                        type="text"
                        placeholder="Type de projet"
                        className="w-full h-11 px-4 rounded-lg bg-white/10 border border-white/20 text-sm focus:ring-2 focus:ring-[#F28C28] focus:border-transparent text-white placeholder-slate-400"
                      />
                      <textarea
                        placeholder="Description de votre besoin"
                        rows={2}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-sm focus:ring-2 focus:ring-[#F28C28] focus:border-transparent text-white placeholder-slate-400 resize-none"
                      ></textarea>
                      <button
                        type="submit"
                        className="w-full h-11 bg-[#F28C28] hover:bg-orange-600 text-white font-bold rounded-lg transition-colors mt-2"
                      >
                        Envoyer la demande
                      </button>
                    </form>
                  </div>
                  <div className="absolute -right-4 -bottom-4 opacity-10 text-white text-[120px]">
                    <MaterialIcon name="engineering" />
                  </div>
                </section>

                {/* Technical Documents */}
                <section>
                  <h3 className="text-lg font-bold text-[#0e1f2f] mb-4">Fiches Techniques</h3>
                  <div className="flex flex-col gap-3">
                    {company.documents.map((doc) => (
                      <div
                        key={doc.title}
                        className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200 shadow-sm hover:bg-slate-50"
                      >
                        <div className="bg-red-50 text-red-600 p-2 rounded-lg">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-bold text-[#0e1f2f]">{doc.title}</p>
                          <p className="text-xs text-slate-500">{doc.size}</p>
                        </div>
                        <button className="text-slate-400 hover:text-[#0e1f2f]">
                          <Download className="w-5 h-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </section>
              </>
            )}

            {/* Expertise Tab */}
            {activeTab === 'Expertise' && (
              <section>
                <h3 className="text-lg font-bold text-[#0e1f2f] mb-4">Expertise & Solutions</h3>
                <div className="grid grid-cols-1 gap-4">
                  {company.expertise.map((item) => (
                    <div
                      key={item.title}
                      className="bg-white p-4 rounded-xl border border-slate-200 flex gap-4 shadow-sm hover:border-[#F28C28]"
                    >
                      <div className="w-12 h-12 bg-[#0e1f2f]/10 rounded-lg flex items-center justify-center text-[#0e1f2f] shrink-0">
                        <MaterialIcon name={item.icon} className="text-xl" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#0e1f2f]">{item.title}</h4>
                        <p className="text-sm text-slate-500 mt-1">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Projects Tab */}
            {activeTab === 'Projets' && (
              <section>
                <h3 className="text-lg font-bold text-[#0e1f2f] mb-4">Réalisations Majeures</h3>
                <div className="grid grid-cols-1 gap-4">
                  {company.projects.map((project) => (
                    <div
                      key={project.title}
                      className="relative h-40 overflow-hidden rounded-xl bg-slate-200 shadow-md"
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-[#0e1f2f]/10 via-transparent to-[#0e1f2f]/90" />
                      <div className="absolute bottom-0 left-0 p-4">
                        <span className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-[#F28C28]">
                          {project.category}
                        </span>
                        <h4 className="text-base font-bold text-white">{project.title}</h4>
                        <p className="mt-0.5 text-xs text-slate-300">{project.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Documents Tab */}
            {activeTab === 'Documents' && (
              <section>
                <h3 className="text-lg font-bold text-[#0e1f2f] mb-4">Fiches Techniques</h3>
                <div className="flex flex-col gap-3">
                  {company.documents.map((doc) => (
                    <div
                      key={doc.title}
                      className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200 shadow-sm hover:bg-slate-50"
                    >
                      <div className="bg-red-50 text-red-600 p-2 rounded-lg">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-bold text-[#0e1f2f]">{doc.title}</p>
                        <p className="text-xs text-slate-500">{doc.size}</p>
                      </div>
                      <button className="text-slate-400 hover:text-[#0e1f2f]">
                        <Download className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </main>

        {/* Bottom Navigation Bar */}
        <nav className="fixed bottom-0 left-0 right-0 z-50 flex border-t border-slate-200 bg-white px-4 pb-6 pt-2 justify-around shadow-lg">
          <Link href="/" className="flex flex-col items-center gap-1 text-slate-500 hover:text-[#0e1f2f]">
            <Home className="w-5 h-5" />
            <p className="text-[10px] font-medium leading-none">Accueil</p>
          </Link>
          <Link href="/annuaire" className="flex flex-col items-center gap-1 text-[#0e1f2f]">
            <Building2 className="w-5 h-5 text-[#F28C28]" />
            <p className="text-[10px] font-medium leading-none text-[#F28C28]">Annuaire</p>
          </Link>
          <Link href="/actualites" className="flex flex-col items-center gap-1 text-slate-500 hover:text-[#0e1f2f]">
            <Newspaper className="w-5 h-5" />
            <p className="text-[10px] font-medium leading-none">Actu</p>
          </Link>
          <Link href="/emplois" className="flex flex-col items-center gap-1 text-slate-500 hover:text-[#0e1f2f]">
            <Grid3x3 className="w-5 h-5" />
            <p className="text-[10px] font-medium leading-none">E-Shop</p>
          </Link>
          <Link href="/profile" className="flex flex-col items-center gap-1 text-slate-500 hover:text-[#0e1f2f]">
            <User className="w-5 h-5" />
            <p className="text-[10px] font-medium leading-none">Compte</p>
          </Link>
        </nav>
      </div>

      {/* DESKTOP LAYOUT */}
      <div className="hidden lg:block">
        <Navbar />

        <main className="mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-[#0e1f2f] transition-colors">
              Accueil
            </Link>
            <ChevronRight size={14} />
            <Link href="/annuaire" className="hover:text-[#0e1f2f] transition-colors">
              Annuaire
            </Link>
            <ChevronRight size={14} />
            <span className="font-medium text-[#0e1f2f]">{company.name}</span>
          </nav>

          {/* ── Hero Card ─────────────────────────────────────── */}
          <div className="mb-8 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            {/* Banner */}
            <div
              className="relative h-32 bg-[#0e1f2f]"
              style={{
                backgroundImage: "url('/images/company-bg.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-[#0e1f2f]/60" />
            </div>

            {/* Identity row */}
            <div className="relative z-10 flex flex-col gap-6 px-6 pb-0 md:flex-row md:items-end -mt-12">
              {/* Logo */}
              <div className="rounded-xl border border-slate-100 bg-white p-2 shadow-lg shrink-0">
                <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-lg bg-slate-50">
                  <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-[#0e1f2f] text-2xl font-black text-white">
                    LH
                  </div>
                </div>
              </div>

              {/* Name + meta */}
              <div className="flex-1 pb-2">
                <div className="mb-1 flex flex-wrap items-center gap-3">
                  <h1 className="text-3xl font-black text-[#0e1f2f]">{company.name}</h1>
                  {company.verified && (
                    <span className="flex items-center gap-1 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600">
                      <BadgeCheck size={13} />
                      Vérifié
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                  <span className="flex items-center gap-1">
                    <Factory size={14} />
                    {company.tagline}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} />
                    {company.city}
                  </span>
                  <span className="flex items-center gap-1 font-semibold text-[#F28C28]">
                    <Award size={14} />
                    {company.badge}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pb-2">
                <button className="flex items-center gap-2 rounded-lg border-2 border-slate-200 bg-slate-100 px-5 py-2.5 text-sm font-bold text-[#0e1f2f] transition-colors hover:bg-slate-200">
                  <UserPlus size={15} />
                  Suivre
                </button>
                <button className="flex items-center gap-2 rounded-lg bg-[#F28C28] px-5 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90">
                  <Share2 size={15} />
                  Partager
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="mt-4 border-t border-slate-100 px-6">
              <nav className="flex gap-8 overflow-x-auto">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`whitespace-nowrap border-b-2 py-4 text-sm font-semibold transition-colors ${
                      activeTab === tab
                        ? 'border-[#0e1f2f] text-[#0e1f2f]'
                        : 'border-transparent text-slate-400 hover:text-[#0e1f2f]'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* ── Main Grid ─────────────────────────────────────── */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Left column — content */}
            <div className="space-y-8 lg:col-span-2">
              {/* About */}
              <section className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
                <h2 className="mb-4 text-xl font-black text-[#0e1f2f]">
                  À propos de {company.name}
                </h2>
                <div className="space-y-4 leading-relaxed text-slate-600">
                  {company.about_full.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </section>

              {/* Expertise */}
              <section className="space-y-4" id="expertise">
                <h2 className="text-xl font-black text-[#0e1f2f]">Expertise & Solutions</h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {company.expertise.map((item) => (
                    <div
                      key={item.title}
                      className="flex gap-4 rounded-xl border border-slate-200 bg-white p-6 transition-colors hover:border-[#F28C28]"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-[#0e1f2f]">
                        <MaterialIcon name={item.icon} className="text-[22px]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#0e1f2f]">{item.title}</h3>
                        <p className="mt-1 text-sm text-slate-500">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Projects */}
              <section className="space-y-4" id="projects">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-black text-[#0e1f2f]">Réalisations Majeures</h2>
                  <a
                    href="#"
                    className="flex items-center gap-1 text-sm font-bold text-[#F28C28] hover:underline"
                  >
                    Voir tout
                    <ChevronRight size={14} />
                  </a>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {company.projects.map((project) => (
                    <div
                      key={project.title}
                      className="group relative h-64 overflow-hidden rounded-xl bg-slate-200 shadow-md"
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{ backgroundImage: `url('${project.image}')` }}
                      />
                      {/* Fallback gradient overlay (always visible) */}
                      <div className="absolute inset-0 bg-gradient-to-b from-[#0e1f2f]/10 via-transparent to-[#0e1f2f]/90" />
                      <div className="absolute bottom-0 left-0 p-6">
                        <span className="mb-2 block text-[10px] font-bold uppercase tracking-wider text-[#F28C28]">
                          {project.category}
                        </span>
                        <h3 className="text-lg font-bold text-white">{project.title}</h3>
                        <p className="mt-1 text-xs text-slate-300">{project.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Certifications */}
              <section
                className="rounded-xl border border-slate-200 bg-slate-50 p-8"
                id="certifications"
              >
                <h2 className="mb-6 text-sm font-bold uppercase tracking-widest text-slate-400">
                  Certifications & Standards
                </h2>
                <div className="flex flex-wrap justify-center gap-8 opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0">
                  {company.certifications.map((cert) => (
                    <div key={cert.code} className="flex flex-col items-center gap-2">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-slate-200 bg-white p-1 text-center text-xs font-bold text-[#0e1f2f]">
                        {cert.code}
                      </div>
                      <span className="text-[10px] font-bold text-slate-600">{cert.label}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* ── Right Sidebar ──────────────────────────────── */}
            <div className="space-y-6">
              {/* Contact form */}
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
                <div className="bg-[#0e1f2f] px-6 py-5 text-white">
                  <h3 className="text-lg font-black">Contact & Devis</h3>
                  <p className="mt-0.5 text-xs text-slate-400">Réponse moyenne sous 24h ouvrées</p>
                </div>
                <form
                  className="space-y-4 p-6"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div>
                    <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wide text-slate-500">
                      Nom Complet
                    </label>
                    <input
                      type="text"
                      placeholder="Jean Dupont"
                      value={formData.nom}
                      onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-[#0e1f2f] placeholder-slate-400 focus:border-[#F28C28] focus:outline-none focus:ring-2 focus:ring-[#F28C28]/20"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wide text-slate-500">
                      Entreprise
                    </label>
                    <input
                      type="text"
                      placeholder="SARL Construction"
                      value={formData.entreprise}
                      onChange={(e) => setFormData({ ...formData, entreprise: e.target.value })}
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-[#0e1f2f] placeholder-slate-400 focus:border-[#F28C28] focus:outline-none focus:ring-2 focus:ring-[#F28C28]/20"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wide text-slate-500">
                      Email Professionnel
                    </label>
                    <input
                      type="email"
                      placeholder="j.dupont@entreprise.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-[#0e1f2f] placeholder-slate-400 focus:border-[#F28C28] focus:outline-none focus:ring-2 focus:ring-[#F28C28]/20"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wide text-slate-500">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Détaillez votre projet ou demande de spécification..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-[#0e1f2f] placeholder-slate-400 focus:border-[#F28C28] focus:outline-none focus:ring-2 focus:ring-[#F28C28]/20"
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#F28C28] py-3 text-sm font-bold text-white shadow-md transition-opacity hover:opacity-90"
                  >
                    <Send size={15} />
                    Envoyer la demande
                  </button>
                  <p className="text-center text-[10px] italic text-slate-400">
                    Vos coordonnées sont transmises uniquement à {company.name}.
                  </p>
                </form>
              </div>

              {/* Technical documents */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="mb-4 flex items-center gap-2 font-black text-[#0e1f2f]">
                  <FileText size={16} />
                  Documents Techniques
                </h3>
                <div className="space-y-3">
                  {company.documents.map((doc) => (
                    <a
                      key={doc.title}
                      href="#"
                      className="group flex items-center justify-between rounded-lg border border-slate-100 p-3 transition-colors hover:bg-slate-50"
                    >
                      <div className="flex items-center gap-3">
                        <FileText size={18} className="text-red-500" />
                        <div>
                          <p className="text-sm font-semibold text-[#0e1f2f]">{doc.title}</p>
                          <p className="text-[10px] uppercase text-slate-400">{doc.size}</p>
                        </div>
                      </div>
                      <Download
                        size={16}
                        className="text-slate-300 transition-colors group-hover:text-[#0e1f2f]"
                      />
                    </a>
                  ))}
                </div>
              </div>

              {/* Key stats */}
              <div className="rounded-xl border-l-4 border-[#F28C28] bg-[#0e1f2f]/5 p-6">
                <p className="mb-4 text-[10px] font-bold uppercase tracking-widest text-[#0e1f2f]">
                  Chiffres Clés
                </p>
                <div className="space-y-4">
                  {company.stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="text-3xl font-black text-[#0e1f2f]">{stat.value}</p>
                      <p className="text-xs text-slate-500">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}
