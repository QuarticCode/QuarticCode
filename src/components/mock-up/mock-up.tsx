import BackgroundMeteors from "../ui/backgroundmeteors";

export function MockUp() {
  return (
    <BackgroundMeteors>
      <h2 className="relative z-20 text-center font-bold text-black dark:text-white font-sans tracking-tight text-[clamp(1.5rem,5vw,6rem)]">
        Try it and see
        <br />
        <div className="relative mx-auto inline-block w-max filter-[drop-shadow(0px_1px_3px_rgba(27,37,80,0.14))]">
          <div className="absolute left-0 top-px bg-clip-text bg-no-repeat text-transparent bg-linear-to-r py-4 from-blue-500 via-purple-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span>your idea</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 py-4">
            <span>your idea</span>
          </div>
        </div>
        {" "}with
        <br />
        <div className="relative mx-auto inline-block w-max filter-[drop-shadow(0px_1px_3px_rgba(27,37,80,0.14))]">
          <div className="absolute left-0 top-px bg-clip-text bg-no-repeat text-transparent bg-linear-to-r py-4 from-indigo-500 via-fuchsia-500-500 to-purple-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span>we</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-linear-to-r from-indigo-500 via-fuchsia-500-500 to-purple-500 py-4">
            <span>we</span>
          </div>
        </div>
      </h2>
    </BackgroundMeteors>
  );
}
