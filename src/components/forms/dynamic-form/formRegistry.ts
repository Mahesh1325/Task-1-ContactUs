// formRegistry.ts

import TextInput from "./form-inputs/TextInput";
import SelectInput from "./form-inputs/SelectInput";
import TextareaInput from "./form-inputs/TextareaInput";
import FileInput from "./form-inputs/FileInput";
import DragDropInput from "./form-inputs/DragDropInput";
import DateInput from "./form-inputs/DateInput";
import TimeInput from "./form-inputs/TimeInput";

export const formRegistry = {
  text: TextInput,
  number: TextInput,
  textarea: TextareaInput,
  select: SelectInput,
  file: FileInput,
  drag: DragDropInput,
  date: DateInput,
  time: TimeInput,
};
