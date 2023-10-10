"use client";
import { FormProvider } from "./components/FormContext";
import { FormStep } from "./components/FormStep";
import { UsernameForm } from "./components/UsernameForm";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen p-6 bg-gray-100">
      <div className="max-w-2xl w-full border p-6 rounded-md bg-white">
        <h1 className="text-xl font-semibold text-center">Sign Up Form</h1>
        <FormProvider>
          <FormStep />
        </FormProvider>
      </div>
    </div>
  );
}
