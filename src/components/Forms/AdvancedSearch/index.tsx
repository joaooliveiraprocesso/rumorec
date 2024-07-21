'use client'

import { zodResolver } from "@hookform/resolvers/zod";
import { MagnifyingGlass } from '@phosphor-icons/react';
import { useForm } from "react-hook-form";
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"

const FormSchema = z.object({
    local: z.string({
        required_error: 'Digite um local'
  }),
    tipo: z.string({
        required_error: 'Digite o tipo de local'
  }),
    turno: z.string({
        required_error: 'Manhã,tarde ou noite'
  }),
    guest: z.string({
        required_error: 'Digite o tipo de acessibilidade'
  })
})

export function AdvancedSearch() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema)
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
        <form 
            onSubmit={form.handleSubmit(onSubmit)} 
            className="relative block w-full rounded-xl bg-gray-200 p-4"
        >
            <h3 className="mb-4 font-bold text-indigo-700">
                Pesquisa avançada
            </h3>

            <div className="flex w-full gap-4">
                <div className="flex flex-1 flex-col gap-4">
                    <FormField
                    control={form.control}
                    name="local"
                    render={({ field }) => (
                     <FormItem>
                        <FormControl>
                            <Input 
                                placeholder="Local"
                                className="rounded-xl border border-gray-400"  
                                {...field} 
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            
            <div className="flex w-full gap-4">
            <FormField
                    control={form.control}
                    name="tipo"
                    render={({ field }) => (
                     <FormItem className="w-full">
                        <FormControl>
                            <Input 
                                placeholder="ex:.Praia"
                                className="rounded-xl border border-gray-400"  
                                {...field} 
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                    control={form.control}
                    name="turno"
                    render={({ field }) => (
                     <FormItem className="w-full">
                        <FormControl>
                            <Input 
                                placeholder="ex:.Manhã"
                                className="rounded-xl border border-gray-400"  
                                {...field} 
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            </div>
            <FormField
                    control={form.control}
                    name="guest"
                    render={({ field }) => (
                     <FormItem>
                        <FormControl>
                            <Input 
                                placeholder="Tipo de acessibilidade"
                                className="rounded-xl border border-gray-400"  
                                {...field} 
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            </div>

            <div className="flex w-20">

                <Button 
                    type="submit" 
                    className="absolute rigth-0 top-0 h-full w-20 rounded-lx bg-indigo-700 text-lg text-white transition-all hover:bg-indigo-800"
        >
                    <MagnifyingGlass size={24} weight="light" />
                </Button>
            </div>

        </div>
      </form>
    </Form>
  )
}
