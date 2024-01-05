"use client"
import { Button } from "@/components/ui/button"
import { Modal } from "@/components/ui/modal";
import { UserButton } from "@clerk/nextjs";
import {useStoreModal} from "@/hooks/use-store-modal";
import {useEffect} from "react";

export default function SetUpPage() {
    const onOpen = useStoreModal((state)=>state.onOpen)
    const isOpen = useStoreModal((state)=>state.isOpen)

    useEffect(() => {
        if(!isOpen){
            onOpen()
        }
    }, [onOpen,isOpen]);

  return (
    <div>
      <h1>Admin Dashboard</h1>
   <h1>This is a protected route</h1>
   {/*<UserButton afterSignOutUrl="/"/>*/}



    </div>
  )
}
