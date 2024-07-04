import React from "react";

const DocsItem = ({ params }: { params: { id: string } }) => {
  console.log("params : ", params);
  return (
    <div>
      <h2 className="text-bold">todo task number : {params.id}</h2>
    </div>
  );
};

export default DocsItem;
