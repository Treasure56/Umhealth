"use client"
import { $register } from "@/action/auth/register";
import AppInput, { AppInputProps } from "@/components/form/AppInput";
import FormButton from "@/components/form/FormButton";
import { FormMessage } from "@/components/form/FromMessage";
import { useAppActionState } from "@/hooks/useActionState";
import { paths } from "@/utils/paths";
import Link from "next/link";

export default function RegisterForm() {
   const { state, action, submitting } = useAppActionState($register);
  return (
    <form action={action} className="flex flex-col gap-4 mt-4">
      <div className="flex flex-col gap-4">
        {formFields.map((field) => (
          <AppInput  error={state?.fieldErrors?.[field.name]} key={field.name} {...field} />
        ))}
      </div>
      <FormMessage res={state} />
      <FormButton loading={submitting} className="btn btn-primary !py-3 rounded-md !text-base mt-2 ">
        Sign Up
      </FormButton>
      <p className="text-base text-gray-500">Already have an account? <Link href={paths.login} className="text-brand-primary">Login</Link></p>
    </form>
  );
}

export const formFields: AppInputProps[] = [
  {
    title: "first name",
    name: "first_name",
    placeholder: "Enter your first name",
  },
  {
    title: "Last Name",
    name: "last_name",
    placeholder: "Enter your last name",
  },
  {
    title: "Email Address",
    name: "email",
    type: "email",
    placeholder: "Enter your email address",
  },
  {
    title: "Phone Number",
    name: "phone_number",
    type: "tel",
    placeholder: "Enter your phone number",
  },
  {
    title: "Password",
    name: "password",
    type: "password",
    placeholder: "Enter your password",
  },
  {
    title: "Confirm Password",
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirm your password",
  },
  {
    title: "Address",
    name: "address",
    placeholder: "Enter your address",
  },
];
