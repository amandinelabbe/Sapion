'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Cloud, Shield, Zap, TrendingUp, Users, Award, Globe, Calendar } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Cloud,
      title: t('home.features.migration.title'),
      description: t('home.features.migration.desc')
    },
    {
      icon: Zap,
      title: t('home.features.automation.title'),
      description: t('home.features.automation.desc')
    },
    {
      icon: Shield,
      title: t('home.features.security.title'),
      description: t('home.features.security.desc')
    },
    {
      icon: TrendingUp,
      title: t('home.features.optimization.title'),
      description: t('home.features.optimization.desc')
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background animated elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Main Title */}
            <div className="space-y-6" style={{ marginBottom: '3rem' }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{ 
                  fontSize: '1rem',
                  color: '#10b981',
                  textAlign: 'center',
                  marginBottom: '1rem',
                  fontWeight: '500',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase'
                }}
              >
                🚀 Advanced SAP Solutions
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ 
                  fontSize: '4rem', 
                  fontWeight: 'bold', 
                  color: '#ffffff',
                  textAlign: 'center',
                  marginBottom: '1rem',
                  lineHeight: '1.1'
                }}
              >
                {t('home.title')}
              </motion.h1>
              
              <div 
                style={{ 
                  fontSize: '4rem', 
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginBottom: '2rem',
                  background: 'linear-gradient(135deg, #3b82f6 0%, #10b981 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                with Sapion Expertise
              </div>
              
                  <motion.h1 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ 
                  fontSize: '4rem', 
                  fontWeight: 'bold', 
                  color: '#ffffff',
                  textAlign: 'center',
                  marginBottom: '1rem',
                  lineHeight: '1.1'
                }}
              >
            
              </motion.h1>
              
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            >
              {t('home.description')}
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2 }}
              className="pt-8"
            >
              <Link href="/services">
                <button className="group bg-gradient-to-r from-primary to-accent px-8 py-4 rounded-lg text-white font-semibold text-lg hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105 flex items-center space-x-2 mx-auto">
                  <span>{t('home.cta')}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      </section>

      {/* Features Preview Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('home.features.title')}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('home.features.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-xl hover-lift group cursor-pointer"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-accent transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About & CEO Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('home.about.title')}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
              {t('home.about.subtitle')}
            </p>
            <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
              {t('home.about.description')}
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
              <p className="text-gray-400">{t('home.about.stats.projects')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">10+</div>
              <p className="text-gray-400">{t('home.about.stats.clients')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">5+</div>
              <p className="text-gray-400">{t('home.about.stats.years')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">5+</div>
              <p className="text-gray-400">{t('home.about.stats.countries')}</p>
            </div>
          </motion.div>

            <br /><br />
          {/* CEO Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* CEO Photo Placeholder */}
              <div className="flex justify-center lg:justify-start">
                <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl border-2 border-dashed border-primary/30 flex flex-col items-center justify-center text-center p-8">
                  <Users className="w-16 h-16 text-primary/50 mb-4" />
                  <p className="text-gray-400 text-lg font-medium mb-2">Photo du CEO</p>
                  <p className="text-gray-500 text-sm">Ajouter une photo professionnelle ici</p>
                  <p className="text-gray-600 text-xs mt-2">Dimensions recommandées: 400x400px</p>
                </div>
              </div>

              {/* CEO Info */}
              <div className="text-center lg:text-left space-y-6">
                <div>
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {t('home.about.ceo.name')}
                  </h4>
                  <p className="text-accent text-lg font-medium mb-4">
                    {t('home.about.ceo.position')}
                  </p>
                </div>

                <blockquote className="text-xl md:text-2xl text-gray-300 italic leading-relaxed border-l-4 border-accent pl-6">
                  &ldquo;{t('home.about.ceo.quote')}&rdquo;
                </blockquote>

                <p className="text-gray-400 leading-relaxed">
                  {t('home.about.ceo.bio')}
                </p>

                <div className="pt-4">
                  <Link href="/contact">
                    <button className="bg-gradient-to-r from-primary to-accent px-6 py-3 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105 flex items-center space-x-2 mx-auto lg:mx-0">
                      <span>Rencontrer notre équipe</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
