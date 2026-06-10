import { motion, easeOut } from "framer-motion";
import { Twitter, Linkedin, Instagram, Mail } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: easeOut },
  },
};

const socialsArray = [
  { icon: Twitter, link: "https://x.com/transiflow93" },
  {
    icon: Linkedin,
    link: "https://www.linkedin.com/company/transiflow93/posts/?feedView=all",
  },
  { icon: Instagram, link: "" },
  { icon: Mail, link: "mailto:transiflow93@gmail.com" },
];

const Socials = ({ color = "inherit", direction, center }) => {
  return (
    <motion.div
      variants={container}
      className={color === "white" ? "text-white" : "text-inherit"}
    >
      <motion.h4 variants={item} className="mb-4 text-2xl">
        Connect
      </motion.h4>

      <motion.div
        variants={container}
        className={`flex space-x-4 ${
          center ? "justify-center" : ""
        } ${
          direction ? "flex-col space-x-0 space-y-4" : ""
        }`}
      >
        {socialsArray.map((social, i) => {
          const Icon = social.icon;

          return (
            <motion.a
              key={i}
              variants={item}
              href={social.link}
              target="_blank"
              whileHover={{ y: -2, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="hover:text-white transition-colors"
            >
              <Icon size={20} />
            </motion.a>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Socials;