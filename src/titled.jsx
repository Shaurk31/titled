import React, { useState } from "react"; 
import { motion } from "framer-motion";
import Section from "./Section"; // Ensure this path is correct

const ProjectCard = ({ title, description, link, bgImage }) => {
  const [hovered, setHovered] = useState(false); // Track hover state

  return (
    <motion.div
      style={{
        position: "relative",
        borderRadius: "0.5rem",
        overflow: "hidden",
        cursor: "pointer",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        height: "300px",
      }}
      whileHover={{ scale: 1.05 }} // Card hover effect only
      transition={{ type: "spring", stiffness: 300 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background Image */}
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
          filter: "brightness(0.8)",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      ></div>

      {/* Hover Icon Box */}
      {hovered && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 3,
            width: "50px", // Confined box size
            height: "50px", // Confined box size
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
          onClick={() => window.open(link, "_blank")} // Open link in a new tab
        >
          {/* Common Icon */}
          <img
            src="icon.png" // Update with your icon's file path
            alt="icon"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
            }}
          />
        </div>
      )}

      {/* Bottom Rectangle for Title and Description */}
      <div
        style={{
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          color: "white",
          height: "80px",
          position: "absolute",
          bottom: 0,
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "0.5rem",
          boxSizing: "border-box",
        }}
      >
        <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", margin: "0.25rem 0" }}>
          {title}
        </h3>
        <p style={{ fontSize: "1rem", margin: 0 }}>{description}</p>
      </div>
    </motion.div>
  );
};

const TitledWebsite = () => {
  return (
    <div style={{ fontFamily: "sans-serif" , width: "100vw"}}>
      {/* Header Section */}
      <header
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          color: "black",
          padding: "2rem",
        }}
      >
        <motion.img
          src="logot.png"
          alt="TITLED logo"
          style={{ marginBottom: "2rem" }}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          draggable="false"
        />
        <img
          src="down.png"
          alt="Scroll Down Arrow"
          style={{
            width: "50px",
            height: "50px",
            marginTop: "3rem",
            animation: "bounce 1s infinite",
          }}
          onClick={() =>
            document.getElementById("about").scrollIntoView({ behavior: "smooth" })
          }
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
    position: "sticky",
    top: 0,
    backgroundColor: "white",
    zIndex: 1000,
    padding: "1rem 0",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
>
  <motion.div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap", // Allows wrapping on smaller screens
      gap: "1rem", // Space between buttons
      width: "90%", // Adjust width to prevent overcrowding
    }}
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    <button
      onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}
      style={{
        backgroundColor: "transparent",
        color: "currentColor",
        padding: "0.5rem 1rem",
        margin: "0",
        border: "1px solid currentColor",
        borderRadius: "0.25rem",
        cursor: "pointer",
        fontSize: "1rem", // Ensure font is readable on mobile
      }}
    >
      About Us
    </button>
    <button
      onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
      style={{
        backgroundColor: "transparent",
        color: "currentColor",
        padding: "0.5rem 1rem",
        margin: "0",
        border: "1px solid currentColor",
        borderRadius: "0.25rem",
        cursor: "pointer",
        fontSize: "1rem", // Ensure font is readable on mobile
      }}
    >
      Past Works
    </button>
    <button
      onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
      style={{
        backgroundColor: "transparent",
        color: "currentColor",
        padding: "0.5rem 1rem",
        margin: "0",
        border: "1px solid currentColor",
        borderRadius: "0.25rem",
        cursor: "pointer",
        fontSize: "1rem", // Ensure font is readable on mobile
      }}
    >
      Contact Us
    </button>
  </motion.div>

  {/* Inline Media Query for Mobile Scaling */}
  <style>
    {`
      @media (max-width: 768px) {
        nav {
          padding: 0.5rem;
        }
        button {
          font-size: 0.9rem;
          padding: 0.4rem 0.8rem;
        }
      }
    `}
  </style>
</nav>


      {/* About Section */}
      <Section id="about" bgColor="black" textColor="white">
        <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1.5rem" }}></h2>
        <p style={{ fontSize: "1.25rem" }}>
          TITLED is a graphic and brand design agency dedicated to creating bold,
          modern, and impactful designs for our clients. We believe in the power of
          visual communication to transform businesses and captivate audiences.
        </p>
      </Section>

      {/* Past Works Section */}
      <Section id="projects" bgColor="white" textColor="black">
        <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1.5rem" }}></h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.5rem",
          }}
        >
          <ProjectCard
            title="Competitive Math Club"
            description="Exploring innovative solutions for problem-solving."
            link="https://competitivemathclub.vercel.app/"
            bgImage="comp_math.png"
          />
          <ProjectCard
            title="Hearts of Baking"
            description="Home-based, student-owned bakery."
            link="https://heartsofbaking.vercel.app/"
            bgImage="baking.png"
          />
          <ProjectCard
            title="AI Pioneers"
            description="Artificial intelligence exposure for high-schoolers."
            link="https://aipioneers.vercel.app/"
            bgImage="ai.png"
          />
          <ProjectCard
            title="CHS Bike Club"
            description="Safe space for finding people to bike with."
            link="https://chs-bike-club.vercel.app/"
            bgImage="bike.png"
          />
          
         
        </div>
      </Section>

    {/* Contact Section */}
{/* Contact Section */}
<Section id="contact" bgColor="black" textColor="white">
  <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1.5rem" }}></h2>
  <p style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
  Ready to elevate your brand? Get in{" "}
  <a
    href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=titled.designs@gmail.com" // Replace with your URL
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: "cyan", textDecoration: "underline", cursor: "pointer" }}
  >
    touch
  </a>{" "}
  with us to discuss your next project.
</p>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    {/* Rounded Button with Mail Icon */}
   
  </div>

</Section>




    </div>
  );
};

export default TitledWebsite;
