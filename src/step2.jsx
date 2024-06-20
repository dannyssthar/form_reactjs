import arcade from "./images/icon-arcade.svg";
import pro from "./images/icon-pro.svg";
import Advanced from "./images/icon-advanced.svg";
import $ from "jquery";
import { MDBSwitch } from "mdb-react-ui-kit";
import { StepThree } from "./step3";
import { useState } from "react";

export function StepTwo(props) {
const [arcadestate, setarcadestate] = useState(9)
const [advancedstate, setadvancedstate] = useState(12)
const [prostate, setprostate] = useState(15)

  const handleChange = (event) => {
    if (event.target.checked) {
      // ARCADE YEARLY SUBSCRIPTION///////////////////////////
      setarcadestate(90)
      $(".arcadevalue").text(
        "90"
      );
      $(".amount1").text("$90/year");
      $(".inline1").text("");
      $(".headarcadevalue").text("90");
      $(".arcadeduration").text("(Yearly)");

      // ADVANCED YEARLY SUBSCRIPTION///////////////////////////
      setadvancedstate(120)
      $(".amount2").text("$120/year");
      $(".inline2").text("");
      $(".headadvancedvalue").text("120");

      // PRO YEARLY SUBSCRIPTION///////////////////////////
      setprostate(150)
      $(".amount3").text("$150/year");
      $(".inline3").text("");
      $(".headprovalue").text("120");
   
  
      $(".currency").text("$");
      $(".onlinevalue").text("10");
      $(".storagevalue").text("20");
      $(".customvalue").text("20");
     
// TOTAL///////////////////////////////
      $(".totalduration").text("(Per Year)");
      $(".totalmo").text("/year");
      $(".mo").text("/year");
      $(".moarcade").text("/year");
      $(".totalvalue").text("90");
    } else {
      // ARCADE MONTHLY SUBSCRIPTION///////////////////////////
            setarcadestate(9)
            $(".amount1").text("$9/mo");
            $(".arcadevalue").text("9");
            $(".arcadeduration").text("(Monthly)");
      // ADVANCED MONTHLY SUBSCRIPTION///////////////////////////
      $(".amount2").text("$12/mo");
      setadvancedstate(12)
     // PRO MONTHLY SUBSCRIPTION///////////////////////////
     $(".amount3").text("$15/mo");
     setprostate(15)
    
    
      $(".customvalue").text("2");
      $(".currency3").text("$");
      $(".onlinevalue").text("1");
      $(".storagevalue").text("2");
      $(".mo").text("/mo");

      // TOTAL/////////////////////////
      $(".totalduration").text("(Per Month)");
      $(".totalvalue").text("9");
      $(".totalmo").text("/mo");
    }
  };

  return (
    <div className="step2">
      <h1>Select Your PLan</h1>
      <p className="formdescription">
        You have the option of monthly or yearly billing
      </p>
      <div className="cards">
        <section
          className="card cardone"
          onClick={() => {
          //  ACTIVATE ARCADE SUBSCRIPTION/////////////////////////////
            $(".cardone").css("backgroundColor", "hsl(217, 100%, 97%)");
            $(".card2").css("backgroundColor", "white");
            $(".card3").css("backgroundColor", "white");
            $(".final").text(
              `${document.querySelector(".headarcade").textContent}`
            );
            $(".arcadevalue").text(
              `${arcadestate}`
            );
            console.log(arcadestate)
            $(".totalvalue").text(
              `${arcadestate}`
            );
          }}
        >
          <img src={arcade} alt="arcade" />
          <p className="head headarcade">Arcade</p>
          <div className="inline amount amount1">
            <p className="arcadecurrency">$</p>
            <div className="headarcadevalue">9</div>
            <p className="moarcade">/mo</p>
          </div>
        </section>
        <section
          className="card card2"
          onClick={() => {
            //  ACTIVATE ADVANCED SUBSCRIPTION/////////////////////////////
            $(".card2").css("backgroundColor", "hsl(217, 100%, 97%)");
            $(".cardone").css("backgroundColor", "white");
            $(".card3").css("backgroundColor", "white");
            $(".final").text(
              document.querySelector(".headadvanced").textContent
            );
            $(".arcadevalue").text(
              `${advancedstate}`
            );
            $(".totalvalue").text(`${advancedstate}`)
          }}
        >
          <img src={Advanced} alt="advanced" />
          <p className="head headadvanced">Advanced</p>
          <div className="inline amount amount2">
            <p className="advancedcurrency">$</p>
            <div className="headadvancedvalue">12</div>
            <p className="moadvanced">/mo</p>
          </div>
        </section>
        <section
          className="card card3"
          onClick={() => {
            //  ACTIVATE PRO SUBSCRIPTION/////////////////////////////
            $(".card3").css("backgroundColor", "hsl(217, 100%, 97%)");
            $(".card2").css("backgroundColor", "white");
            $(".cardone").css("backgroundColor", "white");
            $(".final").text(
              `${document.querySelector(".headpro").textContent}`
            );
            $(".arcadevalue").text(
              `${prostate}`
            );
            $(".totalvalue").text(`${prostate}`);
          }}
        >
          <img src={pro} alt="pro" />
          <p className="head headpro">Pro</p>
          <div className="inline amount amount3">
            <p className="procurrency">$</p>
            <div className="headprovalue">15</div>
            <p className="mopro">/mo</p>
          </div>
        </section>
      </div>
      <div className="planDuration">
        <p>Monthly </p>
        <MDBSwitch
          type="checkbox"
          onChange={handleChange}
          className="checktoggle"
          id="flexSwitchCheckDefault"
        />
        <p>yearly</p>
      </div>
      <div className="submitbtns">
        <button
          className="goback"
          onClick={() => {
            props.setshowstep1(true);
            $(".step2").hide();
            $(".number2").css("backgroundColor", "transparent");
            $(".number2").css("color", "white");
            $(".number1").css("backgroundColor", "hsl(206, 94%, 87%)");
            $(".number1").css("color", "hsl(213, 96%, 18%)");
          }}
        >
          Go Back
        </button>
        <button className="nextstep"
          onClick={() => {
            $(".step2").hide();
            $(".step3").show();
            $(".number2").css("backgroundColor", "transparent");
            $(".number2").css("color", "white");
            $(".number3").css("backgroundColor", "hsl(206, 94%, 87%)");
            $(".number3").css("color", "hsl(213, 96%, 18%)");
          }}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
