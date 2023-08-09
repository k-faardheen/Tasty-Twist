-- phpMyAdmin SQL Dump
-- version 6.0.0-dev+20230809.41c84321fc
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 09, 2023 at 09:37 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.1.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tasty_twist`
--

-- --------------------------------------------------------

--
-- Table structure for table `Beef`
--

CREATE TABLE `Beef` (
  `id` int(11) NOT NULL,
  `item_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Beef`
--

INSERT INTO `Beef` (`id`, `item_name`) VALUES
(1, 'Ground Beef'),
(2, 'Steak'),
(3, 'Roast Beef'),
(4, 'Beef Ribs'),
(5, 'Beef Brisket'),
(6, 'Beef Tenderloin'),
(7, 'Chuck Roast'),
(8, 'Beef Shank'),
(9, 'Beef Liver'),
(10, 'Beef Heart'),
(11, 'Beef Tongue'),
(12, 'Beef Bones'),
(13, 'Beef Broth'),
(14, 'Beef Stock'),
(15, 'Beef Jerky'),
(16, 'Beef Stew Meat'),
(17, 'Corned Beef'),
(18, 'Pastrami'),
(19, 'Beef Sausage'),
(20, 'Beef Patties'),
(21, 'Beef Kabobs'),
(22, 'Beef Stir-Fry'),
(23, 'Beef Tacos'),
(24, 'Beef Burritos'),
(25, 'Beef Chili');

-- --------------------------------------------------------

--
-- Table structure for table `Cheeses`
--

CREATE TABLE `Cheeses` (
  `id` int(11) NOT NULL,
  `item_name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Cheeses`
--

INSERT INTO `Cheeses` (`id`, `item_name`) VALUES
(1, 'Cheddar'),
(2, 'Mozzarella'),
(3, 'Parmesan'),
(4, 'Swiss'),
(5, 'Brie'),
(6, 'Gouda'),
(7, 'Feta'),
(8, 'Blue Cheese'),
(9, 'Provolone'),
(10, 'Goat Cheese'),
(11, 'Havarti'),
(12, 'Monterey Jack'),
(13, 'Pepper Jack'),
(14, 'Gruyere'),
(15, 'Colby'),
(16, 'Camembert'),
(17, 'Ricotta'),
(18, 'Fontina'),
(19, 'Emmental'),
(20, 'Manchego'),
(21, 'Asiago'),
(22, 'Muenster'),
(23, 'Havarti'),
(24, 'Chevre'),
(25, 'Gorgonzola');

-- --------------------------------------------------------

--
-- Table structure for table `Chickens`
--

CREATE TABLE `Chickens` (
  `id` int(11) NOT NULL,
  `item_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Chickens`
--

INSERT INTO `Chickens` (`id`, `item_name`) VALUES
(1, 'Chicken Breast'),
(2, 'Chicken Thighs'),
(3, 'Chicken Drumsticks'),
(4, 'Whole Chicken'),
(5, 'Ground Chicken'),
(6, 'Chicken Wings'),
(7, 'Chicken Tenders'),
(8, 'Chicken Sausage'),
(9, 'Chicken Nuggets'),
(10, 'Chicken Liver'),
(11, 'Chicken Gizzards'),
(12, 'Chicken Hearts'),
(13, 'Cornish Hen'),
(14, 'Chicken Livers'),
(15, 'Chicken Feet'),
(16, 'Chicken Necks'),
(17, 'Chicken Bones'),
(18, 'Chicken Broth'),
(19, 'Chicken Stock'),
(20, 'Chicken Bouillon'),
(21, 'Chicken Gravy'),
(22, 'Chicken Liver Pate'),
(23, 'Chicken Liver Mousse'),
(24, 'Chicken Curry'),
(25, 'Chicken Stir-Fry'),
(26, 'Chicken Kebabs');

-- --------------------------------------------------------

--
-- Table structure for table `Dairy_Eggs`
--

CREATE TABLE `Dairy_Eggs` (
  `id` int(11) NOT NULL,
  `item_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Dairy_Eggs`
--

INSERT INTO `Dairy_Eggs` (`id`, `item_name`) VALUES
(1, 'Milk'),
(2, 'Eggs'),
(3, 'Butter'),
(4, 'Yogurt'),
(5, 'Cheese'),
(6, 'Sour Cream'),
(7, 'Cream Cheese'),
(8, 'Heavy Cream'),
(9, 'Half and Half'),
(10, 'Whipping Cream'),
(11, 'Greek Yogurt'),
(12, 'Cottage Cheese'),
(13, 'Mozzarella'),
(14, 'Cheddar'),
(15, 'Parmesan'),
(16, 'Feta'),
(17, 'Ricotta'),
(18, 'Swiss Cheese'),
(19, 'Gouda'),
(20, 'Brie'),
(21, 'Creamer'),
(22, 'Evaporated Milk'),
(23, 'Condensed Milk'),
(24, 'Sour Cream'),
(25, 'Egg Whites');

-- --------------------------------------------------------

--
-- Table structure for table `Fish`
--

CREATE TABLE `Fish` (
  `id` int(11) NOT NULL,
  `item_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Fish`
--

INSERT INTO `Fish` (`id`, `item_name`) VALUES
(1, 'Salmon'),
(2, 'Tilapia'),
(3, 'Trout'),
(4, 'Cod'),
(5, 'Haddock'),
(6, 'Halibut'),
(7, 'Mahi Mahi'),
(8, 'Swordfish'),
(9, 'Tuna'),
(10, 'Sardines'),
(11, 'Anchovies'),
(12, 'Mackerel'),
(13, 'Bass'),
(14, 'Catfish'),
(15, 'Grouper'),
(16, 'Snapper'),
(17, 'Carp'),
(18, 'Arctic Char'),
(19, 'Flounder'),
(20, 'Perch'),
(21, 'Pike'),
(22, 'Rainbow Trout'),
(23, 'Whitefish'),
(24, 'Walleye'),
(25, 'Caviar');

-- --------------------------------------------------------

--
-- Table structure for table `Fruits`
--

CREATE TABLE `Fruits` (
  `id` int(11) NOT NULL,
  `item_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Fruits`
--

INSERT INTO `Fruits` (`id`, `item_name`) VALUES
(1, 'Apples'),
(2, 'Bananas'),
(3, 'Oranges'),
(4, 'Strawberries'),
(5, 'Blueberries'),
(6, 'Grapes'),
(7, 'Pineapple'),
(8, 'Mangoes'),
(9, 'Kiwi'),
(10, 'Peaches'),
(11, 'Plums'),
(12, 'Watermelon'),
(13, 'Cantaloupe'),
(14, 'Lemons'),
(15, 'Limes'),
(16, 'Cherries'),
(17, 'Pears'),
(18, 'Raspberries'),
(19, 'Blackberries'),
(20, 'Cranberries'),
(21, 'Apricots'),
(22, 'Grapefruit'),
(23, 'Pomegranate'),
(24, 'Nectarines'),
(25, 'Dragon Fruit');

-- --------------------------------------------------------

--
-- Table structure for table `Herbs_Spices`
--

CREATE TABLE `Herbs_Spices` (
  `id` int(11) NOT NULL,
  `item_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Herbs_Spices`
--

INSERT INTO `Herbs_Spices` (`id`, `item_name`) VALUES
(1, 'Basil'),
(2, 'Thyme'),
(3, 'Rosemary'),
(4, 'Oregano'),
(5, 'Sage'),
(6, 'Parsley'),
(7, 'Cilantro'),
(8, 'Dill'),
(9, 'Mint'),
(10, 'Chives'),
(11, 'Cumin'),
(12, 'Coriander'),
(13, 'Turmeric'),
(14, 'Cinnamon'),
(15, 'Paprika'),
(16, 'Chili Powder'),
(17, 'Cayenne Pepper'),
(18, 'Garlic Powder'),
(19, 'Onion Powder'),
(20, 'Ginger'),
(21, 'Nutmeg'),
(22, 'Cloves'),
(23, 'Cardamom'),
(24, 'Bay Leaves'),
(25, 'Allspice');

-- --------------------------------------------------------

--
-- Table structure for table `Pantry_Essentials`
--

CREATE TABLE `Pantry_Essentials` (
  `id` int(11) NOT NULL,
  `item_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Pantry_Essentials`
--

INSERT INTO `Pantry_Essentials` (`id`, `item_name`) VALUES
(1, 'Salt'),
(2, 'Pepper'),
(3, 'Olive Oil'),
(4, 'Flour'),
(5, 'Sugar'),
(6, 'Rice'),
(7, 'Pasta'),
(8, 'Canned Tomatoes'),
(9, 'Canned Beans'),
(10, 'Spaghetti'),
(11, 'Onions'),
(12, 'Garlic'),
(13, 'Potatoes'),
(14, 'Bread'),
(15, 'Cereal'),
(16, 'Peanut Butter'),
(17, 'Jam or Jelly'),
(18, 'Honey'),
(19, 'Soy Sauce'),
(20, 'Vinegar'),
(21, 'Coffee'),
(22, 'Tea'),
(23, 'Oats'),
(24, 'Nuts'),
(25, 'Canned Tuna');

-- --------------------------------------------------------

--
-- Table structure for table `Seafood`
--

CREATE TABLE `Seafood` (
  `id` int(11) NOT NULL,
  `item_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Seafood`
--

INSERT INTO `Seafood` (`id`, `item_name`) VALUES
(1, 'Shrimp'),
(2, 'Crab'),
(3, 'Lobster'),
(4, 'Crawfish'),
(5, 'Clams'),
(6, 'Mussels'),
(7, 'Oysters'),
(8, 'Scallops'),
(9, 'Squid'),
(10, 'Octopus'),
(11, 'Calamari'),
(12, 'Mackerel'),
(13, 'Anchovies'),
(14, 'Sardines'),
(15, 'Smoked Salmon'),
(16, 'Trout'),
(17, 'Tuna'),
(18, 'Salmon'),
(19, 'Cod'),
(20, 'Haddock'),
(21, 'Herring'),
(22, 'Pollock'),
(23, 'Sole'),
(24, 'Flounder'),
(25, 'Catfish');

-- --------------------------------------------------------

--
-- Table structure for table `Vegetables_Greens`
--

CREATE TABLE `Vegetables_Greens` (
  `id` int(11) NOT NULL,
  `item_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Vegetables_Greens`
--

INSERT INTO `Vegetables_Greens` (`id`, `item_name`) VALUES
(1, 'Lettuce'),
(2, 'Tomatoes'),
(3, 'Cucumbers'),
(4, 'Carrots'),
(5, 'Bell Peppers'),
(6, 'Spinach'),
(7, 'Broccoli'),
(8, 'Cauliflower'),
(9, 'Onions'),
(10, 'Garlic'),
(11, 'Zucchini'),
(12, 'Green Beans'),
(13, 'Kale'),
(14, 'Celery'),
(15, 'Potatoes'),
(16, 'Mushrooms'),
(17, 'Peas'),
(18, 'Corn'),
(19, 'Asparagus'),
(20, 'Brussels Sprouts'),
(21, 'Cabbage'),
(22, 'Radishes'),
(23, 'Eggplant'),
(24, 'Artichokes'),
(25, 'Swiss Chard');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Beef`
--
ALTER TABLE `Beef`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Cheeses`
--
ALTER TABLE `Cheeses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Chickens`
--
ALTER TABLE `Chickens`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Dairy_Eggs`
--
ALTER TABLE `Dairy_Eggs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Fish`
--
ALTER TABLE `Fish`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Fruits`
--
ALTER TABLE `Fruits`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Herbs_Spices`
--
ALTER TABLE `Herbs_Spices`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Pantry_Essentials`
--
ALTER TABLE `Pantry_Essentials`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Seafood`
--
ALTER TABLE `Seafood`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Vegetables_Greens`
--
ALTER TABLE `Vegetables_Greens`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Beef`
--
ALTER TABLE `Beef`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `Cheeses`
--
ALTER TABLE `Cheeses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `Chickens`
--
ALTER TABLE `Chickens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `Dairy_Eggs`
--
ALTER TABLE `Dairy_Eggs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `Fish`
--
ALTER TABLE `Fish`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `Fruits`
--
ALTER TABLE `Fruits`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `Herbs_Spices`
--
ALTER TABLE `Herbs_Spices`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `Pantry_Essentials`
--
ALTER TABLE `Pantry_Essentials`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `Seafood`
--
ALTER TABLE `Seafood`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `Vegetables_Greens`
--
ALTER TABLE `Vegetables_Greens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
