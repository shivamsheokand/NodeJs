# curd opration on mongo database 
- insert data 
- db.product.insertOne({name: 'Shivam',age: 19})

- update db.product
- db.product.updateOne({name:'Shivam'},{$set:{age:18}})

- delete db.product
- db.product.deleteOne({name: 'Shivam'})

# connect MongoDB to NodeJS
- npm package for MongoDB connect to NodeJS
- npm i mongodb 