import PacmanLoader from "react-spinners/PacmanLoader";

export default function Spinner() {
  return (
    <div className="z-50 w-full h-full absolute top-0 left-0 inset-0 flex items-center justify-center bg-opacity-50 bg-black">
      <PacmanLoader color="#2563EB" size={50} />
    </div>
  );
}
