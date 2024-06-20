import $ from "jquery";
import { StepTwo } from "./step2";
import { StepFour } from "./step4";

export function StepThree() {
  const online = document.querySelector(".onlinevalue")
  const storage = document.querySelector(".storagevalue")
  const custom = document.querySelector(".customvalue")
  const total = document.querySelector(".totalvalue")
  // const math = +check.textContent + +check.textContent

  // console.log(+arcade.textContent)

  const handleChange1 = (event) => {
    if (event.target.checked) {
      $(".tag1").text("Online Service")
      $(".inline1").text(`${document.querySelector(".currency1").textContent}${document.querySelector(".onlinevalue").textContent}${document.querySelector(".mo1").textContent} `)
    $(".add1").css("backgroundColor","hsl(217, 100%, 97%)")
    $(".totalvalue").text(+total.textContent + +online.textContent)
    } else {
      $(".inline1").text("")
      $(".tag1").text("")
      $(".add1").css("backgroundColor","white")
      $(".totalvalue").text(+total.textContent - +online.textContent)
    }
  };
  const handleChange2 = (event) => {
    if (event.target.checked) {
    $(".totalvalue").text(+total.textContent + +storage.textContent)
      $(".tag2").text("Larger storage")
      $(".inline2").text(`${document.querySelector(".currency2").textContent}${document.querySelector(".storagevalue").textContent}${document.querySelector(".mo2").textContent} `)
      $(".add2").css("backgroundColor","hsl(217, 100%, 97%)")
    } else {
      $(".totalvalue").text(+total.textContent - +storage.textContent)
      $(".inline2").text("")
      $(".tag2").text("")
      $(".add2").css("backgroundColor","white")
    }
  };
  const handleChange3 = (event) => {
    if (event.target.checked) {
      $(".totalvalue").text(+total.textContent + +custom.textContent)
      $(".tag3").text("Customizable profile")
      $(".inline3").text(`${document.querySelector(".currency3").textContent}${document.querySelector(".customvalue").textContent}${document.querySelector(".mo3").textContent} `)
      $(".add3").css("backgroundColor","hsl(217, 100%, 97%)")
    } else {
      $(".totalvalue").text(+total.textContent - +custom.textContent)
      $(".tag3").text("")
      $(".inline3").text("")
      $(".add3").css("backgroundColor","white")
    }
  };
  return (
    <div className="step3">
      <h1>Pick Add-Ons</h1>
      <p className="formdescription">
        Add-ons helps enhance your gaming experience
      </p>
      <section className="addons add1">
        <div className="addonsLabel">
          <input className="addOnCheckbox" onChange={handleChange1} type="checkbox" />
          <section>
            <p>Online service</p>
            <p>Access to multiplayer games</p>
          </section>
        </div>
        <div className="inline">
         <>+</><p className="currency currency1">$</p><div className="onlinevalue">1</div><p className="mo mo1">/mo</p>
         </div>
      </section>
      <section className="addons add2">
        <div className="addonsLabel">
          <input className="addOnCheckbox" onChange={handleChange2} type="checkbox" />
          <section>
            <p>Larger storage</p>
            <p>Extra 1TB of cloud save</p>
          </section>
        </div>
        <div className="inline">
         <>+</><p className="currency currency2">$</p><div className="storagevalue">2</div><p className="mo mo2">/mo</p>
         </div>
      </section>
      <section className="addons add3">
        <div className="addonsLabel">
          <input className="addOnCheckbox" onChange={handleChange3} type="checkbox" />
          <section>
            <p>Customizable Profile</p>
            <p>Custom team on your profile</p>
          </section>
        </div>
        <div className="inline">
         <>+</><p className="currency currency3">$</p><div className="customvalue">2</div><p className="mo mo3">/mo</p>
         </div>
      </section>
      <div className="submitbtns">
        <button className="goback"
        onClick={() => {
          $(".step3").hide()
  $(".step2").show()
  $(".number3").css("backgroundColor","transparent")
  $(".number3").css("color","white")
  $(".number2").css("backgroundColor","hsl(206, 94%, 87%)")
  $(".number2").css("color","hsl(213, 96%, 18%)")
          }}
        >Go Back</button>
        <button className="nextstep"
          onClick={() => {
            // props.setshowstep3(false);
            $(".step3").hide();
            $(".step4").show();
            $(".number3").css("backgroundColor","transparent")
            $(".number3").css("color","white")
            $(".number4").css("backgroundColor","hsl(206, 94%, 87%)")
            $(".number4").css("color","hsl(213, 96%, 18%)")
          }}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
