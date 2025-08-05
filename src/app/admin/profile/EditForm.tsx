import AppInput, { AppInputProps } from "@/components/form/AppInput";
import FormButton from "@/components/form/FormButton";

export default function EditForm() {
  return (
    <form className="flex flex-col gap-4">
      <div className="grid md:grid-cols-2 gap-4">
        {formFields.map((field) => (
          <AppInput key={field.name} {...field} />
        ))}
      </div>
      <FormButton className="btn btn-primary !py-3 rounded-md !text-base mt-2 ">
        save
      </FormButton>
    </form>
  );
}

const formFields: AppInputProps[] = [
  {
    name: "fullname",
    title: "Full Name",
    placeholder: "Enter your full name",
  },
  {
    name: "email",
    title: "Email Address",
    placeholder: "Enter your email address",
  },
  {
    name: "phone",
    title: "Phone Number",
    placeholder: "Enter your phone number",
  },
  {
    name: "displayphoto",
    title: "Upload Display Photo",
    placeholder: "Upload your display photo",
    type: "file",
  },
  {
    name: "address",
    title: "Address",
    placeholder: "Enter your address",
  },
  {
    name: "password",
    title: "Password",
    placeholder: "Enter your password",
    type: "password",
  },
  {
    name: "confirmpassword",
    title: "Confirm Password",
    placeholder: "Confirm your password",
    type: "password",
  },
];
