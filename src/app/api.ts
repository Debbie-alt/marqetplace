import { fileToBase64 } from "./helpers";

export const fetchProducts = async () => {
  const res = await fetch(
    "https://marqet-place-api.onrender.com/api/v1/products?page=1&limit=10"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();
  return data?.data?.data ?? [];
};

export const generatemodel = async (imageFile:File | null)=> {
    const API_KEY = process.env.MESY_API_KEY
   const base64 = await fileToBase64(imageFile);

const headers = { Authorization: `Bearer ${API_KEY}` };
const payload = {
  image_url: base64,
  enable_pbr: true,
  should_remesh: true,
  should_texture: true,
  save_pre_remeshed_model: true
};

try {
  const response = await fetch('https://api.meshy.ai/openapi/v1/image-to-3d', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: JSON.stringify(payload)
  });

  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
}


