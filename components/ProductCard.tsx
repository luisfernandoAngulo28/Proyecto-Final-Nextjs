type ProductCardProps = {
  title: string;
  description: string;
  image: string;
  price: number;
};

export default function ProductCard({
  title,
  description,
  image,
  price,
}: ProductCardProps) {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden w-72 hover:shadow-lg transition duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded"
      />

      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-500">{description}</p>
        <div className="flex justify-between items-center mt-2">
          <span className="text-lg font-bold text-blue-600">${price}</span>
        </div>
      </div>
    </div>
  );
}
