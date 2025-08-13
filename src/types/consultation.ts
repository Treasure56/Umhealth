export type Consultation = {
    id: number | string;
    visitor_id: number;
    doctor_name: string;
    doctor_department: string;
    visit_date: string;
    visit_time: string;
    reason_for_visit: string;
}
export const dummyConsultations: Consultation[] = [
    {
        id: "1",
        visitor_id: 1,
        doctor_name: "Dr. John Doe",
        doctor_department: "Cardiology",
        visit_date: "2022-01-01",
        visit_time: "10:00 AM",
        reason_for_visit: "Checkup",
    },
    {
        id: "2",
        visitor_id: 2,
        doctor_name: "Dr. Smith Doe",
        doctor_department: "Neurology",
        visit_date: "2022-01-02",
        visit_time: "11:00 AM",
        reason_for_visit: "Lab Test",
    },
    {
        id: "3",
        visitor_id: 3,
        doctor_name: "Dr. Jane Doe",
        doctor_department: "Gastroenterology",
        visit_date: "2022-01-03",
        visit_time: "12:00 PM",
        reason_for_visit: "Follow up",
    },
];
