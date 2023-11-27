import { ArrowRightIcon } from 'lucide-react';
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="bg-[#1E1919] dark:bg-slate-800 h-full p-10">
        <div className="flex flex-col lg:flex-row items-center bg-[#1E1919] dark:bg-slate-800">
          <div className="p-10 flex-col flex bg-[#2B2929] dark:bg-slate-800 text-white space-y-5">
            <h1 className="text-5xl font-bold">
              Welcome to Dropbox
              <br />
              Storing everything for you and your business needs. All in one place.
            </h1>

            <p className="pb-20">
              This is a bunch of text
            </p>

            <Link href={'/dashboard'} className="flex hover:cursor-pointer p-5 bg-blue-500 w-fit">
              Try it for free!
              <ArrowRightIcon className="ml-10 h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
          <div>
            <video loop autoPlay muted className="rounded-lg">
              <source
                src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/dropbox/dbx1-hero-1920x1080.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
        <div className="">
          <p className="text-center font-bold text-xl pt-5">Disclaimer</p>
          <p className="text-center font-light p-2">
            This is a clone of Dropbox, made for educational purposes only. All rights reserved to Dropbox.
            We are not responsible for any data loss or any other damage. Use at your own risk. We do not store any of your data.
          </p>
        </div>
    </main>
  )
}
