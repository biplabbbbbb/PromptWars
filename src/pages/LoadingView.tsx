import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, BrainCircuit, Target, Lightbulb, Rocket } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import type { AssessmentInput } from '@/data/types';

interface LoadingViewProps {
  theme: 'light' | 'dark';
  setTheme: (t: 'light' | 'dark') => void;
  input: AssessmentInput;
  onComplete: () => void;
}

const STEPS = [
  { icon: BrainCircuit, label: 'Analyzing your interests and skill level...', duration: 1200 },
  { icon: Target, label: 'Matching against 9+ project domains...', duration: 1200 },
  { icon: Lightbulb, label: 'Generating personalized project ideas...', duration: 1400 },
  { icon: Rocket, label: 'Building mentorship roadmaps...', duration: 1200 },
];

export function LoadingView({ theme, setTheme, input, onComplete }: LoadingViewProps) {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    STEPS.forEach((_, i) => {
      timers.push(
        setTimeout(() => {
          if (i < STEPS.length - 1) setCurrentStep(i + 1);
        }, STEPS[i].duration)
      );
    });
    timers.push(setTimeout(() => onComplete(), STEPS.reduce((a, s) => a + s.duration, 0) + 400));
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  const interests = input.interests.join(', ');
  const tech = input.techStack.slice(0, 5).join(', ');

  return (
    <div className="min-h-screen">
      <Navbar theme={theme} setTheme={setTheme} onHome={() => {}} />

      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-2xl w-full text-center">
          {/* Animated AI orb */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto mb-10 h-32 w-32"
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-400 to-neon-teal blur-2xl opacity-60"
              animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-400 to-neon-teal flex items-center justify-center shadow-glow-lg"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            >
              <div className="absolute inset-2 rounded-full glass-strong flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Sparkles className="h-10 w-10 text-accent-500 dark:text-accent-300" />
                </motion.div>
              </div>
            </motion.div>
            {/* Orbiting dots */}
            {[0, 120, 240].map((angle) => (
              <motion.div
                key={angle}
                className="absolute top-1/2 left-1/2 h-3 w-3 -mt-1.5 -ml-1.5 rounded-full bg-neon-teal"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                style={{ transformOrigin: `0 64px`, rotate: `${angle}deg` }}
              />
            ))}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-display text-3xl font-bold text-ink-900 dark:text-white mb-3"
          >
            MentorAI is thinking...
          </motion.h2>
          <p className="text-ink-500 dark:text-ink-400 mb-8">
            Crafting personalized project ideas based on your profile
          </p>

          {/* Input summary */}
          <div className="glass rounded-2xl p-4 mb-8 inline-flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-ink-400 dark:text-ink-500">Interests:</span>
              <span className="font-medium text-ink-700 dark:text-ink-200">{interests}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-ink-400 dark:text-ink-500">Level:</span>
              <span className="font-medium text-ink-700 dark:text-ink-200">{input.skillLevel}</span>
            </div>
            {tech && (
              <div className="flex items-center gap-2">
                <span className="text-ink-400 dark:text-ink-500">Stack:</span>
                <span className="font-medium text-ink-700 dark:text-ink-200">{tech}</span>
              </div>
            )}
          </div>

          {/* Step list */}
          <div className="space-y-3 max-w-md mx-auto text-left">
            {STEPS.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0.3 }}
                animate={{ opacity: i <= currentStep ? 1 : 0.3 }}
                className={`flex items-center gap-3 p-3 rounded-xl transition-all ${i === currentStep ? 'glass-strong' : ''}`}
              >
                <div className={`h-9 w-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all ${
                  i < currentStep
                    ? 'bg-gradient-to-br from-accent-500 to-neon-teal'
                    : i === currentStep
                    ? 'bg-accent-400/20 border-2 border-accent-400'
                    : 'bg-ink-200/40 dark:bg-ink-700/30'
                }`}>
                  {i < currentStep ? (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                      <s.icon className="h-5 w-5 text-white" />
                    </motion.div>
                  ) : i === currentStep ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                    >
                      <s.icon className="h-5 w-5 text-accent-500 dark:text-accent-300" />
                    </motion.div>
                  ) : (
                    <s.icon className="h-5 w-5 text-ink-400 dark:text-ink-500" />
                  )}
                </div>
                <span className={`text-sm font-medium ${i <= currentStep ? 'text-ink-700 dark:text-ink-200' : 'text-ink-400 dark:text-ink-500'}`}>
                  {s.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="mt-8 max-w-md mx-auto">
            <div className="h-1.5 rounded-full bg-ink-200/40 dark:bg-ink-700/40 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-accent-400 to-neon-teal"
                initial={{ width: '0%' }}
                animate={{ width: `${((currentStep + 1) / STEPS.length) * 100}%` }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
