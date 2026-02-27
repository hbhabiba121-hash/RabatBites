import { useState } from "react";

// Restaurant data
const restaurants = [
  {
    id: 1,
    name: "Happy Jones",
    address: "1278 Loving Acres Road, Kansas City, MO 64110",
    rating: 4.5,
    isOpen: true,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    cuisine: "Nigerian",
    deliveryTime: "25-35 min",
    featured: true,
  },
  {
    id: 2,
    name: "Bella Italia",
    address: "456 Oak Street, Kansas City, MO 64105",
    rating: 4.3,
    isOpen: true,
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop",
    cuisine: "Italian",
    deliveryTime: "30-40 min",
    featured: false,
  },
  {
    id: 3,
    name: "Golden Dragon",
    address: "789 Pine Avenue, Kansas City, MO 64108",
    rating: 4.7,
    isOpen: true,
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&h=400&fit=crop",
    cuisine: "Chinese",
    deliveryTime: "20-30 min",
    featured: false,
  },
  {
    id: 4,
    name: "Sakura Sushi",
    address: "321 Cherry Lane, Kansas City, MO 64112",
    rating: 4.8,
    isOpen: false,
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&h=400&fit=crop",
    cuisine: "Japanese",
    deliveryTime: "35-45 min",
    featured: false,
  },
  {
    id: 5,
    name: "Taco Fiesta",
    address: "555 Maple Drive, Kansas City, MO 64115",
    rating: 4.2,
    isOpen: true,
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&h=400&fit=crop",
    cuisine: "Mexican",
    deliveryTime: "15-25 min",
    featured: false,
  },
];

const categories = [
  { name: "All", icon: "🍽️", active: true },
  { name: "Italian", icon: "🍝", active: false },
  { name: "Chinese", icon: "🥡", active: false },
  { name: "Nigerian", icon: "🍲", active: true },
  { name: "Japanese", icon: "🍣", active: false },
  { name: "Mexican", icon: "🌮", active: false },
  { name: "Indian", icon: "🍛", active: false },
  { name: "Thai", icon: "🍜", active: false },
];

// Star Icon Component
const StarIcon = ({ filled = true }: { filled?: boolean }) => (
  <svg
    className={`w-4 h-4 ${filled ? "text-amber-400" : "text-gray-300"}`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

// Restaurant Card Component
const RestaurantCard = ({ restaurant }: { restaurant: typeof restaurants[0] }) => {
  return (
    <div className="flex-shrink-0 w-[280px] bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
      {/* Image Container */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* OPEN Badge */}
        {restaurant.isOpen && (
          <div className="absolute top-3 left-3 px-2.5 py-1 bg-emerald-500 text-white text-xs font-semibold rounded-full shadow-md">
            OPEN
          </div>
        )}
        
        {/* Rating Badge */}
        <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 bg-white/95 backdrop-blur-sm rounded-full shadow-md">
          <StarIcon filled />
          <span className="text-sm font-bold text-gray-800">{restaurant.rating}</span>
        </div>
        
        {/* Cuisine Tag */}
        <div className="absolute bottom-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-full">
          <span className="text-xs font-medium text-gray-700">{restaurant.cuisine}</span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 mb-1">{restaurant.name}</h3>
        <p className="text-sm text-gray-500 mb-3 line-clamp-1">{restaurant.address}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-gray-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm">{restaurant.deliveryTime}</span>
          </div>
          
          <button className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors duration-200">
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

// Category Chip Component
const CategoryChip = ({ category, isActive, onClick }: { 
  category: typeof categories[0]; 
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2.5 rounded-full whitespace-nowrap transition-all duration-200 ${
        isActive
          ? "bg-gray-900 text-white shadow-md"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
    >
      <span className="text-lg">{category.icon}</span>
      <span className="text-sm font-medium">{category.name}</span>
    </button>
  );
};

export function App() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Container */}
      <div className="max-w-md mx-auto bg-white min-h-screen shadow-xl">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md px-4 py-4 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-gray-900">Trending Restaurants</h1>
              <p className="text-sm text-gray-500 mt-0.5">Discover the best food near you</p>
            </div>
            <button className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors">
              See all <span className="text-gray-400">(43)</span>
            </button>
          </div>
        </header>

        {/* Search Bar */}
        <div className="px-4 py-3">
          <div className="flex items-center gap-3 bg-gray-100 rounded-xl px-4 py-3">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search restaurants, cuisines..."
              className="flex-1 bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="px-4 pb-4">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4">
            {categories.map((category) => (
              <CategoryChip
                key={category.name}
                category={category}
                isActive={activeCategory === category.name}
                onClick={() => setActiveCategory(category.name)}
              />
            ))}
          </div>
        </div>

        {/* Featured Section */}
        {restaurants.find(r => r.featured) && (
          <div className="px-4 pb-4">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Featured
            </h2>
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src={restaurants.find(r => r.featured)?.image}
                alt="Featured"
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* OPEN Badge */}
              <div className="absolute top-4 left-4 px-3 py-1.5 bg-emerald-500 text-white text-sm font-semibold rounded-full shadow-lg">
                OPEN
              </div>
              
              {/* Rating */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full shadow-lg">
                <StarIcon filled />
                <span className="text-base font-bold text-gray-800">{restaurants.find(r => r.featured)?.rating}</span>
              </div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700">
                    {restaurants.find(r => r.featured)?.cuisine}
                  </span>
                  <span className="text-white/80 text-sm">• 25-35 min</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">
                  {restaurants.find(r => r.featured)?.name}
                </h3>
                <p className="text-white/80 text-sm">
                  {restaurants.find(r => r.featured)?.address}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Trending Section */}
        <div className="px-4 pb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
              Trending Near You
            </h2>
            <button className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors">
              View Map
            </button>
          </div>
          
          {/* Horizontal Scrollable Restaurant Cards */}
          <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4">
            {restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        </div>

        {/* Bottom Navigation */}
        <nav className="sticky bottom-0 bg-white border-t border-gray-100 px-6 py-3">
          <div className="flex items-center justify-around">
            <button className="flex flex-col items-center gap-1 text-gray-900">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="text-xs font-medium">Home</span>
            </button>
            
            <button className="flex flex-col items-center gap-1 text-gray-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="text-xs font-medium">Search</span>
            </button>
            
            <button className="flex flex-col items-center gap-1 text-gray-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <span className="text-xs font-medium">Orders</span>
            </button>
            
            <button className="flex flex-col items-center gap-1 text-gray-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-xs font-medium">Profile</span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default App;
