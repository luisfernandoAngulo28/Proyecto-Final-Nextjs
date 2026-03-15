import Image from "next/image";

type ProductCardProps = {
  title: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  category: string;
};

export default function ProductCard({
  title,
  description,
  image,
  price,
  rating,
  category,
}: ProductCardProps) {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden w-72 hover:shadow-lg transition duration-300">
      <Image
        src={image}
        alt={title}
        className="w-full h-48 object-contain p-4 bg-gray-50 rounded"
        height={300}
        width={200}
      />

      <div className="p-4 flex flex-col gap-2">
        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded w-fit ">
          {category}
        </span>
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-500">{description.slice(0, 80)}...</p>
        <div className="flex justify-between items-center mt-2">
          <span className="text-lg font-bold text-blue-600">${price}</span>
          <span className="text-yellow-500 text-sm"> ⭐{rating}</span>
        </div>
      </div>
    </div>
  );
}
