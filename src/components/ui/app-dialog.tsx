import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
    DialogDescription,
} from "./dialog";

import type { Dispatch, ReactNode, SetStateAction } from "react";

interface AppDialogProps {
    trigger?: ReactNode;
    title: string;
    children: ReactNode;
    description?: string;
    showCloseButton?: boolean;
    className?: string;
    open?: boolean;
    setOpen?: Dispatch<SetStateAction<boolean>>;
}

export function AppDialog({
    trigger,
    title,
    children,
    description,
    showCloseButton = true,
    className,
    open,
    setOpen,
}: AppDialogProps) {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
            <DialogContent className={className ?? "sm:max-w-lg"}>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    {description && <DialogDescription>{description}</DialogDescription>}
                </DialogHeader>
                {children}
                {showCloseButton && (
                    <DialogClose asChild>
                        <button className="mt-4 text-sm underline text-muted-foreground hover:text-primary">
                            Close
                        </button>
                    </DialogClose>
                )}
            </DialogContent>
        </Dialog>
    );
}
