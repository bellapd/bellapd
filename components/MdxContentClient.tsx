"use client";

import dynamic from "next/dynamic";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";

// Dynamically import MdxContent with SSR disabled
const MdxContent = dynamic(
  () => import("./MdxContent").then((mod) => mod.MdxContent),
  { ssr: false }
);

export default function MdxContentClient({
  content,
}: {
  content: MDXRemoteSerializeResult;
}) {
  return <MdxContent content={content} />;
}
