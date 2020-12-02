-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2020-12-02 10:16:17
-- 伺服器版本： 10.4.14-MariaDB
-- PHP 版本： 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `customer`
--

-- --------------------------------------------------------

--
-- 資料表結構 `cart`
--

CREATE TABLE `cart` (
  `cart_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `cusMakeColor` varchar(50) DEFAULT '無',
  `cusMakeImg` varchar(100) DEFAULT '無',
  `orderStatus` varchar(100) NOT NULL DEFAULT '待結帳',
  `order_id` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `cart`
--

INSERT INTO `cart` (`cart_id`, `customer_id`, `product_id`, `quantity`, `cusMakeColor`, `cusMakeImg`, `orderStatus`, `order_id`) VALUES
(53, 0, 1, 2, '3', 'img4', '5', '6'),
(54, 1, 45, 1, '無', '無', '待結帳', 'DD202012011'),
(65, 2, 11, 1, '無', '無', '待結帳', 'DD202012022');

-- --------------------------------------------------------

--
-- 資料表結構 `category`
--

CREATE TABLE `category` (
  `category_id` int(11) NOT NULL,
  `unitPrice` int(11) DEFAULT NULL,
  `skinType` varchar(11) DEFAULT NULL,
  `specification` varchar(11) DEFAULT NULL,
  `detail` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `category`
--

INSERT INTO `category` (`category_id`, `unitPrice`, `skinType`, `specification`, `detail`) VALUES
(1, 500, '	各種膚質	', '6.5g', '#一拍外乾內潤、保濕貼妝\r\n#給肌膚零粉感的細緻霧面妝感和持久的立體輪廓'),
(2, 1000, 'undefined', '	10.5g	', '一款3用的全能不暈妝柔焦粉餅\r\n#乾用、溼用、定妝，無論哪個步驟使用都不暈妝\r\n#乾用薄透柔焦、濕用貼膚透亮、定妝持久控油	'),
(3, 500, '	各種膚質	', '	10.5g	', '#一款3用的全能不暈妝柔焦粉餅。\r\n#乾用、溼用、定妝，無論哪個步驟使用都不暈妝。\r\n#乾用薄透柔焦、濕用貼膚透亮、定妝持久控油。\"	'),
(4, 499, '	各種膚質	', '	10.5g	', '#一款3用的全能不暈妝柔焦粉餅。\r\n#乾用、溼用、定妝，無論哪個步驟使用都不暈妝。\r\n#乾用薄透柔焦、濕用貼膚透亮、定妝持久控油。\"	'),
(5, 600, '	各種膚質	', '	15g*2	', '#金奢霧光ｘ金牌遮瑕力\r\n#薄霧輕液態清爽質地ｘ獨家控油粉末再升級\r\n#金牌持妝力ｘ24H全天零暗沉\r\n#美得過分時髦 #金磚氣墊ｘ超Q彈密實霸氣黑氣墊粉撲\"	'),
(6, 600, '	各種膚質	', '	175ml', '#幫助老化受損肌膚恢復彈性與光澤\r\n#回復肌膚彈潤、撫平皺紋、臉部緊緻、皮膚透亮、鎖水保濕\r\n#高低分子玻尿酸，更能滲透肌底\r\n#協同膠原蛋白作用，緊緻肌膚並恢復皮膚彈性，激活彈潤年輕肌\r\n#使用4週，眼周細紋、皺紋明顯淡化改善'),
(7, 600, '	各種膚質	', '	120ml', '#蘊含DermapepTM，能夠改善色斑和統一膚色。\r\n#含肽P3，自然去角質劑，淡化皺紋深度。\r\n#富含氨基酸的微藻提取物，改善暗沉肌膚。\r\n#注入甜菜鹼，有效鎮靜和抗炎\r\n#呈現柔滑細緻，容光煥發的年輕膚色'),
(8, 600, '	各種膚質	', '200ml', '#有效拭除頑固防水彩妝與髒汙\r\n#維持肌膚水潤平衡，呈現健康的彈潤光澤。\r\n#深層潔淨並卸除底妝、濃妝與眼妝\r\n#經眼部測試，溫和卸除眼妝'),
(9, 600, '	各種膚質	', '	60g	', '#眼周肌膚含水量UP，有效撫平細紋\r\n#解決肌膚鬆弛的困擾\r\n#結合酵母萃取精華、水解彈性蛋白、苦參根萃取精華\r\n#加強肌膚緊緻Q彈、重拾百分百的澎潤張力。'),
(10, 290, NULL, NULL, '#控油效果升級，油光毛孔通通完整吸附\r\n#多種抗氧植物萃取成分，結合綠色礦物粉體\r\n#市場最細緻粉質，不阻塞毛孔，服貼不厚重\"\r\n');

-- --------------------------------------------------------

--
-- 資料表結構 `chat`
--

CREATE TABLE `chat` (
  `chat_id` int(11) NOT NULL,
  `customer_id` varchar(11) NOT NULL,
  `others_id` varchar(11) NOT NULL,
  `chatDate` datetime NOT NULL,
  `chatText` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `chat`
--

INSERT INTO `chat` (`chat_id`, `customer_id`, `others_id`, `chatDate`, `chatText`) VALUES
(1, '1', '101', '2020-11-16 15:28:04', '請問聖誕節禮盒開賣了嗎?'),
(2, '101', '1', '2020-11-16 15:30:04', '預計11/20開賣唷~~~\r\n敬請關注官網'),
(3, '2', '101', '2020-11-20 11:30:04', '我在11/我在11/15號訂貨,還沒有收到?\r\n請問出貨了嗎?\r\n還沒的話我要退貨');

-- --------------------------------------------------------

--
-- 資料表結構 `coin`
--

CREATE TABLE `coin` (
  `coin_id` varchar(11) NOT NULL,
  `customer_id` varchar(11) NOT NULL,
  `coinTitle` varchar(20) NOT NULL,
  `coinDate` datetime NOT NULL,
  `coinUpdate` varchar(20) NOT NULL,
  `coinTotal` decimal(15,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `coin`
--

INSERT INTO `coin` (`coin_id`, `customer_id`, `coinTitle`, `coinDate`, `coinUpdate`, `coinTotal`) VALUES
('1', '1', '購買回饋', '2020-11-15 16:21:05', '+50', '5.00'),
('2', '2', '活動獎勵', '2020-11-14 16:21:05', '+50', '5.00'),
('3', '1', '購買商品', '2020-11-13 16:21:05', '-50', '5.00');

-- --------------------------------------------------------

--
-- 資料表結構 `coupon`
--

CREATE TABLE `coupon` (
  `coupon_id` varchar(11) NOT NULL,
  `customer_id` varchar(11) NOT NULL,
  `couponName` varchar(50) NOT NULL,
  `couponCode` varchar(20) NOT NULL,
  `couponGrandTotal` decimal(15,0) NOT NULL,
  `couponStart` date NOT NULL,
  `couponEnd` date NOT NULL,
  `couponStatus` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `coupon`
--

INSERT INTO `coupon` (`coupon_id`, `customer_id`, `couponName`, `couponCode`, `couponGrandTotal`, `couponStart`, `couponEnd`, `couponStatus`) VALUES
('1', '3', 'buy', 'cpc-202011191744', '5', '2020-11-11', '2020-12-11', 0),
('2', '2', 'buy', 'cpc-202011192039', '5', '2020-11-19', '2020-12-19', 0);

-- --------------------------------------------------------

--
-- 資料表結構 `customer`
--

CREATE TABLE `customer` (
  `customer_id` int(11) NOT NULL,
  `account` varchar(60) NOT NULL,
  `email` varchar(60) NOT NULL,
  `password` varchar(32) NOT NULL,
  `customerName` varchar(32) NOT NULL,
  `cellPhone` varchar(32) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `birth_date` varchar(32) NOT NULL,
  `postCode` varchar(10) NOT NULL,
  `city` varchar(10) NOT NULL,
  `address` varchar(100) NOT NULL,
  `district` varchar(10) NOT NULL,
  `nickname` varchar(20) NOT NULL,
  `headshot` varchar(30) NOT NULL,
  `subscribe` tinyint(1) NOT NULL,
  `customerStatus` varchar(100) NOT NULL DEFAULT '正常'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `customer`
--

INSERT INTO `customer` (`customer_id`, `account`, `email`, `password`, `customerName`, `cellPhone`, `gender`, `birth_date`, `postCode`, `city`, `address`, `district`, `nickname`, `headshot`, `subscribe`, `customerStatus`) VALUES
(1, 'sunshine', 'sunshine@gmail.com', 'P@ssw0rd', '柯佳嬿', '0972996997', '女', '1985-09-15', '408', '台中市', '公益路二段51號', '南屯區', '佳佳', 'img1', 0, '正常'),
(2, 'smile', 'smile@gmail.com', 'P@ssw0rd', '謝盈萱', '09721341', '女', '1977-11-15', '813', '高雄市-左營區-博愛', '博愛二路238號', '左營區', '盈盈', 'img1', 0, '正常'),
(3, 'solu555', 'smile123@gmail.com', 'P@ssw0rd', '謝盈萱', '0972134199', '女', '1977-11-15', '813', '高雄市', '博愛二路238號', '左營區', '盈盈', 'img1', 0, '管理員'),
(6, 'lovetree', 'lovetree@gmail.com', 'P@ssw0rd', '陳淑芳', '0918667999', '女', '1955-10-10', '265', '宜蘭縣', '和平路71號', '羅東鎮', '芳芳', 'img1', 0, '永久停權'),
(7, 'hometown', 'hometown@mail.com', 'P@ssw0rd', '吳艾嘉', '0981235455656', '女', '1968-01-01', '265', '宜蘭縣', '和平路75號', '羅東鎮', '艾嘉', 'img1', 0, '正常'),
(8, 'watersweet', 'watersweet@gmail.com', '12345', '孫儷', '0952918988', '女', '1978-06-30', '220', '新北市', '民權路57號', '板橋區', '北北仔', 'img1', 0, '正常'),
(9, 'bod', 'bod@erto.mail', '1234', 'wu', '0923', '', '', '', '', '', '', '', '', 0, '正常'),
(20, 'wewewe@123mail', 'wewewe', '123', 'we', '', '', '', '', '', '', '', '', '', 0, '正常'),
(21, 'a', 'a', 'a', 'a', '', '', '', '', '', '', '', '', '', 0, '正常');

-- --------------------------------------------------------

--
-- 資料表結構 `favorite`
--

CREATE TABLE `favorite` (
  `favorite_id` int(30) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `favorite`
--

INSERT INTO `favorite` (`favorite_id`, `customer_id`, `product_id`) VALUES
(2, 2, 2),
(3, 3, 5),
(4, 3, 1),
(5, 3, 6),
(7, 2, 8),
(8, 2, 10),
(9, 2, 6),
(17, 1, 3),
(19, 1, 6),
(24, 6, 3),
(31, 1, 5),
(32, 1, 1),
(33, 9, 3),
(34, 9, 4),
(38, 2, 14),
(39, 2, 13),
(40, 2, 4);

-- --------------------------------------------------------

--
-- 資料表結構 `orderdetail`
--

CREATE TABLE `orderdetail` (
  `orderDetail_id` int(11) NOT NULL,
  `order_id` varchar(60) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `grandTotal` int(11) NOT NULL,
  `shippingStyle_id` varchar(11) NOT NULL,
  `payment_method` varchar(11) NOT NULL,
  `orderDate` varchar(32) NOT NULL,
  `shippingDate` varchar(32) NOT NULL DEFAULT '處理中',
  `deliverFee` int(11) DEFAULT NULL,
  `coupon_id` varchar(11) DEFAULT NULL,
  `coin_id` varchar(11) DEFAULT NULL,
  `orderComment` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `orderdetail`
--

INSERT INTO `orderdetail` (`orderDetail_id`, `order_id`, `customer_id`, `grandTotal`, `shippingStyle_id`, `payment_method`, `orderDate`, `shippingDate`, `deliverFee`, `coupon_id`, `coin_id`, `orderComment`) VALUES
(30, 'DD202012011', 1, 2500, '一般宅配', '貨到付款', '2020-12-01', '處理中', NULL, NULL, NULL, 'fsafa'),
(31, 'DD202012012', 2, 1140, '一般宅配', '貨到付款', '2020-12-01', '處理中', NULL, NULL, NULL, '請下午到貨謝謝'),
(32, 'DD202012017', 7, 2400, '一般宅配', '貨到付款', '2020-12-01', '處理中', NULL, NULL, NULL, '');

-- --------------------------------------------------------

--
-- 資料表結構 `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `customer_id` varchar(11) NOT NULL,
  `product_id` varchar(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `cusMakeColor` varchar(50) NOT NULL,
  `cusMakeImg` varchar(100) NOT NULL,
  `orderStatus` varchar(100) NOT NULL,
  `order_id` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `orders`
--

INSERT INTO `orders` (`id`, `customer_id`, `product_id`, `quantity`, `cusMakeColor`, `cusMakeImg`, `orderStatus`, `order_id`) VALUES
(54, '1', '2', 2, '無', '無', '待結帳', 'DD202012011'),
(55, '1', '4', 3, '無', '無', '待結帳', 'DD202012011'),
(56, '7', '44', 3, '無', '無', '待結帳', 'DD202012017'),
(57, '7', '47', 1, '無', '無', '待結帳', 'DD202012017'),
(58, '2', '3', 1, '無', '無', '已結帳', 'DD202012012'),
(59, '2', '6', 1, '無', '無', '已結帳', 'DD202012012'),
(60, '2', '2', 1, '無', '無', '已結帳', 'DD202012012'),
(61, '2', '4', 3, '無', '無', '已結帳', 'DD202012012');

-- --------------------------------------------------------

--
-- 資料表結構 `product`
--

CREATE TABLE `product` (
  `product_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `kindA` varchar(11) NOT NULL,
  `kindB` varchar(11) NOT NULL,
  `kindC` varchar(11) DEFAULT NULL,
  `productName` varchar(200) NOT NULL,
  `productColor` varchar(50) NOT NULL,
  `putDate` date NOT NULL,
  `updateDate` date DEFAULT NULL,
  `productStatus` int(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `product`
--

INSERT INTO `product` (`product_id`, `category_id`, `kindA`, `kindB`, `kindC`, `productName`, `productColor`, `putDate`, `updateDate`, `productStatus`) VALUES
(1, 2, '底妝', '粉餅', NULL, '10倍速效隱形遮瑕蜜', '無', '2020-12-02', '2020-12-02', 0),
(2, 5, '眼彩', '眉筆', NULL, '雙頭眉筆', '灰棕色', '2020-11-28', '2020-11-29', 1),
(3, 5, '眼彩', '眼影', NULL, '4色眼彩盤', 'fair affair', '2020-11-28', '0000-00-00', 1),
(4, 5, '眼彩', '眼線', NULL, '抗暈防水眼線液', '黑色', '2020-11-28', '0000-00-00', 1),
(5, 1, '唇彩', '唇釉', NULL, ' 暖霧水煙唇釉', '水煙玫瑰', '2020-11-28', '0000-00-00', 1),
(6, 10, '底妝', '粉餅', NULL, '絕對遮瑕隱形粉底\r\n\r\n', '自然色', '2020-11-28', '0000-00-00', 1),
(7, 1, '唇彩', '唇釉', NULL, '超聚光水唇釉', '辣椒紅', '2020-11-28', '0000-00-00', 1),
(8, 4, '唇彩', '唇膏', NULL, '渲霧奶油唇膏', '斑比奶油', '2020-11-28', '0000-00-00', 1),
(9, 4, '底妝', '粉底', NULL, '絕對無瑕全能柔焦粉餅', '明亮白', '2020-11-28', '0000-00-00', 1),
(10, 5, '眼彩', '眼影', NULL, '12色狂歡眼影盤', '沙漠晚霞', '2020-11-28', '0000-00-00', 1),
(11, 2, '底妝', '粉餅', NULL, '絕對控油烘焙蜜粉', '瓷白', '2020-11-28', '0000-00-00', 1),
(12, 10, '底妝', '遮瑕', NULL, '水透光妝前防護乳', '自然色', '2020-11-28', '0000-00-00', 1),
(13, 2, '底妝', '粉底', NULL, '極水透光氣墊粉餅', '瓷白', '2020-11-28', '0000-00-00', 1),
(14, 4, '底妝', '粉底', '', '絕對持久無瑕氣墊粉餅', '粉嫩白', '2020-11-29', '0000-00-00', 1),
(15, 4, '底妝', '粉底', NULL, '毛孔隱形控油蜜粉餅', '明亮白', '2020-11-29', '0000-00-00', 1),
(16, 4, '底妝', '粉底', NULL, '遮瑕粉底', '自然色', '2020-11-29', '0000-00-00', 1),
(17, 2, '底妝', '妝前乳', NULL, '妝前防護乳	', '無', '2020-11-29', '0000-00-00', 1),
(18, 1, '唇彩', '唇釉', NULL, '聚光水唇釉迷你組', '無', '2020-11-29', '0000-00-00', 1),
(19, 3, '唇彩', '唇膏', NULL, '妝前潤唇膏', '	無', '2020-11-29', '0000-00-00', 1),
(20, 2, '底妝', '粉餅', NULL, '持久氣墊粉餅', '健康色', '2020-11-29', '0000-00-00', 1),
(22, 1, '唇彩', '唇釉', NULL, '超聚光水唇釉', '玫瑰粉', '2020-11-29', '0000-00-00', 1),
(23, 1, '唇彩', '唇釉', NULL, '超聚光水唇釉', '血莓紅', '2020-11-29', '0000-00-00', 1),
(24, 4, '唇彩', '唇膏', NULL, '渲霧奶油唇膏', '焦糖奶油', '2020-11-29', '0000-00-00', 1),
(25, 4, '唇彩', '唇膏', NULL, '渲霧奶油唇膏', '蜜糖奶油', '2020-11-29', '0000-00-00', 1),
(26, 4, '唇彩', '唇膏', NULL, '渲霧奶油唇膏', '楓糖奶油', '2020-11-29', '0000-00-00', 1),
(27, 2, '底妝', '粉餅', NULL, '透光氣墊粉餅', '自然色', '2020-11-29', '0000-00-00', 1),
(28, 4, '唇彩', '唇膏', NULL, '渲霧奶油唇膏', '黑糖奶油', '2020-11-29', '0000-00-00', 1),
(29, 1, '唇彩', '唇釉', NULL, ' 暖霧水煙唇釉', '暖霧玫瑰', '2020-11-29', '0000-00-00', 1),
(30, 2, '底妝', '粉餅', NULL, '持久氣墊粉餅', '明亮白', '2020-11-29', '0000-00-00', 1),
(31, 1, '唇彩', '唇釉', NULL, ' 暖霧水煙唇釉', '乾冰玫瑰', '2020-11-29', '0000-00-00', 1),
(32, 1, '唇彩', '唇釉', NULL, ' 暖霧水煙唇釉', '冷菸玫瑰', '2020-11-29', '0000-00-00', 1),
(33, 1, '唇彩', '唇釉', NULL, ' 暖霧水煙唇釉', '雪茄玫瑰', '2020-11-29', '0000-00-00', 1),
(34, 1, '唇彩', '唇釉', NULL, ' 暖霧水煙唇釉', '涼菸玫瑰', '2020-11-29', '0000-00-00', 1),
(35, 1, '唇彩', '唇釉', NULL, ' 暖霧水煙唇釉', '乾燥玫瑰', '2020-11-29', '0000-00-00', 1),
(36, 4, '底妝', '粉底', NULL, '保濕ZZ霜', '自然色', '2020-11-29', '0000-00-00', 1),
(37, 5, '眼彩', '眼影', NULL, '12色狂歡眼影盤', '極光爆發', '2020-11-29', '0000-00-00', 1),
(38, 5, '眼彩', '眼線', NULL, '不暈絲滑眼線膠筆', '黑色', '2020-11-29', '0000-00-00', 1),
(39, 5, '眼彩', '眼線', NULL, '不暈絲滑眼線膠筆', '深棕', '2020-11-29', '0000-00-00', 1),
(40, 2, '底妝', '粉餅', NULL, '無瑕粉餅', '自然色', '2020-11-29', '0000-00-00', 1),
(41, 5, '眼彩', '眼線', NULL, '抗暈防水眼線液', '深棕', '2020-11-29', '0000-00-00', 1),
(42, 5, '眼彩', '睫毛膏', NULL, '濃密睫毛膏', '無', '2020-11-29', '0000-00-00', 1),
(43, 5, '眼彩', '眼影', NULL, '4色眼彩盤', '名媛裸', '2020-11-29', '0000-00-00', 1),
(44, 6, '化妝水', '化妝水', '客製', '抗皺爽膚水', '藍色', '2020-12-02', '2020-12-01', 1),
(45, 7, '乳液', '乳液', '客製', '潤白光透肌活露', '藍色', '2020-12-02', '2020-12-01', 1),
(46, 8, '卸妝水', '卸妝水', '客製', '卸妝爽膚水', '藍色', '2020-12-02', '2020-12-01', 1),
(47, 9, '眼霜', '眼霜', '客製', '緊緻眼霜', '藍色', '2020-12-02', '2020-12-01', 1),
(48, 10, '底妝', 'duck', NULL, '持久氣墊粉餅', '健康色', '2020-12-24', NULL, 0);

-- --------------------------------------------------------

--
-- 資料表結構 `productimg`
--

CREATE TABLE `productimg` (
  `productImg_id` int(11) NOT NULL,
  `img_0` varchar(500) DEFAULT NULL,
  `img_1` varchar(500) DEFAULT NULL,
  `img_2` varchar(500) DEFAULT NULL,
  `img_3` varchar(500) DEFAULT NULL,
  `img_4` varchar(500) DEFAULT NULL,
  `img_5` varchar(500) DEFAULT NULL,
  `img_6` varchar(500) DEFAULT NULL,
  `img_7` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `productimg`
--

INSERT INTO `productimg` (`productImg_id`, `img_0`, `img_1`, `img_2`, `img_3`, `img_4`, `img_5`, `img_6`, `img_7`) VALUES
(1, 'A001_01.jpg', 'A001_02.jpg', 'A001_03.jpg', '', 'A001_detail.jpg', '', '', ''),
(2, 'C001_01.jpg', 'C001_01.jpg', 'C001_01.jpg', 'C001_01.jpg', 'A008_detail.jpg', '', '', ''),
(3, 'C002_01.jpg', 'C002_01.jpg', 'C002_01.jpg', 'C002_01.jpg', 'A001_detail.jpg', '', '', ''),
(4, 'C003_01.jpg', 'C003_01.jpg', 'C003_01.jpg', 'C003_01.jpg', 'B002_detail.jpg', '', '', ''),
(5, 'B001_01.jpg', 'B001_02.jpg', 'B001_03.jpg', 'B001_04.jpg', 'B001_detail.jpg', '', '', ''),
(6, 'A002_01.jpg', 'A002_01.jpg', 'A002_01.jpg', 'A002_01.jpg', 'B002_detail.jpg', '', '', ''),
(7, 'B002_01.jpg', 'B002_02.jpg', 'B002_03.jpg', 'B002_04.jpg', 'B002_detail.jpg', '', '', ''),
(8, 'B003_01.jpg', 'B003_02.jpg', '', '', 'B003_detail.jpg', '', '', ''),
(9, 'A003_01.jpg', 'A003_01.jpg', 'A003_01.jpg', 'A003_01.jpg', 'B002_detail.jpg', '', '', ''),
(10, 'C004_01.jpg', 'C004_01.jpg', 'C004_01.jpg', 'C004_01.jpg', 'B002_detail.jpg', '', '', ''),
(11, 'A004_01.jpg', 'A004_01.jpg', 'A004_01.jpg', 'A004_01.jpg', 'B002_detail.jpg', '', '', ''),
(12, 'A005_01.jpg', 'A005_01.jpg', 'A005_01.jpg', 'A005_01.jpg', 'B002_detail.jpg', '', '', ''),
(13, 'A006_01.jpg', 'A006_01.jpg', 'A006_01.jpg', 'A006_01.jpg', 'B002_detail.jpg', '', '', ''),
(14, 'A007_01.jpg', 'A007_01.jpg', 'A007_01.jpg', 'A007_01.jpg', 'B002_detail.jpg', '', '', ''),
(15, 'A008_1.jpg', 'A008_2.jpg', 'A008_3.jpg', 'A008_4.jpg', 'A008_detail.jpg', '', '', ''),
(16, 'A008_1.jpg', 'A008_2.jpg', 'A008_3.jpg', 'A008_4.jpg', 'A008_detail.jpg', '', '', ''),
(17, 'A008_1.jpg', 'A008_2.jpg', 'A008_3.jpg', 'A008_4.jpg', 'A008_detail.jpg', '', '', ''),
(18, 'B004_01.jpg', 'B004_01.jpg', 'B004_01.jpg', 'B004_01.jpg', 'B002_detail.jpg', '', '', ''),
(19, 'B001_02.jpg', 'B001_02.jpg', 'B001_02.jpg', 'B001_02.jpg', 'B001_detail.jpg', '', '', ''),
(20, 'B003_01.jpg', 'B003_01.jpg', 'B003_01.jpg', 'B003_01.jpg', 'B002_detail.jpg', '', '', ''),
(21, 'A001_01.jpg', 'A001_01.jpg', 'A001_01.jpg', 'A001_01.jpg', 'B002_detail.jpg', '', '', ''),
(22, 'B006_01.jpg', 'B006_01.jpg', 'B006_01.jpg', 'B006_01.jpg', 'B002_detail.jpg', '', '', ''),
(23, 'B007_01.jpg', 'B007_01.jpg', 'B007_01.jpg', 'B007_01.jpg', 'B003_detail.jpg', '', '', ''),
(24, 'B002_01.jpg', 'B002_01.jpg', 'B002_01.jpg', 'B002_01.jpg', 'B002_detail.jpg', '', '', ''),
(25, 'B001_01.jpg', 'B001_02.jpg', 'B001_03.jpg', 'B001_04.jpg', 'B001_detail.jpg', '', '', ''),
(26, 'B002_01.jpg', 'B002_02.jpg', 'B002_03.jpg', 'B002_04.jpg', 'B002_detail.jpg', '', '', ''),
(27, 'B002_01.jpg', 'B002_02.jpg', 'B002_03.jpg', 'B002_04.jpg', 'B002_detail.jpg', '', '', ''),
(28, 'B003_01.jpg', 'B003_02.jpg', 'B003_03.jpg', 'B003_04.jpg', 'B003_detail.jpg', '', '', ''),
(29, 'B004_01.jpg', 'B004_01.jpg', 'B004_01.jpg', 'B004_01.jpg', 'B002_detail.jpg', '', '', ''),
(30, 'A_02.jpg', 'A_02.jpg', 'A_02.jpg', 'A_02.jpg', 'B002_detail.jpg', '', '', ''),
(31, 'B006_01.jpg', 'B006_01.jpg', 'B006_01.jpg', 'B006_01.jpg', 'B002_detail.jpg', '', '', ''),
(32, 'B007_01.jpg', 'B007_01.jpg', 'B007_01.jpg', 'B007_01.jpg', 'B002_detail.jpg', '', '', ''),
(33, 'B002_03.jpg', 'B002_03.jpg', 'B002_03.jpg', 'B002_03.jpg', 'B001_detail.jpg', '', '', ''),
(34, 'B001_01.jpg', 'B001_01.jpg', 'B001_01.jpg', 'B001_01.jpg', 'B001_detail.jpg', '', '', ''),
(35, 'B002_01.jpg', 'B002_02.jpg', 'B002_03.jpg', 'B002_04.jpg', 'B002_detail.jpg', '', '', ''),
(36, 'B003_01.jpg', 'B003_02.jpg', 'B003_03.jpg', 'B003_04.jpg', 'B002_detail.jpg', '', '', ''),
(37, 'C005_01.jpg', 'C005_01.jpg', 'C005_01.jpg', 'C005_01.jpg', 'B002_detail.jpg', '', '', ''),
(38, 'C006_01.jpg', 'C006_01.jpg', 'C006_01.jpg', 'C006_01.jpg', 'A008_detail.jpg', '', '', ''),
(39, 'C007_01.jpg', 'C007_01.jpg', 'C007_01.jpg', 'C007_01.jpg', 'B002_detail.jpg', '', '', ''),
(40, 'A_04.jpg', 'A_04.jpg', 'A_04.jpg', 'A_04.jpg', 'B002_detail.jpg', '', '', ''),
(41, 'C002_01.jpg', 'C002_01.jpg', 'C002_01.jpg', 'C002_01.jpg', 'B001_detail.jpg', '', '', ''),
(42, 'A_04.jpg', 'A_04.jpg', 'A_04.jpg', 'A_04.jpg', 'B002_detail.jpg', '', '', ''),
(43, 'A_05.jpg', 'A_05.jpg', 'A_05.jpg', 'A_05.jpg', 'B002_detail.jpg', '', '', ''),
(44, '2_bluegreen.png', '2_bluegreen.png', '2_khaki.png', '2_white.png', '', '', '', ''),
(45, '3_blue.png', '3_blue.png', '3_orange.png', '3_red.png', '', '', '', ''),
(46, '4_bluegreen.png', '4_bluegreen.png', '4_brown.png', '4_sand.png', '', '', '', ''),
(47, '1_blue.png', '1_blue.png', '1_brown.png', '1_white.png', '', '', '', '');

-- --------------------------------------------------------

--
-- 資料表結構 `review`
--

CREATE TABLE `review` (
  `review_id` varchar(11) NOT NULL,
  `category_id` varchar(11) NOT NULL,
  `customer_id` varchar(11) NOT NULL,
  `reviewDate` datetime NOT NULL,
  `reviewText` varchar(300) NOT NULL,
  `rating` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `review`
--

INSERT INTO `review` (`review_id`, `category_id`, `customer_id`, `reviewDate`, `reviewText`, `rating`) VALUES
('1', '3', '1', '2020-11-15 16:02:06', '超服貼，去健身房流滿身汗，也不太會掉', '5'),
('2', '3', '2', '2020-11-14 15:02:06', '我很容易上粉底會長痘痘，用這款不會，已經是第二次回購了~\r\n推推!!!', '5');

-- --------------------------------------------------------

--
-- 資料表結構 `shipping`
--

CREATE TABLE `shipping` (
  `order_id` varchar(60) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `shipping_Name` varchar(32) NOT NULL,
  `shipping_cellPhone` varchar(32) NOT NULL,
  `shipping_postCode` varchar(32) DEFAULT NULL,
  `shipping_city` varchar(10) NOT NULL,
  `shipping_district` varchar(10) NOT NULL,
  `shipping_address` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `shipping`
--

INSERT INTO `shipping` (`order_id`, `customer_id`, `shipping_Name`, `shipping_cellPhone`, `shipping_postCode`, `shipping_city`, `shipping_district`, `shipping_address`) VALUES
('DD202012011', 1, '新垣結衣', '0972916219', NULL, '新北市', '三峽區', '大同路'),
('DD202012012', 2, '新垣結衣', '0972916299', NULL, '新北市', '三峽區', '大同街20號'),
('DD202012017', 7, '', '', NULL, '', '', '');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`cart_id`);

--
-- 資料表索引 `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`);

--
-- 資料表索引 `chat`
--
ALTER TABLE `chat`
  ADD PRIMARY KEY (`chat_id`);

--
-- 資料表索引 `coin`
--
ALTER TABLE `coin`
  ADD PRIMARY KEY (`coin_id`);

--
-- 資料表索引 `coupon`
--
ALTER TABLE `coupon`
  ADD PRIMARY KEY (`coupon_id`);

--
-- 資料表索引 `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`customer_id`);

--
-- 資料表索引 `favorite`
--
ALTER TABLE `favorite`
  ADD PRIMARY KEY (`favorite_id`);

--
-- 資料表索引 `orderdetail`
--
ALTER TABLE `orderdetail`
  ADD PRIMARY KEY (`orderDetail_id`);

--
-- 資料表索引 `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`);

--
-- 資料表索引 `productimg`
--
ALTER TABLE `productimg`
  ADD PRIMARY KEY (`productImg_id`);

--
-- 資料表索引 `review`
--
ALTER TABLE `review`
  ADD PRIMARY KEY (`review_id`);

--
-- 資料表索引 `shipping`
--
ALTER TABLE `shipping`
  ADD PRIMARY KEY (`order_id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `cart`
--
ALTER TABLE `cart`
  MODIFY `cart_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `category`
--
ALTER TABLE `category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `chat`
--
ALTER TABLE `chat`
  MODIFY `chat_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `customer`
--
ALTER TABLE `customer`
  MODIFY `customer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `favorite`
--
ALTER TABLE `favorite`
  MODIFY `favorite_id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `orderdetail`
--
ALTER TABLE `orderdetail`
  MODIFY `orderDetail_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
