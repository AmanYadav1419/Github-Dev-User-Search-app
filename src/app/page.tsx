import Image from "next/image";
import DarkandLightButon from "./components/DarkandLightButon";
import SearchandBtn from "./components/SearchandBtn";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full bg-stone-100 p-1.5 sm:p-4 pt-10 sm:pt-12 transition-all dark:bg-slate-900">

      {/* container */}
      <div className=" mx-auto flex w-full max-w-[600px] flex-col gap-8 rounded p-2">

        <section className="flex justify-between gap-3">
          <p className="text-xl font-semibold">DevFinder</p>
          <DarkandLightButon />
        </section>

        {/* search and main */}
        <section className="flex flex-col gap-6">

        {/* search and btn */}
        <SearchandBtn />
        <main className="flex w-full flex-col gap-5 rounded-lg bg-white dark:bg-slate-800 px-4 py-8 min-h-[200px]">

            {/* 1 */}
          <section className="flex gap-4">
            {/* user image */}
              <Image 
              width={200}
              height={200}
              className="h-20 w-20 rounded-full"
              src={"https://avatars.githubusercontent.com/u/583231?v=4"} 
              alt="user-image"/>


            <section className="flex flex-col justify-between gap-1 transition-all sm:w-full sm:flex-row">
              <div>
                {/* user name */}
                <h1>Aman_Yadav</h1>
                {/* user id */}
                <Link className="text-blue-500 hover:underline text-sm transition-all" href={'#'}>@AmanYadav1419</Link>

              </div>

              {/* joined date */}

                <p className="">Joined on 22 Nov 2022</p>

            </section>
          
          </section>
          {/* 2 */}
          <section>
            
          </section>
        </main>
        </section>
      </div>
    </div>
    
  );
}
