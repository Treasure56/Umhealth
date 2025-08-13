import { Doctor } from "@/types/doctor";
import { api } from "@/utils/apis";
import { AuthFetch } from "@/utils/authFetch";

export async function $fetchAllDoctors(): Promise<Doctor[]> {
  const res = await AuthFetch.get(api.user.fetchAllDoctors);
  console.log({ res });
  if (!res) {
    throw new Error("Failed to fetch all doctors");
  }
  if (!Array.isArray(res)) {
    throw new Error("Invalid doctors data");
  }

  return res as unknown as Doctor[];
}
