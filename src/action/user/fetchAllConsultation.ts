import { Consultation } from "@/types/consultation";
import { api } from "@/utils/apis";
import { AuthFetch } from "@/utils/authFetch";

export async function $fetchAllConsultations(): Promise<Consultation[]> {
  const res = await AuthFetch.get(api.user.fetchAllConsultations);
  console.log({ res });
  if (!res) {
    throw new Error("Failed to fetch all consultations");
  }
  if (!Array.isArray(res)) {
    throw new Error("Invalid consultations data");
  }

  return res as unknown as Consultation[];
}
