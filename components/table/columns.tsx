"use client"

import { ColumnDef } from "@tanstack/react-table"
import {FileType} from "@/typings";
import prettyBytes from "pretty-bytes"
import Link from "next/link";
import { FileIcon, defaultStyles } from 'react-file-icon';
import {COLOR_EXTENSION_MAP} from "@/constant";
export const columns: ColumnDef<FileType>[] = [
  {
    accessorKey: "type",
    header: "type",
    cell: ({ renderValue, ...props }) => {
      const type = renderValue() as string;
      const extension: string = type.split("/")[1];
      return (
        <div className="w-10">
          {/* @ts-ignore */}
          <FileIcon extension={extension} labelColor={COLOR_EXTENSION_MAP[extension]} {...defaultStyles[extension]} />
        </div>
      )
    }
  },
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
