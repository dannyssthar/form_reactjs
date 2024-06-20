import summary from "./images/icon-thank-you.svg"

export function Summary() {
    return ( <div className="summary">
<img src= {summary} alt = "summary"/>
<h1> Thank you!</h1>
<p>
  Thanks for confirming your subscription! We hope you have fun 
  using our platform. If you ever need support, please feel free 
  to email us at support@loremgaming.com.</p>
    </div> );
}

