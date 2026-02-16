export const resumeData = {
  name: "Sean Chang",
  title: "Sr. Software Engineer",
  quote: "Stay Hungry, Stay Foolish.",
  
  experience: [
    {
      company: "tsmc",
      role: "Sr. Software Engineer",
      location: "Hsinchu, Taiwan",
      startDate: "2021",
      endDate: "Current",
      description: "Build Workflow Orchestration System for process control and data collection in semiconductor manufacturing.",
      technologies: ["Java", "Kotlin", "Go", "Spring Boot", "Kubernetes", "Workflow Orchestration"],
      achievements: [
        "Build Workflow Orchestration System for process control and data collection",
        "Design and maintain scalable systems for semiconductor manufacturing operations"
      ]
    },
    {
      company: "KKLab, KKBOX Group",
      role: "Sr. Data Scientist",
      location: "Taipei, Taiwan",
      startDate: "Feb. 2019",
      endDate: "2021",
      description: "Provide consulting services and build infrastructures for a Fintech startup (seed round). Build human labeling tools, adapt Aveva PRiSM for anomaly detection, lead NLP venture building projects, and maintain KKBOX opinion mining system (SAAS).",
      technologies: ["Python", "NLP", "Kubernetes", "React", "FastAPI", "GraphQL"],
      achievements: [
        "Build backtesting & financial analytic tools for Fintech startup",
        "Build TTS Recorder - human labeling tool for Text-to-speech training data",
        "Adapt Aveva PRiSM for tier 1 company anomaly detection on producing pipelines",
        "Lead venture building project related to NLP",
        "Win 1st place in IMBD 2020 (Intelligent Manufacturing and Big Data Analytics Contest)",
        "Maintain and develop KKBOX opinion mining system and sell it to other companies"
      ]
    },
    {
      company: "KKLab, KKBOX Group",
      role: "Data Scientist",
      location: "Taipei, Taiwan",
      startDate: "Sep. 2018",
      endDate: "Feb. 2019",
      description: "Build public opinion mining system using novel NLP models. Maintain app's event log specification and analyze user actions.",
      technologies: ["Python", "NLP", "spaCy", "TensorFlow"],
      achievements: [
        "Build public opinion mining system by novel NLP models",
        "Maintain app's event log specification and analyze user actions",
        "Win 3rd place in KKBOX inhouse hackathon with KKMeet app"
      ]
    }
  ],
  
  education: [
    {
      institution: "National Taiwan University",
      degree: "Master in Economics",
      location: "Taipei, Taiwan",
      year: "Aug. 2016 - Aug. 2018",
      thesis: "Lyrics- and Audio-based Hit Song Prediction"
    },
    {
      institution: "Fu Jen Catholic University",
      degree: "B.A. in Economics",
      location: "New Taipei City, Taiwan",
      year: "Sep. 2011 - Jul. 2015"
    }
  ],
  
  skills: {
    devops: ["AWS", "Docker", "Kubernetes", "GitLab CI", "GitHub Actions", "Ansible", "Argo Workflows", "Helm"],
    backend: ["Flask", "FastAPI", "Spring Boot", "Go-Gin", "Quarkus"],
    frontend: ["React", "Redux", "Next.js", "Vue (basic)", "React Native", "Flutter (basic)"],
    distributed: ["Spark SQL"],
    taskQueue: ["Celery"],
    programming: ["Python", "JavaScript", "TypeScript", "Go", "Java", "Kotlin", "Scala (basic)"],
    mlFrameworks: ["TensorFlow", "Keras", "Scikit-learn", "spaCy", "PyTorch (basic)"],
    visualization: ["Plotly", "Matplotlib", "Seaborn", "Altair", "D3.js", "Bokeh", "Streamlit"],
    mlops: ["MLflow", "Kubeflow"],
    statistics: ["Time Series Analysis", "Regression", "Elastic Net"],
    treeModels: ["XGBoost", "LightGBM"],
    nlp: ["Language Models", "NER", "Sentiment Analysis"]
  },
  
  projects: [
    {
      name: "Eyes",
      role: "Maintainer",
      location: "Taipei, Taiwan",
      period: "Aug. 2021 - Present",
      description: "Eyes is a public opinion mining system focusing on Taiwanese forums such as PTT, Dcard.",
      technologies: ["React", "GraphQL", "FastAPI", "Kubernetes", "Helm", "Argo Workflows", "Celery", "spaCy"],
      github: "https://github.com/r05323028/eyes"
    },
    {
      name: "KKMeet",
      role: "Frontend Engineer",
      location: "Taipei, Taiwan",
      period: "Dec. 2019",
      description: "KKMeet is a social network app based on music recommendation. Won 3rd place in KKBOX inhouse hackathon 2019.",
      technologies: ["React Native", "Flask", "User-User CF"]
    }
  ],
  
  honors: [
    {
      award: "1st Place",
      event: "Intelligent Manufacturing and Big Data Analytics Contest (IMBD)",
      location: "Taichung, Taiwan",
      year: "2020"
    },
    {
      award: "3rd Place",
      event: "KKBOX InHouse Hackathon",
      location: "Taipei, Taiwan",
      year: "2019"
    },
    {
      award: "Finalist",
      event: "SAS & E.SUN Bank Fintech Competition",
      location: "Taipei, Taiwan",
      year: "2017"
    }
  ],
  
  presentations: [
    {
      role: "Keynote Speaker",
      event: "TSMC IT Community Meetup",
      location: "Taipei, Taiwan",
      date: "Jul. 2025",
      topics: ["Introduced TSMC's workflow orchestration system", "Introduced how to do observability/maintenance on workflow orchestration system"]
    },
    {
      role: "Keynote Speaker",
      event: "Data Science Meetup Taiwan",
      location: "Taipei, Taiwan",
      date: "Jul. 2020",
      topics: ["Introduced KKLab", "NLP models & algorithms used in KKBOX Opinion Mining System", "KKBOX Opinion Mining System infrastructure"]
    }
  ],
  
  contact: {
    email: "r05323028@ntu.edu.tw",
    phone: "(+886) 980-648-096",
    location: "Taipei, Taiwan",
    linkedin: "https://linkedin.com/in/r05323028",
    github: "https://github.com/r05323028",
    website: "https://r05323028.github.io"
  }
};

export default resumeData;
