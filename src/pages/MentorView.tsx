import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, Clock, Tag, Layers, Network, ListChecks, Wrench,
  Map, AlertTriangle, Lightbulb, CheckCircle2, ChevronDown,
  GraduationCap, Sparkles, Target,
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { DynamicIcon } from '@/components/DynamicIcon';
import type { ProjectIdea } from '@/data/types';

interface MentorViewProps {
  theme: 'light' | 'dark';
  setTheme: (t: 'light' | 'dark') => void;
  project: ProjectIdea;
  onBack: () => void;
  onHome: () => void;
}

type Tab = 'overview' | 'features' | 'techstack' | 'roadmap' | 'challenges';

const TABS: { id: Tab; label: string; icon: typeof Network }[] = [
  { id: 'overview', label: 'Architecture', icon: Network },
  { id: 'features', label: 'Core Features', icon: ListChecks },
  { id: 'techstack', label: 'Tech Stack', icon: Wrench },
  { id: 'roadmap', label: 'Roadmap', icon: Map },
  { id: 'challenges', label: 'Challenges', icon: AlertTriangle },
];

export function MentorView({ theme, setTheme, project, onBack, onHome }: MentorViewProps) {
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  const [openPhase, setOpenPhase] = useState<number | null>(0);

  return (
    <div className="min-h-screen">
      <Navbar theme={theme} setTheme={setTheme} onHome={onHome} showBack onBack={onBack} />

      <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Project header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-strong rounded-3xl p-6 sm:p-8 shadow-card mb-6 relative overflow-hidden"
          >
            <div className={`absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br ${project.accent} opacity-20 blur-[60px]`} />
            <div className="relative flex flex-col sm:flex-row items-start gap-5">
              <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${project.accent} flex items-center justify-center shadow-glow flex-shrink-0`}>
                <DynamicIcon name={project.icon} className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-2.5 py-1 rounded-lg bg-accent-400/15 text-accent-600 dark:text-accent-300 text-xs font-semibold">
                    {project.domain}
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-ink-200/40 dark:bg-ink-700/40 text-ink-600 dark:text-ink-300 text-xs font-semibold">
                    {project.difficulty}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-ink-500 dark:text-ink-400">
                    <Clock className="h-3.5 w-3.5" />
                    {project.estimatedWeeks}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-ink-500 dark:text-ink-400">
                    <Target className="h-3.5 w-3.5" />
                    {project.matchScore}% match
                  </span>
                </div>
                <h1 className="font-display text-2xl sm:text-3xl font-bold text-ink-900 dark:text-white mb-2 leading-tight">
                  {project.title}
                </h1>
                <p className="text-ink-500 dark:text-ink-400 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-ink-200/30 dark:bg-ink-700/30 text-xs text-ink-500 dark:text-ink-400">
                      <Tag className="h-3 w-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tab navigation */}
          <div className="glass rounded-2xl p-1.5 mb-6 flex flex-wrap gap-1 sticky top-20 z-30">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all flex-1 justify-center min-w-fit ${
                  activeTab === tab.id
                    ? 'text-white'
                    : 'text-ink-500 dark:text-ink-400 hover:text-ink-700 dark:hover:text-ink-200'
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent-500 to-neon-teal shadow-glow"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <tab.icon className="h-4 w-4 relative z-10" />
                <span className="relative z-10 hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {/* OVERVIEW / ARCHITECTURE */}
            {activeTab === 'overview' && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <SectionCard icon={Network} title="System Architecture" accent={project.accent}>
                  <p className="text-ink-600 dark:text-ink-300 leading-relaxed mb-6">
                    {project.architecture.overview}
                  </p>
                  <div className="space-y-3">
                    {project.architecture.layers.map((layer, i) => (
                      <motion.div
                        key={layer.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex gap-4 p-4 rounded-xl glass hover:shadow-glow transition-shadow"
                      >
                        <div className="flex flex-col items-center flex-shrink-0">
                          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-accent-400 to-neon-teal flex items-center justify-center text-white text-sm font-bold">
                            {i + 1}
                          </div>
                          {i < project.architecture.layers.length - 1 && (
                            <div className="w-0.5 flex-1 bg-gradient-to-b from-accent-400/40 to-transparent mt-1" />
                          )}
                        </div>
                        <div className="pb-2">
                          <h4 className="font-semibold text-ink-900 dark:text-white mb-1">{layer.name}</h4>
                          <p className="text-sm text-ink-500 dark:text-ink-400 leading-relaxed">{layer.responsibility}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </SectionCard>

                <SectionCard icon={GraduationCap} title="Learning Outcomes" accent={project.accent}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.learningOutcomes.map((outcome, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.08 }}
                        className="flex items-start gap-3 p-4 rounded-xl glass"
                      >
                        <CheckCircle2 className="h-5 w-5 text-neon-emerald flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-ink-600 dark:text-ink-300 leading-relaxed">{outcome}</span>
                      </motion.div>
                    ))}
                  </div>
                </SectionCard>
              </motion.div>
            )}

            {/* FEATURES */}
            {activeTab === 'features' && (
              <motion.div
                key="features"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <SectionCard icon={ListChecks} title="Core Features" accent={project.accent}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.06 }}
                        whileHover={{ scale: 1.02 }}
                        className="flex items-start gap-3 p-4 rounded-xl glass hover:shadow-glow transition-shadow"
                      >
                        <div className="h-7 w-7 rounded-lg bg-accent-400/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="h-4 w-4 text-accent-500 dark:text-accent-300" />
                        </div>
                        <span className="text-sm text-ink-700 dark:text-ink-200 leading-relaxed">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </SectionCard>
              </motion.div>
            )}

            {/* TECH STACK */}
            {activeTab === 'techstack' && (
              <motion.div
                key="techstack"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <SectionCard icon={Wrench} title="Recommended Tech Stack" accent={project.accent}>
                  <div className="space-y-4">
                    {project.techStack.map((category, i) => (
                      <motion.div
                        key={category.category}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="p-4 rounded-xl glass"
                      >
                        <h4 className="font-semibold text-ink-900 dark:text-white mb-3 flex items-center gap-2">
                          <Layers className="h-4 w-4 text-accent-500 dark:text-accent-300" />
                          {category.category}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {category.tools.map((tool) => (
                            <span
                              key={tool}
                              className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-accent-400/10 to-neon-teal/10 border border-accent-400/20 text-sm font-medium text-ink-700 dark:text-ink-200"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </SectionCard>
              </motion.div>
            )}

            {/* ROADMAP */}
            {activeTab === 'roadmap' && (
              <motion.div
                key="roadmap"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <SectionCard icon={Map} title="Development Roadmap" accent={project.accent}>
                  <div className="space-y-3">
                    {project.roadmap.map((phase, i) => (
                      <div key={i} className="rounded-xl glass overflow-hidden">
                        <button
                          onClick={() => setOpenPhase(openPhase === i ? null : i)}
                          className="w-full flex items-center gap-4 p-4 text-left hover:bg-ink-200/20 dark:hover:bg-ink-700/20 transition-colors"
                        >
                          <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${project.accent} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
                            {i + 1}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-ink-900 dark:text-white">{phase.phase}</h4>
                            <div className="flex items-center gap-3 mt-0.5">
                              <span className="text-xs text-ink-500 dark:text-ink-400 flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {phase.duration}
                              </span>
                            </div>
                          </div>
                          <ChevronDown className={`h-5 w-5 text-ink-400 transition-transform flex-shrink-0 ${openPhase === i ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {openPhase === i && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="px-4 pb-4 pl-18 ml-14">
                                <div className="p-3 rounded-lg bg-accent-400/10 border border-accent-400/20 mb-3">
                                  <p className="text-sm text-ink-600 dark:text-ink-300">
                                    <span className="font-semibold text-accent-600 dark:text-accent-300">Goal: </span>
                                    {phase.goal}
                                  </p>
                                </div>
                                <ul className="space-y-2">
                                  {phase.tasks.map((task, j) => (
                                    <motion.li
                                      key={j}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: j * 0.05 }}
                                      className="flex items-start gap-2.5 text-sm text-ink-600 dark:text-ink-300"
                                    >
                                      <div className="h-5 w-5 rounded-md bg-accent-400/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <div className="h-1.5 w-1.5 rounded-full bg-accent-500" />
                                      </div>
                                      {task}
                                    </motion.li>
                                  ))}
                                </ul>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                </SectionCard>
              </motion.div>
            )}

            {/* CHALLENGES */}
            {activeTab === 'challenges' && (
              <motion.div
                key="challenges"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <SectionCard icon={AlertTriangle} title="Potential Challenges & Solutions" accent={project.accent}>
                  <div className="space-y-4">
                    {project.challenges.map((cs, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.12 }}
                        className="rounded-xl overflow-hidden border border-ink-200/30 dark:border-ink-700/30"
                      >
                        <div className="p-4 bg-rose-400/8 dark:bg-rose-400/5">
                          <div className="flex items-start gap-3">
                            <div className="h-8 w-8 rounded-lg bg-rose-400/15 flex items-center justify-center flex-shrink-0">
                              <AlertTriangle className="h-4 w-4 text-rose-500" />
                            </div>
                            <div>
                              <span className="text-xs font-semibold text-rose-500 uppercase tracking-wide">Challenge</span>
                              <p className="text-sm text-ink-700 dark:text-ink-200 mt-1 leading-relaxed">{cs.challenge}</p>
                            </div>
                          </div>
                        </div>
                        <div className="p-4 bg-neon-emerald/8 dark:bg-neon-emerald/5">
                          <div className="flex items-start gap-3">
                            <div className="h-8 w-8 rounded-lg bg-neon-emerald/15 flex items-center justify-center flex-shrink-0">
                              <Lightbulb className="h-4 w-4 text-neon-emerald" />
                            </div>
                            <div>
                              <span className="text-xs font-semibold text-neon-emerald uppercase tracking-wide">Mentor's Solution</span>
                              <p className="text-sm text-ink-700 dark:text-ink-200 mt-1 leading-relaxed">{cs.solution}</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </SectionCard>

                {/* AI Mentor note */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="glass-strong rounded-2xl p-6 flex items-start gap-4"
                >
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-accent-400 to-neon-teal flex items-center justify-center flex-shrink-0 shadow-glow">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-ink-900 dark:text-white mb-1">Your AI Mentor's Advice</h4>
                    <p className="text-sm text-ink-500 dark:text-ink-400 leading-relaxed">
                      Start with Phase 1 and do not skip the planning steps — they save weeks later. When you hit a challenge
                      listed here, come back to the solution before spending hours debugging. Build the smallest working
                      version first, then layer on the advanced features. You have got this.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Back to results */}
          <div className="mt-8 text-center">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass hover:shadow-glow transition-all text-ink-700 dark:text-ink-200 font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to all ideas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionCard({
  icon: Icon,
  title,
  accent,
  children,
}: {
  icon: typeof Network;
  title: string;
  accent: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="glass-strong rounded-2xl p-6 sm:p-8 shadow-card"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${accent} flex items-center justify-center shadow-glow`}>
          <Icon className="h-5 w-5 text-white" />
        </div>
        <h2 className="font-display text-xl font-bold text-ink-900 dark:text-white">{title}</h2>
      </div>
      {children}
    </motion.div>
  );
}
