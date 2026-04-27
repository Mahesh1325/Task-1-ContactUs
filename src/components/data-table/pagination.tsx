"use client";

import { Table } from "@tanstack/react-table";

type Props<TData> = {
  table: Table<TData>;
};

export function DataTablePagination<TData>({ table }: Props<TData>) {
  return (
    <div className="flex justify-between mt-4">

      <button
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
        className="border px-3 py-1"
      >
        Prev
      </button>

      <span>
        Page {table.getState().pagination.pageIndex + 1}
      </span>

      <button
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
        className="border px-3 py-1"
      >
        Next
      </button>
    </div>
  );
}
