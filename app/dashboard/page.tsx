import React from 'react';
import {auth} from "@clerk/nextjs";
import Dropzone from "@/components/Dropzone";
import {collection, getDocs} from "@firebase/firestore";
import {db} from "@/firebase";
import {FileType} from "@/typings";

const Dashboard = async ({}) => {
  const {userId} = auth();

  const docsResults = await getDocs(collection(db, "users", userId!, "files"));
  const skeletonFiles: FileType[] = docsResults.docs.map((doc) => ({
    id: doc.id,
    filename: doc.data().filename || doc.id,
    timestamp: new Date(doc.data().timestamp?.seconds * 1000) || undefined,
    fullName: doc.data().fullName,
    downloadURL: doc.data().downloadURL,
    type: doc.data().type,
    size: doc.data().size,
  }))

  console.log(skeletonFiles);

  return (
    <div>
      <Dropzone/>
    </div>
  );
};

export default Dashboard;
// by Rokas with ❤️
