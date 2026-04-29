import { motion } from "framer-motion";

import React from "react";
interface SectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  type?: "article" | "section";
  className?: string;
}
const Section = ({
  title,
  type = "section",
  description,
  children,
  className,
}: SectionProps) => {
  const Body = type === "section" ? motion.section : motion.article;

  const container = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <Body
      variants={container}
      initial="hidden"
      whileInView="visible"
      className={`py-12 ${className}`}
    >
      <div className="text-center mt-6 mb-12">
        <motion.h2
          variants={item}
          className="mb-3 text-gray-900 text-3xl md:text-4xl"
        >
          {title}
        </motion.h2>
        {description && (
          <motion.p variants={item} className="text-gray-600 mb-3 motion.x-3">
            {description}
          </motion.p>
        )}
      </div>

      <motion.div variants={item}>{children}</motion.div>
    </Body>
  );
};

export default Section;
