const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const moment = require("moment");

const app = express();

const corsOptions = {
	origin: ["http://localhost:3000", "http://127.0.0.1:3000", "http://10.0.103.250:3000"],
	methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
	//allowedHeaders: ["Content-Type", "Authorization"]
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

//連線mysql
const conn = mysql.createConnection({
	host: "127.0.0.1",
	port: "3306",
	user: "root",
	password: "",
	database: "customer",
	multipleStatements: true,
});

//連線
conn.connect(function (err) {
	if (err) {
		console.log(JSON.stringify(err));
		return;
	}
});

//首頁
app.get("/", function (request, response) {
	let sql;
	if (request.query.card != "客製") {
		sql = `SELECT p.product_id,p.category_id,productName,img_0, unitPrice, p.kindA 
    FROM product as p,productimg as img,category as c
    where kindA="${request.query.card}" && product_id=img.productImg_id && p.category_id=c.category_id`;
	} else {
		sql = `SELECT p.product_id,p.category_id,productName,img_0, unitPrice, p.kindA 
    FROM product as p,productimg as img,category as c
    where kindC="${request.query.card}" && product_id=img.productImg_id && p.category_id=c.category_id`;
	}

	conn.query(sql, function (err, rows) {
		if (err) {
			console.log(JSON.stringify(err));
			return;
		}
		response.send(rows);
	});
});

//登入
app.post("/login", function (request, response) {
	let sql = `select customer_id, nickname ,customerStatus
    from customer
    where account="${request.body.account}"`;
	// && password="${request.body.password}"
	conn.query(sql, function (err, rows) {
		// console.log(rows)
		if (err) return;

		// console.log(rows.length)
		if (rows.length == 0) {
			response.send([{ info: "error" }]);
		} else {
			rows[0].info = "success";
			response.send(rows);
		}
	});
});

//註冊
app.post("/register", function (request, response) {
	let sql = `insert into customer (customerName,account, email, password)
    values("${request.body.username}","${request.body.account}","${request.body.email}","${request.body.password}")`;
	// && password="${request.body.password}"
	conn.query(sql, function (err, rows) {
		//if (err) return;
		//console.log(request.body)

		response.send([{ info: "yes" }]);
	});
});

//產品頁
app.get("/p", function (request, response) {
	var sql;

	if (request.query.kind) {
		sql = `SELECT *,unitPrice
		FROM product as p,category as c
		WHERE c.category_id=p.category_id && p.kindA="${request.query.kind}"`;
	} else {
		sql = `SELECT *,unitPrice 
    FROM product as p,category as c 
    WHERE c.category_id=p.category_id`;
	}

	conn.query(sql, function (err, rows) {
		response.send(rows);
	});
});

//我的最愛
app.get("/myLove", function (request, response) {
	let sql = `SELECT customer_id, product_id 
      FROM favorite
      WHERE customer_id=${request.query.cId}`;

	conn.query(sql, function (err, rows) {
		response.send(rows);
		// console.log(rows);
	});
});

//加入最愛
app.get("/addLove", function (request, response) {
	let sql = `select * 
    from favorite
    where customer_id=${request.query.cId} && product_id=${request.query.pId}`;

	conn.query(sql, function (err, rows) {
		if (err) {
			console.log(JSON.stringify(err));
			return;
		}

		if (rows.length == 0) {
			let sql2 = `insert into favorite (customer_id, product_id)
      values(${request.query.cId},${request.query.pId})`;

			conn.query(sql2, function (err, row) {
				if (err) return;
			});
		} else {
			let sql2 = `delete
        from favorite
        where customer_id=${request.query.cId} && product_id=${request.query.pId}`;

			conn.query(sql2, function (err, row) {
				if (err) return;
			});
		}
	});
});

//產品詳細頁
app.get("/p/:kind", function (request, response) {
	let sql = `SELECT p.*,productName,img.*, c.unitPrice,c.skinType,c.specification,c.detail
	  FROM product as p,productimg as img,category as c
	  where product_id=${request.query.pid} && product_id=img.productImg_id && p.category_id=c.category_id`;

	conn.query(sql, function (err, rows) {
		if (err) {
			console.log(JSON.stringify(err));
			return;
		}
		// console.log(request.query.pid);
		response.send(rows);
	});
});

//購物車
app.get("/cart", function (request, response) {
	conn.query(
		`SELECT *
FROM category AS c 
INNER JOIN product AS p 
ON c.category_id = p.category_id 
INNER JOIN cart AS cart
ON p.product_id = cart.product_id
INNER JOIN productimg AS pdimg
ON p.product_id = productImg_id
WHERE cart.customer_id = ${request.query.cId}  `,
		function (err, rows) {
			if (err) {
				console.log(JSON.stringify(err));
				return;
			}
			response.send(rows);
		}
	);
});

//訂單送出後 生成購買清單
app.post("/searchOrder", function (request, response) {
	// console.log(request.body);

	//先抓到該會員 最後一筆訂單
	let sql1 = `SELECT order_id FROM orders  WHERE customer_id = ${request.body.id} order by order_id desc limit 1;`;

	conn.query(sql1, function (err, rows1) {
		if (err) {
			console.log(JSON.stringify(err));
			return;
		}
		// response.send(rows1);
		// console.log(rows1);

		// 再利用此筆訂單編號 合併表格生成購買清單
		let sql2 = `SELECT *
    FROM orders AS o
    INNER JOIN orderdetail AS od
    ON o.order_id = od.order_id
    INNER JOIN customer AS c
    ON o.customer_id = c.customer_id
    INNER JOIN shipping AS s
    ON o.order_id = s.order_id
    INNER JOIN product AS p
    ON p.product_id = o.product_id
    INNER JOIN category AS cate
    ON cate.category_id = p.category_id
    INNER JOIN productimg AS pdimg
    ON p.product_id = productImg_id
    WHERE o.order_id = "${rows1[0].order_id}"`;

		conn.query(sql2, function (err, rows2) {
			if (err) {
				console.log(JSON.stringify(err));
				return;
			}
			// console.log(rows2);
			response.send(rows2);
		});
	});
});

// 購物車產品加入new
app.post("/addCart", function (req, res) {
	// 先去看cart資料庫中  此消費者有沒有這項商品在購物車
	var sql = `select * from cart
    where customer_id = ${req.body.c_id} and product_id=${req.body.p_id}`;
	// console.log(req.body);
	conn.query(sql, function (err, rows) {
		if (err) {
			console.log(JSON.stringify(err));
			return;
		}

		// `SELECT *
		// FROM category AS c
		// INNER JOIN product AS p
		// ON c.category_id = p.category_id

		// INNER JOIN cart AS cart
		// ON p.product_id = cart.product_id

		// INNER JOIN productimg AS pdimg
		// ON p.product_id = productImg_id
		// WHERE cart.customer_id

		// 刪除
		//如果沒有此商品則加入
		if (rows.length == 0) {
			// console.log(rows.length);
			var sql = `INSERT into cart
(customer_id, product_id, quantity, orderStatus, order_id)
VALUES ('${req.body.c_id}', '${req.body.p_id}', '${req.body.qty}', '待結帳',CONCAT('DD',DATE_FORMAT(now(),'%Y%m%d'),customer_id))`;
			conn.query(sql, function (err, rows) {
				if (err) {
					console.log(JSON.stringify(err));
					return;
				}
			});
			//如果已經有此商品則更新  新增的數量
		} else {
			var sql = `UPDATE cart SET quantity = quantity + ${req.body.qty} WHERE customer_id = ${req.body.c_id} and product_id = ${req.body.p_id}`;
			conn.query(sql, function (err, rows) {
				if (err) {
					console.log(JSON.stringify(err));
					return;
				}
			});
			// rows[0].info = 'success';
			// response.send(rows);
		}
	});
});

// 購物車產品刪除
app.post("/delete", function (req, res) {
	var sql = `DELETE FROM cart WHERE customer_id = ${req.body.c_id} and product_id = ${req.body.p_id}`;
	// console.log(req.body);
	conn.query(sql, function (err, rows) {
		if (err) {
			console.log(JSON.stringify(err));
			return;
		}
	});
});

// 購物車產品數量隨著按鈕更新
app.post("/updateQty", function (req, res) {
	var sql = `UPDATE cart 
             SET quantity = ${req.body.qty}
             WHERE customer_id = ${req.body.c_id} and product_id =${req.body.p_id} `;
	// console.log(req.body);
	conn.query(sql, function (err, rows) {
		if (err) {
			console.log(JSON.stringify(err));
			return;
		}
	});
});

//會員
app.post("/member/:nickname", function (request, response) {
	let sql = `select * 
	from customer
   where customer_id=${request.body.cId}`;
	conn.query(sql, function (err, rows) {
		// console.log(rows)
		if (err) return;
		rows[0].birth_date = moment(rows[0].birth_date).format("YYYY-MM-DD");
		response.send(rows);
	});
});

// 會員姓名編輯
app.post("/userEdit", function (request, response) {
	// set UnitPrice = UnitPrice * 1.05
	// where CategoryID = 1
	let sql = `update customer 
     set customerName = "${request.body.username}"
     where customer_id = ${request.body.cId}
     `;
	conn.query(sql, function (err, rows) {
		if (err) return;

		// console.log(rows)
		// response.send(rows);
	});
});

// 會員手機編輯
app.post("/phoneEdit", function (request, response) {
	let sql = `update customer 
    set cellPhone = "${request.body.phone}"
    where customer_id = ${request.body.cId}
     `;
	conn.query(sql, function (err, rows) {
		if (err) return;

		// console.log(rows)
		// response.send(rows);
	});
});

// 會員mail編輯
app.post("/emailEdit", function (request, response) {
	let sql = `update customer 
    set email = "${request.body.email}"
    where customer_id = ${request.body.cId}
     `;
	conn.query(sql, function (err, rows) {
		if (err) return;

		// console.log(rows)
		// response.send(rows);
	});
});

// 會員 密碼 修改
app.post("/changePassword", function (request, response) {
	let sql = `update customer 
    set password = "${request.body.changePassword}"
    where customer_id = ${request.body.cId}
     &&   password = "${request.body.password}"
     `;

	conn.query(sql, function (err, rows) {
		if (err) return;
		//  console.log(rows)
		// if (rows.length == 0) {
		//   response.send([{ "info": "error" }]);
		// }
		// rows[0].info = 'success';
		// response.send(rows);
		response.send([{ info: "ok" }]);
	});
});

// 購買清單
app.post("/memberbuy/", function (request, response) {
	let sqlA = `SELECT * from orders as o
	inner join product as p 
	on o.product_id = p.product_id
	
	INNER JOIN category as cate
  on cate.category_id = p.category_id
  
  INNER JOIN productimg AS pdimg
  ON p.product_id = productImg_id
	
	WHERE o.customer_id = ${request.body.cId};`;

	conn.query(sqlA, function (err, rows) {
		if (err) return;

		// console.log(rows.length)
		if (rows.length < 0) {
			response.send([{ info: "error" }]);
		} else {
			// console.log(rows)
			response.send(rows);
		}
	});
});

// 收藏
app.post("/memberfavorite/", function (request, response) {
	let sql = `select p.*,cat.* ,pdimg.*
    from customer as customer
    inner join favorite as f
    on f.customer_id = customer.customer_id

    inner join product as p
    on p.product_id = f.product_id
 
    inner join category as cat
    on cat.category_id = p.category_id

    INNER JOIN productimg AS pdimg
    ON p.product_id = productImg_id

    where customer.customer_id=${request.body.cId}
    GROUP BY f.favorite_id`;

	conn.query(sql, function (err, rows) {
		// console.log(rows)
		if (err) return;

		// console.log(rows.length)
		if (rows.length > 0) {
			// console.log(rows)
			response.send(rows);
		}
	});
});
app.post("/deletefavo", function (request, response) {
	let sql = `
	delete
        from favorite
        where customer_id=${request.body.cId} && product_id=${request.body.pId}`;
	conn.query(sql, function (err, rows) {
		// console.log(rows)
		if (err) return;
	});
});

// 星幣賺取
app.post("/membercoin/", function (request, response) {
	let sql = `select * 
    from customer as customer
    inner join coin as c
    on c.customer_id = customer.customer_id

    where c.customer_id="${request.body.cId}"
    GROUP BY c.coin_id`;

	conn.query(sql, function (err, rows) {
		// console.log(rows)
		if (err) return;

		// console.log(rows.length)
		if (rows.length == 0) {
			response.send([{ info: "error" }]);
		} else {
			for (let i = 0; i < rows.length; i++) {
				rows[i].coinDate = moment(rows[i].coinDate).format("YYYY-MM-DD HH:mm:ss");
			}
			response.send(rows);
		}
	});
});

//後台訂單清單
app.get("/backend/orderlist", function (request, response) {
	let sql = `SELECT o.order_id, orderDate,customerName, quantity, grandTotal, orderStatus
    FROM orders AS o
    INNER JOIN orderdetail AS od
    ON o.order_id = od.order_id
    INNER JOIN customer AS c
    ON o.customer_id = c.customer_id`;

	conn.query(sql, function (err, rows) {
		if (err) {
			console.log(JSON.stringify(err));
			return;
		}
		// console.log(rows);
		response.send(rows);
	});
});

// 後臺 商品詳情
app.post("/proddetail/", function (request, response) {
	let sql = `
	SELECT * FROM category as c
	inner join product as p 
	on c.category_id = p.category_id`;

	conn.query(sql, function (err, rows) {
		if (err) {
			console.log(JSON.stringify(err));
			return;
		}
		// console.log(rows)
		response.send(rows);
	});
});

// 後台商品編輯
app.post("/prodedit/", function (request, response) {
	let sql = `
	UPDATE product p, category c
	SET p.productName = "${request.body.productName}",
	  p.productColor = "${request.body.productColor}",
	  p.putDate = "${request.body.putDate}",
	  p.updateDate  = "${request.body.updateDate}",
	  c.unitPrice = ${request.body.unitPrice},
	  c.skinType = "${request.body.skinType}",
	  c.detail = "${request.body.detail}"
	WHERE p.product_id = ${request.body.pid}
	&& p.category_id=c.category_id`;
	conn.query(sql, function (err, rows) {
		if (err) {
			console.log(JSON.stringify(err));
			return;
		}
		let url = "http://localhost:3000/backend/prod/detail/" + request.body.pid;
		response.redirect(url);
	});
});

//後台訂單詳情
app.post("/backend/orderlist", function (request, response) {
	let sql = `SELECT *
  FROM orders AS o
  INNER JOIN orderdetail AS od
  ON o.order_id = od.order_id
  INNER JOIN customer AS c
  ON o.customer_id = c.customer_id
  INNER JOIN shipping AS s
  ON o.order_id = s.order_id
  INNER JOIN product AS p
  ON p.product_id = o.product_id
  INNER JOIN category AS cate
  ON cate.category_id = p.category_id
  WHERE o.order_id = ${request.body.pId}`;

	conn.query(sql, function (err, rows) {
		if (err) {
			console.log(JSON.stringify(err));
			return;
		}
		//console.log(rows)
		response.send(rows);
	});
});

//後台訂單清單（特定會員）
app.get("/backend/orderlistmember", function (request, response) {
	console.log(request.query);
	let sql = `SELECT o.order_id, orderDate,customerName, quantity, grandTotal, orderStatus
    FROM orders AS o
    INNER JOIN orderdetail AS od
    ON o.order_id = od.order_id
    INNER JOIN customer AS c
    ON o.customer_id = c.customer_id 
    WHERE c.customer_id = ${request.query.pId}`;

	conn.query(sql, function (err, rows) {
		if (err) {
			console.log(JSON.stringify(err));
			return;
		}
		// console.log(rows);
		response.send(rows);
	});
});

//後台會員清單get
app.get("/backend/memberlist", function (request, response) {
	let sql = `SELECT * FROM customer`;

	conn.query(sql, function (err, rows) {
		if (err) {
			console.log(JSON.stringify(err));
			return;
		}
		//console.log(rows)
		response.send(rows);
	});
});

//後台會員清單post
app.post("/backend/memberlist", function (request, response) {
	let sql = `SELECT * FROM customer WHERE customer_id = ${request.body.pId}`;

	conn.query(sql, function (err, rows) {
		if (err) {
			console.log(JSON.stringify(err));
			return;
		}
		//console.log(rows)
		response.send(rows);
	});
});

//後台會員清單詳細資料連同收藏 載入
app.post("/backend/memberdetail", function (request, response) {
	let sql = `SELECT * FROM customer as c INNER join favorite as f on f.customer_id = c.customer_id inner join product as p on p.product_id = f.product_id WHERE c.customer_id = ${request.body.pId}`;

	conn.query(sql, function (err, rows) {
		if (err) {
			console.log(JSON.stringify(err));
			return;
		}
		//console.log(rows)
		response.send(rows);
	});
});

// 更新後台會員詳細資料
app.post("/backend/member/updateMemberDetail", function (req, res) {
	// var sql = `UPDATE customer SET account = "aaa", email = "123" WHERE customer_id = 6`;

	var sql = `UPDATE customer SET account = "${req.body.account}",customerName = "${req.body.customerName}",cellPhone = "${req.body.cellPhone}",nickname = "${req.body.nickname}",birth_date = "${req.body.birth_date}",gender = "${req.body.gender}",customerStatus="${req.body.customerStatus}",postCode = "${req.body.postCode}",city = "${req.body.city}",district = "${req.body.district}",address = "${req.body.address}" WHERE customer_id = ${req.body.pId}`;

	// console.log(req.body);
	conn.query(sql, function (err, rows) {
		if (err) {
			console.log(JSON.stringify(err));
			return;
		}
	});
});

//後臺過濾(訂單)
app.post("/backend/search", function (request, response) {
	let which;

	switch (request.body.kind) {
		case `order_id`:
			which = `o`;
			break;

		case `orderDate`:
			which = `od`;
			break;

		case `customerName`:
			which = `c`;
			break;

		case `orderStatus`:
			which = `o`;
			break;
	}

	let sql = `SELECT *
  FROM orders AS o
  INNER JOIN orderdetail AS od
  ON o.order_id = od.order_id

  INNER JOIN customer AS c
  ON o.customer_id = c.customer_id

  INNER JOIN shipping AS s
  ON o.order_id = s.order_id

  INNER JOIN product AS p
  ON p.product_id = o.product_id

  INNER JOIN category AS cate
  ON cate.category_id = p.category_id
  WHERE ${which}.${request.body.kind} = "${request.body.value}"`;

	conn.query(sql, function (err, rows) {
		if (err) {
			console.log(JSON.stringify(err));
			return;
		}
		// console.log(rows)
		response.send(rows);
	});
});

//後臺過濾(會員)
app.post("/backend/searchmember", function (request, response) {
	let which;

	switch (request.body.kind) {
		case `customerName`:
			which = `c`;
			break;

		case `customer_id`:
			which = `c`;
			break;

		case `account`:
			which = `c`;
			break;

		case `cellPhone`:
			which = `c`;
			break;

		case `nickname`:
			which = `c`;
			break;

		case `gender`:
			which = `c`;
			break;

		case `birth_date`:
			which = `c`;
			break;

		case `customerStatus`:
			which = `c`;
			break;
	}

	let sql = `SELECT *
  FROM customer AS c
  WHERE ${which}.${request.body.kind} = "${request.body.value}"`;

	conn.query(sql, function (err, rows) {
		if (err) {
			console.log(JSON.stringify(err));
			return;
		}
		// console.log(rows)
		response.send(rows);
	});
});

//後臺過濾(商品)
app.post("/backend/searchprod", function (request, response) {
	let which;

	switch (request.body.kind) {
		case `kindB`:
		case `productName`:
		case `productColor`:
		case `putDate`:
		case `productStatus`:
		case `updateDate`:
			which = `p`;
			break;

		case `unitPrice`:
			which = `c`;
			break;
	}

	let sql = `SELECT p.*, c.unitPrice
	FROM product as p
	INNER JOIN category AS c
	ON c.category_id = p.category_id

	WHERE ${which}.${request.body.kind} = "${request.body.value}"`;

	conn.query(sql, function (err, rows) {
		if (err) {
			console.log(JSON.stringify(err));
			return;
		}
		//console.log(rows);
		response.send(rows);
	});

	//console.log(request.body);
});

// 後台商品新增
app.post("/backend/prod/new", function (request, response) {
	let sqlA = `
	INSERT INTO
	category
	(unitPrice, detail)
	VALUES
	(${request.body.unitPrice},"${request.body.detail}");`;

	let sqlB = `
	select category_id
	from category
	order by category_id desc
	limit 1`;

	conn.query(sqlA, function (err) {
		if (err) {
			console.log(JSON.stringify(err));
			return;
		}

		conn.query(sqlB, function (err, rows) {
			let sql = `
	INSERT INTO
	product
	(productName,productColor, putDate,kindA,kindB)
	VALUES
	("${request.body.productName}", "${request.body.productColor}", "${request.body.putDate}","${request.body.kindA}","${request.body.kindB}",${rows[0].category_id},${request.body.productStatus});`;

			conn.query(sql, function (err) {
				if (err) {
					console.log(JSON.stringify(err));
					return;
				}
				response.redirect("http://localhost:3000/backend/prod/new");
			});
		});
	});
	console.log(request.body);
});

// 購物車送出訂單
app.post("/cart/submit", function (request, response) {
	let sql = `INSERT orders SELECT * FROM cart WHERE customer_id = ${request.body.customer_id}; DELETE FROM cart WHERE customer_id = ${request.body.customer_id}; OPTIMIZE TABLE cart; Insert into shipping (order_id, customer_id, shipping_Name, shipping_cellPhone, shipping_city, shipping_district, shipping_address) VALUES ((CONCAT('DD',DATE_FORMAT(now(),'%Y%m%d'),${request.body.customer_id})),"${request.body.customer_id}","${request.body.shipping_Name}","${request.body.shipping_cellPhone}","${request.body.shipping_city}","${request.body.shipping_district}","${request.body.shipping_address}"); Insert into orderdetail (order_id, customer_id,grandTotal,shippingStyle_id,payment_method,orderDate,orderComment) VALUES ((CONCAT('DD',DATE_FORMAT(now(),'%Y%m%d'),${request.body.customer_id})),"${request.body.customer_id}","${request.body.grandTotal}","${request.body.shippingStyle_id}","${request.body.payment_method}",CURRENT_DATE,"${request.body.orderComment}")`;

	console.log(request.body);

	conn.query(sql, function (err) {
		if (err) {
			console.log(JSON.stringify(err));
			return;
		}
		response.redirect("http://localhost:3000/order");
	});
});

app.listen(3001, () => console.log("LISTENING ON PORT 成功"));
