const express = require("express");
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: [
    'http://localhost:3000',
    "http://127.0.0.1:3000",
    "http://10.0.103.250:3000"
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
  port: "3306",
  user: 'root',
  password: '',
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
  let sql = (
    `SELECT p.product_id,p.category_id,productName,img_0, unitPrice 
    FROM product as p,productimg as img,category as c
    where kindA="${request.query.card2}" && product_id=img.productImg_id && p.category_id=c.category_id
    LIMIT 8`
  );

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
})

//登入
app.post("/login", function (request, response) {
  let sql = (
    `select customer_id, nickname 
    from customer
    where account="${request.body.account}"`
  );
  // && password="${request.body.password}"
  conn.query(sql, function (err, rows) {
    console.log(rows)
    if (err) return;

    console.log(rows.length)
    if (rows.length == 0) {
      response.send([{ "info": "error" }]);
    } else {
      rows[0].info = "success";
      response.send(rows);
    }
  });
});

//註冊
app.post("/register", function (request, response) {
  let sql = (
    `insert into customer (customerName,account, email, password)
    values("${request.body.username}","${request.body.account}","${request.body.email}","${request.body.password}")`
  );
  // && password="${request.body.password}"
  conn.query(sql, function (err, rows) {
    //if (err) return;
    //console.log(request.body)

    response.send([{ "info": "yes" }]);

  });
});

//產品頁
app.get("/p", function (request, response) {
  let sql = (
    `SELECT *,unitPrice 
    FROM product as p,category as c 
    WHERE c.category_id=p.category_id`
  );

  conn.query(sql, function (err, rows) {

    response.send(rows);
  });
});

//我的最愛
app.get("/myLove", function (request, response) {
  let sql = (
    `SELECT * 
      FROM favorite
      WHERE customer_id=${request.query.cId}`
  );

  conn.query(sql, function (err, rows) {
    response.send(rows);
    console.log(rows);
  });
});

//加入最愛
app.get("/addLove", function (request, response) {
  let sql = (
    `SELECT *,unitPrice 
    FROM product as p,category as c 
    WHERE c.category_id=p.category_id`
  );

  conn.query(sql, function (err, rows) {
    if (err) {
      console.log(JSON.stringify(err));
      return;
    }
    //console.log(rows);
    //response.send(rows);
  }
  );
})

//產品詳細頁
app.get("/p/:kind", function (request, response) {
  let sql = (
    `SELECT p.*,productName,img_0, c.unitPrice,c.skinType,c.specification,c.detail 
    FROM product as p,productimg as img,category as c 
    where product_id=${request.query.pid} && product_id=img.productImg_id && p.category_id=c.category_id`
  );

  conn.query(sql, function (err, rows) {
    if (err) {
      console.log(JSON.stringify(err));
      return;
    }
    console.log(request.query.pid);
    response.send(rows);
  }
  );
})

//購物車
app.get("/cart", function (request, response) {

  conn.query(`SELECT *
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
})

//後台
app.get("/backEnd/manageorder", function (request, response) {
  let sql = (
    `SELECT o.order_id, orderDate,customerName, quantity, grandTotal, orderStatus
    FROM orders AS o 
    INNER JOIN orderdetail AS od 
    ON o.order_id = od.order_id 
    INNER JOIN customer AS c 
    ON o.customer_id = c.customer_id`
  );

  conn.query(sql, function (err, rows) {
    if (err) {
      console.log(JSON.stringify(err));
      return;
    }
    //console.log(rows)
    response.send(rows);
  }
  );
});

//購買清單
app.post('/searchOrder', function (request, response) {
  let sql = (
    `SELECT *
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
    WHERE o.customer_id = ${request.body.id}`
  );

  conn.query(sql, function (err, rows) {
    if (err) {
      console.log(JSON.stringify(err));
      return;
    }
    console.log(rows)
    response.send(rows);
  });
});



// `SELECT *
// FROM category AS c 
// INNER JOIN product AS p 
// ON c.category_id = p.category_id 

// INNER JOIN cart AS cart
// ON p.product_id = cart.product_id

// INNER JOIN productimg AS pdimg
// ON p.product_id = productImg_id
// WHERE cart.customer_id

//會員
app.post('/member/:nickname', function (request, response) {
  let sql = (
    `select * 
    from customer as customer
    inner join orderdetail as o
    on customer.customer_id = o.customer_id

    inner join favorite as favo
    on customer.customer_id = favo.customer_id

    inner join coin as coin
    on customer.customer_id = coin.customer_id
    where nickname="${request.body.nickname}"`
  );
  conn.query(sql, function (err, rows) {
    if (err) return;

    if (rows.length == 0) {
      //console.log(rows.length)
      response.send([{ "info": "error" }]);
    } else {
      response.send(rows);
    }
  });
})


app.post('/member/memberbuy/:nickname', function (request, response) {
  let sql = (
    `select * 
    from customer as customer
    inner join orderdetail as o
    on customer.customer_id = o.customer_id

    inner join cart as cart
    on customer.customer_id = cart.customer_id

    inner join product as p
    on cart.product_id = p.product_id

    inner join category as cat
    on cat.category_id = p.category_id
    where nickname=${request.body.nickname}"`
  );
  conn.query(sql, function (err, rows) {
    if (err) return;

    if (rows.length == 0) {
      //console.log(rows.length)
      response.send([{ "info": "error" }]);
    } else {
      response.send(rows);
    }
  });
})




// 刪除

app.post('/delete', function (req, res) {
  var body = req.body
  var sql = `DELETE FROM customer WHERE customer_id = ?;`
  var data = [parseInt(body.id)]

  db.exec(sql, data, function (results, fields) {
    // 使用affectedRows，判斷是否有被刪除


    if (results.affectedRows) {
      res.end(
        JSON.stringify(new Success('delete success'))
      )
    } else {
      res.end(
        JSON.stringify(new Error('delete failed'))
      )
    }
  })
})

//編輯

app.get('/detail/:id([0-9]+)', function (req, res) {
  var sql = `SELECT customer_id,nickname,cellPhone,city FROM customer WHERE customer_id = ?;`
  var data = [req.params.id]
  db.exec(sql, data, function (results, fields) {
    if (results[0]) {
      res.end(
        JSON.stringify(new Success(results[0]))
      )
    } else {
      res.end(
        JSON.stringify(new Error('no result'))
      )
    }
  })
})



app.post('/update', function (req, res) {
  var body = req.body
  console.log(body);
  var sql = `UPDATE customer SET customer_id = ?, nickname = ?, cellPhone = ?, city = ? WHERE customer_id = ?`;
  var data = [parseInt(body.id), body.name, body.phone, body.address, parseInt(body.id)]
  db.exec(sql, data, function (results, fields) {

    if (results.affectedRows) {
      res.end(
        JSON.stringify(new Success('update success'))
      )
    }
    else {
      res.end(
        JSON.stringify(new Error('update failed'))
      )
    }
  })
})

app.listen(3001, () => console.log('LISTENING ON PORT 成功'));