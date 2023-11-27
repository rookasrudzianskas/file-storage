// @ts-nocheck
"use client";

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
import { useAppStore } from "@/store/store";
import {useUser} from "@clerk/nextjs";
import {deleteObject, ref} from "@firebase/storage";
import {db, storage} from "@/firebase";
import {deleteDoc, doc} from "@firebase/firestore";

export function DeleteModal() {
  const { user } = useUser();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useAppStore(state => [state.isDeleteModalOpen, state.setIsDeleteModalOpen]);
  const [isRenameModalOpen, setIsRenameModalOpen] = useAppStore(state => [state.isRenameModalOpen, state.setIsRenameModalOpen]);
  const [fileId, setFileId] = useAppStore(state => [state.fileId, state.setFileId]);
  const [filename, setFilename] = useAppStore(state => [state.filename, state.setFilename]);

  const deleteFile = async () => {
    if(!user || !fileId) return;
    console.log('FILE ID', fileId);
    const fileRef = ref(storage, `users/${user.id}/files/${fileId.id}`);

    try {
      deleteObject(fileRef).then(async () => {
        deleteDoc(doc(db, "users", user.id, "files", fileId.id)).then(() => {
          console.log("Document successfully deleted!");
        })
      }).finally(() => {
        setIsDeleteModalOpen(false);
      })
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Dialog open={isDeleteModalOpen} onOpenChange={(isOpen) => setIsDeleteModalOpen(isOpen)}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Are you sure you want to delete?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete the file.
          </DialogDescription>
        </DialogHeader>
        <div className="flex space-x-2 py-3">
          <Button
            size={"sm"}
            className="px-3 flex-1"
            variant={"ghost"}
            onClick={() => setIsDeleteModalOpen(false)}
          >
            <span className="sr-only">Cancel</span>
            <span>Cancel</span>
          </Button>

          <Button
            type={"submit"}
            size={"sm"}
            className="px-3 flex-1"
            onClick={() => deleteFile()}
          >
            <span className="sr-only">Delete</span>
            <span>Delete</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
