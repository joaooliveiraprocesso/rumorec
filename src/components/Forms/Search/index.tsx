'use client'

import { zodResolver } from "@hookform/resolvers/zod";
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
  username: z.string({
    required_error: 'Digite o seu destino'
  }).min(3, {
    message: "A busca deve ter pelo menos 3 caracteres.",
  }),
})

export function Search() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
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
            className="relative mb-6 w-full"
        >
            <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                    <FormItem>
                        <FormControl>
                            <Input
                                placeholder="Encontre seu novo destino"
                                className="rounded-xl bg-white"
                                {...field}
                             />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
          )}
        />
        <Button
            type="submit"
            className="absolute right-2 top-1 h-8 w-8 rounded-full text-lg text-gray-400 bg-transparent hover:bg-transparent"
        >
        </Button>
      </form>
    </Form>
  )
}
