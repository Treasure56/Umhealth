"use client";
import { $updateAccount } from "@/action/user/updateAccount";
import AppInput, { AppInputProps } from "@/components/form/AppInput";
import FormButton from "@/components/form/FormButton";
import { FormMessage } from "@/components/form/FromMessage";
import { useAppActionState } from "@/hooks/useActionState";
import { useUserStore } from "@/store/userStore";

export default function EditForm() {
  const user = useUserStore((s) => s.user);
  const formFields: AppInputProps[] = [
    {
      name: "first_name",
      title: "First Name",
      placeholder: "Enter your name",
        value: user?.name.split(" ")[0],
      },
    {
      name: "last_name",
      title: "Last Name",
      placeholder: "Enter your last name",
      value: user?.name.split(" ").slice(1).join(" "),
      },
    {
      name: "display_picture",
      title: "Upload Display Photo",
      placeholder: "Upload your display photo",
      type: "file",
    },
    {
      name: "address",
      title: "Address",
      placeholder: "Enter your address",
      value: user?.location,
    },
  ];

  const { state, action, submitting } = useAppActionState($updateAccount);
  return (
    <form action={action} className="flex flex-col gap-4 w-full max-w-[600px]">
      <FormMessage res={state} />
      <div className="grid  gap-4">
        {formFields.map((field) => (
          <AppInput key={field.name} {...field} error={state.fieldErrors?.[field.name]} />
        ))}
      </div>
      <FormButton
        loading={submitting}
        className="btn btn-primary !py-3 rounded-md !text-base mt-2 "
      >
        save
      </FormButton>
    </form>
  );
}
