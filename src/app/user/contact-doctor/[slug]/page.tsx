import { $fetchAllDoctors } from "@/action/user/fetchAllDoctors";
import { AppPageProps } from "@/types";
import { notFound } from "next/navigation";
import ChatView from "./ChatView";

export default async function Page({ params }: AppPageProps<{ slug: string }>) {
  const doctors = await $fetchAllDoctors();
  const slug = (await params!).slug.toString();
  const doctor = doctors.find(
    (doc) => doc.id.toString() == slug
  );

  if (!doctor) return notFound();
  return (
    <main>
      <ChatView doctor={doctor} />
      {/* <QuickbloxUiKitExample /> */}
    </main>
  );
}
