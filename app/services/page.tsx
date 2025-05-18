import CtaServices from "./CtaServices";
import ExploreServices from "./ExploreServices";
import FAQ from "./FAQ";
import FreeClassCard from "./FreeClassCard";
import ServiceCard from "./ServiceCard";

const page = () => {
  return (
    <>
      <CtaServices></CtaServices>
      <ServiceCard variants="image"></ServiceCard>
      <ServiceCard variants="icon"></ServiceCard>
      <ServiceCard variants="text-only"></ServiceCard>
      <ExploreServices></ExploreServices>
      <FreeClassCard></FreeClassCard>
      <FAQ></FAQ>
    </>
  );
};

export default page;
