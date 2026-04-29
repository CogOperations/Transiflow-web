const Tag = ({ label, className }: { label: string; className?: string }) => {
  return (
    <div
      className={`mx-auto w-fit px-6 py-2 capitalize rounded-full bg-blue-100 text-blue-800 text-sm font-medium ${className}`}
    >
      {label}
    </div>
  );
};

export default Tag;
