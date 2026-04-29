interface TeamCardProps {
  name: string;
  role: string;
  imageUrl: string;
}

const TeamCard = ({ name, role, imageUrl }: TeamCardProps) => {
  return (
    <div className="p-4 rounded-xl shadow-sm border border-gray-50 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center bg-white">
      <div className="w-24 h-24 rounded-full mb-4 overflow-hidden">
        <img src={imageUrl} alt={name + "'s image"} />
      </div>
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-500">{role}</p>
    </div>
  );
};

export default TeamCard;
