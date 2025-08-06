import ProfileCard from "@/components/user/ProfileCard";
import { dummyUser } from "@/type/user";


export default function Profile() {
    const user = dummyUser;
    return (
        <div>
            <ProfileCard {...user} />
        </div>
    );
}