import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Huy-Hoang Trinh — Master student &amp; Teaching Assistant at HCMUS, interested in Post-Quantum Cryptography and RISC-V." />
        <meta name="author" content="Huy-Hoang Trinh" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Huy-Hoang Trinh" />
        <meta name="og:title" content="Huy-Hoang Trinh" />
        <meta property="og:type" content="website" />
        <title>Huy-Hoang Trinh</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={20}>
        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
