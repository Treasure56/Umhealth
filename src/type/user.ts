export type User = {
  id: number;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
  location?: string;
  first_consultation?: string;
  last_consultation?: string;
  records?: string[];
  
};

export const dummyUser: User = {
  id: 1,
  name: "Dominic Evans",
  email: "m4o4k@example.com",
  created_at: "2022-01-01",
  updated_at: "2022-01-01",
  location: "Lagos, Nigeria",
  first_consultation: "2022-01-01",
  last_consultation: "2022-01-01",
  records: [
    "Checkup results.pdf",
    "Lab Test results 3.pdf",
    "Lab Test results 2.pdf",
    "Lab Test results 1.pdf",
  ],

};
