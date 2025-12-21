import Image from "next/image";

type Props = {
  image: string;
  title: string;
  description: string;
};

export function Hero({ image, title, description }: Props) {
  return (
    <section className="flex flex-col justify-center items-center dark:text-white text-black md:p-8 p-2 m-4 md:gap-8 gap-2 md:w-2xl w-screen rounded-md bg-linear-to-br from-purple-500/20 via-transparent to-blue-500/20">
      <div className="flex flex-col justify-center items-center">
        <Image
          src={image}
          alt="Hero Image"
          width={280}
          height={200}
          className="rounded-md"
        />
        <h3 className="font-bold md:text-4xl text-xl">QuarticCode</h3>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="font-semibold lg:text-3xl md:text-2xl sm:text-xl text-lg">
          {title}
        </h1>
        <p className="lg:text-xl md:text-lg sm:text-sm font-light">
          {description}
        </p>
      </div>
    </section>
  );
}
