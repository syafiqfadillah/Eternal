import { Box, Image, Stack, Text, Skeleton } from "@chakra-ui/react"
import React from "react"
import Tanaman1 from "../assets/img/tanaman1.jpg"
import "../assets/css/riwayat_beli.css"

const CardRiwayatBeli = ({ props }) => {
  const [isLoaded, setIsLoaded] = React.useState(false)
  const convertRupiah = () => {
    const format = props.harga_product
      .split("")
      .reverse()
      .join("")
      .match(/\d{1,3}/g)
    return `Rp ${format.join(".").split("").reverse().join("")}`
  }

  setTimeout(() => setIsLoaded(true), 2500)
  //============ RETURN RIWAYAT BELI ==============
  return (
    <Skeleton isLoaded={isLoaded} fadeDuration="3">
      <Box className="profile-product">
        <Box className="product-img">
          <Image
            src={Tanaman1}
            w="15vw"
            m="auto"
            h="15vh"
            borderRadius="20px"
          />
        </Box>
        <Stack direction="column" m="2" fontSize="0.9vw">
          <Text as="ins">{props.nm_toko}</Text>
          <Text as="samp">{props.deskripsi}</Text>
          <Text as="samp">x{props.quantity}</Text>
        </Stack>
        <Box
          w="20%"
          textAlign="center"
          m="2"
          ml="auto"
          fontSize="1.5vw"
          pt="4vh"
          color="white"
        >
          {convertRupiah()}
        </Box>
      </Box>
    </Skeleton>
  )
}

export default CardRiwayatBeli
