// Cart Management
let cart = [];

// Load cart from localStorage
function loadCart() {
    const savedCart = localStorage.getItem('blackheadCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    updateCartCount();
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('blackheadCart', JSON.stringify(cart));
    updateCartCount();
}

// Add item to cart
function addToCart(productId, size, quantity) {
    const product = getProductById(productId);
    if (!product) return false;

    const existingItem = cart.find(item => item.id === productId && item.size === size);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            size: size,
            quantity: quantity
        });
    }
    
    saveCart();
    return true;
}

// Remove item from cart
function removeFromCart(productId, size) {
    cart = cart.filter(item => !(item.id === productId && item.size === size));
    saveCart();
}

// Update item quantity
function updateCartQuantity(productId, size, quantity) {
    if (quantity <= 0) {
        removeFromCart(productId, size);
        return;
    }
    
    const item = cart.find(item => item.id === productId && item.size === size);
    if (item) {
        item.quantity = quantity;
        saveCart();
    }
}

// Get cart total
function getCartTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Get cart count
function getCartCount() {
    return cart.reduce((count, item) => count + item.quantity, 0);
}

// Update cart count in header
function updateCartCount() {
    const cartCountElements = document.querySelectorAll('#cartCount');
    const count = getCartCount();
    cartCountElements.forEach(el => {
        el.textContent = count;
        el.style.display = count > 0 ? 'flex' : 'none';
    });
}

// Clear cart
function clearCart() {
    cart = [];
    saveCart();
}

// Initialize cart on page load
loadCart();