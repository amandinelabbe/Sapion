'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="glass border-t border-white/10 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description - Plus large */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-4"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden">
                <Image 
                  src="/logo_sapion.png" 
                  alt="Sapion Logo" 
                  width={40} 
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-white">Sapion</span>
            </div>
            <p className="text-gray-400 max-w-2xl leading-relaxed">
              {t('footer.description')}
            </p>
          </motion.div>

          {/* Liens rapides */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">{t('footer.quickLinks')}</h3>
            <div className="space-y-2">
              <Link 
                href="/services" 
                className="block text-gray-400 hover:text-accent transition-colors duration-300"
              >
                {t('nav.services')}
              </Link>
              <Link 
                href="/projets" 
                className="block text-gray-400 hover:text-accent transition-colors duration-300"
              >
                {t('nav.projects')}
              </Link>
              <Link 
                href="/blog" 
                className="block text-gray-400 hover:text-accent transition-colors duration-300"
              >
                {t('nav.blog')}
              </Link>
              <Link 
                href="/contact" 
                className="block text-gray-400 hover:text-accent transition-colors duration-300"
              >
                {t('nav.contact')}
              </Link>
            </div>
          </motion.div>

          {/* Contact et réseaux sociaux */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">{t('footer.contact')}</h3>
            <div className="space-y-3">
              <a 
                href="mailto:contact@sapion.com"
                className="inline-flex items-center space-x-2 text-gray-400 hover:text-accent transition-colors duration-300 group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="group-hover:underline">contact@sapion.com</span>
              </a>
              <div className="flex space-x-4 pt-2">
                <a
                  href="https://linkedin.com/company/sapion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-secondary/50 hover:bg-primary rounded-lg transition-all duration-300 hover:scale-110 group"
                  title="Suivez-nous sur LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div className="flex-1">
              <p className="text-gray-400 text-sm leading-relaxed">
                © {new Date().getFullYear()} Sapion. {t('footer.copyright')}
              </p>
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <Link 
                href="/mentions-legales" 
                className="text-gray-400 hover:text-accent transition-colors duration-300 whitespace-nowrap"
              >
                {t('footer.legal')}
              </Link>
              <Link 
                href="/politique-confidentialite" 
                className="text-gray-400 hover:text-accent transition-colors duration-300 whitespace-nowrap"
              >
                {t('footer.privacy')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;