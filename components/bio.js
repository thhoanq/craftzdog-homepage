import { Box, Flex } from '@chakra-ui/react'

export const BioSection = ({ children }) => (
  <Flex fontSize="sm" mb={2} gap={4}>
    {children}
  </Flex>
)

export const BioYear = ({ children }) => (
  <Box flexShrink={0} w="100px" fontWeight="bold" fontSize="sm">
    {children}
  </Box>
)
