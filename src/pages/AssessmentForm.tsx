import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Sparkles,
  X,
  Plus,
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { DynamicIcon } from '@/components/DynamicIcon';
import {
  INTERESTS,
  SKILL_LEVELS,
  TECH_OPTIONS,
  type AssessmentInput,
  type Interest,
  type SkillLevel,
} from '@/data/types';

interface AssessmentFormProps {
  theme: 'light' | 'dark';
  setTheme: (t: 'light' | 'dark') => void;
  onHome: () => void;
  onSubmit: (input: AssessmentInput) => void;
}

const STEPS = ['Interests', 'Skill Level', 'Tech Stack'];

export function AssessmentForm({
  theme,
  setTheme,
  onHome,
  onSubmit,
}: AssessmentFormProps) {
  const [step, setStep] = useState(0);
  const [interests, setInterests] = useState<Interest[]>([]);
  const [skillLevel, setSkillLevel] = useState<SkillLevel | null>(null);
  const [techStack, setTechStack] = useState<string[]>([]);
  const [customTech, setCustomTech] = useState('');

  const toggleInterest = (label: Interest) => {
    setInterests((prev) =>
      prev.includes(label)
        ? prev.filter((i) => i !== label)
        : [...prev, label]
    );
  };

  const toggleTech = (tech: string) => {
    setTechStack((prev) =>
      prev.includes(tech)
        ? prev.filter((t) => t !== tech)
        : [...prev, tech]
    );
  };

  const addCustomTech = () => {
    const trimmed = customTech.trim();

    if (trimmed && !techStack.includes(trimmed)) {
      setTechStack((prev) => [...prev, trimmed]);
    }

    setCustomTech('');
  };

  const canProceed = () => {
    if (step === 0) return interests.length > 0;
    if (step === 1) return skillLevel !== null;
    if (step === 2) return techStack.length > 0;
    return false;
  };

  const handleNext = () => {
    if (step < 2) {
      setStep(step + 1);
    } else if (skillLevel) {
      onSubmit({
        interests,
        skillLevel,
        techStack,
      });
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    } else {
      onHome();
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar
        theme={theme}
        setTheme={setTheme}
        onHome={onHome}
        showBack
        onBack={handleBack}
      />

      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">

          {/* Progress */}
          <div
            className="mb-10"
            aria-label="Assessment progress"
          >
            <div className="flex items-center justify-between mb-3">
              {STEPS.map((label, i) => (
                <div
                  key={label}
                  className="flex items-center gap-3 flex-1"
                >
                  <div
                    aria-current={i === step ? 'step' : undefined}
                    aria-label={`${label}, ${
                      i < step
                        ? 'completed'
                        : i === step
                        ? 'current'
                        : 'upcoming'
                    }`}
                    className={`h-10 w-10 rounded-xl flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                      i < step
                        ? 'bg-gradient-to-br from-accent-500 to-neon-teal text-white shadow-glow'
                        : i === step
                        ? 'glass-strong border-2 border-accent-400 text-accent-500 dark:text-accent-300'
                        : 'glass text-ink-400 dark:text-ink-500'
                    }`}
                  >
                    {i < step ? (
                      <Check
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      i + 1
                    )}
                  </div>

                  {i < STEPS.length - 1 && (
                    <div className="flex-1 h-0.5 rounded-full bg-ink-200/50 dark:bg-ink-700/40 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-accent-400 to-neon-teal"
                        initial={{ width: '0%' }}
                        animate={{
                          width: i < step ? '100%' : '0%',
                        }}
                        transition={{ duration: 0.4 }}
                        aria-hidden="true"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex justify-between px-0">
              {STEPS.map((label, i) => (
                <div
                  key={label}
                  className={`text-xs sm:text-sm font-medium ${
                    i === step
                      ? 'text-ink-700 dark:text-ink-200'
                      : 'text-ink-400 dark:text-ink-500'
                  }`}
                >
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-strong rounded-3xl p-6 sm:p-10 shadow-card"
          >
            <AnimatePresence mode="wait">

              {/* Step 1: Interests */}
              {step === 0 && (
                <motion.div
                  key="interests"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="font-display text-2xl font-bold text-ink-900 dark:text-white mb-2">
                    What are your core interests?
                  </h2>

                  <p className="text-ink-500 dark:text-ink-400 mb-6">
                    Pick one or more areas you are passionate about.
                    This shapes the project domain.
                  </p>

                  <div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                    role="group"
                    aria-label="Project interests"
                  >
                    {INTERESTS.map((interest) => {
                      const selected = interests.includes(
                        interest.label
                      );

                      return (
                        <button
                          key={interest.label}
                          type="button"
                          aria-pressed={selected}
                          aria-label={`${interest.label}${
                            selected ? ', selected' : ''
                          }`}
                          onClick={() =>
                            toggleInterest(interest.label)
                          }
                          className={`relative text-left p-4 rounded-2xl border-2 transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-accent-400 ${
                            selected
                              ? 'border-accent-400 bg-accent-400/10 shadow-glow'
                              : 'border-transparent glass hover:border-ink-300/40 dark:hover:border-ink-600/40'
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div
                              className={`h-10 w-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                                selected
                                  ? 'bg-gradient-to-br from-accent-400 to-neon-teal'
                                  : 'bg-ink-200/50 dark:bg-ink-700/40'
                              }`}
                              aria-hidden="true"
                            >
                              <DynamicIcon
                                name={interest.icon}
                                className={`h-5 w-5 ${
                                  selected
                                    ? 'text-white'
                                    : 'text-ink-500 dark:text-ink-300'
                                }`}
                              />
                            </div>

                            <div>
                              <div className="font-semibold text-ink-900 dark:text-white">
                                {interest.label}
                              </div>

                              <div className="text-sm text-ink-500 dark:text-ink-400 mt-0.5">
                                {interest.blurb}
                              </div>
                            </div>
                          </div>

                          {selected && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="absolute top-3 right-3 h-6 w-6 rounded-full bg-accent-500 flex items-center justify-center"
                              aria-hidden="true"
                            >
                              <Check className="h-4 w-4 text-white" />
                            </motion.div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* Step 2: Skill Level */}
              {step === 1 && (
                <motion.div
                  key="skill"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="font-display text-2xl font-bold text-ink-900 dark:text-white mb-2">
                    What is your current skill level?
                  </h2>

                  <p className="text-ink-500 dark:text-ink-400 mb-6">
                    Be honest — this determines project difficulty
                    and scope.
                  </p>

                  <div
                    className="space-y-3"
                    role="group"
                    aria-label="Skill level"
                  >
                    {SKILL_LEVELS.map((level) => {
                      const selected = skillLevel === level.label;

                      return (
                        <button
                          key={level.label}
                          type="button"
                          aria-pressed={selected}
                          aria-label={`${level.label}${
                            selected ? ', selected' : ''
                          }`}
                          onClick={() =>
                            setSkillLevel(level.label)
                          }
                          className={`w-full text-left p-5 rounded-2xl border-2 transition-all hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-accent-400 ${
                            selected
                              ? 'border-accent-400 bg-accent-400/10 shadow-glow'
                              : 'border-transparent glass hover:border-ink-300/40 dark:hover:border-ink-600/40'
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <div
                              className={`h-12 w-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                                selected
                                  ? 'bg-gradient-to-br from-accent-400 to-neon-teal'
                                  : 'bg-ink-200/50 dark:bg-ink-700/40'
                              }`}
                              aria-hidden="true"
                            >
                              <DynamicIcon
                                name={level.icon}
                                className={`h-6 w-6 ${
                                  selected
                                    ? 'text-white'
                                    : 'text-ink-500 dark:text-ink-300'
                                }`}
                              />
                            </div>

                            <div className="flex-1">
                              <div className="font-semibold text-lg text-ink-900 dark:text-white">
                                {level.label}
                              </div>

                              <div className="text-sm text-ink-500 dark:text-ink-400 mt-0.5">
                                {level.blurb}
                              </div>
                            </div>

                            {selected && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="h-7 w-7 rounded-full bg-accent-500 flex items-center justify-center"
                                aria-hidden="true"
                              >
                                <Check className="h-5 w-5 text-white" />
                              </motion.div>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* Step 3: Tech Stack */}
              {step === 2 && (
                <motion.div
                  key="tech"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="font-display text-2xl font-bold text-ink-900 dark:text-white mb-2">
                    What tech stack do you know?
                  </h2>

                  <p className="text-ink-500 dark:text-ink-400 mb-6">
                    Select the technologies you are comfortable
                    with. You can add your own.
                  </p>

                  {/* Selected chips */}
                  {techStack.length > 0 && (
                    <div
                      className="flex flex-wrap gap-2 mb-4"
                      aria-label="Selected technologies"
                    >
                      {techStack.map((tech) => (
                        <motion.div
                          key={tech}
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.8, opacity: 0 }}
                          className="inline-flex items-center gap-1.5 pl-3 pr-1.5 py-1.5 rounded-lg bg-gradient-to-r from-accent-400/15 to-neon-teal/15 border border-accent-400/30 text-sm font-medium text-ink-700 dark:text-ink-200"
                        >
                          {tech}

                          <button
                            type="button"
                            aria-label={`Remove ${tech}`}
                            onClick={() => toggleTech(tech)}
                            className="h-5 w-5 rounded-md hover:bg-accent-400/20 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-accent-400"
                          >
                            <X
                              className="h-3.5 w-3.5"
                              aria-hidden="true"
                            />
                          </button>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Custom input */}
                  <div className="flex gap-2 mb-5">
                    <label
                      htmlFor="custom-tech"
                      className="sr-only"
                    >
                      Add your own technology
                    </label>

                    <input
                      id="custom-tech"
                      type="text"
                      value={customTech}
                      maxLength={50}
                      onChange={(e) =>
                        setCustomTech(e.target.value)
                      }
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          addCustomTech();
                        }
                      }}
                      placeholder="Add your own tech..."
                      className="flex-1 px-4 py-2.5 rounded-xl glass border border-ink-200/40 dark:border-ink-700/40 text-ink-800 dark:text-white placeholder:text-ink-400 focus:outline-none focus:border-accent-400 focus:shadow-glow transition-all"
                    />

                    <button
                      type="button"
                      aria-label="Add custom technology"
                      onClick={addCustomTech}
                      disabled={!customTech.trim()}
                      className="px-4 py-2.5 rounded-xl glass hover:shadow-glow transition-all flex items-center gap-1.5 text-sm font-medium text-ink-700 dark:text-ink-200 focus:outline-none focus:ring-2 focus:ring-accent-400 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Plus
                        className="h-4 w-4"
                        aria-hidden="true"
                      />
                      Add
                    </button>
                  </div>

                  {/* Options */}
                  <div
                    className="flex flex-wrap gap-2"
                    role="group"
                    aria-label="Available technologies"
                  >
                    {TECH_OPTIONS
                      .filter((t) => !techStack.includes(t))
                      .map((tech) => (
                        <button
                          key={tech}
                          type="button"
                          aria-pressed={techStack.includes(tech)}
                          aria-label={`Add ${tech}`}
                          onClick={() => toggleTech(tech)}
                          className="px-3.5 py-2 rounded-lg glass hover:bg-accent-400/10 hover:border-accent-400/40 text-sm font-medium text-ink-600 dark:text-ink-300 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent-400"
                        >
                          + {tech}
                        </button>
                      ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-ink-200/30 dark:border-ink-700/30">
              <button
                type="button"
                aria-label={
                  step === 0
                    ? 'Return to home'
                    : 'Go to previous step'
                }
                onClick={handleBack}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass hover:shadow-glow transition-all text-ink-700 dark:text-ink-200 font-medium focus:outline-none focus:ring-2 focus:ring-accent-400"
              >
                <ArrowLeft
                  className="h-4 w-4"
                  aria-hidden="true"
                />
                {step === 0 ? 'Home' : 'Back'}
              </button>

              <button
                type="button"
                aria-label={
                  step === 2
                    ? 'Generate project mentorship'
                    : 'Continue to next step'
                }
                onClick={handleNext}
                disabled={!canProceed()}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-accent-400 ${
                  canProceed()
                    ? 'bg-gradient-to-r from-accent-500 to-neon-teal text-white shadow-glow hover:shadow-glow-lg hover:scale-[1.03]'
                    : 'bg-ink-200/50 dark:bg-ink-700/30 text-ink-400 dark:text-ink-500 cursor-not-allowed'
                }`}
              >
                {step === 2 ? (
                  <>
                    <Sparkles
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                    Generate Project Mentorship
                  </>
                ) : (
                  <>
                    Continue
                    <ArrowRight
                      className="h-4 w-4"
                      aria-hidden="true"
                    />
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}