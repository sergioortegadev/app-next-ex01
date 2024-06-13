import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Listado de Productos",
  description: "Prod section",
};

const Product = () => {
  return (
    <>
      <h1>Productos completos</h1>
      <img src="https://picsum.photos/200" alt="foto random" />
      <a href="product/23">
        <h3>Prod 23</h3>
      </a>
      <img src="https://picsum.photos/200" alt="foto random" />
      <a href="product/24">
        <h3>Prod 24</h3>
      </a>
      <img src="https://picsum.photos/200" alt="foto random" />

      <a href="product/25">
        <h3>Prod 25</h3>
      </a>
      <img src="https://picsum.photos/200" alt="foto random" />
    </>
  );
};
export default Product;
