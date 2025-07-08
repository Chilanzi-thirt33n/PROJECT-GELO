"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function LoginButton({
  onDarkBackground = false,
}: {
  onDarkBackground?: boolean;
}) {
  const baseColor = onDarkBackground ? "bg-pink-300" : "bg-pink-600";
  const hoverColor = onDarkBackground
    ? "hover:bg-white hover:text-pink-950"
    : "hover:bg-pink-700 hover:text-white";

  return (
    <Button className={`px-7 ${baseColor} ${hoverColor}`}>
      <Link href="/contacts">Order Now</Link>
    </Button>
  );
}
