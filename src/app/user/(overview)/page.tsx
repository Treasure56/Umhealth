import AppointmentsMetCard from "./AppointmentsMetCard";
import LabResultCard from "./LabResultCard";
import PatientRecord from "./PatientRecord";
import PendingBookings from "./PendingBookings";
import Profile from "./Profile";
import VisitationStats from "./Stats";
import TotalVisitsCard from "./TotalVisitsCard";
import Schedule from "./Schedule";

export default function Page() {
  return (
    <div className="flex flex-col gap-8 ">
      <h2 className="text-xl font-medium">Patient Record</h2>

      <div className="grid md:grid-cols-12 gap-4">
        <div className="md:col-span-9">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <TotalVisitsCard />
            <AppointmentsMetCard />
            <PendingBookings />
            <LabResultCard />
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
