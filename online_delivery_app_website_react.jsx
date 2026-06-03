export default function OnlineDeliveryApp() {
  const featuredRestaurants = [
    {
      name: 'Burger House',
      cuisine: 'Fast Food',
      time: '20-30 min',
      rating: '4.8'
    },
    {
      name: 'Sushi Express',
      cuisine: 'Japanese',
      time: '25-35 min',
      rating: '4.9'
    },
    {
      name: 'Pinoy Kitchen',
      cuisine: 'Filipino',
      time: '15-25 min',
      rating: '4.7'
    },
    {
      name: 'Pizza Corner',
      cuisine: 'Italian',
      time: '30-40 min',
      rating: '4.6'
    }
  ];

  const categories = [
    'Burgers',
    'Pizza',
    'Milk Tea',
    'Filipino',
    'Japanese',
    'Desserts'
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">QuickBite</h1>
            <p className="text-sm text-gray-500">Fast & Reliable Food Delivery</p>
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#home" className="hover:text-gray-600">Home</a>
            <a href="#restaurants" className="hover:text-gray-600">Restaurants</a>
            <a href="#categories" className="hover:text-gray-600">Categories</a>
            <a href="#contact" className="hover:text-gray-600">Contact</a>
          </nav>

          <button className="bg-black text-white px-5 py-2 rounded-2xl hover:opacity-90 transition">
            Download App
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-extrabold leading-tight mb-6">
              Order Food Anytime, Anywhere
            </h2>

            <p className="text-lg text-gray-600 mb-8">
              Get your favorite meals delivered straight to your doorstep in minutes.
              Discover top restaurants near you and enjoy fast delivery.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Enter your delivery address"
                className="flex-1 px-5 py-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              />

              <button className="bg-black text-white px-8 py-4 rounded-2xl hover:opacity-90 transition font-semibold">
                Find Food
              </button>
            </div>

            <div className="mt-10 flex gap-8 text-sm">
              <div>
                <p className="text-3xl font-bold">500+</p>
                <p className="text-gray-500">Restaurants</p>
              </div>

              <div>
                <p className="text-3xl font-bold">10k+</p>
                <p className="text-gray-500">Orders Delivered</p>
              </div>

              <div>
                <p className="text-3xl font-bold">4.9★</p>
                <p className="text-gray-500">Customer Rating</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-black rounded-[40px] p-10 shadow-2xl text-white">
              <div className="bg-white text-black rounded-3xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-bold text-xl">Cheesy Burger Combo</h3>
                    <p className="text-gray-500 text-sm">Best Seller</p>
                  </div>

                  <span className="text-2xl">🍔</span>
                </div>

                <div className="h-48 bg-gray-100 rounded-2xl flex items-center justify-center text-7xl mb-6">
                  🍟
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Price</p>
                    <p className="text-2xl font-bold">₱249</p>
                  </div>

                  <button className="bg-black text-white px-5 py-3 rounded-2xl hover:opacity-90">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-3xl font-bold">Popular Categories</h3>
            <p className="text-gray-500 mt-2">Explore food categories near you</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 text-center shadow-sm hover:shadow-lg transition cursor-pointer"
            >
              <div className="text-4xl mb-4">
                {category === 'Burgers' && '🍔'}
                {category === 'Pizza' && '🍕'}
                {category === 'Milk Tea' && '🧋'}
                {category === 'Filipino' && '🍛'}
                {category === 'Japanese' && '🍣'}
                {category === 'Desserts' && '🍰'}
              </div>

              <p className="font-semibold">{category}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Restaurants */}
      <section id="restaurants" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h3 className="text-3xl font-bold">Featured Restaurants</h3>
              <p className="text-gray-500 mt-2">Top-rated restaurants delivering today</p>
            </div>

            <button className="border border-black px-5 py-3 rounded-2xl hover:bg-black hover:text-white transition">
              View All
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredRestaurants.map((restaurant, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition"
              >
                <div className="h-52 bg-gray-200 flex items-center justify-center text-7xl">
                  {restaurant.cuisine === 'Fast Food' && '🍔'}
                  {restaurant.cuisine === 'Japanese' && '🍣'}
                  {restaurant.cuisine === 'Filipino' && '🍲'}
                  {restaurant.cuisine === 'Italian' && '🍕'}
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-bold">{restaurant.name}</h4>
                    <span className="text-sm font-semibold">⭐ {restaurant.rating}</span>
                  </div>

                  <p className="text-gray-500 mb-4">{restaurant.cuisine}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm bg-gray-200 px-3 py-1 rounded-full">
                      {restaurant.time}
                    </span>

                    <button className="bg-black text-white px-4 py-2 rounded-xl text-sm hover:opacity-90">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Download */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-black text-white rounded-[40px] p-10 lg:p-16 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-4xl font-bold mb-6">
              Download the QuickBite App
            </h3>

            <p className="text-gray-300 text-lg mb-8">
              Order faster, track deliveries live, and enjoy exclusive discounts using our mobile app.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button className="bg-white text-black px-6 py-4 rounded-2xl font-semibold hover:opacity-90">
                App Store
              </button>

              <button className="border border-white px-6 py-4 rounded-2xl font-semibold hover:bg-white hover:text-black transition">
                Google Play
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-72 h-[520px] bg-white rounded-[50px] p-4 shadow-2xl">
              <div className="w-full h-full bg-gray-100 rounded-[40px] p-6 overflow-hidden">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-xl font-bold">QuickBite</h4>
                  <span>🔔</span>
                </div>

                <div className="bg-white rounded-3xl p-4 mb-4 shadow-sm">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold">Burger House</p>
                      <p className="text-sm text-gray-500">Your order is on the way</p>
                    </div>

                    <span className="text-3xl">🛵</span>
                  </div>
                </div>

                <div className="bg-black rounded-3xl p-6 text-white">
                  <p className="text-sm text-gray-300 mb-2">Estimated Arrival</p>
                  <p className="text-4xl font-bold">18 mins</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-10">
          <div>
            <h4 className="text-2xl font-bold mb-4">QuickBite</h4>
            <p className="text-gray-500">
              Delivering your favorite meals quickly and safely.
            </p>
          </div>

          <div>
            <h5 className="font-bold mb-4">Company</h5>
            <ul className="space-y-2 text-gray-500">
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-4">Support</h5>
            <ul className="space-y-2 text-gray-500">
              <li>Help Center</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-4">Contact</h5>
            <ul className="space-y-2 text-gray-500">
              <li>support@quickbite.com</li>
              <li>+63 900 123 4567</li>
              <li>Quezon City, Philippines</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 py-6 text-center text-gray-500 text-sm">
          © 2026 QuickBite. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
