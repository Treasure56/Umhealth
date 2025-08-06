export type User = {
  id: number;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
  location?: string;
  first_consultation?: string;
  last_consultation?: string;
  records?: UserRecord[];
};

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
  created_at: "2022-01-01",
  updated_at: "2022-01-01",
  location: "Lagos, Nigeria",
  first_consultation: "2022-01-01",
  last_consultation: "2022-01-01",
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
