import {
    Box,
    List,
    ListItem,
    Heading,
    Link,
    Text,
    Divider,
    useColorMode,
    Kbd,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Textarea,
    Alert,
    Stack,
    AlertIcon,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import Image from 'next/image';

const CustomImage = (props: any) => {
    return (
        <Image
            width={props.width}
            height={props.height}
            src={props.src}
            alt={props.alt}
            layout="responsive" 
        />
    );
};

const CustomLink = (props: any) => {
    const { colorMode } = useColorMode();
    const color = {
        light: 'blue.500',
        dark: 'blue.500'
    };

    const href = props.href;
    const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

    if (isInternalLink) {
        return (
        <NextLink href={href} passHref>
            <Link color={color[colorMode]} {...props} />
        </NextLink>
        );
    }

    return <Link color={color[colorMode]} isExternal {...props} />;
};

const Quote = (props: any) => {
    const { colorMode } = useColorMode();
    const bgColor = {
        light: 'blue.50',
        dark: 'blue.900'
    };

    return (
        <Alert
        mt={4}
        w="98%"
        bg={bgColor[colorMode]}
        variant="left-accent"
        status="info"
        css={{
            '> *:first-of-type': {
            marginTop: 0,
            marginLeft: 8
            }
        }}
        {...props}
        />
    );
};

const DocsHeading = (props: any) => (
    <Heading
        css={{
        scrollMarginTop: '100px',
        scrollSnapMargin: '100px', // Safari
        '&[id]': {
            pointerEvents: 'none'
        },
        '&[id]:before': {
            display: 'block',
            height: ' 6rem',
            marginTop: '-6rem',
            visibility: 'hidden',
            content: `""`
        },
        '&[id]:hover a': { opacity: 1 }
        }}
        {...props}
        mb="1em"
        mt="2em"
    >
        <Box pointerEvents="auto">
        {props.children}
        {props.id && (
            <Box
            aria-label="anchor"
            as="a"
            color="blue.500"
            fontWeight="normal"
            outline="none"
            _focus={{
                opacity: 1,
                boxShadow: 'outline'
            }}
            opacity="0"
            ml="0.375rem"
            href={`#${props.id}`}
            >
            #
            </Box>
        )}
        </Box>
    </Heading>
    );

const Hr = () => {
    const { colorMode } = useColorMode();
    const borderColor = {
        light: 'gray.400',
        dark: 'gray.600'
    };

    return <Divider borderColor={borderColor[colorMode]} my={4} w="100%" />;
};

const MDXComponent = {
    i: (p: any) => <Text as="i" {...p} />,
    small: (p: any) => <Text as="small" {...p} />,
    br: (props: any) => <Box height="24px" {...props} />,
    p: (props: any) => <Text as="p" my={5}  lineHeight="tall" {...props} />,
    strong: (p: any) => <Text as="strong" fontWeight="semibold" {...p} />,
    
    li: (p: any) => <ListItem ml={4} {...p} />,
    ul: (p: any) => <List styleType="disc" spacing={1} {...p} />,
    ol: (p: any) => <List as="ol" styleType="decimal" spacing={1} {...p} />,
    
    h1: (props: any) => <Heading as="h1" size="xl" my={4} {...props} />,
    h2: (props: any) => (
        <DocsHeading as="h2" size="lg" fontWeight="bold" {...props} />
    ),
    h3: (props: any) => (
        <DocsHeading as="h3" size="md" fontWeight="bold" {...props} />
    ),
    h4: (props: any) => (
        <DocsHeading as="h4" size="sm" fontWeight="bold" {...props} />
    ),
    h5: (props: any) => (
        <DocsHeading as="h5" size="sm" fontWeight="bold" {...props} />
    ),
    h6: (props: any) => (
        <DocsHeading as="h6" size="xs" fontWeight="bold" {...props} />
    ),
    hr: Hr,
    a: CustomLink,
    blockquote: Quote,
    image: CustomImage,
    Kbd,
    Stack,
    AlertIcon,
    Alert: (props: any) => <Alert my={5} borderRadius="0.5rem" {...props} />,
    Textarea,
    Text,
    // for table
    tr: (p: any) => <Tr {...p} />,
    th: (p: any) => <Th {...p} />,
    td: (p: any) => <Td {...p} />,
    thead: (p: any) => <Thead {...p} />,
    tbody: (p: any) => <Tbody {...p} />,
    tfoot: (p: any) => <Tfoot {...p} />,
    caption: (p: any) => <TableCaption {...p} />,
    table: (props: any) => <TableContainer><Table variant="striped" colorScheme="teal" {...props} /></TableContainer>,
};

export default MDXComponent;