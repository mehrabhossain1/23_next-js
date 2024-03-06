import Counter2 from "@/components/Counterr/page";
import React from "react";

const DynamicProjectPage = ({ params, searchParams }) => {
  console.log(params);
  console.log(searchParams);
  return (
    <div>
      <h1>This is dynamic project {params.projectId}</h1>
      <Counter2 />
    </div>
  );
};

export default DynamicProjectPage;
