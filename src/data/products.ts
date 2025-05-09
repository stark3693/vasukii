
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  tags: string[];
  featured: boolean;
  inStock: boolean;
  colors?: string[];
  sizes?: string[];
  rating: number;
  reviews: number;
}

export const productsData: Product[] = [
  {
    id: 1,
    name: "Embroidered Maxi Dress",
    price: 189.99,
    description: "Hand-embroidered maxi dress with floral details. Made from 100% organic cotton with adjustable waist ties for the perfect fit.",
    image: "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?q=80&w=3080&auto=format&fit=crop",
    category: "dresses",
    tags: ["maxi", "summer", "embroidered", "floral"],
    featured: true,
    inStock: true,
    colors: ["Ivory", "Rose", "Sage"],
    sizes: ["XS", "S", "M", "L", "XL"],
    rating: 4.8,
    reviews: 24
  },
  {
    id: 2,
    name: "Vintage-Inspired Cocktail Dress",
    price: 159.99,
    description: "A timeless piece with vintage-inspired details and modern silhouette. Perfect for special occasions and evening events.",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=2051&auto=format&fit=crop",
    category: "dresses",
    tags: ["cocktail", "vintage", "evening", "party"],
    featured: true,
    inStock: true,
    colors: ["Burgundy", "Navy", "Black"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.7,
    reviews: 18
  },
  {
    id: 3,
    name: "Hand-Woven Wall Hanging",
    price: 89.99,
    description: "Intricately hand-woven wall hanging made with sustainable materials. Each piece features unique patterns and natural color variations.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop",
    category: "decor",
    tags: ["wall art", "woven", "bohemian", "handmade"],
    featured: true,
    inStock: true,
    colors: ["Natural", "Terracotta", "Indigo"],
    rating: 4.9,
    reviews: 32
  },
  {
    id: 4,
    name: "Hand-Painted Ceramic Vase",
    price: 68.50,
    description: "Each vase is carefully hand-painted with artistic designs inspired by nature. Perfect as a statement piece for any room.",
    image: "https://media.istockphoto.com/id/1300939276/photo/round-stylish-ceramic-vase-with-dried-flower-lagurus.jpg?s=2048x2048&w=is&k=20&c=X__s1mrqo5dtaz4uI-fb_OZqsj-XzYdn8W9bSuwWB3Y=",
    category: "decor",
    tags: ["vase", "ceramic", "handpainted", "home"],
    featured: false,
    inStock: true,
    colors: ["Blue", "Earth", "Mixed"],
    rating: 4.6,
    reviews: 15
  },
  {
    id: 5,
    name: "Handcrafted Leather Tote",
    price: 129.99,
    description: "Sustainable leather tote bag, handcrafted by skilled artisans. Features inner pockets and durable stitching for everyday use.",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=3026&auto=format&fit=crop",
    category: "accessories",
    tags: ["bag", "leather", "tote", "everyday"],
    featured: false,
    inStock: true,
    colors: ["Tan", "Brown", "Black"],
    rating: 4.8,
    reviews: 27
  },
  {
    id: 6,
    name: "Boho Linen Wrap Dress",
    price: 145.00,
    description: "Flowing linen wrap dress with bohemian-inspired details. Perfect for warm weather and comfortable for all-day wear.",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=3026&auto=format&fit=crop",
    category: "dresses",
    tags: ["linen", "boho", "casual", "summer"],
    featured: true,
    inStock: true,
    colors: ["Natural", "Sage", "Terracotta"],
    sizes: ["XS", "S", "M", "L", "XL"],
    rating: 4.9,
    reviews: 22
  },
  {
    id: 7,
    name: "Hand-Knit Throw Blanket",
    price: 115.00,
    description: "Cozy throw blanket hand-knit from premium sustainable yarn. Perfect for adding warmth and texture to any living space.",
    image: "https://images.unsplash.com/photo-1581375321224-79da6fd32f6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "decor",
    tags: ["blanket", "knit", "cozy", "home"],
    featured: false,
    inStock: true,
    colors: ["Cream", "Gray", "Rust"],
    rating: 4.7,
    reviews: 19
  },
  {
    id: 8,
    name: "Macramé Plant Hanger",
    price: 42.99,
    description: "Intricately crafted macramé plant hanger made from 100% cotton rope. Adds bohemian charm to your indoor garden.",
    image: "https://images.unsplash.com/photo-1581375321224-79da6fd32f6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "decor",
    tags: ["macrame", "plant", "boho", "hanging"],
    featured: false,
    inStock: true,
    colors: ["Natural", "White"],
    rating: 4.8,
    reviews: 14
  },
  {
    id: 9,
    name: "Artisanal Beaded Necklace",
    price: 78.50,
    description: "Hand-beaded statement necklace featuring unique patterns. Each piece is crafted individually and carries its own character.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=3087&auto=format&fit=crop",
    category: "accessories",
    tags: ["jewelry", "beaded", "statement", "handmade"],
    featured: false,
    inStock: true,
    colors: ["Multi"],
    rating: 4.9,
    reviews: 28
  },
  {
    id: 10,
    name: "Hand-Embroidered Cushion Cover",
    price: 54.99,
    description: "Decorative cushion cover with intricate hand embroidery. Adds a touch of artisanal elegance to your home decor.",
    image: "https://plus.unsplash.com/premium_photo-1676454000663-643ab3995b55?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "decor",
    tags: ["cushion", "embroidered", "home", "decorative"],
    featured: false,
    inStock: true,
    colors: ["Natural", "Blue", "Terracotta"],
    rating: 4.7,
    reviews: 16
  },
  {
    id: 11,
    name: "Patchwork Linen Kimono",
    price: 135.00,
    description: "Lightweight kimono featuring a unique patchwork of handwoven linen fabrics. Perfect as a layering piece for all seasons.",
    image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=3087&auto=format&fit=crop",
    category: "dresses",
    tags: ["kimono", "linen", "patchwork", "layering"],
    featured: false,
    inStock: true,
    colors: ["Mixed Natural"],
    sizes: ["One Size"],
    rating: 4.8,
    reviews: 21
  },
  {
    id: 12,
    name: "Hand-Carved Wooden Serving Bowl",
    price: 89.00,
    description: "Beautiful serving bowl hand-carved from sustainable wood. Each piece showcases the natural grain and unique characteristics of the wood.",
    image: "https://images.unsplash.com/photo-1581375321224-79da6fd32f6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "decor",
    tags: ["wood", "bowl", "kitchen", "serving"],
    featured: false,
    inStock: true,
    colors: ["Natural Wood"],
    rating: 4.9,
    reviews: 17
  }
];
