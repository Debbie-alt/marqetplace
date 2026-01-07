const fetchProducts = async () => {
  const res = await fetch(
    "https://marqet-place-api.onrender.com/api/v1/products?page=1&limit=10"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();
  return data?.data?.data ?? [];
};
