import { dummyUser } from "@/type/user";
import ProfileCard from "../../../components/admin/ProfileCard";


export default function Profile() {
    const user = dummyUser;
    return (
        <div>
            <ProfileCard {...user} />
        </div>
    );
}