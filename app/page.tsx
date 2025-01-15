import AnimatedSidebar from "./components/animated-sidebar";
import ParallaxEffect from "./components/parallax-effect";
import { TailwindIndicator } from "./components/tailwind-indicator";
import Title from "./components/title";

export default function Home() {
  return (
    <div className="flex">
      <AnimatedSidebar />
      <div className="flex-1 flex justify-center">
        <div id="content-container" className="flex flex-col items-center">
          <Title />
          <ParallaxEffect />
        </div>
      </div>
      <TailwindIndicator />
    </div>
  );
}
