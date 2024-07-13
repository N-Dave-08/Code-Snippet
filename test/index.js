class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    showProduct() {
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price}`)
    }
}

const product1 = new Product("apple", 19);

product1.showProduct();