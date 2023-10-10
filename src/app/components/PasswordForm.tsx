"use client";

import { useForm } from "react-hook-form";
import { useFormState } from "./FormContext";
import { useState } from "react";

type TFormValues = {
  password: string;
};

export function PasswordForm() {
  const [isCreated, setCreated] = useState(false);
  const { onHandleBack, setFormData, onHandleNext, formData } = useFormState();
  const { register, handleSubmit } = useForm<TFormValues>({
    defaultValues: formData,
  });

  function onHandleFormSubmit(data: TFormValues) {
    setFormData((prevFormData) => ({ ...prevFormData, ...data }));
    setCreated(true);
  }

  return isCreated ? (
    <div>
      <h1>Hesap oluşturuldu.</h1>
      <pre>{JSON.stringify(formData)}</pre>
    </div>
  ) : (
    <form className="space-y-6" onSubmit={handleSubmit(onHandleFormSubmit)}>
      <div className="flex flex-col gap-1">
        <label htmlFor="password"> Password </label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          className="h-11 px-4 border rounded-md"
          {...register("password")}
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
          Create
        </button>
      </div>
    </form>
  );
}
function onHandleNext() {
  throw new Error("Function not implemented.");
}
