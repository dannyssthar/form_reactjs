import { useForm } from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup"
import { useState } from "react";
import $ from 'jquery'

export function StepOne(props) {
// const [showstep1, setshowstep1] = useState(true);

  const schema = yup.object().shape({
    Name: yup.string().required("THIS FIELD IS REQUIRED"),
    Email: yup.string("INVALID EMAIL").email("INVALID EMAIL").required("THIS FIELD IS REQUIRED"),
    Number: yup.number("INVALID NUMBER").positive("INVALID NUMBER").integer("INVALID NUMBER").required("THIS FIELD IS REQUIRED"),
  });
  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    // e.preventDefault()
    props.setshowstep1(false)
  $(".step2").show()
  $(".number1").css("backgroundColor","transparent")
  $(".number1").css("color","white")
  $(".number2").css("backgroundColor","hsl(206, 94%, 87%)")
  $(".number2").css("color","hsl(213, 96%, 18%)")
  };

  return (
    <div className="formPage">
      <h1>Personal info</h1>
      <p className="formdescription">
        Please provide your name, email address and phone number
      </p>
      <form onSubmit={handleSubmit(onSubmit)
      } >
        <div className="label">
        <p className="handle">Name</p><p className="error">{errors.Name?.message}</p>
        </div>
        <input className="forminput" type="text" {...register("Name")} />
        <div className="label">
        <p className="handle">Email Address</p><p className="error">{errors.Email?.message}</p>
        </div>
        <input className="forminput" type="text" {...register("Email")} />
        <div className="label">
        <p className="handle">Phone Number</p>
        </div>
        <input
        className="forminput"
          type="tel"
          maxLength="15"
          placeholder="eg +234 8114291075"
          {...register("Number")}
        />
     <div className="next">
     <input type="submit" value="Next Step" className="nextstep" />
     </div>
      </form>
    </div>
  );
}
