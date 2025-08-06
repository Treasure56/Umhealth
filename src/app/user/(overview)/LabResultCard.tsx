import OverviewCard from "@/components/user/OverviewCard";
import AppIcons from "../../utils/AppIcons";

export default function LabResultCard() {
    return (
        <OverviewCard
        isPositive
            title="Lab Results Viewed"
            value={186}
            percentageChange={8.45}
            icon={<AppIcons.Bookings className="size-[30px]" />}
        />
    );
}