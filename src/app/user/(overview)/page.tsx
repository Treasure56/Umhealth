import AppointmentsMetCard from "./AppointmentsMetCard";
import LabResultCard from "./LabResultCard";
import PatientRecord from "./PatientRecord";
import PendingBookings from "./PendingBookings";
import Profile from "./Profile";
import VisitationStats from "./Stats";
import TotalVisitsCard from "./TotalVisitsCard";
import Schedule from "./Schedule";
import { $fetchDashboardData } from "@/action/user/fetchDashboardData";

export default async function Page() {
  const dashboardData = await $fetchDashboardData();


  return (
    <div className="flex flex-col gap-8 ">
      <h2 className="text-xl font-medium">Patient Record</h2>

      <div className="grid md:grid-cols-12 gap-4">
        <div className="md:col-span-9">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <TotalVisitsCard value={dashboardData.total_visits} />
            <AppointmentsMetCard value={dashboardData.total_met} />
            <PendingBookings value={dashboardData.total_pending} />
            <LabResultCard value={dashboardData.total_results_viewed} />
          </div>

          <VisitationStats />
          <Schedule />
        </div>
        <div className="md:col-span-3 flex flex-col gap-3">
            <Profile />
            <PatientRecord />
        </div>
      </div>
    </div>
  );
}
