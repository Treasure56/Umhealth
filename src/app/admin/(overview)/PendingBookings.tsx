import OverviewCard from "@/components/admin/OverviewCard";
import AppIcons from "../../utils/AppIcons";

export default function PendingBookings() {
    return (
        <OverviewCard
            isPositive
            title="Pending Bookings"
            value={186}
            percentageChange={0.45}
            icon={<AppIcons.Bookings className="size-[30px]" />}
        />
    );
}