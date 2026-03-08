import Image from "next/image";
import ContactForm from "./contact-form";

export const Contact = () => {
  return (
    <section className="py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 space-y-4 sm:mb-16 lg:mb-24">
          <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
            Connect With Us
          </h2>
          <p className="text-muted-foreground text-xl">
            Whether you&apos;re looking for more information, have a suggestion,
            or need help with something, we&apos;re here for you.
          </p>
        </div>
        <section className='grid gap-6 sm:grid-cols-2 '>
          <div className="h-64 w-64 relative top-20 justify-self-center">
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
