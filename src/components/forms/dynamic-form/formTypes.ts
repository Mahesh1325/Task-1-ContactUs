import { FieldErrors, UseFormRegister, FieldValues,UseFormSetValue } from "react-hook-form";

export type FieldType = 
    | "text"
    | "number"
    | "select"
    | "textarea"
    | "file"
    | "drag"
    | "date"
    | "time"

export interface BaseField {
    name: string;
    label?: string;
    placeholder?: string;
    type: FieldType;
}

export interface TextField extends BaseField{
    type: "text" | "number" | "textarea";
}

export interface SelectField extends BaseField{
    type: "select";
    options: string[];
}

export interface FileField extends BaseField{
    type: "file" | "drag";
}

export interface DateTimeField extends BaseField{
    type: "date" | "time";
}

export type FormField = 
    | TextField
    | SelectField
    | FileField
    | DateTimeField;

export type FormConfig = FormField[];



export interface InputProps<T extends FieldValues = FieldValues> {
  field: FormField;
  register: UseFormRegister<T>;
  setValue?: UseFormSetValue<T>;
  error?: FieldErrors<T>[string];
}