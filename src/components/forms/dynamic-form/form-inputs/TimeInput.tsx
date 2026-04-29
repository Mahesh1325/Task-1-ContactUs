import { InputProps } from "../formTypes";
import { FieldValues, Path } from "react-hook-form";

export default function TimeInput<T extends FieldValues>({
  field,
  register,
  error,
}: InputProps<T>) {
  return (
    <div className="mb-3">
      {field.label && <label>{field.label}</label>}

      <input
        type="time"
        {...register(field.name as Path<T>)}
        className="border p-2 w-full"
      />

      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );
}
