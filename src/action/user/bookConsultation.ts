"use server";

import { formDataToObject } from "@/functions/helpers";
import { ActionResponse } from "@/types";
import { api } from "@/utils/apis";
import { AuthFetch } from "@/utils/authFetch";
import { paths } from "@/utils/paths";
import { revalidatePath } from "next/cache";
import z from "zod";
const schema = z.object({
  doctor_name: z.string().min(2).max(100),
  doctor_department: z.string().min(2).max(100),
  visit_date: z.string().min(2).max(100),
  visit_time: z.string().min(2).max(100),
  reason_for_visit: z.string().min(2).max(100),
});
type FormType = z.infer<typeof schema>;

export async function $bookConsultation(
  _: ActionResponse,
  formData: FormData
): Promise<ActionResponse> {
  const data = formDataToObject<FormType>(formData);
  const validate = schema.safeParse(data);
  if (!validate.success) {
    return { fieldErrors: validate.error.flatten().fieldErrors };
  }
  //   make api request
  const res = await AuthFetch.post(api.user.bookConsultation, data);
  console.log({ res, data });

  if (!res) return { error: "Failed to book consultation" };

  if (!res.consultation)
    return {
      error: res.message ?? "Something went wrong",
    };

    revalidatePath(paths.consultations);
  return { success: res?.message ?? "Consultation booked successfully" };
}
