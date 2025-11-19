/* ===================================
   SII BUILDS - BRAND STYLING
   =================================== */

/* Knockout HTF Font Faces */
@font-face {
  font-family: 'Knockout HTF';
  src: url('Knockout-HTF29-JuniorLiteweight_0.otf') format('opentype');
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'Knockout HTF';
  src: url('Knockout-HTF30-JuniorWelterwt_0.otf') format('opentype');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Knockout HTF';
  src: url('knockout-htf-31-junior-middlewt-1361516764.ttf') format('truetype');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'Knockout HTF';
  src: url('knockout-htf-51-middleweight-1361516728.ttf') format('truetype');
  font-weight: 600;
  font-style: normal;
}

:root {
  --yellow: #FFC64E;
  --offwhite: #FFF8F0;
  --blue: #74CBE5;
  --dark: #53585A;
  --text-dark: #333;
  --text-light: #fff;

  --max-width: 1200px;
  --section-padding: 80px;
  --radius: 6px;
  --transition: 0.3s ease;
}

/* ===================================
   RESET & BASE STYLES
   =================================== */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Knockout HTF", -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
  font-weight: 400;
  line-height: 1.6;
  color: var(--text-dark);
}

img {
  max-width: 100%;
  display: block;
}

a {
  text-decoration: none;
  color: inherit;
  transition: var(--transition);
}

button {
  font-family: inherit;
  cursor: pointer;
  border: none;
  transition: var(--transition);
}

/* ===================================
   TYPOGRAPHY
   =================================== */

h1, h2, h3 {
  font-weight: 700;
  line-height: 1.2;
}

h1 {
  font-size: 3rem;
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

h3 {
  font-size: 1.5rem;
  font-weight: 600;
}

h4 {
  font-size: 1.25rem;
  font-weight: 600;
}

p {
  font-weight: 300;
  margin-bottom: 1rem;
}

/* ===================================
   LAYOUT UTILITIES
   =================================== */

.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 20px;
}

section {
  padding: var(--section-padding) 20px;
}

/* Background Color Classes */
.full-yellow {
  background-color: var(--yellow);
}

.full-offwhite {
  background-color: var(--offwhite);
}

.full-blue {
  background-color: var(--blue);
}

.full-dark {
  background-color: var(--dark);
  color: var(--text-light);
}

/* ===================================
   HEADER & NAVIGATION
   =================================== */

header {
  background-color: var(--dark);
  color: var(--text-light);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 20px;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  display: flex;
  align-items: center;
}

.logo img {
  height: 40px;
  width: auto;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
  font-weight: 500;
}

.nav-links a:hover {
  color: var(--yellow);
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  color: var(--text-light);
  font-size: 1.5rem;
  cursor: pointer;
}

/* ===================================
   HERO SECTION
   =================================== */

.hero {
  background: linear-gradient(135deg, var(--dark) 0%, #3a3d3f 100%);
  color: var(--text-light);
  text-align: center;
  padding: 120px 20px;
  min-height: auto;
}

.hero h1 {
  margin-bottom: 1rem;
  font-size: 3.5rem;
}

.hero p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  font-weight: 400;
}

/* ===================================
   BUTTONS
   =================================== */

.btn {
  display: inline-block;
  padding: 12px 32px;
  border-radius: var(--radius);
  font-weight: 500;
  transition: var(--transition);
}

.btn-primary {
  background-color: var(--yellow);
  color: var(--text-dark);
}

.btn-primary:hover {
  background-color: #ffb32e;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.btn-secondary {
  background-color: var(--dark);
  color: var(--text-light);
}

.btn-secondary:hover {
  background-color: #3a3d3f;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.btn-outline {
  background-color: transparent;
  border: 2px solid var(--dark);
  color: var(--dark);
}

.btn-outline:hover {
  background-color: var(--dark);
  color: var(--text-light);
}

/* Download Button Styling */
.btn-primary[download]::after {
  content: " ⬇";
  margin-left: 5px;
}

/* ===================================
   CARDS
   =================================== */

.card {
  background: white;
  border-radius: var(--radius);
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: var(--transition);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.card img {
  width: 100%;
  height: 280px;
  object-fit: cover;
  object-position: center;
  border-radius: var(--radius);
  margin-bottom: 1rem;
  display: block;
}

.card h3 {
  margin-bottom: 0.5rem;
}

.card p {
  font-size: 0.95rem;
  color: #666;
}

/* ===================================
   GRID LAYOUTS
   =================================== */

.grid {
  display: grid;
  gap: 2rem;
}

.grid-2 {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.grid-3 {
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.grid-4 {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

/* ===================================
   SECTIONS
   =================================== */

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-header h2 {
  margin-bottom: 0.5rem;
}

.section-header p {
  font-size: 1.1rem;
  color: #666;
}

/* About Section */
.about-section {
  display: flex;
  align-items: center;
  gap: 3rem;
}

.about-content {
  flex: 1;
}

.about-icon {
  flex: 0 0 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
}

/* Team Section */
.team-member {
  text-align: center;
}

.team-member img {
  max-width: 250px;
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: var(--radius);
  margin-bottom: 1rem;
  margin-left: auto;
  margin-right: auto;
}

.team-member h3 {
  margin-bottom: 0.25rem;
}

.team-member .title {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.team-member p {
  font-size: 0.9rem;
  color: #555;
}

/* Services Section */
.service-card {
  text-align: center;
  padding: 2rem;
  background-color: var(--offwhite);
}

.service-icon {
  width: 100%;
  height: 200px;
  background-color: var(--offwhite);
  border-radius: var(--radius);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: var(--dark);
}

/* Projects Section */
.project-card {
  display: flex;
  flex-direction: column;
}

.project-card img {
  width: 100%;
  height: 280px;
  object-fit: cover;
  object-position: center;
  border-radius: var(--radius);
  margin-bottom: 1rem;
  display: block;
  background-color: var(--offwhite);
}

.project-category {
  display: inline-block;
  background-color: var(--yellow);
  color: var(--text-dark);
  padding: 4px 12px;
  border-radius: 3px;
  font-size: 0.8rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.project-card .btn {
  align-self: flex-start;
  font-size: 0.9rem;
  padding: 10px 20px;
}

/* Contact Banner */
.contact-banner {
  text-align: center;
  color: var(--text-dark);
}

.contact-banner h2 {
  margin-bottom: 1rem;
}

/* ===================================
   ACCORDION
   =================================== */

.accordion {
  background: white;
  border-radius: var(--radius);
  margin-bottom: 1rem;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.accordion-header {
  background-color: var(--dark);
  color: var(--text-light);
  padding: 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  font-size: 1.25rem;
}

.accordion-header:hover {
  background-color: #3a3d3f;
}

.accordion-icon {
  transition: var(--transition);
}

.accordion.active .accordion-icon {
  transform: rotate(180deg);
}

.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.accordion-content-inner {
  padding: 2rem;
}

.accordion.active .accordion-content {
  max-height: 1200px;
}

/* ===================================
   CONTACT FORM
   =================================== */

.contact-container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  max-width: var(--max-width);
  margin: 0 auto;
}

.contact-info h3 {
  margin-bottom: 1rem;
}

.contact-info p {
  margin-bottom: 1.5rem;
}

.contact-item {
  margin-bottom: 1.5rem;
}

.contact-item strong {
  display: block;
  margin-bottom: 0.25rem;
  font-weight: 600;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: var(--radius);
  font-family: inherit;
  font-size: 1rem;
  transition: var(--transition);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--blue);
  box-shadow: 0 0 0 3px rgba(116, 203, 229, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 150px;
}

/* ===================================
   FOOTER
   =================================== */

footer {
  text-align: center;
  padding: 3rem 20px;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1rem;
  font-weight: 500;
}

.footer-links a:hover {
  color: var(--yellow);
}

footer p {
  font-size: 0.9rem;
  opacity: 0.8;
}

/* ===================================
   SERVICE DETAIL PAGES
   =================================== */

.service-detail {
  max-width: 900px;
  margin: 0 auto;
}

.service-detail h1 {
  margin-bottom: 1rem;
}

.service-detail h3 {
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.service-detail ul {
  list-style: none;
  padding-left: 0;
}

.service-detail ul li {
  padding: 0.5rem 0;
  padding-left: 2rem;
  position: relative;
}

.service-detail ul li:before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--yellow);
  font-weight: 700;
}

.examples-grid {
  margin-top: 2rem;
}

/* Logo Container (Home Page Hero) */
.hero-logo-wrapper {
  text-align: center;
  margin-bottom: 2rem;
}

.hero-logo-container {
  background: rgba(255, 255, 255, 0.855);
  padding: 2rem;
  border-radius: 12px;
  display: inline-block;
  max-width: 90%;
}

.hero-logo-container img {
  max-width: 500px;
  width: 100%;
  height: auto;
  display: block;
}

/* Centered Button Containers */
.btn-center {
  text-align: center;
  margin-top: 2rem;
}

/* About Section Icon */
.about-icon {
  width: 200px;
  height: 200px;
  object-fit: contain;
}

/* ===================================
   RESPONSIVE DESIGN
   =================================== */

/* Tablet and below (768px) */
@media (max-width: 768px) {
  /* Typography */
  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.75rem;
  }

  h3 {
    font-size: 1.25rem;
  }

  .hero {
    padding: 80px 20px;
  }

  .hero h1 {
    font-size: 2.5rem;
    line-height: 1.2;
  }

  .hero p {
    font-size: 1rem;
  }

  /* Spacing */
  section {
    padding: 60px 20px;
  }

  /* Header & Mobile Navigation */
  .menu-toggle {
    display: block;
  }

  .logo img {
    height: 40px;
  }

  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: var(--dark);
    flex-direction: column;
    gap: 0;
    padding: 0;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .nav-links.open {
    max-height: 400px;
  }

  .nav-links li {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  .nav-links a {
    display: block;
    padding: 1rem 20px;
    font-size: 1rem;
  }

  /* Layout Adjustments */
  .about-section {
    flex-direction: column;
    gap: 2rem;
  }

  .about-section .content {
    max-width: 100%;
  }

  .contact-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  /* Grid Systems */
  .grid-2,
  .grid-3,
  .grid-4 {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  /* Cards */
  .card {
    margin-bottom: 1.5rem;
  }

  .card img {
    height: 240px;
  }

  .project-card img {
    height: 240px;
  }

  /* Service Cards */
  .service-card h3 {
    font-size: 1.25rem;
  }

  .service-card p {
    font-size: 0.95rem;
  }

  /* Team Members */
  .team-member img {
    max-width: 200px;
  }

  /* Accordions */
  .accordion-header {
    font-size: 1.25rem;
    padding: 1rem;
  }

  .accordion-content {
    padding: 1rem;
  }

  .accordion-content ul {
    padding-left: 1.5rem;
  }

  /* Forms */
  .form-group input,
  .form-group textarea {
    font-size: 16px; /* Prevents zoom on iOS */
  }

  /* Buttons */
  .btn {
    font-size: 0.95rem;
    padding: 12px 24px;
    min-height: 44px; /* iOS touch target recommendation */
  }

  /* Hero Logo Container */
  .hero-logo-container {
    padding: 1.5rem;
    max-width: 95%;
  }

  .hero-logo-container img {
    max-width: 350px;
  }

  .about-icon {
    width: 150px;
    height: 150px;
  }

  /* Stats Grid */
  .stats-grid {
    gap: 1.5rem;
  }
}

/* Mobile phones (480px) */
@media (max-width: 480px) {
  /* Typography */
  h1 {
    font-size: 1.75rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.1rem;
  }

  .hero {
    padding: 60px 15px;
  }

  .hero h1 {
    font-size: 2rem;
    padding: 0 10px;
  }

  .hero p {
    font-size: 0.95rem;
    padding: 0 10px;
  }

  /* Spacing */
  section {
    padding: 40px 15px;
  }

  /* Header */
  nav {
    padding: 0 15px;
  }

  .logo img {
    height: 35px;
  }

  /* Cards */
  .card {
    padding: 1.25rem;
  }

  .card img {
    height: 200px;
  }

  .project-card img {
    height: 200px;
  }

  /* Buttons */
  .btn {
    padding: 12px 20px;
    font-size: 0.9rem;
    width: 100%;
    text-align: center;
    min-height: 44px; /* iOS touch target recommendation */
  }

  /* Service Cards */
  .service-card {
    padding: 1.5rem;
  }

  /* Team Members */
  .team-member {
    padding: 1.5rem;
  }

  .team-member img {
    max-width: 180px;
  }

  /* Accordions */
  .accordion-header {
    font-size: 1.1rem;
    padding: 0.875rem;
  }

  .accordion-content {
    padding: 0.875rem;
    font-size: 0.9rem;
  }

  /* Forms */
  .form-group {
    margin-bottom: 1rem;
  }

  .form-group label {
    font-size: 0.9rem;
  }

  /* Contact Info */
  .contact-info {
    padding: 1.5rem;
  }

  .contact-info h3 {
    font-size: 1.1rem;
  }

  .contact-info p,
  .contact-info a {
    font-size: 0.9rem;
  }

  /* Hero Logo Container */
  .hero-logo-container {
    padding: 1rem;
    max-width: 98%;
  }

  .hero-logo-container img {
    max-width: 280px;
  }

  .about-icon {
    width: 120px;
    height: 120px;
  }

  /* Project Category */
  .project-category {
    font-size: 0.75rem;
    padding: 3px 10px;
  }

  /* Footer */
  footer p {
    font-size: 0.85rem;
  }
}

/* Large tablets/small laptops (992px - 1024px) */
@media (min-width: 769px) and (max-width: 1024px) {
  .grid-3 {
    grid-template-columns: repeat(2, 1fr);
  }

  .grid-4 {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Ensure images don't overflow on any screen */
img {
  max-width: 100%;
  height: auto;
}

/* Prevent horizontal scroll on mobile */
body {
  overflow-x: hidden;
}

html {
  -webkit-text-size-adjust: 100%; /* Prevent font scaling in landscape on iOS */
}

/* Make tables responsive */
table {
  width: 100%;
  overflow-x: auto;
  display: block;
}

@media (max-width: 768px) {
  table {
    font-size: 0.9rem;
  }
}

/* Touch-friendly links and buttons */
@media (hover: none) and (pointer: coarse) {
  /* Mobile devices with touch screens */
  a, button, .btn, .accordion-header {
    min-height: 44px; /* Apple's recommended touch target size */
    min-width: 44px;
  }
  
  /* Prevent hover effects on touch devices */
  .card:hover {
    transform: none;
  }
}

/* Improve text readability on mobile */
@media (max-width: 768px) {
  p, li {
    line-height: 1.7;
  }
  
  /* Ensure adequate spacing for readability */
  .container {
    padding: 0 20px;
  }
  
  /* Make clickable areas more touch-friendly */
  .nav-links a {
    min-height: 48px;
    display: flex;
    align-items: center;
  }
  
  /* Improve accordion usability */
  .accordion-header {
    padding: 1.25rem;
    min-height: 60px;
    display: flex;
    align-items: center;
  }
}


