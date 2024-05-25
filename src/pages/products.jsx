import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";
import Navbar from "../components/Fragments/DashBoard/Nav";
import Footer from "../components/Fragments/Footer";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Makanan Burger",
    description: `lorem ipsum dolor sit amet, consect magna aliquet. magna aliquet magna. Lorem ipsum dolor sit amet, consect.`,
    price: 34.999,
    imageUrl: "/image/no-image.png",
  },
  {
    id: 2,
    name: "Makanan rujak cingur",
    description: `lorem ipsum dolor sit amet,  Lorem ipsum dolor sit amet, consect.`,
    price: 9.999,
    imageUrl: "/image/no-image.png",
  },
  {
    id: 3,
    name: "Minuman jus cendol",
    description: `cendol gak tuuh wkkwak`,
    price: 4.999,
    imageUrl: "/image/no-image.png",
  },
  {
    id: 4,
    name: "Minuman jus cendol 2",
    description: `cendol 2 gak tuuh wkkwak`,
    price: 4.999,
    imageUrl: "/image/no-image.png",
  },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      qty: 1,
    },
  ]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };
  return (
    <>
      <Navbar />
      <div className="flex justify-end h-16 bg-green-300 text-white items-center px-10">
        {email}
        <Button classname="ml-5 bg-midGreen" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-3/4 flex flex-wrap">
          {/* rendering menggunakan pendekatan rendering list */}
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header imageUrl={product.imageUrl} />
              <CardProduct.Body name={product.name}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                id={product.id}
                handleAddToCart={handleAddToCart}
              />
            </CardProduct>
          ))}
        </div>
        {/* buat folder lain lagi */}
        <div className="w-2/6 ">
          <div className="rounded-md shadow-md">
            <h1 className="text-2xl font-bold text-green-800 ml-5 mb-2">
              Cart
            </h1>
            <table className="text-left table-auto border-separate border-spacing-x-2">
              <thead>
                <tr>
                  <th>Poduct</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => {
                  const product = products.find(
                    (product) => product.id === item.id
                  );
                  return (
                    <tr key={item.id}>
                      <td>{product.name}</td>
                      <td>
                        RP{" "}
                        {product.price.toLocaleString("id-ID", {
                          styles: "currency",
                          currency: "IDR",
                        })}
                      </td>
                      <td>{item.qty}</td>
                      <td>
                        RP{" "}
                        {(item.qty * product.price).toLocaleString("id-ID", {
                          styles: "currency",
                          currency: "IDR",
                        })}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        {/* sampai sini agar tidak terlalu banyak */}
      </div>
      <section>
        <Footer />
      </section>
    </>
  );
};

export default ProductsPage;
