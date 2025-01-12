'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { StarIcon } from 'lucide-react'

const cars = [
  { 
    id: 1, 
    name: "Tesla Model 3", 
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "The Tesla Model 3 is an electric four-door sedan developed by Tesla. The Model 3 Standard Range Plus version delivers an EPA-rated all-electric range of 263 miles (423 km) and the Long Range versions deliver 353 miles (568 km).",
    price: "$39,990",
    range: "263 miles",
    acceleration: "0-60 mph in 5.3 seconds"
  },
  { 
    id: 2, 
    name: "Nissan Leaf", 
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "The Nissan Leaf is a compact five-door hatchback electric car manufactured by Nissan. It was introduced in Japan and the United States in December 2010, and is currently in its second generation, introduced in October 2017.",
    price: "$31,670",
    range: "226 miles",
    acceleration: "0-60 mph in 7.4 seconds"
  },
  { 
    id: 3, 
    name: "Chevrolet Bolt", 
    image: "https://images.unsplash.com/photo-1631895504580-69e26a98964e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "The Chevrolet Bolt or Chevrolet Bolt EV is a front-motor, five-door all-electric subcompact hatchback marketed by Chevrolet; developed and manufactured in partnership with LG Corporation.",
    price: "$31,995",
    range: "259 miles",
    acceleration: "0-60 mph in 6.5 seconds"
  },
]

export default function CarDetails() {
  const { id } = useParams()
  const car = cars.find(c => c.id === parseInt(id as string))
  const [review, setReview] = useState('')
  const [rating, setRating] = useState(0)
  const [reviews, setReviews] = useState<{text: string, rating: number}[]>([])

  if (!car) {
    return <div>Car not found</div>
  }

  const handleReviewSubmit = () => {
    if (review && rating > 0) {
      setReviews([...reviews, {text: review, rating}])
      setReview('')
      setRating(0)
    }
  }

  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">{car.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <div className="relative w-full h-[400px]">
                <Image 
                  src={car.image} 
                  alt={car.name} 
                  layout="fill" 
                  objectFit="cover" 
                  className="rounded-md"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <p className="text-lg mb-4">{car.description}</p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h3 className="font-semibold">Price</h3>
                  <p>{car.price}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Range</h3>
                  <p>{car.range}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Acceleration</h3>
                  <p>{car.acceleration}</p>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Reviews</h3>
              {reviews.map((r, index) => (
                <div key={index} className="mb-4 p-4 bg-gray-100 rounded-md">
                  <p>{r.text}</p>
                  <div className="flex mt-2">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className={`w-5 h-5 ${i < r.rating ? 'text-yellow-400' : 'text-gray-300'}`} />
                    ))}
                  </div>
                </div>
              ))}
              
              <h3 className="text-xl font-bold mt-6 mb-2">Add a Review</h3>
              <Textarea 
                value={review} 
                onChange={(e) => setReview(e.target.value)} 
                placeholder="Write your review here..." 
                className="mb-4"
              />
              <div className="flex mb-4">
                {[...Array(5)].map((_, index) => (
                  <StarIcon 
                    key={index}
                    className={`w-6 h-6 cursor-pointer ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    onClick={() => setRating(index + 1)}
                  />
                ))}
              </div>
              <Button onClick={handleReviewSubmit}>Submit Review</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

