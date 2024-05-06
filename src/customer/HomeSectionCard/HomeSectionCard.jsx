const HomeSectionCard = ({ product }) => {
  return (
    <>
      <div className="shadow-lg border mx-3 justify-stretch">
        <img src={product.image} alt="single items image" />
        <div className="p-3">
          <h3 className="font-sans font-semibold text-xl text-gray-900 pb-2">
            {product.name}
          </h3>
          <p className="font-sans text-base text-gray-800">{product.tag}</p>
        </div>
      </div>
    </>
  );
};

export default HomeSectionCard;
