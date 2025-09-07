import React from "react";
//https://beta.nextjs.org/docs/data-fetching/generating-static-params

export async function generateStaticParams() {
  const names: string[] = ["zia", "zeeshan", "hira"];

  return names.map((name) => {
    name: name;
  });
}

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
