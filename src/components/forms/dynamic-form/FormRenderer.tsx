"use client";

import { useState } from "react";
import { useForm, FieldValues } from "react-hook-form";

import { formRegistry } from "./formRegistry";
import { FormConfig } from "./formTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodTypeAny } from "zod";

interface FormRendererProps {
  config: FormConfig;
  schema?: ZodTypeAny;
  onSubmit: (data: FieldValues) => void;
}

export default function FormRenderer({
  config,
  schema,
  onSubmit,
}: FormRendererProps) {
  const [success, setSuccess] = useState(false);

  const resolver = schema ? zodResolver(schema as any) : undefined;

  const {
    register,
    handleSubmit,
    setValue, 
    formState: { errors },
  } = useForm({
    resolver,
  });

  const handleFormSubmit = (data: FieldValues) => {
    onSubmit(data);

    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="space-y-4"
    >
      {success && (
        <div className="bg-green-100 text-green-700 p-3 rounded">
          Form submitted successfully
        </div>
      )}

      {config.map((field) => {
        const Component = formRegistry[field.type];

        if (!Component) return null;

        return (
          <Component
            key={field.name}
            field={field}
            register={register}
            setValue={setValue}  
            error={errors[field.name]}
          />
        );
      })}

      <button
        type="submit"
        className="border px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
}
