import React from "react";
import { Search, ShoppingCart, UserRound, ChevronRight, Menu } from "lucide-react";

const categories = [
  { name: "Mobiles", icon: "📱" },
  { name: "Fashion", icon: "👕" },
  { name: "Home & Living", icon: "🛋️" },
  { name: "Beauty", icon: "💄" },
  { name: "Electronics", icon: "🎧" },
  { name: "Groceries", icon: "🛒" },
  { name: "Watches", icon: "⌚" },
  { name: "Sports", icon: "⚽" }
];

const products = [
  {
    name: "Wireless Bluetooth Headphone",
    price: "৳ 890",
    oldPrice: "৳ 1,500",
    discount: "-41%",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Smart Watch for Men & Women",
    price: "৳ 1,250",
    oldPrice: "৳ 2,000",
    discount: "-38%",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Classic Casual Backpack",
    price: "৳ 1,090",
    oldPrice: "৳ 1,800",
    discount: "-39%",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Skincare Beauty Product Set",
    price: "৳ 650",
    oldPrice: "৳ 950",
    discount: "-32%",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Modern Sports Shoes",
    price: "৳ 1,490",
    oldPrice: "৳ 2,200",
    discount: "-32%",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Portable Bluetooth Speaker",
    price: "৳ 780",
    oldPrice: "৳ 1,200",
    discount: "-35%",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=500&q=80"
  }
];

function TopBar() {
  return (
    <div className="hidden bg-[#f85606] text-xs text-gray-600 md:block">
      <div className="mx-auto flex max-w-6xl justify-end gap-7 px-4 py-2">
        <a href="#">SAVE MORE ON APP</a>
        <a href="#">SELL ON DARAZ</a>
        <a href="#">HELP & SUPPORT</a>
        <a href="#">LOGIN</a>
        <a href="#">SIGN UP</a>
        <a href="#">ভাষা</a>
      </div>
    </div>
  );
}

function Header() {
  const [search, setSearch] = React.useState("");

  function handleSearch(event) {
    event.preventDefault();
    alert(search ? `Searching for: ${search}` : "Please enter a product name");
  }

  return (
    <>
      <TopBar />
      <header className="bg-[#f85606]">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-4">
          <button className="text-white md:hidden" aria-label="Open menu">
            <Menu size={25} />
          </button>
          <a href="#" className="text-3xl font-extrabold tracking-tight text-white">
            daraz
          </a>

          <form onSubmit={handleSearch} className="flex flex-1 overflow-hidden rounded-sm bg-white">
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="min-w-0 flex-1 px-4 py-3 text-sm outline-none"
              placeholder="Search in Daraz"
            />
            <button className="bg-[#ffe1d2] px-5 text-[#f85606]" aria-label="Search">
              <Search size={21} />
            </button>
          </form>

          <button className="hidden text-white sm:block" aria-label="Account">
            <UserRound size={25} />
          </button>
          <button className="text-white" aria-label="Shopping cart">
            <ShoppingCart size={27} />
          </button>
        </div>
      </header>
      <nav className="bg-white shadow-sm">
        <div className="mx-auto flex max-w-6xl gap-7 overflow-x-auto whitespace-nowrap px-4 py-3 text-sm text-gray-600">
          <a href="#">Categories</a>
          <a href="#">Flash Sale</a>
          <a href="#">Daraz Mall</a>
          <a href="#">Voucher</a>
          <a href="#">Free Delivery</a>
          <a href="#">Customer Care</a>
        </div>
      </nav>
    </>
  );
}

function Hero() {
  return (
    <section className="mx-auto mt-4 max-w-6xl px-4">
      <div className="relative flex min-h-[190px] items-center overflow-hidden rounded-md bg-gradient-to-r from-[#ff6a00] via-[#ff9b19] to-[#ffcf4a] px-7 py-8 text-white md:min-h-[300px] md:px-16">
        <div className="relative z-10 max-w-lg">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em]">Daraz Bangladesh</p>
          <h1 className="text-3xl font-extrabold leading-tight md:text-5xl">Big Deals. Bigger Smiles.</h1>
          <p className="mt-3 text-sm md:text-lg">Discover great offers on your favourite products.</p>
          <button className="mt-5 rounded bg-white px-5 py-2.5 text-sm font-bold text-[#f85606] hover:bg-orange-50">
            SHOP NOW
          </button>
        </div>
        <div className="absolute -right-8 -top-10 h-64 w-64 rounded-full bg-white/20 md:right-20 md:h-80 md:w-80" />
        <div className="absolute right-8 top-8 hidden rotate-6 rounded-xl bg-white p-5 text-7xl shadow-xl md:block">
          🛍️
        </div>
        <div className="absolute bottom-5 right-16 hidden text-6xl md:block">🎧</div>
      </div>
    </section>
  );
}

function Categories() {
  return (
    <section className="mx-auto mt-6 max-w-6xl px-4">
      <div className="rounded-md bg-white p-4 md:p-5">
        <h2 className="mb-4 text-lg font-semibold text-gray-800">Categories</h2>
        <div className="grid grid-cols-4 gap-4 sm:grid-cols-8">
          {categories.map((category) => (
            <button key={category.name} className="group flex flex-col items-center gap-2 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-50 text-3xl transition group-hover:bg-orange-100">
                {category.icon}
              </span>
              <span className="text-xs text-gray-600">{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }) {
  return (
    <article className="overflow-hidden bg-white transition hover:shadow-lg">
      <img src={product.image} alt={product.name} className="h-40 w-full object-cover sm:h-48" />
      <div className="p-3">
        <h3 className="min-h-10 text-sm text-gray-800">{product.name}</h3>
        <p className="mt-2 text-lg font-semibold text-[#f85606]">{product.price}</p>
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <span className="line-through">{product.oldPrice}</span>
          <span className="text-gray-600">{product.discount}</span>
        </div>
        <p className="mt-2 text-xs text-amber-500">★★★★★ <span className="text-gray-400">(24)</span></p>
      </div>
    </article>
  );
}

function FlashSale() {
  return (
    <section className="mx-auto mt-6 max-w-6xl px-4">
      <div className="rounded-t-md bg-white px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-lg font-semibold text-[#f85606]">Flash Sale</h2>
            <span className="hidden text-sm text-gray-500 sm:inline">On Sale Now</span>
          </div>
          <a href="#" className="flex items-center text-sm font-semibold text-[#f85606]">
            SHOP MORE <ChevronRight size={17} />
          </a>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-px sm:grid-cols-3 md:grid-cols-6">
        {products.map((product) => <ProductCard key={product.name} product={product} />)}
      </div>
    </section>
  );
}

function JustForYou() {
  return (
    <section id="just-for-you" className="mx-auto mt-7 max-w-6xl px-4 pb-10">
      <h2 className="mb-4 text-xl font-semibold text-gray-700">Just For You</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
        {[...products, ...products].map((product, index) => (
          <ProductCard key={`${product.name}-${index}`} product={product} />
        ))}
      </div>
      <div className="mt-8 text-center">
        <button className="border border-[#f85606] px-14 py-3 text-sm font-semibold text-[#f85606] hover:bg-orange-50">
          LOAD MORE
        </button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#2e2e54] text-gray-200">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-10 text-sm md:grid-cols-4">
        <div>
          <h3 className="mb-3 font-semibold text-white">Customer Care</h3>
          <p className="mb-2">Help Center</p>
          <p className="mb-2">How to Buy</p>
          <p className="mb-2">Returns & Refunds</p>
          <p>Contact Us</p>
        </div>
        <div>
          <h3 className="mb-3 font-semibold text-white">Daraz</h3>
          <p className="mb-2">About Daraz</p>
          <p className="mb-2">Digital Payments</p>
          <p className="mb-2">Daraz Blog</p>
          <p>Privacy Policy</p>
        </div>
        <div>
          <h3 className="mb-3 font-semibold text-white">Payment Methods</h3>
          <p>Cash on Delivery</p>
          <p className="mt-2">Visa · Mastercard · bKash · Nagad</p>
        </div>
        <div>
          <h3 className="mb-3 font-semibold text-white">Download the App</h3>
          <p>Shop anytime, anywhere with Daraz.</p>
          <div className="mt-3 inline-block rounded bg-white px-3 py-2 font-bold text-[#f85606]">daraz app</div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-gray-400">
        © 2026 Daraz Bangladesh Homepage Clone
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Categories />
        <FlashSale />
        <JustForYou />
      </main>
      <Footer />
    </div>
  );
}
