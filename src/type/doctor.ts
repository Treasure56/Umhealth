export type Doctor = {
  id: number;
  name: string;
  email: string;
  department: string;
  phone: string;
  about: string;
  image: string;
};

export const dummyDoctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. John Doe",
    email: "johndoe@example.com",
    department: "Cardiology",
    phone: "08012345678",
    about: "Dr. John Doe is a Cardiologist with over 10 years of experience.",
    image: "/images/profile.png",
  },
  {
    id: 2,
    name: "Dr. Jane Doe",
    email: "janedoe@example.com",
    department: "Neurology",
    phone: "08012345679",
    about: "Dr. Jane Doe is a Neurologist with over 10 years of experience.",
    image: "/images/profile.png",
  },
  {
    id: 3,
    name: "Dr. Smith Doe",
    email: "smithdoe@example.com",
    department: "Gastroenterology",
    phone: "08012345670",
    about:
      "Dr. Smith Doe is a Gastroenterologist with over 10 years of experience.",
    image: "/images/profile.png",
  },
  {
    id: 4,
    name: "Dr. Michael Doe",
    email: "michaeldoe@example.com",
    department: "Urology",
    phone: "08012345671",
    about: "Dr. Michael Doe is a Urologist with over 10 years of experience.",
    image: "/images/profile.png",
  },
  {
    id: 5,
    name: "Dr. David Doe",
    email: "daviddoe@example.com",
    department: "Ophthalmology",
    phone: "08012345672",
    about:
      "Dr. David Doe is an Ophthalmologist with over 10 years of experience.",
    image: "/images/profile.png",
  },
  {
    id: 6,
    name: "Dr. James Doe",
    email: "jamesdoe@example.com",
    department: "Orthopedics",
    phone: "08012345673",
    about: "Dr. James Doe is an Orthopedist with over 10 years of experience.",
    image: "/images/profile.png",
  },
];
