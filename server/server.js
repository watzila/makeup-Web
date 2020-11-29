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
	let sql = `SELECT p.product_id,p.category_id,productName,img_0, unitPrice 
    FROM product as p,productimg as img,category as c
    where kindA="${request.query.card2}" && product_id=img.productImg_id && p.category_id=c.category_id
    LIMIT 8`;

	let data = null;

	conn.query(sql, function (err, rows) {
		if (err) {
			console.log(JSON.stringify(err));
			return;
		}
		if (!data) {
			data = rows;
		} else {
			data.push(rows);
		}
		response.send(data);
	});
});

//登入
app.post("/login", function (request, response) {
	let sql = `select customer_id, nickname 
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
	let sql = `SELECT *,unitPrice 
    FROM product as p,category as c 
    WHERE c.category_id=p.category_id`;

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
	//let sql = `SELECT p.*,productName,img_0, c.unitPrice,c.skinType,c.specification,c.detail
	//  FROM product as p,productimg as img,category as c
	//  where product_id=${request.query.pid} && product_id=img.productImg_id && p.category_id=c.category_id`;

	//測試用
	let sql = `SELECT p.*,productName, c.unitPrice,c.skinType,c.specification,c.detail 
    FROM product as p,category as c 
    where product_id=${request.query.pid} && p.category_id=c.category_id`;

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

//購買清單
app.post("/searchOrder", function (request, response) {
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
    INNER JOIN productimg AS pdimg
    ON p.product_id = productImg_id
    WHERE o.customer_id = ${request.body.id}`;

	conn.query(sql, function (err, rows) {
		if (err) {
			console.log(JSON.stringify(err));
			return;
		}
		// console.log(rows)
		response.send(rows);
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
(customer_id, product_id, quantity, orderStatus)
VALUES ('${req.body.c_id}', '${req.body.p_id}', '${req.body.qty}', '待結帳')`;
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
    from customer as customer
    inner join orderdetail as o
    on customer.customer_id = o.customer_id

    inner join favorite as favo
    on customer.customer_id = favo.customer_id

    inner join coin as coin
    on customer.customer_id = coin.customer_id
    where customer.customer_id=${request.body.cId}
    group by customer.customer_id`;
	conn.query(sql, function (err, rows) {
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
	console.log(4);
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
     `;
	conn.query(sql, function (err, rows) {
		if (err) return;

		// console.log(rows)
		// response.send(rows);
	});
});

// 購買清單
app.post("/memberbuy/", function (request, response) {
	let sql = `select * 
    from customer as customer
    inner join orderdetail as o
    on customer.customer_id = o.customer_id
 
    inner join cart as cart
    on customer.customer_id = cart.customer_id

    inner join product as p
    on cart.product_id = p.product_id

    inner join category as cat
    on cat.category_id = p.category_id
    where customer.customer_id=${request.body.cId}
    GROUP BY o.orderDetail_id`;

	conn.query(sql, function (err, rows) {
		if (err) return;

		// console.log(rows.length)
		if (rows.length == 0) {
			response.send([{ info: "error" }]);
		} else {
			// console.log(rows)
			response.send(rows);
		}
	});
});

// 收藏
app.post("/memberfavorite/", function (request, response) {
	let sql = `select * 
    from customer as customer
    inner join favorite as f
    on f.customer_id = customer.customer_id

    inner join product as p
    on p.product_id = f.product_id
 
    inner join category as cat
    on cat.category_id = p.category_id

    inner join cart as cart
    on customer.customer_id = cart.customer_id

    where customer.customer_id=${request.body.cId}
    GROUP BY f.favorite_id`;

	conn.query(sql, function (err, rows) {
		// console.log(rows)
		if (err) return;

		// console.log(rows.length)
		if (rows.length == 0) {
			response.send([{ info: "error" }]);
		} else {
			// console.log(rows)
			response.send(rows);
		}
	});
});

// 星幣賺取
app.post("/membercoin/", function (request, response) {
	let sql = `select * 
    from customer as customer
    inner join coin as c
    on c.customer_id = customer.customer_id

    where nickname="${request.body.nickname}"
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
		//console.log(rows)
		response.send(rows);
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

app.listen(3001, () => console.log("LISTENING ON PORT 成功"));
