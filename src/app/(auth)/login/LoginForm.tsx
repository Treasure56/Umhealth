"use client"
import { $login } from "@/action/auth/login";
import AppInput, { AppInputProps } from "@/components/form/AppInput";
import FormButton from "@/components/form/FormButton";
import { FormMessage } from "@/components/form/FromMessage";
import { useAppActionState } from "@/hooks/useActionState";

export default function LoginForm() {
   const { state, action, submitting } = useAppActionState($login);
  return (
    <form action={action} className="flex flex-col gap-4 mt-4">
      <FormMessage res={state} />
      <div className="flex flex-col gap-4">
        {formFields.map((field) => (
          <AppInput  error={state?.fieldErrors?.[field.name]} key={field.name} {...field} />
        ))}
      </div>
      <FormButton loading={submitting} className="btn btn-primary !py-3 rounded-md !text-base mt-2 ">Login</FormButton>
    </form>
  );
}

export const formFields: AppInputProps[] = [
  {
    title: "Email Address",
    name: "email",
    type: "email",
    placeholder: "Enter your email address",
  },
  {
    title: "Password",
    name: "password",
    type: "password",
    placeholder: "Enter your password",
  },
];
