import OverviewCard from "@/components/user/OverviewCard";
import AppIcons from "../../../utils/AppIcons";

export default function TotalVisitsCard({value,}:{value:number}) {
    return (
        <OverviewCard
         isPositive
            title="Total Visits"
            value={value}
            percentageChange={0.45}
            icon={<AppIcons.Visits className="size-[30px]" />}
        />
    );
}