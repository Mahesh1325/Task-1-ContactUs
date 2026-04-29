"use client";

import {
  useForm,
  FieldValues,
  Resolver,
} from "react-hook-form";

import { formRegistry } from "./formRegistry";
import { FormConfig } from "./formTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodTypeAny } from "zod";

interface FormRendererProps<T extends FieldValues> {
  config: FormConfig;
  schema?: ZodTypeAny;
  onSubmit: (data: T) => void;
}

export default function FormRenderer<T extends FieldValues>({
  config,
  schema,
  onSubmit,
}: FormRendererProps<T>) {

  const resolver = schema
    ? zodResolver(schema)
    : undefined;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<T>({
    resolver: resolver as Resolver<T> | undefined,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {config.map((field) => {
        const Component = formRegistry[field.type];

        if (!Component) return null;

        return (
          <Component
            key={field.name}
            field={field}
            register={register}
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
