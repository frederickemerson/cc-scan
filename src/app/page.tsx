"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import { env } from "~/env";
import QRScanner from "~/component/QRScanner";

export default function HomePage() {

  const [phrase, setPhrase] = useState<string>("");
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);

  const handlePhraseSubmit = () => {
    if (phrase === env.NEXT_PUBLIC_API_KEY) {
      setIsAuthorized(true);
    } else {
      alert("Incorrect phrase. Please try again.");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-white text-black">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-black sm:text-[5rem]">
          Ticket <span className="text-[hsl(280,100%,70%)]">Auth</span> Scanner
        </h1>

        {!isAuthorized && (
          <div className="flex flex-col items-center">
            <input
              type="text"
              value={phrase}
              onChange={(e) => setPhrase(e.target.value)}
              placeholder="Authorization phrase"
              className="p-2 w-64 border border-gray-300 rounded"
            />
            <button
              onClick={handlePhraseSubmit}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Submit
            </button>
          </div>
        )}

        {isAuthorized && (<QRScanner />)}

      </div>
    </main>
  );
}