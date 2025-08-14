import { $fetchAllConsultations } from "@/action/user/fetchAllConsultation";
import ScheduleOverviewCard from "@/components/user/ScheduleOverviewCard";

export default async function Schedule() {
    const schedule = await $fetchAllConsultations();
    return (
        <section>
            <h2 className="text-lg font-semibold mb-4">Schedule Overview</h2>
            <div className="flex flex-col gap-4">
            {schedule.slice(0, 2).map((item, index) => (
                <ScheduleOverviewCard key={index} {...item} />
            ))}
        </div>
        </section>
    );
}