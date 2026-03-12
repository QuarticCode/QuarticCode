import Image from "next/image";
import ContactForm from "./contact-form";
import { useTranslations } from "next-intl";

export const Contact = () => {
  const t = useTranslations("Contact");

  return (
    <section
      className="mt-12"
      data-aos={"fade-up"}
      data-aos-delay={"10"}
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <div className="">
        <h2 className="text-4xl md:text-left text-center font-semibold md:text-3xl lg:text-4xl">
          {t("title")}
        </h2>
        <section className="grid gap-6 sm:grid-cols-2">
          <div className="h-64 w-64 relative md:top-20 sm:top-10 top-0 justify-self-center">
            <Image
              width={80}
              height={80}
              className="w-64 h-64 z-1"
              src={"/logo.svg"}
              alt="Contact Logo"
            />
            <Image
              width={80}
              height={80}
              className="w-64 h-64 absolute z-0 blur-3xl top-0"
              src={"/logo.svg"}
              alt="Contact Logo"
            />
          </div>
          <ContactForm />
        </section>
      </div>
    </section>
  );
};
