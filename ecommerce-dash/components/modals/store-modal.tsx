"use client"

import {Modal} from "@/components/ui/modal";
import {useStoreModal} from "@/hooks/use-store-modal";

import * as z from "zod"
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {infer} from "zod";
import {Form} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(3),

})




export const StoreModal=()=>{
    const storeModal = useStoreModal();

    // use zod for form validation
    const form = useForm<z.infer<typeof formSchema>>({
        resolver:zodResolver(formSchema),
        defaultValues:{
            name:"",
        }
    })

    const onSubmit =(values: z.infer<typeof formSchema> )=>{
        //TODO : CREATE FORM
    }


    return (
        <Modal title="Create Store" description="Form to create a new store and add categories" isOpen={storeModal.isOpen} onClose={storeModal.onClose}>
         <div>

             <div className="space-y-4 py-2 pb-4">
                 <Form  {...form}>
                     <form onSubmit={form.handleSubmit(onSubmit)}>

                     </form>

                 </Form>
             </div>


         </div>
        </Modal>
    )



}