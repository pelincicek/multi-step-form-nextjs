"use client";

import { useForm } from "react-hook-form";
import { useFormState } from "./FormContext";

type TFormValues = {
  email: string;
};

export function EmailForm() {
  const { onHandleNext, onHandleBack, setFormData, formData } = useFormState();
  const { register, handleSubmit } = useForm<TFormValues>({
    defaultValues: formData,
  });

  function onHandleFormSubmit(data: TFormValues) {
    onHandleNext();
    setFormData((prevFormData) => ({ ...prevFormData, ...data }));
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onHandleFormSubmit)}>
      <div className="flex flex-col gap-1">
        <label htmlFor="email"> Email </label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          className="h-11 px-4 border rounded-md"
          {...register("email")}
          required
        />
      </div>
      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={onHandleBack}
          className="h-11 px-6 bg-black text-white rounded-md"
        >
          Önceki Adım
        </button>
        <button className="h-11 px-6 bg-black text-white rounded-md">
          Sonraki Adım
        </button>
      </div>
    </form>
  );
}
function onHandleNext() {
  throw new Error("Function not implemented.");
}
