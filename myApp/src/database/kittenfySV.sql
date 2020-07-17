-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: kittenfy
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.11-MariaDB

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
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(45) DEFAULT NULL,
  `image` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Toys','Toys.jpg'),(2,'Costumes','Costume.jpg'),(3,'Sale','Sale.jpg'),(4,'Socks & Gloves','Socks&gloves.jpg'),(5,'T-Shirts','T-Shirts.jpg'),(6,'Jewlery','jewlery.jpg'),(7,'Beds','Beds.jpg'),(8,'Cats Shelvs & Tress','CatShelvs.jpg'),(9,'Leggins','Leggins.jpg');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category_product`
--

DROP TABLE IF EXISTS `category_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category_product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  PRIMARY KEY (`id`,`category_id`,`product_id`),
  KEY `fk_Categories_has_Productos_Categories_idx` (`category_id`),
  KEY `fk_Categories_Products_Products1_idx` (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category_product`
--

LOCK TABLES `category_product` WRITE;
/*!40000 ALTER TABLE `category_product` DISABLE KEYS */;
INSERT INTO `category_product` VALUES (1,3,3),(2,3,4),(3,3,5),(4,4,4),(5,4,5),(6,6,3),(7,2,3),(29,2,0),(30,3,0),(31,4,0),(32,2,0),(33,4,0),(34,2,0),(35,3,0),(36,4,0),(54,2,25),(55,3,25),(56,9,28);
/*!40000 ALTER TABLE `category_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(45) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `discount` int(11) DEFAULT NULL,
  `image` varchar(45) DEFAULT NULL,
  `description` varchar(450) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `imageb` varchar(45) DEFAULT NULL,
  `imagec` varchar(45) DEFAULT NULL,
  `imaged` varchar(45) DEFAULT NULL,
  `cost` int(11) DEFAULT NULL,
  `sku` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (3,'Flopping Fish Cat Toy',30,25,'productImages-1591974160796.png','Self Moving.The FIRST Flopping Fish Cat Toy that moves on its own! This Floppy Fish Cat Toy will keep your kitty entertained for hours with its wagging and dancing moves.,',12,'productImages-1591973659329.jpg','productImages-1591973659335.png','productImages-1591973683400.png',NULL,NULL),(4,'Banana Cat Bed',62,50,'banana.jpeg','Your cat will, literally, go BANANAS over this bed. It\'s the perfect bed for YOUR KITTY! It will be its own soft, cozy & comfy spot',142,'productImages-1591974456496.jpg','productImages-1591974456517.jpg',NULL,NULL,NULL),(5,'Marshmallow Cat Bed',60,50,'productImages-1591976827009.jpg','Your Kitty is going to looove snuggling on this Super Comfy Marshmallow Bed!\r\nTreat your loved one with this luxurious, soft & comfy fake fur bed. ',41,'productImages-1591976827060.jpg','productImages-1591976827074.jpg','productImages-1591976827185.jpg',NULL,NULL),(6,'Windmill Cat Toy',30,25,'productImages-1591987201776.jpg','THE NEW FIDGET SPINNER FOR CATS! \r\nThis Windmill Cat Toy spins just like a fidget spinner keeping cats entertained for hours!',31,'productImages-1591987201798.jpg','productImages-1591987201816.jpg','productImages-1591987201826.jpg',NULL,NULL),(7,'Kitty Cartoon Tall Mug',18,4,'productImages-1591989444412.jpg','This purrfect Mug is just for YOU!\r\nStart you day with this pawsome Mug, having a warm sip of your favourite drink while watching this adorable kitty. The Kitty Cartoon Tall Mug will ensure that you\'ll start your day with the right paw.',31,'productImages-1591989444463.jpg',NULL,NULL,NULL,NULL),(8,'Double Cat Shelf',140,0,'productImages-1592185936147.jpg','Our Wood & Canvas Cat Double Shelf is the best way to fulfill your kitty’s climbing needs within the safety of your home. Designed for jumping, sleeping and playing, it’s everything your cat could wish for.',9,'doubleCatShelfb.jpg','doubleCatShelfc.jpg','doubleCatShelfd.jpg',NULL,NULL),(25,'Pelota Loca',123,12,'productImages-1594952727947.jpg','wbgsnbdsgbsfhngbfed\r\n            \r\n            ',12,'productImages-1594952727956.jpg','productImages-1594952727963.jpg','productImages-1594952727976.jpg',1,'vdwfefq'),(26,'wddqweveq',12,1,'productImages-1594953153468.jpg','advfqwvfe',12,'productImages-1594953153475.jpg','','',1,'dvdqv'),(27,'fvdqwvfqwvf',123,12,'productImages-1594953265985.jpg','fvdvfveqvfeq',12,'productImages-1594953265991.jpg','','',13,'fvdvfvfd'),(28,'Pelota Loca',1234,12,'productImages-1594961838991.jpg','Holis!            \r\n            \r\n            ',123,'','','',123,'1regefwe'),(29,'Este Anda Perfecto12',123,12,'productImages-1594954248218.jpg','Esta es la que va ameo!\r\n            \r\n            \r\n            \r\n            ',12,'productImages-1594954248223.jpg','productImages-1594954248230.jpg','',12,'vcewx');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` char(100) NOT NULL,
  `password2` char(100) NOT NULL,
  `telephone` varchar(45) NOT NULL,
  `address` varchar(45) NOT NULL,
  `number` varchar(45) NOT NULL,
  `zipcode` varchar(45) NOT NULL,
  `state` varchar(45) NOT NULL,
  `country` varchar(45) NOT NULL,
  `image` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'pepe','juan','','','','','','','','','',''),(2,'Fran ','Mainardis','franwow2@hotmail.com','1234123','1234123','1176584756','chubut','324','2213','Escobar','Argentina','userAvatar-1593056748578.png'),(3,'pepe','juan','pepejorge@gmail.com','1234123','1234123','124123412','guido','1640','2131','recoleta','Argentina','userAvatar-1593057020766.png'),(4,'Sebastian','Vueso','sv@sv.com','$2a$10$KvYOHYAl6S3JPO0r6BwkF.kXXaR9WB4H9A30.WDnHlYD5d3OMFRwe','$2a$10$0ZzmEx/R8yz1M8gKsr37Q.PZS16SOmltL/L.uPe6d7KKCJ0SWr.mO','0111531421874','Harcourt St','16','02116','Massachusetts','Estados Unidos','userAvatar-1593060883440.jpg'),(5,'Gabriel','Frum','gabi@gabi.com','$2a$10$/bk.pHY/va4s0xbC9R7I4.zgpshHJa7tR5MxktEiGp..tqQQIWTgK','$2a$10$uSUndgnWEqgrAgTyVnx/TO5/0RzF/guXNNuacIUFOXeuXwZWYcAuW','1234567654','Harcourt St','16','02116','Massachusetts','Estados Unidos','userAvatar-1593061315456.jpg'),(6,'Mateo','Barbato','mateobarbato1@hotmail.com','$2a$10$QgNXovmY4GXl..W9RDw4wuXwe1GZng5ScTP.vp4MHBWS.Jxrese3u','$2a$10$z8NQwU51WTDK1PsmNTlOf.z/YLF37NOox11pWrp3CeDWMRPmj/3Ae','1141234912','eva peron','3300','1619','BS PROVINCIA','Argentina',''),(7,'Cata','castelli','catacastelli@gmail.com','$2a$10$ZzJ3OgnNPYe1LPrpce10MO/hpuxBkzWirjTl3viXvwr3FJ8AWQ.x.','$2a$10$b1mBqic7kDwb2n9BcMWR6uHgKIC878iEsaq5L6eYQhLSJr3ocmpK.','1164773550','eva peron','3300','1619','BS PROVINCIA','Argentina','userAvatar-1593225766368.png'),(10,'Sebastian','Vueso','seb@vue.so','$2a$10$iUHLgBadU7LKE5NJGZ.LlOJOu23/W7Ur7IRxG2GrZnIxrH/6dBHzi','$2a$10$0Fuvz/5IHOqiJibJD./jWOeaRtC.qxWo8pgVA3kcENRunmK6EiWE2','1234321','Amado Boudou','1234','1234','Arkansas','Peronia','userAvatar-1594905710318.jpg'),(12,'Juan','Perez','juan@perez.com','$2a$10$MlPLssQlEwczzkwkLQRTn.0cCFaXLeAv.Es637HUHul2uOsKqNllS','$2a$10$TgfE2kUkQOsomQi1s/pOR.CseFDX2w.uzJyKUNifZn0pOxfUNFMRq','1234321','Calle falsa','123','1234','Massachusetts','Estados Unidos','userAvatar-1594918747906.jpg'),(13,'Juan','Perez','juan@perez.com','$2a$10$JH6mKnU.pKC4ljHxtVs4hOdXPs.lk2z53HWrpj7kVit.0dcWI2FUC','$2a$10$fPhe8IfQyGDke45nOyQV2Oo8fWHw2jWTFyxBAfTowWs/2es6jweIm','1234321','Calle falsa','123','1234','Massachusetts','Estados Unidos','userAvatar-1594918868072.jpg');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-07-17  2:04:41
