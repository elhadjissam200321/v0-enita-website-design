'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  User,
  Settings,
  Bell,
  Briefcase,
  Heart,
  FileText,
  LogOut,
  ChevronRight,
  Building2,
  MapPin,
  Mail,
  Phone,
  Calendar,
  Edit3,
  Camera,
  Home,
  Newspaper,
  BookOpen,
} from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const userProfile = {
  name: 'Amadou Diallo',
  email: 'amadou.diallo@email.com',
  phone: '+221 77 123 45 67',
  location: 'Dakar, Senegal',
  company: 'SOGEA-SATOM',
  role: 'Chef de Projet BTP',
  memberSince: 'Mars 2024',
  avatar: '/images/interview-1.jpg',
  stats: {
    savedJobs: 12,
    applications: 5,
    savedCompanies: 8,
    savedFormations: 3,
  },
}

const recentActivity = [
  { type: 'application', title: 'Candidature envoyee - Ingenieur Genie Civil', date: 'Il y a 2 jours', icon: Briefcase },
  { type: 'save', title: 'Offre sauvegardee - Chef de Chantier Senior', date: 'Il y a 3 jours', icon: Heart },
  { type: 'view', title: 'Formation consultee - BIM Manager Certification', date: 'Il y a 5 jours', icon: BookOpen },
  { type: 'save', title: 'Entreprise suivie - Bouygues Construction', date: 'Il y a 1 semaine', icon: Building2 },
]

const savedJobs = [
  { id: 1, title: 'Ingenieur Structure Senior', company: 'Eiffage', location: 'Abidjan', salary: '2.5M - 3.5M FCFA' },
  { id: 2, title: 'Conducteur de Travaux', company: 'Colas Africa', location: 'Dakar', salary: '1.8M - 2.5M FCFA' },
  { id: 3, title: 'Chef de Projet Infrastructure', company: 'SOGEA-SATOM', location: 'Casablanca', salary: '3M - 4M FCFA' },
]

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <>
      {/* MOBILE LAYOUT */}
      <div className="lg:hidden flex flex-col min-h-screen bg-[#f6f7f8]">
        {/* Mobile Header */}
        <header className="sticky top-0 z-40 bg-[#0e1f2f] text-white">
          <div className="flex items-center justify-between p-4">
            <h1 className="text-lg font-bold">Mon Profil</h1>
            <button className="p-2 hover:bg-white/10 rounded-full">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Profile Card */}
        <div className="bg-white mx-4 -mt-0 rounded-xl shadow-sm p-5 relative">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-[#0e1f2f]/10 flex items-center justify-center overflow-hidden">
                <User className="w-10 h-10 text-[#0e1f2f]/40" />
              </div>
              <button className="absolute -bottom-1 -right-1 w-7 h-7 bg-[#F28C28] rounded-full flex items-center justify-center">
                <Camera className="w-4 h-4 text-white" />
              </button>
            </div>
            <div className="flex-1">
              <h2 className="text-[#0e1f2f] font-bold text-lg">{userProfile.name}</h2>
              <p className="text-[#0e1f2f]/60 text-sm">{userProfile.role}</p>
              <p className="text-[#0e1f2f]/40 text-xs mt-1">{userProfile.company}</p>
            </div>
            <button className="p-2 hover:bg-slate-100 rounded-full">
              <Edit3 className="w-5 h-5 text-[#0e1f2f]/60" />
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-4 gap-2 mt-5 pt-5 border-t border-[#0e1f2f]/10">
            <div className="text-center">
              <p className="text-[#F28C28] font-bold text-xl">{userProfile.stats.savedJobs}</p>
              <p className="text-[#0e1f2f]/50 text-[10px] uppercase font-semibold">Offres</p>
            </div>
            <div className="text-center">
              <p className="text-[#F28C28] font-bold text-xl">{userProfile.stats.applications}</p>
              <p className="text-[#0e1f2f]/50 text-[10px] uppercase font-semibold">Candidatures</p>
            </div>
            <div className="text-center">
              <p className="text-[#F28C28] font-bold text-xl">{userProfile.stats.savedCompanies}</p>
              <p className="text-[#0e1f2f]/50 text-[10px] uppercase font-semibold">Entreprises</p>
            </div>
            <div className="text-center">
              <p className="text-[#F28C28] font-bold text-xl">{userProfile.stats.savedFormations}</p>
              <p className="text-[#0e1f2f]/50 text-[10px] uppercase font-semibold">Formations</p>
            </div>
          </div>
        </div>

        {/* Menu Sections */}
        <div className="flex-1 p-4 space-y-4 pb-24">
          {/* Quick Actions */}
          <div className="bg-white rounded-xl overflow-hidden">
            <Link href="/emplois" className="flex items-center justify-between p-4 border-b border-[#0e1f2f]/5 hover:bg-slate-50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#F28C28]/10 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-[#F28C28]" />
                </div>
                <div>
                  <p className="text-[#0e1f2f] font-semibold text-sm">Mes Candidatures</p>
                  <p className="text-[#0e1f2f]/50 text-xs">{userProfile.stats.applications} en cours</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-[#0e1f2f]/30" />
            </Link>
            <Link href="/emplois" className="flex items-center justify-between p-4 border-b border-[#0e1f2f]/5 hover:bg-slate-50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <p className="text-[#0e1f2f] font-semibold text-sm">Offres Sauvegardees</p>
                  <p className="text-[#0e1f2f]/50 text-xs">{userProfile.stats.savedJobs} offres</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-[#0e1f2f]/30" />
            </Link>
            <Link href="/annuaire" className="flex items-center justify-between p-4 border-b border-[#0e1f2f]/5 hover:bg-slate-50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-[#0e1f2f] font-semibold text-sm">Entreprises Suivies</p>
                  <p className="text-[#0e1f2f]/50 text-xs">{userProfile.stats.savedCompanies} entreprises</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-[#0e1f2f]/30" />
            </Link>
            <Link href="/formations" className="flex items-center justify-between p-4 hover:bg-slate-50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-[#0e1f2f] font-semibold text-sm">Mes Formations</p>
                  <p className="text-[#0e1f2f]/50 text-xs">{userProfile.stats.savedFormations} en cours</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-[#0e1f2f]/30" />
            </Link>
          </div>

          {/* Settings Section */}
          <div className="bg-white rounded-xl overflow-hidden">
            <button className="flex items-center justify-between p-4 border-b border-[#0e1f2f]/5 hover:bg-slate-50 w-full text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                  <Bell className="w-5 h-5 text-[#0e1f2f]/60" />
                </div>
                <p className="text-[#0e1f2f] font-semibold text-sm">Notifications</p>
              </div>
              <ChevronRight className="w-5 h-5 text-[#0e1f2f]/30" />
            </button>
            <button className="flex items-center justify-between p-4 border-b border-[#0e1f2f]/5 hover:bg-slate-50 w-full text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-[#0e1f2f]/60" />
                </div>
                <p className="text-[#0e1f2f] font-semibold text-sm">Mon CV</p>
              </div>
              <ChevronRight className="w-5 h-5 text-[#0e1f2f]/30" />
            </button>
            <button className="flex items-center justify-between p-4 border-b border-[#0e1f2f]/5 hover:bg-slate-50 w-full text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                  <Settings className="w-5 h-5 text-[#0e1f2f]/60" />
                </div>
                <p className="text-[#0e1f2f] font-semibold text-sm">Parametres</p>
              </div>
              <ChevronRight className="w-5 h-5 text-[#0e1f2f]/30" />
            </button>
            <button className="flex items-center justify-between p-4 hover:bg-red-50 w-full text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
                  <LogOut className="w-5 h-5 text-red-500" />
                </div>
                <p className="text-red-500 font-semibold text-sm">Deconnexion</p>
              </div>
            </button>
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
            <Link href="/actualites" className="flex flex-col items-center gap-1 py-1 px-3 text-[#0e1f2f]/50 hover:text-[#0e1f2f] transition-colors">
              <Newspaper className="w-5 h-5" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Actus</span>
            </Link>
            <Link href="/emplois" className="flex flex-col items-center gap-1 py-1 px-3 text-[#0e1f2f]/50 hover:text-[#0e1f2f] transition-colors">
              <Briefcase className="w-5 h-5" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Emplois</span>
            </Link>
            <Link href="/profile" className="flex flex-col items-center gap-1 py-1 px-3 text-[#0e1f2f] relative">
              <User className="w-5 h-5 text-[#F28C28]" />
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#F28C28]">Profil</span>
              <div className="absolute -top-1 right-2 w-1.5 h-1.5 bg-[#F28C28] rounded-full"></div>
            </Link>
          </div>
        </nav>
      </div>

      {/* DESKTOP LAYOUT */}
      <div className="hidden lg:block">
        <Navbar />

        {/* Page Header */}
        <section className="bg-[#0e1f2f] py-10">
          <div className="max-w-7xl mx-auto px-4">
            <nav className="flex items-center gap-2 text-white/40 text-xs mb-3">
              <Link href="/" className="hover:text-[#F28C28] transition-colors">Accueil</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white/70">Mon Profil</span>
            </nav>
            <h1 className="text-3xl font-bold text-white mb-2">Mon Espace Personnel</h1>
            <p className="text-white/60">Gerez votre profil, vos candidatures et vos preferences</p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="bg-white border border-slate-200 p-6 sticky top-24">
                {/* Profile Summary */}
                <div className="text-center mb-6 pb-6 border-b border-slate-200">
                  <div className="w-24 h-24 mx-auto rounded-full bg-[#0e1f2f]/10 flex items-center justify-center mb-4">
                    <User className="w-12 h-12 text-[#0e1f2f]/40" />
                  </div>
                  <h3 className="font-bold text-[#0e1f2f] text-lg">{userProfile.name}</h3>
                  <p className="text-[#0e1f2f]/60 text-sm">{userProfile.role}</p>
                  <p className="text-[#0e1f2f]/40 text-xs mt-1">{userProfile.company}</p>
                </div>

                {/* Navigation */}
                <nav className="space-y-1">
                  {[
                    { id: 'overview', label: 'Vue d\'ensemble', icon: User },
                    { id: 'applications', label: 'Mes Candidatures', icon: Briefcase },
                    { id: 'saved', label: 'Offres Sauvegardees', icon: Heart },
                    { id: 'companies', label: 'Entreprises Suivies', icon: Building2 },
                    { id: 'settings', label: 'Parametres', icon: Settings },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                        activeTab === item.id
                          ? 'bg-[#0e1f2f] text-white'
                          : 'text-[#0e1f2f]/70 hover:bg-slate-100'
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      {item.label}
                    </button>
                  ))}
                </nav>

                <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-500 hover:bg-red-50 rounded-lg mt-4 transition-colors">
                  <LogOut className="w-5 h-5" />
                  Deconnexion
                </button>
              </div>
            </aside>

            {/* Main Content */}
            <main className="lg:col-span-3 space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-4 gap-4">
                <div className="bg-white border border-slate-200 p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-[#F28C28]/10 rounded-lg flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-[#F28C28]" />
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-[#0e1f2f]">{userProfile.stats.savedJobs}</p>
                  <p className="text-[#0e1f2f]/50 text-sm">Offres Sauvegardees</p>
                </div>
                <div className="bg-white border border-slate-200 p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                      <FileText className="w-5 h-5 text-green-600" />
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-[#0e1f2f]">{userProfile.stats.applications}</p>
                  <p className="text-[#0e1f2f]/50 text-sm">Candidatures</p>
                </div>
                <div className="bg-white border border-slate-200 p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-[#0e1f2f]">{userProfile.stats.savedCompanies}</p>
                  <p className="text-[#0e1f2f]/50 text-sm">Entreprises Suivies</p>
                </div>
                <div className="bg-white border border-slate-200 p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-purple-600" />
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-[#0e1f2f]">{userProfile.stats.savedFormations}</p>
                  <p className="text-[#0e1f2f]/50 text-sm">Formations</p>
                </div>
              </div>

              {/* Profile Info */}
              <div className="bg-white border border-slate-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-[#0e1f2f]">Informations Personnelles</h2>
                  <button className="text-[#F28C28] text-sm font-semibold hover:underline flex items-center gap-1">
                    <Edit3 className="w-4 h-4" />
                    Modifier
                  </button>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#0e1f2f]/40" />
                    <div>
                      <p className="text-[#0e1f2f]/50 text-xs uppercase font-semibold">Email</p>
                      <p className="text-[#0e1f2f] font-medium">{userProfile.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#0e1f2f]/40" />
                    <div>
                      <p className="text-[#0e1f2f]/50 text-xs uppercase font-semibold">Telephone</p>
                      <p className="text-[#0e1f2f] font-medium">{userProfile.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-[#0e1f2f]/40" />
                    <div>
                      <p className="text-[#0e1f2f]/50 text-xs uppercase font-semibold">Localisation</p>
                      <p className="text-[#0e1f2f] font-medium">{userProfile.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-[#0e1f2f]/40" />
                    <div>
                      <p className="text-[#0e1f2f]/50 text-xs uppercase font-semibold">Membre depuis</p>
                      <p className="text-[#0e1f2f] font-medium">{userProfile.memberSince}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white border border-slate-200 p-6">
                <h2 className="text-xl font-bold text-[#0e1f2f] mb-6">Activite Recente</h2>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                        <activity.icon className="w-5 h-5 text-[#F28C28]" />
                      </div>
                      <div className="flex-1">
                        <p className="text-[#0e1f2f] font-medium text-sm">{activity.title}</p>
                        <p className="text-[#0e1f2f]/50 text-xs">{activity.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Saved Jobs */}
              <div className="bg-white border border-slate-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-[#0e1f2f]">Offres Sauvegardees</h2>
                  <Link href="/emplois" className="text-[#F28C28] text-sm font-semibold hover:underline">
                    Voir tout
                  </Link>
                </div>
                <div className="space-y-4">
                  {savedJobs.map((job) => (
                    <div key={job.id} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:border-[#F28C28]/30 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                          <Building2 className="w-6 h-6 text-[#0e1f2f]/40" />
                        </div>
                        <div>
                          <h3 className="text-[#0e1f2f] font-semibold">{job.title}</h3>
                          <p className="text-[#0e1f2f]/60 text-sm">{job.company} - {job.location}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-[#F28C28] font-bold text-sm">{job.salary}</p>
                        <Link href={`/emplois/${job.id}`} className="text-[#0e1f2f] text-xs font-medium hover:text-[#F28C28]">
                          Voir l'offre
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </main>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}
