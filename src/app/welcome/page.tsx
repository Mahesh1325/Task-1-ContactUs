"use client";

import { useUserContext } from "@/store/context/UserContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function WelcomePage() {
  const { selectedUser } = useUserContext();
  const router = useRouter();

  if (!selectedUser) {
    return (
      <div className="flex justify-center mt-10">
        <p>No user selected</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center px-4">
      <Card className="w-full max-w-4xl shadow-xl">

        {/* HEADER */}
        <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-xl">
          <CardTitle className="text-2xl">
            Welcome {selectedUser.first_name} {selectedUser.last_name} 👋
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6 p-6">

          {/* PROFILE */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold">
              {selectedUser.first_name.charAt(0)}
            </div>

            <div>
              <h2 className="text-xl font-semibold">
                {selectedUser.first_name} {selectedUser.last_name}
              </h2>
              <p className="text-gray-500">{selectedUser.email}</p>
            </div>
          </div>

          {/* INFO GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <div className="p-4 bg-gray-100 rounded-lg">
              <p className="text-sm text-gray-500">Mobile</p>
              <p className="font-semibold">{selectedUser.mobile}</p>
            </div>

            <div className="p-4 bg-gray-100 rounded-lg">
              <p className="text-sm text-gray-500">City</p>
              <p className="font-semibold">{selectedUser.city}</p>
            </div>

            <div className="p-4 bg-gray-100 rounded-lg">
              <p className="text-sm text-gray-500">Age</p>
              <p className="font-semibold">{selectedUser.age}</p>
            </div>

          </div>

          {/* PARAGRAPH */}
          <div className="bg-blue-50 border rounded-lg p-4 text-gray-700 leading-relaxed">
            Hello <b>{selectedUser.first_name}</b>, your registration has been
            successfully completed. We have stored your contact information,
            including your email <b>{selectedUser.email}</b> and mobile number{" "}
            <b>{selectedUser.mobile}</b>. Our records show that you are located
            in <b>{selectedUser.city}</b> and your age is{" "}
            <b>{selectedUser.age}</b>. Our team may reach out to you shortly for
            further updates. Thank you for being part of our platform — we’re
            excited to have you onboard.
          </div>

          {/* BUTTON */}
          <div className="flex justify-center">
            <Button onClick={() => router.push("/")}>
              Back to Home
            </Button>
          </div>

        </CardContent>
      </Card>
    </div>
  );
}
