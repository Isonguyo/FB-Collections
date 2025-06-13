
export type Product = {
  id: string;
  name: string;
  price: number;
  category: 'clothing' | 'shoes' | 'accessories';
  subcategory?: string;
  image: string;
  images?: string[];
  description: string;
  sizes?: string[];
  colors?: string[];
  featured?: boolean;
  new?: boolean;
  sale?: boolean;
  salePrice?: number;
};

export type Category = {
  name: string;
  slug: string;
  image: string;
  description: string;
};

export const categories: Category[] = [
  {
    name: "Clothing",
    slug: "clothing",
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=1000",
    description: "Discover our latest clothing collection"
  },
  {
    name: "Shoes",
    slug: "shoes",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1000",
    description: "Step into style with our shoe collection"
  },
  {
    name: "Accessories",
    slug: "accessories",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000",
    description: "Complement your look with our accessories"
  }
];

export const products: Product[] = [
  {
    id: "1",
    name: "Relaxed Fit Cotton T-shirt",
    price: 29.99,
    category: "clothing",
    subcategory: "t-shirts",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000",
    description: "A comfortable, relaxed-fit t-shirt made from 100% organic cotton. Perfect for everyday wear.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Black", "Gray"],
    featured: true
  },
  {
    id: "2",
    name: "Slim Fit Denim Jeans",
    price: 59.99,
    category: "clothing",
    subcategory: "jeans",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1000",
    description: "Stylish slim-fit jeans with a modern cut. Made from premium denim with a touch of stretch for comfort.",
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Blue", "Black", "Gray"],
    featured: true
  },
  {
    id: "3",
    name: "Leather Sneakers",
    price: 89.99,
    category: "shoes",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1000",
    description: "Handcrafted leather sneakers with cushioned insoles and durable outsoles. A modern classic.",
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11"],
    colors: ["White", "Black", "Brown"],
    featured: true,
    new: true
  },
  {
    id: "4",
    name: "Oversized Hoodie",
    price: 49.99,
    category: "clothing",
    subcategory: "hoodies",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000",
    description: "Stay cozy and stylish in our oversized hoodie, featuring a soft fleece lining and kangaroo pocket.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Gray", "Navy"],
    sale: true,
    salePrice: 39.99
  },
  {
    id: "5",
    name: "Structured Tote Bag",
    price: 79.99,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1000",
    description: "A spacious, structured tote bag crafted from premium materials. Perfect for work or weekend trips.",
    colors: ["Tan", "Black", "Navy"],
    featured: true
  },
  {
    id: "6",
    name: "Classic Watch",
    price: 129.99,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?q=80&w=1000",
    description: "An elegant timepiece with a stainless steel case and genuine leather strap. Water-resistant to 30 meters.",
    colors: ["Silver/Brown", "Gold/Black", "Rose Gold/Navy"],
    new: true
  },
  {
    id: "7",
    name: "Summer Dress",
    price: 69.99,
    category: "clothing",
    subcategory: "dresses",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1000",
    description: "A lightweight, flowy summer dress with a flattering silhouette. Made from breathable fabric.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Floral", "Blue", "Pink"],
    sale: true,
    salePrice: 49.99
  },
  {
    id: "8",
    name: "Ankle Boots",
    price: 119.99,
    category: "shoes",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1000",
    description: "Versatile ankle boots with a stacked heel and side zipper. Crafted from premium leather.",
    sizes: ["UK 4", "UK 5", "UK 6", "UK 7", "UK 8"],
    colors: ["Black", "Brown", "Burgundy"],
    featured: true
  }
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getNewArrivals = (): Product[] => {
  return products.filter(product => product.new);
};

export const getSaleProducts = (): Product[] => {
  return products.filter(product => product.sale);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};
