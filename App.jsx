import React, { useState, useEffect } from 'react';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);
  const [animateSkills, setAnimateSkills] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      // Update active section
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      // Show/hide back to top button
      setIsVisible(window.scrollY > 300);

      // Animate skills
      const skillsSection = document.getElementById('skills');
      if (skillsSection) {
        const sectionTop = skillsSection.offsetTop;
        const windowHeight = window.innerHeight;
        
        if (window.scrollY > sectionTop - windowHeight + 200) {
          setAnimateSkills(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const experiences = [
    {
      position: "Frontend Developer",
      company: "Dee Designers",
      period: "2025 - Present",
      description: "Lead a team of developers to build responsive web applications using HTML, CSS, JavaScript. Improved performance by 40% through code optimization."
    },
    {
      position: "Website Developer",
      company: "Digital Solutions",
      period: "2021 - 2022",
      description: "Developed Website applications with HTML, CSS, and JavaScript. Implemented RESTful APIs and integrated third-party services."
    },
    {
      position: "Wordpress Developer",
      company: "StartUp Ventures",
      period: "2022 - 2023",
      description: "Built responsive websites using Elementor, WPBakery Page Builder. Collaborated with designers to implement UI/UX improvements."
    }
  ];

  const technicalSkills = [
    { name: "HTML/CSS", percentage: 95 },
    { name: "JavaScript", percentage: 90 },
    { name: "Git & Github", percentage: 85 },
    { name: "Node.js", percentage: 50 }
  ];

  const professionalSkills = [
    { name: "Communication", percentage: 90 },
    { name: "Teamwork", percentage: 85 },
    { name: "Problem Solving", percentage: 95 },
    { name: "Creativity", percentage: 75 }
  ];

  const technologies = [
    { name: "HTML5", icon: "fab fa-html5", color: "text-orange-500" },
    { name: "CSS3", icon: "fab fa-css3-alt", color: "text-blue-500" },
    { name: "JavaScript", icon: "fab fa-js", color: "text-yellow-400" },
    { name: "React", icon: "fab fa-react", color: "text-blue-400" },
    { name: "Node.js", icon: "fab fa-node-js", color: "text-green-500" },
    { name: "Git", icon: "fab fa-git-alt", color: "text-orange-600" },
    { name: "GitHub", icon: "fab fa-github", color: "text-gray-300" },
    { name: "VS Code", icon: "fas fa-terminal", color: "text-gray-300" }
  ];

  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform built with React, Node.js, and MongoDB.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3",
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Task Management App",
      description: "A productivity app for managing tasks with drag-and-drop functionality.",
      image: "https://images.unsplash.com/photo-1555421689-3f034debb7a6?ixlib=rb-4.0.3",
      technologies: ["React", "Firebase", "TailwindCSS"]
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media metrics with real-time updates.",
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3",
      technologies: ["Next.js", "Chart.js", "TypeScript"]
    },
    {
      title: "Weather Application",
      description: "Real-time weather forecasting app with location detection.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3",
      technologies: ["JavaScript", "API", "CSS3"]
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website built with modern design principles.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3",
      technologies: ["HTML5", "CSS3", "JavaScript"]
    },
    {
      title: "Team Collaboration App",
      description: "Real-time collaboration tool for remote teams with chat functionality.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3",
      technologies: ["React", "Socket.io", "MongoDB"]
    }
  ];

  return (
    <div className="bg-dark text-slate-200">
      {/* Navigation */}
      <nav className="fixed w-full bg-darker/80 backdrop-blur-sm z-50 shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#" className="text-2xl font-bold gradient-text">Portfolio</a>
            
            <div className="md:hidden">
              <button 
                onClick={toggleMenu} 
                className="text-slate-200 hover:text-primary focus:outline-none"
              >
                <i className="fas fa-bars text-2xl"></i>
              </button>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          
          {isOpen && (
            <div className="md:hidden mt-4 pb-2">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block py-2 nav-link ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="gradient-text">Muzamil</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-slate-300">
              Frontend Developer
            </h2>
            <p className="text-lg mb-8 text-slate-400 max-w-lg">
              I build exceptional digital experiences that are fast, accessible, and visually appealing. 
              Let's create something amazing together.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 rounded-full btn-primary font-medium"
              >
                Hire Me
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 rounded-full border border-primary text-primary font-medium hover:bg-primary/10 transition"
              >
                View Work
              </button>
            </div>
            <div className="flex mt-8 space-x-4">
              {['github', 'linkedin-in', 'twitter'].map((social, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="social-icon text-xl w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-primary"
                >
                  <i className={`fab fa-${social}`}></i>
                </a>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary blur-xl opacity-20"></div>
              <img 
                src="Muzamil.jpg" 
                alt="Profile" 
                className="relative w-full h-full object-cover rounded-full border-4 border-slate-800 floating"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 bg-darker">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="gradient-text">Me</span></h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-secondary blur-xl opacity-20"></div>
                <img 
                  src="Muzamil.jpg" 
                  alt="About" 
                  className="relative w-full h-full object-cover rounded-2xl border-4 border-slate-800"
                />
              </div>
            </div>
            
            <div className="md:w-2/3 md:pl-12">
              <h3 className="text-2xl font-bold mb-6">Who am I?</h3>
              <p className="text-slate-400 mb-6">
                I'm a passionate Website Developer with over 1 years of experience creating modern web applications. 
                I specialize in JavaScript ecosystems including React, and modern CSS frameworks.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-semibold mb-2">Name: <span className="text-slate-300">Muzamil</span></h4>
                  <h4 className="font-semibold mb-2">Email: <span className="text-slate-300">malikmuzamil3889@gmail.com</span></h4>
                  <h4 className="font-semibold mb-2">Phone: <span className="text-slate-300">+92 328 7362120</span></h4>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Age: <span className="text-slate-300">21</span></h4>
                  <h4 className="font-semibold mb-2">Experience: <span className="text-slate-300">3+ Years</span></h4>
                  <h4 className="font-semibold mb-2">Location: <span className="text-slate-300">Chak 5 Faiz Near Air University Multan Campus</span></h4>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a href="#" className="px-6 py-3 rounded-full btn-primary font-medium">Download CV</a>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-3 rounded-full border border-primary text-primary font-medium hover:bg-primary/10 transition"
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>
          
          {/* Experience Timeline */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold mb-8 text-center">My <span className="gradient-text">Experience</span></h3>
            
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute left-1/2 h-full w-0.5 bg-slate-700 transform -translate-x-1/2"></div>
              
              {experiences.map((exp, index) => (
                <div key={index} className="mb-8 flex justify-between items-center w-full timeline-item">
                  {index % 2 === 0 ? (
                    <>
                      <div className="order-1 w-5/12"></div>
                      <div className="order-1 w-5/12 px-4 py-4 bg-slate-800 rounded-lg shadow-lg">
                        <h4 className="text-lg font-bold mb-2">{exp.position}</h4>
                        <p className="text-sm text-slate-400 mb-2">{exp.company} • {exp.period}</p>
                        <p className="text-slate-300">{exp.description}</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="order-1 w-5/12 px-4 py-4 bg-slate-800 rounded-lg shadow-lg">
                        <h4 className="text-lg font-bold mb-2">{exp.position}</h4>
                        <p className="text-sm text-slate-400 mb-2">{exp.company} • {exp.period}</p>
                        <p className="text-slate-300">{exp.description}</p>
                      </div>
                      <div className="order-1 w-5/12"></div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section id="skills" className="py-20 bg-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="gradient-text">Skills</span></h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
              
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.percentage}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: animateSkills ? `${skill.percentage}%` : '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Professional Skills</h3>
              
              <div className="space-y-6">
                {professionalSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.percentage}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: animateSkills ? `${skill.percentage}%` : '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Tools & Technologies */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Tools & <span className="gradient-text">Technologies</span></h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="flex flex-col items-center p-6 bg-slate-800 rounded-lg card-hover">
                  <i className={`${tech.icon} text-4xl ${tech.color} mb-2`}></i>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="py-20 bg-darker">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="gradient-text">Projects</span></h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="project-card rounded-xl overflow-hidden card-hover">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={`${project.image}&auto=format&fit=crop&w=1470&q=80`} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-slate-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-slate-700 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <a href="#" className="text-primary hover:text-secondary">
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                    <a href="#" className="text-primary hover:text-secondary">
                      <i className="fab fa-github"></i> Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href="#" className="px-8 py-3 rounded-full btn-primary font-medium inline-flex items-center">
              View All Projects <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In <span className="gradient-text">Touch</span></h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-slate-400 mb-8">
                Feel free to reach out to me for any questions or opportunities. 
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-slate-800 p-3 rounded-full mr-4">
                    <i className="fas fa-map-marker-alt text-primary text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Location</h4>
                    <p className="text-slate-400">Chak 5 Faiz Near Air University Multan Campus</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-slate-800 p-3 rounded-full mr-4">
                    <i className="fas fa-envelope text-primary text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p className="text-slate-400">malikmuzamil3889@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-slate-800 p-3 rounded-full mr-4">
                    <i className="fas fa-phone-alt text-primary text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Phone</h4>
                    <p className="text-slate-400">+92 328 7362120</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-bold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a href="#" className="social-icon w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 hover:bg-primary">
                    <i className="fab fa-github text-xl"></i>
                  </a>
                  <a href="#" className="social-icon w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 hover:bg-blue-600">
                    <i className="fab fa-linkedin-in text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg contact-input focus:outline-none" 
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium">Your Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg contact-input focus:outline-none" 
                      required 
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg contact-input focus:outline-none" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5" 
                    className="w-full px-4 py-3 rounded-lg contact-input focus:outline-none" 
                    required 
                  ></textarea>
                </div>
                <button type="submit" className="px-8 py-3 rounded-full btn-primary font-medium w-full">
                  Send Message <i className="fas fa-paper-plane ml-2"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-darker py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <a href="#" className="text-2xl font-bold gradient-text">Portfolio</a>
              <p className="text-slate-400 mt-2">© 2025 Alex Carter. All rights reserved.</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-primary transition">
                <i className="fab fa-github text-xl"></i>
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-600 transition">
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-500">
            <p>Made with <i className="fas fa-heart text-red-500"></i> and lots of <i className="fas fa-coffee text-amber-500"></i></p>
          </div>
        </div>
      </footer>
      
      {/* Back to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-lg z-50"
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </div>
  );
};

export default App;