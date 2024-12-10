

const products = {
    product1: {
        id: 1,
        name: "Asus laptop",
        price: "$799",
        description: "A 15.6 inch laptop with 8GB RAM and 256GB SSD"
    },
    product2: {
        id: 2,
        name: "Phone",
        price: "$299",
        description: "A smartphone with 4GB RAM and 64GB storage"
    },
    product3: {
        id: 3,
        name: "Watch",
        price: "$199",
        description: "A watch with 40mm LED screen"
    },
    product4: {
        id: 4,
        name: "T-shirt",
        price: "$19.99",
        description: "A t-shirt with a red and white striped sleeve"
    },
    product5: {
        id: 5,
        name: "Lenovo laptop",
        price: "$1299",
        description: "A 15.6 inch laptop with 32GB RAM and 512GB SSD"
    },
    product6: {
        id: 6,
        name: "Samsung phone",
        price: "$199",
        description: "A smartphone with 4GB RAM and 64GB storage"
    },
    product7: {
        id: 7,
        name: "Nike shoes",
        price: "$199",
        description: "A smartphone with 4GB RAM and 64GB storage"
    },
    product8: {
        id: 8,
        name: "Adidas shoes",
        price: "$199",
        description: "A smartphone with 4GB RAM and 64GB storage"
    }
};


export const cart = []; // Coșul de produse
export const cartCount = document.querySelector("#cart-count");


document.addEventListener("DOMContentLoaded", () => {
    const productsSection = document.querySelector("#products");

    // Generează produsele în DOM
    Object.values(products).forEach(product => {
        productsSection.innerHTML += `
            <div class="product">
                <div class="product-image">
                    <img src="../images/product-1.jpg" alt="product">
                </div>
                <div class="product-info">
                    <div class="product-title">
                        <p>${product.name}</p>
                    </div>
                    <div class="product-price">
                        <span>${product.price}</span>
                    </div>
                    <div class="product-description">
                        <span>${product.description}</span>
                    </div>
                </div>
                <button class="add-to-cart" data-id="${product.name}">Add to Cart</button>
            </div>
        `;
    });

    // Delegare evenimente: gestionează click-urile pe toate butoanele din secțiunea productsSection
    productsSection.addEventListener("click", (event) => {
        if (event.target.classList.contains("add-to-cart")) {
            const id = event.target.getAttribute("data-id");
            const product = Object.values(products).find(p => p.name === id); // Caută produsul în obiect
            // const product = products[id];
            if (product) {
                cart.push(product); // Adaugă produsul în coș
                cartCount.innerText = cart.length; // Actualizează numărul de produse
                console.log(cart); // Afișează produsele din coș în consolă
            }
        }
    });
});



