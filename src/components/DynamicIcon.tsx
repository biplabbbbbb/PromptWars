import {
  Globe, BrainCircuit, ShieldCheck, Cpu, Smartphone, Cloud,
  Sprout, TrendingUp, Rocket, FileText, Vote, Code2, Hand,
  GitPullRequest, Sparkles, type LucideIcon,
} from 'lucide-react';

const ICON_MAP: Record<string, LucideIcon> = {
  Globe, BrainCircuit, ShieldCheck, Cpu, Smartphone, Cloud,
  Sprout, TrendingUp, Rocket, FileText, Vote, Code2, Hand,
  GitPullRequest, Sparkles,
};

export function DynamicIcon({ name, className }: { name: string; className?: string }) {
  const Icon = ICON_MAP[name] || Sparkles;
  return <Icon className={className} />;
}
