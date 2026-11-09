"use client";

import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { toast } from "sonner";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    info: "",
  });
  const [nameError, setNameError] = useState<string | null>(null);
  const t = useTranslations("Contact");

  const adminPhone: string = "+5355153703";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "fullName" && value.trim()) {
      setNameError(null);
    }
  };

  const handleSendToWhatsApp = () => {
    if (!formData.fullName.trim()) {
      setNameError(t("toast.error"));
      return;
    }

    setNameError(null);

    let message = `${t("messages.title")}\n\n`;
    message += `👤 *${t("form.fullname")}:* ${formData.fullName}\n`;

    if (formData.email) {
      message += `📧 *${t("form.email")}:* ${formData.email}\n`;
    }

    if (formData.info) {
      message += `📝 ${t("messages.info")} \n${formData.info}`;
    } else {
      message += `📝 ${t("messages.info_null")}`;
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${adminPhone}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");

    toast.success(t("messages.redirect"), {
      description: t("toast.success"),
    });
  };

  return (
    <div className="w-full">
      <Card className="w-full overflow-hidden rounded-3xl border-border bg-surface py-0 shadow-xl shadow-black/5">
        <CardHeader className="space-y-2 px-6 pt-7 sm:px-8">
          <CardTitle className="text-2xl font-semibold tracking-tight">
            {t("form.title")}
          </CardTitle>
          <CardDescription className="text-base text-muted-foreground">
            {t("form.description")}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-5 px-6 pb-7 sm:px-8">
          <div className="space-y-2">
            <Label htmlFor="fullName">
              {t("form.fullname")}{" "}
              <span className="text-destructive" aria-hidden="true">
                *
              </span>
            </Label>
            <Input
              id="fullName"
              name="fullName"
              autoComplete="name"
              value={formData.fullName}
              onChange={handleChange}
              required
              aria-invalid={Boolean(nameError)}
              aria-describedby={nameError ? "fullName-error" : undefined}
              className="h-11 rounded-xl border-border bg-background px-3.5 focus-visible:border-brand focus-visible:ring-2 focus-visible:ring-brand/20 dark:bg-background"
            />
            {nameError && (
              <p
                id="fullName-error"
                role="alert"
                className="text-sm text-destructive"
              >
                {nameError}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">
              {t("form.email")}{" "}
              <span className="text-sm font-normal text-muted-foreground">
                ({t("form.opcional")})
              </span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              className="h-11 rounded-xl border-border bg-background px-3.5 focus-visible:border-brand focus-visible:ring-2 focus-visible:ring-brand/20 dark:bg-background"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="info">{t("form.info")}</Label>
            <Textarea
              id="info"
              name="info"
              placeholder={t("form.info_placeholder")}
              value={formData.info}
              onChange={handleChange}
              className="min-h-28 resize-none rounded-xl border-border bg-background px-3.5 py-3 focus-visible:border-brand focus-visible:ring-2 focus-visible:ring-brand/20 dark:bg-background"
            />
          </div>

          <Button
            onClick={handleSendToWhatsApp}
            className="h-12 w-full rounded-xl bg-emerald-600 text-base font-semibold text-white transition-[transform,box-shadow] hover:bg-emerald-500 focus-visible:ring-emerald-500/40 active:scale-[0.99]"
          >
            <MessageCircle className="mr-1 h-5 w-5" />
            {t("form.send")}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
