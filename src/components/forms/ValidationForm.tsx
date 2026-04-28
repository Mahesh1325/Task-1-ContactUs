"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState,useEffect } from "react";

const formSchema = z.object({
  name: z.string().min(3, "Name must have atleast 3 charecters"),
  email: z.string().email("Invalid Email"),
  age: z.number().min(18, "Age Must be above 18"),
  bio: z.string().min(10, "Bio must be at least 10 charecters"),
  city: z.string().min(1, "Please Select teh City: "),

  file: z.any().refine((file) => file?.length === 1, "File is required *"),

  tags: z.array(z.string()).min(1,"Select atleast one tag"),
});

type FormValues = z.infer<typeof formSchema>;

export default function ValidationForm() {

    const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const file = watch("file");

  useEffect(() => {
    const saved = localStorage.getItem("formData")

    if(saved){
        reset(JSON.parse(saved));
    }
  },[reset])

  const onSubmit = (data: FormValues) => {
    console.log(data);

    localStorage.setItem(
        "formData",
        JSON.stringify(data)
    );

    setSuccess(true);

    alert("All Validation Passed! Form Submitted");

    setTimeout(() => {
        setSuccess(false);
    },3000)
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-center text-2xl font-bold mb-6">Validation Form</h1>

      {success && (
        <div className="bg-green-100 text-green-700 p-3 mb-6 rounded">
          Form submitted successfully
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            {...register("name")}
            placeholder="Enter the Name:"
            className="border p-2 w-full"
          />

          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        <div>
          <input
            {...register("email")}
            placeholder="Enter the Email: "
            className="border p-2 w-full"
          />

          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <input
            type="number"
            {...register("age", { valueAsNumber: true })}
            placeholder="Enter the Age:"
            className="border p-2 w-full"
          />

          {errors.age && (
            <p className="text-red-500 text-sm">{errors.age.message}</p>
          )}
        </div>

        <div>
          <textarea
            {...register("bio")}
            placeholder="Enter the bio"
            className="border p-2 w-full"
          />

          {errors.bio && (
            <p className="text-red-500 text-sm">{errors.bio.message}</p>
          )}
        </div>

        <div>
          <select {...register("city")} className="border p-2 w-full">
            <option value="">Select City</option>
            <option value="Chennai">Chennai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Delhi">Delhi</option>
          </select>

          {errors.city && (
            <p className="text-red-500 text-sm">{errors.city.message}</p>
          )}
        </div>

        <div>
          <input
            type="file"
            {...register("file")}
            className="border p-2 w-full"
          />

          {errors.file && (
            <p className="text-red-500 text-sm">
              {errors.file.message as string}
            </p>
          )}

          {file?.[0]?.name && (
            <p className="text-sm text-gray-500">Selected: {file[0].name}</p>
          )}
        </div>

        <div
          className="border-2 border-dashed p-6 text-center"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            const droppedFile = e.dataTransfer.files;
            setValue("file", droppedFile, { shouldValidate: true });
          }}
        >
          Drag TO Drop File Here
        </div>

        <div>
          <p> Select Skill</p>
          <select
            multiple
            {...register("tags")}
            className="border p-2 w-full h-32"
          >
            <option value="C">C</option>
            <option value="C++">C++</option>
            <option value="Java">Java</option>
            <option value="C#">C#</option>
            <option value="Python">Python</option>
            <option value="JavaScript">JavaScript</option>
          </select>

          {errors.tags && (
            <p className="text-red-500 text-sm">{errors.tags.message}</p>
          )}
        </div>

        <button type="submit" className="border px-4 py-2">
          Submit Form
        </button>
      </form>
    </div>
  );
}
