import Tag from "./Tag";
import { motion, easeInOut } from "framer-motion";

const Card = ({
  variant,
  className,
  icon,
  title,
  description,
  bodyFontSize,
  bodyColor,
  color,
  paperColor,
}) => {
  let baseClasses = "p-3 rounded-xl flex flex-col";

  if (variant === "primary") {
    baseClasses += " border border-gray-200 text-left py-4 px-6";
  } else if (variant === "secondary") {
    baseClasses += " py-10 px-8 text-left";
  } else if (variant === "tertiary") {
    baseClasses += " px-3 px-6 mx-auto w-35 text-center items-center";
  } else if (variant === "dashed") {
    baseClasses +=
      " bg-white p-6 rounded-xl border-2 border-dashed border-gray-300 text-center items-center justify-center";
  }

  if (variant === "benefit") {
    baseClasses += " items-center";
  }

  const colorClasses = {
    blue: "text-blue-600 bg-blue-50",
    green: "text-green-600 bg-green-50",
    orange: "text-orange-600 bg-orange-50",
    red: "text-red-600 bg-red-50",
    purple: "text-purple-600 bg-purple-50",
    indigo: "text-indigo-600 bg-indigo-50",
  };

  const iconColor = colorClasses[color];

  const bgColorClasses = {
    blue: "bg-blue-50",
    green: "bg-green-50",
    red: "bg-red-50",
    purple: "bg-purple-50",
    indigo: "bg-indigo-50",
  };

  const bgColor = paperColor ? bgColorClasses[paperColor] : "";

  if (variant === "dashed") {
    return (
      <div className={`${baseClasses} ${className}`}>
        {icon && (
          <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 text-gray-600 rounded-lg mb-3">
            {icon}
          </div>
        )}

        {title && <h4 className="font-light text-xl mb-2">{title}</h4>}

        {description && (
          <p
            className={`max-w-100 mx-auto ${bodyFontSize}`}
            style={{
              color: bodyColor
                ? bodyColor.replace("text-", "")
                : undefined,
            }}
          >
            {description}
          </p>
        )}

        <div>
          <Tag
            label="Coming Soon"
            className="text-sm text-yellow-600 bg-yellow-50 px-3 py-1"
          />
        </div>
      </div>
    );
  }

  const container = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: easeInOut,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      className={`${baseClasses} ${className} ${bgColor}`}
    >
      {icon && (
        <motion.div
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, repeat: 2, ease: "easeIn" }}
          className={`mb-3 ${iconColor} w-fit ${
            variant === "benefit"
              ? "rounded-full p-6"
              : "rounded-lg p-3"
          }`}
        >
          {icon}
        </motion.div>
      )}

      {title && (
        <motion.h4 variants={item} className="font-light text-lg mb-2">
          {title}
        </motion.h4>
      )}

      {description && (
        <motion.p
          variants={item}
          className={`${bodyFontSize} text-gray-500 ${
            variant === "benefit" ? "text-center" : ""
          }`}
          style={{
            color: bodyColor
              ? bodyColor.replace("text-", "")
              : undefined,
          }}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};

export default Card;