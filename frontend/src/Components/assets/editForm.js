import {
  RadioGroup,
  Stack,
  Radio,
  Textarea,
  Input,
  Box,
  Button,
} from "@chakra-ui/react"
import { useState } from "react"

const EditForm = () => {
  const [nmLengkap, setNmLengkap] = useState("")
  const [email, setEmail] = useState("")
  const [noTelp, setNoTelp] = useState("")
  const [kelamin, setKelamin] = useState("")
  const [date, setDate] = useState("")
  const [alamat, setAlamat] = useState("")

  const formRes = () => {
    console.log(`Nama Lengkap: ${nmLengkap}
       Email: ${email}
       NoTelp: ${noTelp}
       Jenis_Kelamin: ${kelamin}
       Date: ${date.substring(0, 10).split("-").reverse().join("-")}
       Alamat: ${alamat}
      `)
  }
  return (
    <>
      <Input
        placeholder="nama lengkap.."
        size="sm"
        bgColor="whiteAlpha.400"
        _placeholder={{ color: "whiteAlpha.400" }}
        width={"25vw"}
        onChange={(e) => setNmLengkap(e.target.value)}
      />
      <Input
        placeholder="email.."
        size="sm"
        bgColor="whiteAlpha.400"
        _placeholder={{ color: "whiteAlpha.400" }}
        width={"25vw"}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="nomor telepon.."
        size="sm"
        bgColor="whiteAlpha.400"
        _placeholder={{ color: "whiteAlpha.400" }}
        width={"25vw"}
        onChange={(e) => setNoTelp(e.target.value)}
      />
      <Box>
        <RadioGroup defaultValue="2">
          <Stack spacing={5} direction="row">
            <Radio
              colorScheme="blue"
              value="Laki-laki"
              onChange={(e) => setKelamin(e.target.value)}
            >
              Laki-laki
            </Radio>
            <Radio
              colorScheme="pink"
              value="Perempuan"
              onChange={(e) => setKelamin(e.target.value)}
            >
              Perempuan
            </Radio>
          </Stack>
        </RadioGroup>
      </Box>
      <Input
        placeholder="Select Date and Time"
        size="ms"
        w={"25vw"}
        type="datetime-local"
        onChange={(e) => setDate(e.target.value)}
      />
      <Textarea
        placeholder="Alamat anda.."
        w={"25vw"}
        bgColor="whiteAlpha.400"
        _placeholder={{ color: "whiteAlpha.400" }}
        onChange={(e) => setAlamat(e.target.value)}
      />
      <Button
        bgColor="gray.800"
        color="#F7FAFC"
        h=""
        w="50%"
        onClick={() => formRes()}
      >
        Simpan
      </Button>
    </>
  )
}

export default EditForm
