export const products = [
  {
    id: 1,
    name: "Duffel Bag",
    slug: "duffel-bag",
    image: "IMG_2740.jpeg",
    additionalImages: [],
    price: 30.00,
    stock: 22,
    releaseDate: "2025-07-15",
    description: "47*28*55cm tournament-ready bag",
    category: "Bag"
  },
  {
    id: 2,
    name: "25x 35pt Top-Loaders",
    slug: "25x-35pt-top-loaders",
    image: "IMG_9971.jpg",
    additionalImages: [
      "IMG_9970.jpg",
      "IMG_9972.jpg",
      "IMG_9973.jpg",
      "IMG_9974.jpg",
      "IMG_9975.jpg",
      "IMG_9976.jpg",
      "IMG_9978.jpg"
    ],
    price: 3.00,
    stock: 80,
    releaseDate: "2025-10-15",
    description: "Pack of 25 for standard cards",
    category: "Top-Loaders"
  },
  {
    id: 3,
    name: "10x 130pt Top-Loaders",
    slug: "10x-130pt-top-loaders",
    image: "IMG_9979.jpg",
    additionalImages: [
      "IMG_9980.jpg",
      "IMG_9981.jpg",
      "IMG_9982.jpg",
      "IMG_9983.jpg",
      "IMG_9984.jpg",
      "IMG_9985.jpg",
      "IMG_9986.jpg",
      "IMG_9987.jpg"
    ],
    price: 3.50,
    stock: 200,
    releaseDate: "2025-10-15",
    description: "Pack of 10 for Multiple cards",
    category: "Top-Loaders"
  },
  {
    id: 4,
    name: "Matte Sleeves",
    slug: "matte-sleeves",
    image: "IMG_9960.jpg",
    additionalImages: [
      "IMG_9962.jpg",
      "IMG_9958.jpg",
      "IMG_9966.jpg",
      "IMG_9967.jpg",
      "IMG_9965.jpg",
      "IMG_9963.jpg",
      "IMG_9969.jpg",
      "IMG_9956.jpg"
    ],
    price: 8.90,
    stock: 500,
    releaseDate: "2025-10-15",
    description: "100 premium black sleeves (66x91mm)",
    category: "Sleeves"
  },
  {
    id: 5,
    name: "PU DeckBox",
    slug: "pu-deckbox",
    image: "IMG_9924.jpg",
    additionalImages: [
      "IMG_9895.jpg",
      "IMG_9899.jpg",
      "IMG_9900.jpg",
      "IMG_9901.jpg",
      "IMG_9903.jpg",
      "IMG_9904.jpg",
      "IMG_9912.jpg",
      "IMG_9941.jpg",
      "IMG_9943.jpg",
      "IMG_9947.jpg",
      "IMG_9948.jpg",
      "IMG_9949.jpg",
      "IMG_9951.jpg"
    ],
    price: 30.00,
    stock: 100,
    releaseDate: "2025-10-15",
    description: "160+ card capacity with magnetic closure",
    category: "Deckbox"
  },
  {
    id: 6,
    name: "480-Slot Binder",
    slug: "480-slot-binder",
    image: "IMG_9814.jpg",
    additionalImages: [
      "IMG_9839.jpg",
      "IMG_9818.jpg",
      "IMG_9816.jpg",
      "IMG_9819.jpg",
      "IMG_9820.jpg",
      "IMG_9823.jpg",
      "IMG_9824.jpg",
      "IMG_9825.jpg",
      "IMG_9826.jpg",
      "IMG_9827.jpg"
    ],
    price: 36.00,
    stock: 50,
    releaseDate: "2025-10-15",
    description: "Premium zippered binder with side-loading pockets",
    category: "Binder"
  }
];

export const getProductBySlug = (slug) => {
  return products.find(product => product.slug === slug);
};

export const getProductsByCategory = (category) => {
  if (!category || category === "All Categories") {
    return products;
  }
  return products.filter(product => product.category === category);
};

export const categories = [
  "All Categories",
  "Bag",
  "Top-Loaders",
  "Sleeves",
  "Deckbox",
  "Binder"
];
