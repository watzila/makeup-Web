const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: [
    'http://localhost:3000',
    'http://127.0.0.1:3000',
    'http://10.0.103.250:3000',
  ],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  //allowedHeaders: ["Content-Type", "Authorization"]
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

//連線mysql
const conn = mysql.createConnection({
  host: '127.0.0.1',
  port: '3306',
  user: 'root',
  password: '',
  database: 'customer',
});

//連線
conn.connect(function (err) {
  if (err) {
    console.log(JSON.stringify(err));
    return;
  }
});

//首頁
app.get('/', function (request, response) {
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
  });

  setTimeout(function () {
    response.send(data);
  }, 500);
});

//登入
app.post('/login', function (request, response) {
  let sql = `select customer_id, nickname 
    from customer
    where account="${request.body.account}"`;
  // && password="${request.body.password}"
  conn.query(sql, function (err, rows) {
    if (err) return;

    if (rows.length == 0) {
      //console.log(rows.length)
      response.send([{ info: 'error' }]);
    } else {
      rows[0].info = 'success';
      response.send(rows);
    }
  });
});

//註冊
app.post('/register', function (request, response) {
  let sql = `insert into customer (customerName,account, email, password)
    values("${request.body.username}","${request.body.account}","${request.body.email}","${request.body.password}")`;
  // && password="${request.body.password}"
  conn.query(sql, function (err, rows) {
    //if (err) return;
    //console.log(request.body)

    response.send([{ info: 'yes' }]);
  });
});

//產品頁
app.get('/p', function (request, response) {
  let sql = `SELECT *,unitPrice 
    FROM product as p,category as c 
    WHERE c.category_id=p.category_id`;

  conn.query(sql, function (err, rows) {
    response.send(rows);
  });
});

//我的最愛
app.get("/myLove", function (request, response) {
  let sql = (
    `SELECT customer_id, product_id 
      FROM favorite
      WHERE customer_id=${request.query.cId}`);

  conn.query(sql, function (err, rows) {
    response.send(rows);
    console.log(rows);
  });
});

//加入最愛
app.get("/addLove", function (request, response) {
  let sql = (
    `select * 
    from favorite
    where customer_id=${request.query.cId} && product_id=${request.query.pId}`
  );

  conn.query(sql, function (err, rows) {
    if (err) {
      console.log(JSON.stringify(err));
      return;
    }

    if (rows.length == 0) {
      let sql2 = (
        `insert into favorite (customer_id, product_id)
      values(${request.query.cId},${request.query.pId})`
      );

      conn.query(sql2, function (err, row) {
        if (err) return;
      });
    } else {
      let sql2 = (
        `delete
        from favorite
        where customer_id=${request.query.cId} && product_id=${request.query.pId}`
      );

      conn.query(sql2, function (err, row) {
        if (err) return;
      });
    }
  });
})

//產品詳細頁
app.get('/p/:kind', function (request, response) {
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
    console.log(request.query.pid);
    response.send(rows);
  });
});

//購物車
app.get('/cart', function (request, response) {
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

//後台
app.get('/backEnd/manageorder', function (request, response) {
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

//購買清單
app.post('/searchOrder', function (request, response) {
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
    // console.log(rows);
    response.send(rows);
  });
});

// 購物車產品加入new
app.post('/addCart', function (req, res) {
  // 先去看cart資料庫中  此消費者有沒有這項商品在購物車
  var sql = `select * from cart
    where customer_id = ${req.body.c_id} and product_id=${req.body.p_id}`;
  // console.log(req.body);
  conn.query(sql, function (err, rows) {
    if (err) {
      console.log(JSON.stringify(err));
      return;
    }

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
app.post('/delete', function (req, res) {
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
app.post('/updateQty', function (req, res) {
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

//編輯
app.get('/detail/:id([0-9]+)', function (req, res) {
  var sql = `SELECT customer_id,nickname,cellPhone,city FROM customer WHERE customer_id = ?;`;
  var data = [req.params.id];
  db.exec(sql, data, function (results, fields) {
    if (results[0]) {
      res.end(JSON.stringify(new Success(results[0])));
    } else {
      res.end(JSON.stringify(new Error('no result')));
    }
  });
});

app.post('/update', function (req, res) {
  var body = req.body;
  console.log(body);
  var sql = `UPDATE customer SET customer_id = ?, nickname = ?, cellPhone = ?, city = ? WHERE customer_id = ?`;
  var data = [
    parseInt(body.id),
    body.name,
    body.phone,
    body.address,
    parseInt(body.id),
  ];
  db.exec(sql, data, function (results, fields) {
    if (results.affectedRows) {
      res.end(JSON.stringify(new Success('update success')));
    } else {
      res.end(JSON.stringify(new Error('update failed')));
    }
  });
});

app.listen(3001, () => console.log('LISTENING ON PORT 成功'));
