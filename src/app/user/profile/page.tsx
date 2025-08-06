import EditForm from "./EditForm";

export default function Page() {
  return (
    <div className="flex flex-col py-6 gap-5 mx-auto">
      <h2 className="text-2xl font-bold">Edit Profile</h2>
      <EditForm />
    </div>
  );
}
