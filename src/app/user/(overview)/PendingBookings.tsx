import OverviewCard from "@/components/user/OverviewCard";
import AppIcons from "../../../utils/AppIcons";

export default function PendingBookings({value}:{value:number}) {
    return (
        <OverviewCard
            isPositive
            title="Pending Bookings"
            value={value}
            percentageChange={0.45}
            icon={<AppIcons.Bookings className="size-[30px]" />}
        />
    );
}