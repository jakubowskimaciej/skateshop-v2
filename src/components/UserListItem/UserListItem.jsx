const UserListItem = ({ itemData: { name, average, attendance } }) => {
  const averageColor = (average) => {
    if (average >= 4) return 'bg-[#34d399]';
    if (average >= 3) return 'bg-[#fbbf24]';
    if (average > 1) return 'bg-[#f87171]';
    else return 'bg-slate-300';
  };

  return (
    <li className="flex items-center p-4">
      <div className={`flex h-10 w-10 items-center justify-center rounded-full ${averageColor(average)} text-white  `}>{average}</div>
      <div className="py-4 px-8">
        <p>{name}</p>
        <p>attendance: {attendance}</p>
      </div>
      <button className="text-l flex h-8 w-8 items-center justify-center rounded-full bg-slate-400 py-2 px-2 font-bold text-white">X</button>
    </li>
  );
};

export default UserListItem;
