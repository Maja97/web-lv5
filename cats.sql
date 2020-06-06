-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 06, 2020 at 10:25 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cat_fight`
--

-- --------------------------------------------------------

--
-- Table structure for table `cats`
--

CREATE TABLE `cats` (
  `id` int(11) NOT NULL,
  `catname` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
  `age` decimal(3,1) NOT NULL,
  `info` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `wins` int(11) NOT NULL,
  `loss` int(11) NOT NULL,
  `catimage` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cats`
--

INSERT INTO `cats` (`id`, `catname`, `age`, `info`, `wins`, `loss`, `catimage`) VALUES
(1, 'Cat McTerror', '3.0', 'Very loud', 25, 5, './img/cat01.png'),
(2, 'Caterson CatSpyder Silva', '5.0', 'Slim, broke leg in past years', 34, 15, './img/cat02.png'),
(3, 'Firko Cro Cat', '5.0', 'Past his prime, doing seminars', 40, 11, './img/cat03.png'),
(4, 'Catbib Furwmagomedov', '2.5', 'Current champion, wrestle and catmbo is his style', 28, 0, './img/cat04.png'),
(5, 'Kit Kitty Kones', '3.0', 'Bad kitty, loves to use dog food better strength', 26, 1, './img/cat05.png'),
(6, 'Roy BigCat Meowson', '5.0', 'Big kitty, loves to fight', 23, 18, './img/cat06.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cats`
--
ALTER TABLE `cats`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cats`
--
ALTER TABLE `cats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
