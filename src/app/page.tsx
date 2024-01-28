import Image from "next/image";
import DarkandLightButon from "./components/DarkandLightButon";
import SearchandBtn from "./components/SearchandBtn";
import Link from "next/link";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosLink } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { BsFillBuildingFill } from "react-icons/bs";

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
                alt="user-image"
              />

              <section className="flex flex-col justify-between gap-1 transition-all sm:w-full sm:flex-row">
                <div>
                  {/* user name */}
                  <h1>Aman_Yadav</h1>
                  {/* user id */}
                  <Link
                    className="text-blue-500 hover:underline text-sm transition-all"
                    href={"#"}
                  >
                    @AmanYadav1419
                  </Link>
                </div>

                {/* joined date */}

                <p className="">Joined on 22 Nov 2022</p>
              </section>
            </section>

            {/* 2 */}

            <section className="flex flex-col gap-5">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum doloremque tenetur saepe. Fugit sit in odit error
                obcaecati vero nobis?
              </p>
              {/* repo and follower section */}
              <div className="flex justify-between gap-3 rounded-lg bg-stone-100 px-6 py-4 dark:bg-slate-900 min-h-[50px]:">
                {/* item 1 */}
                <div className="flex flex-col items-center gap-2">
                  <p className="text-xs opacity-60">Repos</p>
                  <p className="text-sm font-bold sm:text-base">78</p>
                </div>
                {/* item 2 */}
                <div className="flex flex-col items-center gap-2">
                  <p className="text-xs opacity-60">Followers</p>
                  <p className="text-sm font-bold sm:text-base">8</p>
                </div>
                {/* item 3 */}
                <div className="flex flex-col items-center gap-2">
                  <p className="text-xs opacity-60">following</p>
                  <p className="text-sm font-bold sm:text-base">12</p>
                </div>
              </div>
              {/* address and extra links */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* item 1 */}
                <div className="flex items-center gap-2">
                  {/* icon */}
                  <IoLocationOutline  className="text-xl"/>
                  <p>Nashik</p>
                </div>
                {/* item 2 */}
                <div className="flex items-center gap-2">
                  {/* icon */}
                  <IoIosLink className="text-2xl"/>
                  <p>Link</p>
                </div>
              </div>
                {/* item 3 */}
                <div className="flex items-center gap-2">
                  {/* icon */}
                  <FaTwitter className="text-xl"/>
                  <p>Twitter</p>
                </div>
                {/* item 4 */}
                <div className="flex items-center gap-2">
                  {/* icon */}
                  <BsFillBuildingFill  className="text-xl"/>
                  <p>Nashik</p>
                </div>
            </section>
          </main>
        </section>
      </div>
    </div>
  );
}
