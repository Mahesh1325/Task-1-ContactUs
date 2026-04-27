"use client";

import { Table } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";

export function DataTableToolbar<TData>({
  table,
}: {
  table: Table<TData>;
}) {
  return (
    <div className="flex flex-col gap-3 mb-4">

      <input
        placeholder="Search all columns..."
        value={(table.getState().globalFilter as string) ?? ""}
        onChange={(e) => table.setGlobalFilter(e.target.value)}
        className="border p-2 w-full"
      />

      <select
        className="border p-2"
        value={(table.getColumn("city")?.getFilterValue() as string) ?? ""}
        onChange={(e) =>
          table.getColumn("city")?.setFilterValue(e.target.value)
        }
      >
        <option value="">All Cities</option>
        <option value="Phoenix">Phoenix</option>
        <option value="Houston">Houston</option>
        <option value="Seattle">Seattle</option>
        <option value="New York">New York</option>
        <option value="San Francisco">San Francisco</option>
      </select>

      {/* ONLY UPDATED PART → SHADCN CHECKBOX */}
      <div className="flex flex-wrap gap-3">
        {table.getAllLeafColumns().map((col) => (
          <label key={col.id} className="flex items-center gap-2">
            <Checkbox
              checked={col.getIsVisible()}
              onCheckedChange={(value) =>
                col.toggleVisibility(!!value)
              }
            />
            {col.id}
          </label>
        ))}
      </div>

      <p className="text-sm text-gray-500">
        Selected: {table.getSelectedRowModel().rows.length}
      </p>

      <button
        onClick={() => {
          const selected = table.getSelectedRowModel().rows;
          table.options.meta?.deleteRows?.(selected);
        }}
        className="border px-3 py-1 w-fit"
      >
        Delete Selected
      </button>

    </div>
  );
}
