'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Search, MapPin, Building2, Clock, Briefcase, Filter, X, Home, Newspaper, User } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const jobs = [
  {
    id: 1,
    title: 'Directeur de Travaux - Pont de Jacqueville',
    company: 'Eiffage Infrastructures',
    logo: 'https://images.unsplash.com/photo-1633356713697-7b4b1be9d2c5?w=100&h=100&fit=crop',
    location: 'Abidjan, Côte d\'Ivoire',
    contract: 'CDI',
    sector: 'Infrastructures',
    posted: 'Il y a 2 jours',
    salary: '$120k - $160k',
    description: 'Sous la responsabilité de la direction opérationnelle, vous pilotez l\'ensemble des phases du projet de construction du nouveau pont. Management d\'une équipe de 50 personnes...',
    featured: false,
  },
  {
    id: 2,
    title: 'Ingénieur Structure Senior H/F',
    company: 'Egis Maroc',
    logo: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=100&h=100&fit=crop',
    location: 'Casablanca, Maroc',
    contract: 'Mission',
    sector: 'Bureaux d\'études',
    posted: 'Il y a 5 heures',
    salary: 'Selon profil',
    description: 'Rattaché au pôle Ingénierie, vous assurez la conception et le dimensionnement de structures complexes en béton armé et charpente métallique pour des projets tertiaires d\'envergure...',
    featured: false,
  },
  {
    id: 3,
    title: 'Chef de Projet Solaire & Infrastructures',
    company: 'Scatec Energy',
    logo: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=100&h=100&fit=crop',
    location: 'Dakar, Sénégal',
    contract: 'CDI',
    sector: 'Énergie',
    posted: 'Hier',
    salary: 'Expat package',
    description: 'Leader sur le marché des énergies renouvelables, nous recrutons un Chef de Projet pour superviser l\'installation d\'une centrale photovoltaïque de 50MW...',
    featured: true,
    premium: true,
  },
  {
    id: 4,
    title: 'Senior Project Manager',
    company: 'LafargeHolcim Group',
    logo: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=100&h=100&fit=crop',
    location: 'Nairobi, Kenya',
    contract: 'Full-time',
    sector: 'Matériaux',
    posted: '4h ago',
    salary: 'Negotiable',
    description: 'Lead infrastructure projects and manage cross-functional teams in East Africa region.',
    featured: false,
  },
  {
    id: 5,
    title: 'Senior Hydropower Engineer',
    company: 'Global Energy Partners',
    logo: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=100&h=100&fit=crop',
    location: 'Addis Ababa, Ethiopia',
    contract: 'Contract',
    sector: 'Énergie',
    posted: '1d ago',
    salary: 'Competitive',
    description: 'Design and oversee hydropower projects with cutting-edge technology.',
    featured: false,
  },
  {
    id: 6,
    title: 'Urban Planning Consultant',
    company: 'Sino-Afri Construction Co.',
    logo: 'https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=100&h=100&fit=crop',
    location: 'Lagos, Nigeria',
    contract: 'Full-time',
    sector: 'Urbanisme',
    posted: '5d ago',
    salary: '$85k - $110k',
    description: 'Lead urban development projects and create sustainable city plans.',
    featured: false,
  },
]

const sectors = [
  'Tous les secteurs',
  'Gros Œuvre',
  'Ingénierie',
  'Management',
  'Énergie',
  'Urbanisme',
  'Architecture',
  'HSE',
]

const contractTypes = ['Tous types', 'CDI', 'CDD', 'Mission', 'Freelance', 'Contract', 'Full-time']
const locations = ['Tous les pays', 'Maroc', 'Côte d\'Ivoire', 'Sénégal', 'Kenya', 'Nigeria', 'Algérie', 'Cameroun']

export default function EmploisPage() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [selectedSector, setSelectedSector] = useState('Tous les secteurs')
  const [selectedContract, setSelectedContract] = useState('Tous types')
  const [selectedLocation, setSelectedLocation] = useState('Tous les pays')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredJobs = jobs.filter((job) => {
    const matchesSector = selectedSector === 'Tous les secteurs' || job.sector === selectedSector
    const matchesContract = selectedContract === 'Tous types' || job.contract === selectedContract
    const matchesLocation = selectedLocation === 'Tous les pays' || job.location.includes(selectedLocation)
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesSector && matchesContract && matchesLocation && matchesSearch
  })

  return (
    <main className="bg-white dark:bg-slate-900">
      <Navbar />

      {/* MOBILE LAYOUT */}
      <div className="lg:hidden flex flex-col h-screen bg-[#f6f7f8]">
        {/* Mobile Header */}
        <header className="sticky top-0 z-40 bg-white border-b border-[#0e1f2f]/10">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-2">
              <div className="bg-[#0e1f2f] p-1.5 rounded-lg">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-[#0e1f2f] text-lg font-bold">InfraBuild <span className="text-[#F28C28]">Africa</span></h1>
            </div>
            <button className="p-2 hover:bg-slate-100 rounded-full">
              <Clock className="w-5 h-5 text-[#0e1f2f]" />
            </button>
          </div>

          {/* Mobile Search Bar */}
          <div className="px-4 pb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Senior Project Manager, Civil Engineer..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-[#0e1f2f]/10 rounded-xl text-sm focus:ring-2 focus:ring-[#F28C28] focus:border-transparent"
              />
            </div>
          </div>

          {/* Mobile Filter Pills */}
          <div className="flex gap-2 px-4 pb-4 overflow-x-auto no-scrollbar">
            <button className="flex items-center gap-2 shrink-0 h-10 rounded-full bg-[#0e1f2f] text-white px-4 text-sm font-medium hover:bg-[#0e1f2f]/90">
              <MapPin className="w-4 h-4" />
              Location
              <Clock className="w-3.5 h-3.5" />
            </button>
            <button className="flex items-center gap-2 shrink-0 h-10 rounded-full bg-white border border-[#0e1f2f]/10 px-4 text-sm font-medium text-[#0e1f2f] hover:bg-slate-50">
              <Briefcase className="w-4 h-4" />
              Contract
              <Clock className="w-3.5 h-3.5" />
            </button>
            <button className="flex items-center gap-2 shrink-0 h-10 rounded-full bg-white border border-[#0e1f2f]/10 px-4 text-sm font-medium text-[#0e1f2f] hover:bg-slate-50">
              <Building2 className="w-4 h-4" />
              Sector
              <Clock className="w-3.5 h-3.5" />
            </button>
            <button className="flex items-center gap-2 shrink-0 h-10 rounded-full bg-white border border-[#0e1f2f]/10 px-4 text-sm font-medium text-[#0e1f2f] hover:bg-slate-50">
              <Filter className="w-4 h-4" />
              Salary
              <Clock className="w-3.5 h-3.5" />
            </button>
          </div>
        </header>

        {/* Mobile Job List */}
        <div className="flex-1 overflow-y-auto pb-24">
          <div className="p-4 space-y-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-[#0e1f2f] text-lg font-bold">Featured Opportunities</h2>
              <span className="text-xs font-semibold text-[#0e1f2f]/60">{filteredJobs.length} Results</span>
            </div>

            {filteredJobs.map((job) => (
              <Link
                key={job.id}
                href={`/emplois/${job.id}`}
                className="bg-white p-5 rounded-xl border border-[#0e1f2f]/5 shadow-sm hover:border-[#F28C28]/30 transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#0e1f2f]/5 flex items-center justify-center">
                    <img 
                      alt={job.company}
                      src={job.logo}
                      className="w-8 h-8 object-contain rounded"
                    />
                  </div>
                  {job.premium && (
                    <span className="bg-[#F28C28]/10 text-[#F28C28] text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Premium</span>
                  )}
                </div>

                <h3 className="text-[#0e1f2f] font-bold text-lg mb-1 leading-tight">{job.title}</h3>
                <p className="text-[#0e1f2f]/70 text-sm font-medium mb-4">{job.company}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <div className="flex items-center gap-1 bg-[#f6f7f8] px-2 py-1 rounded text-[11px] font-semibold text-[#0e1f2f]/70">
                    <MapPin className="w-3.5 h-3.5" />
                    {job.location.split(',')[0]}
                  </div>
                  <div className="flex items-center gap-1 bg-[#0e1f2f]/10 text-[#0e1f2f] px-2 py-1 rounded text-[11px] font-bold">
                    <Briefcase className="w-3.5 h-3.5" />
                    {job.contract}
                  </div>
                  <div className="flex items-center gap-1 bg-[#f6f7f8] px-2 py-1 rounded text-[11px] font-semibold text-[#0e1f2f]/70">
                    <Clock className="w-3.5 h-3.5" />
                    {job.posted}
                  </div>
                </div>

                <div className="border-t border-[#0e1f2f]/5 pt-4 flex items-center justify-between">
                  <span className="text-[#F28C28] font-bold text-sm">{job.salary}</span>
                  <button className="bg-[#0e1f2f] text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-[#0e1f2f]/90">
                    View Details
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#0e1f2f]/10 px-2 pb-6 pt-2 z-40">
          <div className="flex justify-around items-center max-w-md mx-auto">
            <Link href="/" className="flex flex-col items-center gap-1 py-1 px-3 text-[#0e1f2f]/50 hover:text-[#0e1f2f] transition-colors">
              <Home className="w-5 h-5" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Home</span>
            </Link>
            <Link href="/annuaire" className="flex flex-col items-center gap-1 py-1 px-3 text-[#0e1f2f]/50 hover:text-[#0e1f2f] transition-colors">
              <Building2 className="w-5 h-5" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Directory</span>
            </Link>
            <Link href="/actualites" className="flex flex-col items-center gap-1 py-1 px-3 text-[#0e1f2f]/50 hover:text-[#0e1f2f] transition-colors">
              <Newspaper className="w-5 h-5" />
              <span className="text-[10px] font-bold uppercase tracking-wider">News</span>
            </Link>
            <Link href="/emplois" className="flex flex-col items-center gap-1 py-1 px-3 text-[#0e1f2f] relative">
              <Briefcase className="w-5 h-5 text-[#F28C28] font-bold" />
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#F28C28]">Jobs</span>
              <div className="absolute -top-1 right-2 w-1.5 h-1.5 bg-[#F28C28] rounded-full"></div>
            </Link>
            <Link href="/profile" className="flex flex-col items-center gap-1 py-1 px-3 text-[#0e1f2f]/50 hover:text-[#0e1f2f] transition-colors">
              <User className="w-5 h-5" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Profile</span>
            </Link>
          </div>
        </nav>
      </div>

      {/* DESKTOP LAYOUT */}
      <div className="hidden lg:block">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#0e1f2f] to-[#1a2d42] text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(#F28C28_1px,transparent_1px)] [background-size:40px_40px]"></div>
          </div>
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <span className="inline-block bg-[#F28C28] text-[#0e1f2f] font-bold text-xs uppercase px-3 py-1 rounded-full mb-4">Portail Recrutement BTP</span>
            <h2 className="text-5xl lg:text-6xl font-black leading-tight mb-6">Opportunités de Carrière BTP & Infrastructures</h2>
            <p className="text-lg text-slate-300 font-light max-w-2xl">
              Trouvez les meilleurs talents et opportunités stratégiques au Maroc, en Côte d'Ivoire, au Sénégal et dans toute l'Afrique.
            </p>
          </div>
        </section>

        {/* Search & Filter Card */}
        <section className="max-w-7xl mx-auto px-8 -mt-10 relative z-20 mb-12">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-lg shadow-xl border border-slate-200 dark:border-slate-800">
            <form className="grid grid-cols-4 gap-4 mb-6">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Mots-clés</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Poste, métier, entreprise..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded focus:ring-2 focus:ring-[#F28C28] focus:border-transparent text-slate-900 dark:text-white"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Localisation</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded focus:ring-2 focus:ring-[#F28C28] focus:border-transparent text-slate-900 dark:text-white appearance-none"
                  >
                    {locations.map((l) => (
                      <option key={l} value={l}>
                        {l}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Catégorie</label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <select
                    value={selectedSector}
                    onChange={(e) => setSelectedSector(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded focus:ring-2 focus:ring-[#F28C28] focus:border-transparent text-slate-900 dark:text-white appearance-none"
                  >
                    {sectors.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5 justify-end">
                <button className="w-full py-3 bg-[#0e1f2f] dark:bg-white text-white dark:text-slate-900 font-bold rounded hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors flex items-center justify-center gap-2">
                  <Search className="w-4 h-4" />
                  Rechercher les offres
                </button>
              </div>
            </form>

            {/* Quick filters */}
            <div className="flex flex-wrap gap-2">
              <span className="text-xs font-bold text-slate-400 uppercase self-center mr-2">Filtres rapides :</span>
              <button className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition-colors">CDI</button>
              <button className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition-colors">Mission</button>
              <button className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition-colors">Freelance</button>
              <button className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition-colors">Grands Projets</button>
            </div>
          </div>
        </section>

        {/* Main Content Grid */}
        <section className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-12 gap-8">
          {/* Job List */}
          <div className="col-span-8 space-y-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                <div className="w-1.5 h-8 bg-[#F28C28] rounded-full"></div>
                Dernières Offres d'Emploi
              </h3>
              <span className="text-sm text-slate-500 dark:text-slate-400">{filteredJobs.length} offres trouvées</span>
            </div>

            {filteredJobs.map((job) => (
              <Link
                key={job.id}
                href={`/emplois/${job.id}`}
                className={`bg-white dark:bg-slate-900 p-6 rounded border transition-all hover:shadow-md group cursor-pointer ${
                  job.featured ? 'border-l-4 border-l-[#F28C28] border-slate-200 dark:border-slate-800' : 'border-slate-200 dark:border-slate-800'
                }`}
              >
                <div className="flex gap-6">
                  <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded flex-shrink-0 flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-[#F28C28]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <div className="flex items-center gap-2">
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#F28C28] transition-colors leading-snug">
                          {job.title}
                        </h4>
                        {job.premium && (
                          <span className="bg-[#F28C28]/10 text-[#F28C28] text-[10px] px-2 py-0.5 rounded font-black uppercase">Premium</span>
                        )}
                      </div>
                      <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">{job.posted}</span>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400 mb-3">
                      <span className="font-bold flex items-center gap-1">
                        <Building2 className="w-4 h-4" />
                        {job.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                    </div>

                    <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mb-4 leading-relaxed">{job.description}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        <span className="px-2 py-0.5 bg-slate-900 dark:bg-slate-700 text-white dark:text-slate-200 text-[10px] font-bold uppercase rounded">{job.contract}</span>
                        <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-bold uppercase rounded">{job.sector}</span>
                      </div>
                      <button className="text-xs font-bold text-slate-900 dark:text-[#F28C28] hover:underline">Voir les détails →</button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}

            <div className="text-center pt-4">
              <button className="px-8 py-3 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold rounded hover:bg-slate-300 transition-colors">
                Afficher plus d'offres
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="col-span-4 space-y-8">
            {/* Post Job CTA */}
            <div className="bg-[#0e1f2f] p-8 rounded text-white">
              <h4 className="text-xl font-bold mb-4">Vous recrutez ?</h4>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                Accédez à une CVthèque de plus de 50 000 experts du BTP et des infrastructures en Afrique.
              </p>
              <button className="w-full py-3 bg-[#F28C28] text-white font-bold rounded shadow-lg hover:scale-105 transition-transform">
                Publiez votre offre
              </button>
              <p className="text-[10px] text-center mt-3 text-slate-400 uppercase font-semibold">Réponse sous 24h garantie</p>
            </div>

            {/* Top Recruiters */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded p-6">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-6 pb-2 border-b-2 border-[#F28C28] inline-block">
                Top Recruteurs
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square bg-slate-50 dark:bg-slate-800 rounded flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all cursor-pointer">
                    <Building2 className="w-8 h-8 text-slate-400" />
                  </div>
                ))}
              </div>
            </div>

            {/* Job Alerts */}
            <div className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded p-6">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">Alerte Emploi</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">Recevez les dernières offres directement par email.</p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Votre email professionnel"
                  className="w-full text-sm px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded focus:ring-2 focus:ring-[#F28C28] text-slate-900 dark:text-white"
                />
                <button className="w-full py-3 bg-[#0e1f2f] dark:bg-white text-white dark:text-slate-900 text-sm font-bold rounded hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors">
                  S'inscrire aux alertes
                </button>
              </form>
            </div>
          </aside>
        </section>
      </div>

      {/* Desktop Footer */}
      <div className="hidden lg:block">
        <Footer />
      </div>
    </main>
  )
}
