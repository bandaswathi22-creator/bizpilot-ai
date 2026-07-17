type DashboardCardProps = {
  title: string;
  value: string;
};

export default function DashboardCard({
  title,
  value,
}: DashboardCardProps) {
  return (
    <div
      className="
        bg-gray-900
        border border-gray-800
        rounded-2xl
        p-6
        transition
        hover:border-blue-500
        hover:scale-105
        duration-300
      "
    >

      <p className="text-gray-400 text-sm uppercase tracking-wide">
        {title}
      </p>


      <h2 className="text-4xl font-bold text-white mt-3">
        {value}
      </h2>


      <div className="mt-4 h-1 w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
      </div>


      <p className="text-xs text-green-400 mt-3">
        🟢 AI monitored
      </p>

    </div>
  );
}