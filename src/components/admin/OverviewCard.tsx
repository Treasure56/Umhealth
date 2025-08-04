import { ReactNode } from "react";
import { FiCalendar } from "react-icons/fi";
import { LuArrowDownRight, LuArrowUpRight } from "react-icons/lu";

export type OverviewCardProps = {
  title: string;
  value: number;
  percentageChange: number;
  icon: ReactNode;
  isPositive: boolean;
};

export default function OverviewCard({
  title,
  value,
  percentageChange,
  icon,
  isPositive,
}: OverviewCardProps) {
  const stat = !isPositive ? (
    <span className="flex items-center gap-1 text-sm rounded-lg border border-red-300/20 px-2 text-red-300">
      {percentageChange}%
      <LuArrowDownRight className="text-red-500" />
    </span>
  ) : (
    <span className="flex items-center gap-1 text-sm rounded-lg border border-brand-primary/20 px-2 text-brand-primary">
      {percentageChange}%
      <LuArrowUpRight className="text-green-500" />
    </span>
  );

  return (
    <div className="flex flex-col bg-white rounded-lg shadow p-4 gap-2">
      <div className="flex gap-3 items-center">
        {icon}
        <h3 className="text-xs font-semibold">{title}</h3>
      </div>
      <div className="flex justify-between">
        <span className="text-lg font-semibold">{value}</span>
        {stat}
      </div>
    </div>
  );
}
