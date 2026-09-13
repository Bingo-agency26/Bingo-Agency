import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Save, AlertCircle, CheckCircle, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ArticleForm {
  title: string;
  slug: string;
  category: string;
  image: string;
  excerpt: string;
  content: string;
  keyword: string;
}

export const AdminPage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  
  const [form, setForm] = useState<ArticleForm>({
    title: '',
    slug: '',
    category: 'SEO',
    image: '',
    excerpt: '',
    content: '',
    keyword: ''
  });

  const [seoScore, setSeoScore] = useState(0);
  const [seoChecks, setSeoChecks] = useState({
    titleLength: false,
    excerptLength: false,
    contentLength: false,
    keywordInTitle: false,
    keywordInContent: false,
  });

  // Basic authentication for the hidden page
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'Bingo2026!') {
      setIsAuthenticated(true);
    } else {
      alert('Mot de passe incorrect');
    }
  };

  // SEO Analysis logic
  useEffect(() => {
    let score = 0;
    const checks = {
      titleLength: form.title.length >= 40 && form.title.length <= 60,
      excerptLength: form.excerpt.length >= 120 && form.excerpt.length <= 160,
      contentLength: form.content.length > 1500, // Roughly 300 words
      keywordInTitle: form.keyword ? form.title.toLowerCase().includes(form.keyword.toLowerCase()) : false,
      keywordInContent: form.keyword ? (form.content.match(new RegExp(form.keyword, 'gi')) || []).length >= 3 : false,
    };

    if (checks.titleLength) score += 20;
    if (checks.excerptLength) score += 20;
    if (checks.contentLength) score += 20;
    if (checks.keywordInTitle) score += 20;
    if (checks.keywordInContent) score += 20;

    setSeoChecks(checks);
    setSeoScore(score);
  }, [form]);

  const handleSave = () => {
    // For now, we save to localStorage to prove it works
    // Next step: Connect to a real database like Firebase
    const newArticle = {
      ...form,
      id: Date.now(),
      date: new Date().toISOString().split('T')[0],
      readTime: Math.ceil(form.content.length / 1000) + ' min',
    };
    
    const existing = JSON.parse(localStorage.getItem('bingo_articles') || '[]');
    localStorage.setItem('bingo_articles', JSON.stringify([newArticle, ...existing]));
    alert('Article sauvegardé en local ! Il faut brancher la base de données pour le mettre en ligne publiquement.');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#F9F7F2] flex items-center justify-center p-4">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-2xl shadow-xl max-w-sm w-full">
          <div className="flex justify-center mb-6 text-[#FF4500]">
            <Lock size={48} />
          </div>
          <h1 className="text-2xl font-bold text-center mb-6">Accès Réservé</h1>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mot de passe" 
            className="w-full px-4 py-3 border rounded-lg mb-4 outline-none focus:border-[#FF4500]"
          />
          <button type="submit" className="w-full py-3 bg-[#FF4500] text-white rounded-lg font-bold hover:bg-[#E63E00]">
            Connexion
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F9F7F2] pt-32 pb-24 text-[#1A1A1A]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex justify-between items-center mb-12">
          <Link to="/" className="inline-flex items-center gap-2 text-[#FF4500] font-bold">
            <ArrowLeft size={20} /> Retour au site
          </Link>
          <h1 className="text-3xl font-black">Dashboard SEO</h1>
          <button onClick={handleSave} className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-bold hover:bg-neutral-800 transition-colors">
            <Save size={20} /> Publier l'article
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold mb-6">Rédaction</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold mb-2">Titre de l'article (H1)</label>
                  <input 
                    type="text" 
                    value={form.title}
                    onChange={(e) => setForm({...form, title: e.target.value})}
                    className="w-full p-3 border rounded-lg focus:border-[#FF4500] outline-none"
                    placeholder="Ex: Les tendances SEO 2026 à Toulouse"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold mb-2">Mot-clé Principal</label>
                    <input 
                      type="text" 
                      value={form.keyword}
                      onChange={(e) => setForm({...form, keyword: e.target.value})}
                      className="w-full p-3 border rounded-lg focus:border-[#FF4500] outline-none"
                      placeholder="Ex: Agence SEO Toulouse"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Catégorie</label>
                    <select 
                      value={form.category}
                      onChange={(e) => setForm({...form, category: e.target.value})}
                      className="w-full p-3 border rounded-lg focus:border-[#FF4500] outline-none bg-white"
                    >
                      <option>SEO</option>
                      <option>Web Design</option>
                      <option>Marketing</option>
                      <option>Social Media</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">Extrait court (Meta Description)</label>
                  <textarea 
                    value={form.excerpt}
                    onChange={(e) => setForm({...form, excerpt: e.target.value})}
                    rows={2}
                    className="w-full p-3 border rounded-lg focus:border-[#FF4500] outline-none resize-none"
                    placeholder="Résumé attractif pour les moteurs de recherche..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">Contenu Complet (HTML autorisé)</label>
                  <textarea 
                    value={form.content}
                    onChange={(e) => setForm({...form, content: e.target.value})}
                    rows={15}
                    className="w-full p-3 border rounded-lg focus:border-[#FF4500] outline-none resize-none font-mono text-sm"
                    placeholder="<h3>Votre sous-titre H3</h3><p>Votre paragraphe...</p>"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-32">
              <h2 className="text-xl font-bold mb-2">Score SEO</h2>
              <div className="flex items-end gap-2 mb-6">
                <span className={`text-5xl font-black ${seoScore >= 80 ? 'text-green-500' : seoScore >= 50 ? 'text-orange-500' : 'text-red-500'}`}>
                  {seoScore}
                </span>
                <span className="text-gray-400 mb-1 font-bold">/100</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  {seoChecks.titleLength ? <CheckCircle className="text-green-500 shrink-0" size={20} /> : <AlertCircle className="text-gray-300 shrink-0" size={20} />}
                  <span className={`text-sm ${seoChecks.titleLength ? 'text-green-700' : 'text-gray-500'}`}>Titre : 40-60 caractères (Actuel: {form.title.length})</span>
                </div>
                
                <div className="flex items-start gap-3">
                  {seoChecks.keywordInTitle ? <CheckCircle className="text-green-500 shrink-0" size={20} /> : <AlertCircle className="text-gray-300 shrink-0" size={20} />}
                  <span className={`text-sm ${seoChecks.keywordInTitle ? 'text-green-700' : 'text-gray-500'}`}>Mot-clé dans le titre</span>
                </div>

                <div className="flex items-start gap-3">
                  {seoChecks.excerptLength ? <CheckCircle className="text-green-500 shrink-0" size={20} /> : <AlertCircle className="text-gray-300 shrink-0" size={20} />}
                  <span className={`text-sm ${seoChecks.excerptLength ? 'text-green-700' : 'text-gray-500'}`}>Meta Description : 120-160 caractères (Actuel: {form.excerpt.length})</span>
                </div>

                <div className="flex items-start gap-3">
                  {seoChecks.contentLength ? <CheckCircle className="text-green-500 shrink-0" size={20} /> : <AlertCircle className="text-gray-300 shrink-0" size={20} />}
                  <span className={`text-sm ${seoChecks.contentLength ? 'text-green-700' : 'text-gray-500'}`}>Longueur du contenu satisfaisante</span>
                </div>

                <div className="flex items-start gap-3">
                  {seoChecks.keywordInContent ? <CheckCircle className="text-green-500 shrink-0" size={20} /> : <AlertCircle className="text-gray-300 shrink-0" size={20} />}
                  <span className={`text-sm ${seoChecks.keywordInContent ? 'text-green-700' : 'text-gray-500'}`}>Mot-clé répété au moins 3 fois dans le texte</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <p className="text-xs text-blue-800 font-medium">
                  Astuce : Rédigez toujours pour les humains en premier, mais assurez-vous que les robots de Google comprennent le sujet principal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
