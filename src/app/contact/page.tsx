"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow">

        <h1 className="text-2xl font-bold text-center mb-6">
          Contact Us
        </h1>

        <form className="space-y-4">

          <Input placeholder="Enter your name" />

          <Input type="email" placeholder="Enter the Mobile Number" />

          <Input type="email" placeholder="Enter your email" />

          <Textarea placeholder="Enter your message" />

          <Button className="w-full">
            Send Message
          </Button>

        </form>

      </div>

    </div>
  );
}
