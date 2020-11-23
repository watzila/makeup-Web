const express = require("express");
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: [
    'http://localhost:3000'
  ],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  allowedHeaders: ["Content-Type", "Authorization"]
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

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
    `SELECT p.product_id,p.category_id,productName,img_0, unitPrice, p.kindA FROM product as p,productimg as img,category as c
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

//產品頁
app.get("/p", function (request, response) {
  let sql = (
    `SELECT *,unitPrice FROM product as p,category as c WHERE c.category_id=p.category_id`
  );

  conn.query(sql, function (err, rows) {
    if (err) {
      console.log(JSON.stringify(err));
      return;
    }
    response.send(rows);
  }
  );
})

//產品詳細頁
app.get("/p/:kind", function (request, response) {
  let sql = (
    `SELECT p.*,productName,img_0, c.unitPrice,c.skinType,c.specification,c.detail FROM product as p,productimg as img,category as c
    where product_id=${request.query.pid} && product_id=img.productImg_id && p.category_id=c.category_id`
  );

  conn.query(sql, function (err, rows) {
    if (err) {
      console.log(JSON.stringify(err));
      return;
    }
    console.log(request.params.kind);
    response.send(rows);
  }
  );
})




app.post('/add', function (req, res) {
  var body = req.body
  var sql = `INSERT INTO customer(nickname, cellPhone, city) VALUES(?,?,?);`
  var data = [body.name, body.phone, body.address]

  conn.query('select * from customer',
    function (err, rows) {
      res.render("ok");
    })
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