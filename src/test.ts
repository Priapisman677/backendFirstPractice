const request: XMLHttpRequest = new XMLHttpRequest();

//$ I want to find all the products which price is lower than 1$

interface Products {
  id: string;
  image: string;
  name: string;
  priceCents: number;
  rating: object;
  priceDollars?: number;
}

let products: Products[] = [];
export function getProducts(funcParam: () => void): void {
  request.addEventListener("load", () => {
    products = JSON.parse(request.response) as Products[];

    funcParam();
  });
  request.open("GET", "https://supersimplebackend.dev/products");
  request.send();
}



export function findtwentyDollarProducts() {
  const a2000centsProducts = products.filter((product) => {
    return product.priceCents <= 2000;
  });
  const twentyDollarProducts = a2000centsProducts.map((product: Products) => {
    return {
      ...product, // Copy all existing properties
      priceDollars: product.priceCents / 100, // Add the converted price
    };
  });

  console.log(
    "These are the products that are lower than $20.00:",
    twentyDollarProducts
  );
}

