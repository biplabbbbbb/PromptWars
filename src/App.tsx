import { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { useTheme } from '@/components/ThemeToggle';
import { LandingPage } from '@/pages/LandingPage';
import { AssessmentForm } from '@/pages/AssessmentForm';
import { LoadingView } from '@/pages/LoadingView';
import { ResultsDashboard } from '@/pages/ResultsDashboard';
import { MentorView } from '@/pages/MentorView';
import { selectProjects } from '@/data/projects';
import type { AssessmentInput, ProjectIdea } from '@/data/types';

type AppState = 'landing' | 'form' | 'loading' | 'results' | 'mentor';

function App() {
  const { theme, setTheme } = useTheme();
  const [state, setState] = useState<AppState>('landing');
  const [input, setInput] = useState<AssessmentInput | null>(null);
  const [projects, setProjects] = useState<ProjectIdea[]>([]);
  const [selectedProject, setSelectedProject] = useState<ProjectIdea | null>(null);

  const handleStart = useCallback(() => setState('form'), []);

  const handleSubmit = useCallback((data: AssessmentInput) => {
    setInput(data);
    setState('loading');
  }, []);

  const handleLoadingComplete = useCallback(() => {
    if (input) {
      setProjects(selectProjects(input));
    }
    setState('results');
  }, [input]);

  const handleExplore = useCallback((project: ProjectIdea) => {
    setSelectedProject(project);
    setState('mentor');
  }, []);

  const handleRegenerate = useCallback(() => {
    if (input) {
      setState('loading');
      setProjects(selectProjects(input));
    }
  }, [input]);

  const handleBackToResults = useCallback(() => {
    setSelectedProject(null);
    setState('results');
  }, []);

  const handleHome = useCallback(() => {
    setState('landing');
    setSelectedProject(null);
    setProjects([]);
  }, []);

  return (
    <>
      <AnimatedBackground />
      <AnimatePresence mode="wait">
        <motion.div
          key={state}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          {state === 'landing' && (
            <LandingPage theme={theme} setTheme={setTheme} onStart={handleStart} />
          )}
          {state === 'form' && (
            <AssessmentForm
              theme={theme}
              setTheme={setTheme}
              onHome={handleHome}
              onSubmit={handleSubmit}
            />
          )}
          {state === 'loading' && input && (
            <LoadingView
              theme={theme}
              setTheme={setTheme}
              input={input}
              onComplete={handleLoadingComplete}
            />
          )}
          {state === 'results' && input && (
            <ResultsDashboard
              theme={theme}
              setTheme={setTheme}
              projects={projects}
              input={input}
              onExplore={handleExplore}
              onRegenerate={handleRegenerate}
              onHome={handleHome}
            />
          )}
          {state === 'mentor' && selectedProject && (
            <MentorView
              theme={theme}
              setTheme={setTheme}
              project={selectedProject}
              onBack={handleBackToResults}
              onHome={handleHome}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default App;
