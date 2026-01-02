import Image from "next/image";

export function Logo({ image }: { image: string }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        src={image}
        alt="Hero Image"
        width={280}
        height={200}
        className="rounded-md"
      />
      <h3 className="font-bold md:text-6xl text-xl">QuarticCode</h3>
    </div>
  );
}
