"use client"
import { $deleteNotification } from "@/action/user/deleteNotification";
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
import { Notification } from "@/types/notification";
import { ReactNode } from "react";

type DeleteConsultationProps = {
  notification: Notification;
  children: ReactNode;
};

export default function DeleteModal({ notification: notification, children }: DeleteConsultationProps) {
  const { submitting, action, state, modalProps } = useAppActionState($deleteNotification, {
    moreFields: {
      id: notification.id.toString(),
    }
  });

  return (
    <AlertDialog {...modalProps}>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent className="bg-white w-[300px] border-white">
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure you want to delete{" "}
            <span className="text-brand-primary">{notification.title}</span> ?
          </AlertDialogTitle>
        </AlertDialogHeader>
        <form action={action} className="grid gap-4">
          <FormMessage res={state} />
          <div className="flex justify-between">
            <AlertDialogCancel className="btn-primary-border btn !px-4 rounded-md">
              Cancel
            </AlertDialogCancel>
            <FormButton loading={submitting} className="btn-primary !bg-red-500 !border-red-500 btn !px-4 rounded-md">
              Yes Delete
            </FormButton>
          </div>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
