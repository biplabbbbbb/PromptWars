import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export function Logo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const dims = { sm: 'h-8 w-8', md: 'h-10 w-10', lg: 'h-14 w-14' };
  const iconSize = { sm: 'h-4 w-4', md: 'h-5 w-5', lg: 'h-7 w-7' };

  return (
    <div className="flex items-center gap-2.5">
      <motion.div
        whileHover={{ scale: 1.05, rotate: 3 }}
        className={`${dims[size]} rounded-xl bg-gradient-to-br from-accent-400 to-neon-teal flex items-center justify-center shadow-glow relative overflow-hidden`}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent" />
        <Sparkles className={`${iconSize[size]} text-white relative z-10`} />
      </motion.div>
      {(size === 'md' || size === 'lg') && (
        <div className="leading-none">
          <span className="font-display font-bold text-lg tracking-tight text-ink-900 dark:text-white">
            Mentor<span className="text-gradient">AI</span>
          </span>
        </div>
      )}
    </div>
  );
}
