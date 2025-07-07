"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import usercreate from "@/services/Usermanagement"

const formSchema = z.object({
  entity: z.string({ message: "Entity is required" }),
  location: z.string({ message: "Location is required" }),
  branch: z.string({ message: "Branch is required" }),
  role: z.string({ message: "role is required" }),
  name: z.string({ message: "name is required" }),
  ID: z.string({ message: "Employee ID is required" }),
  email: z.string({ message: "Email is required" }),
  phonenumber: z.string({ message: "Phone Number is required" }),
  Username: z.string({ message: "Username is required" }),
});

function Page() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      entity: "",
      location: "",
      branch: "",
      role: "",
      name: "",
      ID: "",
      email: "",
      phonenumber: "",
      Username: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const payload = {
      entity: values.entity,
      location: values.location,
      branch: values.branch,
      defaultRole: values.role,
      name: values.name,
      employeeId: values.ID,
      email: values.email,
      phoneNumber: values.phonenumber,
      username: values.phonenumber,
    };

    try {
      const response = await usercreate.submitusercreate(payload)
      console.log(response, "kkk");
      alert("User created successfully!");
      form.reset();
    } catch (error) {
      alert("Failed to create user. Check console for details.");
      return error;
    }
    onReset();
  };

  const onReset = () => {
    form.reset({
      entity: "",
      location: "",
      branch: "",
      role: "",
      name: "",
      ID: "",
      email: "",
      phonenumber: "",
      Username: "",
    });
  };

  return (
    <div className="ml-[256px] min-h-screen bg-[#fdfff8] p-8">
      <h2 className="text-xl font-semibold mb-6">Create User</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FormField
              control={form.control}
              name="entity"
              render={({ field }) => (
                <FormItem>
                  <label className="text-[15px] font-semibold">Entity</label>
                  <FormControl>
                    <Input placeholder="Select" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <label className="text-[15px] font-semibold">Location</label>
                  <FormControl>
                    <Input placeholder="Select" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="branch"
              render={({ field }) => (
                <FormItem>
                  <label className="text-[15px] font-semibold">
                    Default Branch
                  </label>
                  <FormControl>
                    <Input placeholder="Select" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <label className="text-[15px] font-semibold">
                    Default User Role
                  </label>
                  <FormControl>
                    <Input placeholder="Select" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <label className="text-[15px] font-semibold">Full Name</label>
                  <FormControl>
                    <Input placeholder="Select" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="ID"
              render={({ field }) => (
                <FormItem>
                  <label className="text-[15px] font-semibold">
                    Employee ID
                  </label>
                  <FormControl>
                    <Input placeholder="Select" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <label className="text-[15px] font-semibold">
                    Email Address
                  </label>
                  <FormControl>
                    <Input placeholder="Select" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phonenumber"
              render={({ field }) => (
                <FormItem>
                  <label className="text-[15px] font-semibold">
                    Phone Number
                  </label>
                  <FormControl>
                    <Input placeholder="Select" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="Username"
              render={({ field }) => (
                <FormItem>
                  <label className="text-[15px] font-semibold">Username</label>
                  <FormControl>
                    <Input placeholder="Select" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex gap-4 mt-15 ml-180 ">
            <Button type="submit">Submit</Button>
            <Button type="button" variant="secondary" onClick={onReset}>
              Reset
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
export default Page;
