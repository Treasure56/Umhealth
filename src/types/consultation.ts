export type Consultation = {
    _id: string;
    visitorId: number;
    doctorName: string;
    doctorDepartment: string;
    visitDate: string;
    visitTime: string;
    reasonForVisit: string;
}
export const dummyConsultations: Consultation[] = [
    {
        _id: "1",
        visitorId: 1,
        doctorName: "Dr. John Doe",
        doctorDepartment: "Cardiology",
        visitDate: "2022-01-01",
        visitTime: "10:00 AM",
        reasonForVisit: "Checkup",
    },
    {
        _id: "2",
        visitorId: 2,
        doctorName: "Dr. Smith Doe",
        doctorDepartment: "Neurology",
        visitDate: "2022-01-02",
        visitTime: "11:00 AM",
        reasonForVisit: "Lab Test",
    },
    {
        _id: "3",
        visitorId: 3,
        doctorName: "Dr. Jane Doe",
        doctorDepartment: "Gastroenterology",
        visitDate: "2022-01-03",
        visitTime: "12:00 PM",
        reasonForVisit: "Follow up",
    },
];
