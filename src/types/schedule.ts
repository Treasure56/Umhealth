export type Schedule = {
  visitDate: string;
  ReasonForVisit: string;
  staff: string;
};

export const dummySchedule: Schedule[] = [
  {
    visitDate: "2022-01-01",
    ReasonForVisit: "Checkup",
    staff: "Dr. John Doe",
  },
  {
    visitDate: "2022-01-01",
    ReasonForVisit: "Hospitalization",
    staff: "Dr. Smith Doe",
  },
];