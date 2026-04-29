interface CardGridProps {
  children: React.ReactNode;
}

const CardGrid = ({ children }: CardGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto px-3">
      {children}
    </div>
  );
};

export default CardGrid;
