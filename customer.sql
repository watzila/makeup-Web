-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2020-11-30 10:41:40
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
  `cusMakeColor` varchar(50) NOT NULL,
  `cusMakeImg` varchar(100) NOT NULL,
  `orderStatus` varchar(100) NOT NULL,
  `order_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `cart`
--

INSERT INTO `cart` (`cart_id`, `customer_id`, `product_id`, `quantity`, `cusMakeColor`, `cusMakeImg`, `orderStatus`, `order_id`) VALUES
(0, 1, 6, 2, '', '', '待結帳', 0),
(1, 2, 1, 2, ' 03 IN THE ALTOGETHER', '', '待結帳', 0),
(4, 3, 2, 5, 'IN THE ALTOGETHER', 'img1', '待結帳', 2),
(5, 2, 5, 6, 'IN THE ALTOGETHER', 'img1', '待結帳', 3),
(6, 4, 3, 2, 'IN THE ALTOGETHER', 'img1', '待結帳', 4),
(8, 2, 5, 8, 'IN THE ALTOGETHER', 'img1', '待結帳', 6),
(9, 3, 4, 5, 'IN THE ALTOGETHER', 'img1', '待結帳', 7),
(10, 6, 1, 3, 'IN THE ALTOGETHER', 'img1', '待結帳', 9),
(11, 6, 2, 4, 'IN THE ALTOGETHER', 'img1', '待結帳', 9),
(12, 6, 3, 5, 'IN THE ALTOGETHER', 'img1', '待結帳', 9),
(13, 6, 4, 6, 'IN THE ALTOGETHER', 'img1', '待結帳', 9);

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
(2, 400, '	各種膚質	', '	10.5g	', '#一款3用的全能不暈妝柔焦粉餅\r\n#乾用、溼用、定妝，無論哪個步驟使用都不暈妝\r\n#乾用薄透柔焦、濕用貼膚透亮、定妝持久控油	'),
(3, 500, '	各種膚質	', '	10.5g	', '#一款3用的全能不暈妝柔焦粉餅。\r\n#乾用、溼用、定妝，無論哪個步驟使用都不暈妝。\r\n#乾用薄透柔焦、濕用貼膚透亮、定妝持久控油。\"	'),
(4, 500, '	各種膚質	', '	10.5g	', '#一款3用的全能不暈妝柔焦粉餅。\r\n#乾用、溼用、定妝，無論哪個步驟使用都不暈妝。\r\n#乾用薄透柔焦、濕用貼膚透亮、定妝持久控油。\"	'),
(5, 600, '	各種膚質	', '	15g*2	', '#金奢霧光ｘ金牌遮瑕力\r\n#薄霧輕液態清爽質地ｘ獨家控油粉末再升級\r\n#金牌持妝力ｘ24H全天零暗沉\r\n#美得過分時髦 #金磚氣墊ｘ超Q彈密實霸氣黑氣墊粉撲\"	'),
(6, 600, '	各種膚質	', '	15g*2	', '#金奢霧光ｘ金牌遮瑕力\r\n#薄霧輕液態清爽質地ｘ獨家控油粉末再升級\r\n#金牌持妝力ｘ24H全天零暗沉\r\n#美得過分時髦 #金磚氣墊ｘ超Q彈密實霸氣黑氣墊粉撲\"	'),
(7, 600, '	各種膚質	', '	15g*2	', '#金奢霧光ｘ金牌遮瑕力\r\n#薄霧輕液態清爽質地ｘ獨家控油粉末再升級\r\n#金牌持妝力ｘ24H全天零暗沉\r\n#美得過分時髦 #金磚氣墊ｘ超Q彈密實霸氣黑氣墊粉撲\"	'),
(8, 600, '	各種膚質	', '	15g*2	', '#水透光氣墊拍出韓妞鮮嫩度 #水透光圈肌\r\n#高保養植萃精華油成分，提亮服貼！\r\n#高保濕獨家花瓣狀親膚粉體，越拍越水越亮！\r\n#韓國氣墊教主！高顏值霓光紫蓋、粉Q彈氣墊粉撲、粉蕊閃電格紋設計\"	'),
(9, 600, '	各種膚質	', '	40g	', '#一瓶多效零技巧底妝：僅需一步驟絕不失誤，保濕、防曬、隔離、潤色、遮瑕、毛孔柔焦、持妝一瓶兼具\r\n#適應亞洲氣候的剛剛好特調：精心特調對亞洲女性肌膚保濕度與遮瑕度剛剛好的自然保濕遮瑕，彷彿就像妳天生無瑕的自然肌膚 #MSBB\r\n#精準融膚調色科技：適應台韓多數女性膚色且融合各種膚況，適應自然呈色，半霧妝效就像妳天生的無瑕自然美肌\r\n#物理性防曬：100%物理防曬成份，溫和不刺激，輕盈無負擔\"	'),
(10, 600, '	各種膚質	', '	40g	', '#一瓶多效零技巧底妝：僅需一步驟絕不失誤，保濕、防曬、隔離、潤色、遮瑕、毛孔柔焦、持妝一瓶兼具\r\n#適應亞洲氣候的剛剛好特調：精心特調對亞洲女性肌膚保濕度與遮瑕度剛剛好的自然保濕遮瑕，彷彿就像妳天生無瑕的自然肌膚 #MSBB\r\n#精準融膚調色科技：適應台韓多數女性膚色且融合各種膚況，適應自然呈色，半霧妝效就像妳天生的無瑕自然美肌\r\n#物理性防曬：100%物理防曬成份，溫和不刺激，輕盈無負擔\"	'),
(11, 750, '	各種膚質	', '	10.5g	', '#超薄無重光感粉體 (薄.貼)：羽毛般微米細緻高透明度粉體，以融入膚色的方式提亮肌與修飾瑕疵，反覆塗擦也毫無厚重粉感。\r\n#毛孔瑕疵隱身科技 (遮.柔焦)：高光柔焦粉體科技，能感應光線流動並亮化毛孔邊緣，薄抹一層即透現仙女美肌。\r\n#超高防曬係數：SPF40/ PA+++，補妝同時補防曬。\"	'),
(12, 390, '	乾性.中性.混合性	', '	6g	', '#快速貼合肌膚 親膚性佳長效持妝不易脫妝\r\n#柔滑質地 使用時撫平角質使肌膚光滑細緻\r\n#玻尿酸成分幫助肌膚補水保濕\r\n#搭配絕對遮瑕隱形粉底使用使妝容更完美無瑕\"	'),
(13, 600, '	乾性.中性.混合性	', '	30ml	', '#擁有正宗韓系底妝遮瑕與光澤的完美調配\r\n#全天候零瑕疵奶油光底妝新趨勢\r\n#智慧校色水潤質地不乾澀不粘膩\r\n#可層層疊擦不厚重 遮瑕度自行定義\"	'),
(14, 600, '	乾性.中性.混合性	', '	30ml	', '#擁有正宗韓系底妝遮瑕與光澤的完美調配\r\n#全天候零瑕疵奶油光底妝新趨勢\r\n#智慧校色水潤質地不乾澀不粘膩\r\n#可層層疊擦不厚重 遮瑕度自行定義\"	'),
(15, 600, '	乾性.中性.混合性	', '	30ml	', '#擁有正宗韓系底妝遮瑕與光澤的完美調配\r\n#全天候零瑕疵奶油光底妝新趨勢\r\n#智慧校色水潤質地不乾澀不粘膩\r\n#可層層疊擦不厚重 遮瑕度自行定義\"	'),
(16, 600, '	乾性.中性.混合性	', '	30ml	', '#擁有正宗韓系底妝遮瑕與光澤的完美調配\r\n#全天候零瑕疵奶油光底妝新趨勢\r\n#智慧校色水潤質地不乾澀不粘膩\r\n#可層層疊擦不厚重 遮瑕度自行定義\"	'),
(17, 490, '	各種膚質	', '	50g	', '#防曬、妝前打底、飾底乳等一瓶搞定\r\n#最高防曬係數SPF50+/PA++++\r\n#清爽不黏膩，無色好推勻不影響妝容\"	'),
(18, 350, '	各種膚質	', '	3.3g	', '#第一支雙唇專用打亮，一抹聚光造唇\r\n#6款摯愛顯白話題色選\r\n#高保濕滋潤成分，直接敷上美唇油\r\n#獨家聚光翹唇刷頭X時髦電鍍金管\"	'),
(19, 250, '	各種膚質	', '	1.9g	', '#潤唇妝前2合1，完勝潤唇膏\r\n#唇紋小熨斗，極美霧唇必備\r\n#添加7大天然植物萃取\"	'),
(20, 250, '	各種膚質	', '	6g	', '#第一支雙唇專用打亮，一抹聚光造唇\r\n#6款摯愛顯白話題色選\r\n#高保濕滋潤成分，直接敷上美唇油\r\n#獨家聚光翹唇刷頭X時髦電鍍金管\"	'),
(21, 250, '	各種膚質	', '	6g	', '#第一支雙唇專用打亮，一抹聚光造唇\r\n#6款摯愛顯白話題色選\r\n#高保濕滋潤成分，直接敷上美唇油\r\n#獨家聚光翹唇刷頭X時髦電鍍金管\"	'),
(22, 250, '	各種膚質	', '	6g	', '#第一支雙唇專用打亮，一抹聚光造唇\r\n#6款摯愛顯白話題色選\r\n#高保濕滋潤成分，直接敷上美唇油\r\n#獨家聚光翹唇刷頭X時髦電鍍金管\"	'),
(23, 250, '	各種膚質	', '	6g	', '#第一支雙唇專用打亮，一抹聚光造唇\r\n#6款摯愛顯白話題色選\r\n#高保濕滋潤成分，直接敷上美唇油\r\n#獨家聚光翹唇刷頭X時髦電鍍金管\"	'),
(24, 300, '	各種膚質	', '	3.5g	', '	# 100%為亞洲人所研發的專業彩妝品牌	'),
(25, 300, '	各種膚質	', '	3.5g	', '	# 100%為亞洲人所研發的專業彩妝品牌	'),
(26, 300, '	各種膚質	', '	3.5g	', '	# 100%為亞洲人所研發的專業彩妝品牌	'),
(27, 300, '	各種膚質	', '	3.5g	', '	# 100%為亞洲人所研發的專業彩妝品牌	'),
(28, 300, '	各種膚質	', '	3.5g	', '	# 100%為亞洲人所研發的專業彩妝品牌	'),
(29, 300, '	各種膚質	', '	3.5g	', '	\"#水煙霧感唇：無負重感染唇科技，兩段式油水包覆複合物因子，一碰雙唇質地瞬轉為煙霧微光，輕薄如無重力煙霧\r\n#煙染玫瑰色：以不敗色系為基底，調和煙染感自然無邊界色調，一抹美地無法無天\r\n#暖膚調MLBB：自動調和暖膚色調最佳唇色\r\n#持色保水：強力鎖色科技，上唇即鎖色，同時鎖住唇部水分，一抹即綻放HD發色因子\"	'),
(30, 300, '	各種膚質	', '	3.5g	', '	\"#水煙霧感唇：無負重感染唇科技，兩段式油水包覆複合物因子，一碰雙唇質地瞬轉為煙霧微光，輕薄如無重力煙霧\r\n#煙染玫瑰色：以不敗色系為基底，調和煙染感自然無邊界色調，一抹美地無法無天\r\n#暖膚調MLBB：自動調和暖膚色調最佳唇色\r\n#持色保水：強力鎖色科技，上唇即鎖色，同時鎖住唇部水分，一抹即綻放HD發色因子\"	'),
(31, 300, '	各種膚質	', '	3.5g	', '	\"#水煙霧感唇：無負重感染唇科技，兩段式油水包覆複合物因子，一碰雙唇質地瞬轉為煙霧微光，輕薄如無重力煙霧\r\n#煙染玫瑰色：以不敗色系為基底，調和煙染感自然無邊界色調，一抹美地無法無天\r\n#暖膚調MLBB：自動調和暖膚色調最佳唇色\r\n#持色保水：強力鎖色科技，上唇即鎖色，同時鎖住唇部水分，一抹即綻放HD發色因子\"	'),
(32, 300, '	各種膚質	', '	3.5g	', '	\"#水煙霧感唇：無負重感染唇科技，兩段式油水包覆複合物因子，一碰雙唇質地瞬轉為煙霧微光，輕薄如無重力煙霧\r\n#煙染玫瑰色：以不敗色系為基底，調和煙染感自然無邊界色調，一抹美地無法無天\r\n#暖膚調MLBB：自動調和暖膚色調最佳唇色\r\n#持色保水：強力鎖色科技，上唇即鎖色，同時鎖住唇部水分，一抹即綻放HD發色因子\"	'),
(33, 300, '	各種膚質	', '	3.5g	', '	\"#水煙霧感唇：無負重感染唇科技，兩段式油水包覆複合物因子，一碰雙唇質地瞬轉為煙霧微光，輕薄如無重力煙霧\r\n#煙染玫瑰色：以不敗色系為基底，調和煙染感自然無邊界色調，一抹美地無法無天\r\n#暖膚調MLBB：自動調和暖膚色調最佳唇色\r\n#持色保水：強力鎖色科技，上唇即鎖色，同時鎖住唇部水分，一抹即綻放HD發色因子\"	'),
(34, 300, '	各種膚質	', '	3.5g	', '	\"#水煙霧感唇：無負重感染唇科技，兩段式油水包覆複合物因子，一碰雙唇質地瞬轉為煙霧微光，輕薄如無重力煙霧\r\n#煙染玫瑰色：以不敗色系為基底，調和煙染感自然無邊界色調，一抹美地無法無天\r\n#暖膚調MLBB：自動調和暖膚色調最佳唇色\r\n#持色保水：強力鎖色科技，上唇即鎖色，同時鎖住唇部水分，一抹即綻放HD發色因子\"	'),
(35, 300, '	各種膚質	', '	3.5g	', '	\"#水煙霧感唇：無負重感染唇科技，兩段式油水包覆複合物因子，一碰雙唇質地瞬轉為煙霧微光，輕薄如無重力煙霧\r\n#煙染玫瑰色：以不敗色系為基底，調和煙染感自然無邊界色調，一抹美地無法無天\r\n#暖膚調MLBB：自動調和暖膚色調最佳唇色\r\n#持色保水：強力鎖色科技，上唇即鎖色，同時鎖住唇部水分，一抹即綻放HD發色因子\"	'),
(36, 450, '	中性.混合.油性	', '	16.8g	', '	\"#打開就有置身異國旅行狂歡的氛圍\r\n#日常實用色系(橘色調/粉色調)的多重質地變化，畫出平淡日常的小驚喜\r\n#一盤收錄所有4種繽紛質地\r\n#韓國三明治粉體顯色科技，粉體極細緻， 妝感如眼影霜般持久綻色\"	'),
(37, 450, '	中性.混合.油性	', '	16.8g	', '	\"#打開就有置身異國旅行狂歡的氛圍\r\n#日常實用色系(橘色調/粉色調)的多重質地變化，畫出平淡日常的小驚喜\r\n#一盤收錄所有4種繽紛質地\r\n#韓國三明治粉體顯色科技，粉體極細緻， 妝感如眼影霜般持久綻色\"	'),
(38, 250, '	各種膚質	', '	0.6g	', '	\"#速乾水感薄膜劑質\r\n#獨家防水抗汗貼合聚合物\r\n#天然低敏顏料，溫水可卸\r\n#氣密墨水儲存盒及雙蓋貼心設計\"	'),
(39, 250, '	各種膚質	', '	0.6g	', '	\"#速乾水感薄膜劑質\r\n#獨家防水抗汗貼合聚合物\r\n#天然低敏顏料，溫水可卸\r\n#氣密墨水儲存盒及雙蓋貼心設計\"	'),
(40, 250, '	各種膚質	', '	0.6g	', '	\"#速乾水感薄膜劑質\r\n#獨家防水抗汗貼合聚合物\r\n#天然低敏顏料，溫水可卸\r\n#氣密墨水儲存盒及雙蓋貼心設計\"	'),
(41, 250, '	各種膚質	', '	0.6g	', '	\"#速乾水感薄膜劑質\r\n#獨家防水抗汗貼合聚合物\r\n#天然低敏顏料，溫水可卸\r\n#氣密墨水儲存盒及雙蓋貼心設計\"	'),
(42, 350, '	乾性.中性	', '	9g	', '	\"#假睫毛般瞬間拉長的華麗效果\r\n#快乾不下垂不暈染\r\n#重複刷上更濃密不結塊\"	'),
(43, 450, '	中性.混合.油性	', '	6g	', '	\"#超高顯色度 柔軟光滑質地\r\n#一盤擁有粉霧、珍珠光、亮片三種妝效\r\n#客製化自己的眼妝！\"	'),
(44, 450, '	中性.混合.油性	', '	6g	', '	\"#超高顯色度 柔軟光滑質地\r\n#一盤擁有粉霧、珍珠光、亮片三種妝效\r\n#客製化自己的眼妝！\"	'),
(45, 230, '	乾性	', '	0.5g	', '	\"# 1.5mm超細眉筆種出一根根自然眉毛\r\n#簡易使用 完美勾勒眉型線條\r\n#獨特長效持色配方 一整天不掉色\"	'),
(46, 230, '	乾性	', '	0.5g	', '	\"# 1.5mm超細眉筆種出一根根自然眉毛\r\n#簡易使用 完美勾勒眉型線條\r\n#獨特長效持色配方 一整天不掉色\"	'),
(47, 230, '	乾性	', '	0.5g	', '	\"# 1.5mm超細眉筆種出一根根自然眉毛\r\n#簡易使用 完美勾勒眉型線條\r\n#獨特長效持色配方 一整天不掉色\"	');

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
  `customerName` varchar(32) NOT NULL,
  `email` varchar(60) NOT NULL,
  `account` varchar(60) NOT NULL,
  `password` varchar(32) NOT NULL,
  `cellPhone` varchar(32) DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `birth_date` date DEFAULT NULL,
  `postCode` varchar(10) DEFAULT NULL,
  `city` varchar(10) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `district` varchar(10) DEFAULT NULL,
  `nickname` varchar(20) DEFAULT NULL,
  `headshot` varchar(30) DEFAULT NULL,
  `subscribe` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `customer`
--

INSERT INTO `customer` (`customer_id`, `customerName`, `email`, `account`, `password`, `cellPhone`, `gender`, `birth_date`, `postCode`, `city`, `address`, `district`, `nickname`, `headshot`, `subscribe`) VALUES
(1, '小花花', 'ggg', 'a', 'undefined', '', '女', '1995-10-04', '408', '台中市', '公益路二段51號', '南屯區', '花花', 'img1', 0),
(2, '高威廉', 'bbaa@huanmail.com', 'bbaa@huanmail.com', 'P@ssw0rd', '0922123456', '男', '1999-11-15', '813', '高雄市', '博愛二路238號', '左營區', '威廉', 'img1', 0),
(3, '', 'aabb@mail.com', 'aabb@mail.com', 'P@ssw0rd', '0918667880', '女', '1988-01-01', '265', '宜蘭縣', '和平路75號', '羅東鎮', '水仔', 'img1', 0),
(4, '', 'qqwss@gmail.com', 'qqwss@gmail.com', 'poopoo', '(02)296606', '女', '1978-06-30', '220', '新北市', '民權路57號', '板橋區', '北北仔', 'img1', 0),
(5, '', 'qaz@huanmail.com', 'qaz@huanmail.com', 'P@ssw0rd', '0912123098', '女', '0000-00-00', '408', '新北市板橋區民權路2', '公益路二段52號', '左營區', '威廉2020', 'img1', 0),
(6, '羅東鎮', 'po0912@gmail.com', 'po0912@gmail.com', '091234', '0958555998', '男', '1995-05-23', '1600', '華盛頓', '賓夕法尼亞大道1600號', '哥倫比亞特區西北區', '川普', 'img1', 0);

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
(6, 2, 7),
(7, 2, 8),
(8, 2, 10),
(9, 2, 6),
(10, 1, 1),
(12, 1, 4),
(17, 1, 3),
(19, 1, 6);

-- --------------------------------------------------------

--
-- 資料表結構 `orderdetail`
--

CREATE TABLE `orderdetail` (
  `orderDetail_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `grandTotal` int(11) NOT NULL,
  `shippingStyle_id` varchar(11) NOT NULL,
  `payment_method` varchar(11) NOT NULL,
  `orderDate` datetime NOT NULL,
  `deliverFee` int(11) NOT NULL,
  `coupon_id` varchar(11) NOT NULL,
  `coin_id` varchar(11) NOT NULL,
  `orderComment` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `orderdetail`
--

INSERT INTO `orderdetail` (`orderDetail_id`, `order_id`, `customer_id`, `grandTotal`, `shippingStyle_id`, `payment_method`, `orderDate`, `deliverFee`, `coupon_id`, `coin_id`, `orderComment`) VALUES
(1, 1, 1, 550, '宅配', '貨到付款', '2020-11-15 00:00:00', 60, '', '1', '下午收貨'),
(2, 3, 2, 550, '7-11取貨', '信用卡', '2020-11-14 00:00:00', 60, '', '1', '中午收貨'),
(3, 2, 1, 430, '全家取貨', '信用卡', '2020-11-13 00:00:00', 60, '', '1', ''),
(4, 9, 6, 550, '7-11取貨', '信用卡', '2020-11-14 00:00:00', 60, '', '1', '中午收貨');

-- --------------------------------------------------------

--
-- 資料表結構 `orders`
--

CREATE TABLE `orders` (
  `cart_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `cusMakeColor` varchar(50) NOT NULL,
  `cusMakeImg` varchar(100) NOT NULL,
  `orderStatus` varchar(100) NOT NULL,
  `order_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `orders`
--

INSERT INTO `orders` (`cart_id`, `customer_id`, `product_id`, `quantity`, `cusMakeColor`, `cusMakeImg`, `orderStatus`, `order_id`) VALUES
(1, 6, 1, 3, 'IN THE ALTOGETHER', 'img1', '已結帳', 9),
(2, 6, 2, 4, 'IN THE ALTOGETHER', 'img1', '已結帳', 9);

-- --------------------------------------------------------

--
-- 資料表結構 `product`
--

CREATE TABLE `product` (
  `product_id` int(11) NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  `kindA` varchar(11) NOT NULL,
  `kindB` varchar(11) NOT NULL,
  `productName` varchar(200) NOT NULL,
  `productColor` varchar(50) NOT NULL,
  `putDate` date NOT NULL,
  `updateDate` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `product`
--

INSERT INTO `product` (`product_id`, `category_id`, `kindA`, `kindB`, `productName`, `productColor`, `putDate`, `updateDate`) VALUES
(1, 2, '底妝', '粉餅', '無瑕粉餅', '無', '2020-11-28', '2020-11-28 23:41:05'),
(2, 4, '底妝', '蜜粉', '控油烘焙蜜粉', '無', '2020-11-28', '2020-11-28 23:41:10'),
(3, 2, '底妝', '粉餅', '無瑕粉餅', '明亮白', '0000-00-00', '2020-11-28 23:41:17'),
(4, 2, '底妝', '粉餅', '無瑕粉餅', '自然色', '0000-00-00', '2020-11-28 23:41:21'),
(5, 2, '底妝', '粉餅', '持久氣墊粉餅', '明亮白', '0000-00-00', '2020-11-28 23:41:25'),
(6, 2, '底妝', '粉餅', '持久氣墊粉餅', '自然色', '0000-00-00', '2020-11-28 23:41:28'),
(7, 2, '底妝', '粉餅', '持久氣墊粉餅', '健康色', '0000-00-00', '2020-11-28 23:41:32'),
(8, 2, '底妝', '粉餅', '透光氣墊粉餅', '自然色', '0000-00-00', '2020-11-28 23:41:35'),
(9, 4, '底妝', '粉底', '保濕ZZ霜', '明亮白', '0000-00-00', '0000-00-00 00:00:00'),
(10, 4, '底妝', '粉底', '保濕ZZ霜', '自然色', '0000-00-00', '0000-00-00 00:00:00'),
(11, 2, '底妝', '粉餅', '持久粉餅', '瓷白', '0000-00-00', '0000-00-00 00:00:00'),
(12, 2, '底妝', '遮瑕', '隱形遮瑕蜜', '自然色', '0000-00-00', '0000-00-00 00:00:00'),
(13, 2, '底妝', '粉底', '遮瑕粉底', '瓷白', '0000-00-00', '0000-00-00 00:00:00'),
(14, 4, '底妝', '粉底', '遮瑕粉底', '粉嫩白', '0000-00-00', '0000-00-00 00:00:00'),
(15, 4, '底妝', '粉底', '遮瑕粉底', '明亮白', '0000-00-00', '0000-00-00 00:00:00'),
(16, 4, '底妝', '粉底', '遮瑕粉底', '自然色', '0000-00-00', '0000-00-00 00:00:00'),
(17, 2, '底妝', '妝前乳', '妝前防護乳	', '無', '0000-00-00', '0000-00-00 00:00:00'),
(18, 1, '唇彩', '唇釉', '聚光水唇釉迷你組', '無', '0000-00-00', '0000-00-00 00:00:00'),
(19, 3, '唇彩', '唇膏', '妝前潤唇膏', '	無', '0000-00-00', '0000-00-00 00:00:00'),
(20, 1, '唇彩', '唇釉', '超聚光水唇釉', '辣椒紅', '0000-00-00', '0000-00-00 00:00:00'),
(21, 1, '唇彩', '唇釉', '超聚光水唇釉', '冰豆紅', '0000-00-00', '0000-00-00 00:00:00'),
(22, 1, '唇彩', '唇釉', '超聚光水唇釉', '玫瑰粉', '0000-00-00', '0000-00-00 00:00:00'),
(23, 1, '唇彩', '唇釉', '超聚光水唇釉', '血莓紅', '0000-00-00', '0000-00-00 00:00:00'),
(24, 4, '唇彩', '唇膏', '渲霧奶油唇膏', '焦糖奶油', '0000-00-00', '0000-00-00 00:00:00'),
(25, 4, '唇彩', '唇膏', '渲霧奶油唇膏', '蜜糖奶油', '0000-00-00', '0000-00-00 00:00:00'),
(26, 4, '唇彩', '唇膏', '渲霧奶油唇膏', '楓糖奶油', '0000-00-00', '0000-00-00 00:00:00'),
(27, 4, '唇彩', '唇膏', '渲霧奶油唇膏', '斑比奶油', '0000-00-00', '0000-00-00 00:00:00'),
(28, 4, '唇彩', '唇膏', '渲霧奶油唇膏', '黑糖奶油', '0000-00-00', '0000-00-00 00:00:00'),
(29, 1, '唇彩', '唇釉', ' 暖霧水煙唇釉', '暖霧玫瑰', '0000-00-00', '0000-00-00 00:00:00'),
(30, 1, '唇彩', '唇釉', ' 暖霧水煙唇釉', '水煙玫瑰', '0000-00-00', '0000-00-00 00:00:00'),
(31, 1, '唇彩', '唇釉', ' 暖霧水煙唇釉', '乾冰玫瑰', '0000-00-00', '0000-00-00 00:00:00'),
(32, 1, '唇彩', '唇釉', ' 暖霧水煙唇釉', '冷菸玫瑰', '0000-00-00', '0000-00-00 00:00:00'),
(33, 1, '唇彩', '唇釉', ' 暖霧水煙唇釉', '雪茄玫瑰', '0000-00-00', '0000-00-00 00:00:00'),
(34, 1, '唇彩', '唇釉', ' 暖霧水煙唇釉', '涼菸玫瑰', '0000-00-00', '0000-00-00 00:00:00'),
(35, 1, '唇彩', '唇釉', ' 暖霧水煙唇釉', '乾燥玫瑰', '0000-00-00', '0000-00-00 00:00:00'),
(36, 5, '眼彩', '眼影', '12色狂歡眼影盤', '沙漠晚霞', '0000-00-00', '0000-00-00 00:00:00'),
(37, 5, '眼彩', '眼影', '12色狂歡眼影盤', '極光爆發', '0000-00-00', '0000-00-00 00:00:00'),
(38, 5, '眼彩', '眼線', '不暈絲滑眼線膠筆', '黑色', '0000-00-00', '0000-00-00 00:00:00'),
(39, 5, '眼彩', '眼線', '不暈絲滑眼線膠筆', '深棕', '0000-00-00', '0000-00-00 00:00:00'),
(40, 5, '眼彩', '眼線', '抗暈防水眼線液', '黑色', '0000-00-00', '0000-00-00 00:00:00'),
(41, 5, '眼彩', '眼線', '抗暈防水眼線液', '深棕', '0000-00-00', '0000-00-00 00:00:00'),
(42, 5, '眼彩', '睫毛膏', '濃密睫毛膏', '無', '0000-00-00', '0000-00-00 00:00:00'),
(43, 5, '眼彩', '眼影', '4色眼彩盤', '名媛裸', '0000-00-00', '0000-00-00 00:00:00'),
(44, 5, '眼彩', '眼影', '4色眼彩盤', 'fair affair', '0000-00-00', '0000-00-00 00:00:00'),
(45, 5, '眼彩', '眉筆', '雙頭眉筆', '自然棕', '0000-00-00', '0000-00-00 00:00:00'),
(46, 5, '眼彩', '眉筆', '雙頭眉筆', '深棕色', '0000-00-00', '0000-00-00 00:00:00'),
(47, 5, '眼彩', '眉筆', '雙頭眉筆', '灰棕色', '0000-00-00', '0000-00-00 00:00:00');

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
(1, 'A_01.jpg', 'https://shoplineimg.com/574f6e21e37ec6e05f000012/5f6f58cbc727c4696c7f9abf/800x.webp?source_format=jpg', 'https://shoplineimg.com/574f6e21e37ec6e05f000012/5e72716f1a6a1d3e83c6cfa1/800x.webp?source_format=jpg', '', '', '', '', ''),
(2, 'A_02.jpg', 'https://shoplineimg.com/574f6e21e37ec6e05f000012/5f6d1f33fa2edb003e2ab9a6/800x.webp?source_format=jpg', 'https://shoplineimg.com/574f6e21e37ec6e05f000012/5d2746c86b9d9b0032d8578e/800x.webp?source_format=jpg', '', '', '', '', ''),
(3, 'A_03.jpg', 'https://shoplineimg.com/574f6e21e37ec6e05f000012/5f6f58cbc727c4696c7f9abf/800x.webp?source_format=jpg', 'https://shoplineimg.com/574f6e21e37ec6e05f000012/5e72716f1a6a1d3e83c6cfa1/800x.webp?source_format=jpg', '', '', '', '', ''),
(4, 'A_04.jpg', 'https://shoplineimg.com/574f6e21e37ec6e05f000012/5f6f58cbc727c4696c7f9abf/800x.webp?source_format=jpg', 'https://shoplineimg.com/574f6e21e37ec6e05f000012/5e72716f1a6a1d3e83c6cfa1/800x.webp?source_format=jpg', '', '', '', '', ''),
(5, 'A_05.jpg', 'https://shoplineimg.com/574f6e21e37ec6e05f000012/5f6d1f33fa2edb003e2ab9a6/800x.webp?source_format=jpg', 'https://shoplineimg.com/574f6e21e37ec6e05f000012/5d2746c86b9d9b0032d8578e/800x.webp?source_format=jpg', '', '', '', '', ''),
(6, 'A_06.jpg', 'https://shoplineimg.com/574f6e21e37ec6e05f000012/5f6f58cbc727c4696c7f9abf/800x.webp?source_format=jpg', 'https://shoplineimg.com/574f6e21e37ec6e05f000012/5e72716f1a6a1d3e83c6cfa1/800x.webp?source_format=jpg', '', '', '', '', ''),
(7, 'A_07.jpg', 'https://shoplineimg.com/574f6e21e37ec6e05f000012/5f6d1f33fa2edb003e2ab9a6/800x.webp?source_format=jpg', 'https://shoplineimg.com/574f6e21e37ec6e05f000012/5d2746c86b9d9b0032d8578e/800x.webp?source_format=jpg', '', '', '', '', ''),
(8, 'A_08.jpg', 'https://shoplineimg.com/574f6e21e37ec6e05f000012/5f6f58cbc727c4696c7f9abf/800x.webp?source_format=jpg', 'https://shoplineimg.com/574f6e21e37ec6e05f000012/5e72716f1a6a1d3e83c6cfa1/800x.webp?source_format=jpg', '', '', '', '', ''),
(18, 'B_01.jpg', 'https://shoplineimg.com/574f6e21e37ec6e05f000012/5f6d1f33fa2edb003e2ab9a6/800x.webp?source_format=jpg', 'https://shoplineimg.com/574f6e21e37ec6e05f000012/5d2746c86b9d9b0032d8578e/800x.webp?source_format=jpg', '', '', '', '', ''),
(19, 'B_02.jpg', 'https://shoplineimg.com/574f6e21e37ec6e05f000012/5f6f58cbc727c4696c7f9abf/800x.webp?source_format=jpg', 'https://shoplineimg.com/574f6e21e37ec6e05f000012/5e72716f1a6a1d3e83c6cfa1/800x.webp?source_format=jpg', '', '', '', '', ''),
(20, 'B_03.jpg', 'https://shoplineimg.com/574f6e21e37ec6e05f000012/5f6d1f33fa2edb003e2ab9a6/800x.webp?source_format=jpg', 'https://shoplineimg.com/574f6e21e37ec6e05f000012/5d2746c86b9d9b0032d8578e/800x.webp?source_format=jpg', '', '', '', '', '');

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
  `order_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `shipping_Name` varchar(32) NOT NULL,
  `shipping_cellPhone` varchar(32) NOT NULL,
  `shipping_postCode` varchar(32) NOT NULL,
  `shipping_city` varchar(10) NOT NULL,
  `shipping_district` varchar(10) NOT NULL,
  `shipping_address` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `shipping`
--

INSERT INTO `shipping` (`order_id`, `customer_id`, `shipping_Name`, `shipping_cellPhone`, `shipping_postCode`, `shipping_city`, `shipping_district`, `shipping_address`) VALUES
(1, 1, '花媽媽', '0912312345', '10559', '台北市', '松山區', '八德路三段76號1樓'),
(2, 1, '花花', '0912123098', '408', '台中市', '南屯區', '公益路二段51號'),
(3, 2, '威廉', '0922123456', '813', '高雄市', '左營區', '博愛二路238號'),
(9, 6, '威廉', '0922123456', '813', '高雄市', '左營區', '博愛二路238號'),
(10, 6, '', '', '', '', '', '');

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
  ADD PRIMARY KEY (`cart_id`);

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
-- 使用資料表自動遞增(AUTO_INCREMENT) `category`
--
ALTER TABLE `category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `chat`
--
ALTER TABLE `chat`
  MODIFY `chat_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `customer`
--
ALTER TABLE `customer`
  MODIFY `customer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `favorite`
--
ALTER TABLE `favorite`
  MODIFY `favorite_id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `orders`
--
ALTER TABLE `orders`
  MODIFY `cart_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
