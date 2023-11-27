import React from 'react';
import {FileType} from "@/typings";
import {Button} from "@/components/ui/button";

const TableWrapper = ({ skeletonFiles }: { skeletonFiles: FileType[] }) => {
  return (
    <div>
      <Button>
        Sort By....
      </Button>

      {/*<DataTable columns={columns} data={initialFiles} />*/}
    </div>
  );
};

export default TableWrapper;
// by Rokas with ❤️
