/* EDIT YOUR PORTFOLIO HERE.
 * Save this file, then refresh index.html. No installation or build is needed.
 * Add a research/project entry by copying an object within the matching array.
 * Optional images and links can stay empty. See START-HERE.html for examples.
 * Use plain text in descriptions (HTML is escaped). Put commas between entries.
 */
window.PORTFOLIO = {
  profile: {
    name: "Kabir Muzumdar",
    initials: "KM",
    // Example: "assets/img/profile/kabir.jpg". Leave blank to show initials.
    photo: "assets/img/profile/kabir-headshot.jpg",
    photoAlt: "Kabir Muzumdar",
    headline: "Exploring computational mechanics, deployable structures, and fluid-structure interactions at The University of Texas at Austin.",
    roles: ["Civil Engineering Student", "Researcher", "Computational Mechanics Enthusiast"],
    email: "kabmuzum@utexas.edu",
    phone: "+1 832-541-4472",
    location: "Houston, TX",
    linkedin: "https://www.linkedin.com/in/kabir-muzumdar",
    github: "https://github.com/k1llersw0rd",
    website: "https://kabirmuzumdar.com/",
    cv: "assets/resume/Kabir_Muzumdar_CV.pdf"
  },
  about: {
    paragraphs: [
      "I'm an Engineering undergraduate at The University of Texas at Austin, pursuing a certificate in Computational Engineering & Science. My interests span computational mechanics, structural dynamics, fluid-structure interactions, mechanical metamaterials, and engineering simulation.",
      "My research connects parametric modeling and simulation with deployable structures, origami-inspired materials, and hydrodynamics. I work on Origami Engineering, NASA Ames ISAM research, and an ARL:UT-supported computational hydrodynamics collaboration."
    ],
  },
  research: [
    {
      id: "miura-origami-research",
      title: "Origami-Inspired Metasurface Research",
      subtitle: "Optimization of Damping Performance for an Origami-Inspired Metasurface",
      organization: "The University of Texas at Austin",
      role: "Undergraduate Research Assistant",
      mentor: "Othman Oudghiri-Idrissi",
      dates: "January 2025 – Present",
      location: "Austin, TX",
      summary: "Parametric and finite-element modeling of deployable structures, with a focus on structural dynamics, wave propagation, and aerospace structural mechanics.",
      highlights: [
        "Designed compliant hinge systems and viscoelastic damping concepts to improve deployability, vibration performance, and structural efficiency.",
        "Coauthored a May 2025 fellowship poster on dynamic analysis of 3D-extruded Miura-ori solar arrays, emphasizing flexural vibration modes, with Othman Oudghiri-Idrissi."
      ],
      tags: ["Miura-ori", "Finite Element Modeling", "Structural Dynamics", "Damping"],
      images: [],
      links: []
    },
    {
      id: "nasa-ames-isam",
      title: "NASA Ames ISAM Research",
      subtitle: "Dynamically Stable Large Space Structures via Architected Metamaterials",
      organization: "UT Austin · NASA Ames Research Center · University of Michigan",
      role: "Undergraduate Research Assistant",
      mentor: "Othman Oudghiri-Idrissi",
      dates: "March 2026 – Present",
      location: "Austin, TX",
      summary: "Deployable voxel architectures for a NASA Ames-led In-space Assembly & Manufacturing (ISAM) collaboration.",
      highlights: [
        "Designed deployable voxel architectures for modular space structures.",
        "Developed bidirectional hinge and interlocking mechanisms to improve structural retention and enable robotic assembly for NASA's Starshade proposal."
      ],
      tags: ["ISAM", "Deployable Structures", "Architected Metamaterials", "Mechanical Design"],
      // Add as many images as you like; no empty image box appears when this is [].
      // { src: "assets/img/research/isam.jpg", alt: "Describe the image", caption: "Optional caption", fit: "contain" }
      images: [],
      // Optional links: { label: "Poster (PDF)", url: "assets/documents/poster.pdf" }
      links: []
    },
    {
      id: "arl-ut-hydrodynamics",
      title: "Thruster Propeller Design & Computational Hydrodynamics Research",
      subtitle: "Creating Connections for National Security Research",
      organization: "UT Austin · Applied Research Laboratories (ARL:UT)",
      role: "Undergraduate Research Assistant",
      mentor: "Spyridon Kinnas",
      dates: "August 2026 – Present",
      location: "Austin, TX",
      summary: "Design of a high-efficiency thruster and analysis through advanced computing methods.",
      highlights: [
        "Supported by National Security Research SEED funding from ARL:UT and the UT Austin Office of the Vice President for Research."
      ],
      tags: ["Computational Hydrodynamics", "Thruster Design", "National Security Research"],
      images: [],
      links: []
    }
  ],
  projects: [
    {
      id: "miura-metasurface",
      title: "Parametric Shell-based Origami (Miura) Metasurface",
      summary: "A parametric Miura-ori metasurface model with tunable geometry and material definitions.",
      highlights: ["Performed eigenfrequency analysis with a focus on geometric tunability and deployable design."],
      tags: ["COMSOL Multiphysics", "MATLAB", "Eigenfrequency Analysis"],
      images: [
        { src: "assets/img/projects/miura-fold-angles.png", alt: "Four Miura-ori unit cells shown at fold angles of 10, 45, 60, and 90 degrees", caption: "Unit-cell geometry across the fold-angle range (\u03c6 = 10\u201390\u00b0) used in the tunability study." }
      ],
      links: []
    },
    {
      id: "drone-damage-evaluation",
      title: "Drone-based Evaluation of Damage on Structures & Roadways",
      summary: "Dataset preparation and evaluation for a collaborative roadway-inspection project using drone imagery.",
      highlights: [
        "Evaluated crack classes, annotation quality, and drone-perspective variation in roadway-image datasets.",
        "Recommended image balance, hard-negative selection, dataset splits, and augmentation to reduce false detections."
      ],
      tags: ["Roboflow", "YOLO", "Object Detection", "Dataset Engineering"],
      images: [
        { src: "assets/img/projects/drone-research-screenshot.png", alt: "Drone imagery used for evaluating damage on structures and roadways", caption: "Example images from the drone-based evaluation project." }
      ],
      links: []
    },
    {
      id: "floquet-bloch-wave-analysis",
      title: "Floquet-Bloch Wave Analysis of a Miura-ori Metasurface",
      summary: "Computational analysis of a Miura-ori metasurface using Floquet-Bloch theory to study wave propagation and bandgap behavior.",
      highlights: [
        "Performed eigenfrequency analysis and band structure calculations to identify bandgaps and wave propagation characteristics.",
        "Explored the effects of geometric parameters on bandgap formation and wave localization in the metasurface for computationally efficient analysis of deployable structures."
      ],
      tags: ["COMSOL Multiphysics", "Floquet-Bloch Theory", "Eigenfrequency Analysis", "Wave Propagation"],
      images: [],
      links: []
    }
  ],
  skills: [
    { title: "Simulation & Engineering Design", items: ["COMSOL Multiphysics", "SOLIDWORKS", "AutoCAD", "Fusion", "Revit", "Rhino"] },
    { title: "Programming & Tools", items: ["MATLAB", "Python", "Java", "Git", "GitHub", "LaTeX"] },
    { title: "Technical Methods", items: ["Finite Element Analysis (FEA)", "Computational Mechanics", "Structural Analysis", "Computational Fluid Dynamics (CFD)", "CAD & Parametric Modeling", "Mechanical Design and Fabrication", "Laser Vibrometry"] }
  ],
  education: [
    {
      school: "The University of Texas at Austin",
      degree: "Bachelor of Science, Civil Engineering",
      certificate: "Computational Engineering & Science (CSE)",
      dates: "August 2024 – May 2028",
      coursework: ["Mechanics of Solids", "Structural Analysis", "Ocean Engineering"],
      honors: ["Cockrell Distinguished Alumni Scholarship", "Distinguished Alumni Undergraduate Research Fellowship", "Halff Associates, Inc. Endowed Scholarship", "Linford Family Endowed Scholarship"]
    }
  ]
};
