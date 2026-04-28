import { useNavigate } from "react-router-dom";
import { Bell, ShieldCheck, Users, Radio, Settings, ChevronRight, School } from "lucide-react";

function LandingPage() {
  const navigate = useNavigate();

  const stats = [
    { value: "<2s",  label: "Alert delivery time" },
    { value: "3",    label: "User roles supported" },
    { value: "24/7", label: "System uptime" },
  ];

  const steps = [
    {
      num: "01",
      icon: <Users size={22} color="#1E3A5F" />,
      title: "Security detects incident",
      desc: "Security staff identifies an emergency on campus and logs in to their dedicated dashboard.",
    },
    {
      num: "02",
      icon: <Radio size={22} color="#1E3A5F" />,
      title: "Alert is broadcast",
      desc: "Security creates and sends a real-time alert. The system instantly distributes it campus-wide.",
    },
    {
      num: "03",
      icon: <Bell size={22} color="#1E3A5F" />,
      title: "Students & staff notified",
      desc: "Everyone on campus receives the alert on their dashboard in under 2 seconds.",
    },
  ];

  const features = [
    {
      icon: <Bell size={18} color="white" />,
      title: "Instant alerts",
      desc: "Real-time emergency notifications sent campus-wide in seconds.",
    },
    {
      icon: <ShieldCheck size={18} color="white" />,
      title: "Role-based access",
      desc: "Students, security, and admins each get a tailored dashboard experience.",
    },
    {
      icon: <Settings size={18} color="white" />,
      title: "User management",
      desc: "Admins control who has access and what roles they're assigned.",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .landing {
          font-family: 'Inter', sans-serif;
          background: #ffffff;
          color: #1a1a2e;
          min-height: 100vh;
        }

        /* NAVBAR */
        .navbar {
          position: sticky;
          top: 0;
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 48px;
          background: #ffffff;
          border-bottom: 1px solid #e8edf2;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 20px;
          font-weight: 800;
          color: #1E3A5F;
          letter-spacing: -0.3px;
        }

        .logo-icon {
          width: 36px;
          height: 36px;
          background: #047857;
          border-radius: 9px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .nav-btn {
          background: #047857;
          color: #d1fae5;
          border: none;
          padding: 10px 26px;
          border-radius: 9px;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .nav-btn:hover { background: #065f46; }

        /* HERO */
        .hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 32px;
          padding: 80px 48px 72px;
          background: #1E3A5F;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.2);
          color: #d1fae5;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 5px 14px;
          border-radius: 20px;
          margin-bottom: 24px;
        }

        .hero-title {
          font-size: clamp(34px, 3.5vw, 50px);
          font-weight: 800;
          line-height: 1.12;
          color: #ffffff;
          margin-bottom: 18px;
          letter-spacing: -0.5px;
        }

        .hero-title span { color: #6ee7b7; }

        .hero-desc {
          font-size: 15px;
          color: rgba(255,255,255,0.65);
          line-height: 1.8;
          margin-bottom: 36px;
          max-width: 420px;
        }

        .cta-btn {
          background: #047857;
          color: #d1fae5;
          border: none;
          padding: 14px 34px;
          border-radius: 10px;
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .cta-btn:hover { background: #065f46; }

        /* HERO GRAPHIC */
        .hero-graphic {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* STATS */
        .stats-section {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-bottom: 1px solid #e8edf2;
        }

        .stat-item {
          padding: 32px 24px;
          text-align: center;
          background: #ffffff;
          border-right: 1px solid #e8edf2;
        }
        .stat-item:last-child { border-right: none; }

        .stat-value {
          font-size: 36px;
          font-weight: 800;
          color: #047857;
          line-height: 1;
          margin-bottom: 8px;
          letter-spacing: -1px;
        }

        .stat-label {
          font-size: 11px;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          font-weight: 500;
        }

        /* HOW IT WORKS */
        .hiw-section {
          padding: 72px 48px;
          background: #f8fafc;
        }

        .section-tag {
          display: inline-block;
          background: #e8f0fb;
          color: #1E3A5F;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 4px 14px;
          border-radius: 20px;
          margin-bottom: 14px;
        }

        .section-title {
          font-size: clamp(22px, 2.5vw, 30px);
          font-weight: 800;
          color: #1E3A5F;
          margin-bottom: 10px;
          letter-spacing: -0.3px;
        }

        .section-sub {
          font-size: 14px;
          color: #64748b;
          margin-bottom: 44px;
          line-height: 1.75;
        }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .step-card {
          background: #ffffff;
          border: 1px solid #dbeafe;
          border-top: 3px solid #1E3A5F;
          border-radius: 14px;
          padding: 30px 24px;
        }

        .step-icon-wrap {
          width: 46px;
          height: 46px;
          background: #e8f0fb;
          border-radius: 11px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }

        .step-num {
          display: inline-block;
          background: #1E3A5F;
          color: #ffffff;
          font-size: 10px;
          font-weight: 700;
          padding: 3px 10px;
          border-radius: 6px;
          margin-bottom: 12px;
          letter-spacing: 1.5px;
        }

        .step-title {
          font-size: 14px;
          font-weight: 700;
          color: #1E3A5F;
          margin-bottom: 8px;
        }

        .step-desc {
          font-size: 13px;
          color: #64748b;
          line-height: 1.75;
        }

        /* FEATURES */
        .features-section {
          padding: 0 48px 72px;
          background: #f8fafc;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .feat-card {
          background: #ffffff;
          border: 1px solid #dbeafe;
          border-radius: 14px;
          padding: 26px;
        }

        .feat-icon {
          width: 40px;
          height: 40px;
          background: #1E3A5F;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }

        .feat-title {
          font-size: 14px;
          font-weight: 700;
          color: #1E3A5F;
          margin-bottom: 8px;
        }

        .feat-desc {
          font-size: 13px;
          color: #64748b;
          line-height: 1.7;
        }

        /* FOOTER */
        .footer {
          border-top: 1px solid #e8edf2;
          padding: 22px 48px;
          background: #ffffff;
        }

        .footer-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12px;
          color: #94a3b8;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 700;
          color: #1E3A5F;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .navbar { padding: 14px 20px; }
          .hero { grid-template-columns: 1fr; padding: 48px 20px; }
          .hero-graphic { display: none; }
          .stats-section { grid-template-columns: 1fr; }
          .stat-item { border-right: none; border-bottom: 1px solid #e8edf2; }
          .hiw-section { padding: 48px 20px; }
          .steps-grid { grid-template-columns: 1fr; }
          .features-section { padding: 0 20px 48px; }
          .features-grid { grid-template-columns: 1fr; }
          .footer { padding: 18px 20px; }
          .footer-inner { flex-direction: column; gap: 8px; text-align: center; }
        }
      `}</style>

      <div className="landing">

        {/* NAVBAR */}
        <nav className="navbar">
          <div className="logo">
            <div className="logo-icon">
              <School size={18} color="white" />
            </div>
            AlertNet
          </div>
          <button className="nav-btn" onClick={() => navigate("/login")}>
            Login <ChevronRight size={15} />
          </button>
        </nav>

        {/* HERO */}
        <section className="hero">
          <div>
            <div className="badge">
              <span>●</span> Campus Safety System
            </div>
            <h1 className="hero-title">
              Keep Your Campus<br />
              <span>Safe & Informed</span>
            </h1>
            <p className="hero-desc">
              Real-time emergency alerts delivered instantly to every student,
              staff member, and security officer on campus — all from one system.
            </p>
            <button className="cta-btn" onClick={() => navigate("/login")}>
              Login to Dashboard <ChevronRight size={16} />
            </button>
          </div>

          {/* HERO GRAPHIC — static, no animations */}
          <div className="hero-graphic">
            <svg width="100%" viewBox="0 0 300 260" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="90" y="80" width="120" height="120" rx="60" fill="rgba(255,255,255,0.04)"/>
              <circle cx="150" cy="130" r="52" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
              <circle cx="150" cy="130" r="36" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
              <circle cx="150" cy="130" r="20" fill="#047857"/>
              <circle cx="150" cy="130" r="8" fill="white"/>
              <circle cx="150" cy="78"  r="14" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.18)" strokeWidth="0.5"/>
              <text x="150" y="83"  textAnchor="middle" fill="white" fontSize="11" fontFamily="sans-serif">🔔</text>
              <circle cx="205" cy="108" r="14" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.18)" strokeWidth="0.5"/>
              <text x="205" y="113" textAnchor="middle" fill="white" fontSize="11" fontFamily="sans-serif">🛡</text>
              <circle cx="205" cy="158" r="14" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.18)" strokeWidth="0.5"/>
              <text x="205" y="163" textAnchor="middle" fill="white" fontSize="11" fontFamily="sans-serif">👥</text>
              <circle cx="95"  cy="108" r="14" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.18)" strokeWidth="0.5"/>
              <text x="95"  y="113" textAnchor="middle" fill="white" fontSize="11" fontFamily="sans-serif">📡</text>
              <circle cx="95"  cy="158" r="14" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.18)" strokeWidth="0.5"/>
              <text x="95"  y="163" textAnchor="middle" fill="white" fontSize="11" fontFamily="sans-serif">⚙</text>
              <line x1="150" y1="92"  x2="150" y2="110" stroke="rgba(167,243,208,0.35)" strokeWidth="0.75" strokeDasharray="3,2"/>
              <line x1="191" y1="113" x2="174" y2="120" stroke="rgba(167,243,208,0.35)" strokeWidth="0.75" strokeDasharray="3,2"/>
              <line x1="191" y1="153" x2="174" y2="141" stroke="rgba(167,243,208,0.35)" strokeWidth="0.75" strokeDasharray="3,2"/>
              <line x1="109" y1="113" x2="126" y2="120" stroke="rgba(167,243,208,0.35)" strokeWidth="0.75" strokeDasharray="3,2"/>
              <line x1="109" y1="153" x2="126" y2="141" stroke="rgba(167,243,208,0.35)" strokeWidth="0.75" strokeDasharray="3,2"/>
              <rect x="60"  y="188" width="180" height="28" rx="6" fill="rgba(4,120,87,0.65)" stroke="rgba(167,243,208,0.25)" strokeWidth="0.5"/>
              <circle cx="76" cy="202" r="5" fill="#34d399" opacity="0.9"/>
              <rect x="86"  y="198" width="60" height="4"  rx="2"   fill="rgba(255,255,255,0.3)"/>
              <rect x="86"  y="205" width="40" height="3"  rx="1.5" fill="rgba(255,255,255,0.18)"/>
              <rect x="160" y="196" width="36" height="12" rx="3"   fill="#047857"/>
              <text x="178" y="204" textAnchor="middle" fill="#d1fae5" fontSize="8" fontFamily="sans-serif" fontWeight="600">SEND</text>
              <rect x="182" y="36"  width="94" height="34" rx="6"   fill="#047857" opacity="0.95"/>
              <text x="229" y="51"  textAnchor="middle" fill="#6ee7b7" fontSize="9" fontFamily="sans-serif" fontWeight="600">Alert sent!</text>
              <text x="229" y="63"  textAnchor="middle" fill="rgba(255,255,255,0.55)" fontSize="8" fontFamily="sans-serif">3 recipients notified</text>
              <polygon points="207,70 201,64 213,64" fill="#047857" opacity="0.95"/>
            </svg>
          </div>
        </section>

        {/* STATS */}
        <div className="stats-section">
          {stats.map((s) => (
            <div className="stat-item" key={s.label}>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* HOW IT WORKS */}
        <section className="hiw-section">
          <div className="section-tag">How it works</div>
          <h2 className="section-title">From incident to informed campus</h2>
          <p className="section-sub">Three simple steps — security acts, the system broadcasts, everyone knows.</p>
          <div className="steps-grid">
            {steps.map((s) => (
              <div className="step-card" key={s.num}>
                <div className="step-icon-wrap">{s.icon}</div>
                <div className="step-num">STEP {s.num}</div>
                <div className="step-title">{s.title}</div>
                <p className="step-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURES */}
        <section className="features-section">
          <div className="features-grid">
            {features.map((f) => (
              <div className="feat-card" key={f.title}>
                <div className="feat-icon">{f.icon}</div>
                <div className="feat-title">{f.title}</div>
                <p className="feat-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <div className="footer-inner">
            <div className="footer-logo">
              <School size={16} color="#1E3A5F" />
              AlertNet
            </div>
            <span>© 2025 AlertNet — Campus Emergency Alert System</span>
            <span>Built with Node.js & React</span>
          </div>
        </footer>

      </div>
    </>
  );
}

export default LandingPage;