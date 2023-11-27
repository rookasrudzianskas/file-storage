// @ts-nocheck
"use client"

import { Copy } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {useUser} from "@clerk/nextjs";
import {useAppStore} from "@/store/store";
import {useState} from "react";

export function RenameModal() {
  const { user } = useUser();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useAppStore(state => [state.isDeleteModalOpen, state.setIsDeleteModalOpen]);
  const [isRenameModalOpen, setIsRenameModalOpen] = useAppStore(state => [state.isRenameModalOpen, state.setIsRenameModalOpen]);
  const [fileId, setFileId] = useAppStore(state => [state.fileId, state.setFileId]);
  const [filename, setFilename] = useAppStore(state => [state.filename, state.setFilename]);

  const [input, setInput] = useState("");

  const renameFile = async () => {

  }

  return (
    <Dialog
      open={isRenameModalOpen}
      onOpenChange={(isOpen) => setIsRenameModalOpen(isOpen)}
    >
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="pb-2">Rename to File</DialogTitle>

          <Input
            id="link"
            defaultValue={filename}
            onChnage={(e) => setInput(e.target.value)}
            onKeyDownCapture={(e) => {
              if(e.key === "Enter") {
                renameFile();
              }
            }}
          />

          <div className="flex justify-end space-x-2 py-3">
            <Button size="sm" className="px-3" variant={"ghost"} onClick={() => setIsRenameModalOpen(false)}>
              <span className="sr-only">Copy</span>
              <Copy className="h-4 w-4" />
            </Button>

            <Button type={'submit'} size="sm" className="px-3" onClick={() => renameFile()}>
              <span className="sr-only">Rename</span>
              <span>Rename</span>
            </Button>
          </div>
        </DialogHeader>

        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
