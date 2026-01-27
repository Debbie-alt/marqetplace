'use client'

import React, { useState } from 'react'
import { Plus } from 'lucide-react'
import toast, {Toaster} from 'react-hot-toast'
import { useQuery } from '@tanstack/react-query'
import { generatemodel } from '@/app/api'

type FormShape = {
  name: string
  description: string
  category: string
  price: string
  nafdac: string
}

const ProductUploadForm: React.FC = () => {
  const [formData, setFormData] = useState<FormShape>({
    name: '',
    description: '',
    category: '',
    price: '',
    nafdac: '',
  })
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

 const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null
    setImageFile(file)
    setPreview(file ? URL.createObjectURL(file) : null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.price || !imageFile) {
      toast.error('Please fill required fields and upload an image.')
      return
    }

 const {
    isLoading,
    // isError,
    // error,
  } = useQuery({
    queryKey: ['model', imageFile],
  queryFn: () => generatemodel(imageFile),
  enabled: !!imageFile,
    staleTime: 1000 * 60 * 5, 
    retry: 2,
  });


    setLoading(true)
    try {
      const data = new FormData()
      data.append('name', formData.name)
      data.append('description', formData.description)
      data.append('category', formData.category)
      data.append('price', formData.price)
      data.append('nafdac', formData.nafdac)

      data.append('thumbnail', imageFile)

      const res = await fetch(
        'https://marqet-place-api.onrender.com/api/v1/products/upload',
        {
          method: 'POST',
          body: data, 
        }
      )

      if (!res.ok) {
        const text = await res.text().catch(() => null)
        const errorMsg = text ? JSON.parse(text).message : null
        toast.error(errorMsg ?? 'Something went wrong while uploading.')

      }

      const json = await res.json()
      toast.success('Product uploaded successfully!')

      setFormData({ name: '', description: '', category: '', price: '', nafdac: '' })
      setImageFile(null)
      setPreview(null)
    } catch (err: any) {
      // toast.error(errorMsg ?? 'Something went wrong while uploading.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full px-10 py-8 flex flex-col gap-8">
      <div className="flex justify-start gap-4">
        <button
          type="submit"
          disabled={loading}
          className="bg-sky-500 hover:bg-sky-600 focus:outline-none text-white text-sm font-medium px-4 py-2 rounded disabled:opacity-60"
        >
          {loading ? 'Uploading...' : 'Add Product'}
        </button>
      </div>
            <Toaster position="top-right" reverseOrder={false} />


      <div className="flex flex-col md:flex-row items-start justify-between gap-10 w-full">
        <div className=" w-full md:w-[48%] space-y-4">
          <h2 className="text-xl font-medium">Description</h2>

          <div>
            <label className="text-sm text-gray-700 font-medium">Product Name :</label>
            <input
              type="text"
              name="name"
              placeholder="Hood E"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-1 mt-1 text-sm focus:outline-none"
            />
          </div>

          <div>
            <label className="text-sm text-gray-700 font-medium">Product Description :</label>
            <textarea
              name="description"
              placeholder="Stay warm and stylish..."
              value={formData.description}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-1.5 mt-1 h-20 text-sm resize-none focus:outline-none"
            />
          </div>

          <div>
            <label className="text-sm text-gray-700 font-medium">Product Category :</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-1.5 mt-1 text-sm focus:outline-none"
            >
              <option value="">Select</option>
              <option value="Fashion">Fashion</option>
              <option value="Electronics">Electronics</option>
              <option value="Home">Home</option>
            </select>
          </div>

          <div className="flex items-center gap-3">
            <label className="text-sm text-gray-700 font-medium">Price →</label>
            <div className="flex items-center border border-gray-300 rounded px-2 py-1 w-28 justify-between">
              <span className="text-sm text-gray-700">₦</span>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-16 focus:outline-none text-sm text-gray-700"
              />
              <Plus className="w-4 h-4 text-gray-500" />
            </div>
          </div>
        </div>

        <div className=" w-full md:w-[48%] space-y-3">
          <h2 className="text-xl font-medium">Verification</h2>

          <div>
            <label className="text-sm text-gray-700 font-medium">Upload Image :</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mt-2 block text-sm"
            />
            <div className="w-70 h-70 g-gray-100 mt-3 rounded flex items-center justify-center overflow-hidden border">
              {preview ? (
                <img src={preview} alt="Preview" className="object-cover w-full h-full" />
              ) : (
                <img
                  src="/greenfront.jpg"
                  alt="Placeholder"
                  className="object-cover w-full h-full opacity-70"
                />
              )}
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-700 font-medium mt-4">NAFDAC No : </label>
            <input
              type="text"
              name="nafdac"
              placeholder="094748"
              value={formData.nafdac}
              onChange={handleChange}
              className="border border-gray-300 rounded px-4 py-2 md:ml-2  mt-3 md:mt-0 w-36 text-sm focus:outline-none"
            />
            <p className="text-xs text-gray-500 mt-1">Provide NAFDAC no as labelled in your product</p>
          </div>

          <div className="mt-4">
            <p className="text-sm text-gray-700 mb-2">Create 3D Prototype</p>
            <button
              type="button"
              onClick={() =>  generatemodel(imageFile)}
              className="w-10 h-10 hover:scale-110 bg-sky-500 hover:bg-sky-600 text-white rounded-full flex items-center justify-center text-xs font-semibold"
            >
              <img src="/3d-proto.png" alt="3D" />
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default ProductUploadForm
