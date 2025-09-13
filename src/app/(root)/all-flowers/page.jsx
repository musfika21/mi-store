import dbConnect, { collectionsNameObj } from '@/lib/dbConnect'
import Link from 'next/link'

export default async function AllFlowers() {
  // ✅ must await dbConnect
  const flowersCollection = await dbConnect(collectionsNameObj.flowerCollection)
  const flowers = await flowersCollection.find({}).toArray()

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Flowers</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {flowers.map((flower) => (
          <div
            key={flower._id.toString()}
            className="border rounded-lg shadow p-4 hover:shadow-lg transition"
          >
            {/* image থাকলে দেখানো */}
            {flower.image && (
              <img
                src={flower.image}
                alt={flower.name}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
            )}

            <h2 className="text-lg font-semibold">{flower.name}</h2>
            <p className="text-sm text-gray-600 line-clamp-2">
              {flower.description}
            </p>
            <p className="text-sm font-medium mt-1">
              Price: ${flower.pricePerPiece}
            </p>

            <Link
              href={`/all-flowers/${flower._id}`}
              className="text-blue-600 hover:underline mt-2 inline-block"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
