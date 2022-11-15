import { Text, Input, Box, Button } from "@chakra-ui/react"
import React, { useState } from "react"

const Topup = () => {
  const [value, setValue] = React.useState("")
  const handleChange = (event) => setValue(event.target.value)

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
      {/* <Input
        variant="flushed"
        value={value}
        onChange={handleChange} // 
        placeholder="Here is a sample placeholder"
        size="sm"
      /> */}

      <Button
        value="50000"
        onClick={(e) => setValue(convertRupiah(e.target.value))}
      >
        Rp 50.000
      </Button>
      <Button
        value="100000"
        onClick={(e) => setValue(convertRupiah(e.target.value))}
      >
        Rp 100.000
      </Button>
      <Button
        value="200000"
        onClick={(e) => setValue(convertRupiah(e.target.value))}
      >
        Rp 200.000
      </Button>
      <Button
        value="250000"
        onClick={(e) => setValue(convertRupiah(e.target.value))}
      >
        Rp 250.000
      </Button>
      <Button
        value="500000"
        onClick={(e) => setValue(convertRupiah(e.target.value))}
      >
        Rp 500.000
      </Button>
      <Button
        value="1000000"
        onClick={(e) => setValue(convertRupiah(e.target.value))}
      >
        Rp 1.000.000
      </Button>
    </Box>
  )
}

export default Topup
