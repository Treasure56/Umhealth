import { $deleteSong } from "@/actions/users/deleteSong";
import FormButton from "@/components/form/FormButton";
import { FormMessage } from "@/components/form/FromMessage";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import { useAppActionState } from "@/hooks/useActionState";
import { Consultation } from "@/types/consultation";
import { ReactNode } from "react";

type DeleteConsultationProps = {
  consultation: Consultation;
  children: ReactNode;
};

export default function DeleteModal({ consultation, children }: DeleteConsultationProps) {
  const { submitting, action, state, modalProps } = useAppActionState();

  return (
    <AlertDialog {...modalProps}>
      <AlertDialogTrigger>{children}</AlertDialogTrigger>
      <AlertDialogContent className="bg-white w-[300px] border-white">
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure you want to delete{" "}
            <span className="text-brand-primary">{consultation.reason_for_visit}&apos;s</span> ?
          </AlertDialogTitle>
        </AlertDialogHeader>
        <form action={action} className="grid gap-4">
          <FormMessage res={state} />
          <div className="flex justify-between">
            <AlertDialogCancel className="btn-primary-border btn !px-4 rounded-3xl">
              Cancel
            </AlertDialogCancel>
            <FormButton loading={submitting} className="btn-primary btn !px-4 rounded-3xl">
              Yes Delete
            </FormButton>
          </div>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
