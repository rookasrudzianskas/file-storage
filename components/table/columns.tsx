"use client"

import { ColumnDef } from "@tanstack/react-table"
import {FileType} from "@/typings";
import prettyBytes from "pretty-bytes"
import Link from "next/link";

export const columns: ColumnDef<FileType>[] = [
  {
    accessorKey: "filename",
    header: "Filename",
  },
  {
    accessorKey: "timestamp",
    header: "Date Added",
  },
  {
    accessorKey: "size",
    header: "Size",
    cell: ({ renderValue, ...props }) => {
      return <span>{prettyBytes(renderValue() as number)}</span>;
    }
  },
  {
    accessorKey: "downloadURL",
    header: "Link",
    cell: ({ renderValue, ...props }) => {
      return (
        <Link href={renderValue() as string} target="_blank" className="underline text-blue-500 hover:text-blue-600">
          Download
        </Link>
      )
    }
  },
]
