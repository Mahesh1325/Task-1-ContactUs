"use client";

import FormRenderer from "@/components/forms/dynamic-form/FormRenderer";
import { formConfig } from "@/components/forms/dynamic-form/formConfig";
import { formSchema } from "@/components/forms/dynamic-form/formSchema";

export default function ValidationPage() {
  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-6">
        Dynamic Validation Form
      </h1>

      <FormRenderer
        config={formConfig}
        schema={formSchema}
        onSubmit={(data) => {
          console.log(data);
          alert("Form Submitted");
        }}
      />
    </div>
  );
}
