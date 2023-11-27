import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {SignedOut, SignInButton, UserButton} from "@clerk/nextjs";

const Header = ({}) => {
  return (
    <header className="flex items-center justify-between">
      <Link href={'/'} className="flex items-center space-x-2">
        <div className="bg-[#0160FE] w-fit">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Dropbox_Icon.svg/2202px-Dropbox_Icon.svg.png"
            alt="logo"
            // className="invert"
            height={50}
            width={50}
          />
        </div>
        <h1 className="font-bold text-xl">Dropbox</h1>
      </Link>

      <div className="px-5 flex space-x-2 items-center">

        <UserButton afterSignOutUrl="/" />
        <SignedOut>
          <SignInButton mode={'modal'} />
        </SignedOut>
      </div>
    </header>
  );
};

export default Header;
// by Rokas with ❤️
