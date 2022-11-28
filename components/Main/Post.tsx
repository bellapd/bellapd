import NextLink from "next/link";
import { DateTime } from "luxon";
import type { Post } from "../../lib/types";
import {
  Box,
  Text,
  HStack,
  LinkBox,
  Heading,
  LinkOverlay,
  SimpleGrid,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function Posts({
  posts,
  type,
}: {
  posts: Post[];
  type: string;
}) {
  const isDesktop = useBreakpointValue({ base: false, md: true });
  return (
    <SimpleGrid columns={isDesktop ? 2 : 1} spacing="10" mt="5">
      {posts.map((post: Post) => {
        return (
          <LinkBox
            as="article"
            my={5}
            rounded="md"
            key={post.slug}
            p={5}
            mb="3rem"
          >
            <NextLink href={"/" + type + "/" + post.slug} passHref>
              <LinkOverlay fontStyle="normal">
                <HStack>
                  <Text color="gray.500" fontSize="md" fontFamily="heading">
                    {DateTime.fromISO(post.frontMatter.date).toFormat(
                      "LLLL dd, yyyy"
                    )}
                  </Text>
                  {post.frontMatter.series && (
                    <Box
                      h={7}
                      pl={2}
                      pr={2}
                      bg="gray.100"
                      borderRadius="md"
                      boxShadow="5px 5px 0px rgba(0, 0, 0, 0.1)"
                      _dark={{
                        bg: "gray.500",
                        boxShadow: "5px 5px 0px rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      <Text
                        m="auto"
                        fontSize="sm"
                        fontFamily="heading"
                        color="gray.500"
                        _dark={{
                          color: "gray.200",
                        }}
                      >
                        Series
                      </Text>
                    </Box>
                  )}
                </HStack>
                <Heading
                  as="h2"
                  fontFamily="heading"
                  fontSize="2rem"
                  fontWeight="bold"
                >
                  {post.frontMatter.title}
                </Heading>
              </LinkOverlay>
            </NextLink>
            <Text as="p" color="gray.500" mt={3}>
              {post.frontMatter.description}
            </Text>
          </LinkBox>
        );
      })}
    </SimpleGrid>
  );
}