import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  Input,
  Textarea,
} from "@chakra-ui/react"
import React, { useState, useEffect } from "react"

const PostForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [toko, setToko] = useState("")
  const [tanaman, setTanaman] = useState("")
  const [deskripsi, setDeskripsi] = useState("")
  const [quantity, setQuantity] = useState("")
  const [harga, setHarga] = useState("")

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  return (
    <>
      <Button
        onClick={onOpen}
        className="btnopen"
        bgColor="gray.800"
        color="#F7FAFC"
        fontSize="2vh"
        mt="-10px"
      >
        Jual Product
      </Button>
      <Modal
        closeOnOverlayClick={false}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent backgroundColor="facebook.50">
          <ModalHeader>Post Jual</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <Input
                ref={initialRef}
                placeholder="nama tanaman..."
                onChange={(e) => setTanaman(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <Textarea
                placeholder="deskripsi..."
                onChange={(e) => setDeskripsi(e.target.value)}
              />
            </FormControl>
            <FormControl mt={4}>
              <Input
                placeholder="quantity..."
                onChange={(e) => setQuantity(e.target.value)}
              />
            </FormControl>
            <FormControl mt={4}>
              <Input
                placeholder="harga jual/pcs"
                onChange={(e) => setHarga(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          {/* =============== BUTTON NAV =============== */}
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() =>
                console.log(toko, tanaman, deskripsi, quantity, harga)
              }
            >
              Post
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
export default PostForm
