import OverviewCard from "@/components/admin/OverviewCard";
import AppIcons from "../utils/AppIcons";

export default function AppointmentsMetCard() {
    return (
        <OverviewCard
            isPositive={false}
            title="Appointments Met"
            value={186}
            percentageChange={18}
            icon={<AppIcons.Appointments className="size-[30px]" />}
        />
    );
}