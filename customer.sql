-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2020-12-05 11:38:49
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
  `cart_id` int(32) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `cusMakeColor` varchar(50) DEFAULT '無',
  `cusMakeImg` varchar(100) DEFAULT '無',
  `orderStatus` varchar(100) NOT NULL DEFAULT '已結帳',
  `order_id` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
(1, 499, '	各種膚質	', '6.5g', '#速貼合肌膚 親膚性佳長效持妝不易脫妝\r\n#柔滑質地 使用時撫平角質使肌膚光滑細緻\r\n#玻尿酸成分幫助肌膚補水保濕\r\n4.搭配絕對遮瑕隱形粉底使用使妝容更完美無瑕'),
(2, 650, '各種膚質	', '	10.5g	', '一款3用的全能不暈妝柔焦粉餅\r\n#乾用、溼用、定妝，無論哪個步驟使用都不暈妝\r\n#乾用薄透柔焦、濕用貼膚透亮、定妝持久控油	'),
(3, 690, '各種膚質	', '	10.5g	', '1.假睫毛般瞬間拉長的華麗效果\r\n2.快乾不下垂不暈染\r\n3.重複刷上更濃密不結塊	'),
(4, 290, '	各種膚質	', '	10.5g	', '24H長效持久不掉色\r\n好推勻、不結塊的柔軟質地配方\r\n精準調色，色彩宛如真眉	'),
(5, 280, '	各種膚質	', '	15g	', '1.塗上雙唇即刻釋放鮮明水潤色澤\r\n2.如同極光瞬息萬變，可層次壘加的水透光夢幻色彩'),
(6, 1000, '	各種膚質	', '	175ml', '1.擁有正宗韓系底妝遮瑕與光澤的完美調配\r\n2.全天候零瑕疵奶油光底妝新趨勢\r\n3.智慧校色水潤質地不乾澀不粘膩\r\n4.可層層疊擦不厚重 遮瑕度自行定義'),
(7, 690, '	各種膚質	', '	15g', '1.第一支雙唇專用打亮，一抹聚光造唇\r\n2.6款韓妞摯愛顯白話題色選\r\n3.高保濕滋潤成分，直接敷上美唇油\r\n4.獨家聚光翹唇刷頭X時髦電鍍金管'),
(8, 490, '	各種膚質	', '15g', '1.潤唇妝前2合1，完勝潤唇膏\r\n2.唇紋小熨斗，極美霧唇必備\r\n3.添加7大天然植物萃取'),
(9, 1000, '	各種膚質	', '	60g	', '一款3用的全能不暈妝柔焦粉餅\r\n1.乾用、溼用、定妝，無論哪個步驟使用都不暈妝\r\n2.乾用薄透柔焦、濕用貼膚透亮、定妝持久控油\r\n#全能小金餅#3用粉餅'),
(10, 650, '	各種膚質	', '20g', '超高顯色度 柔軟光滑質地\r\n'),
(11, 1000, '	各種膚質	', '60g', '1.一拍外乾內潤、保濕貼妝\r\n2.給肌膚零粉感的細緻霧面妝感和持久的立體輪廓'),
(12, 890, '	各種膚質	', '20g', '1.一拍外乾內潤、保濕貼妝\r\n2.給肌膚零粉感的細緻霧面妝感和持久的立體輪廓'),
(13, 1200, '	各種膚質	', '60g', '1.水透光氣墊拍出韓妞鮮嫩度\r\n2.高保養植萃精華油成分\r\n3.高保濕獨家花瓣狀親膚粉體！'),
(14, 290, '	各種膚質	', '40g', '1.控油效果升級，油光毛孔通通完整吸附\r\n2.多種抗氧植物萃取成分，結合綠色礦物粉體\r\n3.市場最細緻粉質，不阻塞毛孔，服貼不厚重'),
(15, 1200, '	各種膚質	', '60g', '金奢霧光ｘ金牌遮瑕力\r\n薄霧輕液態清爽質地ｘ獨家控油粉末再升級\r\n金牌持妝力ｘ24H全天零暗沉\r\n美得過分時髦 #金磚氣墊ｘ超Q彈密實霸氣黑氣墊粉撲'),
(16, 390, '	各種膚質	', '15g', '1.具備智慧溫感自動校色科技\r\n2.加入三種果油不假潤不黏膩\r\n3.同步修復唇紋瑕疵擁有透嫩好氣色'),
(17, 390, '	各種膚質	', '15g', '1.一抹好感度激增的心機妝容\r\n2.冷露乾燥雙調質地，刷出極美又襯膚的唇在感\r\n3.獨特展色技術，隱形唇部瑕疵，極羨持色一整天'),
(18, 390, '	各種膚質	', '15g', '1.色澤溫感自動校色\r\n2.還原母胎美唇般的自然唇色\r\n3.潤澤保水膠囊科技'),
(19, 290, '	各種膚質	', '15g', '1.24H長效持久不掉色\r\n2.好推勻、不結塊的柔軟質地配方\r\n3.精準調色，色彩宛如真眉'),
(20, 540, '	各種膚質	', '15g', 'UNLEASHIA=unleash（釋放）+utopia（烏托邦），\r\n意思是不再怯於他人目光，自信釋放自己的空間。\r\n在UNLEASHIA，做最真的自己。'),
(21, 690, '	各種膚質	', '15g', '1.不僅具有纖長、濃密效果，\r\n2.更添加了固定睫毛'),
(22, 690, '	各種膚質	', '15g', '1.速乾水感薄膜劑質\r\n2.獨家防水抗汗貼合聚合物\r\n3.天然低敏顏料，溫水可卸'),
(23, 500, '	各種膚質	', '6.5g', '#幫助老化受損肌膚恢復彈性與光澤\r\n#回復肌膚彈潤、撫平皺紋、臉部緊緻、皮膚透亮、鎖水保濕\r\n#高低分子玻尿酸，更能滲透肌底\r\n#協同膠原蛋白作用，緊緻肌膚並恢復皮膚彈性，激活彈潤年輕肌\r\n#使用4週，眼周細紋、皺紋明顯淡化改善'),
(24, 400, '	各種膚質	', '	10.5g	', '#蘊含DermapepTM，能夠改善色斑和統一膚色。\r\n#含肽P3，自然去角質劑，淡化皺紋深度。\r\n#富含氨基酸的微藻提取物，改善暗沉肌膚。\r\n#注入甜菜鹼，有效鎮靜和抗炎\r\n#呈現柔滑細緻，容光煥發的年輕膚色'),
(25, 600, '	各種膚質	', '	10.5g	', '#有效拭除頑固防水彩妝與髒汙\r\n#維持肌膚水潤平衡，呈現健康的彈潤光澤。\r\n#深層潔淨並卸除底妝、濃妝與眼妝\r\n#經眼部測試，溫和卸除眼妝	'),
(26, 500, '	各種膚質	', '	10.5g	', '#眼周肌膚含水量UP，有效撫平細紋\r\n#解決肌膚鬆弛的困擾\r\n#結合酵母萃取精華、水解彈性蛋白、苦參根萃取精華\r\n#加強肌膚緊緻Q彈、重拾百分百的澎潤張力。	');

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
(1, 'sunshine', 'sunshine@gmail.com', 'P@ssw0rd', '桂綸鎂', '0972996555', '女', '1983-12-25', '801', '高雄市', '中正四路211號8號', '前金區', '綸綸', 'img1', 0, '正常'),
(2, 'smile', 'jasper.aivia@gmail.com', 'P@ssw0rd', '謝盈萱', '0972135296', '女', '1979-12-31', '115', '台北市', '三重路19-3號10樓', '南港區', '盈萱', 'img1', 0, '正常'),
(3, 'solu555', 'smile123@gmail.com', 'P@ssw0rd', '柯佳嬿', '0972134199', '女', '1985-01-10', '403', '台中市', '公益路二段51號', '南屯區', '佳佳', 'img1', 0, '管理員'),
(6, 'lovetree', 'lovetree@gmail.com', 'P@ssw0rd', '陳淑芳', '0918667999', '女', '1955-10-10', '265', '宜蘭縣', '和平路71號', '羅東鎮', '芳芳', 'img1', 0, '永久停權'),
(7, 'hometown', 'hometown@mail.com', 'P@ssw0rd', '張艾嘉', '0981235456', '女', '1968-01-01', '265', '宜蘭縣', '和平路75號', '羅東鎮', '艾嘉', 'img1', 0, '正常'),
(8, 'watersweet', 'watersweet@gmail.com', '12345', '孫儷', '0952915435', '女', '1968-02-26', '220', '新北市', '民權路57號', '板橋區', '儷仔', 'img1', 0, '正常'),
(9, 'peace', 'peace@gmail.com', '12345', '許瑋甯', '0956785671', '女', '1982-12-22', '220', '新北市', '民權路57號', '板橋區', '瑋甯', 'img1', 0, '正常'),
(10, 'wuwu', 'wuwu@gmail.com', '12345', '吳可熙', '0952918988', '女', '1978-06-30', '220', '新北市', '民生路689號', '板橋區', '可熙', 'img1', 0, '正常'),
(11, 'heart', 'heart@gmail.com', '12345', '張榕容', '0952915676', '女', '1978-06-30', '225', '新北市', '民權路57號', '樹林區', '榕容', 'img1', 0, '正常');

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
(3, 3, 5),
(4, 3, 1),
(5, 3, 6),
(7, 2, 8),
(17, 1, 3),
(19, 1, 6),
(24, 6, 3),
(31, 1, 5),
(32, 1, 1),
(33, 9, 3),
(34, 9, 4);

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
(1, 'DD202012017', 7, 2400, '一般宅配', '貨到付款', '2020-12-01', '處理中', NULL, NULL, NULL, ''),
(2, 'DD202012022', 2, 1639, '一般宅配', '貨到付款', '2020-12-02', '處理中', NULL, NULL, NULL, '請早上送達'),
(3, 'DD202012032', 2, 1140, '一般宅配', '信用卡', '2020-12-03', '處理中', NULL, NULL, NULL, '請下午到貨'),
(4, 'DD202012041', 1, 1740, '一般宅配', '信用卡', '2020-12-04', '處理中', NULL, NULL, NULL, '到貨前來電'),
(5, 'DD202012042', 2, 3499, '一般宅配', '信用卡', '2020-12-04', '處理中', NULL, NULL, NULL, '到貨請按門鈴'),
(6, 'DD202012046', 6, 2200, '一般宅配', '信用卡', '2020-12-04', '處理中', NULL, NULL, NULL, '下午送達'),
(7, 'DD202012047', 7, 2899, '一般宅配', '信用卡', '2020-12-04', '處理中', NULL, NULL, NULL, ''),
(8, 'DD202012048', 8, 5400, '一般宅配', '轉帳匯款', '2020-12-04', '處理中', NULL, NULL, NULL, '請來電'),
(9, 'DD2020120411', 11, 639, '一般宅配', '貨到付款', '2020-12-04', '處理中', NULL, NULL, NULL, '');

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
  `order_id` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `orders`
--

INSERT INTO `orders` (`id`, `customer_id`, `product_id`, `quantity`, `cusMakeColor`, `cusMakeImg`, `orderStatus`, `order_id`) VALUES
(1, '7', '44', 3, '無', '無', '已出貨', 'DD202012017'),
(2, '7', '47', 1, '無', '無', '已出貨', 'DD202012017'),
(3, '2', '11', 1, '無', '無', '已出貨', 'DD202012022'),
(4, '2', '8', 1, '無', '無', '已出貨', 'DD202012022'),
(5, '2', '11', 1, '無', '無', '已出貨', 'DD202012032'),
(6, '1', '5', 2, '無', '無', '已出貨', 'DD202012041'),
(7, '1', '46', 1, '無', '無', '已出貨', 'DD202012041'),
(8, '2', '4', 3, '無', '無', '已出貨', 'DD202012042'),
(9, '2', '45', 2, '無', '無', '已出貨', 'DD202012042'),
(10, '2', '8', 1, '無', '無', '已出貨', 'DD202012042'),
(11, '6', '5', 2, '無', '無', '已結帳', 'DD202012046'),
(12, '6', '46', 2, '無', '無', '已結帳', 'DD202012046'),
(13, '7', '47', 3, '無', '無', '已結帳', 'DD202012047'),
(14, '7', '44', 1, '無', '無', '已結帳', 'DD202012047'),
(15, '7', '8', 1, '無', '無', '已結帳', 'DD202012047'),
(16, '8', '47', 1, '無', '無', '已結帳', 'DD202012048'),
(17, '8', '2', 2, '無', '無', '已結帳', 'DD202012048'),
(18, '8', '4', 3, '無', '無', '已結帳', 'DD202012048'),
(19, '11', '16', 1, '無', '無', '已結帳', 'DD2020120411');

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
(1, 1, '底妝', '粉餅', NULL, 'Huan-huan速效隱形遮瑕蜜', '自然色', '2020-11-27', '2020-12-02', 1),
(2, 2, '眼彩', '眼影', NULL, 'Huan-huan金屬星光眼影盤', '神秘紅', '2020-11-28', '2020-11-29', 1),
(3, 3, '眼彩', '眼線', NULL, 'Huan-huan超濃密睫毛膏', '黑色', '2020-11-28', '0000-00-00', 1),
(4, 4, '眼彩', '眼線', NULL, 'Huan-huan天生濃眉粉膠筆', '黑色', '2020-11-28', '0000-00-00', 1),
(5, 5, '唇彩', '唇釉', NULL, ' Huan-huan暖霧水煙唇釉', '極光赤紅', '2020-11-28', '0000-00-00', 1),
(6, 6, '底妝', '粉餅', NULL, 'Huan-huan絕對遮瑕隱形粉底', '自然色', '2020-11-28', '0000-00-00', 1),
(7, 7, '唇彩', '唇釉', NULL, 'Huan-huan超聚光水唇釉', '辣椒紅', '2020-11-28', '0000-00-00', 1),
(8, 8, '唇彩', '唇膏', NULL, 'Huan-huan零唇紋妝前潤唇膏', '斑比奶油', '2020-11-28', '0000-00-00', 1),
(9, 9, '底妝', '粉底', NULL, 'Huan-huan無瑕全能柔焦粉餅', '粉嫩白', '2020-11-28', '0000-00-00', 1),
(10, 10, '眼彩', '眼影', NULL, 'Huan-huan金屬星光眼影盤', '閃耀玫瑰', '2020-11-28', '0000-00-00', 1),
(11, 11, '底妝', '粉餅', NULL, 'Huan-huan透光控油蜜粉', '', '2020-11-28', '0000-00-00', 1),
(12, 12, '底妝', '粉底', NULL, 'Huan-huan透光妝前防護乳', '明亮白', '2020-11-28', '0000-00-00', 1),
(13, 13, '底妝', '粉餅', NULL, 'Huan-huan透光氣墊粉餅', '', '2020-11-28', '0000-00-00', 1),
(14, 14, '底妝', '粉底', NULL, 'Huan-huan毛孔隱形蜜粉餅', '粉嫩白', '2020-11-29', '0000-00-00', 1),
(15, 15, '底妝', '粉底', NULL, 'Huan-huan無瑕氣墊粉餅', '明亮白', '2020-11-29', '0000-00-00', 1),
(16, 16, '唇彩', '唇膏', NULL, 'Huan-huan澄露潤唇膏', '水蜜桃紅', '2020-11-29', '0000-00-00', 1),
(17, 17, '唇彩', '唇釉', NULL, 'Huan-huan好感乾燥唇萃', '蘋果粉', '2020-11-29', '0000-00-00', 1),
(18, 18, '唇彩', '唇膏', NULL, 'Huan-huan潤氣色水漾唇膏', '蜜桃粉', '2020-11-29', '0000-00-00', 1),
(19, 19, '眼彩', '眼線', NULL, 'Huan-huan天生濃眉眉粉膠筆', '紅棕色', '2020-11-29', '0000-00-00', 1),
(20, 20, '眼彩', '眼影', NULL, 'Huan-huan璀璨雙色眼影盤', '玫瑰紅\r\n', '2020-11-29', '0000-00-00', 1),
(21, 21, '眼彩', '眼線', NULL, 'Huan-huan記憶美睫捲翹膏', '黑色', '2020-11-29', '0000-00-00', 1),
(22, 22, '眼彩', '眼線', NULL, 'Huan-huan抗暈防水眼線液', '黑色', '2020-11-29', '0000-00-00', 1),
(23, 23, '化妝水', '化妝水', '客製', '抗皺爽膚水', '藍色', '2020-12-02', '2020-12-03', 1),
(24, 24, '乳液', '乳液', '客製', '潤白光透肌活露', '藍色', '2020-12-02', '2020-12-03', 1),
(25, 25, '卸妝水', '卸妝水', '客製', '卸妝爽膚水', '藍色', '2020-12-02', '2020-12-03', 1),
(26, 26, '眼霜', '眼霜', '客製', '緊緻眼霜', '藍色', '2020-12-02', '2020-12-03', 1);

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
(14, 'A008_01.jpg', 'A008_02.jpg', 'A008_03.jpg', 'A008_04.jpg', 'A008_detail.jpg', '', '', ''),
(15, 'A007_01.jpg', 'A007_01.jpg', 'A007_01.jpg', 'A007_01.jpg', 'A008_detail.jpg', '', '', ''),
(16, 'B007_01.jpg', 'B007_01.jpg', 'B007_01.jpg', 'B007_01.jpg', 'B002_detail.jpg', '', '', ''),
(17, 'B004_01.jpg', 'B004_01.jpg', 'B004_01.jpg', 'B004_01.jpg', 'B002_detail.jpg', '', '', ''),
(18, 'B006_01.jpg', 'B006_01.jpg', 'B006_01.jpg', 'B006_01.jpg', 'B002_detail.jpg', '', '', ''),
(19, 'C003_01.jpg', 'C003_01.jpg', 'C003_01.jpg', 'C003_01.jpg', 'B001_detail.jpg', '', '', ''),
(20, 'C005_01.jpg', 'C005_01.jpg', 'C005_01.jpg', 'C005_01.jpg', 'B002_detail.jpg', '', '', ''),
(21, 'C006_01.jpg', 'C006_01.jpg', 'C006_01.jpg', 'C006_01.jpg', 'A001_detail.jpg', '', '', ''),
(22, 'C007_01.jpg', 'C007_01.jpg', 'C007_01.jpg', 'C007_01.jpg', 'B002_detail.jpg', '', '', ''),
(23, '4_bluegreen.png', '4_bluegreen.png', '4_brown.png', '4_sand.png', '', '', '', ''),
(24, '3_blue.png', '3_blue.png', '3_orange.png', '3_red.png', '', '', '', ''),
(25, '2_bluegreen.png', '2_bluegreen.png', '2_khaki.png', '2_white.png', '', '', '', ''),
(26, '1_blue.png', '1_blue.png', '1_brown.png', '1_white.png', '', '', '', '');

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
  `order_id` varchar(100) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `shipping_Name` varchar(32) NOT NULL,
  `shipping_cellPhone` varchar(32) NOT NULL,
  `shipping_postCode` varchar(32) DEFAULT NULL,
  `shipping_city` varchar(10) NOT NULL,
  `shipping_district` varchar(10) NOT NULL,
  `shipping_address` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `shipping`
--

INSERT INTO `shipping` (`order_id`, `customer_id`, `shipping_Name`, `shipping_cellPhone`, `shipping_postCode`, `shipping_city`, `shipping_district`, `shipping_address`) VALUES
('DD202012017', 7, '', '', NULL, '', '', ''),
('DD202012022', 2, '新垣結衣', '0972916217', NULL, '高雄市-左營區-博愛', '左營區', '博愛二路238號'),
('DD202012032', 2, '新垣結衣', '0972916217', NULL, '高雄市-左營區-博愛', '左營區', '博愛二路238號'),
('DD202012041', 1, '新垣結衣', '0972916217', NULL, '台中市', '南屯區', '公益路二段51號'),
('DD2020120411', 11, '', '', NULL, '新北市', '樹林區', '民權路57號'),
('DD202012042', 2, '新垣結衣', '0972916217', NULL, '高雄市-左營區-博愛', '左營區', '博愛二路238號'),
('DD202012046', 6, '新垣結衣', '0972916217', NULL, '宜蘭縣', '羅東鎮', '和平路71號'),
('DD202012047', 7, '林志玲', '0989778657', NULL, '宜蘭縣', '羅東鎮', '和平路75號'),
('DD202012048', 8, '孫尚香', '0988675433', NULL, '新北市', '板橋區', '民權路57號');

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
  MODIFY `cart_id` int(32) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `category`
--
ALTER TABLE `category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `chat`
--
ALTER TABLE `chat`
  MODIFY `chat_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `customer`
--
ALTER TABLE `customer`
  MODIFY `customer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `favorite`
--
ALTER TABLE `favorite`
  MODIFY `favorite_id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `orderdetail`
--
ALTER TABLE `orderdetail`
  MODIFY `orderDetail_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `productimg`
--
ALTER TABLE `productimg`
  MODIFY `productImg_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
