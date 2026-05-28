import { Box, Link } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" fontSize="sm" mt={4}>
      <Box opacity={0.4}>
        &copy; {new Date().getFullYear()} Huy-Hoang Trinh. All Rights Reserved.
      </Box>
      <Box opacity={0.2} fontSize="xs" mt={1}>
        Based on design by{' '}
        <Link href="https://www.craftz.dog/" target="_blank">
          Takuya Matsuyama
        </Link>
        {' · Built with '}
        <Link href="https://claude.ai/code" target="_blank">
          Claude Code
        </Link>
      </Box>
    </Box>
  )
}

export default Footer
