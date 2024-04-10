//Style import
import "./Products.scss";

// Components imports
import { CTAButton } from "../../components/CTAButton/CTAButton";
import { Layout } from "../../components/Layout/Layout";

// Services imports
import { useDisconnectApp } from "../../services/useDisconnectApp";

export const Products = () => {
  const { disconnectApp } = useDisconnectApp();

  return (
    <Layout>
      <div className="Products">
        <h1>Mon projet de rénovation</h1>
        <CTAButton name="Se déconnecter" onClick={disconnectApp} size="M" />
      </div>
    </Layout>
  );
};
