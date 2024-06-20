import $ from "jquery";

export function StepFour(props) {
  let arcade = document.querySelector(".arcadevalue")

  return (
    <div className="step4">
      <h1>Finishing up</h1>
      <p className="formdescription">
        Double-check everything looks OK before confirming
      </p>
      <div className="step4card">
        <section className="card1head card1">
          <section>
          <p className="final">Arcade </p>
          <div  className = "arcadeduration">
 (Monthly)
          </div>
          </section>
         <div className="inline inlinearcade">
         <p className="arcade">$</p><div className="arcadevalue">9</div><p className="moarcade">/mo</p>
         </div>
        </section>
        <section className="card1 cardfirst">
          <p className="tag tag1"></p>
          <div className="inline inline1">
         <p className="currency currency1"></p><div className="onlinevalue"></div><p className="mo mo1"></p>
         </div>
        </section>
        <section className="card1 card1second">
          <p className="tag tag2"></p>
          <div className="inline inline2">
         <p className="currency currency2"></p><div className="storagevalue"></div><p className="mo2 mo"></p>
         </div>
        </section>
        <section className="card1 card1last">
          <p className="tag tag3"></p>
          <div className="inline inline3">
         <p className="currency currency3"></p><div className="customvalue"></div><p className="mo mo3"></p>
         </div>
        </section>
      </div>
      <section className="card1">
      <section className="totalcard">
          <p>Total </p>
          <div  className = "totalduration">
 (Per Month)
          </div>
          </section>
        <div className="inline inlinetotal">
         <p className="currency currencytotal">$</p><div className="totalvalue">9</div><p className="mo2 totalmo">/mo</p>
         </div>
      </section>
      <div className="submitbtns">
        <button
          className="goback"
          onClick={() => {
            $(".step4").hide();
            $(".step3").show();
            $(".number4").css("backgroundColor","transparent")
            $(".number4").css("color","white")
            $(".number3").css("backgroundColor","hsl(206, 94%, 87%)")
            $(".number3").css("color","hsl(213, 96%, 18%)")
          }}
        >
          Go Back
        </button>
        <button
          className="confirm nextstep"
          onClick={() => {
            $(".step4").hide();
            $(".summary").show();
            $(".number4").css("backgroundColor","transparent")
            $(".number4").css("color","white")
          }}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
