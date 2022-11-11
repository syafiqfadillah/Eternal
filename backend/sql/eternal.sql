-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 11, 2022 at 04:12 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `eternal`
--

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id_product` int(11) NOT NULL,
  `nm_toko` varchar(20) DEFAULT NULL,
  `nm_product` varchar(30) DEFAULT NULL,
  `deskripsi` varchar(200) DEFAULT NULL,
  `quantity` varchar(5) DEFAULT NULL,
  `harga_product` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id_product`, `nm_toko`, `nm_product`, `deskripsi`, `quantity`, `harga_product`) VALUES
(1, 'garden syapiq', 'syukron flowerS', 'Syukronnnnnnnnnnn!!', '1', '1200000'),
(2, 'DIMCUT', 'Rambutan\'s Tree', 'Pohon yang menghasilkan Rambutan Fruit, like lecy', '15', '250000');

-- --------------------------------------------------------

--
-- Table structure for table `riwayat_beli`
--

CREATE TABLE `riwayat_beli` (
  `id_riwayatbeli` int(11) NOT NULL,
  `id_product` int(10) DEFAULT NULL,
  `nm_toko` varchar(20) DEFAULT NULL,
  `nm_product` varchar(30) DEFAULT NULL,
  `deskripsi` varchar(200) DEFAULT NULL,
  `quantity` varchar(5) DEFAULT NULL,
  `harga_product` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `riwayat_beli`
--

INSERT INTO `riwayat_beli` (`id_riwayatbeli`, `id_product`, `nm_toko`, `nm_product`, `deskripsi`, `quantity`, `harga_product`) VALUES
(1, NULL, 'garden syapiq', 'syukron flowerS', 'Syukronnnnnnnnnnn!!', '1', '1200000'),
(2, NULL, 'Yanglex', 'Asian Banana\'s', 'Pohon ini adalah pohon Pisang yang menghasilkan pisang terbaik di asia, bahkan dunia', '10', '750000'),
(3, NULL, 'garden syapiq', 'syukron flowerS', 'Syukronnnnnnnnnnn!!', '1', '1200000'),
(4, NULL, 'DIMCUT', 'Rambutan\'s Tree', 'Pohon yang menghasilkan Rambutan Fruit, like lecy', '15', '250000'),
(5, 1, 'garden syapiq', 'syukron flowerS', 'Syukronnnnnnnnnnn!!', '1', '1200000'),
(6, 1, 'garden syapiq', 'syukron flowerS', 'Syukronnnnnnnnnnn!!', '1', '1200000'),
(7, 2, 'DIMCUT', 'Rambutan\'s Tree', 'Pohon yang menghasilkan Rambutan Fruit, like lecy', '15', '250000');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id_product`);

--
-- Indexes for table `riwayat_beli`
--
ALTER TABLE `riwayat_beli`
  ADD PRIMARY KEY (`id_riwayatbeli`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id_product` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `riwayat_beli`
--
ALTER TABLE `riwayat_beli`
  MODIFY `id_riwayatbeli` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
