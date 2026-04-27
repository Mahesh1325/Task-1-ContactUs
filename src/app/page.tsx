import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import UserForm from "@/components/forms/UserForm";
import ReduxViewer from "@/store/redux/ReduxViewer";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black flex justify-center px-4 py-10 overflow-x-hidden">
      <div className="w-full max-w-5xl flex flex-col items-center gap-8">
        {/* Title */}
        <h1 className="text-3xl font-bold text-black dark:text-white text-center">
          Enter the User Details to Store
        </h1>

 
        <div className="w-full max-w-md">
          <UserForm />
        </div>

        <div className="flex justify-center">
        <Link href="/users">
          <Button>
            View Users Table
          </Button>
        </Link>
      </div>


    
        <div className="w-full flex justify-center">
          <ReduxViewer />
        </div>

        {/* MAIN CARD */}
        <main className="w-full max-w-3xl bg-white dark:bg-zinc-900 rounded-2xl shadow-md p-8 flex flex-col gap-8">
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
              Looking for a starting point or more instructions? Head over to
              Templates or Learning center.
            </p>
          </div>

          {/* ACTIONS */}
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
