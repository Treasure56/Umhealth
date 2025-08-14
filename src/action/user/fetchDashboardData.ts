import { UserWithDashboard } from "@/types/user";
import { api } from "@/utils/apis";
import { AuthFetch } from "@/utils/authFetch";

export async function $fetchDashboardData(): Promise<UserWithDashboard> {
    const res = await AuthFetch.get(api.user.fetchDashboardData);
    // console.log({res})
    if (!res) {
        throw new Error("Failed to fetch dashboard data");
    }if (!res.id) {
        throw new Error("Invalid dashboard data");
    }
    return res as unknown as UserWithDashboard;
}