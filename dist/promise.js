import { getProducts, findtwentyDollarProducts } from './test.js';
new Promise((resolve1) => {
    getProducts(() => {
        resolve1();
    });
}).then(() => {
    findtwentyDollarProducts();
});
