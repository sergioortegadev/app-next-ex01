import type { Metadata } from "next";

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Produc: ${params.productId}`,
    description: `Description of product: ${params.productId}`,
  };
};

type Props = {
  params: {
    productId: string;
  };
};

const ProductDetail = ({ params }: Props) => {
  return (
    <>
      <h1>Product:</h1>
      <code>{params.productId}</code>
      <img src="https://picsum.photos/200" alt="foto random" />
      <a href="/product">Volver a product</a>
    </>
  );
};

export default ProductDetail;
