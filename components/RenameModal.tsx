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
import {doc, updateDoc} from "@firebase/firestore";
import {db} from "@/firebase";
import toast from "react-hot-toast";

export function RenameModal() {
  const { user } = useUser();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useAppStore(state => [state.isDeleteModalOpen, state.setIsDeleteModalOpen]);
  const [isRenameModalOpen, setIsRenameModalOpen] = useAppStore(state => [state.isRenameModalOpen, state.setIsRenameModalOpen]);
  const [fileId, setFileId] = useAppStore(state => [state.fileId, state.setFileId]);
  const [filename, setFilename] = useAppStore(state => [state.filename, state.setFilename]);

  const [input, setInput] = useState("");

  const renameFile = async () => {
    if(!user || !fileId) return;

    const toastId = toast.loading("Renaming file...");

    try {
      await updateDoc(doc(db, "users", user.id, "files", fileId.id), {
        filename: "Rokas",
      });
      toast.success("File renamed successfully", { id: toastId });
      setInput("");
      setIsRenameModalOpen(false);
    } catch (e) {
      toast.error("Something went wrong", { id: toastId });
      console.log(e);
    }
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
              <span className="sr-only">Cancel</span>
              <span>Cancel</span>
            </Button>

            <Button variant={"destructive"} type={'submit'} size="sm" className="px-3" onClick={() => renameFile()}>
              <span className="sr-only">Rename</span>
              <span>Rename</span>
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
