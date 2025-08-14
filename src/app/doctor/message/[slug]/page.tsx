import { $fetchAllDoctors } from "@/action/user/fetchAllDoctors";
import ChatView from "./ChatView";
import { AppPageProps } from "@/types";
import { notFound } from "next/navigation";

export default async function Page({ params }: AppPageProps<{ slug: string }>) {
  const doctors = await $fetchAllDoctors();
  const doctor = doctors.find(
    async (doc) => doc.id.toString() === (await params!).slug
  );

  if (!doctor) return notFound();

  return (
    <main>
      <ChatView doctor={doctor} />
    </main>
  );
}
