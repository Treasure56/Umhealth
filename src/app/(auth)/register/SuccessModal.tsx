import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import Image from "next/image";
import { ReactNode } from "react";
export default function SuccessModal({children}: {children: ReactNode}) {
    return (
        <Dialog>
          <DialogTrigger>{children}</DialogTrigger>
          <DialogContent>
            <div className="flex flex-col items-center justify-center gap-4">
                <Image src="/images/success.png" alt="success" width={86} height={86} />
                {/* <DialogHeader className="text-center"> */}
                    <DialogTitle className="text-2xl font-bold text-gray-800">Welcome Onboard!</DialogTitle>
                    <DialogDescription className="text-gray-600 text-sm md:text-base">
                        Your account has been created successfully.
                    </DialogDescription>
                {/* </DialogHeader> */}
            </div>
           
            
          </DialogContent>
        </Dialog>
    );
}