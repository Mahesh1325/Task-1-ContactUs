"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { createUser } from "@/lib/api/user";

export default function UserForm() {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    city: "",
    age: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !form.first_name ||
      !form.last_name ||
      !form.email ||
      !form.mobile ||
      !form.city ||
      !form.age
    ) {
      alert("All fields are required");
      return;
    }

    if (!form.email.includes("@") || !form.email.includes(".")) {
      alert("Enter a valid email");
      return;
    }

    try {
      const result = await createUser({
        ...form,
        age: Number(form.age)
      });

      console.log(result);
      alert("User Added Successfully");

      setForm({
        first_name: "",
        last_name: "",
        email: "",
        mobile: "",
        city: "",
        age: ""
      });
    } catch (error) {
      console.error(error);
      alert("Error adding user");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
      <Card className="w-full max-w-sm shadow-xl">
        <CardHeader>
          <CardTitle className="text-center text-xl">
            User Form
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">

            <div>
              <Label>First Name</Label>
              <Input name="first_name" value={form.first_name} onChange={handleChange} />
            </div>

            <div>
              <Label>Last Name</Label>
              <Input name="last_name" value={form.last_name} onChange={handleChange} />
            </div>

            <div>
              <Label>Email</Label>
              <Input name="email" value={form.email} onChange={handleChange} />
            </div>

            <div>
              <Label>Mobile</Label>
              <Input name="mobile" value={form.mobile} onChange={handleChange} />
            </div>

            <div>
              <Label>City</Label>
              <Input name="city" value={form.city} onChange={handleChange} />
            </div>

            <div>
              <Label>Age</Label>
              <Input name="age" value={form.age} onChange={handleChange} />
            </div>

            <Button type="submit" className="w-full">
              Submit Form
            </Button>

          </form>
        </CardContent>
      </Card>
    </div>
  );
}
