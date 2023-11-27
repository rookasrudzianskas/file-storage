import Image from 'next/image'
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="">
      <UserButton afterSignOutUrl="/" />
    </main>
  )
}
