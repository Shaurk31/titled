import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion

const Section = ({ children, bgColor, textColor, id }) => (
  <motion.section
    id={id}
    style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem",
      backgroundColor: bgColor,
      color: textColor,
    }}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div style={{ maxWidth: "800px", width: "100%", textAlign: "center" }}>
      {children}
    </div>
  </motion.section>
);

export default Section; // Export the Section component
