const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const workspaceDir = path.resolve(__dirname, '..');
const publicDir = path.join(workspaceDir, 'public');

// 1. Read photo as Base64
const photoPath = path.join(publicDir, 'sastha.jpeg');
const photoBase64 = fs.readFileSync(photoPath).toString('base64');
const photoSrc = `data:image/jpeg;base64,${photoBase64}`;

// 2. Generate HTML with optimal vertical fill, perfect alignment, and elegant typography
const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Sastha K - Resume</title>
  <style>
    @page {
      size: A4 portrait;
      margin: 0;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    html, body {
      margin: 0;
      padding: 0;
      background-color: #ffffff;
      color: #1f2937;
      font-family: 'Georgia', 'Times New Roman', Times, serif;
      -webkit-font-smoothing: antialiased;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    .page {
      width: 210mm;
      height: 297mm;
      box-sizing: border-box;
      padding: 18mm 20mm 18mm 20mm;
      background: #ffffff;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    /* HEADER */
    .header {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 16px;
    }
    .avatar-wrapper {
      width: 108px;
      height: 108px;
      border-radius: 50%;
      overflow: hidden;
      margin-bottom: 12px;
      border: 1px solid rgba(0,0,0,0.08);
      box-shadow: 0 1px 4px rgba(0,0,0,0.06);
      background: #f3f4f6;
    }
    .avatar-wrapper img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    .name {
      font-size: 24px;
      font-weight: 700;
      letter-spacing: 2px;
      color: #111827;
      text-transform: uppercase;
      line-height: 1.2;
      margin-bottom: 4px;
    }
    .subtitle {
      font-size: 13.5px;
      color: #4b5563;
      margin-bottom: 4px;
      line-height: 1.3;
    }
    .target-company {
      font-size: 12.5px;
      font-weight: 500;
      color: #7a2222;
      margin-bottom: 11px;
      line-height: 1.3;
    }
    .contact-info {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      color: #4b5563;
      line-height: 1.3;
    }
    .contact-dot {
      display: inline-block;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: #7a2222;
      margin: 0 12px;
    }

    /* HEADER DIVIDER */
    .header-divider {
      width: 100%;
      height: 1px;
      background-color: #d1d5db;
      margin-bottom: 0;
    }

    /* MAIN TWO-COLUMN CONTENT */
    .columns-container {
      display: grid;
      grid-template-columns: 220px 1fr;
    }

    .col-left {
      border-right: 1px solid #d1d5db;
      padding-right: 22px;
      display: flex;
      flex-direction: column;
    }
    .col-right {
      padding-left: 26px;
      display: flex;
      flex-direction: column;
    }

    /* SECTION COMMON STYLES */
    .section {
      padding: 18px 0;
      border-bottom: 1px solid #d1d5db;
    }
    .section.no-border {
      border-bottom: none;
    }

    .section-title {
      font-size: 15px;
      font-weight: 700;
      color: #111827;
      margin-bottom: 10px;
      line-height: 1.25;
      letter-spacing: 0.2px;
    }

    /* LEFT COLUMN CONTENT */
    .objective-text {
      font-size: 11px;
      line-height: 1.65;
      color: #374151;
      text-align: left;
    }

    .skill-list, .tool-list, .lang-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .skill-item, .tool-item {
      font-size: 12px;
      line-height: 1.85;
      color: #7a2222;
      font-weight: 500;
    }
    .lang-item {
      font-size: 12px;
      line-height: 1.85;
      color: #374151;
    }

    /* RIGHT COLUMN CONTENT */
    .edu-degree {
      font-size: 12.5px;
      font-weight: 700;
      color: #7a2222;
      line-height: 1.3;
      margin-bottom: 4px;
    }
    .edu-date {
      font-size: 11.5px;
      color: #4b5563;
      line-height: 1.3;
    }

    .bullet-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .bullet-item {
      font-size: 12px;
      line-height: 1.85;
      color: #374151;
      position: relative;
      padding-left: 14px;
    }
    .bullet-item::before {
      content: "•";
      position: absolute;
      left: 0;
      top: 0;
      color: #6b7280;
      font-size: 12px;
      line-height: 1.85;
    }

    .target-role-text {
      font-size: 12.5px;
      font-weight: 700;
      color: #7a2222;
      line-height: 1.3;
    }
  </style>
</head>
<body>
  <div class="page">
    <!-- HEADER -->
    <header class="header">
      <div class="avatar-wrapper">
        <img src="${photoSrc}" alt="Sastha K" />
      </div>
      <h1 class="name">SASTHA K</h1>
      <div class="subtitle">UI/UX Designer (Fresher)</div>
      <div class="target-company">Target Company: Zoho</div>
      <div class="contact-info">
        <span>ssastha588@gmail.com</span>
        <span class="contact-dot"></span>
        <span>Dindigul, Tamil Nadu</span>
      </div>
    </header>

    <div class="header-divider"></div>

    <!-- MAIN TWO-COLUMN CONTENT -->
    <div class="columns-container">
      <!-- LEFT COLUMN -->
      <div class="col-left">
        <!-- Career Objective -->
        <section class="section">
          <h2 class="section-title">Career Objective</h2>
          <p class="objective-text">
            Creative and detail-oriented B.Tech Information Technology student (2024–2028) seeking a UI/UX Designer Fresher role. Passionate about designing user-friendly digital experiences and eager to contribute with modern design thinking, prototyping, and problem-solving skills.
          </p>
        </section>

        <!-- Technical Skills -->
        <section class="section">
          <h2 class="section-title">Technical Skills</h2>
          <ul class="skill-list">
            <li class="skill-item">UI Design</li>
            <li class="skill-item">UX Design</li>
            <li class="skill-item">Wireframing</li>
            <li class="skill-item">Prototyping</li>
            <li class="skill-item">User Research</li>
            <li class="skill-item">Design Systems</li>
            <li class="skill-item">HTML/CSS Basics</li>
            <li class="skill-item">Flutter Basics</li>
          </ul>
        </section>

        <!-- UI/UX Tools -->
        <section class="section">
          <h2 class="section-title">UI/UX Tools</h2>
          <ul class="tool-list">
            <li class="tool-item">Figma</li>
            <li class="tool-item">Adobe XD</li>
            <li class="tool-item">Canva</li>
          </ul>
        </section>

        <!-- Languages -->
        <section class="section no-border">
          <h2 class="section-title">Languages</h2>
          <ul class="lang-list">
            <li class="lang-item">Tamil</li>
            <li class="lang-item">English</li>
          </ul>
        </section>
      </div>

      <!-- RIGHT COLUMN -->
      <div class="col-right">
        <!-- Education -->
        <section class="section">
          <h2 class="section-title">Education</h2>
          <div class="edu-degree">B.Tech in Information Technology</div>
          <div class="edu-date">2024 – 2028</div>
        </section>

        <!-- Projects -->
        <section class="section">
          <h2 class="section-title">Projects</h2>
          <ul class="bullet-list">
            <li class="bullet-item">Food Delivery App UI</li>
            <li class="bullet-item">E-Commerce App Redesign</li>
            <li class="bullet-item">Banking App UI Concept</li>
          </ul>
        </section>

        <!-- Certifications -->
        <section class="section">
          <h2 class="section-title">Certifications</h2>
          <ul class="bullet-list">
            <li class="bullet-item">UI/UX Design Fundamentals</li>
            <li class="bullet-item">Figma Essentials</li>
          </ul>
        </section>

        <!-- Strengths -->
        <section class="section">
          <h2 class="section-title">Strengths</h2>
          <ul class="bullet-list">
            <li class="bullet-item">Creativity</li>
            <li class="bullet-item">Communication</li>
            <li class="bullet-item">Teamwork</li>
            <li class="bullet-item">Attention to Detail</li>
            <li class="bullet-item">Quick Learner</li>
          </ul>
        </section>

        <!-- Target Role -->
        <section class="section no-border">
          <h2 class="section-title">Target Role</h2>
          <div class="target-role-text">UI/UX Designer (Fresher)</div>
        </section>
      </div>
    </div>
  </div>
</body>
</html>
`;

const htmlOutPath = path.join(publicDir, 'resume.html');
fs.writeFileSync(htmlOutPath, html, 'utf8');
console.log('Saved resume.html to:', htmlOutPath);
