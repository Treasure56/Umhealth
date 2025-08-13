export type Notification = {
    id:number | string;
    img:string;
    title:string;
    description:string;
    date:string;
}

export const dummyNotifications: Notification[] = [
    {
        id: "1",
        img: "/images/profile.png",
        title: "Appointment Confirmed",
        description: "Your consultation with Dr. John Doe is scheduled for Thursday at 10:00 AM.",
        date: "Thursday, 31st Dec at 09:32pm"
    },
    {
        id: "2",
        img: "/images/profile.png",
        title: "Lab Result Ready",
        description: "Your lab result for the test taken on 24th Dec is ready.",
        date: "Friday, 1st Jan at 10:00 AM"
    },
    {
        id: "3",
        img: "/images/profile.png",
        title: "Reminder",
        description: "You have a consultation with Dr. Smith Doe scheduled for tomorrow at 11:00 AM.",
        date: "Wednesday, 29th Dec at 09:32pm"
    },
]
