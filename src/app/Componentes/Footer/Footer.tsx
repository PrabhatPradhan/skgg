"use client";

import Link from "next/link";

export default function Biography() {
  return (
    <>
       <footer className="bg-gray-800 text-white py-4 text-center text-sm flex flex-row justify-around">
        <p>
          <span className="text-gray-300">Copyright © 2022</span>{" "}
          <span className="font-semibold text-yellow-400">SKG PSD.</span>{" "}
          <span className="font-bold">All Right Reserved.</span>
        </p>
        <p>
            <Link href="/privacyPolicyPage"
            >   PrivacyPolicyPage</Link>
     
        </p>
      </footer>
    </>
  );
}
