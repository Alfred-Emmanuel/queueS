import { Pacifico, Source_Code_Pro } from "next/font/google";

const pacifico = Pacifico({ weight: "400", subsets: ["latin"] });
const source_code_pro_500 = Source_Code_Pro({
  weight: "500",
  subsets: ["latin"],
});
const source_code_pro_700 = Source_Code_Pro({
  weight: "700",
  subsets: ["latin"],
});

export { pacifico, source_code_pro_500, source_code_pro_700 };
