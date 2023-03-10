import style from "./PricingHomepage.module.css";
import { usePricingContext } from "../../context/pricingContext";

export function PricingHomepage() {
  const data = usePricingContext();
  return (
    <div className={style.pricingOuter}>
      <div className={style.title}>
        <h1>Cost of Minimally Invasive Bunion Surgery</h1>
      </div>
      <div className={style.infoCont}>
        <div className={style.info}>
          <h3>
            We offer our patients a clear outline of expected fees following a
            consultation and X-rays. Here you can find our typical approximate
            procedure costs, excluding postoperative X-rays.
          </h3>
          <h3>
            Are you planning on using medical insurance? Mr Kaser Nazir is
            covered by all major insurance companies. Contact your insurance
            provider to request authorisation for a consultation and X-ray, our
            team will assist you with all required information to authorise the
            procedure following your appointment.
          </h3>
        </div>
        <div className={style.pricing}>
          <div className={style.price}>
            Consultation <br /> £200
          </div>
          <div className={style.price}>
            X-ray per foot <br /> £100
          </div>
          <div className={style.price}>
            One foot under sedation <br />
            {data
              ? "£" + Math.round(data?.unilateralMinimalBunionSedation)
              : "loading"}
          </div>
          <div className={style.price}>
            Both feet under sedation <br />
            {data
              ? "£" + Math.round(data?.bilateralMinimalBunionSedation)
              : "loading"}
          </div>
        </div>
      </div>
    </div>
  );
}
