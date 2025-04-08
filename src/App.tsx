import React, { useState, useEffect } from 'react';
import { IceCream2, Clock, MapPin, Phone, Instagram, Facebook, Twitter } from 'lucide-react';

function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-amber-50 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-4">
          <div className="absolute w-24 h-24 border-t-8 border-amber-600 rounded-full animate-spin"></div>
          <IceCream2 className="absolute inset-0 w-24 h-24 text-amber-600 animate-bounce" />
        </div>
        <p className="text-amber-900 text-xl font-serif animate-pulse">Loading delicious gelato...</p>
      </div>
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen />}
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div 
          className="h-screen relative bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white space-y-6">
              <IceCream2 className="w-16 h-16 mx-auto mb-4" />
              <h1 className="text-6xl font-serif">Vanilla Gelado Italiano</h1>
              <p className="text-xl font-light">Authentic Italian Gelato in Every Scoop</p>
            </div>
          </div>
        </div>

        {/* Featured Flavors */}
        <section className="py-20 px-6">
          <h2 className="text-4xl font-serif text-center mb-12">Our Signature Flavors</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Stracciatella",
                image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80",
                description: "Classic vanilla with delicate chocolate shavings"
              },
              {
                name: "Pistachio",
                image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&q=80",
                description: "Rich, creamy gelato made with Sicilian pistachios"
              },
              {
                name: "Fragola",
                image: "https://images.unsplash.com/photo-1557142046-c704a3adf364?auto=format&fit=crop&q=80",
                description: "Fresh strawberry gelato made with seasonal fruits"
              }
            ].map((flavor) => (
              <div key={flavor.name} className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img src={flavor.image} alt={flavor.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-serif mb-2">{flavor.name}</h3>
                  <p className="text-gray-600">{flavor.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Info Section */}
        <section className="bg-gray-50 py-20 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <Clock className="w-8 h-8 mx-auto mb-4 text-amber-600" />
              <h3 className="text-xl font-semibold mb-2">Hours</h3>
              <p className="text-gray-600">Daily: 07:00 - 20:20</p>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 mx-auto mb-4 text-amber-600" />
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-600">
                No. 730, Fomento<br />
                6 Av. Antonio Champalimauo<br />
                Maputo, Mozambique
              </p>
            </div>
            <div className="text-center">
              <Phone className="w-8 h-8 mx-auto mb-4 text-amber-600" />
              <h3 className="text-xl font-semibold mb-2">Contact</h3>
              <p className="text-gray-600">+258 85 989 8980</p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 px-6">
          <h2 className="text-4xl font-serif text-center mb-12">Our Gallery</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "https://images.unsplash.com/photo-1557142046-c704a3adf364?auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80",
            ].map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={image} 
                  alt={`Gallery image ${index + 1}`} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-amber-900 text-white py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <IceCream2 className="w-10 h-10 mb-2" />
                <h4 className="text-xl font-serif">Vanilla Gelado Italiano</h4>
              </div>
              <div className="flex space-x-6">
                <Instagram className="w-6 h-6 hover:text-amber-300 cursor-pointer transition-colors" />
                <Facebook className="w-6 h-6 hover:text-amber-300 cursor-pointer transition-colors" />
                <Twitter className="w-6 h-6 hover:text-amber-300 cursor-pointer transition-colors" />
              </div>
            </div>
            <div className="mt-8 text-center text-amber-200">
              <p>&copy; {new Date().getFullYear()} Vanilla Gelado Italiano. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;