"use client";

import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";
import { mdxComponents } from "./mdx-components";

export function MdxContent({ content }: { content: MDXRemoteSerializeResult }) {
  return <MDXRemote {...content} components={mdxComponents} />;
}
