import React from "react";
import { FaStar, FaArrowLeft, FaArrowRight, FaCheckCircle } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Vincent P.",
      text: "The quality of the jewelry exceeded my expectations. Each piece feels premium and beautifully crafted, and the designs are incredibly stylish. I'm absolutely obsessed with my new collection!",
      item: "Round Huggie Hoop Earrings",
      reaction: "RECOMMEND!",
      image: "https://images.unsplash.com/photo-1603974372039-adc49044b6bd?w=800&q=80"
    },
    {
      id: 2,
      name: "Emily T.",
      text: "I was blown away by the craftsmanship of these jewelry pieces. Every item feels luxurious and the modern designs are simply stunning. I can’t get enough of my new favorite accessories!",
      item: "Twisted Gold Statement Ring",
      reaction: "LOVE IT!",
      image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80"
    }
  ];

  return (
    <section className="relative w-full min-h-screen text-white overflow-hidden">
      <div className="relative w-[99%] mx-auto px-6 py-20">

        {/* Review Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {testimonials.map((review) => (
            <div key={review.id} className="bg-white text-gray-900 flex flex-col md:flex-row">

              {/* Left Product Image */}
              <div className="w-full h-68 md:w-60 md:h-96">
                <img
                  src={review.image}
                  alt={review.item}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Content */}
              <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">

                {/* Stars */}
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-[#D4AF37]" />
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-4">
                    {review.reaction}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    "{review.text}"
                  </p>
                </div>

                {/* Customer Info */}
                <div className="border-t pt-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium">{review.name}</span>
                    <FaCheckCircle className="text-green-600 text-sm" />
                    <span className="text-green-600 text-sm">Verified</span>
                  </div>
                  <p className="text-gray-500 text-sm">
                    Item purchased: <span className="underline">{review.item}</span>
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;
