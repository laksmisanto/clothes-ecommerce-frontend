import Flex from "../../../components/flex/Flex";
const ProductCard = ({ product }) => {
  return (
    <>
      <div>
        <div className="group hover:shadow-2xl rounded-sm overflow-hidden">
          <div className="h-96 overflow-hidden">
            <img
              className="bg-no-repeat bg-top"
              src={product.imageUrl}
              alt="product item thumbnail image"
            />
          </div>
          <div className="p-3 h-full transition ease-linear duration-200 group-hover:-translate-y-3">
            <h4 className="font-sans font-semibold text-gray-800 text-xl">
              {product.brand}
            </h4>
            <p className="font-sans text-gray-800 text-lg">{product.title}</p>

            <Flex className="space-x-4 pt-2">
              <p className="font-sans font-semibold text-gray-800 text-base">
                {product.price}
              </p>
              <p className="font-sans font-semibold text-gray-500 text-base line-through">
                {product.discountedPrice}
              </p>
              <p className="font-sans font-semibold text-green-600 text-base">
                {product.discountPersent}% off
              </p>
            </Flex>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
