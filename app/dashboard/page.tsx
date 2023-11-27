import React from 'react';
import {auth} from "@clerk/nextjs";

const Dashboard = ({}) => {
  const { userId } = auth();
  return (
    <div>
      Dashboard {userId}
    </div>
  );
};

export default Dashboard;
// by Rokas with ❤️
