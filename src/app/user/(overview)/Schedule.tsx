import ScheduleOverviewCard from "@/components/user/ScheduleOverviewCard";
import { dummySchedule } from "@/types/schedule";

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