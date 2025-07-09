import logo from "@/public/logo.svg";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="w-screen h-screen flex justify-center items-center p-2">
      <span className="flex flex-col justify-center items-center gap-3 p-4">
        <Image
          src={logo}
          alt={"loading"}
          height={50}
          width={50}
          className="animate-bounce"
        />
        <p>Loading...</p>
      </span>
    </div>
  );
}
