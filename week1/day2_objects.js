const products = [
  { id: 1, name: "Laptop",  price: 55000, inStock: true  },
  { id: 2, name: "Phone",   price: 18000, inStock: false },
  { id: 3, name: "Tablet",  price: 25000, inStock: true  },
  { id: 4, name: "Monitor", price: 12000, inStock: true  },
];

const pnames = products.map((products) => products.name);
console.log(pnames);

const stock = products.filter((products) => products.inStock===true);
console.log(stock);

const fid = products.find((products) => products.id===3);
console.log(fid);


const totalp = products
    .filter((products) => products.inStock)
    .reduce((total,products) => total+products.price,0);
console.log(totalp);

