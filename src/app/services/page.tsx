'use client';

import { motion } from 'framer-motion';
import { Cloud, Cog, Shield, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { useState, useEffect } from 'react';

export default function Services() {
  const { t, tArray } = useLanguage();
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const [isMobile, setIsMobile] = useState(false);

  // Détecter si on est sur mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Fonction pour gérer le clic sur les cartes
  const handleCardClick = (cardId: number) => {
    if (isMobile) {
      setFlippedCards(prev => {
        const newSet = new Set(prev);
        if (newSet.has(cardId)) {
          newSet.delete(cardId);
        } else {
          newSet.add(cardId);
        }
        return newSet;
      });
    }
  };

  const services = [
    {
      id: 1,
      icon: Cloud,
      title: t('services.items.cloudMigration.title'),
      shortDesc: t('services.items.cloudMigration.shortDesc'),
      fullDesc: t('services.items.cloudMigration.fullDesc'),
      features: tArray('services.items.cloudMigration.features'),
      color: 'from-blue-500 to-blue-700'
    },
    {
      id: 2,
      icon: Cog,
      title: t('services.items.processAutomation.title'),
      shortDesc: t('services.items.processAutomation.shortDesc'),
      fullDesc: t('services.items.processAutomation.fullDesc'),
      features: tArray('services.items.processAutomation.features'),
      color: 'from-purple-500 to-purple-700'
    },
    {
      id: 3,
      icon: Shield,
      title: t('services.items.securityCompliance.title'),
      shortDesc: t('services.items.securityCompliance.shortDesc'),
      fullDesc: t('services.items.securityCompliance.fullDesc'),
      features: tArray('services.items.securityCompliance.features'),
      color: 'from-green-500 to-green-700'
    },
    {
      id: 4,
      icon: TrendingUp,
      title: t('services.items.costOptimization.title'),
      shortDesc: t('services.items.costOptimization.shortDesc'),
      fullDesc: t('services.items.costOptimization.fullDesc'),
      features: tArray('services.items.costOptimization.features'),
      color: 'from-orange-500 to-orange-700'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {t('services.title')}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('services.subtitle')}
          </p>
        </motion.div>
<br />
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {services.map((service, index) => {
            const isFlipped = flippedCards.has(service.id);
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group perspective-1000"
                onClick={() => handleCardClick(service.id)}
                style={{ cursor: isMobile ? 'pointer' : 'default' }}
              >
                <div className={`relative h-80 transform-style-preserve-3d transition-transform duration-700 ${
                  isMobile 
                    ? (isFlipped ? 'rotate-y-180' : '') 
                    : 'group-hover:rotate-y-180'
                }`}>
                  {/* Front Face */}
                  <div className="absolute inset-0 backface-hidden">
                    <div className="glass p-10 rounded-2xl h-full flex flex-col justify-center items-center text-center space-y-4 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300">
                      <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed text-sm">
                        {service.shortDesc}
                      </p>
                      <div className="flex items-center text-accent font-medium group-hover:translate-x-2 transition-transform duration-300 text-sm">
                        <span>Découvrir plus</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </div>

                  {/* Back Face */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180">
                    <div className="glass p-12 rounded-2xl h-full flex flex-col justify-center items-center text-center">
                      <div className="space-y-6">
                        <h4 className="text-xl font-bold text-white mb-4">
                          {service.title}
                        </h4>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6">
                          {service.fullDesc}
                        </p>
                        <div className="space-y-3 mb-6">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center justify-center space-x-3">
                              <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <button className={`bg-gradient-to-r ${service.color} px-6 py-3 rounded-lg text-white font-medium hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm`}>
                          En savoir plus
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-32"
        >
            <br /><br />
          <div className="glass p-12 rounded-3xl">
            <br />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t('services.cta.title')}
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              {t('services.cta.subtitle')}
            </p><br />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-primary to-accent px-8 py-4 rounded-lg text-white font-semibold hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105">
                {t('services.cta.consultation')}
              </button>
              <button className="border border-accent text-accent px-8 py-4 rounded-lg font-semibold hover:bg-accent hover:text-black transition-all duration-300">
                {t('services.cta.brochure')}
              </button>
              <br />
            </div>
            <br />
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}