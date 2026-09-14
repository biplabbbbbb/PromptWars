import type { ProjectIdea, AssessmentInput } from './types';

export const PROJECT_LIBRARY: ProjectIdea[] = [
  {
    id: 'resume-analyzer',
    title: 'AI-Powered Resume Analyzer & Interview Coach',
    tagline: 'NLP-driven resume scoring with personalized interview prep',
    description:
      'A web platform that parses resumes, scores them against job descriptions using NLP similarity matching, and generates a personalized interview-prep plan with mock question generation powered by a fine-tuned language model.',
    domain: 'AI/ML',
    difficulty: 'Intermediate',
    matchScore: 96,
    estimatedWeeks: '8-10 weeks',
    tags: ['NLP', 'Transformers', 'Full-Stack', 'Career Tech'],
    icon: 'FileText',
    accent: 'from-cyan-400 to-blue-500',
    architecture: {
      overview:
        'A three-tier architecture: a React frontend for resume upload and dashboards, a FastAPI backend orchestrating an NLP pipeline (embedding extraction, semantic similarity, keyword gap analysis), and a vector store for job-description matching. An LLM API layer generates interview questions and feedback.',
      layers: [
        { name: 'Presentation Layer', responsibility: 'React SPA with drag-and-drop resume upload, score dashboard, and interview-prep viewer.' },
        { name: 'API & Orchestration Layer', responsibility: 'FastAPI routes handling auth, resume parsing, score computation, and LLM calls with rate limiting.' },
        { name: 'ML & Inference Layer', responsibility: 'Sentence-Transformer embeddings, cosine similarity scoring, and prompt-engineered LLM question generation.' },
        { name: 'Data Layer', responsibility: 'PostgreSQL for user data, pgvector for job-description embeddings, S3-compatible storage for resume files.' },
      ],
    },
    features: [
      'Drag-and-drop PDF/DOCX resume upload with automatic text extraction',
      'Semantic match score (0-100) against a target job description',
      'Keyword gap analysis highlighting missing skills and buzzwords',
      'Auto-generated 7-day interview prep roadmap with daily practice questions',
      'Mock interview mode with LLM-generated behavioral & technical questions',
      'Downloadable ATS-optimized resume rewrite suggestions',
      'Progress tracking dashboard showing score improvement over time',
    ],
    techStack: [
      { category: 'Frontend', tools: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
      { category: 'Backend', tools: ['Python', 'FastAPI', 'PyPDF2', 'python-docx'] },
      { category: 'ML / AI', tools: ['sentence-transformers', 'OpenAI API', 'scikit-learn', 'pgvector'] },
      { category: 'Data & Infra', tools: ['PostgreSQL', 'Docker', 'AWS S3'] },
    ],
    roadmap: [
      {
        phase: 'Phase 1 — Planning & Data Pipeline',
        duration: 'Weeks 1-2',
        goal: 'Establish the resume-parsing and text-extraction foundation.',
        tasks: [
          'Define the data model for users, resumes, and job descriptions',
          'Build the PDF/DOCX text extraction pipeline and validate accuracy',
          'Set up FastAPI project structure with Docker and basic auth',
          'Create the React app shell with routing and the upload UI',
        ],
      },
      {
        phase: 'Phase 2 — Scoring MVP',
        duration: 'Weeks 3-6',
        goal: 'Deliver a working resume-to-job-description match score.',
        tasks: [
          'Integrate sentence-transformers to embed resumes and job descriptions',
          'Implement cosine similarity scoring and a keyword gap analyzer',
          'Build the score dashboard with visual breakdown (gauge + gap list)',
          'Connect frontend to backend with loading and error states',
          'Write unit tests for the scoring pipeline',
        ],
      },
      {
        phase: 'Phase 3 — AI Interview Coach & Polish',
        duration: 'Weeks 7-10',
        goal: 'Add LLM-powered interview prep and production polish.',
        tasks: [
          'Design prompts for behavioral & technical question generation',
          'Build the 7-day prep roadmap generator and mock interview mode',
          'Add resume rewrite suggestions with diff view',
          'Implement rate limiting, caching, and deployment to AWS',
          'Write the final report and prepare a demo video',
        ],
      },
    ],
    challenges: [
      {
        challenge: 'Resume formats vary wildly — tables, columns, and images break text extraction.',
        solution: 'Use a hybrid extraction approach: pdfplumber for layout-aware text, fallback to OCR (Tesseract) for image-based PDFs, and normalize whitespace with a cleaning pipeline.',
      },
      {
        challenge: 'Semantic similarity scores can feel arbitrary to users without explanation.',
        solution: 'Break the score into sub-scores (skills match, experience relevance, keyword density) and surface the top contributing phrases so the user understands why a score is what it is.',
      },
      {
        challenge: 'LLM API costs can spike during mock interview sessions.',
        solution: 'Cache generated questions per job-description hash, implement a daily question cap per user, and offer a local lightweight model fallback for offline practice.',
      },
    ],
    learningOutcomes: [
      'Designing and deploying a production NLP pipeline with transformer embeddings',
      'Building a full-stack app with a Python backend and React frontend',
      'Prompt engineering and responsible LLM integration with cost controls',
      'Vector search with pgvector and semantic similarity at scale',
    ],
  },
  {
    id: 'decentralized-voting',
    title: 'Decentralized Voting System with Zero-Knowledge Verification',
    tagline: 'Blockchain-based e-voting with privacy-preserving proofs',
    description:
      'A decentralized voting dApp where voters cast ballots on an Ethereum-compatible chain and prove eligibility through zero-knowledge proofs — ensuring vote privacy, tamper resistance, and verifiable tallying without revealing individual choices.',
    domain: 'Cybersecurity',
    difficulty: 'Advanced',
    matchScore: 91,
    estimatedWeeks: '10-12 weeks',
    tags: ['Blockchain', 'ZK-Proofs', 'Solidity', 'Security'],
    icon: 'Vote',
    accent: 'from-emerald-400 to-teal-500',
    architecture: {
      overview:
        'A dApp with a React frontend interacting with Solidity smart contracts via ethers.js. Voter eligibility is proven off-chain using zk-SNARKs (Groth16), and only the proof plus a nullifier is submitted on-chain — so the tally is public but individual votes are private.',
      layers: [
        { name: 'Frontend dApp', responsibility: 'React + wagmi/ethers.js for wallet connection, proof generation in-browser, and a live results dashboard.' },
        { name: 'Smart Contract Layer', responsibility: 'Solidity contracts for voter registration, ballot casting with nullifier checks, and public tally.' },
        { name: 'ZK Proof Layer', responsibility: 'circom circuits + snarkjs for proving eligibility without revealing identity.' },
        { name: 'Chain & Indexing', responsibility: 'Local Hardhat network (or testnet) with The Graph for indexing vote events.' },
      ],
    },
    features: [
      'Wallet-based voter registration with admin-verified eligibility tokens',
      'In-browser zk-SNARK proof generation for anonymous ballot casting',
      'Nullifier scheme preventing double-voting without linking votes to identities',
      'Tamper-resistant on-chain tally with real-time results dashboard',
      'Admin dashboard for creating polls, setting deadlines, and verifying eligibility',
      'End-to-end verifiability — voters can confirm their vote was included in the tally',
      'Audit log of all contract interactions on the block explorer',
    ],
    techStack: [
      { category: 'Frontend', tools: ['React', 'TypeScript', 'ethers.js', 'wagmi', 'Tailwind CSS'] },
      { category: 'Smart Contracts', tools: ['Solidity', 'Hardhat', 'OpenZeppelin'] },
      { category: 'ZK Proofs', tools: ['circom', 'snarkjs', 'Groth16'] },
      { category: 'Indexing & Infra', tools: ['The Graph', 'Docker', 'IPFS'] },
    ],
    roadmap: [
      {
        phase: 'Phase 1 — Smart Contract Foundation',
        duration: 'Weeks 1-4',
        goal: 'Build and test the core voting contracts on a local Hardhat network.',
        tasks: [
          'Design the contract architecture (VoterRegistry, Ballot, Tally)',
          'Implement registration, nullifier-based ballot casting, and tally logic',
          'Write comprehensive Hardhat tests covering edge cases and attacks',
          'Audit contracts with Slither and fix common Solidity pitfalls',
        ],
      },
      {
        phase: 'Phase 2 — ZK Proof Integration',
        duration: 'Weeks 5-8',
        goal: 'Add privacy-preserving eligibility proofs.',
        tasks: [
          'Write the circom circuit for proving eligibility and computing a nullifier',
          'Run the trusted setup with snarkjs and generate proving/verifying keys',
          'Integrate proof generation in the browser and on-chain verification',
          'Test the full flow end-to-end on the local network',
        ],
      },
      {
        phase: 'Phase 3 — dApp Frontend & Deployment',
        duration: 'Weeks 9-12',
        goal: 'Ship a usable dApp with a live results dashboard.',
        tasks: [
          'Build the React frontend with wallet connection and proof generation UI',
          'Set up The Graph subgraph for indexing vote events',
          'Deploy to a public testnet (Sepolia) and run a mock election',
          'Write documentation, a security write-up, and prepare the demo',
        ],
      },
    ],
    challenges: [
      {
        challenge: 'The trusted setup for zk-SNARKs is complex and error-prone for beginners.',
        solution: 'Use snarkjs which provides a Powers of Tau ceremony tool. For a prototype, you can use a pre-existing ceremony file and document the trust assumptions clearly in your report.',
      },
      {
        challenge: 'In-browser proof generation can be slow and block the UI.',
        solution: 'Run proof generation in a Web Worker so the main thread stays responsive, and show a progress indicator. snarkjs supports worker-based proving out of the box.',
      },
      {
        challenge: 'Smart contract vulnerabilities (reentrancy, integer overflow) can destroy trust.',
        solution: 'Use OpenZeppelin audited contracts as a base, run Slither static analysis, and keep the contract logic minimal. Have a peer review the contracts before testnet deployment.',
      },
    ],
    learningOutcomes: [
      'Smart contract design, testing, and security auditing in Solidity',
      'Zero-knowledge proof circuits with circom and snarkjs',
      'Building a complete dApp with wallet integration and on-chain indexing',
      'Cryptographic privacy patterns (nullifiers, commitments) in practice',
    ],
  },
  {
    id: 'smart-campus-iot',
    title: 'Smart Campus Energy & Occupancy Monitor',
    tagline: 'IoT sensor mesh with real-time dashboards and anomaly alerts',
    description:
      'An IoT system using ESP32 nodes deployed across campus rooms to monitor temperature, humidity, and occupancy. Data flows through an MQTT broker into a real-time dashboard with anomaly detection that flags unusual energy usage patterns.',
    domain: 'IoT',
    difficulty: 'Intermediate',
    matchScore: 88,
    estimatedWeeks: '7-9 weeks',
    tags: ['ESP32', 'MQTT', 'Real-time', 'Anomaly Detection'],
    icon: 'Cpu',
    accent: 'from-teal-400 to-cyan-500',
    architecture: {
      overview:
        'ESP32 sensor nodes publish readings over Wi-Fi to an MQTT broker. A Node.js ingestion service subscribes, stores readings in InfluxDB, and runs a lightweight anomaly detector. A React dashboard subscribes via WebSocket for live updates and renders charts and alerts.',
      layers: [
        { name: 'Sensor Edge Layer', responsibility: 'ESP32 nodes with DHT22/PIR sensors publishing JSON readings over MQTT every 30s.' },
        { name: 'Ingestion & Processing', responsibility: 'Node.js MQTT subscriber writing to InfluxDB and running a rolling-window anomaly detector.' },
        { name: 'API & Realtime Layer', responsibility: 'Express REST API + WebSocket gateway pushing live readings and alerts to clients.' },
        { name: 'Dashboard Layer', responsibility: 'React SPA with live charts, room heatmaps, and an alert feed.' },
      ],
    },
    features: [
      'Multi-sensor ESP32 nodes (temperature, humidity, occupancy via PIR)',
      'MQTT-based publish/subscribe pipeline with QoS and reconnection handling',
      'Time-series storage in InfluxDB with downsampling for historical views',
      'Real-time dashboard with live charts and a campus room heatmap',
      'Anomaly detection flagging unusual temperature/occupancy spikes',
      'Alert feed with severity levels and acknowledge workflow',
      'Historical reports with daily/weekly energy usage trends',
    ],
    techStack: [
      { category: 'Edge / Firmware', tools: ['ESP32', 'C/C++ (Arduino core)', 'DHT22', 'PIR sensor', 'PubSubClient'] },
      { category: 'Backend', tools: ['Node.js', 'Express', 'MQTT (Mosquitto)', 'WebSocket'] },
      { category: 'Data', tools: ['InfluxDB', 'Flux queries'] },
      { category: 'Frontend', tools: ['React', 'TypeScript', 'Recharts', 'Tailwind CSS'] },
    ],
    roadmap: [
      {
        phase: 'Phase 1 — Sensor Node & Broker',
        duration: 'Weeks 1-3',
        goal: 'Get a single ESP32 publishing reliable readings to an MQTT broker.',
        tasks: [
          'Wire up the ESP32 with DHT22 and PIR sensors on a breadboard',
          'Write firmware to read sensors and publish JSON over MQTT',
          'Set up a Mosquitto broker (Docker) and verify message flow',
          'Handle Wi-Fi reconnection and sensor read failures gracefully',
        ],
      },
      {
        phase: 'Phase 2 — Ingestion & Storage',
        duration: 'Weeks 4-6',
        goal: 'Build the ingestion pipeline and time-series storage.',
        tasks: [
          'Create the Node.js MQTT subscriber and write readings to InfluxDB',
          'Implement downsampling for long-term historical queries',
          'Add a rolling-window anomaly detector (z-score on occupancy)',
          'Expose a REST API for historical data and a WebSocket for live feeds',
        ],
      },
      {
        phase: 'Phase 3 — Dashboard & Alerts',
        duration: 'Weeks 7-9',
        goal: 'Ship the real-time dashboard with alerts.',
        tasks: [
          'Build the React dashboard with live charts and the room heatmap',
          'Implement the alert feed with severity and acknowledge actions',
          'Add historical report views with date-range selection',
          'Deploy the full stack with Docker Compose and document the setup',
        ],
      },
    ],
    challenges: [
      {
        challenge: 'ESP32 Wi-Fi connections drop intermittently, causing data gaps.',
        solution: 'Implement an auto-reconnect with exponential backoff in firmware, buffer the last N readings in flash, and republish on reconnect. Flag gaps in the dashboard so they are visible, not hidden.',
      },
      {
        challenge: 'Sensor readings are noisy and trigger false anomaly alerts.',
        solution: 'Apply a moving-average smoothing filter before anomaly detection, and require a sustained deviation (e.g., 3 consecutive points beyond 2 sigma) before raising an alert.',
      },
      {
        challenge: 'Scaling to many nodes overwhelms a single MQTT subscriber.',
        solution: 'Use shared subscriptions ($share group) so multiple subscriber instances split the load, and batch-write to InfluxDB rather than one insert per message.',
      },
    ],
    learningOutcomes: [
      'Embedded firmware development with ESP32 and sensor integration',
      'Designing a publish/subscribe IoT pipeline with MQTT',
      'Time-series databases and real-time data visualization',
      'Lightweight anomaly detection on streaming sensor data',
    ],
  },
  {
    id: 'collab-code-editor',
    title: 'Real-Time Collaborative Code Editor with CRDT Sync',
    tagline: 'Multi-user live editing powered by conflict-free data types',
    description:
      'A browser-based collaborative code editor where multiple users edit the same document in real time using CRDTs (Yjs) for conflict-free merging, with shared cursors, a chat sidebar, and syntax highlighting across 20+ languages.',
    domain: 'Web Dev',
    difficulty: 'Advanced',
    matchScore: 84,
    estimatedWeeks: '9-11 weeks',
    tags: ['CRDT', 'WebSockets', 'Real-time', 'Monaco'],
    icon: 'Code2',
    accent: 'from-sky-400 to-indigo-400',
    architecture: {
      overview:
        'A React frontend using Monaco Editor with Yjs for CRDT-based shared document state. A Node.js WebSocket server relays Yjs updates between peers. Presence (cursors, selections) is synced via the Yjs awareness protocol.',
      layers: [
        { name: 'Editor Frontend', responsibility: 'React + Monaco Editor with y-monaco binding, shared cursors, and a chat sidebar.' },
        { name: 'Sync Gateway', responsibility: 'Node.js WebSocket server using y-websocket to relay updates and persist document state.' },
        { name: 'Persistence', responsibility: 'Redis for active room state and PostgreSQL for document snapshots and user metadata.' },
        { name: 'Auth & Rooms', responsibility: 'JWT-based auth, room creation, and invite-link generation.' },
      ],
    },
    features: [
      'Real-time multi-user editing with conflict-free CRDT merging',
      'Live shared cursors and selections with user name colors',
      'Syntax highlighting for 20+ languages via Monaco',
      'Room-based collaboration with shareable invite links',
      'In-editor chat sidebar with message history',
      'Document version history with restore capability',
      'Offline editing with automatic sync on reconnect',
    ],
    techStack: [
      { category: 'Frontend', tools: ['React', 'TypeScript', 'Monaco Editor', 'Yjs', 'y-monaco', 'Tailwind CSS'] },
      { category: 'Realtime Backend', tools: ['Node.js', 'y-websocket', 'WebSocket', 'Redis'] },
      { category: 'Data & Auth', tools: ['PostgreSQL', 'JWT', 'Prisma'] },
      { category: 'Infra', tools: ['Docker', 'Docker Compose'] },
    ],
    roadmap: [
      {
        phase: 'Phase 1 — Single-Player Editor',
        duration: 'Weeks 1-3',
        goal: 'Build a polished single-user code editor.',
        tasks: [
          'Set up React with Monaco Editor and language switching',
          'Add file tabs, a file tree, and a basic theme',
          'Implement local persistence with IndexedDB',
          'Build the editor layout shell with resizable panels',
        ],
      },
      {
        phase: 'Phase 2 — CRDT Collaboration',
        duration: 'Weeks 4-7',
        goal: 'Enable real-time multi-user editing.',
        tasks: [
          'Integrate Yjs with y-monaco for shared document state',
          'Set up the y-websocket server and room management',
          'Add awareness-based shared cursors and user presence',
          'Implement invite links and the room join flow',
        ],
      },
      {
        phase: 'Phase 3 — Chat, History & Polish',
        duration: 'Weeks 8-11',
        goal: 'Add chat, version history, and production readiness.',
        tasks: [
          'Build the chat sidebar with WebSocket message relay',
          'Implement document version snapshots and restore',
          'Add offline edit buffering and reconnect sync',
          'Deploy with Docker Compose and load-test with 10+ concurrent users',
        ],
      },
    ],
    challenges: [
      {
        challenge: 'Monaco and Yjs can desync on complex edits (multi-cursor, large pastes).',
        solution: 'Use the well-maintained y-monaco binding which handles remote/local edit distinction. Add a "force resync" button that reloads the document from the server snapshot as a fallback.',
      },
      {
        challenge: 'WebSocket connections drop and users lose presence state.',
        solution: 'Implement exponential-backoff reconnection on the client, and use the Yjs awareness protocol timeout (default 30s) to clean up stale cursors automatically.',
      },
      {
        challenge: 'Large documents cause high update traffic and lag.',
        solution: 'Enable Yjs update merging on the server (batch updates over a short window), and consider sub-document splitting for very large files to reduce per-edit broadcast size.',
      },
    ],
    learningOutcomes: [
      'Conflict-free Replicated Data Types (CRDTs) and eventual consistency',
      'Real-time WebSocket architecture with presence and awareness',
      'Integrating complex third-party editors (Monaco) with shared state',
      'Offline-first synchronization patterns',
    ],
  },
  {
    id: 'sign-language-translator',
    title: 'Real-Time Sign Language Recognition Translator',
    tagline: 'Computer vision pipeline translating sign language to text & speech',
    description:
      'A computer vision application that recognizes hand gestures and sign language poses in real time using MediaPipe and a custom-trained classifier, translating them into spoken text and a transcript — bridging communication for the deaf community.',
    domain: 'AI/ML',
    difficulty: 'Advanced',
    matchScore: 89,
    estimatedWeeks: '10-12 weeks',
    tags: ['Computer Vision', 'MediaPipe', 'Real-time', 'Accessibility'],
    icon: 'Hand',
    accent: 'from-violet-400 to-fuchsia-400',
    architecture: {
      overview:
        'A React frontend captures webcam frames and sends them to a Python backend running MediaPipe Hands/Pose for landmark extraction. A sequence model (LSTM or Transformer) classifies gesture sequences, and the result is translated to text and spoken via the Web Speech API.',
      layers: [
        { name: 'Capture & UI Layer', responsibility: 'React app with webcam access, live landmark overlay, transcript display, and text-to-speech.' },
        { name: 'Vision Pipeline', responsibility: 'Python service using MediaPipe for hand/pose landmark extraction at 30fps.' },
        { name: 'Sequence Classification', responsibility: 'LSTM/Transformer model trained on gesture sequences to classify signs.' },
        { name: 'Inference Serving', responsibility: 'FastAPI serving the model with ONNX Runtime for optimized inference.' },
      ],
    },
    features: [
      'Real-time webcam-based hand and pose landmark detection',
      'Custom-trained sequence classifier for a 20-sign vocabulary (expandable)',
      'Live transcript with sentence assembly and auto-punctuation',
      'Text-to-speech output for translated phrases',
      'Adjustable detection confidence threshold and smoothing',
      'Training data collection UI to record new signs',
      'Accuracy metrics dashboard with per-sign confusion matrix',
    ],
    techStack: [
      { category: 'Frontend', tools: ['React', 'TypeScript', 'MediaPipe JS', 'Web Speech API', 'Tailwind CSS'] },
      { category: 'Vision', tools: ['Python', 'MediaPipe', 'OpenCV', 'NumPy'] },
      { category: 'Model', tools: ['PyTorch', 'LSTM/Transformer', 'ONNX Runtime'] },
      { category: 'Serving', tools: ['FastAPI', 'WebSocket', 'Docker'] },
    ],
    roadmap: [
      {
        phase: 'Phase 1 — Landmark Pipeline',
        duration: 'Weeks 1-3',
        goal: 'Extract and visualize hand/pose landmarks in real time.',
        tasks: [
          'Set up the React webcam capture and frame streaming to the backend',
          'Integrate MediaPipe Hands and Pose for landmark extraction',
          'Build a live landmark overlay on the webcam feed',
          'Define the data schema for gesture sequences',
        ],
      },
      {
        phase: 'Phase 2 — Dataset & Model',
        duration: 'Weeks 4-8',
        goal: 'Collect data and train the sequence classifier.',
        tasks: [
          'Build a training data collection UI to record and label sign sequences',
          'Collect 50+ samples per sign for a 20-sign vocabulary',
          'Train an LSTM sequence classifier with data augmentation',
          'Export to ONNX and serve via FastAPI with a WebSocket frame stream',
        ],
      },
      {
        phase: 'Phase 3 — Translation & Polish',
        duration: 'Weeks 9-12',
        goal: 'Assemble sentences, add speech output, and polish.',
        tasks: [
          'Implement sentence assembly with confidence smoothing and auto-punctuation',
          'Add text-to-speech output and a copyable transcript',
          'Build the accuracy dashboard with a confusion matrix',
          'Optimize inference latency and prepare the demo',
        ],
      },
    ],
    challenges: [
      {
        challenge: 'Collecting enough training data for robust recognition is time-consuming.',
        solution: 'Start with a small vocabulary (20 signs), use data augmentation (rotation, scaling, noise), and consider transfer learning from an existing gesture dataset like ASL Alphabet.',
      },
      {
        challenge: 'Real-time inference latency can cause dropped frames and laggy UX.',
        solution: 'Export the model to ONNX Runtime for faster inference, run inference in a separate thread, and use frame skipping (process every other frame) with interpolation for smooth output.',
      },
      {
        challenge: 'Signs with similar hand shapes are easily confused by the classifier.',
        solution: 'Include pose landmarks (not just hands) to add context, use a sliding window of frames rather than single frames, and surface a confidence score so low-confidence predictions are flagged.',
      },
    ],
    learningOutcomes: [
      'Real-time computer vision with MediaPipe landmark extraction',
      'Sequence modeling (LSTM/Transformer) for temporal gesture data',
      'Dataset collection, augmentation, and model deployment',
      'Building accessible technology with real social impact',
    ],
  },
  {
    id: 'k8s-autoscaler',
    title: 'Intelligent Kubernetes Autoscaler with Predictive Scaling',
    tagline: 'ML-driven resource scaling that predicts traffic before it spikes',
    description:
      'A Kubernetes operator that monitors cluster metrics and uses a time-series forecasting model to predict traffic spikes, proactively scaling deployments before resource pressure hits — reducing latency and cost compared to reactive autoscaling.',
    domain: 'Cloud/DevOps',
    difficulty: 'Advanced',
    matchScore: 87,
    estimatedWeeks: '10-12 weeks',
    tags: ['Kubernetes', 'Forecasting', 'Go', 'Operators'],
    icon: 'Cloud',
    accent: 'from-cyan-400 to-teal-500',
    architecture: {
      overview:
        'A Go-based Kubernetes operator watches deployment metrics via the Metrics API, feeds them to a Python forecasting service (Prophet or a lightweight LSTM), and adjusts replica counts via the Kubernetes API — scaling proactively rather than reactively.',
      layers: [
        { name: 'Operator Layer', responsibility: 'Go controller watching custom resources and reconciling replica counts.' },
        { name: 'Metrics Collection', responsibility: 'Prometheus scraping + Metrics Server for CPU/memory/throughput signals.' },
        { name: 'Forecasting Service', responsibility: 'Python service running time-series forecasting (Prophet/LSTM) exposed via gRPC.' },
        { name: 'Observability', responsibility: 'Grafana dashboards showing predicted vs. actual traffic and scaling decisions.' },
      ],
    },
    features: [
      'Custom Resource Definition (CRD) for predictive scaling policies',
      'Real-time metric ingestion from Prometheus and Metrics Server',
      'Time-series forecasting with configurable horizon (5-30 min ahead)',
      'Proactive replica adjustment before traffic spikes hit',
      'Cost-savings dashboard comparing predictive vs. reactive scaling',
      'Configurable scaling aggressiveness and cooldown periods',
      'Alerting on forecast errors and unexpected metric deviations',
    ],
    techStack: [
      { category: 'Operator', tools: ['Go', 'controller-runtime', 'client-go', 'Kubebuilder'] },
      { category: 'Forecasting', tools: ['Python', 'Prophet', 'gRPC', 'pandas'] },
      { category: 'Metrics', tools: ['Prometheus', 'Metrics Server', 'Grafana'] },
      { category: 'Infra', tools: ['Kubernetes (minikube/kind)', 'Docker', 'Helm'] },
    ],
    roadmap: [
      {
        phase: 'Phase 1 — Operator Skeleton',
        duration: 'Weeks 1-4',
        goal: 'Build a working Kubernetes operator with a custom resource.',
        tasks: [
          'Scaffold the operator with Kubebuilder and define the PredictiveScaler CRD',
          'Implement the reconciler loop reading deployment and metrics state',
          'Set up a local Kubernetes cluster (kind) with Prometheus and Metrics Server',
          'Implement basic reactive scaling as a baseline',
        ],
      },
      {
        phase: 'Phase 2 — Forecasting Service',
        duration: 'Weeks 5-8',
        goal: 'Build and integrate the prediction service.',
        tasks: [
          'Create the Python forecasting service with Prophet and a gRPC API',
          'Feed historical metrics to the model and generate short-horizon forecasts',
          'Integrate the operator with the forecasting service via gRPC',
          'Implement the proactive scaling decision logic with safety bounds',
        ],
      },
      {
        phase: 'Phase 3 — Evaluation & Dashboards',
        duration: 'Weeks 9-12',
        goal: 'Prove the value with benchmarks and visualizations.',
        tasks: [
          'Generate synthetic traffic patterns (spikes, diurnal, gradual) for testing',
          'Build Grafana dashboards showing predicted vs. actual and scaling events',
          'Benchmark predictive vs. reactive scaling on latency and cost',
          'Write the evaluation report and package the operator with Helm',
        ],
      },
    ],
    challenges: [
      {
        challenge: 'Forecasting models can predict poorly on unseen traffic patterns.',
        solution: 'Combine Prophet (handles seasonality well) with a fallback reactive scaler. Add a confidence band — only scale proactively when the forecast confidence is high, otherwise defer to reactive logic.',
      },
      {
        challenge: 'Running a local Kubernetes cluster with Prometheus is resource-heavy.',
        solution: 'Use kind (Kubernetes in Docker) which is lighter than minikube, and limit Prometheus retention to 2 hours for the prototype. Run the forecasting service outside the cluster to save resources.',
      },
      {
        challenge: 'Over-scaling wastes money; under-scaling causes latency.',
        solution: 'Implement a cost-vs-latency tradeoff parameter in the CRD, enforce a max-replica ceiling, and add a cooldown period after every scaling decision to prevent flapping.',
      },
    ],
    learningOutcomes: [
      'Building Kubernetes operators with Go and controller-runtime',
      'Time-series forecasting for infrastructure planning',
      'Metrics-driven systems design with Prometheus and Grafana',
      'Evaluating ML systems with realistic benchmark scenarios',
    ],
  },
  {
    id: 'phishing-detector',
    title: 'Phishing URL Detector Browser Extension',
    tagline: 'Real-time ML threat detection directly in the browser',
    description:
      'A browser extension that analyzes URLs and page content in real time using a lightweight ML model, warning users before they visit phishing sites. Includes a crowd-sourced feedback loop to improve detection over time.',
    domain: 'Cybersecurity',
    difficulty: 'Intermediate',
    matchScore: 92,
    estimatedWeeks: '6-8 weeks',
    tags: ['Browser Extension', 'ML', 'Security', 'Real-time'],
    icon: 'ShieldCheck',
    accent: 'from-amber-400 to-orange-500',
    architecture: {
      overview:
        'A Manifest V3 browser extension with a background service worker that extracts URL and DOM features, sends them to a lightweight classifier (scikit-learn model compiled to WASM or a remote API), and renders a warning interstitial for high-risk pages.',
      layers: [
        { name: 'Extension UI', responsibility: 'Popup with threat score, warning interstitial, and a feedback report form.' },
        { name: 'Background Service Worker', responsibility: 'Intercepts navigation, extracts URL/DOM features, and queries the classifier.' },
        { name: 'Feature Extraction', responsibility: 'Lexical URL features, host features, and DOM content features (forms, scripts, iframes).' },
        { name: 'Classifier & Feedback', responsibility: 'scikit-learn model served via a FastAPI endpoint with a feedback store for retraining.' },
      ],
    },
    features: [
      'Real-time URL analysis on every navigation with a threat score (0-100)',
      'Warning interstitial for high-risk pages with detailed reason breakdown',
      'Lexical, host, and content-based feature extraction (30+ features)',
      'Allowlist and blocklist management in the popup',
      'Crowd-sourced feedback — users can report false positives/negatives',
      'Detection history log with timestamps and threat scores',
      'Lightweight — under 50ms analysis per page on average',
    ],
    techStack: [
      { category: 'Extension', tools: ['TypeScript', 'Manifest V3', 'Chrome Extensions API'] },
      { category: 'ML', tools: ['Python', 'scikit-learn', 'XGBoost', 'joblib'] },
      { category: 'Backend', tools: ['FastAPI', 'SQLite', 'Docker'] },
      { category: 'Data', tools: ['PhishTank API', 'OpenPhish', 'pandas'] },
    ],
    roadmap: [
      {
        phase: 'Phase 1 — Extension & Feature Extraction',
        duration: 'Weeks 1-3',
        goal: 'Build the extension shell and feature pipeline.',
        tasks: [
          'Scaffold the Manifest V3 extension with popup and background worker',
          'Implement URL lexical feature extraction (length, entropy, TLD, subdomains)',
          'Add DOM content feature extraction (forms, scripts, iframes, login fields)',
          'Build the popup UI with a basic threat score display',
        ],
      },
      {
        phase: 'Phase 2 — Classifier & Warning Flow',
        duration: 'Weeks 4-6',
        goal: 'Train the model and wire up the warning interstitial.',
        tasks: [
          'Collect phishing URLs from PhishTank and benign URLs for training',
          'Train an XGBoost classifier and export with joblib',
          'Serve the model via FastAPI and connect the extension',
          'Build the warning interstitial with a detailed reason breakdown',
        ],
      },
      {
        phase: 'Phase 3 — Feedback & Polish',
        duration: 'Weeks 7-8',
        goal: 'Add the feedback loop and finalize.',
        tasks: [
          'Implement the feedback report form and store reports in SQLite',
          'Add allowlist/blocklist management and the detection history log',
          'Optimize feature extraction for sub-50ms latency',
          'Write the report and package the extension for the Chrome Web Store',
        ],
      },
    ],
    challenges: [
      {
        challenge: 'Phishing datasets are imbalanced — far more benign URLs than phishing.',
        solution: 'Use stratified sampling and class weights in XGBoost. Evaluate with precision-recall AUC rather than accuracy, since the cost of missing a phishing site is much higher than a false alarm.',
      },
      {
        challenge: 'Manifest V3 service workers are short-lived and can be terminated.',
        solution: 'Keep feature extraction fast (under 50ms), avoid long-running promises, and use chrome.alarms for periodic tasks. Cache the model locally to avoid re-fetching on every activation.',
      },
      {
        challenge: 'Attackers constantly evolve phishing techniques, making models stale.',
        solution: 'The feedback loop is key — collect user reports, retrain weekly on new data, and ship model updates via the extension update mechanism. Document the retraining pipeline in your report.',
      },
    ],
    learningOutcomes: [
      'Browser extension development with Manifest V3',
      'Feature engineering for security and threat detection',
      'ML model training, deployment, and the MLOps feedback loop',
      'Balancing security UX — warnings that inform without crying wolf',
    ],
  },
  {
    id: 'fitness-ar-coach',
    title: 'AR-Powered Fitness Form Coach',
    tagline: 'Real-time pose estimation for exercise form correction',
    description:
      'A mobile app that uses the phone camera to track exercise form in real time, comparing joint angles against correct posture and giving audio-visual feedback — like having a personal trainer that watches every rep.',
    domain: 'Mobile',
    difficulty: 'Intermediate',
    matchScore: 85,
    estimatedWeeks: '8-10 weeks',
    tags: ['Flutter', 'Pose Estimation', 'Real-time', 'Health'],
    icon: 'Smartphone',
    accent: 'from-rose-400 to-pink-500',
    architecture: {
      overview:
        'A Flutter app using Google ML Kit Pose Detection (on-device) to track body landmarks during exercises. A rules engine computes joint angles and compares them to per-exercise ideal ranges, delivering real-time audio cues and a post-session form report.',
      layers: [
        { name: 'App UI', responsibility: 'Flutter screens for exercise selection, live camera with pose overlay, and session reports.' },
        { name: 'Pose Detection', responsibility: 'Google ML Kit on-device pose estimation returning 33 body landmarks per frame.' },
        { name: 'Form Analysis Engine', responsibility: 'Computes joint angles, compares to ideal ranges, and classifies reps as good/bad.' },
        { name: 'Data & History', responsibility: 'Local SQLite store for session history and progressive tracking.' },
      ],
    },
    features: [
      'Real-time on-device pose detection with a live skeleton overlay',
      'Support for 10+ exercises (squat, push-up, lunge, plank, etc.)',
      'Joint-angle analysis with audio cues ("straighten your back")',
      'Rep counting with good/bad form classification per rep',
      'Post-session form report with problem areas highlighted',
      'Progress tracking across sessions with streaks and milestones',
      'Offline-first — all processing on-device, no server needed',
    ],
    techStack: [
      { category: 'App', tools: ['Flutter', 'Dart', 'camera plugin'] },
      { category: 'ML', tools: ['Google ML Kit Pose Detection', 'tflite'] },
      { category: 'State & Data', tools: ['Riverpod', 'SQLite (sqflite)', 'shared_preferences'] },
      { category: 'Visualization', tools: ['fl_chart', 'CustomPainter'] },
    ],
    roadmap: [
      {
        phase: 'Phase 1 — Camera & Pose Detection',
        duration: 'Weeks 1-3',
        goal: 'Get live pose detection rendering on screen.',
        tasks: [
          'Set up the Flutter project with camera and ML Kit pose detection',
          'Render the live camera feed with a skeleton overlay using CustomPainter',
          'Handle camera permissions and lifecycle on iOS and Android',
          'Build the exercise selection screen',
        ],
      },
      {
        phase: 'Phase 2 — Form Analysis & Rep Counting',
        duration: 'Weeks 4-7',
        goal: 'Analyze form and count reps with feedback.',
        tasks: [
          'Implement joint-angle calculation from pose landmarks',
          'Define ideal angle ranges for 10 exercises',
          'Build the rep counter with good/bad classification',
          'Add real-time audio cues using flutter_tts',
        ],
      },
      {
        phase: 'Phase 3 — Reports & Progress Tracking',
        duration: 'Weeks 8-10',
        goal: 'Add session reports and long-term progress.',
        tasks: [
          'Build the post-session form report with problem-area highlights',
          'Implement SQLite session history and progress charts',
          'Add streaks, milestones, and a daily goal tracker',
          'Polish the UI, test on real devices, and prepare the demo',
        ],
      },
    ],
    challenges: [
      {
        challenge: 'On-device pose detection can be jittery, causing unstable angle readings.',
        solution: 'Apply a smoothing filter (exponential moving average) on landmark coordinates before angle calculation, and require a movement to sustain for 3 frames before counting a rep.',
      },
      {
        challenge: 'Different camera angles produce different joint angles, breaking the rules engine.',
        solution: 'Guide the user to the correct camera position with an on-screen framing guide before starting, and calibrate the first rep as a baseline for that session.',
      },
      {
        challenge: 'Battery drain from continuous camera + ML processing.',
        solution: 'Run ML Kit at a reduced frame rate (15fps is sufficient for form analysis), dim the screen during sessions, and show a battery-usage note in the UI.',
      },
    ],
    learningOutcomes: [
      'Mobile app development with Flutter and Dart',
      'On-device ML integration with Google ML Kit',
      'Real-time geometric analysis from pose landmarks',
      'Offline-first app architecture and local persistence',
    ],
  },
  {
    id: 'ai-code-reviewer',
    title: 'AI Code Reviewer for Pull Requests',
    tagline: 'Automated PR analysis with security and quality insights',
    description:
      'A GitHub App that automatically reviews pull requests using static analysis and an LLM, posting inline comments on potential bugs, security issues, and style violations — with a summary review and a quality score on every PR.',
    domain: 'AI/ML',
    difficulty: 'Intermediate',
    matchScore: 90,
    estimatedWeeks: '7-9 weeks',
    tags: ['LLM', 'GitHub API', 'Static Analysis', 'DevTools'],
    icon: 'GitPullRequest',
    accent: 'from-cyan-400 to-emerald-400',
    architecture: {
      overview:
        'A Node.js GitHub App listens for pull request webhooks, fetches the diff, runs it through a static analysis layer (ESLint/Semgrep) and an LLM for semantic review, then posts inline comments and a summary review via the GitHub API.',
      layers: [
        { name: 'Webhook Handler', responsibility: 'Express server receiving GitHub webhooks and validating signatures.' },
        { name: 'Analysis Pipeline', responsibility: 'Runs Semgrep + ESLint for pattern-based checks, then LLM review for semantic issues.' },
        { name: 'LLM Review Layer', responsibility: 'Prompt-engineered LLM calls producing structured findings (file, line, severity, comment).' },
        { name: 'GitHub Integration', responsibility: 'Posts inline comments and a summary review with a quality score via the REST API.' },
      ],
    },
    features: [
      'Automatic review on every pull request with inline comments',
      'Static analysis with Semgrep (security) and ESLint (quality)',
      'LLM-powered semantic review for logic bugs and edge cases',
      'Summary review with a quality score (0-100) and category breakdown',
      'Configurable review strictness per repository',
      'Suppress comments with inline // mentor: ignore directives',
      'Dashboard showing review history and recurring issue patterns',
    ],
    techStack: [
      { category: 'Backend', tools: ['Node.js', 'TypeScript', 'Express', 'Octokit (GitHub API)'] },
      { category: 'Analysis', tools: ['Semgrep', 'ESLint', 'custom rules'] },
      { category: 'AI', tools: ['OpenAI API', 'structured output', 'prompt templates'] },
      { category: 'Infra', tools: ['Docker', 'GitHub Actions', 'Redis (queue)'] },
    ],
    roadmap: [
      {
        phase: 'Phase 1 — GitHub App & Webhook',
        duration: 'Weeks 1-3',
        goal: 'Receive webhooks and post a basic review.',
        tasks: [
          'Register a GitHub App and set up the Express webhook handler',
          'Validate webhook signatures and fetch PR diffs via Octokit',
          'Post a basic "review received" comment to confirm the flow',
          'Set up a test repository with sample PRs',
        ],
      },
      {
        phase: 'Phase 2 — Static Analysis + LLM Review',
        duration: 'Weeks 4-6',
        goal: 'Generate meaningful review comments.',
        tasks: [
          'Integrate Semgrep and ESLint for pattern-based findings',
          'Design LLM prompts for semantic review with structured output',
          'Merge static + LLM findings and deduplicate by file/line',
          'Post inline comments and a summary review with a quality score',
        ],
      },
      {
        phase: 'Phase 3 — Config & Dashboard',
        duration: 'Weeks 7-9',
        goal: 'Add configuration and a history dashboard.',
        tasks: [
          'Add per-repo config for strictness and ignore directives',
          'Build a simple dashboard showing review history and patterns',
          'Add a Redis queue to handle concurrent PR reviews',
          'Deploy with Docker and document the setup in the report',
        ],
      },
    ],
    challenges: [
      {
        challenge: 'LLM reviews can produce noisy or false-positive comments, annoying developers.',
        solution: 'Use structured output with a confidence field, only post comments above a confidence threshold, and respect // mentor: ignore directives. Start conservative — fewer high-quality comments beat many noisy ones.',
      },
      {
        challenge: 'Large PR diffs exceed LLM context windows.',
        solution: 'Chunk the diff by file, review each chunk separately, and skip generated/lock files. Summarize findings across chunks into the final review.',
      },
      {
        challenge: 'Concurrent PR webhooks can overwhelm a single Express server.',
        solution: 'Use a Redis-backed queue (BullMQ) to process reviews asynchronously, and respond to the webhook with 202 Accepted immediately while the review runs in the background.',
      },
    ],
    learningOutcomes: [
      'GitHub App development and webhook-driven architectures',
      'Integrating static analysis tools (Semgrep, ESLint) into a pipeline',
      'Structured LLM prompting with reliable output parsing',
      'Asynchronous job processing with queues',
    ],
  },
];

export function selectProjects(input: AssessmentInput): ProjectIdea[] {
  const scored = PROJECT_LIBRARY.map((p) => {
    let score = 0;
    if (input.interests.includes(p.domain)) score += 40;
    if (p.difficulty === input.skillLevel) score += 25;
    else if (
      (input.skillLevel === 'Intermediate' && p.difficulty === 'Beginner') ||
      (input.skillLevel === 'Advanced' && p.difficulty === 'Intermediate')
    )
      score += 12;
    const stackMatch = p.techStack.flatMap((t) => t.tools).filter((t) =>
      input.techStack.some((s) => t.toLowerCase().includes(s.toLowerCase()))
    ).length;
    score += Math.min(stackMatch * 8, 30);
    
    return { project: p, score };
  });
  scored.sort((a, b) => b.score - a.score);
  const top = scored.slice(0, 3).map((s) => ({
    ...s.project,
    matchScore: Math.min(99, 70 + s.score),
  }));
  return top;
}
