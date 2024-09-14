import { TailwindIndicator } from "./components/tailwind-indicator";

export default function Home() {
  return (
    <>
      <div>
        <div className="h-10 bg-blue-200 flex justify-center items-center">
          <h1 className=" font-bold text-2xl">
            Collection of Awesome React Components
          </h1>
        </div>
        <TailwindIndicator />
      </div>
    </>
  );
}
