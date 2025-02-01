document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("product-list");
    const searchInput = document.getElementById("search");

    const products = [
        { name: "Produk 1", price: "Rp 100.000", image: "foto1.jpeg" },
        { name: "Produk 2", price: "Rp 200.000", image: "foto2.jpg" },
        { name: "Produk 3", price: "Rp 150.000", image: "foto3.jpeg" },
        { name: "Produk 4", price: "Rp 200.000", image: "foto4.jpg" },
        { name: "Produk 5", price: "Rp 1.000.000", image: "foto5.jpeg" },
        { name: "Produk 6", price: "Rp 1.400.000", image: "foto6.jpeg" },
        { name: "Produk 7", price: "Rp 8.300.000", image: "foto7.jpeg" },
        { name: "Produk 8", price: "Rp 12.600.000", image: "foto8.jpg" },
    ];

    function displayProducts(filter = "") {
        productList.innerHTML = "";
        products.filter(product => product.name.toLowerCase().includes(filter.toLowerCase()))
            .forEach(product => {
                const productElement = document.createElement("div");
                productElement.classList.add("product");
                productElement.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h2>${product.name}</h2>
                    <p>${product.price}</p>
                `;
                productList.appendChild(productElement);
            });
    }

    searchInput.addEventListener("input", (e) => {
        displayProducts(e.target.value);
    });

    displayProducts();
});
