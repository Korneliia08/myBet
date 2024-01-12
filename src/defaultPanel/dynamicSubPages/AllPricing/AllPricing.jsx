import ArrowBack from "../../components/ArrowBack/ArrowBack";
import Moustache from "../../components/Moustache/Moustache";
import { useSelector } from "react-redux";

const AllPricing = () => {
  const data = useSelector(
    (state) => state.stateOfPage.stateOfPage.pricing.subPage,
  );

  return (
    <section className="containerSubPage">
      <h2 className="mainTitle">{data.title}</h2>
      <Moustache />
      <p
        className="describeUnderTitle"
        dangerouslySetInnerHTML={{ __html: data.shortDescription }}
      ></p>
      <ArrowBack />
    </section>
  );
};
export default AllPricing;
