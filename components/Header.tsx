import React from 'react';
import Link from "next/link";
import Image from "next/image";

const Header = ({}) => {
  return (
    <header className="flex items-center justify-between">
      <Link href={'/'}>
        <div>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Dropbox_Icon.svg/2202px-Dropbox_Icon.svg.png"
            alt="logo"
            className="invert"
            height={50}
            width={50}
          />
        </div>
        <h1 className="font-bold text-xl">Dropbox</h1>
      </Link>
    </header>
  );
};

export default Header;
// by Rokas with ❤️
