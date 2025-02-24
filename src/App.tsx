import { ToastContainer } from "react-toastify";
import Cart from "./components/Cart";
import CartProvider from "./components/Contexts/CartContext/CartProvider";
import ModalProvider from "./components/Contexts/ModalContext/ModalProvider";
import Products from "./components/Products";

function App() {
  return (
    <CartProvider>
      <ModalProvider>
        <ToastContainer position="top-center" autoClose={1000} />
        <main className="flex flex-col xl:flex-row gap-8 justify-center xl:py-10 relative">
          {/* Productos */}
          <section className="flex flex-col gap-8 xl:w-[70rem]">
            <h1 className="font-bold text-4xl text-Rose-900 xl:text-5xl">
              Desserts
            </h1>
            <div className="flex flex-col md:grid md:grid-cols-3 gap-y-5 gap-x-7 md:gap-y-8">
              <Products />
            </div>
          </section>

          {/* Carrito */}
          <section className="xl:w-[25rem]">
            <Cart />
          </section>
        </main>
      </ModalProvider>
    </CartProvider>
  );
}

export default App;
