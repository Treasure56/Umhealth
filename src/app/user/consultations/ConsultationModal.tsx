import AppInput from "@/components/form/AppInput";
import AppSelect from "@/components/form/AppSelect";
import FormButton from "@/components/form/FormButton";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

export default function ConsultationModal({ children }: { children: ReactNode }) {
    return (
        <Dialog>
            <DialogTrigger>{children}</DialogTrigger>
            <DialogContent className="overflow-y-auto max-h-[90vh]">
                <DialogHeader>
                    <DialogTitle>Book New Consultation</DialogTitle>
                    <DialogDescription className="flex flex-col gap-4">
                        <AppInput name="fullname" placeholder="Enter your full name" title="Full Name" />
                        <AppInput name="email" placeholder="Enter your email" title="Email" />
                        <AppInput name="phone" placeholder="Enter your phone number" title="Phone Number" />
                        <AppSelect name="service" title="Service" options={["Option 1", "Option 2", "Option 3"]} />
                        <AppSelect name="doctor" title="Select Doctor" options={["Option 1", "Option 2", "Option 3"]} />
                        <AppInput placeholder="" name="date" type="date" title="Select Date" />
                        <AppInput placeholder="" name="time" type="time" title="Select Time" />
                        <AppSelect name="reason" title="Reason for Consultation" options={["Option 1", "Option 2", "Option 3"]} />
                        <FormButton className="btn btn-primary !py-3 rounded-md !text-base mt-2 inline-flex gap-2 ">
                            Book a Consultation <ArrowRight />
                        </FormButton>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}