// SVG import
import imagePV from "../assets/images/PV-generique.svg";
import imagePacAE from "../assets/images/PAC Air eau generique.svg";
import imageCET from "../assets/images/CET-generique.svg";
import imageAutreProduit from "../assets/images/Autre produit.svg";
import imageVMC from "../assets/images/VMC.svg";
import imageISOComble from "../assets/images/Isolation-combles-perdus.svg";
import imageITE from "../assets/images/Isolation-murs-exterieurs.svg";
import imageISORampants from "../assets/images/Isolation_combles-amenages.svg";
import imageISOPlancher from "../assets/images/Isolation-plancher-bas.svg";

export const productImageDictionnary = ({
  product_type,
}: {
  product_type: string;
}) => {
  switch (product_type) {
    case "PV":
      return imagePV;
    case "PACAIRO":
      return imagePacAE;
    case "CET":
      return imageCET;
    case "VMC":
      return imageVMC;
    case "ITE":
      return imageITE;
    case "ISO":
      return imageISOComble;
    case "ISOA":
      return imageISORampants;
    case "ISOP":
      return imageISOPlancher;
    case "AUTRE":
      return imageAutreProduit;
    default:
      return imageAutreProduit;
  }
};
