// src/components/contact/contact-dialog.tsx
"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { useState } from "react";
import ContactForm from "./contact-form";
import { useTranslations } from "next-intl";

interface ContactDialogProps {
  children: React.ReactNode; // Será el botón que le pasamos desde afuera
}

export function ContactDialog({ children }: ContactDialogProps) {
  const t = useTranslations("Contact")
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-125 md:max-w-160">
        <DialogHeader>
          <DialogTitle className="text-2xl">{t("title")}</DialogTitle>
          <DialogDescription>
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <ContactForm />
        </div>
      </DialogContent>
    </Dialog>
  );
}
