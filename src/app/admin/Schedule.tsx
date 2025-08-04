import ScheduleOverviewCard from "@/components/admin/ScheduleOverviewCard";
import { dummySchedule } from "@/type/schedule";

export default function Schedule() {
    const schedule = dummySchedule;
    return (
        <div className="flex flex-col gap-4">
            {schedule.map((item, index) => (
                <ScheduleOverviewCard key={index} {...item} />
            ))}
        </div>
    );
}