"use client"

import { Dialog, DialogContent, DialogTitle, DialogDescription } from "./dialog";
import { DialogHeader } from "./dialog";

// import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./dialog";


interface ModalProps{
    title:string;
    description:string;
    isOpen:boolean;
    onClose:()=>void;
    children?:React.ReactNode;
}

export const Modal = ({title,description,isOpen,onClose,children}:ModalProps) => {
    const onChange = (open:boolean) => {
        if(!open){
            onClose();
        }
    }

    return(
        <Dialog open={isOpen}  onOpenChange={onChange}>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription>{description}</DialogDescription>
                <div>
                {children}
                </div>
            </DialogHeader>
        </DialogContent>
        </Dialog>
    )
}

//
// export const Modal:React.FC<ModalProps>   = ({title,description,isOpen,onClose,children}) => {
//     const onChange = (open:boolean) => {
//         if(!open){
//             onClose();
//         }
//     }
//
//     return(
//         <Dialog open={isOpen}  onOpenChange={onChange}>
//         <DialogContent>
//             <DialogHeader>
//                 <DialogTitle>{title}</DialogTitle>
//                 <DialogDescription>{description}</DialogDescription>
//                 <div>{children}</div>
//             </DialogHeader>
//         </DialogContent>
//         </Dialog>
//     )
// }