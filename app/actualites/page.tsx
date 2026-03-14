'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Clock, MapPin, Calendar, Search, ArrowRight, ChevronRight, Home, Building2, Newspaper, Briefcase, User, Bell } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"

const categories = [
  "Tous", "Batiment", "Infrastructures", "Genie Civil", "Materiaux", "Equipements", "Energie", "Immobilier", "Reglementation",
]

const articles = [
  {
    id: 1,
    category: "Infrastructures",
    title: "Le Maroc lance un mega-projet autoroutier de 12 milliards de dirhams reliant Casablanca a Dakhla",
    excerpt: "Le gouvernement marocain a officiellement lance les travaux du plus grand projet routier de son histoire, une autoroute de 1 400 km.",
    image: "/images/news-1.jpg",
    readTime: "4 min",
    date: "12 mars 2026",
    featured: true,
  },
  {
    id: 2,
    category: "Batiment",
    title: "Abidjan : 50 000 logements sociaux annonces d'ici 2028 par le gouvernement ivoirien",
    excerpt: "Le plan national de l'habitat lance par la Cote d'Ivoire prevoit la construction de 50 000 unites a prix social dans les zones periurbaines.",
    image: "/images/news-2.jpg",
    readTime: "3 min",
    date: "11 mars 2026",
    featured: false,
  },
  {
    id: 3,
    category: "Energie",
    title: "Barrage de Kandadji au Niger : avancement des travaux a 78% selon le maitre d'ouvrage",
    excerpt: "Le projet hydroelectrique nigerien entre dans sa phase finale avec une mise en service prevue pour 2027.",
    image: "/images/news-4.jpg",
    readTime: "5 min",
    date: "9 mars 2026",
    featured: false,
  },
  {
    id: 4,
    category: "Genie Civil",
    title: "Dakar accueille le Salon International du BTP Afrique 2026 en juin prochain",
    excerpt: "La capitale senegalaise sera le theatre du plus grand salon professionnel dedie a la construction en Afrique.",
    image: "/images/news-3.jpg",
    readTime: "2 min",
    date: "8 mars 2026",
    featured: false,
  },
  {
    id: 5,
    category: "Materiaux",
    title: "L'industrie du ciment africain atteint un record de production avec 120 millions de tonnes en 2025",
    excerpt: "La production continentale de ciment a franchi un cap historique grace aux investissements massifs dans les nouvelles capacites de production.",
    image: "/images/news-1.jpg",
    readTime: "3 min",
    date: "7 mars 2026",
    featured: false,
  },
  {
    id: 6,
    category: "Reglementation",
    title: "Adoption d'un code de la construction harmonise pour l'espace CEDEAO",
    excerpt: "Les 15 Etats membres de la CEDEAO ont adopte un referentiel commun de normes de construction pour faciliter les echanges et ameliorer la securite.",
    image: "/images/news-2.jpg",
    readTime: "6 min",
    date: "6 mars 2026",
    featured: false,
  },
]

const events = [
  {
    id: 1,
    title: "Salon International BTP Afrique 2026",
    location: "Dakar, Senegal",
    date: "15 – 18 juin 2026",
    type: "Salon",
  },
  {
    id: 2,
    title: "Forum Africain des Infrastructures",
    location: "Casablanca, Maroc",
    date: "22 – 23 juillet 2026",
    type: "Forum",
  },
  {
    id: 3,
    title: "Conference Logement Durable Afrique",
    location: "Abidjan, Cote d'Ivoire",
    date: "10 septembre 2026",
    type: "Conference",
  },
]

const categoryColors: Record<string, string> = {
  Infrastructures: "bg-blue-700",
  Batiment: "bg-green-700",
  "Genie Civil": "bg-[#0E1F2F]",
  Energie: "bg-orange-700",
  Materiaux: "bg-slate-600",
  Reglementation: "bg-purple-700",
}

export default function ActualitesPage() {
  const [main, ...rest] = articles
  const [selectedCategory, setSelectedCategory] = useState("Tous")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = selectedCategory === "Tous" || article.category === selectedCategory
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <>
      {/* MOBILE LAYOUT */}
      <div className="lg:hidden flex flex-col min-h-screen bg-[#f6f7f8]">
        {/* Mobile Header */}
        <header className="sticky top-0 z-40 bg-white border-b border-[#0e1f2f]/10">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-2">
              <div className="bg-[#0e1f2f] p-1.5 rounded-lg">
                <Newspaper className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-[#0e1f2f] text-lg font-bold">Actualites</h1>
            </div>
            <button className="p-2 hover:bg-slate-100 rounded-full relative">
              <Bell className="w-5 h-5 text-[#0e1f2f]" />
              <div className="absolute top-1 right-1 w-2 h-2 bg-[#F28C28] rounded-full"></div>
            </button>
          </div>

          {/* Mobile Search */}
          <div className="px-4 pb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Rechercher une actualite..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-[#0e1f2f]/10 rounded-xl text-sm focus:ring-2 focus:ring-[#F28C28] focus:border-transparent"
              />
            </div>
          </div>

          {/* Mobile Category Pills */}
          <div className="flex gap-2 px-4 pb-4 overflow-x-auto no-scrollbar">
            {categories.slice(0, 6).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`shrink-0 h-9 rounded-full px-4 text-sm font-medium transition-colors ${
                  selectedCategory === cat
                    ? "bg-[#0e1f2f] text-white"
                    : "bg-white border border-[#0e1f2f]/10 text-[#0e1f2f] hover:bg-slate-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        {/* Mobile Article List */}
        <div className="flex-1 pb-24">
          <div className="p-4 space-y-4">
            {/* Featured Article */}
            {filteredArticles.length > 0 && filteredArticles[0].featured && (
              <Link href={`/actualites/${filteredArticles[0].id}`} className="block bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="relative h-48">
                  <Image src={filteredArticles[0].image} alt={filteredArticles[0].title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute top-3 left-3 bg-[#F28C28] text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider">
                    A la une
                  </span>
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className={`${categoryColors[filteredArticles[0].category] ?? "bg-[#0E1F2F]"} text-white text-[10px] font-bold px-2 py-0.5 uppercase`}>
                      {filteredArticles[0].category}
                    </span>
                    <h2 className="text-white font-bold text-lg mt-2 leading-tight line-clamp-2">
                      {filteredArticles[0].title}
                    </h2>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-[#0e1f2f]/60 text-sm line-clamp-2">{filteredArticles[0].excerpt}</p>
                  <div className="flex items-center gap-3 mt-3 text-[#0e1f2f]/50 text-xs">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{filteredArticles[0].readTime}</span>
                    </div>
                    <span>{filteredArticles[0].date}</span>
                  </div>
                </div>
              </Link>
            )}

            {/* Section Title */}
            <div className="flex items-center justify-between pt-2">
              <h3 className="text-[#0e1f2f] font-bold">Dernieres actualites</h3>
              <span className="text-[#0e1f2f]/50 text-xs">{filteredArticles.length} articles</span>
            </div>

            {/* Article Cards */}
            {filteredArticles.slice(1).map((article) => (
              <Link
                key={article.id}
                href={`/actualites/${article.id}`}
                className="flex gap-4 bg-white p-4 rounded-xl shadow-sm"
              >
                <div className="relative w-24 h-24 shrink-0 rounded-lg overflow-hidden">
                  <Image src={article.image} alt={article.title} fill className="object-cover" />
                  <span className={`absolute top-1 left-1 ${categoryColors[article.category] ?? "bg-[#0E1F2F]"} text-white text-[8px] font-bold px-1.5 py-0.5 uppercase`}>
                    {article.category.slice(0, 4)}
                  </span>
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <h3 className="text-[#0e1f2f] font-semibold text-sm leading-tight line-clamp-2">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-2 text-[#0e1f2f]/50 text-xs">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                    <span>·</span>
                    <span>{article.date}</span>
                  </div>
                </div>
              </Link>
            ))}

            {/* Events Section */}
            <div className="pt-4">
              <h3 className="text-[#0e1f2f] font-bold mb-3">Evenements a venir</h3>
              <div className="space-y-3">
                {events.map((event) => (
                  <div key={event.id} className="bg-white p-4 rounded-xl shadow-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-[#0e1f2f] rounded-lg flex items-center justify-center shrink-0">
                        <Calendar className="w-6 h-6 text-[#F28C28]" />
                      </div>
                      <div className="flex-1">
                        <span className="text-[#F28C28] text-[10px] font-bold uppercase tracking-wider">{event.type}</span>
                        <h4 className="text-[#0e1f2f] font-semibold text-sm mt-0.5">{event.title}</h4>
                        <div className="flex items-center gap-1 text-[#0e1f2f]/50 text-xs mt-1">
                          <MapPin className="w-3 h-3" />
                          <span>{event.location}</span>
                        </div>
                        <p className="text-[#0e1f2f]/50 text-xs">{event.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
            <Link href="/actualites" className="flex flex-col items-center gap-1 py-1 px-3 text-[#0e1f2f] relative">
              <Newspaper className="w-5 h-5 text-[#F28C28]" />
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#F28C28]">Actus</span>
              <div className="absolute -top-1 right-2 w-1.5 h-1.5 bg-[#F28C28] rounded-full"></div>
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
      <main className="hidden lg:block">
        <Navbar />

        {/* Page header */}
        <section className="bg-[#0E1F2F] py-10">
          <div className="max-w-7xl mx-auto px-4">
            <nav className="flex items-center gap-2 text-white/40 text-xs mb-3">
              <Link href="/" className="hover:text-[#F28C28] transition-colors">Accueil</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white/70">Actualites & Evenements</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Actualites & Evenements</h1>
            <p className="text-white/60 text-base">
              Toute l'actualite du BTP, des infrastructures et de l'immobilier en Afrique
            </p>
          </div>
        </section>

        {/* Search & filter bar */}
        <div className="bg-secondary border-b border-border sticky top-16 z-30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-4 py-3">
              <div className="relative flex-1 w-full md:max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Rechercher une actualite..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-sm bg-background border border-border focus:outline-none focus:ring-2 focus:ring-[#F28C28]"
                />
              </div>
              <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 w-full md:w-auto">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`shrink-0 text-xs font-semibold px-3 py-1.5 transition-colors ${
                      cat === selectedCategory
                        ? "bg-[#0E1F2F] text-white"
                        : "bg-background border border-border text-foreground hover:border-[#F28C28] hover:text-[#F28C28]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2">
              {/* Featured article */}
              {filteredArticles.length > 0 && (
                <div className="mb-8">
                  <Link href={`/actualites/${filteredArticles[0].id}`} className="group block border border-border overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-72 overflow-hidden">
                      <Image
                        src={filteredArticles[0].image}
                        alt={filteredArticles[0].title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-[#0E1F2F]/30" />
                      <span className={`absolute top-4 left-4 ${categoryColors[filteredArticles[0].category] ?? "bg-[#0E1F2F]"} text-white text-xs font-bold px-3 py-1 uppercase tracking-wider`}>
                        {filteredArticles[0].category}
                      </span>
                      {filteredArticles[0].featured && (
                        <span className="absolute top-4 right-4 bg-[#F28C28] text-white text-xs font-bold px-2.5 py-1 uppercase tracking-wider">
                          A la une
                        </span>
                      )}
                    </div>
                    <div className="p-6">
                      <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-[#F28C28] transition-colors text-balance">
                        {filteredArticles[0].title}
                      </h2>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{filteredArticles[0].excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{filteredArticles[0].readTime} de lecture · {filteredArticles[0].date}</span>
                        </div>
                        <span className="text-[#F28C28] text-sm font-semibold flex items-center gap-1">
                          Lire <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              )}

              {/* Article grid */}
              <SectionHeader title="Dernieres actualites" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {filteredArticles.slice(1).map((article) => (
                  <Link key={article.id} href={`/actualites/${article.id}`} className="group border border-border overflow-hidden hover:shadow-md transition-shadow">
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className={`absolute top-3 left-3 ${categoryColors[article.category] ?? "bg-[#0E1F2F]"} text-white text-xs font-bold px-2 py-0.5 uppercase tracking-wider`}>
                        {article.category}
                      </span>
                    </div>
                    <div className="p-4">
                      <h3 className="text-sm font-bold text-foreground mb-2 leading-snug group-hover:text-[#F28C28] transition-colors line-clamp-2 text-balance">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2 mb-3">{article.excerpt}</p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        <span>{article.readTime} · {article.date}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Ad banner */}
              <div className="bg-secondary border border-border p-4 flex items-center justify-center h-64">
                <span className="text-muted-foreground text-xs uppercase tracking-widest">Espace publicitaire</span>
              </div>

              {/* Events */}
              <div>
                <SectionHeader title="Evenements" />
                <div className="space-y-3">
                  {events.map((event) => (
                    <div key={event.id} className="border border-border p-4 hover:border-[#F28C28] transition-colors cursor-pointer">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-[#0E1F2F] flex items-center justify-center shrink-0">
                          <Calendar className="w-5 h-5 text-[#F28C28]" />
                        </div>
                        <div>
                          <span className="text-[#F28C28] text-xs font-bold uppercase tracking-wider">{event.type}</span>
                          <h4 className="text-sm font-bold text-foreground leading-snug mt-0.5">{event.title}</h4>
                          <div className="flex items-center gap-1 text-muted-foreground text-xs mt-1">
                            <MapPin className="w-3 h-3" />
                            <span>{event.location}</span>
                          </div>
                          <p className="text-muted-foreground text-xs mt-0.5">{event.date}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter CTA */}
              <div className="bg-[#0E1F2F] p-6">
                <h4 className="text-white font-bold mb-2">Newsletter BATIMAG</h4>
                <p className="text-white/60 text-sm mb-4">Recevez les actualites BTP chaque semaine directement dans votre boite mail.</p>
                <input
                  type="email"
                  placeholder="Votre e-mail"
                  className="w-full px-3 py-2 text-sm bg-white/10 text-white placeholder:text-white/40 border border-white/20 focus:outline-none focus:border-[#F28C28] mb-3"
                />
                <button className="w-full bg-[#F28C28] text-white text-sm font-bold py-2.5 hover:bg-orange-600 transition-colors">
                  S'abonner
                </button>
              </div>
            </aside>
          </div>
        </div>

        <Footer />
      </main>
    </>
  )
}
