-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: 127.0.0.1    Database: Prueba
-- ------------------------------------------------------
-- Server version	5.7.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Categories`
--

DROP TABLE IF EXISTS `Categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(45) DEFAULT NULL,
  `image` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Categories`
--

LOCK TABLES `Categories` WRITE;
/*!40000 ALTER TABLE `Categories` DISABLE KEYS */;
INSERT INTO `Categories` VALUES (1,'Toys','Toys.jpg'),(2,'Costumes','Costume.jpg'),(3,'Sale','Sale.jpg'),(4,'Socks & Gloves','Socks&gloves.jpg'),(5,'T-Shirts','T-Shirts.jpg'),(6,'Jewlery','jewlery.jpg'),(7,'Beds','Beds.jpg'),(8,'Cats Shelvs & Tress','CatShelvs.jpg'),(9,'Leggins','Leggins.jpg');
/*!40000 ALTER TABLE `Categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Categories_Products`
--

DROP TABLE IF EXISTS `Categories_Products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Categories_Products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `categories_id` int(11) NOT NULL,
  `products_id` int(11) NOT NULL,
  PRIMARY KEY (`id`,`categories_id`,`products_id`),
  KEY `fk_Categories_has_Productos_Categories_idx` (`categories_id`),
  KEY `fk_Categories_Products_Products1_idx` (`products_id`),
  CONSTRAINT `fk_Categories_Products_Categories` FOREIGN KEY (`categories_id`) REFERENCES `Categories` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Categories_Products_Products1` FOREIGN KEY (`products_id`) REFERENCES `Products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Categories_Products`
--

LOCK TABLES `Categories_Products` WRITE;
/*!40000 ALTER TABLE `Categories_Products` DISABLE KEYS */;
/*!40000 ALTER TABLE `Categories_Products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Products`
--

DROP TABLE IF EXISTS `Products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(45) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `discount` varchar(45) DEFAULT NULL,
  `image` varchar(45) DEFAULT NULL,
  `description` varchar(450) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Products`
--

LOCK TABLES `Products` WRITE;
/*!40000 ALTER TABLE `Products` DISABLE KEYS */;
INSERT INTO `Products` VALUES (1,'Gatitos',123,'12','gatitos.jpg','gatitos jpg ',12),(2,'Cat Toy',123,'41','cattoy.jpg','a toy for cats',90),(3,'Flopping Fish Cat Toy',30,'25','productImages-1591974160796.png','Self Moving.The FIRST Flopping Fish Cat Toy that moves on its own! This Floppy Fish Cat Toy will keep your kitty entertained for hours with its wagging and dancing moves.,',12),(4,'Banana Cat Bed',62,'50','productImages-1591974456481.jpg','Your cat will, literally, go BANANAS over this bed. It\'s the perfect bed for YOUR KITTY! It will be its own soft, cozy & comfy spot',NULL),(5,'Marshmallow Cat Bed',60,'50','productImages-1591976827009.jpg','Your Kitty is going to looove snuggling on this Super Comfy Marshmallow Bed!\r\nTreat your loved one with this luxurious, soft & comfy fake fur bed. ',41),(6,'Windmill Cat Toy',30,'25','productImages-1591987201776.jpg','THE NEW FIDGET SPINNER FOR CATS! \r\nThis Windmill Cat Toy spins just like a fidget spinner keeping cats entertained for hours!',31),(7,'Kitty Cartoon Tall Mug',18,'4','productImages-1591989444412.jpg','This purrfect Mug is just for YOU!\r\nStart you day with this pawsome Mug, having a warm sip of your favourite drink while watching this adorable kitty. The Kitty Cartoon Tall Mug will ensure that you\'ll start your day with the right paw.',31),(8,'Double Cat Shelf',140,'0','productImages-1592185936147.jpg','Our Wood & Canvas Cat Double Shelf is the best way to fulfill your kitty’s climbing needs within the safety of your home. Designed for jumping, sleeping and playing, it’s everything your cat could wish for.',9);
/*!40000 ALTER TABLE `Products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(150) NOT NULL,
  `password2` varchar(150) NOT NULL,
  `telephone` varchar(45) NOT NULL,
  `address` varchar(45) NOT NULL,
  `number` varchar(45) NOT NULL,
  `zipcode` varchar(45) NOT NULL,
  `state` varchar(45) NOT NULL,
  `country` varchar(45) NOT NULL,
  `image` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (1,'pepe','juan','','','','','','','','','',''),(2,'Fran ','Mainardis','franwow2@hotmail.com','1234123','1234123','1176584756','chubut','324','2213','Escobar','Argentina','userAvatar-1593056748578.png'),(3,'pepe','juan','pepejorge@gmail.com','1234123','1234123','124123412','guido','1640','2131','recoleta','Argentina','userAvatar-1593057020766.png'),(4,'Sebastian','Vueso','sv@sv.com','$2a$10$KvYOHYAl6S3JPO0r6BwkF.kXXaR9WB4H9A30.WDnHlYD5d3OMFRwe','$2a$10$0ZzmEx/R8yz1M8gKsr37Q.PZS16SOmltL/L.uPe6d7KKCJ0SWr.mO','0111531421874','Harcourt St','16','02116','Massachusetts','Estados Unidos','userAvatar-1593060883440.jpg'),(5,'Gabriel','Frum','gabi@gabi.com','$2a$10$/bk.pHY/va4s0xbC9R7I4.zgpshHJa7tR5MxktEiGp..tqQQIWTgK','$2a$10$uSUndgnWEqgrAgTyVnx/TO5/0RzF/guXNNuacIUFOXeuXwZWYcAuW','1234567654','Harcourt St','16','02116','Massachusetts','Estados Unidos','userAvatar-1593061315456.jpg'),(6,'Mateo','Barbato','mateobarbato1@hotmail.com','$2a$10$QgNXovmY4GXl..W9RDw4wuXwe1GZng5ScTP.vp4MHBWS.Jxrese3u','$2a$10$z8NQwU51WTDK1PsmNTlOf.z/YLF37NOox11pWrp3CeDWMRPmj/3Ae','1141234912','eva peron','3300','1619','BS PROVINCIA','Argentina',''),(7,'Cata','castelli','catacastelli@gmail.com','$2a$10$ZzJ3OgnNPYe1LPrpce10MO/hpuxBkzWirjTl3viXvwr3FJ8AWQ.x.','$2a$10$b1mBqic7kDwb2n9BcMWR6uHgKIC878iEsaq5L6eYQhLSJr3ocmpK.','1164773550','eva peron','3300','1619','BS PROVINCIA','Argentina','userAvatar-1593225766368.png');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-07-15 15:18:08
