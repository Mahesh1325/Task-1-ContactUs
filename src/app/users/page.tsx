"use client";

import { useEffect, useState } from "react";
import { DataTable } from "@/components/data-table/data-table";
import { columns  } from "@/components/data-table/columns";
import { mapUsers, ApiResponse,  DummyUser } from "@/models/dummyUser"
import { Row } from "@tanstack/react-table";

export default function Page() {
  const [data, setData] = useState<DummyUser[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((res: ApiResponse) => {
        setData(mapUsers(res.users));
      });
  }, []);

  const deleteRows = (rows: Row<DummyUser>[]) => {
    const ids = rows.map((r) => r.original.id);
    setData((prev) => prev.filter((u) => !ids.includes(u.id)));
  };

  return (
    <div className="p-6">
      <DataTable
        data={data}
        columns={columns}
        deleteRows={deleteRows}
      />
    </div>
  );
}
