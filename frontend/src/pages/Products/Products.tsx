// Libraries imports
import { IProduct } from "../../interfaces/interfaces";

//Style import
import "./Products.scss";

// Components imports
import { CTAButton } from "../../components/CTAButton/CTAButton";
import { Layout } from "../../components/Layout/Layout";

// Services imports
import { useDisconnectApp } from "../../services/useDisconnectApp";
import { useGetProducts } from "../../services/useGetProducts";
import { productImageDictionnary } from "../../services/productImageDictionnary";
import { productNameDictionnary} from "../../services/productNameDictionnary";

//Other imports
import { useAppSelector } from "../../redux/store/hook";

export const Products = () => {
  const { disconnectApp } = useDisconnectApp();
  const { data: products, isLoading, error } = useGetProducts();
  const { userAuthInfo } = useAppSelector((states) => states);

  const formatProductInfo = (product: IProduct) => {
    const info: string[] = [];
    if (product.characteristics) {
      for (const [key, value] of Object.entries(product.characteristics)) {
        info.push(`${key}: ${value}`);
      }
    }
    if (product.helps) {
      for (const [key, value] of Object.entries(product.helps)) {
        info.push(`${key}: ${value} €`);
      }
    }
    return info;
  };

  return (
    <Layout>
      <div className="Products">
        <div className="TitleAndButton">
          <div>
            <p>{userAuthInfo.email}</p>
            <h1>Mon projet de rénovation</h1>
          </div>
          <CTAButton name="Se déconnecter" onClick={disconnectApp} size="M" />
        </div>
        <div className="GroupCard">
          {isLoading ? <p>Loading...</p> : error ? <p>Error: {error instanceof Error ? error.message : "An unknown error occurred"}</p> : products && Array.isArray(products) ? products.map((product: IProduct) => (
            <div key={product.id} className="ProductCard">
              <img className="ProductImage" src={productImageDictionnary({ product_type: product.category })} alt={productNameDictionnary({ product_type: product.name })} />
              <div className="ProductInfo">
                <h2 className="ProductName">{product.name}</h2>
                {formatProductInfo(product).map((info, index) => (
                  <p key={index} className="ProductCharacteristic">{info}</p>
                ))}
                <div>
                  <p className="ProductPrice">{product.price} €</p>
                  {product.helps && (
                    <p className="ProductHelps">
                      Aides: {Object.values(product.helps).reduce((a: number, b: number) => a + b, 0)} €
                    </p>
                  )}
                </div>
              </div>
            </div>
          )) : null}
        </div>
      </div>
    </Layout>
  );
};
