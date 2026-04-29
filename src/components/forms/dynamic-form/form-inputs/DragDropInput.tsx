import { useRef, useState } from "react";
import { InputProps } from "../formTypes";
import { FieldValues, Path } from "react-hook-form";

export default function DragDropInput<T extends FieldValues>({
  field,
  register,
  setValue,
  error,
}: InputProps<T>) {
  const [fileName, setFileName] = useState<string>("");

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    const file = e.dataTransfer.files[0];

    if (file) {
      setFileName(file.name);

      setValue?.(field.name as Path<T>, file as any, {
        shouldValidate: true,
      });
    }
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setFileName(file.name);

      setValue?.(field.name as Path<T>, file as any, {
        shouldValidate: true,
      });
    }
  };

  return (
    <div className="mb-3">
      {field.label && <label>{field.label}</label>}

      <div
        className="border-2 border-dashed p-6 text-center cursor-pointer hover:bg-gray-50"
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        Drag & Drop File Here or Click to Upload
      </div>

      <input
        type="file"
        {...register(field.name as Path<T>)}
        ref={(e) => {
          register(field.name as Path<T>).ref(e);
          inputRef.current = e;
        }}
        onChange={handleChange}
        className="hidden"
      />

      {fileName && (
        <p className="text-sm text-gray-500 mt-1">Selected: {fileName}</p>
      )}

      {error?.message && (
        <p className="text-red-500 text-sm">{String(error.message)}</p>
      )}
    </div>
  );
}
