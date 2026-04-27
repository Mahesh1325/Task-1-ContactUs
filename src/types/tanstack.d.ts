import { Row } from "@tanstack/react-table";

declare module "@tanstack/react-table" {
  interface TableMeta<TData> {
    deleteRows?: (rows: Row<TData>[]) => void;
  }
}
