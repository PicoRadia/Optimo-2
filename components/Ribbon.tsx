"use client";

import Link from "next/link";

export const Ribbon = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-[#00D37F] py-3 z-50">
      <div className="flex justify-center items-center">
        <span className="text-white text-sm md:text-base">
          Learn more about the welcome checklist process{" "}
          <Link 
            href="https://help.betterearth.io/knowledge/sales-process/post-sale-welcome-checklist#block-c7eb5be4816c4cae84310a3f46a8a25f"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-90"
          >
            here
          </Link>
        </span>
      </div>
    </div>
  );
}; 