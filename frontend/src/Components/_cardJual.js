import {
  Box,
  Button,
  useDisclosure,
  Text,
  Image,
  Stack,
} from "@chakra-ui/react"
import "../assets/css/jual.css"

import PostForm from "./assets/postForm"
import Tanaman1 from "../assets/img/tanaman1.jpg"

const Jual = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <PostForm />
      <Box className="div-jual">
        <Box className="product">
          <Box className="img">
            <Image
              src={Tanaman1}
              w="15vw"
              m="auto"
              h="15vh"
              borderRadius="20px"
            />
          </Box>
          <Stack direction="column" m="2" fontSize="0.9vw" className="content">
            <Text as="ins">TOKO Syafiq</Text>
            <Text as="samp">
              LALALALLALALALALALALALALALALALALALALALALLALALALALALA
            </Text>
            <Text as="samp">x25</Text>
          </Stack>
          <Box className="total-harga">250000</Box>
        </Box>
      </Box>
    </>
  )
}

export default Jual
