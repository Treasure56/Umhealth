import AppInput, { AppInputProps } from "@/components/form/AppInput";
import FormButton from "@/components/form/FormButton";
import { paths } from "@/utils/paths";
import Link from "next/link";

export default function RegisterForm() {
  return (
    <form action="" className="flex flex-col gap-4 mt-4">
      <div className="flex flex-col gap-4">
        {formFields.map((field) => (
          <AppInput key={field.name} {...field} />
        ))}
      </div>
      <FormButton className="btn btn-primary !py-3 rounded-md !text-base mt-2 ">
        Sign Up
      </FormButton>
      <p className="text-base text-gray-500">Already have an account? <Link href={paths.login} className="text-brand-primary">Login</Link></p>
    </form>
  );
}

export const formFields: AppInputProps[] = [
  {
    title: "Full Name",
    name: "name",
    placeholder: "Enter your full name",
  },
  {
    title: "Email Address",
    name: "email",
    type: "email",
    placeholder: "Enter your email address",
  },
  {
    title: "Phone Number",
    name: "phone",
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
];
