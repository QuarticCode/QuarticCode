import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "../theme/theme-provider";
import { Toaster } from "sonner";
import AOSWrapper from "./aos-wrapper";
import { MotionConfig } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

export const Provider = ({ children }: Props) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <NextIntlClientProvider>
        <MotionConfig reducedMotion="user">
          <AOSWrapper>{children}</AOSWrapper>
        </MotionConfig>
      </NextIntlClientProvider>
      <Toaster />
    </ThemeProvider>
  );
};
