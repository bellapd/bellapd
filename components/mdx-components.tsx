import Image from "next/image"
import Link from "next/link"
import type { ReactNode } from "react"

interface MDXComponentsProps {
  [key: string]: any
}

export const mdxComponents: MDXComponentsProps = {
  // Custom heading components
  h1: ({ children, ...props }: { children: ReactNode }) => (
    <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 mt-8 first:mt-0" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: { children: ReactNode }) => (
    <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 mt-8" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: { children: ReactNode }) => (
    <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-3 mt-6" {...props}>
      {children}
    </h3>
  ),

  // Custom paragraph component
  p: ({ children, ...props }: { children: ReactNode }) => (
    <p className="mb-4 leading-relaxed text-lg" {...props}>
      {children}
    </p>
  ),

  // Custom link component
  a: ({ href, children, ...props }: { href?: string; children: ReactNode }) => {
    if (href?.startsWith("http")) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="animated-link text-blue-600 dark:text-blue-400 hover:underline"
          {...props}
        >
          {children}
        </a>
      )
    }
    return (
      <Link href={href || "#"} className="animated-link text-blue-600 dark:text-blue-400 hover:underline" {...props}>
        {children}
      </Link>
    )
  },

  // Custom image component
  img: ({ src, alt, ...props }: { src?: string; alt?: string }) => (
    <div className="my-8">
      <Image src={src || ""} alt={alt || ""} width={800} height={400} className="rounded-lg w-full h-auto" {...props} />
    </div>
  ),

  // Custom blockquote component
  blockquote: ({ children, ...props }: { children: ReactNode }) => (
    <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-6 my-6 italic text-lg" {...props}>
      {children}
    </blockquote>
  ),

  // Custom code block component
  pre: ({ children, ...props }: { children: ReactNode }) => (
    <pre className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 overflow-x-auto my-6 text-sm" {...props}>
      {children}
    </pre>
  ),

  // Inline code component
  code: ({ children, ...props }: { children: ReactNode }) => (
    <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono" {...props}>
      {children}
    </code>
  ),

  // Custom list components
  ul: ({ children, ...props }: { children: ReactNode }) => (
    <ul className="list-disc list-inside mb-4 space-y-2" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: { children: ReactNode }) => (
    <ol className="list-decimal list-inside mb-4 space-y-2" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }: { children: ReactNode }) => (
    <li className="leading-relaxed" {...props}>
      {children}
    </li>
  ),

  // Custom table components
  table: ({ children, ...props }: { children: ReactNode }) => (
    <div className="overflow-x-auto my-6">
      <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600" {...props}>
        {children}
      </table>
    </div>
  ),
  th: ({ children, ...props }: { children: ReactNode }) => (
    <th
      className="border border-gray-300 dark:border-gray-600 px-4 py-2 bg-gray-50 dark:bg-gray-800 font-bold text-left"
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ children, ...props }: { children: ReactNode }) => (
    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2" {...props}>
      {children}
    </td>
  ),

  // Custom horizontal rule
  hr: (props: any) => <hr className="my-8 border-t border-gray-300 dark:border-gray-600" {...props} />,
}
