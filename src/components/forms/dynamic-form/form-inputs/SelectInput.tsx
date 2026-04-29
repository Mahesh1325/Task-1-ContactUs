import { InputProps } from "../formTypes";
import { FieldValues, Path } from "react-hook-form";

export default function SelectInput<T extends FieldValues>({
  field,
  register,
  error,
}: InputProps<T>) {
  if (field.type !== "select") return null;

  const isMulti = field.name === "tags";

  return (
    <div className="mb-3">
      {field.label && <label>{field.label}</label>}

      <select
        multiple={isMulti}
        {...register(field.name as Path<T>)}
        className="border p-2 w-full"
      >
        {!isMulti && <option value="">Select</option>}

        {field.options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      {error && <p className="text-red-500 text-sm">{String(error.message)}</p>}
    </div>
  );
}
