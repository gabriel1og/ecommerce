import Link from "next/link";
import { ReactNode } from "react";

export default function GenericLink({
  link,
  content,
}: {
  link: string;
  content: string | ReactNode;
}) {
  return (
    <Link style={{ fontWeight: 600, fontSize: "1.1rem" }} href={link}>
      {content}
    </Link>
  );
}
