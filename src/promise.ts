import {getProducts, findtwentyDollarProducts } from './test.js'


new Promise<void>((resolve1)=>{
  getProducts(()=>{
    resolve1();
  })
}).then(
  ()=>{
    findtwentyDollarProducts()
  }
)