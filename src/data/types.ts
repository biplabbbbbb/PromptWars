export type Interest = 'Web Dev' | 'AI/ML' | 'Cybersecurity' | 'IoT' | 'Mobile' | 'Cloud/DevOps';
export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export interface AssessmentInput {
  interests: Interest[];
  skillLevel: SkillLevel;
  techStack: string[];
}

export interface RoadmapPhase {
  phase: string;
  duration: string;
  goal: string;
  tasks: string[];
}

export interface ChallengeSolution {
  challenge: string;
  solution: string;
}

export interface ProjectIdea {
  id: string;
  title: string;
  tagline: string;
  description: string;
  domain: Interest;
  difficulty: SkillLevel;
  matchScore: number;
  estimatedWeeks: string;
  tags: string[];
  icon: string; // lucide icon name
  accent: string; // tailwind gradient classes
  architecture: {
    overview: string;
    layers: { name: string; responsibility: string }[];
  };
  features: string[];
  techStack: { category: string; tools: string[] }[];
  roadmap: RoadmapPhase[];
  challenges: ChallengeSolution[];
  learningOutcomes: string[];
}

export const INTERESTS: { label: Interest; icon: string; blurb: string }[] = [
  { label: 'Web Dev', icon: 'Globe', blurb: 'Full-stack apps, dashboards, real-time experiences' },
  { label: 'AI/ML', icon: 'BrainCircuit', blurb: 'Machine learning, NLP, computer vision, LLMs' },
  { label: 'Cybersecurity', icon: 'ShieldCheck', blurb: 'Security tooling, cryptography, threat detection' },
  { label: 'IoT', icon: 'Cpu', blurb: 'Connected devices, sensors, embedded systems' },
  { label: 'Mobile', icon: 'Smartphone', blurb: 'iOS, Android, cross-platform mobile apps' },
  { label: 'Cloud/DevOps', icon: 'Cloud', blurb: 'Infrastructure, CI/CD, scalability, containers' },
];

export const SKILL_LEVELS: { label: SkillLevel; icon: string; blurb: string }[] = [
  { label: 'Beginner', icon: 'Sprout', blurb: 'Comfortable with basics, eager to learn fundamentals' },
  { label: 'Intermediate', icon: 'TrendingUp', blurb: 'Built small projects, ready for real complexity' },
  { label: 'Advanced', icon: 'Rocket', blurb: 'Confident across stacks, seeking a challenge' },
];

export const TECH_OPTIONS = [
  'Python', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'Next.js',
  'Flutter', 'Dart', 'Java', 'C++', 'Go', 'Rust',
  'TensorFlow', 'PyTorch', 'scikit-learn', 'FastAPI', 'Express',
  'PostgreSQL', 'MongoDB', 'Firebase', 'Docker', 'Kubernetes', 'AWS',
  'TensorFlow Lite', 'OpenCV', 'Solidity', 'Arduino', 'Raspberry Pi',
];
