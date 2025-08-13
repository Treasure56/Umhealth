import OverviewCard from "@/components/user/OverviewCard";
import AppIcons from "../../../utils/AppIcons";

export default function AppointmentsMetCard({value}:{value:number}) {
    return (
        <OverviewCard
            isPositive={false}
            title="Appointments Met"
            value={value}
            percentageChange={18}
            icon={<AppIcons.Appointments className="size-[30px]" />}
        />
    );
}