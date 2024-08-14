import { FaHands, FaHeadset, FaGem, FaCheck } from "react-icons/fa";

function FeatureHighlights() {
  return (
    <div className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Handcrafted Perfection */}
          <div className="flex flex-col items-center text-center p-4 border-r-[1px]">
            <FaHands size={36} className="text-gray-700 mb-4" />
            <h3 className="text-lg font-bold mb-2">HANDCRAFTED PERFECTION</h3>
            <p className="text-gray-600">
              All Our Products are handcrafted with love and perfection.
            </p>
          </div>

          {/* 24/7 Support Online */}
          <div className="flex flex-col items-center text-center p-4 border-r-[1px]">
            <FaHeadset size={36} className="text-gray-700 mb-4" />
            <h3 className="text-lg font-bold mb-2">24/7 SUPPORT ONLINE</h3>
            <p className="text-gray-600">
              Our Customer Support Team is available all the time to answer all
              the queries. For us, each query is a special request and not just
              another ticket.
            </p>
          </div>

          {/* 200,000+ Happy Customers */}
          <div className="flex flex-col items-center text-center p-4 border-r-[1px]">
            <FaGem size={36} className="text-gray-700 mb-4" />
            <h3 className="text-lg font-bold mb-2">200,000+ Happy Customers</h3>
            <p className="text-gray-600">
              This is all because of the Love and Vote of confidence we get from
              our lovely people around the globe. We are working 24 x 7 x 365 to
              make more people be a part of this huge family.
            </p>
          </div>

          {/* Authenticity Assured */}
          <div className="flex flex-col items-center text-center p-4">
            <FaCheck size={36} className="text-gray-700 mb-4" />
            <h3 className="text-lg font-bold mb-2">Authenticity Assured</h3>
            <p className="text-gray-600">
              Each and Every product goes through a 3-step quality check process
              before dispatching. All the details mentioned in this product page
              will be fulfilled in your product as it is.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureHighlights;
