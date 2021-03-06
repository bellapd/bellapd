import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { DateTime } from "luxon";
import {
  FormControl,
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  CloseButton,
  Text,
  VStack,
  Heading,
} from "@chakra-ui/react";
import Layout from "../components/Layout";
import type { IPost } from "../types/post.type";
import Posts from "../components/Posts";
import { useMemo, useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function Blog({ posts }: { posts: IPost[] }): JSX.Element {
  const [search, setSearch] = useState("");
  const filteredPosts = useMemo(() => {
    return posts.filter(
      (post) =>
        post.frontMatter.title.toLowerCase().includes(search.toLowerCase()) ||
        post.frontMatter.description
          .toLowerCase()
          .includes(search.toLowerCase())
    );
  }, [posts, search]);

  return (
    <Layout>
      <VStack>
        <Box textAlign="center">
          <Heading fontSize="3xl" mb={3}>
            Blog
          </Heading>
          <Text>
            I'm actively blogging about <strong>backend</strong> and{" "}
            <strong>frontend</strong> development. Check out the most recent
            discoveries!
          </Text>
        </Box>
      </VStack>

      <FormControl mt={5}>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            fontSize="1.2em"
            px={0}
            zIndex={0}
          >
            <FiSearch aria-hidden />
          </InputLeftElement>
          <Input
            value={search}
            onChange={(e: any) => setSearch(e.target.value)}
            placeholder="Search articles"
          />
          {search.length > 1 && (
            <InputRightElement>
              <CloseButton
                rounded="full"
                size="sm"
                onClick={() => setSearch("")}
              />
            </InputRightElement>
          )}
        </InputGroup>
      </FormControl>
      {filteredPosts.length > 0 && <Posts posts={filteredPosts} type="blog" />}
      {filteredPosts.length === 0 && (
        <Text my={12} fontSize="md">
          No posts found
        </Text>
      )}
    </Layout>
  );
}

export const getStaticProps = async () => {
  const folders = fs.readdirSync(path.join(process.cwd(), "content", "blogs"));

  var posts = folders.map((slug) => {
    const content = fs.readFileSync(
      path.join("content", "blogs", slug, "index.mdx"),
      "utf-8"
    );
    const { data: frontMatter } = matter(content);
    return {
      frontMatter,
      slug: slug,
    };
  });

  posts.sort((a, b) => {
    const aDate: typeof a.frontMatter.date = DateTime.fromFormat(
      a.frontMatter.date,
      "LLLL dd, yyyy"
    );
    const bDate: typeof a.frontMatter.date = DateTime.fromFormat(
      b.frontMatter.date,
      "LLLL dd, yyyy"
    );
    return bDate - aDate;
  });

  return {
    props: {
      posts,
    },
  };
};
