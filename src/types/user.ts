export type User = {
  id: number;
  name: string;
  email: string;
  date_joined: string;
  last_login?: string;
  location?: string;
  first_consultation?: string;
  last_consultation?: string;
  display_picture?: string;
  records?: UserRecord[];
};

type Consultation = {
  visitDate: string;
  ReasonForVisit: string;
  staff: string;
};

type MonthlyVisit = {
  month: string;
  count: number;
};


export type UserWithDashboard = User &{
  latest_consultations: Consultation[];
  total_visits: number;
  total_met: number;
  total_pending: number;
  total_results_viewed: number;
  monthly_visits: MonthlyVisit[];
}

export type UserRecord = {
  _id: string;
  createdAt: string; // Date of the record
  type: string; // e.g., "Lab Test", "X-Ray", etc.
  fileUrl: string; // URL to access the record file
};

export const dummyUser: User = {
  id: 1,
  name: "Dominic Evans",
  email: "m4o4k@example.com",
  date_joined: "2022-01-01",
  last_login: "2022-01-01",
  location: "Lagos, Nigeria",
  first_consultation: "2022-01-01",
  last_consultation: "2022-01-01",
  display_picture: "/images/profile.png",
  records: [
    {
      type: "Lab Test",
      _id: "kwnoek",
      createdAt: "2022-01-01",
      fileUrl: "https://example.com/lab-test.pdf",
    },
    {
      type: "X-Ray",
      _id: "kwnok",
      createdAt: "2022-01-01",
      fileUrl: "https://example.com/x-ray.pdf",
    },
    {
      type: "Prescription",
      _id: "kwnoek",
      createdAt: "2022-01-01",
      fileUrl: "https://example.com/prescription.pdf",
    },
  ],
};

export const dummyUsers = Array(5)
  .fill(1)
  .map((_, i) => {
    return {
      ...dummyUser,
      id: String(i + 1),
    };
  });
