const products = [
    { name: "Laptop", category: "Electronics", price: 1200, quantity: 10, available: true },
    { name: "Chair", category: "Furniture", price: 100, quantity: 20, available: true },
    { name: "Shirt", category: "Clothing", price: 30, quantity: 50, available: false },
    { name: "Book", category: "Books", price: 20, quantity: 100, available: true }
];

// Function to filter products based on availability
const filterAvailableProducts = (products) => {
    return products.filter(product => product.available);
};

// Function to sort products by a given property
const sortProductsBy = (products, property) => {
    return products.slice().sort((a, b) => a[property] - b[property]);
};

// Function to calculate total value for each product
const calculateTotalValue = (products) => {
    return products.map(product => ({
        ...product,
        totalValue: product.price * product.quantity
    }));
};

// Function to generate an inventory report
const generateInventoryReport = (products) => {
    const totalProducts = products.length;
    const totalValue = products.reduce((sum, product) => sum + (product.price * product.quantity), 0);
    const avgPrice = totalValue / totalProducts;
    const categoryDistribution = products.reduce((acc, product) => {
        acc[product.category] = (acc[product.category] || 0) + 1;
        return acc;
    }, {});

    return {
        totalProducts,
        totalValue,
        avgPrice,
        categoryDistribution
    };
};

// Example Usage
// Filtered Products
const availableProducts = filterAvailableProducts(products);
console.log("Filtered Products:");
console.log(availableProducts);

// Sorted Products by Price
const sortedByPrice = sortProductsBy(products, 'price');
console.log("Sorted Products by Price:");
console.log(sortedByPrice);

// Products with Total Value
const productsWithTotalValue = calculateTotalValue(products);
console.log("Products with Total Value:");
console.log(productsWithTotalValue);

// Inventory Report
const inventoryReport = generateInventoryReport(products);
console.log("Inventory Report:");
console.log(inventoryReport);
