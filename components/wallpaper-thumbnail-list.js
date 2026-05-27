import { SimpleGrid, Image } from '@chakra-ui/react'

const WallpaperThumbnailList = ({ numOfImages, urlForImage, alt }) => {
  return (
    <SimpleGrid columns={[3, 3, 4]} gap={6}>
      {Array.from(Array(numOfImages).keys())
        .map(i => i + 1)
        .map(i => (
          <Image
            key={i}
            borderRadius="lg"
            w="full"
            src={urlForImage(i)}
            alt={`${alt} ${i}`}
            mb={4}
          />
        ))}
    </SimpleGrid>
  )
}

export default WallpaperThumbnailList
