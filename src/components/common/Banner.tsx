interface BannerProps {
  title: string;
  subtitle?: string;
  className?: string;
  headingLevel?: "h1" | "h2" | "h3";
  children?: React.ReactNode;
}

const Banner = ({
  title,
  subtitle,
  className = "",
  headingLevel = "h2",
  children,
}: BannerProps) => {
  const Heading = headingLevel;

  return (
    <div className={`text-center py-18 px-4 ${className}`}>
      <Heading className="font-normal text-inherit text-5xl mx-auto mb-4">
        {title}
      </Heading>

      {subtitle && (
        <p className="mt-2 text-base text-inherit px-6">{subtitle}</p>
      )}
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
};

export default Banner;
