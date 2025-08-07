export interface Project {
    id: string;
    title: string;
    period: string;
    description: string[];
    technologies: string[];
    features: string[];
    imageUrl?: string;
    githubUrl?: string;
    liveUrl?: string;
  }
  
  export const projects: Project[] = [
    {
      id: "nexushub",
      title: "NexusHub",
      period: "Nov 2024 - May 2025",
      description: [
        "SaaS platform enabling YouTubers to collaborate with editors securely, without sharing credentials or handling uploads manually."
      ],
      technologies: [
        "Next.js",
        "Clerk (Auth)",
        "Mux (Video API)",
        "AWS (IAM, RDS, Lambda)",
        "TypeScript",
        "Tailwind CSS"
      ],
      features: [
        "Secure collaboration without credential sharing",
        "Automated video pipeline with Mux integration",
        "Role-based access control with AWS IAM",
        "Serverless backend architecture",
        "Real-time collaboration features"
      ],
      imageUrl: "/projects/nexushub.jpg", // Replace with actual path
      githubUrl: "https://github.com/yourusername/nexushub",
      liveUrl: "https://nexushub.example.com"
    },
    {
      id: "ml-tools",
      title: "ML Tools Suite",
      period: "May 2024 - Jun 2024",
      description: [
        "Collection of machine learning tools including sentiment analysis and health prediction applications."
      ],
      technologies: [
        "Python",
        "Flask",
        "React",
        "scikit-learn",
        "Transformers (RoBERTa)",
        "Pandas",
        "REST API"
      ],
      features: [
        "Sentiment analysis using RoBERTa model",
        "Diabetes prediction with Random Forest Classifier",
        "React frontend with interactive visualizations",
        "Flask API backend",
        "Kaggle dataset integration"
      ],
      imageUrl: "/projects/ml-tools.jpg", // Replace with actual path
      githubUrl: "https://github.com/yourusername/ml-tools",
      liveUrl: "https://ml-tools.example.com"
    }
  ];
  
  // Optional: Categorize projects by type or technology
  export const projectCategories = {
    webApps: [projects[0]], // NexusHub
    machineLearning: [projects[1]] // ML Tools
  };
  
  // Technology index for filtering
  export const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.technologies))
  ).sort();
  
  export default projects;