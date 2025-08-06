import ProfileCard from "@/components/user/ProfileCard";
import { dummyUser } from "@/types/user";


export default function Profile() {
    const user = dummyUser;
    return (
        <div>
            <ProfileCard {...user} />
        </div>
    );
}