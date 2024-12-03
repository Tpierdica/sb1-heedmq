export interface PetShop {
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
  instashopUrl: string;
  featuredSales: string[];
}

export const petShops: PetShop[] = [
  {
    id: "1",
    name: "The Pet Shop - Reem Island",
    location: "Reem Island",
    description: "Premium pet supplies and accessories with a wide selection of brands.",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=800&q=80",
    instashopUrl: "https://instashop.com/en-ae/client/the-petshop-reem-island",
    featuredSales: [
      "20% off on premium dog food",
      "Buy 2 get 1 free on cat toys",
      "Special deals on pet accessories"
    ]
  },
  {
    id: "2",
    name: "Crazy Pets - Khalidiyah",
    location: "Khalidiyah",
    description: "Your one-stop shop for all pet essentials and specialty items.",
    image: "https://images.unsplash.com/photo-1583511655826-05700442b31b?auto=format&fit=crop&w=800&q=80",
    instashopUrl: "https://instashop.com/en-ae/client/crazy-pets-khalidiyah",
    featuredSales: [
      "15% off on all pet carriers",
      "Special bundle deals on pet food",
      "Discount on grooming supplies"
    ]
  },
  {
    id: "3",
    name: "Iris Pet Accessories - Al Bateen",
    location: "Al Bateen",
    description: "Luxury pet accessories and premium care products.",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80",
    instashopUrl: "https://instashop.com/en-ae/client/iris-pet-accessories-al-bateen",
    featuredSales: [
      "Designer pet accessories sale",
      "Premium pet bed collection offers",
      "Exclusive deals on luxury items"
    ]
  },
  {
    id: "4",
    name: "Pet Location - Musaffah",
    location: "Musaffah",
    description: "Affordable pet supplies with great variety and quality.",
    image: "https://images.unsplash.com/photo-1591946614720-90a587da4a36?auto=format&fit=crop&w=800&q=80",
    instashopUrl: "https://instashop.com/en-ae/client/pet-location-musaffah",
    featuredSales: [
      "Bulk buy discounts on pet food",
      "Weekly special offers on supplies",
      "Clearance sale on selected items"
    ]
  },
  {
    id: "5",
    name: "Value on Demand Pets - Al Reem Island",
    location: "Al Reem Island",
    description: "Quick delivery of pet essentials at competitive prices.",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80",
    instashopUrl: "https://instashop.com/en-ae/client/value-on-demand-pets-al-reem-island",
    featuredSales: [
      "First order 10% discount",
      "Free delivery on orders above AED 100",
      "Bundle deals on pet essentials"
    ]
  },
  {
    id: "6",
    name: "Soul Pets - Al Nahyan",
    location: "Al Nahyan",
    description: "Specialized in natural and organic pet products.",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80",
    instashopUrl: "https://instashop.com/en-ae/client/soul-pets-al-nahyan",
    featuredSales: [
      "Organic pet food special offers",
      "Natural treats bundle deals",
      "Eco-friendly products discount"
    ]
  },
  {
    id: "7",
    name: "Pet Park - Musaffah",
    location: "Musaffah",
    description: "Complete pet care solutions with quality products and expert advice.",
    image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=800&q=80",
    instashopUrl: "https://instashop.com/en-ae/client/pet-park-musaffah",
    featuredSales: [
      "New customer welcome discount",
      "Multi-pet family special offers",
      "Monthly subscription savings"
    ]
  },
  {
    id: "8",
    name: "Quality Pet Shop - Khalifa Street",
    location: "Khalifa Street",
    description: "High-quality pet supplies and expert pet care advice.",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80",
    instashopUrl: "https://instashop.com/en-ae/client/quality-pet-shop-khalifa-street",
    featuredSales: [
      "Premium pet food discounts",
      "Seasonal accessories sale",
      "Loyalty program rewards"
    ]
  },
  {
    id: "9",
    name: "Aquarium Lives Centre - Al Mina",
    location: "Al Mina",
    description: "Specialized in aquatic pets and supplies with expert guidance.",
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
    instashopUrl: "https://instashop.com/en-ae/client/aquarium-lives-centre-al-mina",
    featuredSales: [
      "Aquarium setup packages",
      "Fish food special offers",
      "Aquatic plants collection"
    ]
  },
  {
    id: "10",
    name: "Pets Village - Al Mina",
    location: "Al Mina",
    description: "Family-friendly pet store with comprehensive pet care solutions.",
    image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=800&q=80",
    instashopUrl: "https://instashop.com/en-ae/client/pets-village-al-mina",
    featuredSales: [
      "Family pet packages",
      "Pet training accessories",
      "Grooming products deals"
    ]
  },
  {
    id: "11",
    name: "Pet Dr - Musaffah",
    location: "Musaffah",
    description: "Professional pet supplies with veterinary expertise.",
    image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=800&q=80",
    instashopUrl: "https://instashop.com/en-ae/client/pet-dr-musaffah",
    featuredSales: [
      "Health care products sale",
      "Prescription diet offers",
      "Pet medicine accessories"
    ]
  },
  {
    id: "12",
    name: "Wallet Pet Animal Accessories - Al Raha",
    location: "Al Raha",
    description: "Budget-friendly pet accessories without compromising quality.",
    image: "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?auto=format&fit=crop&w=800&q=80",
    instashopUrl: "https://instashop.com/en-ae/client/wallet-pet-animal-accessories-al-raha",
    featuredSales: [
      "Value pack deals",
      "Affordable pet essentials",
      "Clearance specials"
    ]
  },
  {
    id: "13",
    name: "Pet Care - Mushrif Mall",
    location: "Mushrif Mall",
    description: "Convenient mall location offering premium pet supplies.",
    image: "https://images.unsplash.com/photo-1583511666407-5f06533f2113?auto=format&fit=crop&w=800&q=80",
    instashopUrl: "https://instashop.com/en-ae/client/pet-care-mushrif-mall",
    featuredSales: [
      "Mall shopper specials",
      "Weekend deals",
      "Member exclusive offers"
    ]
  },
  {
    id: "14",
    name: "The Pet Stop - Al Falah St",
    location: "Al Falah Street",
    description: "One-stop destination for all pet needs with expert consultation.",
    image: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?auto=format&fit=crop&w=800&q=80",
    instashopUrl: "https://instashop.com/en-ae/client/the-pet-stop-al-falah-st",
    featuredSales: [
      "New arrivals discount",
      "Seasonal pet care packages",
      "Bundle savings"
    ]
  },
  {
    id: "15",
    name: "Petluxe Boutique and Spa - Al Hisn",
    location: "Al Hisn",
    description: "Luxury pet boutique offering premium products and spa services.",
    image: "https://images.unsplash.com/photo-1591946614720-90a587da4a36?auto=format&fit=crop&w=800&q=80",
    instashopUrl: "https://instashop.com/en-ae/client/petluxe-boutique-and-spa-al-hisn",
    featuredSales: [
      "Designer pet accessories",
      "Spa package deals",
      "Premium product offers"
    ]
  }
];