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
      excerpt: 'Découvrez les dernières innovations de SAP S/4HANA Cloud 2024.',
      category: 'Innovation',
      date: '2024-03-15',
      readTime: '5 min',
      author: 'Marie Dubois'
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

        <div className="glass rounded-3xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            {articles[0].title}
          </h2>
          <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
            <span className="bg-primary/20 text-primary px-2 py-1 rounded-md">
              {articles[0].category}
            </span>
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(articles[0].date)}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{articles[0].readTime}</span>
            </div>
          </div>
          <p className="text-gray-300 leading-relaxed mb-4">
            {articles[0].excerpt}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">{t('blog.by')} {articles[0].author}</span>
            <div className="flex items-center text-accent font-medium">
              <span>{t('blog.readMore')}</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}