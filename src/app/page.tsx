import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";


import ReduxViewer from "@/store/redux/ReduxViewer";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black flex justify-center px-4 py-10 overflow-x-hidden">
      <div className="w-full max-w-6xl flex flex-col items-center gap-8">

     
        <h1 className="text-3xl font-bold text-center">
          Task Dashboard
        </h1>

   
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* GLOBAL STATE */}
          <Link href="/global-state">
            <div className="bg-white dark:bg-zinc-900 p-5 rounded-xl shadow hover:shadow-lg transition cursor-pointer">
              <h2 className="font-semibold text-lg">Global State</h2>
              <p className="text-sm text-gray-500">
                Redux Persist + Zustand + Context
              </p>
            </div>
          </Link>

          {/* TANSTACK TABLE */}
          <Link href="/users">
            <div className="bg-white dark:bg-zinc-900 p-5 rounded-xl shadow hover:shadow-lg transition cursor-pointer">
              <h2 className="font-semibold text-lg">Data Table</h2>
              <p className="text-sm text-gray-500">
                TanStack Table Features
              </p>
            </div>
          </Link>

          {/* CONTACT FORM */}
          <Link href="/contact">
            <div className="bg-white dark:bg-zinc-900 p-5 rounded-xl shadow hover:shadow-lg transition cursor-pointer">
              <h2 className="font-semibold text-lg">Contact Form</h2>
              <p className="text-sm text-gray-500">
                API Integration Form
              </p>
            </div>
          </Link>

          {/* VALIDATION FORM */}
          <Link href="/validation">
            <div className="bg-white dark:bg-zinc-900 p-5 rounded-xl shadow hover:shadow-lg transition cursor-pointer">
              <h2 className="font-semibold text-lg">Validation Form</h2>
              <p className="text-sm text-gray-500">
                Hook Form + Zod + Upload
              </p>
            </div>
          </Link>

        </div>

       
        <div className="w-full">
          <ReduxViewer />
        </div>

      
        <main className="w-full max-w-4xl bg-white dark:bg-zinc-900 rounded-2xl shadow-md p-8 flex flex-col gap-8">

          {/* LOGO */}
          <div className="flex justify-center">
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={120}
              height={30}
              priority
            />
          </div>

          <div className="flex justify-center">
            <Link href="/contact">
              <Button>Go to Contact Page</Button>
            </Link>
          </div>

          <div className="text-center space-y-4">
            <h1 className="text-2xl font-semibold text-black dark:text-white">
              To get started, edit the page.tsx file.
            </h1>

            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Looking for a starting point or more instructions?
              Head over to Templates or Learning center.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              className="flex items-center justify-center gap-2 rounded-full bg-black text-white px-6 py-3 hover:bg-zinc-800 transition"
              href="https://vercel.com/new"
              target="_blank"
            >
              <Image
                src="/vercel.svg"
                alt="Vercel"
                width={16}
                height={16}
                className="invert"
              />
              Deploy Now
            </a>

            <a
              className="flex items-center justify-center rounded-full border px-6 py-3 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
              href="https://nextjs.org/docs"
              target="_blank"
            >
              Documentation
            </a>
          </div>

        </main>

      </div>
    </div>
  );
}
