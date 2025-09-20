'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function Blog() {
  const { t } = useLanguage();
  const articles = [
    {
      id: 1,
      title: 'SAP S/4HANA Cloud 2024 : Les nouvelles fonctionnalités',
      excerpt: 'Découvrez les dernières innovations de SAP S/4HANA Cloud 2024 qui révolutionnent la gestion d\'entreprise.',
      category: 'Innovation',
      date: '2025-09-20',
      readTime: '5 min',
      author: 'Quentin Leroux'
    },
    {
      id: 2,
      title: 'Migration vers le Cloud : Guide complet pour les PME',
      excerpt: 'Les étapes essentielles pour réussir votre migration SAP vers le cloud en minimisant les risques et les coûts.',
      category: 'Migration',
      date: '2025-09-10',
      readTime: '8 min',
      author: 'Quentin Leroux'
    },
    {
      id: 3,
      title: 'Intelligence Artificielle et SAP : L\'avenir de l\'ERP',
      excerpt: 'Comment l\'IA transforme les processus métier avec SAP et améliore la prise de décision en temps réel.',
      category: 'Intelligence Artificielle',
      date: '2025-09-05',
      readTime: '6 min',
      author: 'Amandine Labbe'
    },
    {
      id: 4,
      title: 'Création de SAPION',
      excerpt: 'Découvrez SAPION, vos experts SAP pour optimiser et implémenter des solutions innovantes.',
      category: 'Entreprise',
      date: '2025-09-01',
      readTime: '6 min',
      author: 'Quentin Leroux'
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {t('blog.title')}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('blog.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 group cursor-pointer"
            >
              <div className="mb-4">
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium">
                  {article.category}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                {article.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed mb-4 text-sm line-clamp-3">
                {article.excerpt}
              </p>
              
              <div className="flex items-center space-x-4 text-xs text-gray-400 mb-4">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-3 h-3" />
                  <span>{formatDate(article.date)}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>{article.readTime}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                <span className="text-xs text-gray-400">{t('blog.by')} {article.author}</span>
                <div className="flex items-center text-accent font-medium text-sm group-hover:translate-x-1 transition-transform duration-300">
                  <span>{t('blog.readMore')}</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}