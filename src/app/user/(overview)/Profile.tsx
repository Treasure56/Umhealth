"use client"
import ProfileCard from "@/components/user/ProfileCard";
import { useUserStore } from "@/store/userStore";
import { dummyUser } from "@/types/user";


export default function Profile() {
    const user = useUserStore(s => s.user);
    if (user)
    return (
        <div>
            <ProfileCard {...user} />
        </div>
    );
}