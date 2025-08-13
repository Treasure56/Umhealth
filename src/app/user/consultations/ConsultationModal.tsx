"use client"
import { $bookConsultation } from "@/action/user/bookConsultation";
import AppInput from "@/components/form/AppInput";
import AppSelect from "@/components/form/AppSelect";
import FormButton from "@/components/form/FormButton";
import { FormMessage } from "@/components/form/FromMessage";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useAppActionState } from "@/hooks/useActionState";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

export default function ConsultationModal({
  children,
}: {
  children: ReactNode;
}) {
  const { state, action, submitting, formKey, modalProps } = useAppActionState($bookConsultation);

  return (
    <Dialog {...modalProps}>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="overflow-y-auto max-h-[90vh]">
        <DialogHeader>
          <DialogTitle>Book New Consultation</DialogTitle>
          <DialogDescription>
            <form key={formKey} action={action} className="flex flex-col gap-4">
              <FormMessage res={state} />
              <AppInput
                name="doctor_name"
                placeholder="Enter your full name"
                title="Full Name"
              />
              <AppSelect
                name="doctor_department"
                title="Select Doctor"
                options={["Cardiology", "Dermatology", "Pediatrics"]}
              />
              <AppInput
                placeholder=""
                name="visit_date"
                type="date"
                title="Select Date"
              />
              <AppInput
                placeholder=""
                name="visit_time"
                type="time"
                title="Select Time"
              />
              <AppSelect
                name="reason_for_visit"
                title="Reason for Consultation"
                options={["Regular check-up", "Follow-up", "New Issue"]}
              />
              <FormButton
                loading={submitting}
                className="btn btn-primary !py-3 rounded-md !text-base mt-2 inline-flex gap-2 "
              >
                Book a Consultation <ArrowRight />
              </FormButton>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
