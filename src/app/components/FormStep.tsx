"use client";

import { useFormState } from "./FormContext";
import { UsernameForm } from "./UsernameForm";
import { EmailForm } from "./Emailform";
import { PasswordForm } from "./PasswordForm";

export function FormStep() {
  const { step } = useFormState();

  switch (step) {
    case 1:
      return <UsernameForm />;
    case 2:
      return <EmailForm />;
    case 3:
      return <PasswordForm />;
    default:
      return null;
  }
}
