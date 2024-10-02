import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ children, bgColor, textColor, id }) => (
  <motion.section
    id={id}
    style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      backgroundColor: bgColor,
      color: textColor,
    }}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div style={{ maxWidth: '800px', width: '100%', textAlign: 'center' }}>
      {children}
    </div>
  </motion.section>
);

const NavButton = ({ targetId, children }) => {
  const handleClick = () => {
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: 'transparent',
        color: 'currentColor',
        padding: '0.5rem 1rem',
        margin: '0 0.5rem',
        border: '1px solid currentColor',
        borderRadius: '0.25rem',
        cursor: 'pointer',
        transition: 'background-color 0.3s, color 0.3s',
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = 'white';
        e.target.style.color = 'black';
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = 'transparent';
        e.target.style.color = 'currentColor';
      }}
    >
      {children}
    </button>
  );
};

const ProjectCard = ({ title, description }) => (
  <motion.div
    style={{
      backgroundColor: 'white',
      padding: '1.5rem',
      borderRadius: '0.5rem',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      color: 'black',
    }}
    whileHover={{ scale: 1.05 }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
      {title}
    </h3>
    <p>{description}</p>
  </motion.div>
);

const TitledWebsite = () => {
  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <header
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          color: 'black',
          padding: '2rem',
        }}
      >
        <motion.img
          src="logot.png" 
          alt="TITLED logo"
          style={{ marginBottom: '2rem' }}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        {/* Downward Arrow Image */}
        <img
          src="down.png" 
          alt="Scroll Down Arrow"
          style={{ width: '50px', height: '50px', marginTop: '3rem', animation: 'bounce 1s infinite' }} // Increased marginTop for more space
        />
        <style>
          {`
            @keyframes bounce {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(10px); }
            }
          `}
        </style>
      </header>

      {/* Sticky Navbar */}
      <nav
        style={{
          position: 'sticky',
          top: 0,
          backgroundColor: 'white',
          zIndex: 1000,
          padding: '1rem 0',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        }}
      >
        <motion.div
          style={{ display: 'flex', justifyContent: 'center' }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <NavButton targetId="about">About</NavButton>
          <NavButton targetId="projects">Works</NavButton>
          <NavButton targetId="contact">Contact</NavButton>
        </motion.div>
      </nav>

      <Section id="about" bgColor="black" textColor="white">
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>About Us</h2>
        <p style={{ fontSize: '1.25rem' }}>
          TITLED is a graphic and brand design agency dedicated to creating bold, modern,
          and impactful designs for our clients. We believe in the power of visual
          communication to transform businesses and captivate audiences.
        </p>
      </Section>

      <Section id="projects" bgColor="white" textColor="black">
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Past Works</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
          <ProjectCard
            title="Lorem Ipsum"
            description="Lorem Ipsum"
          />
          <ProjectCard
            title="Lorem Ipsum"
            description="Lorem Ipsum"
          />
          <ProjectCard
            title="Lorem Ipsum"
            description="Lorem Ipsum"
          />
          <ProjectCard
            title="Lorem Ipsum"
            description="Lorem Ipsum"
          />
        </div>
      </Section>

      <Section id="contact" bgColor="black" textColor="white">
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Contact Us</h2>
        <p style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>
          Ready to elevate your brand? Get in touch with us to discuss your next project.
        </p>
        <iframe
          //src="https://docs.google.com/forms/d/e/YOUR_GOOGLE_FORM_ID/viewform?embedded=true" // Replace with your Google Form ID
          src="https://docs.google.com/forms" 
          style={{ width: '100%', height: '500px', border: 'none' }}
        >
          Loading Google Form...
        </iframe>
      </Section>
    </div>
  );
};

export default TitledWebsite;
