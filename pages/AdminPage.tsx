import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Save, AlertCircle, CheckCircle, Lock, Loader, Edit, Trash2, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { db } from '../firebase';
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { BLOG_POSTS } from '../constants'; // For migration

interface ArticleForm {
  id?: string; // Optional for new articles
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
  const [isPublishing, setIsPublishing] = useState(false);
  const [articlesList, setArticlesList] = useState<any[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  
  const initialForm: ArticleForm = {
    title: '', slug: '', category: 'SEO', image: '', excerpt: '', content: '', keyword: ''
  };
  const [form, setForm] = useState<ArticleForm>(initialForm);

  const [seoScore, setSeoScore] = useState(0);
  const [seoChecks, setSeoChecks] = useState({
    titleLength: false, excerptLength: false, contentLength: false, keywordInTitle: false, keywordInContent: false,
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'Bingo2026!') setIsAuthenticated(true);
    else alert('Mot de passe incorrect');
  };

  const fetchArticles = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'articles'));
      const fetched = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      fetched.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
      setArticlesList(fetched);
    } catch (error) {
      console.error("Erreur de chargement :", error);
    }
  };

  useEffect(() => {
    if (isAuthenticated) fetchArticles();
  }, [isAuthenticated]);

  useEffect(() => {
    let score = 0;
    const checks = {
      titleLength: form.title.length >= 40 && form.title.length <= 60,
      excerptLength: form.excerpt.length >= 120 && form.excerpt.length <= 160,
      contentLength: form.content.length > 1500,
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

  const handleSave = async () => {
    if (!form.title || !form.content) {
      alert("Le titre et le contenu sont obligatoires.");
      return;
    }
    setIsPublishing(true);
    try {
      const articleData = {
        title: form.title,
        slug: form.slug,
        category: form.category,
        image: form.image || "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?auto=format&fit=crop&q=80&w=800",
        excerpt: form.excerpt,
        content: form.content,
        keyword: form.keyword,
        date: new Date().toISOString(),
        readTime: Math.max(1, Math.ceil(form.content.length / 1000)) + ' min',
      };
      
      if (isEditing && form.id) {
        await updateDoc(doc(db, 'articles', form.id), articleData);
        alert('Article mis à jour avec succès !');
      } else {
        await addDoc(collection(db, 'articles'), articleData);
        alert('Article publié avec succès !');
      }
      
      setForm(initialForm);
      setIsEditing(false);
      fetchArticles();
    } catch (error) {
      console.error("Erreur :", error);
      alert("Erreur lors de la publication.");
    } finally {
      setIsPublishing(false);
    }
  };

  const handleEdit = (article: any) => {
    setForm({ ...article });
    setIsEditing(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Voulez-vous vraiment supprimer cet article ?')) {
      try {
        await deleteDoc(doc(db, 'articles', id));
        fetchArticles();
      } catch (error) {
        console.error(error);
        alert('Erreur lors de la suppression.');
      }
    }
  };

  const handleMigrateOldArticles = async () => {
    if (window.confirm("Voulez-vous importer les anciens articles dans la base de données pour pouvoir les modifier ? (Ne le faites qu'une seule fois !)")) {
      try {
        for (const post of BLOG_POSTS) {
          await addDoc(collection(db, 'articles'), {
            title: post.title,
            category: post.category,
            image: post.image,
            excerpt: post.excerpt,
            content: post.content,
            date: post.date,
            readTime: post.readTime,
            keyword: '',
            slug: ''
          });
        }
        alert("Importation réussie !");
        fetchArticles();
      } catch (error) {
        console.error(error);
        alert("Erreur lors de l'importation.");
      }
    }
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
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <Link to="/" className="inline-flex items-center gap-2 text-[#FF4500] font-bold">
            <ArrowLeft size={20} /> Retour au site
          </Link>
          <h1 className="text-3xl font-black">Dashboard SEO</h1>
          <div className="flex gap-4 items-center">
            {isEditing && (
              <button onClick={() => {setForm(initialForm); setIsEditing(false);}} className="text-gray-500 font-bold hover:text-black">
                Annuler
              </button>
            )}
            <button 
              onClick={handleSave} 
              disabled={isPublishing}
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-bold hover:bg-neutral-800 transition-colors disabled:opacity-50"
            >
              {isPublishing ? <Loader size={20} className="animate-spin" /> : <Save size={20} />} 
              {isEditing ? (isPublishing ? "Mise à jour..." : "Mettre à jour") : (isPublishing ? "Publication..." : "Publier l'article")}
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold mb-6">{isEditing ? "Modifier l'article" : "Rédiger un nouvel article"}</h2>
              
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
                  <label className="block text-sm font-bold mb-2">Image Principale (URL)</label>
                  <input 
                    type="text" 
                    value={form.image}
                    onChange={(e) => setForm({...form, image: e.target.value})}
                    className="w-full p-3 border rounded-lg focus:border-[#FF4500] outline-none"
                    placeholder="https://..."
                  />
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
                  <span className={`text-sm ${seoChecks.titleLength ? 'text-green-700' : 'text-gray-500'}`}>Titre : 40-60 caractères</span>
                </div>
                
                <div className="flex items-start gap-3">
                  {seoChecks.keywordInTitle ? <CheckCircle className="text-green-500 shrink-0" size={20} /> : <AlertCircle className="text-gray-300 shrink-0" size={20} />}
                  <span className={`text-sm ${seoChecks.keywordInTitle ? 'text-green-700' : 'text-gray-500'}`}>Mot-clé dans le titre</span>
                </div>

                <div className="flex items-start gap-3">
                  {seoChecks.excerptLength ? <CheckCircle className="text-green-500 shrink-0" size={20} /> : <AlertCircle className="text-gray-300 shrink-0" size={20} />}
                  <span className={`text-sm ${seoChecks.excerptLength ? 'text-green-700' : 'text-gray-500'}`}>Meta Description : 120-160 car.</span>
                </div>

                <div className="flex items-start gap-3">
                  {seoChecks.contentLength ? <CheckCircle className="text-green-500 shrink-0" size={20} /> : <AlertCircle className="text-gray-300 shrink-0" size={20} />}
                  <span className={`text-sm ${seoChecks.contentLength ? 'text-green-700' : 'text-gray-500'}`}>Longueur satisfaisante</span>
                </div>

                <div className="flex items-start gap-3">
                  {seoChecks.keywordInContent ? <CheckCircle className="text-green-500 shrink-0" size={20} /> : <AlertCircle className="text-gray-300 shrink-0" size={20} />}
                  <span className={`text-sm ${seoChecks.keywordInContent ? 'text-green-700' : 'text-gray-500'}`}>Mot-clé répété (3x)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Management List */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Vos Articles Publiés</h2>
            <button 
              onClick={handleMigrateOldArticles}
              className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-bold flex items-center gap-2"
            >
              <Download size={14} /> Importer les anciens articles (1x)
            </button>
          </div>
          
          <div className="space-y-4">
            {articlesList.length === 0 ? (
              <p className="text-gray-500 italic text-sm">Aucun article dans la base de données pour le moment.</p>
            ) : (
              articlesList.map((art) => (
                <div key={art.id} className="flex justify-between items-center p-4 border rounded-xl hover:border-[#FF4500] transition-colors group">
                  <div>
                    <h3 className="font-bold text-lg">{art.title}</h3>
                    <div className="flex gap-3 text-xs text-gray-500 mt-1">
                      <span className="bg-gray-100 px-2 py-1 rounded">{art.category}</span>
                      <span className="py-1">{new Date(art.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={() => handleEdit(art)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                      title="Modifier"
                    >
                      <Edit size={18} />
                    </button>
                    <button 
                      onClick={() => handleDelete(art.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                      title="Supprimer"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

