import Image from 'next/image'
import { UserButton } from "@clerk/nextjs";
import {Button} from "@/components/ui/button";

export default function Home() {
  return (
    <main className="">
      <Button>
        Here is a demo button
      </Button>
    </main>
  )
}
