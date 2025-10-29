import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import IcemoonSeries from "../assets/images/ceilingLamp.jpg";
import Building from "../assets/images/productImage.png";

const CollectionsDetail = () => {
  const navigate = useNavigate();
  const [categoryOpen, setCategoryOpen] = useState(true);
  const [selectedProducts, setSelectedProducts] = useState([1]);

  const products = [
    {
      id: 1,
      name: "ICEMOON",
      power: "12W | 18W | 24W",
      image: IcemoonSeries,
      type: "downlight",
    },
    {
      id: 2,
      name: "ICEMOON",
      power: "12W | 18W | 24W",
      image: IcemoonSeries,
      type: "panel",
    },
    {
      id: 3,
      name: "ICEMOON",
      power: "12W | 18W | 24W",
      image: IcemoonSeries,
      type: "downlight",
    },
    {
      id: 4,
      name: "ICEMOON",
      power: "12W | 18W | 24W",
      image: IcemoonSeries,
      type: "downlight",
    },
    {
      id: 5,
      name: "ICEMOON",
      power: "12W | 18W | 24W",
      image: IcemoonSeries,
      type: "panel",
    },
    {
      id: 6,
      name: "ICEMOON",
      power: "12W | 18W | 24W",
      image: IcemoonSeries,
      type: "downlight",
    },
    {
      id: 7,
      name: "ICEMOON",
      power: "12W | 18W | 24W",
      image: IcemoonSeries,
      type: "downlight",
    },
    {
      id: 8,
      name: "ICEMOON",
      power: "12W | 18W | 24W",
      image: IcemoonSeries,
      type: "panel",
    },
    {
      id: 9,
      name: "ICEMOON",
      power: "12W | 18W | 24W",
      image: IcemoonSeries,
      type: "downlight",
    },
  ];

  const toggleProduct = (productId) => {
    setSelectedProducts((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <section id="collections-detail" className="py-10 px-8 bg-white ">
      <div className="max-w-7xl mx-auto">
        {/* Hero Image Section */}
        <div className="mb-12 w-full h-[500px] mx-auto">
          <div className="rounded-3xl overflow-hidden  w-full h-full">
            <img
              src={Building}
              alt="Lighting in Conference Room"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Main Content with Sidebar and Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left Sidebar - Filters */}
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <h3 className="text-lg font-bold text-black mb-4">Category</h3>

              <div className="border-b border-gray-200 pb-4">
                <button
                  onClick={() => setCategoryOpen(!categoryOpen)}
                  className="flex items-center justify-between w-full text-left font-medium text-gray-700 mb-2"
                >
                  <span>Product 1</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      categoryOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {categoryOpen && (
                  <div className="space-y-2 mt-2">
                    {[1, 2, 3, 4].map((productId) => (
                      <label
                        key={productId}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedProducts.includes(productId)}
                          onChange={() => toggleProduct(productId)}
                          className="w-4 h-4 accent-[#004B6E] border-gray-300 rounded-2xl focus:ring-[#004B6E]"
                        />
                        <span
                          className="text-[#737373]"
                          style={{
                            fontFamily: "Poppins, sans-serif",
                            fontWeight: "300",
                            fontSize: "16px",
                          }}
                        >
                          Product 1
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Section - Product Grid */}
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-gray-100 rounded-xl p-4 cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => navigate("/product/icemoon")}
                >
                  <div className="bg-white rounded-lg mb-3 h-48 flex items-center justify-center overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                  <h4 className="text-lg font-semibold text-black mb-2">
                    {product.name}
                  </h4>
                  <p className="text-sm text-gray-600">{product.power}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionsDetail;
