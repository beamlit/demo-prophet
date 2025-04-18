const products = [
  {
    id: 1,
    name: "Premium Golden Pineapple",
    description: "Our signature pineapple variety, renowned for its sweet flavor and golden flesh. Grown in optimal conditions to ensure perfect ripeness and juiciness.",
    regularPrice: 9.99,
    salePrice: 7.99,
    onSale: true,
    image: "/images/golden-pineapple.jpg",
    category: "fresh",
    features: [
      "Extra sweet variety",
      "Hand-selected for ripeness",
      "Perfect for fresh consumption",
      "Sustainably grown"
    ],
    stock: 50,
    weight: "2-3 lbs",
    origin: "Costa Rica"
  },
  {
    id: 2,
    name: "Organic Pineapple",
    description: "Certified organic pineapple grown without synthetic pesticides or fertilizers. Environmentally friendly and packed with natural goodness.",
    regularPrice: 12.99,
    salePrice: null,
    onSale: false,
    image: "/images/organic-pineapple.jpg",
    category: "fresh",
    features: [
      "100% organic certified",
      "No synthetic pesticides",
      "Higher nutritional content",
      "Environmentally friendly farming"
    ],
    stock: 30,
    weight: "2-3 lbs",
    origin: "Hawaii"
  },
  {
    id: 3,
    name: "Baby Pineapple",
    description: "Smaller, sweeter, and more tender than standard varieties. These adorable mini pineapples are perfect for individual servings and creative presentations.",
    regularPrice: 8.99,
    salePrice: null,
    onSale: false,
    image: "/images/baby-pineapple.jpg",
    category: "specialty",
    features: [
      "Personal serving size",
      "Extra sweet flavor",
      "Tender core can be eaten",
      "Decorative and functional"
    ],
    stock: 20,
    weight: "1-1.5 lbs",
    origin: "Thailand"
  },
  {
    id: 4,
    name: "Dried Pineapple Rings",
    description: "Naturally sweet dried pineapple rings, perfect for snacking or adding to recipes. No added sugar or preservatives.",
    regularPrice: 6.99,
    salePrice: 5.49,
    onSale: true,
    image: "/images/dried-pineapple.jpg",
    category: "dried",
    features: [
      "No added sugar",
      "No preservatives",
      "High in fiber",
      "Resealable packaging"
    ],
    stock: 100,
    weight: "8 oz",
    origin: "Philippines"
  },
  {
    id: 5,
    name: "Pineapple Gift Box",
    description: "The perfect gift for pineapple lovers. Includes a premium pineapple, pineapple corer, dried pineapple, and pineapple jam.",
    regularPrice: 34.99,
    salePrice: null,
    onSale: false,
    image: "/images/pineapple-gift.jpg",
    category: "gift",
    features: [
      "Premium pineapple",
      "Stainless steel pineapple corer",
      "Artisanal pineapple jam",
      "Dried pineapple chips"
    ],
    stock: 15,
    weight: "5 lbs",
    origin: "Various"
  },
  {
    id: 6,
    name: "White Sugarloaf Pineapple",
    description: "A rare and exclusive variety with white flesh, low acidity, and exceptional sweetness. The favorite of pineapple connoisseurs.",
    regularPrice: 19.99,
    salePrice: 16.99,
    onSale: true,
    image: "/images/white-pineapple.jpg",
    category: "specialty",
    features: [
      "White flesh variety",
      "Extremely low acidity",
      "Exceptional sweetness",
      "Limited availability"
    ],
    stock: 10,
    weight: "3-4 lbs",
    origin: "Ghana"
  },
  {
    id: 7,
    name: "Pineapple Jam",
    description: "Small-batch artisanal pineapple jam made with our premium pineapples. Perfect on toast, pastries, or as a glaze for meats.",
    regularPrice: 7.99,
    salePrice: null,
    onSale: false,
    image: "/images/pineapple-jam.jpg",
    category: "preserved",
    features: [
      "Small-batch production",
      "All natural ingredients",
      "No artificial preservatives",
      "Versatile use"
    ],
    stock: 45,
    weight: "8 oz",
    origin: "Made in USA"
  },
  {
    id: 8,
    name: "Pineapple Plant",
    description: "Grow your own pineapple at home! These young pineapple plants are easy to care for and make a unique houseplant with eventual fruit.",
    regularPrice: 29.99,
    salePrice: 24.99,
    onSale: true,
    image: "/images/pineapple-plant.jpg",
    category: "plant",
    features: [
      "Live pineapple plant",
      "Detailed care instructions",
      "Decorative pot included",
      "Can produce fruit in 2-3 years"
    ],
    stock: 20,
    weight: "3 lbs",
    origin: "Nursery grown"
  }
];

export default products; 