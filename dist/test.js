const request = new XMLHttpRequest();
let products = [];
export function getProducts(funcParam) {
    request.addEventListener("load", () => {
        products = JSON.parse(request.response);
        funcParam();
    });
    request.open("GET", "https://supersimplebackend.dev/products");
    request.send();
}
export function findtwentyDollarProducts() {
    const a2000centsProducts = products.filter((product) => {
        return product.priceCents <= 2000;
    });
    const twentyDollarProducts = a2000centsProducts.map((product) => {
        return Object.assign(Object.assign({}, product), { priceDollars: product.priceCents / 100 });
    });
    console.log("These are the products that are lower than $20.00:", twentyDollarProducts);
}
