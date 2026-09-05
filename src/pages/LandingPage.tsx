import { motion } from 'framer-motion';
import {
  ArrowRight, BrainCircuit, Sparkles, Target, Rocket,
  Code2, ShieldCheck, Cpu, GraduationCap, Lightbulb, CheckCircle2,
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import type { SkillLevel } from '@/data/types';

interface LandingPageProps {
  theme: 'light' | 'dark';
  setTheme: (t: 'light' | 'dark') => void;
  onStart: () => void;
}

const stats = [
  { value: '9+', label: 'Project Domains' },
  { value: '3-Phase', label: 'Mentorship Roadmaps' },
  { value: '100%', label: 'Personalized' },
];

const features = [
  { icon: BrainCircuit, title: 'AI-Powered Matching', desc: 'Our engine analyzes your skills and interests to surface projects that fit you — not generic lists.' },
  { icon: Target, title: 'Personalized Roadmaps', desc: 'Every project comes with a phased development plan, from planning to advanced features.' },
  { icon: Lightbulb, title: 'Challenge Mentorship', desc: 'Anticipated problems with real solutions — so you are never stuck Googling at 2am.' },
  { icon: Rocket, title: 'Production-Ready Scope', desc: 'Projects sized for a semester, with architecture, tech stack, and learning outcomes.' },
];

const domains = [
  { icon: Code2, label: 'Web Dev', color: 'text-sky-500' },
  { icon: BrainCircuit, label: 'AI / ML', color: 'text-cyan-500' },
  { icon: ShieldCheck, label: 'Cybersecurity', color: 'text-emerald-500' },
  { icon: Cpu, label: 'IoT', color: 'text-teal-500' },
  { icon: GraduationCap, label: 'Mobile', color: 'text-rose-500' },
  { icon: Rocket, label: 'Cloud / DevOps', color: 'text-amber-500' },
];

export function LandingPage({ theme, setTheme, onStart }: LandingPageProps) {
  return (
    <div className="min-h-screen">
      <Navbar theme={theme} setTheme={setTheme} onHome={() => {}} />

      {/* Hero */}
      <section className="relative pt-40 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8"
          >
            <Sparkles className="h-4 w-4 text-accent-500" />
            <span className="text-sm font-medium text-ink-600 dark:text-ink-300">
              Your AI mentor for final-year projects
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.05 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-ink-900 dark:text-white leading-[1.1]"
          >
            Find your final-year project.
            <br />
            <span className="text-gradient">Get mentored through it.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            className="mt-6 text-lg sm:text-xl text-ink-500 dark:text-ink-300 max-w-2xl mx-auto leading-relaxed"
          >
            MentorAI analyzes your skills and interests, generates personalized project ideas,
            and walks you through every phase — architecture, roadmap, and the challenges you
            will hit before you hit them.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.25 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={onStart}
              className="group relative inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-gradient-to-r from-accent-500 to-neon-teal text-white font-semibold text-base shadow-glow hover:shadow-glow-lg transition-all hover:scale-[1.03] active:scale-[0.98]"
            >
              <Sparkles className="h-5 w-5" />
              Generate My Project Idea
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={onStart}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl glass text-ink-700 dark:text-ink-200 font-medium text-base hover:shadow-glow transition-all"
            >
              See how it works
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.35 }}
            className="mt-16 flex items-center justify-center gap-8 sm:gap-16"
          >
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-3xl sm:text-4xl font-bold text-gradient">{s.value}</div>
                <div className="text-sm text-ink-500 dark:text-ink-400 mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Floating domain chips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-3 max-w-3xl mx-auto"
        >
          {domains.map((d, i) => (
            <motion.div
              key={d.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + i * 0.08, duration: 0.4 }}
              whileHover={{ y: -4, scale: 1.05 }}
              className="glass rounded-xl px-4 py-2.5 flex items-center gap-2 cursor-default"
            >
              <d.icon className={`h-4 w-4 ${d.color}`} />
              <span className="text-sm font-medium text-ink-700 dark:text-ink-200">{d.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Features */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink-900 dark:text-white">
              More than ideas. A full mentorship.
            </h2>
            <p className="mt-4 text-lg text-ink-500 dark:text-ink-400 max-w-2xl mx-auto">
              Other tools hand you a title. MentorAI hands you the architecture, the roadmap,
              and the solutions to problems you have not hit yet.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-strong rounded-2xl p-6 group hover:shadow-glow transition-shadow"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-accent-400/20 to-neon-teal/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <f.icon className="h-6 w-6 text-accent-500 dark:text-accent-300" />
                </div>
                <h3 className="font-display text-xl font-semibold text-ink-900 dark:text-white mb-2">{f.title}</h3>
                <p className="text-ink-500 dark:text-ink-400 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink-900 dark:text-white">
              Three steps to your project
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Tell us about you', desc: 'Share your interests, skill level, and the tech you know.' },
              { step: '02', title: 'Get matched', desc: 'Receive 3 personalized project ideas with match scores.' },
              { step: '03', title: 'Dive into mentorship', desc: 'Open a project to reveal architecture, roadmap, and challenges.' },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative"
              >
                <div className="font-display text-5xl font-bold text-accent-400/30 dark:text-accent-400/20 mb-3">{s.step}</div>
                <h3 className="font-display text-xl font-semibold text-ink-900 dark:text-white mb-2">{s.title}</h3>
                <p className="text-ink-500 dark:text-ink-400 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto glass-strong rounded-3xl p-12 text-center relative overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-accent-400/20 blur-[80px]" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-neon-teal/20 blur-[80px]" />
          <div className="relative">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink-900 dark:text-white mb-4">
              Ready to find your project?
            </h2>
            <p className="text-lg text-ink-500 dark:text-ink-400 mb-8 max-w-xl mx-auto">
              It takes two minutes. You will walk away with a project, a plan, and a mentor.
            </p>
            <button
              onClick={onStart}
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-gradient-to-r from-accent-500 to-neon-teal text-white font-semibold shadow-glow hover:shadow-glow-lg transition-all hover:scale-[1.03] active:scale-[0.98]"
            >
              <Sparkles className="h-5 w-5" />
              Generate My Project Idea
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-ink-500 dark:text-ink-400">
              {['No sign-up needed', 'Free to use', 'Instant results'].map((t) => (
                <div key={t} className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-neon-emerald" />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="py-12 px-4 text-center text-sm text-ink-400 dark:text-ink-500">
        MentorAI — Your AI-powered final-year project mentor. Prototype for demonstration.
      </footer>
    </div>
  );
}
