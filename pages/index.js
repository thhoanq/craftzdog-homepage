import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  UnorderedList,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'

const PublicationItem = ({ title, venue, year, href }) => (
  <Box mb={3} fontSize="sm">
    <Text fontWeight="500">
      {href ? (
        <Link href={href} target="_blank">
          {title}
        </Link>
      ) : (
        title
      )}
    </Text>
    <Text color={useColorModeValue('gray.600', 'gray.400')}>
      {venue} &middot; {year}
    </Text>
  </Box>
)

const ProjectItem = ({ title, description, href }) => (
  <Box mb={3} fontSize="sm">
    <Text fontWeight="500">
      {href ? (
        <Link href={href} target="_blank">
          {title}
        </Link>
      ) : (
        title
      )}
    </Text>
    <Text color={useColorModeValue('gray.600', 'gray.400')}>{description}</Text>
  </Box>
)

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('rgba(196,198,220,0.6)', 'rgba(30,32,48,0.8)')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m Hoang, this is my draft website!
      </Box>

      <Box display={{ md: 'flex' }} alignItems="flex-start" gap={8} mb={2}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title" mb={1}>
            Huy-Hoang Trinh
          </Heading>
          <Box fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
            <Box>Master Student &amp; Teaching Assistant</Box>
            <Box>
              <Link
                as={NextLink}
                href="https://www.hcmus.edu.vn/"
                passHref
                target="_blank"
                fontSize="sm"
              >
                University of Science, VNU-HCM (HCMUS)
              </Link>
            </Box>
          </Box>
        </Box>
        <Box flexShrink={0} mt={{ base: 4, md: 0 }}>
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/thh.jpg"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          I am a master student at the{' '}
          <Link
            as={NextLink}
            href="https://www.hcmus.edu.vn/"
            passHref
            target="_blank"
          >
            Faculty of Electronics and Telecommunications, HCMUS
          </Link>
          , interested in Post-Quantum Cryptography, RISC-V SoC design, and
          hardware accelerators. I also serve as a Teaching Assistant at HCMUS.
          Outside of research, I enjoy spending time with close friends and
          family.
        </Paragraph>
      </Section>

      <Section delay={0.15}>
        <Heading as="h3" variant="section-title">
          Research Interests
        </Heading>
        <UnorderedList fontSize="sm" spacing={1} pl={2}>
          <ListItem>Post-Quantum Cryptography</ListItem>
          <ListItem>RISC-V SoC Architecture</ListItem>
          <ListItem>Hardware Accelerators</ListItem>
        </UnorderedList>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Publications
        </Heading>
        <PublicationItem
          title="Title of Your Paper"
          venue="Conference / Journal Name"
          year="2025"
          href=""
        />
        <PublicationItem
          title="Another Paper Title"
          venue="Conference / Journal Name"
          year="2024"
          href=""
        />
      </Section>

      <Section delay={0.25}>
        <Heading as="h3" variant="section-title">
          Projects
        </Heading>
        <ProjectItem
          title="Project Name"
          description="Short description of what this project does."
          href=""
        />
        <ProjectItem
          title="Another Project"
          description="Short description of what this project does."
          href=""
        />
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2003</BioYear>
          Born in Vietnam.
        </BioSection>
        <BioSection>
          <BioYear>2021–2025</BioYear>
          B.Eng. in Electronics and Telecommunications, HCMUS.
        </BioSection>
        <BioSection>
          <BioYear>2025–present</BioYear>
          M.Eng. student &amp; Teaching Assistant, HCMUS.
        </BioSection>
      </Section>

      <Section delay={0.35}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List spacing={1}>
          <ListItem>
            <Link href="https://github.com/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<IoLogoGithub />}
                size="sm"
                px={2}
              >
                GitHub
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
