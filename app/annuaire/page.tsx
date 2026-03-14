'use client'

import Link from "next/link"
import { useState } from "react"
import {
  Search,
  MapPin,
  Building2,
  Star,
  BadgeCheck,
  Map,
  HardHat,
  PaintBucket,
  Wrench,
  Zap,
  Cog,
  Ruler,
  ChevronDown,
  Home,
  Newspaper,
  Briefcase,
  User,
  Bell,
  Menu,
  BookOpen,
  Mail,
  Shield,
  Pencil,
  ExternalLink,
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const sectors = [
  { icon: Pencil, label: "Architecture" },
  { icon: HardHat, label: "Gros Œuvre" },
  { icon: PaintBucket, label: "Second Œuvre" },
  { icon: Zap, label: "Énergie" },
  { icon: Ruler, label: "Ingénierie" },
  { icon: Cog, label: "Équipements" },
]

const popularTags = ["Gros Œuvre", "Architectes", "Cimenterie", "Énergie Solaire"]

const premiumCompanies = [
  {
    name: "Holcim Switzerland",
    sector: "Matériaux de construction",
    city: "Zurich, Suisse",
    employees: "500+ employés",
    badge: "Vérifié",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvjb6TVw-zTimhezAnouVcpEUF6fXeGTkU8DovBuR6dJMNZc5EUjyj3jer8lKdf8QQZpeIrsg7M0pvr-4vsEutRO44k2ezB3kibIIc76-2jl8nZ0SJ34HKhMzCf__B52hW18fPMqCYhtjJNeQ9w1ZVlIiNNrhfplbzX9_-phZGgDtefjllADfGlikNlsapmpWPLKwO-2pecx0UyEH_EK1Ki1xkp1G4OgTisNTxIqRkclaKSJfr0cL76cO0aYvQ6gpGY_nK1_fX1OlU",
    initials: "HM",
    bg: "#e8f0e8",
    fg: "#2d5a2d",
    rating: "4.9",
  },
  {
    name: "Studio ArchiDesign",
    sector: "Architecture & Design",
    city: "Lausanne, VD",
    employees: "Certifié ISO",
    badge: "Premium",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVVT7tVqjlg5hofSfw15uUB9vP9Fk98s_91zm_NF-Xcy9ur1lgf8Jpd2jdA4nHWdBgn_QrTWJcN_TJOOzfTrOlduI1g-H7bFDz2A8CaqJJN5PFF413bIe40l5udkuCZyhavXyEgS6qF34cLcKNSkCFIBZJ1l_z0XaF_wbb74C1-0YZUzwCSufzokeuffqAxlHg2a3_dRjfxJVEDi_Wk8lJVMWhp1AD-_S9QqC7VqmKBflRyzn3XwpFYfZr8MMqwqtcgyz9nlr2VO9e",
    initials: "JC",
    bg: "#1a3044",
    fg: "#ffffff",
    rating: "4.8",
  },
  {
    name: "Schneider Electric",
    sector: "Équipements Électriques",
    city: "Casablanca",
    employees: "1000+ employés",
    badge: "Vérifié",
    logo: "",
    initials: "SE",
    bg: "#1a3044",
    fg: "#ffffff",
    rating: "5.0",
  },
]

export default function AnnuairePage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="min-h-screen bg-[#f6f7f8] font-sans text-[#0e1f2f]">

      {/* ===================== MOBILE LAYOUT ===================== */}
      <div className="lg:hidden flex flex-col min-h-screen pb-20 bg-[#f6f7f8]">

        {/* Mobile Header */}
        <header className="sticky top-0 z-50 flex items-center bg-white px-4 py-3 border-b border-slate-200 justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-[#0e1f2f] p-1.5 rounded-lg">
              <Building2 className="text-white w-5 h-5" />
            </div>
            <h1 className="text-[#0e1f2f] text-xl font-bold tracking-tight">BATIMAG</h1>
          </div>
          <div className="flex gap-1">
            <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full">
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Mobile Search & Filter Section */}
        <div className="bg-[#0e1f2f] px-4 pt-6 pb-8">
          <h2 className="text-white text-2xl font-bold mb-4">Annuaire B2B</h2>
          <div className="space-y-3">
            <div className="flex w-full h-12 items-stretch rounded-xl bg-white shadow-sm overflow-hidden">
              <div className="text-slate-400 flex items-center justify-center pl-4">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="Entreprise, métier..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex w-full border-none focus:ring-0 text-[#0e1f2f] placeholder:text-slate-400 px-3 text-sm bg-transparent outline-none"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
              <button className="flex h-10 shrink-0 items-center gap-2 rounded-lg bg-white/10 border border-white/20 px-4 text-white text-sm font-medium">
                <MapPin className="w-4 h-4 text-[#F28C28]" />
                Localisation
                <ChevronDown className="w-3 h-3" />
              </button>
              <button className="flex h-10 shrink-0 items-center gap-2 rounded-lg bg-white/10 border border-white/20 px-4 text-white text-sm font-medium">
                <Cog className="w-4 h-4 text-[#F28C28]" />
                Catégorie
                <ChevronDown className="w-3 h-3" />
              </button>
              <button className="flex h-10 shrink-0 items-center gap-2 rounded-lg bg-white/10 border border-white/20 px-4 text-white text-sm font-medium">
                <Ruler className="w-4 h-4 text-[#F28C28]" />
                Filtres
              </button>
            </div>
          </div>
        </div>

        {/* Mobile: Explorer par Secteur */}
        <div className="mt-6 px-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[#0e1f2f] text-lg font-bold">Explorer par Secteur</h3>
            <a href="#" className="text-[#F28C28] text-sm font-semibold">Voir tout</a>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {sectors.slice(0, 4).map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-[#0e1f2f]">
                  <Icon className="w-7 h-7" />
                </div>
                <span className="text-[11px] font-medium text-center leading-tight">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Entreprises Premium */}
        <div className="mt-8 px-4">
          <h3 className="text-[#0e1f2f] text-lg font-bold mb-4">Entreprises Premium</h3>
          <div className="space-y-4">
            {premiumCompanies.filter(c => c.logo).map((company) => (
              <div key={company.name} className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 flex flex-col gap-4">
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-lg bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100 overflow-hidden">
                    {company.logo ? (
                      <img
                        src={company.logo}
                        alt={company.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-base font-black" style={{ color: company.fg, backgroundColor: company.bg }}>
                        {company.initials}
                      </span>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#F28C28] bg-[#F28C28]/10 px-2 py-0.5 rounded">
                        {company.badge}
                      </span>
                      <BookOpen className="w-5 h-5 text-slate-300" />
                    </div>
                    <h4 className="text-[#0e1f2f] font-bold text-base mt-1">{company.name}</h4>
                    <p className="text-slate-500 text-xs">{company.sector}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 py-2 border-y border-slate-50">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    <span className="text-xs text-slate-600">{company.city}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {company.employees.includes("ISO") ? (
                      <Shield className="w-4 h-4 text-slate-400" />
                    ) : (
                      <User className="w-4 h-4 text-slate-400" />
                    )}
                    <span className="text-xs text-slate-600">{company.employees}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Link
                    href={`/annuaire/${company.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="flex-1 bg-[#0e1f2f] text-white text-sm font-bold py-2.5 rounded-lg text-center"
                  >
                    Voir le Profil
                  </Link>
                  <button className="w-10 h-10 flex items-center justify-center border border-slate-200 rounded-lg hover:bg-slate-50">
                    <Mail className="w-5 h-5 text-[#0e1f2f]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Geographic Search Teaser */}
        <div className="mt-8 px-4">
          <div className="relative overflow-hidden rounded-2xl bg-slate-900 aspect-video flex items-center justify-center p-6">
            <div className="absolute inset-0 opacity-40 bg-gradient-to-br from-[#0e1f2f] to-slate-700" />
            <div className="relative z-10 text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#F28C28] text-white flex items-center justify-center mb-3">
                <Map className="w-6 h-6" />
              </div>
              <h3 className="text-white text-xl font-bold mb-1">Recherche Géographique</h3>
              <p className="text-slate-300 text-sm mb-4">Trouvez des partenaires proches de vos chantiers</p>
              <button className="bg-white text-[#0e1f2f] px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                Ouvrir la carte
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile: B2B Conversion Section */}
        <div className="mt-8 mx-4 mb-8 bg-[#F28C28] rounded-2xl p-6 text-[#0e1f2f]">
          <h3 className="text-xl font-black mb-2 uppercase italic leading-tight">Augmentez votre visibilité</h3>
          <p className="text-[#0e1f2f]/80 text-sm mb-6 leading-relaxed">
            Rejoignez le premier réseau professionnel du bâtiment en Suisse romande.
          </p>
          <div className="space-y-3">
            <button className="w-full bg-[#0e1f2f] text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2">
              <Building2 className="w-4 h-4" />
              Inscrire mon entreprise
            </button>
            <button className="w-full bg-white text-[#0e1f2f] py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2">
              <Newspaper className="w-4 h-4" />
              Demander un devis régie
            </button>
          </div>
        </div>

        {/* Mobile Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-2 pb-6 pt-2 flex justify-around items-center z-50">
          <Link href="/" className="flex flex-col items-center gap-1 text-slate-400 hover:text-[#0e1f2f] transition-colors">
            <Home className="w-5 h-5" />
            <span className="text-[10px] font-medium">Accueil</span>
          </Link>
          <Link href="/annuaire" className="flex flex-col items-center gap-1 text-[#0e1f2f]">
            <BookOpen className="w-5 h-5 text-[#F28C28] fill-[#F28C28]" />
            <span className="text-[10px] font-bold text-[#F28C28]">Annuaire</span>
          </Link>
          <Link href="/actualites" className="flex flex-col items-center gap-1 text-slate-400 hover:text-[#0e1f2f] transition-colors">
            <Newspaper className="w-5 h-5" />
            <span className="text-[10px] font-medium">News</span>
          </Link>
          <Link href="/emplois" className="flex flex-col items-center gap-1 text-slate-400 hover:text-[#0e1f2f] transition-colors">
            <Briefcase className="w-5 h-5" />
            <span className="text-[10px] font-medium">Jobs</span>
          </Link>
          <Link href="/profile" className="flex flex-col items-center gap-1 text-slate-400 hover:text-[#0e1f2f] transition-colors">
            <User className="w-5 h-5" />
            <span className="text-[10px] font-medium">Profil</span>
          </Link>
        </nav>
      </div>

      {/* ===================== DESKTOP LAYOUT ===================== */}
      <div className="hidden lg:block">
        <Navbar />

        {/* Hero Search */}
        <section className="relative flex min-h-[420px] w-full items-center justify-center overflow-hidden bg-[#0e1f2f] px-4 py-20">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "url('/images/hero-construction.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
            <h1 className="mb-3 text-4xl font-black text-white md:text-6xl text-balance">
              Annuaire B2B du Bâtiment
            </h1>
            <p className="mb-10 text-lg text-slate-300">
              Trouvez vos partenaires, fournisseurs et prestataires au Maroc et en Afrique.
            </p>
            <div className="flex flex-col overflow-hidden rounded-xl bg-white shadow-2xl md:flex-row">
              <div className="flex flex-1 items-center gap-2 border-b border-slate-200 px-4 py-3 md:border-b-0 md:border-r">
                <Search size={18} className="shrink-0 text-slate-400" />
                <input
                  type="text"
                  placeholder="Entreprise, produit ou service..."
                  className="w-full border-none bg-transparent text-sm text-[#0e1f2f] placeholder:text-slate-400 focus:outline-none"
                />
              </div>
              <div className="flex flex-1 items-center gap-2 px-4 py-3">
                <MapPin size={18} className="shrink-0 text-slate-400" />
                <select className="w-full cursor-pointer appearance-none border-none bg-transparent text-sm text-[#0e1f2f] focus:outline-none">
                  <option>Tout le Maroc</option>
                  <option>Afrique du Nord</option>
                  <option>Afrique de l&apos;Ouest</option>
                  <option>International</option>
                </select>
                <ChevronDown size={14} className="shrink-0 text-slate-400" />
              </div>
              <button className="flex shrink-0 items-center justify-center gap-2 bg-[#0e1f2f] px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-[#1a3044]">
                <Search size={16} />
                Rechercher
              </button>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-slate-400">
              <span className="font-medium">Populaire :</span>
              {popularTags.map((tag) => (
                <a key={tag} href="#" className="underline underline-offset-2 transition-colors hover:text-white">
                  {tag}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Sectors */}
        <section className="mx-auto w-full max-w-7xl px-4 py-16 lg:px-8">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold text-[#0e1f2f]">Explorer par Secteur</h2>
              <p className="mt-1 text-sm text-slate-500">Naviguez à travers nos catégories professionnelles spécialisées</p>
            </div>
            <a href="#" className="whitespace-nowrap text-sm font-bold text-[#0e1f2f] underline underline-offset-2 transition-colors hover:text-[#F28C28]">
              Voir tous les secteurs
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {sectors.map(({ icon: Icon, label }) => (
              <button key={label} className="group flex cursor-pointer flex-col items-center gap-4 rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-[#0e1f2f] hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0e1f2f]/10 text-[#0e1f2f] transition-colors group-hover:bg-[#0e1f2f] group-hover:text-white">
                  <Icon size={22} />
                </div>
                <span className="text-center text-sm font-bold text-[#0e1f2f]">{label}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Premium Companies + Geographic Search */}
        <section className="bg-slate-100">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 lg:grid-cols-2 lg:px-8">
            <div>
              <div className="mb-8 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-[#0e1f2f]">Entreprises Premium</h2>
                <span className="text-sm font-medium text-slate-500">Mise en avant</span>
              </div>
              <div className="flex flex-col gap-4">
                {premiumCompanies.map((company) => (
                  <div key={company.name} className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm transition-transform hover:-translate-y-0.5">
                    <div
                      className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg text-base font-black overflow-hidden"
                      style={{ backgroundColor: company.bg, color: company.fg }}
                    >
                      {company.logo ? (
                        <img src={company.logo} alt={company.name} className="w-full h-full object-cover" />
                      ) : (
                        company.initials
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <h3 className="truncate font-bold text-[#0e1f2f]">{company.name}</h3>
                        <BadgeCheck size={16} className="shrink-0 text-blue-500" />
                      </div>
                      <p className="truncate text-sm text-slate-500">{company.sector}</p>
                      <div className="mt-1 flex items-center gap-3 text-xs text-slate-400">
                        <span className="flex items-center gap-1"><MapPin size={11} /> {company.city}</span>
                        <span className="flex items-center gap-1"><Star size={11} /> {company.rating}</span>
                      </div>
                    </div>
                    <Link
                      href={`/annuaire/${company.name.toLowerCase().replace(/\s+/g, "-")}`}
                      className="shrink-0 rounded-lg border border-[#0e1f2f] px-3 py-1.5 text-xs font-bold text-[#0e1f2f] transition-colors hover:bg-[#0e1f2f] hover:text-white"
                    >
                      Profil
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="relative flex min-h-[360px] items-center justify-center overflow-hidden rounded-2xl shadow-xl"
              style={{ backgroundImage: "url('/images/company-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
            >
              <div className="absolute inset-0 bg-[#0e1f2f]/70" />
              <div className="relative z-10 flex flex-col items-center p-12 text-center text-white">
                <Map size={52} className="mb-4 opacity-80" />
                <h3 className="mb-4 text-3xl font-black">Recherche Géographique</h3>
                <p className="mb-8 max-w-xs leading-relaxed text-slate-200">
                  Localisez les entreprises les plus proches de vos chantiers sur l&apos;ensemble du territoire national et panafricain.
                </p>
                <button className="rounded-lg bg-white px-8 py-3 font-bold text-[#0e1f2f] shadow-lg transition-transform hover:scale-105">
                  Ouvrir la carte interactive
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mx-auto w-full max-w-7xl px-4 py-20 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-8 rounded-3xl bg-[#0e1f2f] px-10 py-14 md:flex-row">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="mb-4 text-3xl font-black text-white text-balance">Augmentez votre visibilité professionnelle</h2>
              <p className="leading-relaxed text-slate-400">
                Rejoignez le premier annuaire B2B de la construction au Maroc. Générez des leads qualifiés et trouvez vos futurs partenaires stratégiques.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-4 sm:flex-row">
              <button className="rounded-xl bg-white px-8 py-4 text-sm font-black text-[#0e1f2f] transition-colors hover:bg-slate-100">
                Inscrire mon entreprise
              </button>
              <button className="rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-sm font-black text-white backdrop-blur transition-colors hover:bg-white/20">
                Demander un devis
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}
