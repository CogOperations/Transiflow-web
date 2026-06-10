const PageWrapper = ({ children }) => {
  return (
    <div className="container mx-auto px-4 typography flex flex-col gap-10">
      {children}
    </div>
  );
};

export default PageWrapper;