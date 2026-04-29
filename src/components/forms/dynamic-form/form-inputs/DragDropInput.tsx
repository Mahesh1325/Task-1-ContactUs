import { InputProps } from "../formTypes";
import { FieldValues, Path } from "react-hook-form";

export default function DragDropInput<T extends FieldValues>({
  field,
  register,
  error,
}: InputProps<T>) {
  return (
    <div className="mb-3">
      <div className="border-2 border-dashed p-6 text-center">
        Drag & Drop File Here
      </div>

      <input
        type="file"
        {...register(field.name as Path<T>)}
        className="hidden"
      />

      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );
}
