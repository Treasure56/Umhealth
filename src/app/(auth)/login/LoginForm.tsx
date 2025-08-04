import AppInput, { AppInputProps } from "@/components/form/AppInput";
import FormButton from "@/components/form/FormButton";

export default function LoginForm() {
  return (
    <form action="" className="flex flex-col gap-4 mt-4">
      <div className="flex flex-col gap-4">
        {formFields.map((field) => (
          <AppInput key={field.name} {...field} />
        ))}
      </div>
      <FormButton className="btn btn-primary !py-3 rounded-md !text-base mt-2 ">Login</FormButton>
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
