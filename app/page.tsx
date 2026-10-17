'use client';

import React, { useState } from 'react';
import { 
  Search, 
  Upload, 
  BookOpen, 
  FileText, 
  Zap, 
  Settings, 
  Atom, 
  Calculator, 
  Sparkles, 
  ArrowUpRight, 
  Menu, 
  X, 
  Flame, 
  Clock,
  CheckCircle2,
  Download,
  ShieldCheck,
  Trophy,
  Crown,
  ThumbsUp,
  Award,
  ExternalLink,
  Users
} from 'lucide-react';

interface ResourceItem {
  id: string;
  title: string;
  type: 'Notes' | 'PYQ' | 'Topper Sheet' | 'Derivation';
  author: string;
  upvotes: number;
  driveUrl: string;
}

interface SubjectItem {
  id: number;
  title: string;
  code: string;
  branch: string;
  semester: string;
  icon: any;
  accentBg: string;
  accentText: string;
  borderAccent: string;
  span: string;
  badges: string[];
  updated: string;
  featuredTopics: string[];
  resources: ResourceItem[];
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState<SubjectItem | null>(null);
  const [upvotedIds, setUpvotedIds] = useState<string[]>([]);

  // Replace this URL with your actual Google Form link in Phase 2
  const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSd8NZikgf_QxGoJeQ3FxTpWy7ohooXTvGgzQH9qRf8ziEZWag/viewform?usp=header';

  const filters = ['All', 'Sem 1', 'Electrical', 'Mechanical', 'Computer', 'Civil', 'PYQs'];

  const [subjects, setSubjects] = useState<SubjectItem[]>([
    {
      id: 1,
      title: 'Basic Electrical Engineering',
      code: '3110005',
      branch: 'Electrical',
      semester: 'Sem 1',
      icon: Zap,
      accentBg: 'bg-indigo-50',
      accentText: 'text-indigo-600',
      borderAccent: 'hover:border-indigo-400',
      span: 'md:col-span-2',
      badges: ['4 Notes', '2 PYQs', 'Topper Sheet'],
      updated: 'Updated 2 days ago',
      featuredTopics: ['DC & AC Circuits', 'Single Phase Transformers', 'Three Phase Induction Motors'],
      resources: [
        { id: 'bee-1', title: 'DC & AC Circuits Complete Handwritten Notes', type: 'Notes', author: 'Tanish V.', upvotes: 42, driveUrl: 'https://drive.google.com/drive/folders/1G4-uWYTd7dAGNDqYVMOGq3UAAts301hC?usp=drive_link' },
        { id: 'bee-2', title: 'GTU Mid-Sem 2025 Solved Paper + Answer Key', type: 'PYQ', author: 'Rohan P.', upvotes: 35, driveUrl: 'https://drive.google.com/drive/folders/1G4-uWYTd7dAGNDqYVMOGq3UAAts301hC?usp=drive_link' },
        { id: 'bee-3', title: 'Single Phase Transformer Step-by-Step Derivations', type: 'Derivation', author: 'Tanish V.', upvotes: 29, driveUrl: 'https://drive.google.com/drive/folders/1G4-uWYTd7dAGNDqYVMOGq3UAAts301hC?usp=drive_link' },
        { id: 'bee-4', title: 'Mid-Sem Topper Answer Sheet (28/30 Marks)', type: 'Topper Sheet', author: 'Aarav M.', upvotes: 51, driveUrl: 'https://drive.google.com/drive/folders/1G4-uWYTd7dAGNDqYVMOGq3UAAts301hC?usp=drive_link' },
      ]
    },
    {
      id: 2,
      title: 'Basic Mechanical Engineering',
      code: '3110006',
      branch: 'Mechanical',
      semester: 'Sem 1',
      icon: Settings,
      accentBg: 'bg-amber-50',
      accentText: 'text-amber-600',
      borderAccent: 'hover:border-amber-400',
      span: 'md:col-span-1',
      badges: ['3 Derivations', '1 PYQ'],
      updated: 'Updated 5 days ago',
      featuredTopics: ['Properties of Gases', 'Heat Engines & Boilers'],
      resources: [
        { id: 'bme-1', title: 'Properties of Gases All Thermodynamic Derivations', type: 'Derivation', author: 'Karan S.', upvotes: 24, driveUrl: 'https://drive.google.com/drive/folders/1G4-uWYTd7dAGNDqYVMOGq3UAAts301hC?usp=drive_link' },
        { id: 'bme-2', title: 'Boilers & Heat Engines Mid-Sem Question Bank', type: 'PYQ', author: 'Tanish V.', upvotes: 19, driveUrl: 'https://drive.google.com/drive/folders/1G4-uWYTd7dAGNDqYVMOGq3UAAts301hC?usp=drive_link' },
      ]
    },
    {
      id: 3,
      title: 'Physics',
      code: '3110018',
      branch: 'Electrical',
      semester: 'Sem 1',
      icon: Atom,
      accentBg: 'bg-sky-50',
      accentText: 'text-sky-600',
      borderAccent: 'hover:border-sky-400',
      span: 'md:col-span-1',
      badges: ['Chapter Notes', 'Formula Sheet'],
      updated: 'Updated 1 week ago',
      featuredTopics: ['Electronic Materials', 'Superconductivity', 'Lasers'],
      resources: [
        { id: 'phy-1', title: 'Laser & Superconductivity Derivations Summary', type: 'Derivation', author: 'Tanish V.', upvotes: 38, driveUrl: 'https://drive.google.com/drive/folders/1G4-uWYTd7dAGNDqYVMOGq3UAAts301hC?usp=drive_link' },
        { id: 'phy-2', title: 'All-in-One Physics Formula Cheat Sheet', type: 'Notes', author: 'Priya D.', upvotes: 31, driveUrl: 'https://drive.google.com/drive/folders/1G4-uWYTd7dAGNDqYVMOGq3UAAts301hC?usp=drive_link' },
      ]
    },
    {
      id: 4,
      title: 'Mathematics - 1',
      code: '3110014',
      branch: 'Electrical',
      semester: 'Sem 1',
      icon: Calculator,
      accentBg: 'bg-emerald-50',
      accentText: 'text-emerald-600',
      borderAccent: 'hover:border-emerald-400',
      span: 'md:col-span-2',
      badges: ['Mid-sem Question Bank', 'Step-by-step Solutions'],
      updated: 'Updated Yesterday',
      featuredTopics: ['Indeterminate Forms & L\'Hospital', 'Fourier Series', 'Matrices & Eigenvalues'],
      resources: [
        { id: 'math-1', title: 'Matrices, Eigenvalues & Cayley-Hamilton Solved Bank', type: 'Notes', author: 'Tanish V.', upvotes: 64, driveUrl: 'https://drive.google.com/drive/folders/1G4-uWYTd7dAGNDqYVMOGq3UAAts301hC?usp=drive_link' },
        { id: 'math-2', title: 'Fourier Series & Indeterminate Forms Step Solutions', type: 'PYQ', author: 'Dev K.', upvotes: 47, driveUrl: 'https://drive.google.com/drive/folders/1G4-uWYTd7dAGNDqYVMOGq3UAAts301hC?usp=drive_link' },
      ]
    }
  ]);

  const branchStandings = [
    { name: 'Electrical Engineering', points: 1420, files: 28, color: 'bg-indigo-600', lightBg: 'bg-indigo-50', textColor: 'text-indigo-700', percent: 88 },
    { name: 'Computer Engineering', points: 1150, files: 22, color: 'bg-sky-500', lightBg: 'bg-sky-50', textColor: 'text-sky-700', percent: 72 },
    { name: 'Mechanical Engineering', points: 890, files: 17, color: 'bg-amber-500', lightBg: 'bg-amber-50', textColor: 'text-amber-700', percent: 56 },
    { name: 'Civil Engineering', points: 640, files: 12, color: 'bg-emerald-500', lightBg: 'bg-emerald-50', textColor: 'text-emerald-700', percent: 40 },
  ];

  const topContributors = [
    { rank: 1, name: 'Tanish Vyas', branch: 'Electrical • Sem 1', xp: 450, uploads: 9, badge: '⚡ Founder & BEE Lead' },
    { rank: 2, name: 'Aarav Mehta', branch: 'Computer • Sem 3', xp: 320, uploads: 6, badge: '👑 Topper Sheet King' },
    { rank: 3, name: 'Priya Desai', branch: 'Electrical • Sem 1', xp: 280, uploads: 5, badge: '🔥 Physics Wizard' },
    { rank: 4, name: 'Karan Solanki', branch: 'Mechanical • Sem 1', xp: 210, uploads: 4, badge: '📘 Derivation Pro' },
  ];

  const handleUpvote = (subjectId: number, resourceId: string) => {
    if (upvotedIds.includes(resourceId)) return;
    setUpvotedIds([...upvotedIds, resourceId]);

    const updatedSubjects = subjects.map(sub => {
      if (sub.id !== subjectId) return sub;
      const updatedResources = sub.resources.map(res =>
        res.id === resourceId ? { ...res, upvotes: res.upvotes + 1 } : res
      );
      return { ...sub, resources: updatedResources };
    });

    setSubjects(updatedSubjects);
    if (selectedSubject && selectedSubject.id === subjectId) {
      const updatedSelected = updatedSubjects.find(s => s.id === subjectId) || null;
      setSelectedSubject(updatedSelected);
    }
  };

  const filteredSubjects = subjects.filter(sub => {
    const matchesSearch =
      sub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sub.code.includes(searchQuery) ||
      sub.featuredTopics.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    if (activeFilter === 'All' || activeFilter === 'Sem 1' || activeFilter === 'PYQs') {
      return matchesSearch;
    }
    return matchesSearch && sub.branch.toLowerCase() === activeFilter.toLowerCase();
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900 relative overflow-x-hidden">
      
      {/* Soft Modern Background Accents */}
      <div className="fixed top-[-15%] left-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-200/40 blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-15%] right-[-10%] w-[500px] h-[500px] rounded-full bg-sky-200/40 blur-[120px] pointer-events-none" />

      {/* 1. NAVIGATION BAR */}
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          <div className="flex items-center gap-2.5 cursor-pointer">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 to-sky-500 flex items-center justify-center shadow-md shadow-indigo-500/20">
              <Zap className="w-5 h-5 text-white fill-white/20" />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-slate-900">
              GEC <span className="text-indigo-600">Connect</span>
            </span>
            <span className="hidden sm:inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
              GTU Hub
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#materials" className="text-indigo-600 hover:text-indigo-700 transition-colors">Materials</a>
            <a href="#branch-wars" className="hover:text-indigo-600 transition-colors flex items-center gap-1.5">
              Branch Wars
              <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
            </a>
            <a href="#leaderboard" className="hover:text-indigo-600 transition-colors flex items-center gap-1.5">
              Leaderboard
              <Trophy className="w-4 h-4 text-amber-500" />
            </a>
            <a href="#contribute" className="hover:text-indigo-600 transition-colors">Contribute</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button 
              onClick={() => setUploadModalOpen(true)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-semibold shadow-md shadow-indigo-600/20 transition-all cursor-pointer"
            >
              <Upload className="w-4 h-4" />
              <span>Submit Notes (+50 XP)</span>
            </button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button 
              onClick={() => setUploadModalOpen(true)}
              className="bg-indigo-600 text-white text-xs font-semibold px-3 py-2 rounded-xl flex items-center gap-1 shadow-sm"
            >
              <Upload className="w-3.5 h-3.5" />
              +XP
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 text-slate-700"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-4 space-y-2 text-sm font-semibold text-slate-700">
            <a href="#materials" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-b border-slate-100">Study Materials</a>
            <a href="#branch-wars" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-b border-slate-100">Branch Wars</a>
            <a href="#leaderboard" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-b border-slate-100">XP Leaderboard</a>
            <a href="#contribute" onClick={() => setMobileMenuOpen(false)} className="block py-2">Contribute & Earn XP</a>
          </div>
        )}
      </header>

      {/* MAIN CONTAINER */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 relative z-10">
        
        {/* 2. HERO SECTION */}
        <section className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Built for GEC Dahod & GTU Engineering Students</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-5">
            Survive GTU.{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-500 bg-clip-text text-transparent">
              Ace Your Mid-Sems.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            The student-powered digital library for GEC. Access peer-upvoted notes, 
            step-by-step derivations, topper answer sheets, and mid-sem PYQs.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <div className="flex items-center bg-white border-2 border-slate-200 focus-within:border-indigo-500 rounded-2xl p-2 shadow-lg shadow-slate-200/60 transition-all">
              <Search className="w-5 h-5 text-slate-400 ml-3 mr-3 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search BEE 3110005, Fourier Series, Lasers, PYQs..."
                className="w-full bg-transparent text-sm sm:text-base text-slate-900 placeholder-slate-400 focus:outline-none"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="p-1.5 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <button className="hidden sm:flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all shrink-0">
                Search
              </button>
            </div>
          </div>
        </section>

        {/* 3. QUICK FILTERS */}
        <section className="mb-10">
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 pt-1 px-1">
            {filters.map((filter) => {
              const isSelected = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                    isSelected
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                      : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-100'
                  }`}
                >
                  {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-indigo-200 shrink-0" />}
                  {filter}
                </button>
              );
            })}
          </div>
        </section>

        {/* 4. SPONSORED / AFFILIATE ZONE */}
        <section className="mb-12">
          <div className="rounded-2xl bg-gradient-to-r from-indigo-50/80 via-white to-sky-50/80 border border-indigo-100 p-4 sm:p-5 shadow-sm">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 text-xs font-extrabold shadow-sm">
                  DEAL
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-600">
                      Student Partner Deal
                    </span>
                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                    <span className="text-[11px] text-slate-500 font-medium">Exam Essentials</span>
                  </div>
                  <p className="text-sm text-slate-800 font-semibold mt-0.5">
                    Need a GTU-Approved Scientific Calculator (Casio fx-991CW) or Lab Coat before Mid-Sems?
                  </p>
                </div>
              </div>
              <a 
                href="#sponsor"
                className="text-xs font-bold text-indigo-700 bg-indigo-100 hover:bg-indigo-200 px-4 py-2.5 rounded-xl transition-colors shrink-0 self-end sm:self-center"
              >
                Check Student Price →
              </a>
            </div>
          </div>
        </section>

        {/* 5. MAIN RESOURCE BENTO GRID */}
        <section id="materials" className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-indigo-600" />
                Sem 1 Core Subjects (Click to View & Upvote Notes)
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Top-upvoted notes automatically get pinned as the Batch Favorite
              </p>
            </div>
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full hidden sm:flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> Mid-Sem Ready
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {filteredSubjects.map((subject) => {
              const IconComponent = subject.icon;
              const topResource = [...subject.resources].sort((a, b) => b.upvotes - a.upvotes)[0];

              return (
                <div
                  key={subject.id}
                  onClick={() => setSelectedSubject(subject)}
                  className={`${subject.span} group relative rounded-3xl bg-white border-2 border-slate-200/90 ${subject.borderAccent} p-6 sm:p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/80 flex flex-col justify-between cursor-pointer`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-2xl ${subject.accentBg} flex items-center justify-center`}>
                        <IconComponent className={`w-6 h-6 ${subject.accentText}`} />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg">
                          GTU #{subject.code}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                      {subject.title}
                    </h3>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {subject.badges.map((badge, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700"
                        >
                          <FileText className="w-3 h-3 text-indigo-600" />
                          {badge}
                        </span>
                      ))}
                    </div>

                    {/* Top Upvoted Note Highlight */}
                    {topResource && (
                      <div className="mb-4 p-3 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2 min-w-0">
                          <Crown className="w-4 h-4 text-amber-500 shrink-0 fill-amber-500" />
                          <span className="text-xs font-bold text-slate-800 truncate">
                            {topResource.title}
                          </span>
                        </div>
                        <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-md shrink-0">
                          🔥 {topResource.upvotes}
                        </span>
                      </div>
                    )}

                    <div className="space-y-1.5 mb-5">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Syllabus Modules Covered:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {subject.featuredTopics.map((topic, i) => (
                          <span key={i} className="text-xs font-medium text-slate-600 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200/70">
                            • {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>{subject.updated}</span>
                    <span className="font-bold text-indigo-600 flex items-center gap-1 group-hover:underline">
                      <Download className="w-3.5 h-3.5" /> Open {subject.resources.length} Files & Upvote
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 6. COMPETITIVE ARENA: BRANCH WARS + XP LEADERBOARD */}
        <section id="branch-wars" className="mb-16 grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left 5 Cols: Branch Wars */}
          <div className="lg:col-span-5 rounded-3xl bg-white border-2 border-slate-200/90 p-6 sm:p-7 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 border border-orange-200 px-3 py-1 rounded-full mb-3">
                <Flame className="w-3.5 h-3.5 fill-orange-500" /> Live Branch Wars
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-1">
                Which Branch Rules GEC?
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                Every approved note or PYQ adds XP to your branch total.
              </p>

              <div className="space-y-4">
                {branchStandings.map((b, idx) => (
                  <div key={b.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="font-bold text-slate-800 flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 font-extrabold flex items-center justify-center text-xs">
                          {idx + 1}
                        </span>
                        {b.name}
                      </span>
                      <span className={`font-extrabold ${b.textColor}`}>
                        {b.points} XP <span className="text-slate-400 font-normal">({b.files} files)</span>
                      </span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${b.color} transition-all duration-500`} 
                        style={{ width: `${b.percent}%` }} 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">Electrical leads by +270 XP!</span>
              <button 
                onClick={() => setUploadModalOpen(true)}
                className="text-xs font-bold text-indigo-600 hover:text-indigo-700 cursor-pointer"
              >
                Boost Your Branch →
              </button>
            </div>
          </div>

          {/* Right 7 Cols: Top Student Contributors */}
          <div id="leaderboard" className="lg:col-span-7 rounded-3xl bg-white border-2 border-slate-200/90 p-6 sm:p-7 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full mb-2">
                  <Trophy className="w-3.5 h-3.5 text-amber-500" /> Hall of Fame
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Top Resource Contributors
                </h3>
              </div>
              <div className="text-xs bg-indigo-50 text-indigo-700 border border-indigo-200 px-3 py-2 rounded-xl font-semibold">
                🎁 Top 3 get LinkedIn Contributor Certificates
              </div>
            </div>

            <div className="space-y-3">
              {topContributors.map((user) => (
                <div 
                  key={user.rank}
                  className={`p-3.5 sm:p-4 rounded-2xl border flex items-center justify-between gap-3 ${
                    user.rank === 1 
                      ? 'bg-gradient-to-r from-amber-50/90 via-white to-indigo-50/60 border-amber-300 shadow-sm' 
                      : 'bg-slate-50/70 border-slate-200/80'
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className={`w-9 h-9 rounded-xl font-extrabold text-sm flex items-center justify-center shrink-0 ${
                      user.rank === 1 ? 'bg-amber-400 text-slate-950 shadow-sm' :
                      user.rank === 2 ? 'bg-slate-300 text-slate-800' :
                      user.rank === 3 ? 'bg-amber-700 text-white' : 'bg-slate-200 text-slate-600'
                    }`}>
                      #{user.rank}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="text-sm font-extrabold text-slate-900 truncate">{user.name}</p>
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-white border border-slate-200 text-slate-700">
                          {user.badge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500">{user.branch} • {user.uploads} Verified Uploads</p>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-sm sm:text-base font-extrabold text-indigo-600">{user.xp} XP</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* 7. CONTRIBUTE CTA BANNER */}
        <section id="contribute" className="rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-500 p-8 sm:p-12 text-white shadow-xl shadow-indigo-500/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider bg-white/15 backdrop-blur-md px-3 py-1 rounded-full mb-3">
                <ShieldCheck className="w-4 h-4" /> Moderated & Verified Quality
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2">
                Got the Topper's Answer Sheet or Clean Notes?
              </h2>
              <p className="text-sm sm:text-base text-indigo-100">
                Earn +50 XP for Topper Sheets, +30 XP for Handwritten Notes, and +20 XP for Mid-Sem PYQs. Get your name featured on the GEC Hall of Fame!
              </p>
            </div>

            <button 
              onClick={() => setUploadModalOpen(true)}
              className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white text-indigo-700 hover:bg-indigo-50 font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg hover:scale-105 transition-all cursor-pointer shrink-0"
            >
              <Upload className="w-5 h-5" />
              <span>Submit Notes & Earn XP</span>
            </button>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white py-8 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-semibold text-slate-700">© 2026 GEC Connect • Built for GEC Dahod & GTU Engineering Students</p>
          <div className="flex gap-6 font-medium">
            <a href="#materials" className="hover:text-indigo-600">Materials</a>
            <a href="#leaderboard" className="hover:text-indigo-600">Leaderboard</a>
            <a href="#contribute" className="hover:text-indigo-600">Submit PDF</a>
          </div>
        </div>
      </footer>

      {/* MODAL 1: SUBJECT RESOURCES & UPVOTE BATTLE DRAWER */}
      {selectedSubject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-2xl rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl max-h-[85vh] flex flex-col">
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">
                  GTU #{selectedSubject.code}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                  {selectedSubject.title}
                </h3>
                <p className="text-xs text-slate-500">
                  Upvote (🔥) the most helpful PDFs so batchmates find the best material first!
                </p>
              </div>
              <button 
                onClick={() => setSelectedSubject(null)}
                className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto py-4 space-y-3 flex-1">
              {[...selectedSubject.resources]
                .sort((a, b) => b.upvotes - a.upvotes)
                .map((res, idx) => {
                  const hasUpvoted = upvotedIds.includes(res.id);
                  return (
                    <div 
                      key={res.id}
                      className={`p-4 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all ${
                        idx === 0 
                          ? 'bg-amber-50/60 border-amber-300 shadow-sm' 
                          : 'bg-slate-50 border-slate-200'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          {idx === 0 && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wider bg-amber-400 text-slate-950 px-2 py-0.5 rounded-full">
                              <Crown className="w-3 h-3" /> #1 Batch Favorite
                            </span>
                          )}
                          <span className="text-[11px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">
                            {res.type}
                          </span>
                        </div>
                        <h4 className="text-sm sm:text-base font-bold text-slate-900">{res.title}</h4>
                        <p className="text-xs text-slate-500">
                          Contributed by <span className="font-semibold text-slate-700">{res.author}</span>
                        </p>
                      </div>

                      <div className="flex items-center gap-2.5 shrink-0">
                        <button
                          onClick={() => handleUpvote(selectedSubject.id, res.id)}
                          className={`px-3.5 py-2 rounded-xl text-xs font-extrabold flex items-center gap-1.5 border transition-all cursor-pointer ${
                            hasUpvoted
                              ? 'bg-orange-500 text-white border-orange-500 shadow-sm'
                              : 'bg-white text-slate-700 border-slate-200 hover:border-orange-400'
                          }`}
                        >
                          <Flame className={`w-4 h-4 ${hasUpvoted ? 'fill-white' : 'text-orange-500 fill-orange-500'}`} />
                          <span>{res.upvotes}</span>
                        </button>

                        <a
                          href={res.driveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm"
                        >
                          <span>Open PDF</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  );
                })}
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500">Have better notes for this subject?</span>
              <button 
                onClick={() => {
                  setSelectedSubject(null);
                  setUploadModalOpen(true);
                }}
                className="text-xs font-extrabold text-indigo-600 hover:underline cursor-pointer"
              >
                + Submit Your PDF & Earn XP
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: MODERATED UPLOAD GATE */}
      {uploadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-md rounded-3xl bg-white border border-slate-200 p-6 sm:p-7 shadow-2xl">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                <Award className="w-5 h-5 text-indigo-600" />
                Submit & Earn Contributor XP
              </h3>
              <button 
                onClick={() => setUploadModalOpen(false)}
                className="p-1.5 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-800 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Anti-Spam Moderation Notice */}
            <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 mb-4 space-y-1">
              <p className="font-bold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                Quality Verification Gate Active
              </p>
              <p className="text-emerald-700 leading-relaxed">
                To prevent spam, all submissions are reviewed first. XP points (+20 to +50 XP) and Leaderboard badges are awarded immediately once your file is approved!
              </p>
            </div>

           <div className="space-y-3">
  <input
    type="text"
    placeholder="Your Name (for Leaderboard credit)"
    className="" 
  />
</div>
          </div>
        </div>
      )}
    </div>
  );
}


            