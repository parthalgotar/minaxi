import { useState, useEffect } from "react";

export default function Admin() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // Load from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(stored);
  }, []);

  // Save to localStorage
  const saveToStorage = (data) => {
    localStorage.setItem("products", JSON.stringify(data));
  };

  // Add Product
  const addProduct = () => {
    if (!name || !price) return;

    const newProducts = [
      ...products,
      { id: Date.now(), name, price }
    ];

    setProducts(newProducts);
    saveToStorage(newProducts);

    setName("");
    setPrice("");
  };

  // Delete Product
  const deleteProduct = (id) => {
    const filtered = products.filter((p) => p.id !== id);
    setProducts(filtered);
    saveToStorage(filtered);
  };

  return (
    <section className="p-5 bg-light">
      <h2 className="text-center mb-4">Admin Panel</h2>

      {/* ADD PRODUCT */}
      <div className="row mb-4">
        <div className="col-md-5">
          <input
            className="form-control"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="col-md-5">
          <input
            className="form-control"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="col-md-2">
          <button className="btn btn-success w-100" onClick={addProduct}>
            Add
          </button>
        </div>
      </div>

      {/* PRODUCT LIST */}
      <div className="row">
        {products.map((p) => (
          <div key={p.id} className="col-md-3 mb-3">
            <div className="card p-3 shadow-sm">
              <h5>{p.name}</h5>
              <p>{p.price}</p>

              <button
                className="btn btn-danger btn-sm"
                onClick={() => deleteProduct(p.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}