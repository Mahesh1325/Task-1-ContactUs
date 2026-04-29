"use client";

import { Input } from "../../ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Label } from "../../ui/label";
import { Button } from "../../ui/button";
import { createUser } from "@/lib/api/user";
import { useDispatch } from "react-redux";
import { addUser } from "@/store/redux/userSlice.";
import { AppDispatch } from "@/store/redux/store";
import { useUserDraftStore } from "@/store/zustand/userDraftStore";

export default function UserForm() {
  const dispatch = useDispatch<AppDispatch>();

  // Zustand
  const { draft, setDraft, clearDraft } = useUserDraftStore();
  const form = draft;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDraft({
      [e.target.name]: e.target.value,
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

    try {
      const userData = await createUser({
        ...form,
        age: Number(form.age),
      });

      dispatch(addUser(userData.data));

      alert("User Added Successfully");

      // clear zustand draft
      clearDraft();
    } catch (error) {
      console.error(error);
      alert("Error adding user");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
      <Card className="w-full max-w-sm shadow-xl">
        <CardHeader>
          <CardTitle className="text-center text-xl">User Form</CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label>First Name</Label>
              <Input
                name="first_name"
                value={form.first_name}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label>Last Name</Label>
              <Input
                name="last_name"
                value={form.last_name}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label>Email</Label>
              <Input name="email" value={form.email} onChange={handleChange} />
            </div>

            <div>
              <Label>Mobile</Label>
              <Input
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
              />
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
