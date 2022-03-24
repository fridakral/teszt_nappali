-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2021. Dec 19. 18:06
-- Kiszolgáló verziója: 10.4.21-MariaDB
-- PHP verzió: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `erpex`
--

DELIMITER $$
--
-- Eljárások
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `addTask` (IN `feladatnev` VARCHAR(50), IN `hatarido` DATE, IN `feladatleiras` VARCHAR(200))  INSERT INTO feladatok(feladatnev, feladatHatarido, feladatLeiras) VALUES (feladatnev, hatarido, feladatleiras)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `deleteFeladathozRendel` (IN `FeladatAz` INT)  DELETE FROM feladathozrendel WHERE feladathozrendel.feladatAz = FeladatAz$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `deleteTask` (IN `FeladatAz` INT)  DELETE FROM feladatok WHERE feladatok.feladatAz = FeladatAz$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `getFeladatAz` ()  SELECT * FROM feladatok ORDER BY feladatAz DESC LIMIT 1$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `myTasks` (IN `felhasznalonev` VARCHAR(50))  select feladatok.feladatAz, feladatok.feladatnev, feladatok.feladatHatarido, feladatok.feladatLeiras from feladatok RIGHT JOIN feladathozrendel ON feladatok.feladatAz = feladathozrendel.feladatAz WHERE feladathozrendel.felhasznalonev=felhasznalonev$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `alkalamaz`
--

CREATE TABLE `alkalamaz` (
  `cegjegyzekszam` char(10) NOT NULL,
  `felhasznalonev` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `alkalamaz`
--

INSERT INTO `alkalamaz` (`cegjegyzekszam`, `felhasznalonev`) VALUES
('0123456789', 'példapéter'),
('1234567897', 'csudijocsaba');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `alkalmazott`
--

CREATE TABLE `alkalmazott` (
  `felhasznalonev` varchar(50) NOT NULL,
  `jelszo` varchar(150) NOT NULL,
  `nev` varchar(50) NOT NULL,
  `szuletesiHely` varchar(50) NOT NULL,
  `szuletesiIdo` date NOT NULL,
  `anyaNev` varchar(50) NOT NULL,
  `allandoLakcim` varchar(50) NOT NULL,
  `ideiglenesLakcim` varchar(50) NOT NULL,
  `szemelyigSzam` char(8) NOT NULL,
  `lakcimkSzam` char(8) NOT NULL,
  `adoazJel` char(10) NOT NULL,
  `tajSzam` char(9) NOT NULL,
  `bankszamlaSzam` varchar(24) NOT NULL,
  `szamlavezetoBankNev` varchar(50) NOT NULL,
  `jogositvanySzam` char(8) DEFAULT NULL,
  `jogositvanyKategoriaSzam` varchar(3) DEFAULT NULL,
  `gyermekekSzama` int(11) DEFAULT NULL,
  `beosztas` varchar(50) NOT NULL,
  `jogosultsag` varchar(50) NOT NULL,
  `egyeb` text DEFAULT NULL,
  `statusz` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `alkalmazott`
--

INSERT INTO `alkalmazott` (`felhasznalonev`, `jelszo`, `nev`, `szuletesiHely`, `szuletesiIdo`, `anyaNev`, `allandoLakcim`, `ideiglenesLakcim`, `szemelyigSzam`, `lakcimkSzam`, `adoazJel`, `tajSzam`, `bankszamlaSzam`, `szamlavezetoBankNev`, `jogositvanySzam`, `jogositvanyKategoriaSzam`, `gyermekekSzama`, `beosztas`, `jogosultsag`, `egyeb`, `statusz`) VALUES
('csudijocsaba', 'sha1$1f8addb9$1$35ad3bf7a8af5b99608b8c5b96a9a297f3a9dc6a', 'Csudijó Csaba', '8972 Alföld', '2001-04-24', 'Csudarossz Anyuka', '5866 Pöst Berén u. 7.', '7624, Pécs Laterum u. 72.', '54782136', '89653241', '6947582314', '369852147', '123987451239874512398745', 'CsudiCsapatCsabaBankja', NULL, NULL, NULL, 'Programozó', 'Vezeto', 'Mert a Csudijó emberek mindig Főnökök ;)', 0),
('csudijocsaba_1', 'sha1$f058f70e$1$e1521e2222ae9b050b78d684ca9c407bca553eb1', 'Csudijo Csaba', 'asd', '0000-00-00', 'asd', 'asd', 'asd', 'asd', 'asd', 'asd', 'asd', 'asd', 'asd', 'asd', 'asd', 0, 'asd', 'Alkalmazott', '', 1),
('fridavagyok', 'sha1$6cd29ad3$1$67c490e9cdd2a39e26d1e56377ca9e8384bde781', 'Frida Vagyok', '8124 Székesfehérvár', '1984-10-05', 'FridaAnya', 'Jakab koli', 'Norvégia', '3425253', '42532526', '9999991111', '2414124', '241435235325235', 'FriderikaBankrobbantása', '24124', '444', 10, 'istenkirálycsászárcárszultánkánkirálynagyfejedelem', 'Vezeto', 'Amúgy 6 gyereke örökbefogadott néger, ami összesen 3 embert ér', 1),
('mintamónika', 'sha1$72589b73$1$7ba066e5a501b919118a9f8cdb8f919450a6e9e5', 'Minta Mónika', 'Ököritófülpös', '1989-11-10', 'Minta Anyu', 'Tunyogmatolcs Példa utca 8.', '', 'qawsedrf', '11111111', '1010101010', '101101101', '', '', '', '', 0, '', 'Alkalmazott', '', 1),
('példapéter', 'sha1$00f4228a$1$df1a487f8740780a1b60f847e3480fe924f3c9e5', 'Példa Péter', '6500, Baja ', '2001-08-18', 'Példa Katalin', '6500, Baja József A. u. 26.', '7624, Pécs Jakabhegyi út 8.', '12345678', '87654321', '0123456789', '123654789', '618618681681681', 'PédaBank', '86741352', 'B', NULL, 'Takarító', 'Alkalmazott', 'Valamit lehet ide is írni', 0),
('valami', 'sha1$bbb9937b$1$f61fa87349970052448a0802fa64a79435854e2b', 'valami', 'itt', '0000-00-00', 'nemtudm', 'asd', 'ads', 'as', 'ads', 'asd', 'asd', 'asd', 'asd', 'asd', 'asd', 0, 'asd', 'Alkalmazott', '', 1);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `archivalt`
--

CREATE TABLE `archivalt` (
  `felhasznalonev` varchar(50) NOT NULL,
  `szuletesiHely` varchar(50) NOT NULL,
  `szuletesiIdo` date NOT NULL,
  `anyaNev` varchar(50) NOT NULL,
  `allandoLakcim` varchar(50) NOT NULL,
  `ideiglenesLakcim` varchar(50) NOT NULL,
  `szemelyigSzam` char(8) NOT NULL,
  `lakcimkSzam` char(8) NOT NULL,
  `adoazJel` char(10) NOT NULL,
  `tajSzam` char(9) NOT NULL,
  `bankszamlaSzam` varchar(24) NOT NULL,
  `szamlaveteoBankNev` varchar(50) NOT NULL,
  `jogositvanySzam` char(8) DEFAULT NULL,
  `jogositvanyKategoriaSzam` varchar(3) NOT NULL,
  `gyermekekSzama` int(11) NOT NULL,
  `beosztas` varchar(50) NOT NULL,
  `jogosultsag` varchar(50) NOT NULL,
  `egyeb` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `ceg`
--

CREATE TABLE `ceg` (
  `cegjegyzekszam` char(10) NOT NULL,
  `cegNev` varchar(50) NOT NULL,
  `adoszam` char(10) NOT NULL,
  `megrendeloAdoszam` char(10) NOT NULL,
  `egyeb` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `ceg`
--

INSERT INTO `ceg` (`cegjegyzekszam`, `cegNev`, `adoszam`, `megrendeloAdoszam`, `egyeb`) VALUES
('1234567897', 'CsabaPolitikusPornó', '1112221110', '8655974321', 'Szlogen: \"ELKÚRTUK\"');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `cegesjarmu`
--

CREATE TABLE `cegesjarmu` (
  `gepjarmuTul` varchar(50) NOT NULL,
  `forgalmiEngedelySzam` char(7) NOT NULL,
  `gepjarmuTipus` varchar(3) NOT NULL,
  `rendszam` char(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `cegesjarmu`
--

INSERT INTO `cegesjarmu` (`gepjarmuTul`, `forgalmiEngedelySzam`, `gepjarmuTipus`, `rendszam`) VALUES
('Főnök Lánya', '1234567', 'B2', 'abc123'),
('Főnök Fia', '7654321', 'B', 'bca321');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `feladathozrendel`
--

CREATE TABLE `feladathozrendel` (
  `felhasznalonev` varchar(50) NOT NULL,
  `feladatAz` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `feladathozrendel`
--

INSERT INTO `feladathozrendel` (`felhasznalonev`, `feladatAz`) VALUES
('csudijocsaba', 34),
('fridavagyok', 34),
('csudijocsaba', 35),
('fridavagyok', 35),
('csudijocsaba', 36),
('fridavagyok', 36),
('csudijocsaba', 37),
('fridavagyok', 37),
('csudijocsaba', 38),
('fridavagyok', 38),
('csudijocsaba', 39),
('fridavagyok', 39),
('példapéter', 38);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `feladatok`
--

CREATE TABLE `feladatok` (
  `feladatAz` int(11) NOT NULL,
  `feladatnev` varchar(50) NOT NULL,
  `feladatHatarido` date NOT NULL,
  `feladatLeiras` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `feladatok`
--

INSERT INTO `feladatok` (`feladatAz`, `feladatnev`, `feladatHatarido`, `feladatLeiras`) VALUES
(31, ' adatainak módosítása', '0000-00-00', 'felhasználó adatmódosítás kérelem'),
(34, 'példapéter adatainak módosítása', '0000-00-00', 'felhasználó adatmódosítás kérelem'),
(35, 'példapéter adatainak módosítása', '0000-00-00', 'felhasználó adatmódosítás kérelem'),
(36, 'példapéter adatainak módosítása', '0000-00-00', 'felhasználó adatmódosítás kérelem'),
(37, 'példapéter adatainak módosítása', '0000-00-00', 'felhasználó adatmódosítás kérelem'),
(38, 'példapéter adatainak módosítása', '0000-00-00', 'felhasználó adatmódosítás kérelem'),
(39, 'példapéter adatainak módosítása', '0000-00-00', 'felhasználó adatmódosítás kérelem');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `jarmuvethasznal`
--

CREATE TABLE `jarmuvethasznal` (
  `felhasznalonev` varchar(50) NOT NULL,
  `forgalmiEngedelySzam` char(7) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `jarmuvethasznal`
--

INSERT INTO `jarmuvethasznal` (`felhasznalonev`, `forgalmiEngedelySzam`) VALUES
('példapéter', '1234567');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `partner`
--

CREATE TABLE `partner` (
  `partnerAdoszam` char(10) NOT NULL,
  `partnerNev` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `partner`
--

INSERT INTO `partner` (`partnerAdoszam`, `partnerNev`) VALUES
('0908070605', 'Fidesz'),
('74968523', 'Partner');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `projekt`
--

CREATE TABLE `projekt` (
  `projektAz` int(11) NOT NULL,
  `projektNev` varchar(50) NOT NULL,
  `inditasIdopontja` date NOT NULL,
  `hatarido` date NOT NULL,
  `megrendeloAdoszam` char(10) NOT NULL,
  `eszkozigeny` text DEFAULT NULL,
  `maxLetszam` int(3) NOT NULL,
  `statusz` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `projekt`
--

INSERT INTO `projekt` (`projektAz`, `projektNev`, `inditasIdopontja`, `hatarido`, `megrendeloAdoszam`, `eszkozigeny`, `maxLetszam`, `statusz`) VALUES
(12, 'Péda Péter Összeverése', '2001-10-25', '2001-11-28', '74968523', '', 2, 0),
(13, 'Péda Péter Összeverése', '2001-10-25', '2001-11-28', '74968523', NULL, 15, 0),
(69, 'Soros Meleg Pedofil Videók', '1000-01-01', '2021-12-24', '0908070605', 'A videóban szereplők mind elmúltak 18 évesek.\r\nKivéve a fiúk', 293, 0);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `projekthezrendel`
--

CREATE TABLE `projekthezrendel` (
  `projektAz` int(11) NOT NULL,
  `felhasznalonev` varchar(50) NOT NULL,
  `vezeto` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `projekthezrendel`
--

INSERT INTO `projekthezrendel` (`projektAz`, `felhasznalonev`, `vezeto`) VALUES
(12, 'heffl', ''),
(69, 'csudijocsaba', 'NEM'),
(69, '', ''),
(13, 'csudijocsaba', 'IGEN'),
(69, 'példapéter', 'NEM');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `szerzodik`
--

CREATE TABLE `szerzodik` (
  `cegjegyzekszam` char(10) NOT NULL,
  `megrendeloAdoszam` char(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `szerzodik`
--

INSERT INTO `szerzodik` (`cegjegyzekszam`, `megrendeloAdoszam`) VALUES
('0123456789', '74968523'),
('1234567897', '74968523');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `alkalmazott`
--
ALTER TABLE `alkalmazott`
  ADD PRIMARY KEY (`felhasznalonev`);

--
-- A tábla indexei `archivalt`
--
ALTER TABLE `archivalt`
  ADD PRIMARY KEY (`felhasznalonev`);

--
-- A tábla indexei `ceg`
--
ALTER TABLE `ceg`
  ADD PRIMARY KEY (`cegjegyzekszam`);

--
-- A tábla indexei `cegesjarmu`
--
ALTER TABLE `cegesjarmu`
  ADD PRIMARY KEY (`forgalmiEngedelySzam`);

--
-- A tábla indexei `feladatok`
--
ALTER TABLE `feladatok`
  ADD PRIMARY KEY (`feladatAz`);

--
-- A tábla indexei `partner`
--
ALTER TABLE `partner`
  ADD PRIMARY KEY (`partnerAdoszam`);

--
-- A tábla indexei `projekt`
--
ALTER TABLE `projekt`
  ADD UNIQUE KEY `ProjektAzonosító` (`projektAz`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `feladatok`
--
ALTER TABLE `feladatok`
  MODIFY `feladatAz` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
