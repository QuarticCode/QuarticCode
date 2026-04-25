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
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-4xl md:text-left text-center font-semibold md:text-3xl lg:text-4xl">
          {t("title")}
        </h2>

        <ContactForm />
      </div>
    </section>
  );
};
