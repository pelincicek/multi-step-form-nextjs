"use client";

import { useForm } from "react-hook-form";
import { useFormState } from "./FormContext";

type TFormValues = {
  username: string;
};

export function UsernameForm() {
  const { onHandleNext, setFormData, formData } = useFormState();
  const { register, handleSubmit } = useForm<TFormValues>({
    defaultValues: formData,
  });

  function onHandleFormSubmit(data: TFormValues) {
    console.log({ data });
    setFormData((prevFormData) => ({ ...prevFormData, ...data }));
    onHandleNext();
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onHandleFormSubmit)}>
      <div className="flex flex-col gap-1">
        <label htmlFor="username"> Kullanıcı Adı </label>
        <input
          id="username"
          type="text"
          placeholder="Kullanıcı adı"
          className="h-11 px-4 border rounded-md"
          {...register("username")}
          required
        />
      </div>
      <div className="flex justify-end">
        <button className="h-11 px-6 bg-black text-white rounded-md">
          Sonraki Adım
        </button>
      </div>
    </form>
  );
}
