import {
  Text,
  Box,
  Button,
  Grid,
  GridItem,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
} from "@chakra-ui/react"
import React from "react"
import { useDisclosure } from "@chakra-ui/react"
import "../assets/css/topup.css"

const Topup = () => {
  const [value, setValue] = React.useState("")
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()

  function convertRupiah(num) {
    const format = num
      .split("")
      .reverse()
      .join("")
      .match(/\d{1,3}/g)
    return `Rp ${format.join(".").split("").reverse().join("")}`
  }

  return (
    <Box className="topup-div">
      <Text mb="8px">Topup: {value ? convertRupiah(value) : value}</Text>
      <Grid w="100%" templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem w="100%" h="10" bg="transparant">
          {" "}
          <Button
            value="10000"
            className="btn"
            onClick={(e) => setValue(convertRupiah(e.target.value))}
          >
            Rp 5.000
          </Button>
        </GridItem>
        <GridItem w="100%" h="10" bg="transparant">
          {" "}
          <Button
            value="10000"
            className="btn"
            onClick={(e) => setValue(convertRupiah(e.target.value))}
          >
            Rp 10.000
          </Button>
        </GridItem>
        <GridItem w="100%" h="10" bg="transparant">
          {" "}
          <Button
            value="15000"
            className="btn"
            onClick={(e) => setValue(convertRupiah(e.target.value))}
          >
            Rp 15.000
          </Button>
        </GridItem>
        <GridItem w="100%" h="10" bg="transparant">
          {" "}
          <Button
            value="20000"
            className="btn"
            onClick={(e) => setValue(convertRupiah(e.target.value))}
          >
            Rp 20.000
          </Button>
        </GridItem>
        <GridItem w="100%" h="10" bg="transparant">
          {" "}
          <Button
            value="25000"
            className="btn"
            onClick={(e) => setValue(convertRupiah(e.target.value))}
          >
            Rp 25.000
          </Button>
        </GridItem>
        <GridItem w="100%" h="10" bg="transparant">
          {" "}
          <Button
            value="50000"
            className="btn"
            onClick={(e) => setValue(convertRupiah(e.target.value))}
          >
            Rp 50.000
          </Button>
        </GridItem>
        <GridItem w="100%" h="10" bg="transparant">
          {" "}
          <Button
            value="75000"
            className="btn"
            onClick={(e) => setValue(convertRupiah(e.target.value))}
          >
            Rp 75.000
          </Button>
        </GridItem>
        <GridItem w="100%" h="10" bg="transparant">
          <Button
            value="100000"
            className="btn"
            onClick={(e) => setValue(convertRupiah(e.target.value))}
          >
            Rp 100.000
          </Button>
        </GridItem>
        <GridItem w="100%" h="10" bg="transparant">
          <Button
            value="125000"
            className="btn"
            onClick={(e) => setValue(convertRupiah(e.target.value))}
          >
            Rp 125.000
          </Button>
        </GridItem>
        <GridItem w="100%" h="10" bg="transparant">
          <Button
            value="150000"
            className="btn"
            onClick={(e) => setValue(convertRupiah(e.target.value))}
          >
            Rp 150.000
          </Button>
        </GridItem>
        <GridItem w="100%" h="10" bg="transparant">
          <Button
            value="200000"
            className="btn"
            onClick={(e) => setValue(convertRupiah(e.target.value))}
          >
            Rp 200.000
          </Button>
        </GridItem>
        <GridItem w="100%" h="10" bg="transparant">
          {" "}
          <Button
            value="250000"
            className="btn"
            onClick={(e) => setValue(convertRupiah(e.target.value))}
          >
            Rp 250.000
          </Button>
        </GridItem>
        <GridItem w="100%" h="10" bg="transparant">
          <Button
            value="500000"
            className="btn"
            onClick={(e) => setValue(convertRupiah(e.target.value))}
          >
            Rp 500.000
          </Button>
        </GridItem>
        <GridItem w="100%" h="10" bg="transparant">
          <Button
            value="1000000"
            className="btn"
            onClick={(e) => setValue(convertRupiah(e.target.value))}
          >
            Rp 1.000.000
          </Button>
        </GridItem>
        <Button bgColor="gray.800" color="#F7FAFC" w="50%" onClick={onOpen}>
          Top up
        </Button>
        <AlertDialog
          motionPreset="slideInBottom"
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          isOpen={isOpen}
          isCentered
        >
          <AlertDialogOverlay />

          <AlertDialogContent bgColor="gray.800" color="#F7FAFC">
            <AlertDialogHeader>Top up?</AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>
              {`Jumlah uang yang anda akan top up kan adalah ${value},-`}
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose} color="gray.800">
                No
              </Button>
              <Button colorScheme="red" ml={3}>
                Yes
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Grid>
    </Box>
  )
}

export default Topup
