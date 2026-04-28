"use client";

import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  flexRender,
  ColumnDef,
  Row,
  ColumnFiltersState,
  TableMeta,
  PaginationState,
} from "@tanstack/react-table";

import { useState } from "react";

import { DataTableToolbar } from "./toolbar";
import { DataTablePagination } from "./pagination";
import { DummyUser } from "@/models/dummyUser";

type CustomMeta = {
  deleteRows?: (rows: Row<DummyUser>[]) => void;
};

type Props = {
  data: DummyUser[];
  columns: ColumnDef<DummyUser>[];
  deleteRows: (rows: Row<DummyUser>[]) => void;
};

export function DataTable({ data, columns, deleteRows }: Props) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  });

  const table = useReactTable<DummyUser>({
    data,
    columns,

    state: {
      columnFilters,
      pagination,
    },

    onColumnFiltersChange: setColumnFilters,
    onPaginationChange: setPagination,

    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),

    enableRowSelection: true,

    meta: {
      deleteRows,
    } as TableMeta<DummyUser> & CustomMeta,
  });

  return (
    <div className="w-full">
      <DataTableToolbar table={table} />

      <div className="border rounded overflow-hidden">
        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map((hg) => (
              <tr key={hg.id}>
                {hg.headers.map((header) => (
                  <th
                    key={header.id}
                    className="p-2 border bg-gray-50 text-left"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="p-2 border">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <DataTablePagination table={table} />
    </div>
  );
}
