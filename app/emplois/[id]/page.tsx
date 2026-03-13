'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  Share2,
  Building2,
  MapPin,
  Clock,
  Briefcase,
  BanknoteIcon,
  GraduationCap,
  CheckCircle2,
  ChevronDown,
  Link2,
  Send,
  Home,
  Bell,
  Heart,
  User,
  UploadCloud,
  History,
  Brain,
  ArrowRight,
} from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const jobData = {
  id: 1,
  title: 'Ingénieur Structure Senior',
  company: 'Egis Group',
  sector: 'Construction & Ingénierie',
  location: 'Abidjan, Côte d\'Ivoire',
  contract: 'CDI / Mission Longue Durée',
  published: '24 Octobre 2024',
  postedAgo: 'il y a 2 jours',
  salary: '55k – 70k€',
  experience: '8–10 ans',
  city: 'Abidjan',
  logo: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=200&h=200&fit=crop',
  description:
    'En tant qu\'Ingénieur Structure Senior chez Egis Group, vous jouerez un rôle pivot dans la réalisation de projets d\'infrastructure et de bâtiments complexes en Afrique de l\'Ouest. Vous interviendrez depuis la phase de conception préliminaire jusqu\'à la supervision technique sur site, assurant l\'excellence technique et la pérennité des ouvrages.',
  missions: [
    'Piloter les études de conception et d\'exécution pour des structures en béton armé, charpente métallique et mixte.',
    'Superviser l\'équipe de projeteurs et d\'ingénieurs juniors pour garantir la cohérence technique des livrables.',
    'Réaliser des modélisations complexes sous outils BIM (Revit, Robot Structural Analysis) et optimiser les calculs.',
    'Assurer l\'interface technique avec les architectes, les clients et les bureaux de contrôle.',
    'Veiller au respect des normes internationales (Eurocodes, ACI) et des contraintes locales de construction.',
  ],
  profile: {
    formation: 'Diplôme d\'Ingénieur en Génie Civil (Bac+5 minimum) d\'une grande école reconnue (type ESTP, INSA, CHEBAP).',
    experience: 'Minimum 10 ans d\'expérience réussie en bureau d\'études structures, avec des références sur des projets de grande envergure.',
    skills: 'Maîtrise avancée de Robot, SCIA ou équivalent. Pratique courante du BIM (Revit). Expertise en calcul sismique. Anglais technique opérationnel.',
  },
  about:
    'Acteur majeur du conseil, de l\'ingénierie et de l\'exploitation, Egis accompagne les territoires dans la réussite de leur transition énergétique et écologique.',
}

function DesktopView() {
  const [openSection, setOpenSection] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    motivation: '',
  })

  const toggle = (section: string) =>
    setOpenSection(openSection === section ? null : section)

  return (
    <div className="hidden lg:block bg-[#f6f7f8] min-h-screen">
      {/* Hero */}
      <section className="bg-[#0e1f2f] text-white py-14 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-white/20 rounded-full blur-3xl" />
          <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-[#F28C28]/20 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F28C28]/10 border border-[#F28C28]/20 text-[#F28C28] text-xs font-bold uppercase tracking-wider">
                {jobData.contract}
              </div>
              <h1 className="text-4xl lg:text-5xl font-black tracking-tight leading-tight max-w-2xl text-pretty">
                {jobData.title}
              </h1>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-slate-300 font-medium text-sm">
                <div className="flex items-center gap-1.5">
                  <Building2 className="w-4 h-4" />
                  <span>{jobData.company}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  <span>{jobData.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  <span>Publié {jobData.postedAgo}</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block shrink-0">
              <img
                src={jobData.logo}
                alt={`Logo ${jobData.company}`}
                className="w-24 h-24 rounded-xl border-4 border-white/10 object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Main */}
          <div className="lg:col-span-8 space-y-10">

            {/* Description */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 space-y-8">
              <div>
                <h3 className="text-xl font-bold text-[#0e1f2f] border-l-4 border-[#F28C28] pl-4 mb-5 uppercase tracking-tight">
                  Description du poste
                </h3>
                <p className="text-base leading-relaxed text-slate-700">
                  {jobData.description}
                </p>
              </div>

              {/* Missions */}
              <div>
                <h3 className="text-xl font-bold text-[#0e1f2f] border-l-4 border-[#F28C28] pl-4 mb-5 uppercase tracking-tight">
                  Missions principales
                </h3>
                <ul className="space-y-3 list-none p-0">
                  {jobData.missions.map((mission, i) => (
                    <li key={i} className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#F28C28] shrink-0 mt-0.5" />
                      <span className="text-slate-700">{mission}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Profil */}
              <div>
                <h3 className="text-xl font-bold text-[#0e1f2f] border-l-4 border-[#F28C28] pl-4 mb-5 uppercase tracking-tight">
                  Profil Recherché
                </h3>
                <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 space-y-5">
                  <div className="flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-[#0e1f2f] mt-1 shrink-0" />
                    <div>
                      <p className="font-bold text-[#0e1f2f]">Formation</p>
                      <p className="text-slate-600 text-sm mt-0.5">{jobData.profile.formation}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <History className="w-5 h-5 text-[#0e1f2f] mt-1 shrink-0" />
                    <div>
                      <p className="font-bold text-[#0e1f2f]">Expérience</p>
                      <p className="text-slate-600 text-sm mt-0.5">{jobData.profile.experience}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Brain className="w-5 h-5 text-[#0e1f2f] mt-1 shrink-0" />
                    <div>
                      <p className="font-bold text-[#0e1f2f]">Compétences Techniques</p>
                      <p className="text-slate-600 text-sm mt-0.5">{jobData.profile.skills}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Share */}
            <div className="pt-2">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
                Partager cette offre
              </h4>
              <div className="flex gap-3">
                <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#0e1f2f] hover:bg-[#0e1f2f] hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.676V1.325C24 .593 23.407 0 22.675 0z" />
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#0e1f2f] hover:bg-[#0e1f2f] hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5V5c0-2.761-2.238-5-5-5zm-11 19H5v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z" />
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#0e1f2f] hover:bg-[#0e1f2f] hover:text-white transition-all">
                  <Link2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Application Form */}
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 sticky top-28">
              <h2 className="text-xl font-bold text-[#0e1f2f] mb-6">
                Postuler à cette offre
              </h2>
              <form className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase">Nom</label>
                    <input
                      type="text"
                      placeholder="Votre nom"
                      value={formData.nom}
                      onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 focus:border-[#F28C28] focus:ring-[#F28C28] text-sm py-2.5 px-3 outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase">Prénom</label>
                    <input
                      type="text"
                      placeholder="Votre prénom"
                      value={formData.prenom}
                      onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 focus:border-[#F28C28] focus:ring-[#F28C28] text-sm py-2.5 px-3 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase">Email Professionnel</label>
                  <input
                    type="email"
                    placeholder="email@exemple.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 focus:border-[#F28C28] focus:ring-[#F28C28] text-sm py-2.5 px-3 outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase">Curriculum Vitae (CV)</label>
                  <div className="relative border-2 border-dashed border-slate-300 rounded-lg p-4 text-center hover:border-[#F28C28] transition-colors cursor-pointer group">
                    <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                    <UploadCloud className="w-6 h-6 text-slate-400 group-hover:text-[#F28C28] mx-auto mb-1 transition-colors" />
                    <p className="text-[10px] text-slate-500">PDF, DOCX (Max. 5Mo)</p>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase">Lettre de motivation</label>
                  <textarea
                    rows={4}
                    placeholder="Votre message ou lettre de motivation..."
                    value={formData.motivation}
                    onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 focus:border-[#F28C28] focus:ring-[#F28C28] text-sm py-2.5 px-3 outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#F28C28] hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-200 transition-all uppercase tracking-widest text-sm"
                >
                  Envoyer ma candidature
                </button>
                <p className="text-[10px] text-center text-slate-400 leading-relaxed">
                  En postulant, vous acceptez nos conditions d'utilisation et notre politique de protection des données personnelles.
                </p>
              </form>
            </div>

            {/* About Company */}
            <div className="bg-slate-100 rounded-2xl p-8 space-y-4">
              <div className="flex items-center gap-4">
                <img
                  src={jobData.logo}
                  alt={`Logo ${jobData.company}`}
                  className="w-16 h-16 rounded-lg object-cover bg-white p-1"
                />
                <div>
                  <h4 className="font-bold text-[#0e1f2f]">À propos d'Egis</h4>
                  <p className="text-xs text-slate-500">Ingénierie &amp; Construction</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">{jobData.about}</p>
              <a
                href="#"
                className="inline-flex items-center text-sm font-bold text-[#0e1f2f] hover:underline gap-1"
              >
                Voir tous les postes
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

function MobileView() {
  const [openSection, setOpenSection] = useState<string>('missions')
  const [formData, setFormData] = useState({ nom: '', email: '' })

  const toggle = (section: string) =>
    setOpenSection(openSection === section ? '' : section)

  return (
    <div className="lg:hidden flex flex-col bg-white min-h-screen">
      {/* Mobile Header */}
      <header className="sticky top-0 z-50 flex items-center bg-white border-b border-slate-200 justify-between px-4 py-3">
        <Link href="/emplois" className="flex items-center justify-center w-10 h-10 text-[#0e1f2f]">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-sm font-bold text-[#0e1f2f] uppercase tracking-widest flex-1 text-center truncate px-2">
          Détails de l'offre
        </h1>
        <button className="flex items-center justify-center w-10 h-10 text-[#0e1f2f]">
          <Share2 className="w-5 h-5" />
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto pb-32">

        {/* Logo + Title */}
        <div className="p-6 flex flex-col items-center border-b border-slate-100">
          <div className="mb-4">
            <div className="bg-white p-2 rounded-xl shadow-sm border border-slate-100">
              <img
                src={jobData.logo}
                alt={`Logo ${jobData.company}`}
                className="w-20 h-20 object-contain rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center px-2 py-1 bg-[#F28C28]/10 text-[#F28C28] text-[10px] font-bold uppercase tracking-wider rounded mb-2">
              CDI • Temps Plein
            </div>
            <h2 className="text-[#0e1f2f] text-2xl font-extrabold leading-tight tracking-tight px-4 text-balance">
              {jobData.title}
            </h2>
            <p className="text-slate-500 text-sm font-semibold mt-1">
              {jobData.company} • {jobData.sector}
            </p>
            <div className="flex items-center gap-2 mt-2 text-slate-400 text-xs">
              <Clock className="w-3.5 h-3.5" />
              <span>Publié le {jobData.published}</span>
            </div>
          </div>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-3 gap-2 p-4">
          <div className="flex flex-col items-center justify-center gap-1 rounded-xl bg-slate-50 p-4 border border-slate-100">
            <BanknoteIcon className="w-5 h-5 text-[#F28C28] mb-1" />
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-tighter">Salaire</p>
            <p className="text-[#0e1f2f] text-sm font-bold">{jobData.salary}</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 rounded-xl bg-slate-50 p-4 border border-slate-100">
            <Briefcase className="w-5 h-5 text-[#F28C28] mb-1" />
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-tighter">Exp.</p>
            <p className="text-[#0e1f2f] text-sm font-bold">{jobData.experience}</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 rounded-xl bg-slate-50 p-4 border border-slate-100">
            <MapPin className="w-5 h-5 text-[#F28C28] mb-1" />
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-tighter">Lieu</p>
            <p className="text-[#0e1f2f] text-sm font-bold">{jobData.city}</p>
          </div>
        </div>

        {/* Accordion Sections */}
        <div className="px-4 py-2">
          {/* Missions */}
          <div className="border-b border-slate-100 py-4">
            <button
              onClick={() => toggle('missions')}
              className="flex w-full cursor-pointer items-center justify-between"
            >
              <span className="text-[#0e1f2f] font-bold text-sm uppercase tracking-wider flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#F28C28] rounded-full" />
                Missions
              </span>
              <ChevronDown
                className={`w-5 h-5 text-slate-400 transition-transform ${openSection === 'missions' ? 'rotate-180' : ''}`}
              />
            </button>
            {openSection === 'missions' && (
              <div className="mt-4 text-slate-600 text-sm leading-relaxed space-y-3">
                <p>En tant qu'Ingénieur Structure Senior, vous serez le garant de la qualité technique des projets d'envergure.</p>
                <ul className="list-disc pl-5 space-y-2">
                  {jobData.missions.map((m, i) => (
                    <li key={i}>{m}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Profil */}
          <div className="border-b border-slate-100 py-4">
            <button
              onClick={() => toggle('profil')}
              className="flex w-full cursor-pointer items-center justify-between"
            >
              <span className="text-[#0e1f2f] font-bold text-sm uppercase tracking-wider flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#F28C28] rounded-full" />
                Profil recherché
              </span>
              <ChevronDown
                className={`w-5 h-5 text-slate-400 transition-transform ${openSection === 'profil' ? 'rotate-180' : ''}`}
              />
            </button>
            {openSection === 'profil' && (
              <div className="mt-4 text-slate-600 text-sm leading-relaxed space-y-3">
                <p>{jobData.profile.formation}</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>{jobData.profile.experience}</li>
                  <li>{jobData.profile.skills}</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Quick Apply Form */}
        <div className="p-6 bg-slate-50 mt-4 rounded-t-3xl border-t border-slate-100">
          <h3 className="text-[#0e1f2f] text-lg font-bold mb-6 flex items-center gap-2">
            <Send className="w-5 h-5 text-[#F28C28]" />
            Candidature rapide
          </h3>
          <form className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5 ml-1">
                Nom Complet
              </label>
              <input
                type="text"
                placeholder="Jean Dupont"
                value={formData.nom}
                onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-[#F28C28] focus:border-transparent outline-none text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5 ml-1">
                Email
              </label>
              <input
                type="email"
                placeholder="jean.dupont@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-[#F28C28] focus:border-transparent outline-none text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5 ml-1">
                Curriculum Vitae (PDF)
              </label>
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-slate-300 border-dashed rounded-xl cursor-pointer bg-white hover:bg-slate-50 transition-colors">
                <UploadCloud className="w-6 h-6 text-slate-400 mb-2" />
                <p className="text-xs text-slate-500">Cliquez pour ajouter votre CV</p>
                <input type="file" className="hidden" />
              </label>
            </div>
            <button
              type="submit"
              className="w-full h-14 bg-[#0e1f2f] text-white font-bold rounded-xl shadow-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 mt-4"
            >
              Postuler maintenant
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-slate-200 px-6 py-2 flex justify-between items-center z-50">
        <Link href="/" className="flex flex-col items-center gap-1 text-slate-400">
          <Home className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Accueil</span>
        </Link>
        <a href="#" className="flex flex-col items-center gap-1 text-slate-400">
          <Bell className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Alertes</span>
        </a>
        <a href="#" className="flex flex-col items-center gap-1 text-slate-400">
          <Heart className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Favoris</span>
        </a>
        <Link href="/emplois" className="flex flex-col items-center gap-1 text-[#0e1f2f]">
          <Briefcase className="w-6 h-6 text-[#F28C28]" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#F28C28]">Offres</span>
        </Link>
        <a href="#" className="flex flex-col items-center gap-1 text-slate-400">
          <User className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Profil</span>
        </a>
      </nav>
    </div>
  )
}

export default function EmploiDetailPage({ params }: { params: { id: string } }) {
  return (
    <>
      <div className="hidden lg:block">
        <Navbar />
      </div>

      <MobileView />
      <DesktopView />

      <div className="hidden lg:block">
        <Footer />
      </div>
    </>
  )
}
