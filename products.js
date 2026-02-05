// Product Data
const products = [
    {
        id: '1',
        name: 'Classic Black Jacket',
        price: 149.99,
        category: 'outerwear',
        description: 'A timeless black jacket crafted from premium materials. Perfect for any occasion, this versatile piece combines style with comfort. Features include reinforced stitching, quality buttons, and a modern fit.',
        image: 'https://images.unsplash.com/photo-1545272957-4a9a90740ce1?w=1080',
        sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    {
        id: '2',
        name: 'Premium Denim Jeans',
        price: 89.99,
        category: 'bottoms',
        description: 'High-quality denim jeans with a modern slim fit. Made from durable fabric with just the right amount of stretch for all-day comfort. Classic five-pocket styling.',
        image: 'https://images.unsplash.com/photo-1530062329328-9734c43ae31b?w=1080',
        sizes: ['28', '30', '32', '34', '36']
    },
    {
        id: '3',
        name: 'Designer Formal Shirt',
        price: 79.99,
        category: 'tops',
        description: 'Elegant formal shirt perfect for business or special occasions. Made from premium cotton with a comfortable fit. Features include mother of pearl buttons and a spread collar.',
        image: 'https://images.unsplash.com/photo-1768696082783-4313d98341ae?w=1080',
        sizes: ['S', 'M', 'L', 'XL']
    },
    {
        id: '4',
        name: 'Premium Sneakers',
        price: 129.99,
        category: 'footwear',
        description: 'Stylish and comfortable sneakers for everyday wear. Features cushioned insole, breathable upper, and durable rubber outsole. Perfect blend of style and functionality.',
        image: 'https://images.unsplash.com/photo-1618153478389-b2ed8de18ed3?w=1080',
        sizes: ['8', '9', '10', '11', '12']
    },
    {
        id: '5',
        name: 'Casual Cotton T-Shirt',
        price: 39.99,
        category: 'tops',
        description: 'Essential cotton t-shirt for everyday wear. Soft, breathable fabric with a comfortable regular fit. Available in versatile colors to match any outfit.',
        image: 'https://images.unsplash.com/photo-1635650805015-2fa50682873a?w=1080',
        sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    {
        id: '6',
        name: 'Leather Belt',
        price: 49.99,
        category: 'accessories',
        description: 'Classic leather belt with quality buckle. Made from genuine leather with a sleek finish. Perfect accessory for any outfit.',
        image: 'https://images.unsplash.com/photo-1526632503813-6f479409d7bf?w=1080',
        sizes: ['S', 'M', 'L', 'XL']
    },
    {
        id: '7',
        name: 'Slim Fit Chinos',
        price: 69.99,
        category: 'bottoms',
        description: 'Versatile slim fit chinos for everyday style. Premium cotton fabric with modern tailoring. Dress them up or down for any occasion.',
        image: 'https://images.unsplash.com/photo-1530062329328-9734c43ae31b?w=1080',
        sizes: ['28', '30', '32', '34', '36']
    },
    {
        id: '8',
        name: 'Winter Wool Coat',
        price: 249.99,
        category: 'outerwear',
        description: 'Premium winter wool coat designed to keep you warm in style. Features luxurious wool blend fabric, classic tailoring, and sophisticated details.',
        image: 'https://images.unsplash.com/photo-1621880199472-fafe704e9f99?w=1080',
        sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    {
        id: '9',
        name: 'Casual Hoodie',
        price: 69.99,
        category: 'outerwear',
        description: 'Comfortable casual hoodie perfect for everyday wear. Made from soft cotton blend with adjustable hood and kangaroo pocket.',
        image: 'https://images.unsplash.com/photo-1656338997878-279d71d48f6e?w=1080',
        sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    {
        id: '10',
        name: 'Bomber Jacket',
        price: 179.99,
        category: 'outerwear',
        description: 'Classic bomber jacket with modern updates. Features premium fabric, ribbed cuffs and hem, and versatile styling.',
        image: 'https://images.unsplash.com/photo-1545272957-4a9a90740ce1?w=1080',
        sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    {
        id: '11',
        name: 'Classic Polo Shirt',
        price: 59.99,
        category: 'tops',
        description: 'Timeless polo shirt crafted from premium cotton. Features classic collar, button placket, and comfortable fit.',
        image: 'https://images.unsplash.com/photo-1706007647543-460bfa7db776?w=1080',
        sizes: ['S', 'M', 'L', 'XL']
    },
    {
        id: '12',
        name: 'Casual Cotton T-Shirt',
        price: 39.99,
        category: 'tops',
        description: 'Essential cotton t-shirt for everyday wear. Soft, breathable fabric with a comfortable regular fit.',
        image: 'https://images.unsplash.com/photo-1635650805015-2fa50682873a?w=1080',
        sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    {
        id: '13',
        name: 'Oxford Button-Down',
        price: 89.99,
        category: 'tops',
        description: 'Classic Oxford button-down shirt in premium cotton. Features button-down collar, chest pocket, and tailored fit.',
        image: 'https://images.unsplash.com/photo-1768696082783-4313d98341ae?w=1080',
        sizes: ['S', 'M', 'L', 'XL']
    },
    {
        id: '14',
        name: 'Cargo Pants',
        price: 79.99,
        category: 'bottoms',
        description: 'Modern cargo pants with utility pockets and comfortable fit. Made from durable cotton twill with just the right amount of stretch.',
        image: 'https://images.unsplash.com/photo-1649850874075-49e014357b9d?w=1080',
        sizes: ['28', '30', '32', '34', '36']
    },
    {
        id: '15',
        name: 'Slim Fit Chinos',
        price: 69.99,
        category: 'bottoms',
        description: 'Versatile slim fit chinos for everyday style. Premium cotton fabric with modern tailoring.',
        image: 'https://images.unsplash.com/photo-1530062329328-9734c43ae31b?w=1080',
        sizes: ['28', '30', '32', '34', '36']
    },
    {
        id: '16',
        name: 'Black Dress Pants',
        price: 99.99,
        category: 'bottoms',
        description: 'Sophisticated black dress pants for formal occasions. Tailored fit with premium fabric that resists wrinkles.',
        image: 'https://images.unsplash.com/photo-1649850874075-49e014357b9d?w=1080',
        sizes: ['28', '30', '32', '34', '36']
    },
    {
        id: '17',
        name: 'Leather Boots',
        price: 199.99,
        category: 'footwear',
        description: 'Premium leather boots built to last. Features genuine leather construction, comfortable insole, and rugged sole.',
        image: 'https://images.unsplash.com/photo-1608629601270-a0007becead3?w=1080',
        sizes: ['8', '9', '10', '11', '12']
    },
    {
        id: '18',
        name: 'Casual Loafers',
        price: 109.99,
        category: 'footwear',
        description: 'Comfortable casual loafers for everyday elegance. Premium materials with slip-on convenience.',
        image: 'https://images.unsplash.com/photo-1618153478389-b2ed8de18ed3?w=1080',
        sizes: ['8', '9', '10', '11', '12']
    },
    {
        id: '19',
        name: 'Running Shoes',
        price: 139.99,
        category: 'footwear',
        description: 'High-performance running shoes with advanced cushioning. Features breathable mesh upper, responsive sole, and superior support.',
        image: 'https://images.unsplash.com/photo-1618153478389-b2ed8de18ed3?w=1080',
        sizes: ['8', '9', '10', '11', '12']
    }
];

// Get product by ID
function getProductById(id) {
    return products.find(p => p.id === id);
}

// Get products by category
function getProductsByCategory(category) {
    if (category === 'all') return products;
    return products.filter(p => p.category === category);
}

// Category products for home page
const categoryProducts = {
    outerwear: [
        products.find(p => p.id === '1'),
        products.find(p => p.id === '8'),
        products.find(p => p.id === '9'),
        products.find(p => p.id === '10')
    ],
    tops: [
        products.find(p => p.id === '3'),
        products.find(p => p.id === '11'),
        products.find(p => p.id === '12'),
        products.find(p => p.id === '13')
    ],
    bottoms: [
        products.find(p => p.id === '2'),
        products.find(p => p.id === '14'),
        products.find(p => p.id === '15'),
        products.find(p => p.id === '16')
    ],
    footwear: [
        products.find(p => p.id === '4'),
        products.find(p => p.id === '17'),
        products.find(p => p.id === '18'),
        products.find(p => p.id === '19')
    ]
};