'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Calendar, Users, Award } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function Projets() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Migration S/4HANA Cloud - TechCorp',
      category: 'cloud',
      image: '/api/placeholder/600/400',
      shortDesc: 'Migration complète vers SAP S/4HANA Cloud',
      fullDesc: 'Migration de l\'ensemble de l\'infrastructure SAP ECC vers S/4HANA Cloud pour une entreprise de 5000+ employés. Projet réalisé en 8 mois sans interruption de service.',
      technologies: ['S/4HANA Cloud', 'Fiori', 'Integration Suite', 'Analytics Cloud'],
      duration: '8 mois',
      team: '12 consultants',
      impact: 'Réduction de 40% des coûts IT',
      link: 'https://example.com/project1',
      status: 'Complété'
    },
    {
      id: 2,
      title: 'Automatisation RH - GlobalManufacturing',
      category: 'automation',
      image: '/api/placeholder/600/400',
      shortDesc: 'Automatisation des processus RH avec SuccessFactors',
      fullDesc: 'Implémentation complète de SAP SuccessFactors avec automatisation des workflows de recrutement, gestion des talents et évaluations de performance.',
      technologies: ['SuccessFactors', 'Workflow', 'Employee Central', 'Performance & Goals'],
      duration: '6 mois',
      team: '8 consultants',
      impact: 'Gain de 60% en efficacité RH',
      link: 'https://example.com/project2',
      status: 'Complété'
    },
    {
      id: 3,
      title: 'Sécurisation Infrastructure - FinanceGroup',
      category: 'security',
      image: '/api/placeholder/600/400',
      shortDesc: 'Mise en conformité GDPR et sécurisation avancée',
      fullDesc: 'Audit complet de sécurité et mise en place de solutions de protection avancées pour répondre aux exigences GDPR dans le secteur financier.',
      technologies: ['GRC', 'Identity Management', 'Data Protection', 'Audit Management'],
      duration: '4 mois',
      team: '6 consultants',
      impact: 'Conformité GDPR à 100%',
      link: 'https://example.com/project3',
      status: 'Complété'
    },
    {
      id: 4,
      title: 'Optimisation Coûts - RetailChain',
      category: 'optimization',
      image: '/api/placeholder/600/400',
      shortDesc: 'Réduction des coûts opérationnels de 45%',
      fullDesc: 'Analyse approfondie et optimisation de l\'infrastructure SAP d\'une chaîne de distribution, incluant la migration vers le cloud et l\'automatisation des processus.',
      technologies: ['SAP RISE', 'BTP', 'Analytics', 'Process Mining'],
      duration: '10 mois',
      team: '15 consultants',
      impact: 'Économies de 2.5M€/an',
      link: 'https://example.com/project4',
      status: 'En cours'
    },
    {
      id: 5,
      title: 'Digital Transformation - HealthcarePlus',
      category: 'cloud',
      image: '/api/placeholder/600/400',
      shortDesc: 'Transformation digitale complète du secteur santé',
      fullDesc: 'Modernisation complète de l\'infrastructure IT avec migration vers SAP Cloud et intégration de solutions IoT pour le monitoring patient en temps réel.',
      technologies: ['S/4HANA Cloud', 'IoT', 'ML', 'Mobile Apps'],
      duration: '12 mois',
      team: '20 consultants',
      impact: 'Amélioration de 50% des soins',
      link: 'https://example.com/project5',
      status: 'En cours'
    },
    {
      id: 6,
      title: 'Process Mining Implementation - LogisticsPro',
      category: 'automation',
      image: '/api/placeholder/600/400',
      shortDesc: 'Analyse et optimisation des processus logistiques',
      fullDesc: 'Implémentation de SAP Process Mining pour analyser et optimiser les flux logistiques, avec création de dashboards en temps réel pour le monitoring.',
      technologies: ['Process Mining', 'SAP Analytics Cloud', 'Signavio', 'API Management'],
      duration: '5 mois',
      team: '7 consultants',
      impact: 'Optimisation de 35% des délais',
      link: 'https://example.com/project6',
      status: 'Complété'
    }
  ];

  const categories = [
    { id: 'all', label: t('projects.filters.all'), count: projects.length },
    { id: 'cloud', label: t('projects.filters.cloud'), count: projects.filter(p => p.category === 'cloud').length },
    { id: 'automation', label: t('projects.filters.automation'), count: projects.filter(p => p.category === 'automation').length },
    { id: 'security', label: t('projects.filters.security'), count: projects.filter(p => p.category === 'security').length },
    { id: 'optimization', label: t('projects.filters.optimization'), count: projects.filter(p => p.category === 'optimization').length }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {t('projects.title')}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        {/* Filter Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-primary to-accent text-white'
                  : 'glass text-gray-300 hover:text-white border border-white/20'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </motion.div>
        <br /><br />
        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group glass rounded-2xl overflow-hidden hover-lift"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <div className="absolute top-4 right-4 z-20">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'Complété' 
                        ? 'bg-green-500/20 text-green-400 border border-green-400/30'
                        : 'bg-orange-500/20 text-orange-400 border border-orange-400/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 z-20">
                    <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.shortDesc}
                  </p>

                  {/* Project Stats */}
                  <div className="grid grid-cols-3 gap-4 py-4 border-t border-white/10">
                    <div className="text-center">
                      <Calendar className="w-4 h-4 text-accent mx-auto mb-1" />
                      <p className="text-xs text-gray-400">{project.duration}</p>
                    </div>
                    <div className="text-center">
                      <Users className="w-4 h-4 text-accent mx-auto mb-1" />
                      <p className="text-xs text-gray-400">{project.team}</p>
                    </div>
                    <div className="text-center">
                      <Award className="w-4 h-4 text-accent mx-auto mb-1" />
                      <p className="text-xs text-gray-400 truncate">{project.impact}</p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-secondary/50 text-accent text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-secondary/50 text-gray-400 text-xs rounded-md">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Button */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 w-full py-3 bg-gradient-to-r from-primary to-accent rounded-lg text-white font-medium hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                  >
                    <span>{t('projects.viewProject')}</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        <br /><br />
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="glass p-12 rounded-3xl">
            <br />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              {t('projects.results.title')}
            </h2>
            <br />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">50+</div>
                <div className="text-gray-300">{t('projects.results.projects')}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">98%</div>
                <div className="text-gray-300">{t('projects.results.satisfaction')}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">45%</div>
                <div className="text-gray-300">{t('projects.results.costReduction')}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">24/7</div>
                <div className="text-gray-300">{t('projects.results.support')}</div>
              </div>
            </div>
            <br />
          </div>
        </motion.div>
      </div>
    </div>
  );
}