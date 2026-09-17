import React, { useEffect, useRef, useState } from 'react';
import {
  Menu,
  X,
  Code2,
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Facebook,
  Instagram,
  Download,
  Play,
  Pause,
  Briefcase,
  ExternalLink,
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [skillsTab, setSkillsTab] = useState('technical');
  const [backgroundTab, setBackgroundTab] = useState('education');
  const [toolsTab, setToolsTab] = useState('All');
  const [activeCategory, setActiveCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const formRef = useRef(null);
  const audioRef = useRef(null);

  const name = 'Ewan Dirubut';

  /*
   * MAIN INTRODUCTION
   * Written from the CV: current ERP role, full-stack background,
   * database design, backend automation, and ongoing HND.
   */
  const introduction =
    'Associate Software Engineer focused on ERP development, backend systems, database design, and business process automation. I enjoy turning complex business requirements into clean, practical software solutions.';

  const shortIntroduction =
    'Associate Software Engineer focused on ERP development, full-stack engineering, database design, reporting, and business process automation.';

  const roles = [
    'Associate Software Engineer',
    'ERP Developer',
    'Full-Stack Developer',
    'Business Automation Developer',
  ];

  const useTypedText = (words, speed = 90, pause = 1400) => {
    const [wordIndex, setWordIndex] = useState(0);
    const [characterIndex, setCharacterIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
      const currentWord = words[wordIndex];

      if (!isDeleting && characterIndex === currentWord.length) {
        const timeout = setTimeout(() => setIsDeleting(true), pause);
        return () => clearTimeout(timeout);
      }

      if (isDeleting && characterIndex === 0) {
        setIsDeleting(false);
        setWordIndex((previous) => (previous + 1) % words.length);
        return;
      }

      const timeout = setTimeout(
        () => {
          setCharacterIndex((previous) =>
            isDeleting ? previous - 1 : previous + 1
          );
        },
        isDeleting ? speed / 2 : speed
      );

      return () => clearTimeout(timeout);
    }, [wordIndex, characterIndex, isDeleting, words, speed, pause]);

    return words[wordIndex].substring(0, characterIndex);
  };

  const typedText = useTypedText(roles);

  const technicalSkills = [
    { name: 'ERP Development', level: 90 },
    { name: 'Database Design', level: 90 },
    { name: 'SQL / PostgreSQL / MariaDB', level: 88 },
    { name: 'Backend Development', level: 85 },
    { name: 'Business Process Automation', level: 88 },
    { name: 'JasperReports', level: 82 },
    { name: 'Full-Stack Development', level: 82 },
    { name: 'Git / GitHub', level: 85 },
  ];

  const softSkills = [
    { name: 'Problem Solving', level: 95 },
    { name: 'Business Logic Analysis', level: 92 },
    { name: 'Communication', level: 90 },
    { name: 'Team Collaboration', level: 88 },
    { name: 'Time Management', level: 85 },
    { name: 'Client Collaboration', level: 88 },
  ];

  const educationData = [
    {
      period: 'Nov 2024 - Present',
      title: 'Higher National Diploma in Software Engineering',
      institution: 'National Institute of Business Management (NIBM)',
      description:
        'Focused on software development, programming, database management, and practical software engineering techniques.',
    },
    {
      period: '2024',
      title: 'Career Essentials in Generative AI',
      institution: 'Microsoft & LinkedIn',
      description:
        'Covered computer ethics, artificial intelligence, generative AI, and AI productivity concepts.',
    },
    {
      period: '2024',
      title: 'Introduction to Artificial Intelligence',
      institution: 'LinkedIn Learning',
      description:
        'Covered artificial intelligence for business and foundational AI concepts.',
    },
    {
      period: 'Nov 2023 - Nov 2024',
      title: 'Diploma in Software Engineering',
      institution: 'National Institute of Business Management (NIBM)',
      description:
        'Built hands-on experience with software engineering techniques, programming, databases, and development tools.',
    },
    {
      period: '2022',
      title: 'IELTS',
      institution: 'Headway School of Language',
      description: 'Completed IELTS-focused English language studies.',
    },
    {
      period: '2021',
      title: 'Advanced Level - Science Stream',
      institution: 'KM/Wesley High School',
      description: 'Completed GCE Advanced Level studies in the Science stream.',
    },
  ];

  const experienceData = [
    {
      period: 'Jan 2026 - Mar 2026',
      title: 'Associate Software Engineer - ERP Development',
      institution: 'Ebizclouds | Colombo, Sri Lanka',
      description:
        'Design and manage relational databases using PostgreSQL and MariaDB, create tables and integrate JasperReports, and implement business process automation to improve operational workflows.',
    },
    {
      period: '2020 - Present',
      title: 'Freelancer',
      institution: 'Self-employed',
      description:
        'Designed and deployed websites for small businesses, worked closely with clients to meet requirements and deadlines, built responsive web solutions using HTML, CSS, JavaScript, and MongoDB, and produced digital assets including logos and marketing videos.',
    },
  ];

  const projects = [
    {
      title: 'Spendz - Expense Tracking Application',
      category: 'Mobile App',
      description:
        'A modern expense tracking mobile application for splitting bills among friends and groups. Includes group creation, shared expense tracking, automatic balance calculation, authentication, and real-time synchronization.',
      technologies: ['SwiftUI', 'Firebase', 'Firestore', 'MVVM'],
      image: 'https://i.postimg.cc/t4f6xCvc/spendz.webp',
      github: 'https://github.com/ewandirubut',
    },
    {
      title: 'Tuition Management Android App',
      category: 'Mobile App',
      description:
        'An education management application for tuition centers covering students, teachers, attendance, and assignments. Includes role-based access for Admin, Teacher, and Student users.',
      technologies: [
        'Kotlin',
        'Android Studio',
        'Firebase',
        'Firestore',
        'QR Scanning',
      ],
      image: 'https://i.postimg.cc/Kjwb5wX3/Screenshot-2025-10-27-at-14-01-29.png',
      github: 'https://github.com/ewan1027/MAD.git',
    },
    {
      title: 'Urban Food E-Commerce Platform',
      category: 'Web App',
      description:
        'A full-stack healthy food marketplace connecting customers with food products, including inventory and order management.',
      technologies: ['PHP', 'HTML', 'CSS', 'MongoDB', 'SQL'],
      image: 'https://i.postimg.cc/SKTtwbGz/Urban-Food.png',
      github: 'https://github.com/ewan1027/Urban-Food-.git',
    },
    {
      title: 'Modern Room Clothing Website',
      category: 'Web App',
      description:
        'A responsive fashion e-commerce website with a product catalogue, cart functionality, and secure login experience.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      image: 'https://i.postimg.cc/s2DN6g5r/Modern-Room.png',
      github: 'https://github.com/ewan1027/Modern-Room-Clothing-Website',
    },
    {
      title: 'Autonomous Luggage Transporter Robot',
      category: 'IoT Project',
      description:
        'An intelligent luggage-handling robot designed for airport environments using line following, obstacle detection, RFID-based gate selection, and secure luggage handling.',
      technologies: [
        'Arduino Mega',
        'IR Sensors',
        'Ultrasonic Sensors',
        'RFID',
        'Bluetooth',
        'Servo Motors',
      ],
      image: 'https://i.postimg.cc/QN50qTv7/Robot.jpg',
      github: 'https://github.com/ewan1027',
    },
    {
      title: 'Smart Parcel Box',
      category: 'IoT Project',
      description:
        'A smart package drop-off and retrieval system designed to improve parcel security through sensors, Firebase, and servo motor control.',
      technologies: ['ESP8266', 'Firebase', 'Sensors', 'Servo Motor'],
      image: 'https://i.postimg.cc/nLgG4FkT/IOT.jpg',
      github: 'https://github.com/ewan1027',
    },
  ];

  const tools = {
    Databases: [
      {
        name: 'PostgreSQL',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      },
      {
        name: 'MariaDB',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg',
      },
      {
        name: 'MySQL',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      },
      {
        name: 'MongoDB',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      },
      {
        name: 'SQL',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      },
    ],
    Frameworks: [
      {
        name: 'React',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      },
      {
        name: 'Node.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      },
      {
        name: 'Auvit Framework',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      },
      {
        name: 'JasperReports',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      },
    ],
    Languages: [
      {
        name: 'HTML',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      },
      {
        name: 'CSS',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      },
      {
        name: 'JavaScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      },
      {
        name: 'PHP',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
      },
      {
        name: 'C#',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
      },
      {
        name: 'Python',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      },
    ],
    Tools: [
      {
        name: 'Git',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      },
      {
        name: 'GitHub',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      },
      {
        name: 'VS Code',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
      },
      {
        name: 'Android Studio',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg',
      },
      {
        name: 'Firebase',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
      },
      {
        name: 'Figma',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
      },
      {
        name: 'Photoshop',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg',
      },
      {
        name: 'Canva',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg',
      },
    ],
  };

  const socialLinks = {
    github: 'https://github.com/ewan1027',
    linkedin: 'https://www.linkedin.com/in/ewandirubut',
    facebook: 'https://web.facebook.com/ewan.dirubut',
    instagram: 'https://www.instagram.com/btwewan/',
  };

  const contactInfo = {
    email: 'ewan6852@gmail.com',
    phone: '+94 773681923',
    location: 'Colombo, Sri Lanka',
    website: 'https://ewandirubut.site/',
  };

  const cvUrl =
    'https://drive.google.com/file/d/1P06yRlajiRuLEGcUUK2Mn-GHNX7ugcxq/view?usp=drive_link';

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const visibleProjects = filteredProjects.slice(
    0,
    showAll ? filteredProjects.length : 6
  );

  const displayedTools =
    toolsTab === 'All'
      ? Object.entries(tools).flatMap(([category, items]) =>
          items.map((item) => ({ ...item, category }))
        )
      : (tools[toolsTab] || []).map((item) => ({
          ...item,
          category: toolsTab,
        }));

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    setIsMenuOpen(false);
  };

  const toggleMusic = () => setIsPlaying((previous) => !previous);

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'tools', 'contact'];
      const position = window.scrollY + 140;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;

        if (
          position >= element.offsetTop &&
          position < element.offsetTop + element.offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sendEmail = async (event) => {
    event.preventDefault();

    if (!formRef.current) return;

    setIsSending(true);

    try {
      await emailjs.sendForm(
        'service_m5imylg',
        'template_5d9k5ia',
        formRef.current,
        '_DYTUDB_14phqE19z'
      );

      toast.success('Message sent successfully!');
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-black via-zinc-950 to-black text-white">
      <audio ref={audioRef} src="/background-music.mp3" loop />

      {/* MUSIC CONTROL */}
      <button
        type="button"
        onClick={toggleMusic}
        className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-red-600/70 text-white shadow-lg backdrop-blur-md transition hover:scale-110 hover:bg-red-600"
        aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
      >
        {isPlaying ? <Pause size={19} /> : <Play size={19} />}
      </button>

      {/* NAVBAR */}
      <nav className="fixed top-0 z-40 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => scrollToSection('home')}
            className="text-xl font-extrabold tracking-tight text-transparent bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text"
          >
            {name}
          </button>

          <div className="hidden items-center gap-8 md:flex">
            {['home', 'about', 'projects', 'tools', 'contact'].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => scrollToSection(item)}
                className={`capitalize transition ${
                  activeSection === item
                    ? 'border-b-2 border-red-500 pb-1 text-red-500'
                    : 'text-white/70 hover:text-red-400'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="text-white md:hidden"
            onClick={() => setIsMenuOpen((previous) => !previous)}
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="border-t border-white/10 bg-black/90 px-4 py-3 md:hidden">
            {['home', 'about', 'projects', 'tools', 'contact'].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => scrollToSection(item)}
                className="block w-full rounded-lg px-3 py-3 text-left capitalize text-white/80 hover:bg-white/5 hover:text-red-400"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="flex min-h-screen items-center px-5 pb-16 pt-28 sm:px-8"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
              Associate Software Engineer
            </p>

            <h1 className="text-5xl font-black leading-tight sm:text-6xl">
              Hi, I&apos;m{' '}
              <span className="text-transparent bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text">
                Ewan
              </span>
            </h1>

            <div className="mt-5 min-h-[42px] text-2xl font-semibold text-gray-300 sm:text-3xl">
              I&apos;m an{' '}
              <span className="text-red-500">{typedText}</span>
              <span className="animate-pulse text-red-500">|</span>
            </div>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
              {introduction}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => scrollToSection('projects')}
                className="rounded-full bg-gradient-to-r from-red-600 to-pink-700 px-7 py-3.5 font-semibold shadow-lg shadow-red-900/20 transition hover:-translate-y-1 hover:from-red-500 hover:to-pink-600"
              >
                View My Work
              </button>

              <a
                href={cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 font-semibold text-white transition hover:border-red-500/50 hover:bg-red-500/10"
              >
                <Download size={18} />
                View CV
              </a>
            </div>

            <div className="mt-8 flex items-center gap-5">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-white/55 transition hover:text-red-500"
              >
                <Github size={24} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white/55 transition hover:text-red-500"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={contactInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/50 transition hover:text-red-400"
              >
                ewandirubut.site
              </a>
            </div>
          </div>

          <div className="order-1 flex justify-center md:order-2">
            <div className="relative">
              <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-red-600/30 to-pink-700/20 blur-2xl" />
              <div className="relative h-72 w-72 rotate-3 rounded-[2rem] bg-gradient-to-br from-red-600 to-pink-700 p-1 shadow-2xl shadow-red-900/30 transition hover:rotate-0 sm:h-96 sm:w-96">
                <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-[1.8rem] bg-zinc-900">
                  <img
                    src="/image.jpeg"
                    alt="Ewan Dirubut"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-20 px-4 py-24 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Profile"
            title="About Me"
            description={shortIntroduction}
          />

          <div className="grid gap-7 lg:grid-cols-3">
            <GlassCard>
              <div className="mb-6 flex items-center gap-3">
                <Briefcase className="text-red-500" size={25} />
                <h3 className="text-2xl font-bold">Professional Profile</h3>
              </div>

              <p className="leading-8 text-white/65">{introduction}</p>

              <div className="mt-7 space-y-3">
                <InfoRow label="Current Role" value="Associate Software Engineer" />
                <InfoRow label="Specialization" value="ERP Development" />
                <InfoRow label="Location" value="Colombo, Sri Lanka" />
              </div>
            </GlassCard>

            <GlassCard>
              <div className="mb-6 flex items-center gap-3">
                <Code2 className="text-red-500" size={25} />
                <h3 className="text-2xl font-bold">Skills</h3>
              </div>

              <div className="mb-7 flex rounded-xl bg-white/5 p-1">
                {[
                  ['technical', 'Technical'],
                  ['soft', 'Soft Skills'],
                ].map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setSkillsTab(value)}
                    className={`flex-1 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                      skillsTab === value
                        ? 'bg-gradient-to-r from-red-600 to-pink-700 text-white'
                        : 'text-white/55 hover:text-white'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              <div className="space-y-5">
                {(skillsTab === 'technical' ? technicalSkills : softSkills).map(
                  (skill) => (
                    <div key={skill.name}>
                      <div className="mb-2 flex justify-between text-sm">
                        <span className="text-white/75">{skill.name}</span>
                        <span className="text-red-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-red-600 to-pink-600"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  )
                )}
              </div>
            </GlassCard>

            <GlassCard>
              <div className="mb-6 flex items-center gap-3">
                <GraduationCap className="text-red-500" size={25} />
                <h3 className="text-2xl font-bold">Background</h3>
              </div>

              <div className="mb-7 flex rounded-xl bg-white/5 p-1">
                <button
                  type="button"
                  onClick={() => setBackgroundTab('education')}
                  className={`flex-1 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                    backgroundTab === 'education'
                      ? 'bg-gradient-to-r from-red-600 to-pink-700 text-white'
                      : 'text-white/55 hover:text-white'
                  }`}
                >
                  Education
                </button>
                <button
                  type="button"
                  onClick={() => setBackgroundTab('experience')}
                  className={`flex-1 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                    backgroundTab === 'experience'
                      ? 'bg-gradient-to-r from-red-600 to-pink-700 text-white'
                      : 'text-white/55 hover:text-white'
                  }`}
                >
                  Experience
                </button>
              </div>

              <div className="max-h-[520px] space-y-7 overflow-y-auto pr-2">
                {(backgroundTab === 'education'
                  ? educationData
                  : experienceData
                ).map((item) => (
                  <TimelineItem key={`${item.period}-${item.title}`} {...item} />
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="scroll-mt-20 px-4 py-24 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Selected Work"
            title="Featured Projects"
            description="A selection of software, mobile, web, and IoT projects demonstrating practical engineering skills."
          />

          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {['All', 'Web App', 'Mobile App', 'IoT Project'].map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setActiveCategory(category);
                  setShowAll(false);
                }}
                className={`rounded-full border px-5 py-2.5 text-sm font-medium transition ${
                  activeCategory === category
                    ? 'border-red-500 bg-gradient-to-r from-red-600 to-pink-700 text-white'
                    : 'border-white/10 bg-white/5 text-white/60 hover:border-red-500/40 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {visibleProjects.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-red-500/40"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-xs text-red-300 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="mt-3 leading-7 text-white/60">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-xs text-red-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-red-400 transition hover:text-red-300"
                    >
                      <Github size={17} />
                      View on GitHub
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>

          {filteredProjects.length > 6 && (
            <div className="mt-12 text-center">
              <button
                type="button"
                onClick={() => setShowAll((previous) => !previous)}
                className="rounded-full bg-gradient-to-r from-red-600 to-pink-700 px-7 py-3 font-semibold transition hover:-translate-y-1"
              >
                {showAll ? 'Show Less' : 'View More'}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* TOOLS */}
      <section id="tools" className="scroll-mt-20 px-4 py-24 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Technical Stack"
            title="Tools & Technologies"
            description="Technologies and tools used across ERP, full-stack, database, mobile, IoT, and design projects."
          />

          <div className="mb-12 flex justify-center">
            <div className="flex flex-wrap justify-center gap-1 rounded-2xl border border-white/10 bg-white/5 p-2">
              {['All', 'Databases', 'Frameworks', 'Languages', 'Tools'].map(
                (category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setToolsTab(category)}
                    className={`rounded-xl px-5 py-2.5 text-sm font-medium transition ${
                      toolsTab === category
                        ? 'bg-gradient-to-r from-red-600 to-pink-700 text-white shadow-lg'
                        : 'text-white/55 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {category}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {displayedTools.map((tool, index) => (
              <div
                key={`${tool.category}-${tool.name}-${index}`}
                className="group flex min-h-36 flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035] p-5 text-center transition duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:bg-red-500/[0.04]"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 p-3 transition group-hover:bg-red-500/10">
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className="h-10 w-10 object-contain"
                  />
                </div>
                <h3 className="text-sm font-semibold text-white/80 transition group-hover:text-red-400">
                  {tool.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-20 px-4 py-24 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Contact"
            title="Let's Connect"
            description="Have a project, opportunity, or technical problem worth solving? Get in touch."
          />

          <div className="grid gap-7 md:grid-cols-2">
            <GlassCard className="flex flex-col">
              <h3 className="text-2xl font-bold">Get in Touch</h3>
              <p className="mt-3 leading-7 text-white/60">
                I am open to software engineering opportunities, freelance
                projects, and collaborations.
              </p>

              <div className="mt-8 space-y-6">
                <ContactItem
                  icon={<Mail size={21} />}
                  label="Email"
                  value={contactInfo.email}
                  href={`mailto:${contactInfo.email}`}
                />
                <ContactItem
                  icon={<Phone size={21} />}
                  label="Phone"
                  value={contactInfo.phone}
                  href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                />
                <ContactItem
                  icon={<MapPin size={21} />}
                  label="Location"
                  value={contactInfo.location}
                />
              </div>

              <div className="mt-auto flex gap-5 pt-10">
                <SocialIcon href={socialLinks.github} label="GitHub">
                  <Github size={22} />
                </SocialIcon>
                <SocialIcon href={socialLinks.linkedin} label="LinkedIn">
                  <Linkedin size={22} />
                </SocialIcon>
                <SocialIcon href={socialLinks.facebook} label="Facebook">
                  <Facebook size={22} />
                </SocialIcon>
                <SocialIcon href={socialLinks.instagram} label="Instagram">
                  <Instagram size={22} />
                </SocialIcon>
              </div>
            </GlassCard>

            <GlassCard>
              <h3 className="text-2xl font-bold">Send a Message</h3>

              <form ref={formRef} onSubmit={sendEmail} className="mt-7 space-y-5">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-black/30 p-4 text-white outline-none placeholder:text-white/30 focus:border-red-500/60 focus:ring-2 focus:ring-red-500/20"
                />

                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                  className="w-full rounded-xl border border-white/10 bg-black/30 p-4 text-white outline-none placeholder:text-white/30 focus:border-red-500/60 focus:ring-2 focus:ring-red-500/20"
                />

                <textarea
                  name="message"
                  rows="6"
                  placeholder="Your Message"
                  required
                  className="w-full resize-none rounded-xl border border-white/10 bg-black/30 p-4 text-white outline-none placeholder:text-white/30 focus:border-red-500/60 focus:ring-2 focus:ring-red-500/20"
                />

                <button
                  type="submit"
                  disabled={isSending}
                  className="rounded-full bg-gradient-to-r from-red-600 to-pink-700 px-8 py-3.5 font-semibold transition hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSending ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </GlassCard>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-4 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} {name}. Built with React.
          </p>
          <a
            href={contactInfo.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-red-400 hover:text-red-300"
          >
            ewandirubut.site
          </a>
        </div>
      </footer>
    </div>
  );
};

const SectionHeading = ({ eyebrow, title, description }) => (
  <div className="mx-auto mb-14 max-w-3xl text-center">
    <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-red-500">
      {eyebrow}
    </p>
    <h2 className="text-4xl font-black text-transparent bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text sm:text-5xl">
      {title}
    </h2>
    <p className="mt-5 leading-7 text-white/55">{description}</p>
  </div>
);

const GlassCard = ({ children, className = '' }) => (
  <div
    className={`rounded-2xl border border-white/10 bg-white/[0.035] p-7 shadow-xl shadow-black/10 backdrop-blur-md transition hover:border-red-500/25 ${className}`}
  >
    {children}
  </div>
);

const InfoRow = ({ label, value }) => (
  <div className="border-b border-white/5 pb-3">
    <p className="text-xs uppercase tracking-wider text-white/35">{label}</p>
    <p className="mt-1 text-sm font-medium text-white/75">{value}</p>
  </div>
);

const TimelineItem = ({ period, title, institution, description }) => (
  <div className="relative border-l-2 border-red-500/25 pl-5">
    <div className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-red-500 shadow-lg shadow-red-500/30" />
    <p className="text-xs font-bold uppercase tracking-wider text-red-400">
      {period}
    </p>
    <h4 className="mt-2 font-bold text-white">{title}</h4>
    <p className="mt-1 text-sm font-medium text-white/55">{institution}</p>
    <p className="mt-2 text-sm leading-6 text-white/45">{description}</p>
  </div>
);

const ContactItem = ({ icon, label, value, href }) => {
  const content = (
    <>
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-500">
        {icon}
      </div>
      <div>
        <p className="text-xs uppercase tracking-wider text-white/35">{label}</p>
        <p className="mt-1 text-sm font-medium text-white/70">{value}</p>
      </div>
    </>
  );

  return href ? (
    <a
      href={href}
      className="flex items-center gap-4 transition hover:text-red-400"
    >
      {content}
    </a>
  ) : (
    <div className="flex items-center gap-4">{content}</div>
  );
};

const SocialIcon = ({ href, label, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-white/45 transition hover:-translate-y-1 hover:text-red-500"
  >
    {children}
  </a>
);

export default Portfolio;
