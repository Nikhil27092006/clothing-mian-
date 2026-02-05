// Mobile Menu Toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('active');
}

// Search Handler
function handleSearch(event) {
    event.preventDefault();
    window.location.href = 'shop.html';
}

// Render product card
function renderProductCard(product) {
    return `
        <a href="product.html?id=${product.id}" class="product-card">
            <div class="product-image-wrapper">
                <img src="${product.image}" alt="${product.name}" class="product-image">
            </div>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-price">$${product.price.toFixed(2)}</p>
        </a>
    `;
}

// Load Home Page Products
function loadHomeProducts() {
    // Load Outerwear
    const outerwearContainer = document.getElementById('outerwearProducts');
    if (outerwearContainer && categoryProducts.outerwear) {
        outerwearContainer.innerHTML = categoryProducts.outerwear
            .map(product => renderProductCard(product)).join('');
    }

    // Load Tops
    const topsContainer = document.getElementById('topsProducts');
    if (topsContainer && categoryProducts.tops) {
        topsContainer.innerHTML = categoryProducts.tops
            .map(product => renderProductCard(product)).join('');
    }

    // Load Bottoms
    const bottomsContainer = document.getElementById('bottomsProducts');
    if (bottomsContainer && categoryProducts.bottoms) {
        bottomsContainer.innerHTML = categoryProducts.bottoms
            .map(product => renderProductCard(product)).join('');
    }

    // Load Footwear
    const footwearContainer = document.getElementById('footwearProducts');
    if (footwearContainer && categoryProducts.footwear) {
        footwearContainer.innerHTML = categoryProducts.footwear
            .map(product => renderProductCard(product)).join('');
    }
}

// Load Shop Products
let currentCategory = 'all';

function filterCategory(category) {
    currentCategory = category;
    
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    loadShopProducts();
}

function loadShopProducts() {
    const shopContainer = document.getElementById('shopProducts');
    if (!shopContainer) return;

    const filteredProducts = getProductsByCategory(currentCategory);
    shopContainer.innerHTML = filteredProducts
        .map(product => renderProductCard(product)).join('');
}

// Load Product Detail
let selectedSize = 'M';
let selectedQuantity = 1;

function loadProductDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const product = getProductById(productId);
    
    const detailContainer = document.getElementById('productDetail');
    if (!detailContainer) return;

    if (!product) {
        detailContainer.innerHTML = `
            <div style="text-align: center; padding: 3rem;">
                <h2 style="font-size: 1.875rem; font-weight: bold; margin-bottom: 1rem;">Product Not Found</h2>
                <p style="color: #6b7280; margin-bottom: 2rem;">The product you're looking for doesn't exist.</p>
                <a href="shop.html" class="btn btn-black">Back to Shop</a>
            </div>
        `;
        return;
    }

    selectedSize = product.sizes[0];

    detailContainer.innerHTML = `
        <div class="product-detail-image">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-detail-info">
            <h1>${product.name}</h1>
            <p class="product-detail-price">$${product.price.toFixed(2)}</p>
            <p class="product-description">${product.description}</p>
            
            <div class="size-selector">
                <label class="size-label">Size</label>
                <div class="size-options" id="sizeOptions">
                    ${product.sizes.map(size => `
                        <button class="size-btn ${size === selectedSize ? 'active' : ''}" 
                                onclick="selectSize('${size}')">${size}</button>
                    `).join('')}
                </div>
            </div>
            
            <div class="quantity-selector">
                <label class="size-label">Quantity</label>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateQuantity(-1)">-</button>
                    <span class="quantity-value" id="quantityValue">1</span>
                    <button class="quantity-btn" onclick="updateQuantity(1)">+</button>
                </div>
            </div>
            
            <button class="add-to-cart-btn" id="addToCartBtn" onclick="handleAddToCart('${product.id}')">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                Add to Cart
            </button>
            
            <div class="product-details-section">
                <div>
                    <h3>Product Details</h3>
                    <ul>
                        <li>• Premium quality materials</li>
                        <li>• Expert craftsmanship</li>
                        <li>• Modern fit</li>
                        <li>• Easy care</li>
                    </ul>
                </div>
                <div>
                    <h3>Shipping & Returns</h3>
                    <p>Free shipping on orders over $100. 30-day returns accepted.</p>
                </div>
            </div>
        </div>
    `;
}

function selectSize(size) {
    selectedSize = size;
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent === size) {
            btn.classList.add('active');
        }
    });
}

function updateQuantity(change) {
    selectedQuantity = Math.max(1, selectedQuantity + change);
    document.getElementById('quantityValue').textContent = selectedQuantity;
}

function handleAddToCart(productId) {
    const success = addToCart(productId, selectedSize, selectedQuantity);
    
    if (success) {
        const btn = document.getElementById('addToCartBtn');
        btn.classList.add('added');
        btn.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            Added to Cart
        `;
        
        setTimeout(() => {
            btn.classList.remove('added');
            btn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                Add to Cart
            `;
        }, 2000);
    }
}

// Load Cart Page
function loadCartPage() {
    const cartContainer = document.getElementById('cartContent');
    if (!cartContainer) return;

    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div class="empty-cart">
                <svg class="empty-cart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                <h2>Your cart is empty</h2>
                <p>Add some items to get started</p>
                <a href="shop.html" class="btn btn-black">Continue Shopping</a>
            </div>
        `;
        return;
    }

    const total = getCartTotal();
    const shipping = total > 100 ? 0 : 10;
    const finalTotal = total + shipping;

    cartContainer.innerHTML = `
        <div class="cart-grid">
            <div class="cart-items">
                ${cart.map(item => `
                    <div class="cart-item">
                        <div class="cart-item-image">
                            <img src="${item.image}" alt="${item.name}">
                        </div>
                        <div class="cart-item-info">
                            <h3 class="cart-item-name">${item.name}</h3>
                            <p class="cart-item-size">Size: ${item.size}</p>
                            <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                            <div class="cart-item-quantity">
                                <button class="cart-quantity-btn" onclick="updateCartQuantity('${item.id}', '${item.size}', ${item.quantity - 1}); loadCartPage();">-</button>
                                <span class="cart-quantity-value">${item.quantity}</span>
                                <button class="cart-quantity-btn" onclick="updateCartQuantity('${item.id}', '${item.size}', ${item.quantity + 1}); loadCartPage();">+</button>
                            </div>
                        </div>
                        <div class="cart-item-actions">
                            <button class="remove-btn" onclick="removeFromCart('${item.id}', '${item.size}'); loadCartPage();">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="3 6 5 6 21 6"></polyline>
                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                </svg>
                            </button>
                            <p class="cart-item-total">$${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div class="cart-summary">
                <div class="summary-card">
                    <h2 class="summary-title">Order Summary</h2>
                    <div class="summary-row">
                        <span>Subtotal</span>
                        <span>$${total.toFixed(2)}</span>
                    </div>
                    <div class="summary-row">
                        <span>Shipping</span>
                        <span>${shipping === 0 ? 'FREE' : '$' + shipping.toFixed(2)}</span>
                    </div>
                    <div class="summary-row summary-total">
                        <span>Total</span>
                        <span>$${finalTotal.toFixed(2)}</span>
                    </div>
                    <div class="summary-actions">
                        <a href="checkout.html" class="btn btn-black">Proceed to Checkout</a>
                        <a href="shop.html" class="btn btn-outline">Continue Shopping</a>
                    </div>
                    ${total < 100 ? `<p class="summary-notice">Add $${(100 - total).toFixed(2)} more for free shipping!</p>` : ''}
                </div>
            </div>
        </div>
    `;
}

// Load Checkout Page
function loadCheckoutPage() {
    if (cart.length === 0) {
        window.location.href = 'cart.html';
        return;
    }

    const summaryContainer = document.getElementById('checkoutSummary');
    const subtotalEl = document.getElementById('summarySubtotal');
    const shippingEl = document.getElementById('summaryShipping');
    const totalEl = document.getElementById('summaryTotal');

    if (!summaryContainer) return;

    const total = getCartTotal();
    const shipping = total > 100 ? 0 : 10;
    const finalTotal = total + shipping;

    summaryContainer.innerHTML = cart.map(item => `
        <div class="summary-item">
            <span class="summary-item-name">${item.name} (${item.size}) × ${item.quantity}</span>
            <span class="summary-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
        </div>
    `).join('');

    subtotalEl.textContent = `$${total.toFixed(2)}`;
    shippingEl.textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
    totalEl.textContent = `$${finalTotal.toFixed(2)}`;
}

// Handle Checkout
function handleCheckout(event) {
    event.preventDefault();
    
    const modal = document.getElementById('successModal');
    modal.classList.add('active');
    
    setTimeout(() => {
        clearCart();
        window.location.href = 'index.html';
    }, 3000);
}

// Account Page
let isSignUp = false;
let isLoggedIn = localStorage.getItem('blackheadLoggedIn') === 'true';

function loadAccountPage() {
    const authSection = document.getElementById('authSection');
    const dashboard = document.getElementById('accountDashboard');
    
    if (isLoggedIn) {
        authSection.style.display = 'none';
        dashboard.style.display = 'block';
        dashboard.classList.add('active');
        
        const userData = JSON.parse(localStorage.getItem('blackheadUser') || '{}');
        document.getElementById('userName').textContent = userData.name || 'John Doe';
        document.getElementById('userEmail').textContent = userData.email || 'john@example.com';
        document.getElementById('accountName').value = userData.name || 'John Doe';
        document.getElementById('accountEmail').value = userData.email || 'john@example.com';
    }
}

function toggleAuthMode() {
    isSignUp = !isSignUp;
    const title = document.getElementById('authTitle');
    const submitBtn = document.getElementById('authSubmitBtn');
    const toggleBtn = document.getElementById('authToggleBtn');
    const nameField = document.getElementById('nameField');
    
    if (isSignUp) {
        title.textContent = 'Create Account';
        submitBtn.textContent = 'Create Account';
        toggleBtn.textContent = 'Already have an account? Sign in';
        nameField.style.display = 'block';
        nameField.querySelector('input').required = true;
    } else {
        title.textContent = 'Sign In';
        submitBtn.textContent = 'Sign In';
        toggleBtn.textContent = "Don't have an account? Sign up";
        nameField.style.display = 'none';
        nameField.querySelector('input').required = false;
    }
}

function handleAuth(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = {
        name: formData.get('name') || 'John Doe',
        email: formData.get('email')
    };
    
    localStorage.setItem('blackheadLoggedIn', 'true');
    localStorage.setItem('blackheadUser', JSON.stringify(userData));
    
    isLoggedIn = true;
    loadAccountPage();
}

function handleLogout() {
    localStorage.removeItem('blackheadLoggedIn');
    localStorage.removeItem('blackheadUser');
    window.location.reload();
}

// Initialize page based on current page
document.addEventListener('DOMContentLoaded', function() {
    // Load home page products if on home page
    if (document.getElementById('outerwearProducts')) {
        loadHomeProducts();
    }
    
    // Load shop products if on shop page
    if (document.getElementById('shopProducts')) {
        loadShopProducts();
    }
    
    // Load product detail if on product page
    if (document.getElementById('productDetail')) {
        loadProductDetail();
    }
    
    // Load cart if on cart page
    if (document.getElementById('cartContent')) {
        loadCartPage();
    }
    
    // Load checkout if on checkout page
    if (document.getElementById('checkoutSummary')) {
        loadCheckoutPage();
    }
    
    // Load account page
    if (document.getElementById('authSection')) {
        loadAccountPage();
    }
});