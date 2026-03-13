import Link from "next/link"
import Image from "next/image"
import { Search, MapPin, Building2, ChevronRight, Star, Phone, Globe, ArrowRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"

const sectors = [
  "Tous secteurs",
  "Bâtiment Général",
  "Génie Civil",
  "Bureaux d'Études",
  "Matériaux",
  "Équipements",
  "Électricité & Plomberie",
  "Architecture",
  "Promotion Immobilière",
  "Topographie",
]

const countries = [
  "Tous pays", "Maroc", "Côte d'Ivoire", "Sénégal", "Cameroun", "Kenya", "Éthiopie", "Égypte", "Algérie", "Nigeria",
]

const companies = [
  {
    id: 1,
    name: "STRABAG Maroc",
    sector: "Génie Civil",
    country: "Maroc",
    city: "Casablanca",
    phone: "+212 5 22 XX XX XX",
    website: "www.strabag.ma",
    description: "Leader européen de la construction en Afrique du Nord, spécialisé dans les grands travaux d'infrastructure, routes et ouvrages d'art.",
    rating: 4.8,
    employees: "500-1000",
    image: "/images/company-bg.jpg",
    featured: true,
  },
  {
    id: 2,
    name: "Bouygues Construction Afrique",
    sector: "Bâtiment Général",
    country: "Côte d'Ivoire",
    city: "Abidjan",
    phone: "+225 27 XX XX XX XX",
    website: "www.bouygues-construction.com",
    description: "Groupe international présent dans 80 pays, expert en construction de bâtiments complexes, hôtels, hôpitaux et centres commerciaux.",
    rating: 4.7,
    employees: "1000+",
    image: "/images/company-bg.jpg",
    featured: true,
  },
  {
    id: 3,
    name: "Eiffage Sénégal",
    sector: "Génie Civil",
    country: "Sénégal",
    city: "Dakar",
    phone: "+221 33 XX XX XX XX",
    website: "www.eiffage.com",
    description: "Référence en construction et services à l'énergie, Eiffage réalise les projets les plus emblématiques d'Afrique de l'Ouest.",
    rating: 4.6,
    employees: "500-1000",
    image: "/images/company-bg.jpg",
    featured: false,
  },
  {
    id: 4,
    name: "VINCI Construction",
    sector: "Bâtiment Général",
    country: "Kenya",
    city: "Nairobi",
    phone: "+254 20 XXX XX XX",
    website: "www.vinci.com",
    description: "Acteur mondial de la construction présent en Afrique de l'Est avec des projets de grande envergure dans les infrastructures publiques.",
    rating: 4.5,
    employees: "1000+",
    image: "/images/company-bg.jpg",
    featured: false,
  },
  {
    id: 5,
    name: "COVEC Africa",
    sector: "Génie Civil",
    country: "Maroc",
    city: "Rabat",
    phone: "+212 5 37 XX XX XX",
    website: "www.covec.ma",
    description: "Spécialiste des travaux routiers, ferroviaires et hydrauliques en Afrique, COVEC réalise des projets d'infrastructure majeurs.",
    rating: 4.4,
    employees: "200-500",
    image: "/images/company-bg.jpg",
    featured: false,
  },
  {
    id: 6,
    name: "Cabinet BCEOM",
    sector: "Bureaux d'Études",
    country: "Sénégal",
    city: "Dakar",
    phone: "+221 33 XX XX XX XX",
    website: "www.bceom.com",
    description: "Bureau d'études pluridisciplinaire international expert en ingénierie civile, environnementale et de transport.",
    rating: 4.7,
    employees: "100-200",
    image: "/images/company-bg.jpg",
    featured: false,
  },
]

export default function AnnuairePage() {
  return (
    <main>
      <Navbar />

      {/* Page header */}
      <section className="bg-[#0E1F2F] py-10">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-white/40 text-xs mb-3">
            <Link href="/" className="hover:text-[#F28C28] transition-colors">Accueil</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/70">Annuaire Entreprises BTP</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Annuaire Entreprises BTP
          </h1>
          <p className="text-white/60 text-base">
            Retrouvez les entreprises leaders du secteur de la construction en Afrique
          </p>
        </div>
      </section>

      {/* Search bar */}
      <div className="bg-secondary border-b border-border py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Nom d'entreprise, activité..."
                className="w-full pl-9 pr-4 py-2.5 text-sm bg-background border border-border focus:outline-none focus:ring-2 focus:ring-[#F28C28]"
              />
            </div>
            <select className="px-4 py-2.5 text-sm bg-background border border-border focus:outline-none focus:ring-2 focus:ring-[#F28C28] text-foreground min-w-[180px]">
              {sectors.map((s) => <option key={s}>{s}</option>)}
            </select>
            <select className="px-4 py-2.5 text-sm bg-background border border-border focus:outline-none focus:ring-2 focus:ring-[#F28C28] text-foreground min-w-[150px]">
              {countries.map((c) => <option key={c}>{c}</option>)}
            </select>
            <button className="bg-[#F28C28] text-white text-sm font-bold px-6 py-2.5 hover:bg-orange-600 transition-colors flex items-center gap-2">
              <Search className="w-4 h-4" />
              Rechercher
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { value: "2 500+", label: "Entreprises référencées" },
            { value: "45", label: "Pays couverts" },
            { value: "15", label: "Secteurs d'activité" },
            { value: "850+", label: "Mises en relation" },
          ].map((stat) => (
            <div key={stat.label} className="bg-secondary border border-border p-4 text-center">
              <p className="text-[#F28C28] text-2xl font-bold">{stat.value}</p>
              <p className="text-muted-foreground text-xs mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Featured companies */}
        <div className="mb-10">
          <SectionHeader
            title="Entreprises Premium"
            subtitle="Les acteurs majeurs du BTP africain"
            href="#"
            linkLabel="Voir tous"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {companies.filter((c) => c.featured).map((company) => (
              <div key={company.id} className="border border-[#F28C28]/30 overflow-hidden hover:shadow-lg transition-shadow bg-background">
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={company.image}
                    alt={company.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[#0E1F2F]/60" />
                  <div className="absolute top-3 right-3 bg-[#F28C28] text-white text-xs font-bold px-2.5 py-1">
                    Premium
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white text-xl font-bold">{company.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="bg-white/20 text-white text-xs px-2 py-0.5">{company.sector}</span>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                    {company.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#F28C28]" />
                      <span>{company.city}, {company.country}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-[#F28C28]" />
                      <span>{company.employees} employés</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#F28C28]" />
                      <span>{company.phone}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5 text-[#F28C28]" />
                      <span>{company.website}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-[#F28C28] text-[#F28C28]" />
                      <span className="text-sm font-bold text-foreground">{company.rating}</span>
                    </div>
                    <Link href="#" className="text-[#F28C28] text-sm font-semibold flex items-center gap-1 hover:text-orange-700 transition-colors">
                      Voir la fiche <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All companies */}
        <SectionHeader title="Toutes les entreprises" />
        <div className="grid grid-cols-1 gap-4">
          {companies.map((company) => (
            <Link
              key={company.id}
              href="#"
              className="group flex flex-col md:flex-row gap-0 border border-border hover:border-[#F28C28] hover:shadow-md transition-all bg-background"
            >
              <div className="relative w-full md:w-32 h-24 md:h-auto shrink-0 overflow-hidden">
                <Image
                  src={company.image}
                  alt={company.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#0E1F2F]/40" />
              </div>
              <div className="flex-1 p-5 flex flex-col md:flex-row md:items-center gap-4 justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-base font-bold text-foreground group-hover:text-[#F28C28] transition-colors">
                      {company.name}
                    </h3>
                    {company.featured && (
                      <span className="bg-[#F28C28] text-white text-xs font-bold px-1.5 py-0.5">Premium</span>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm line-clamp-1 mb-2">{company.description}</p>
                  <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                    <span className="bg-secondary px-2 py-0.5 font-medium text-foreground">{company.sector}</span>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#F28C28]" />
                      {company.city}, {company.country}
                    </div>
                    <div className="flex items-center gap-1">
                      <Building2 className="w-3 h-3 text-[#F28C28]" />
                      {company.employees} employés
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-[#F28C28] text-[#F28C28]" />
                    <span className="text-sm font-bold">{company.rating}</span>
                  </div>
                  <span className="text-[#F28C28] font-semibold text-sm flex items-center gap-1">
                    Voir <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}
