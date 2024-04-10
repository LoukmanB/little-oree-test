// images import

export const productNameDictionnary = ({
  product_type,
}: {
  product_type: string;
}) => {
  const productDictionnary: { [key: string]: string } = {
    PV: "Photovoltaïque",
    PACAIRO: "Pompe à chaleur Air/Eau",
    PACAIRAIR: "Pompe à chaleur Air/Air",
    CET: "Chauffe eau thermodynamique",
    BALLON: "Chauffe eau thermodynamique",
    ITE: "Isolation thermique par l'extérieur",
    ISO: "Isolation combles perdus",
    ISOA: "Isolation des rampants",
    ISOP: "Isolation planchers bas",
    ZATTENTE: "Chaudière à granulés",
    VMC: "VMC",
    AUTRE: "Produit libre",
  };

  return productDictionnary?.[product_type] || product_type;
};
