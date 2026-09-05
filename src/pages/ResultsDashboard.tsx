import { motion } from 'framer-motion';
import {
  ArrowRight, Clock, Tag, TrendingUp, Sparkles, RotateCcw, Layers,
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { DynamicIcon } from '@/components/DynamicIcon';
import type { ProjectIdea, AssessmentInput } from '@/data/types';

interface ResultsDashboardProps {
  theme: 'light' | 'dark';
  setTheme: (t: 'light' | 'dark') => void;
  projects: ProjectIdea[];
  input: AssessmentInput;
  onExplore: (project: ProjectIdea) => void;
  onRegenerate: () => void;
  onHome: () => void;
}

const difficultyColors: Record<string, string> = {
  Beginner: 'bg-neon-emerald/15 text-neon-emerald border-neon-emerald/30',
  Intermediate: 'bg-amber-400/15 text-amber-500 border-amber-400/30',
  Advanced: 'bg-rose-400/15 text-rose-500 border-rose-400/30',
};

export function ResultsDashboard({
  theme, setTheme, projects, input, onExplore, onRegenerate, onHome,
}: ResultsDashboardProps) {
  return (
    <div className="min-h-screen">
      <Navbar theme={theme} setTheme={setTheme} onHome={onHome} showBack onBack={onHome} />

      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
              <Sparkles className="h-4 w-4 text-accent-500" />
              <span className="text-sm font-medium text-ink-600 dark:text-ink-300">
                3 personalized ideas generated for you
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink-900 dark:text-white mb-3">
              Your project ideas are ready
            </h1>
            <p className="text-lg text-ink-500 dark:text-ink-400 max-w-2xl mx-auto">
              Based on your interest in {input.interests.join(', ')} and your {input.skillLevel.toLowerCase()} skill level,
              here are the projects we think you will love.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15, ease: 'easeOut' }}
                whileHover={{ y: -8 }}
                onClick={() => onExplore(project)}
                className="group glass-strong rounded-2xl overflow-hidden shadow-card hover:shadow-glow-lg transition-all cursor-pointer relative flex flex-col"
              >
                {/* Gradient header */}
                <div className={`h-2 bg-gradient-to-r ${project.accent}`} />

                <div className="p-6 flex flex-col flex-1">
                  {/* Icon + match score */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${project.accent} flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform`}>
                      <DynamicIcon name={project.icon} className="h-7 w-7 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-xs font-medium text-ink-400 dark:text-ink-500 mb-1">
                        <TrendingUp className="h-3.5 w-3.5" />
                        Match
                      </div>
                      <div className="font-display text-2xl font-bold text-gradient">{project.matchScore}%</div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-bold text-ink-900 dark:text-white mb-2 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-sm text-accent-600 dark:text-accent-300 font-medium mb-3">{project.tagline}</p>

                  {/* Description */}
                  <p className="text-sm text-ink-500 dark:text-ink-400 leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-ink-200/40 dark:bg-ink-700/40 text-xs font-medium text-ink-600 dark:text-ink-300">
                        <Tag className="h-3 w-3" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Meta row */}
                  <div className="flex items-center gap-4 text-xs text-ink-500 dark:text-ink-400 mb-5 pb-5 border-b border-ink-200/30 dark:border-ink-700/30">
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {project.estimatedWeeks}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Layers className="h-3.5 w-3.5" />
                      {project.techStack.length} tech categories
                    </div>
                  </div>

                  {/* Difficulty + CTA */}
                  <div className="flex items-center justify-between mt-auto">
                    <span className={`px-3 py-1.5 rounded-lg text-xs font-semibold border ${difficultyColors[project.difficulty]}`}>
                      {project.difficulty}
                    </span>
                    <button className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 dark:text-accent-300 group-hover:gap-2.5 transition-all">
                      Explore Mentorship
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Regenerate */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <button
              onClick={onRegenerate}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass hover:shadow-glow transition-all text-ink-700 dark:text-ink-200 font-medium"
            >
              <RotateCcw className="h-4 w-4" />
              Regenerate Ideas
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
