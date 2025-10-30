"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";

const ProductUploadForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    colors: [] as string[],
    nafdac: "",
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>("/greenfront.png");

  // handle text/select input
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // image upload
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  // color picker
  const handleColorAdd = (color: string) => {
    if (!formData.colors.includes(color)) {
      setFormData({ ...formData, colors: [...formData.colors, color] });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    alert("Submitted!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full px-10 py-8 flex flex-col gap-8"
    >
      {/* Header Button */}
      <div className="flex justify-start">
        <button
          type="submit"
          className="bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium px-4 py-2 rounded"
        >
          Add New Product
        </button>
      </div>

      {/* Main Form Sections */}
      <div className="flex items-start justify-between w-full">
        {/* Left Section */}
        <div className="w-[48%] space-y-4">
          <h2 className="text-lg font-semibold">Description</h2>

          <div>
            <label className="text-sm text-gray-700 font-medium">
              Product Name :
            </label>
            <input
              type="text"
              name="name"
              placeholder="Hood E"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 focus:outline-none rounded px-3 py-1 mt-1 text-sm"
            />
          </div>

          <div>
            <label className="text-sm text-gray-700 font-medium">
              Product Description :
            </label>
            <textarea
              name="description"
              placeholder="Stay warm and stylish with this soft, premium cotton-blend hoodie..."
              value={formData.description}
              onChange={handleChange}
              className="w-full border border-gray-300 focus:outline-none rounded px-3 py-1.5 mt-1 h-20 text-sm resize-none"
            />
          </div>

          <div>
            <label className="text-sm text-gray-700 font-medium">
              Product Category :
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border border-gray-300 focus:outline-none rounded px-3 py-1.5 mt-1 text-sm"
            >
              <option value="">Select</option>
              <option value="Fashion">Fashion</option>
              <option value="Electronics">Electronics</option>
              <option value="Home">Home</option>
            </select>
          </div>

          <div className="flex items-center gap-3">
            <label className="text-sm text-gray-700 font-medium">Price →</label>
            <div className="flex items-center border border-gray-300 focus:outline-none rounded px-2 py-1 w-28 justify-between">
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

          {/* Available Colors */}
          <div>
            <label className="text-sm text-gray-700 font-medium">
              Available Colors :
            </label>
            <div className="flex items-center gap-2 mt-1">
              {["#f00", "#007bff", "#000"].map((color) => (
                <button
                  key={color}
                  type="button"
                  className="w-5 h-5 rounded-full border border-gray-300 focus:outline-none"
                  style={{ backgroundColor: color }}
                  onClick={() => handleColorAdd(color)}
                ></button>
              ))}
              <button
                type="button"
                onClick={() => alert("Add more colors")}
                className="w-5 h-5 rounded-full border border-gray-400 flex items-center justify-center text-gray-600"
              >
                <Plus className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-[48%] space-y-3">
          <h2 className="text-2xl font-medium">Verification</h2>

          <div>
            <label className="text-sm text-gray-700 font-medium">
              Upload Image :
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mt-2 block text-sm"
            />
            <div className="w-40 h-40 bg-gray-100 mt-3 rounded flex items-center justify-center overflow-hidden border">
              <img
                src={preview || "/greenfront.png"} 
                alt="Preview"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-700 font-medium">
              NAFDAC No :
            </label>
            <input
              type="text"
              name="nafdac"
              placeholder="094748"
              value={formData.nafdac}
              onChange={handleChange}
              className="border border-gray-300 focus:outline-none rounded px-2 py-1 ml-2 w-36 text-sm"
            />
            <p className="text-xs text-gray-500 mt-1">
              Provide NAFDAC no as labelled in your product
            </p>
          </div>

          <div className="mt-4">
            <p className="text-sm text-gray-700 mb-2">Create 3D Prototype</p>
            <button
              type="button"
              className="w-10 h-10 bg-sky-500 hover:bg-sky-600 text-white rounded-full flex items-center justify-center text-xs font-semibold"
            >
             <img src="/3d-proto.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ProductUploadForm;
