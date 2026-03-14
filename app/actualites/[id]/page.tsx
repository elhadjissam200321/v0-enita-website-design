'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import {
  Clock,
  Calendar,
  User,
  ChevronRight,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  ArrowLeft,
  Bookmark,
  Heart,
  MessageCircle,
  Home,
  Building2,
  Newspaper,
  Briefcase,
} from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const article = {
  id: 1,
  category: 'Infrastructures',
  title: 'Le Maroc lance un mega-projet autoroutier de 12 milliards de dirhams reliant Casablanca a Dakhla',
  excerpt: 'Le gouvernement marocain a officiellement lance les travaux du plus grand projet routier de son histoire, une autoroute de 1 400 km qui transformera la connectivite du royaume.',
  content: `
    <p>Le gouvernement marocain a officiellement lance les travaux du plus grand projet routier de son histoire. Cette autoroute de 1 400 kilometres reliera Casablanca a Dakhla, traversant plusieurs regions du royaume et ouvrant de nouvelles perspectives economiques pour le sud du pays.</p>
    
    <h2>Un projet d'envergure continentale</h2>
    <p>Avec un budget de 12 milliards de dirhams (environ 1,1 milliard d'euros), ce projet represente l'un des plus importants investissements infrastructurels jamais realises en Afrique du Nord. L'autoroute traversera les regions de Casablanca-Settat, Marrakech-Safi, Souss-Massa, Guelmim-Oued Noun, Laayoune-Sakia El Hamra et Dakhla-Oued Ed-Dahab.</p>
    
    <blockquote>
      "Ce projet transformera radicalement la connectivite de notre royaume et stimulera le developpement economique des provinces du sud" - Ministre de l'Equipement et du Transport
    </blockquote>
    
    <h2>Impact economique majeur</h2>
    <p>Les experts prevoient que cette infrastructure generera plus de 50 000 emplois directs et indirects pendant la phase de construction, qui devrait s'etaler sur 5 ans. Une fois achevee, l'autoroute devrait reduire le temps de trajet entre Casablanca et Dakhla de 18 heures a seulement 10 heures.</p>
    
    <p>Le projet comprend egalement la construction de 15 aires de repos, 8 stations-service et plusieurs ponts d'envergure pour franchir les oueds saisonniers du sud marocain.</p>
    
    <h2>Financement et partenariats</h2>
    <p>Le financement du projet est assure par un consortium comprenant des banques marocaines, la Banque Africaine de Developpement (BAD) et des investisseurs prives du Golfe. Plusieurs entreprises de construction marocaines et internationales ont ete selectionnees pour les differents lots du projet.</p>
    
    <p>Les travaux de la premiere phase, couvrant le troncon Marrakech-Agadir-Guelmim, debuteront des le mois prochain. La mise en service complete de l'autoroute est prevue pour 2031.</p>
  `,
  image: '/images/news-1.jpg',
  readTime: '4 min',
  date: '12 mars 2026',
  author: {
    name: 'Mohamed El Fassi',
    role: 'Journaliste Infrastructure',
    avatar: '/images/interview-1.jpg',
  },
  tags: ['Autoroute', 'Maroc', 'Infrastructure', 'Afrique du Nord'],
}

const relatedArticles = [
  {
    id: 2,
    category: 'Batiment',
    title: 'Abidjan : 50 000 logements sociaux annonces d\'ici 2028',
    image: '/images/news-2.jpg',
    readTime: '3 min',
    date: '11 mars 2026',
  },
  {
    id: 3,
    category: 'Energie',
    title: 'Barrage de Kandadji au Niger : avancement des travaux a 78%',
    image: '/images/news-4.jpg',
    readTime: '5 min',
    date: '9 mars 2026',
  },
  {
    id: 4,
    category: 'Genie Civil',
    title: 'Dakar accueille le Salon International du BTP Afrique 2026',
    image: '/images/news-3.jpg',
    readTime: '2 min',
    date: '8 mars 2026',
  },
]

const categoryColors: Record<string, string> = {
  Infrastructures: 'bg-blue-700',
  Batiment: 'bg-green-700',
  'Genie Civil': 'bg-[#0E1F2F]',
  Energie: 'bg-orange-700',
  Materiaux: 'bg-slate-600',
  Reglementation: 'bg-purple-700',
}

export default function ArticleDetailPage() {
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  return (
    <>
      {/* MOBILE LAYOUT */}
      <div className="lg:hidden flex flex-col min-h-screen bg-white">
        {/* Mobile Header */}
        <header className="sticky top-0 z-40 bg-white border-b border-[#0e1f2f]/10">
          <div className="flex items-center justify-between p-4">
            <Link href="/actualites" className="flex items-center justify-center w-10 h-10 text-[#0e1f2f]">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`p-2 rounded-full ${isBookmarked ? 'bg-[#F28C28]/10 text-[#F28C28]' : 'hover:bg-slate-100 text-[#0e1f2f]/60'}`}
              >
                <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-current' : ''}`} />
              </button>
              <button className="p-2 hover:bg-slate-100 rounded-full text-[#0e1f2f]/60">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="flex-1 pb-24">
          {/* Hero Image */}
          <div className="relative h-56">
            <Image src={article.image} alt={article.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className={`${categoryColors[article.category] ?? 'bg-[#0E1F2F]'} text-white text-xs font-bold px-2 py-1 uppercase tracking-wider`}>
                {article.category}
              </span>
            </div>
          </div>

          <div className="p-4">
            {/* Title */}
            <h1 className="text-xl font-bold text-[#0e1f2f] leading-tight mb-3">
              {article.title}
            </h1>

            {/* Meta */}
            <div className="flex items-center gap-4 mb-4 text-[#0e1f2f]/50 text-xs">
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{article.readTime} de lecture</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>{article.date}</span>
              </div>
            </div>

            {/* Author */}
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-[#0e1f2f]/10">
              <div className="w-10 h-10 rounded-full bg-[#0e1f2f]/10 flex items-center justify-center overflow-hidden">
                <User className="w-5 h-5 text-[#0e1f2f]/40" />
              </div>
              <div>
                <p className="text-[#0e1f2f] font-semibold text-sm">{article.author.name}</p>
                <p className="text-[#0e1f2f]/50 text-xs">{article.author.role}</p>
              </div>
            </div>

            {/* Content */}
            <div
              className="prose prose-sm max-w-none text-[#0e1f2f]/80 
                prose-headings:text-[#0e1f2f] prose-headings:font-bold prose-headings:text-lg prose-headings:mt-6 prose-headings:mb-3
                prose-p:mb-4 prose-p:leading-relaxed
                prose-blockquote:border-l-4 prose-blockquote:border-[#F28C28] prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-[#0e1f2f]/70 prose-blockquote:my-6"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-[#0e1f2f]/10">
              {article.tags.map((tag) => (
                <span key={tag} className="bg-[#0e1f2f]/5 text-[#0e1f2f]/70 text-xs font-medium px-3 py-1.5 rounded-full">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Engagement */}
            <div className="flex items-center justify-between mt-6 pt-6 border-t border-[#0e1f2f]/10">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`flex items-center gap-1.5 ${isLiked ? 'text-red-500' : 'text-[#0e1f2f]/50'}`}
                >
                  <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                  <span className="text-sm font-medium">124</span>
                </button>
                <button className="flex items-center gap-1.5 text-[#0e1f2f]/50">
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">18</span>
                </button>
              </div>
              <div className="flex items-center gap-2">
                <button className="w-8 h-8 bg-[#1877f2] text-white rounded-full flex items-center justify-center">
                  <Facebook className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">
                  <Twitter className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 bg-[#0077b5] text-white rounded-full flex items-center justify-center">
                  <Linkedin className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Related Articles */}
            <div className="mt-8">
              <h3 className="text-lg font-bold text-[#0e1f2f] mb-4">Articles similaires</h3>
              <div className="space-y-4">
                {relatedArticles.map((related) => (
                  <Link key={related.id} href={`/actualites/${related.id}`} className="flex gap-3">
                    <div className="relative w-24 h-20 shrink-0 rounded-lg overflow-hidden">
                      <Image src={related.image} alt={related.title} fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <span className={`${categoryColors[related.category] ?? 'bg-[#0E1F2F]'} text-white text-[10px] font-bold px-1.5 py-0.5 uppercase`}>
                        {related.category}
                      </span>
                      <h4 className="text-[#0e1f2f] font-semibold text-sm mt-1 line-clamp-2 leading-tight">
                        {related.title}
                      </h4>
                      <p className="text-[#0e1f2f]/50 text-xs mt-1">{related.readTime}</p>
                    </div>
                  </Link>
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
      <div className="hidden lg:block">
        <Navbar />

        {/* Breadcrumb */}
        <div className="bg-secondary border-b border-border">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-[#F28C28]">Accueil</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/actualites" className="hover:text-[#F28C28]">Actualites</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground">{article.category}</span>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <article className="lg:col-span-2">
              {/* Category */}
              <span className={`${categoryColors[article.category] ?? 'bg-[#0E1F2F]'} text-white text-xs font-bold px-3 py-1 uppercase tracking-wider`}>
                {article.category}
              </span>

              {/* Title */}
              <h1 className="text-3xl font-bold text-foreground mt-4 mb-4 leading-tight text-balance">
                {article.title}
              </h1>

              {/* Meta */}
              <div className="flex items-center gap-6 mb-6 text-muted-foreground text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{article.readTime} de lecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 mb-8 pb-8 border-b border-border">
                <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center overflow-hidden">
                  <User className="w-6 h-6 text-slate-400" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{article.author.name}</p>
                  <p className="text-muted-foreground text-sm">{article.author.role}</p>
                </div>
              </div>

              {/* Featured Image */}
              <div className="relative h-96 mb-8 overflow-hidden">
                <Image src={article.image} alt={article.title} fill className="object-cover" />
              </div>

              {/* Content */}
              <div
                className="prose prose-lg max-w-none text-foreground
                  prose-headings:text-foreground prose-headings:font-bold prose-headings:mt-8 prose-headings:mb-4
                  prose-p:mb-6 prose-p:leading-relaxed prose-p:text-muted-foreground
                  prose-blockquote:border-l-4 prose-blockquote:border-[#F28C28] prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-foreground/80 prose-blockquote:my-8 prose-blockquote:bg-secondary prose-blockquote:py-4 prose-blockquote:pr-6"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-border">
                {article.tags.map((tag) => (
                  <span key={tag} className="bg-secondary text-foreground text-sm font-medium px-4 py-2 hover:bg-[#F28C28]/10 hover:text-[#F28C28] cursor-pointer transition-colors">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Share */}
              <div className="flex items-center justify-between mt-8 pt-8 border-t border-border">
                <p className="font-semibold text-foreground">Partager cet article :</p>
                <div className="flex items-center gap-3">
                  <button className="w-10 h-10 bg-[#1877f2] text-white rounded flex items-center justify-center hover:opacity-90 transition-opacity">
                    <Facebook className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 bg-black text-white rounded flex items-center justify-center hover:opacity-90 transition-opacity">
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 bg-[#0077b5] text-white rounded flex items-center justify-center hover:opacity-90 transition-opacity">
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 bg-secondary text-foreground rounded flex items-center justify-center hover:bg-[#F28C28] hover:text-white transition-colors">
                    <Copy className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Newsletter */}
              <div className="bg-[#0E1F2F] p-6">
                <h4 className="text-white font-bold mb-2">Newsletter BATIMAG</h4>
                <p className="text-white/60 text-sm mb-4">Recevez les actualites BTP chaque semaine.</p>
                <input
                  type="email"
                  placeholder="Votre e-mail"
                  className="w-full px-3 py-2 text-sm bg-white/10 text-white placeholder:text-white/40 border border-white/20 focus:outline-none focus:border-[#F28C28] mb-3"
                />
                <button className="w-full bg-[#F28C28] text-white text-sm font-bold py-2.5 hover:bg-orange-600 transition-colors">
                  S'abonner
                </button>
              </div>

              {/* Related Articles */}
              <div>
                <h3 className="text-lg font-bold text-foreground mb-4 pb-2 border-b border-border">
                  Articles similaires
                </h3>
                <div className="space-y-4">
                  {relatedArticles.map((related) => (
                    <Link key={related.id} href={`/actualites/${related.id}`} className="group flex gap-4">
                      <div className="relative w-24 h-20 shrink-0 overflow-hidden">
                        <Image src={related.image} alt={related.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                      </div>
                      <div>
                        <span className={`${categoryColors[related.category] ?? 'bg-[#0E1F2F]'} text-white text-[10px] font-bold px-1.5 py-0.5 uppercase`}>
                          {related.category}
                        </span>
                        <h4 className="text-foreground font-semibold text-sm mt-1 group-hover:text-[#F28C28] transition-colors line-clamp-2 leading-snug">
                          {related.title}
                        </h4>
                        <p className="text-muted-foreground text-xs mt-1">{related.readTime}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Ad Space */}
              <div className="bg-secondary border border-border p-4 flex items-center justify-center h-64">
                <span className="text-muted-foreground text-xs uppercase tracking-widest">Espace publicitaire</span>
              </div>
            </aside>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}
