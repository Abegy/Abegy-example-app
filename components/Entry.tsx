import Link from "next/link";
import React from "react";

interface EntryProps {
  longName: string;
  href: string;
  key?: string;
}

function Entry({ longName, href, key = "placeholder" }: EntryProps) {
  return (
    <p>
      <Link key={key} href={href}>
        {longName}
      </Link>
    </p>
  );
}

export default Entry;
