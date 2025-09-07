// import Image from "next/image";

import Link from "next/link";

export default function Home() {
  return (
    <div>
      Hello world from Usama Israr Khan!
      <br />
      <Link href={"/Zia"}>Go to Zia page</Link>
      <br />
      <Link href={"/Zeeshan"}>Go to Zeeshan page</Link>
      <br />
      <Link href={"/Hira"}>Go to Hira page</Link>
      <br />
      You can also create a dynamic page by entring this URL in your browser :
      http://localhost:3000/xyz
    </div>
  );
}
