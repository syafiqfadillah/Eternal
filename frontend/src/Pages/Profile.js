import "../assets/css/profile.css"
import {
  Image,
  Center,
  Box,
  Icon,
  Button,
  Collapse,
  useDisclosure,
} from "@chakra-ui/react"
import { ExternalLinkIcon, ChatIcon } from "@chakra-ui/icons"
import { useEffect, useState } from "react"

// ASSETS
import ProfileImg from "../assets/img/profile.png"
import logoutIcon from "../assets/img/power.png"

// COMPONENT
import Topup from "../Components/_topup"

// REDUX
import { useDispatch, useSelector } from "react-redux"
import { setProfile, setRiwayatBeli } from "../redux/counterSlice"

const Profile = () => {
  // =============== variable ===============
  const { isOpen, onToggle } = useDisclosure()
  const [navname, setNavname] = useState("") // JUDUL CONTENT

  // =============== FETCH DATA ===============
  const profile = useSelector((state) => state.api.profile) // ngambil hasil redux
  const riwayatBeli = useSelector((state) => state.api.riwayatBeli) // ngambil hasil redux
  const dispatch = useDispatch()
  useEffect(() => {
    fetch("http://localhost:5300/profile/profile")
      .then((res) => res.json())
      .then((res) => dispatch(setProfile(res.data[0]))) // statement yang di masukkan
    fetch("http://localhost:5300/profile/data")
      .then((res) => res.json())
      .then((res) => dispatch(setRiwayatBeli(res.data))) // statement yang di masukkan
  }, [])

  // =============== CONVERT RUPIAH ===============
  function convertRupiah(num) {
    const format = num
      .split("")
      .reverse()
      .join("")
      .match(/\d{1,3}/g)
    return `Rp ${format.join(".").split("").reverse().join("")}`
  }

  // =============== DOM ===============
  const showContent = (temp) => {
    return (
      setNavname(temp.target.value),
      document.querySelector(".riwayat-beli").classList.add("hide"),
      document.querySelector(".jual").classList.add("hide"),
      // ====== SHOW CONTENT =========
      document.querySelector(`.${temp.target.name}`).classList.remove("hide")
    )
  }

  console.log(riwayatBeli)
  return (
    <div className="container-profile">
      <div className="profile-div">
        <Box className="profile">
          {/* PROFILE */}
          <Center>
            {" "}
            <Image
              className="profile-img"
              borderRadius="full"
              boxSize="10vw"
              marginTop="5vh"
              src={ProfileImg}
            />
          </Center>

          {/* NAMA PROFILE */}
          <Center>
            <Box
              color="black"
              w="80%"
              mt="2vh"
              lineHeight="4vh"
              fontSize={["sm", "md", "lg", "xl"]}
            >
              {profile.nm_toko}
            </Box>
          </Center>
          <Box fontSize={["sm", "md", "lg", "xl"]}>
            {profile.saldo ? convertRupiah(profile.saldo) : profile.saldo}
          </Box>
          {/* BUTTON PROFILE */}
          <div className="pd">
            <Button
              colorScheme="whiteAlpha"
              variant="link"
              onClick={onToggle}
              mt="3vh"
              fontSize="1.35vw"
            >
              <Icon as={ExternalLinkIcon} mr="5px" />
              Akun saya
            </Button>
            <Collapse in={isOpen} animateOpacity>
              <Box
                p="0"
                h="auto"
                mt="1"
                w="8vw"
                ml="1.8vw"
                bg="rgba(106, 107, 107, 0)"
                className="pd"
              >
                <Button colorScheme="whiteAlpha" variant="link" fontSize="1vw">
                  Edit Profile
                </Button>
                <Button
                  colorScheme="whiteAlpha"
                  variant="link"
                  fontSize="1vw"
                  value="Top up"
                  onClick={(e) => showContent(e)}
                >
                  Top Up
                </Button>
                <Button
                  colorScheme="whiteAlpha"
                  variant="link"
                  ml="-0.85vh"
                  value="Jual"
                  name="jual"
                  fontSize="1vw"
                  onClick={(e) => showContent(e)}
                >
                  Jual
                </Button>
              </Box>
            </Collapse>
            <Button
              colorScheme="whiteAlpha"
              variant="link"
              value="Riwayat Jual"
              name="riwayat-jual"
              mt="5px"
              fontSize="1.3vw"
              onClick={(e) => showContent(e)}
            >
              <Icon as={ChatIcon} mr="5px" />
              Riwayat Jual
            </Button>
            <Button
              colorScheme="whiteAlpha"
              value="Riwayat Beli"
              name="riwayat-beli"
              variant="link"
              mt="5px"
              mb="3vh"
              fontSize="1.3vw"
              onClick={(e) => showContent(e)}
            >
              <Icon as={ChatIcon} mr="5px" />
              Riwayat Beli
            </Button>
          </div>
          {/* */}

          <Button
            colorScheme="whiteAlpha"
            variant="link"
            mt="5px"
            fontSize="1.3vw"
          >
            <Image src={logoutIcon} w="1.5vw" />
            Logout
          </Button>
        </Box>

        {/* =============== CONTENT ===============  */}

        <Box className="profile-maincontent">
          <Box className="judul" fontSize={["sm", "md", "lg", "xl"]}>
            {navname}
          </Box>
          {/* <Box className="riwayat-beli hide">
            {riwayatBeli.map((e, i) => (
              <CardRiwayatBeli key={i} props={e} />
            ))}
          </Box>
          <Box className="jual hide">
            <Jual />
          </Box> */}
          <Box className="topup">
            <Topup />
          </Box>
        </Box>
      </div>
    </div>
  )
}

export default Profile
