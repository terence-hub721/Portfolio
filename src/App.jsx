import { useEffect } from 'react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' }
];

const experienceItems = [
  {
    date: '02/2026 – 05/2026',
    location: '📍 Košice, Slovakia',
    title: 'Finance Intern',
    company: 'Holcim EBS',
    bullets: [
      'Developed and maintained reporting materials supporting finance process transformation initiatives across P2P, R2R, and O2C functions.',
      'Consolidated and structured financial and accounting documentation from 954+ sources, improving accessibility, reporting consistency, and knowledge management.',
      'Utilized Excel, Google Workspace, and AI-enabled tools to analyze information, automate documentation processes, and improve reporting efficiency.',
      'Collaborated with multiple stakeholders across finance teams to support reporting requirements and process improvement initiatives.',
      'Gained exposure to shared service reporting environments, data management, and business process analytics.'
    ]
  },
  {
    date: '07/2023 – 08/2024',
    location: '📍 Chennai, India',
    title: 'Assistant Accountant',
    company: 'Infosys BPM Limited',
    client: 'Client: Centric Brands Holding LLC, USA',
    bullets: [
      'Managed accounts payable, processing +1,200 invoices/month averaging $5M while maintaining vendor relationships and ensuring timely payments.',
      'Achieved 100% invoice processing accuracy by reconciling, verifying entries, and comparing system reports to balances.',
      'Processed Non-PO invoices in SAP FI, ensuring accurate GL, Profit Centre, and Cost Centre coding in compliance with accounting policies.',
      'Processed customs duty invoices (PO Invoices) via SAP ZMIRO and posted entries in A2000 ERP with correct GL mapping.',
      'Supported utility invoice verification and payment processing activities, ensuring timely settlement and compliance.',
      'Analyzed transaction data and SAP records to investigate discrepancies, resolve queries, and improve reporting accuracy.',
      'Collaborated with business and logistics departments to clear missing customs invoices, ensuring smooth month-end closure.'
    ]
  },
  {
    date: '01/2022 – 06/2023',
    location: '📍 Coimbatore, India',
    title: 'Executive – Accounts Payable Debit Balance Analyst',
    company: 'Pierian Services Private Limited',
    client: 'Client: Ford Motor Company | Markets: USA, Mexico, Canada',
    bullets: [
      'Analyzed and resolved 200–250 debit balance cases per month, identifying invoice discrepancies, payment errors, and documentation gaps.',
      'Processed daily adjustment and offset entries in SAP S/4HANA and IBM Mainframe (Host on Demand) to reconcile vendor balances.',
      'Performed remittance validation and payment checks for USA, Mexico, and Canada vendors, ensuring accurate clearing of open items.',
      'Managed and resolved 40+ vendor queries per day through SAP CRM, ensuring accurate responses, re-routing, and timely closure.',
      'Provided extended Month-End Close (MEC) support, ensuring balances were reconciled and TAT consistently met.',
      'Monitored large transaction datasets, identifying discrepancies and supporting data-driven resolution processes.'
    ]
  },
  {
    date: '07/2021 – 01/2022',
    location: '📍 Coimbatore, India',
    title: 'Assistant – Finance and Admin',
    company: 'ThinkInk',
    bullets: [
      'Maintained financial records and generated supporting reports using Tally Prime and Excel.',
      'Performed reconciliations and maintained accurate financial data to support reporting and control activities.',
      'Reviewed financial postings and supporting documents for accuracy, completeness, and compliance with company policies.'
    ]
  }
];

const educationItems = [
  {
    emoji: '🎓',
    degree: "Master's in Finance, Banking and Investment",
    school: 'Technical University of Košice',
    period: '09/2024 – 08/2026 · Košice, Slovakia'
  },
  {
    emoji: '📚',
    degree: "Bachelor's in Commerce with Professional Accounting",
    school: 'Sri Ramakrishna College of Arts and Science',
    period: '05/2018 – 05/2021 · Coimbatore, India'
  }
];

const skillsGroups = [
  {
    title: '🖥️ ERP & Systems',
    skills: ['SAP FI', 'SAP S/4HANA', 'SAP ZMIRO', 'SAP CRM', 'A2000 ERP', 'IBM Mainframe', 'Tally Prime']
  },
  {
    title: '📊 Analytics & Reporting',
    skills: ['Power BI', 'Advanced Excel', 'Macros', 'Pivot Tables', 'VLOOKUP / XLOOKUP', 'Dashboard Development', 'KPI Reporting']
  },
  {
    title: '💰 Finance Operations',
    skills: ['Accounts Payable', 'Financial Reporting', 'Reconciliation', 'Month-End Close', 'GL Coding', 'Vendor Management', 'Invoice Processing']
  },
  {
    title: '🛠️ Productivity & Tools',
    skills: ['MS Office Suite', 'Google Workspace', 'Process Documentation', 'AI-Enabled Tools', 'Data Analysis']
  }
];

const certifications = [
  { icon: '🤖', name: 'AI For Everyone', source: 'Coursera' },
  { icon: '💻', name: 'Operating Systems: Overview, Administration & Security', source: 'IBM · Coursera' },
  { icon: '📈', name: 'Business Analytics for Decision Making', source: 'Coursera' },
  { icon: '📊', name: 'Preparing Data for Analysis with Microsoft Excel', source: 'Microsoft · Coursera' }
];

const languages = [
  { flag: '🇮🇳', name: 'Tamil', level: 'Mother Tongue', score: 5 },
  { flag: '🇬🇧', name: 'English', level: 'C2 – Proficient', score: 5 },
  { flag: '🇸🇰', name: 'Slovak', level: 'A1 – Beginner', score: 1 },
  { flag: '🇩🇪', name: 'German', level: 'A1 – Beginner', score: 1 }
];

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav>
        <div className="logo">TJP</div>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <section id="hero">
        <div className="hero-bg" />
        <div className="hero-bg-grid" />
        <div className="hero-bg-graphic">
          <span className="bar bar1" />
          <span className="bar bar2" />
          <span className="bar bar3" />
          <span className="dot" />
        </div>
        <div className="hero-inner">
          <div className="hero-avatar">TJ</div>
          <div className="hero-text">
            <div className="sec-label">Finance & Analytics Professional</div>
            <h1>
              Terence <span>Jose Paul</span>
              <br />Noel Paul
            </h1>
            <div className="hero-subtitle">Finance Analyst · SAP Expert · Power BI · Data-Driven Decision Maker</div>
            <p className="hero-desc">
              Analytical finance professional with hands-on experience in accounting operations, SAP-based financial processes,
              reporting, reconciliation, and data analysis. Currently pursuing a Master's in Finance, Banking and Investment.
            </p>
            <div className="hero-contacts">
              <a href="tel:+421911914461" className="contact-chip">
                <svg viewBox="0 0 24 24">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                </svg>
                (+421) 911 914 461
              </a>
              <a href="mailto:terence20010208@gmail.com" className="contact-chip">
                <svg viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                terence20010208@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/terence-jose-paul-noel-paul-b769381b3/" target="_blank" rel="noreferrer" className="contact-chip">
                <svg viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                LinkedIn
              </a>
              <span className="contact-chip">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                Bratislava, Slovakia
              </span>
            </div>
            <div className="hero-badges">
              <span className="badge">SAP FI / S/4HANA</span>
              <span className="badge">Power BI</span>
              <span className="badge">Advanced Excel</span>
              <span className="badge">Accounts Payable</span>
              <span className="badge">Financial Reporting</span>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="sec-inner reveal">
          <div className="sec-label">Who I Am</div>
          <h2 className="sec-title">About Me</h2>
          <p className="about-text">
            I am an analytical finance professional with experience in accounting operations, SAP-based financial processes,
            reporting, reconciliation, and data analysis. Skilled in Advanced Excel, Power BI, and financial reporting with a strong ability to work with large datasets, identify trends, and support data-driven decision-making.
            <br />
            <br />
            I am experienced in collaborating with cross-functional stakeholders across international environments and committed to continuous improvement, process optimization, and operational excellence. Currently pursuing a Master's degree in Finance, Banking and Investment at the Technical University of Košice, while expanding expertise in business reporting, analytics, and data visualization.
          </p>
        </div>
      </section>

      <section id="experience">
        <div className="sec-inner">
          <div className="sec-label">Career Journey</div>
          <h2 className="sec-title">Work Experience</h2>
          <div className="timeline" style={{ marginTop: 36 }}>
            {experienceItems.map((item) => (
              <div key={item.title + item.date} className="tl-item reveal">
                <div className="tl-dot" />
                <div className="tl-meta">
                  <span className="tl-date">{item.date}</span>
                  <span className="tl-loc">{item.location}</span>
                </div>
                <div className="tl-title">{item.title}</div>
                <div className="tl-company">{item.company}</div>
                {item.client && <div className="tl-client">{item.client}</div>}
                <ul className="tl-list">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education">
        <div className="sec-inner reveal">
          <div className="sec-label">Academic Background</div>
          <h2 className="sec-title">Education</h2>
          <div className="edu-grid" style={{ marginTop: 28 }}>
            {educationItems.map((edu) => (
              <div key={edu.degree} className="edu-card">
                <div style={{ fontSize: '1.8rem', marginBottom: '10px' }}>{edu.emoji}</div>
                <div className="edu-degree">{edu.degree}</div>
                <div className="edu-school">{edu.school}</div>
                <div className="edu-period">{edu.period}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="sec-inner reveal">
          <div className="sec-label">Toolkit</div>
          <h2 className="sec-title">Skills & Expertise</h2>
          <div className="skills-grid" style={{ marginTop: 28 }}>
            {skillsGroups.map((group) => (
              <div key={group.title} className="skill-group">
                <h3>{group.title}</h3>
                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications">
        <div className="sec-inner reveal">
          <div className="sec-label">Learning & Development</div>
          <h2 className="sec-title">Certifications</h2>
          <div className="cert-grid" style={{ marginTop: 28 }}>
            {certifications.map((cert) => (
              <div key={cert.name} className="cert-card">
                <div className="cert-icon">{cert.icon}</div>
                <div>
                  <div className="cert-name">{cert.name}</div>
                  <div className="cert-src">{cert.source}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="languages">
        <div className="sec-inner reveal">
          <div className="sec-label">Communication</div>
          <h2 className="sec-title">Languages</h2>
          <div className="lang-grid" style={{ marginTop: 28 }}>
            {languages.map((lang) => (
              <div key={lang.name} className="lang-card">
                <div style={{ fontSize: '1.4rem' }}>{lang.flag}</div>
                <div className="lang-name">{lang.name}</div>
                <div className="lang-level">{lang.level}</div>
                <div className="lang-stars">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <div key={index} className={index < lang.score ? 'star' : 'star empty'} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="sec-inner reveal">
          <div className="sec-label">Get In Touch</div>
          <h2 className="sec-title" style={{ justifyContent: 'center' }}>Contact Me</h2>
          <p style={{ color: 'var(--muted)', marginTop: 14, fontSize: '.95rem' }}>
            Open to finance, analytics, and accounting opportunities. Feel free to reach out!
          </p>
          <div className="contact-grid">
            <a href="mailto:terence20010208@gmail.com" className="contact-btn primary">✉️ Send Email</a>
            <a href="https://www.linkedin.com/in/terence-jose-paul-noel-paul-b769381b3/" target="_blank" rel="noreferrer" className="contact-btn secondary">💼 LinkedIn Profile</a>
            <a href="tel:+421911914461" className="contact-btn secondary">📞 (+421) 911 914 461</a>
          </div>
          <p style={{ color: 'var(--muted)', fontSize: '.8rem', marginTop: 28 }}>
            📍 Mlynarovicova 2471/9, Bratislava 85103, Slovakia
          </p>
        </div>
      </section>

      <footer>
        <p>© 2026 Terence Jose Paul Noel Paul · Finance Professional · Bratislava, Slovakia</p>
      </footer>
    </>
  );
}

export default App;
