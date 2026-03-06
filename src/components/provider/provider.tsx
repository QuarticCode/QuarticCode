import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "../theme/theme-provider";

type Props = {
  children: React.ReactNode;
};

export const Provider = ({ children }: Props) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <NextIntlClientProvider>{children}</NextIntlClientProvider>
    </ThemeProvider>
  );
};
