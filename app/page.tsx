import ParallaxEffect from "./components/parallax-effect";
import { TailwindIndicator } from "./components/tailwind-indicator";

export default function Home() {
  return (
    <>
      <>
          <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center font-bold text-5xl p-10">
            Collection of Awesome 
            <br />
            React Components
          </h1>
          <div className="flex justify-center">
            <ParallaxEffect />
          </div>
        <TailwindIndicator />
      </>
    </>
  );
}
