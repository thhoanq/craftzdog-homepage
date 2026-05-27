import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Flex,
  useColorModeValue
} from '@chakra-ui/react'
import ThemeToggleButton from './theme-toggle-button'

const LinkItem = ({ href, path, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('#8990b3', '#636da6')
  const activeColor = useColorModeValue('#2959aa', '#82aaff')
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      px={2}
      py={1}
      fontSize="sm"
      fontWeight={active ? '600' : '400'}
      color={active ? activeColor : inactiveColor}
      borderBottom={active ? '2px solid' : 'none'}
      borderColor={activeColor}
      _hover={{ color: activeColor, textDecoration: 'none' }}
      {...props}
    >
      {children}
    </Link>
  )
}

const Navbar = props => {
  const { path } = props
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#e1e2ea80', '#1a1b2e80')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Link
            as={NextLink}
            href="/"
            scroll={false}
            fontSize="sm"
            fontWeight="600"
            color={useColorModeValue('#343b59', '#c8d3f5')}
            _hover={{ textDecoration: 'none', opacity: 0.7 }}
          >
            Huy-Hoang Trinh
          </Link>
        </Flex>

        <Box flex={1} />

        <Stack direction="row" align="center" spacing={1}>
          <LinkItem href="/posts" path={path}>
            Posts
          </LinkItem>
          <ThemeToggleButton />
        </Stack>
      </Container>
    </Box>
  )
}

export default Navbar
