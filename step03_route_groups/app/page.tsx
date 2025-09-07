// import Image from "next/image";

import Link from "next/link";

export default function Home() {
  return (
    <div>
      Hello world from Usama Israr Khan!
      <br />
      <Link href={"/name"}>Go to name page</Link>
    </div>
  );
}
