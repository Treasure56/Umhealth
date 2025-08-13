import OverviewCard from "@/components/user/OverviewCard";
import AppIcons from "../../../utils/AppIcons";

export default function LabResultCard({value}:{value:number}) {
    return (
        <OverviewCard
        isPositive
            title="Lab Results Viewed"
            value={value}
            percentageChange={8.45}
            icon={<AppIcons.Bookings className="size-[30px]" />}
        />
    );
}