import { ArrowLeft, Home } from 'lucide-react';
import { motion } from 'framer-motion';
import { Logo } from './Logo';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  theme: 'light' | 'dark';
  setTheme: (t: 'light' | 'dark') => void;
  onHome?: () => void;
  showBack?: boolean;
  onBack?: () => void;
}

export function Navbar({ theme, setTheme, onHome, showBack, onBack }: NavbarProps) {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4"
    >
      <div className="max-w-7xl mx-auto glass rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between shadow-card">
        <div className="flex items-center gap-3">
          {showBack && onBack && (
            <button
              onClick={onBack}
              className="h-9 w-9 rounded-lg hover:bg-ink-200/40 dark:hover:bg-ink-700/40 flex items-center justify-center transition-colors"
              aria-label="Go back"
            >
              <ArrowLeft className="h-4.5 w-4.5 text-ink-600 dark:text-ink-300" />
            </button>
          )}
          <button onClick={onHome} className="flex items-center gap-2.5 group">
            <Logo size="md" />
          </button>
        </div>
        <div className="flex items-center gap-2">
          {onHome && (
            <button
              onClick={onHome}
              className="hidden sm:flex h-10 px-4 rounded-xl glass hover:shadow-glow transition-all items-center gap-2 text-sm font-medium text-ink-700 dark:text-ink-200"
            >
              <Home className="h-4 w-4" />
              Home
            </button>
          )}
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
      </div>
    </motion.nav>
  );
}
