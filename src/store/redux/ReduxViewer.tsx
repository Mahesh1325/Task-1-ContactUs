"use client";

import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/redux/store";
import { useUserContext } from "@/store/context/UserContext";
import { useRouter } from "next/navigation";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { User } from "@/models/user";

export default function ReduxViewer() {
  const [show, setShow] = useState(false);

  const router = useRouter();
  const { setSelectedUser } = useUserContext();

  const users = useSelector((state: RootState) => state.user.users);

  const handleClick = (user: User) => {
    setSelectedUser(user);
    router.push("/welcome");
  };

  return (
    <div className="mt-6 w-full">
      <Button
        onClick={() => setShow(!show)}
        className="w-full"
      >
        {show ? "Hide Redux Data" : "Click Here to View Redux Data"}
      </Button>

      {show && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {users.map((user: User, index: number) => (
            <Card
              key={index}
              onClick={() => handleClick(user)}
              className="cursor-pointer hover:shadow-lg transition"
            >
              <CardHeader>
                <CardTitle>
                  {user.first_name} {user.last_name}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p>{user.email}</p>
                <p>{user.city}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
