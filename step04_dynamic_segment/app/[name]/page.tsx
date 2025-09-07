import React from "react";

const GiveName = ({
  params,
  searchParams,
}: {
  params: { name: string };
  searchParms: { id: string };
}) => {
  return <div>My name is {params.name}</div>;
};

export default GiveName;
