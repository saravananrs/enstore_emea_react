import React, { useEffect } from "react";

export default function BoltCheckoutBtn() {
   
  // const track = async () => {
  //     const script = document.createElement("script");
  //     script.id = "bolt-track";
  //     script.type = "text/javascript";
  //     script.src = "https://connect-sandbox.bolt.com/track.js";
  //     script.async = true;
  //     script.data_publishable_key =
  //       "JMO9OVXaOifn.UT8x7JrS5pS2.1d7f8ec9a644998c1f49682601f40b024868d8e62c0f93d79b26a3ebbe2dc5f6";
  //       script.crossOrigin = "anonymous"

  //   document.body.appendChild(script)
  // };
  const connect = async () => {
      const script = document.createElement("script");
      script.id = "bolt-connect";
      script.type = "text/javascript";
      script.src = "https://connect.bolt.com/connect.js";
      script.async = true;
      script.data_publishable_Key =
        "JMO9OVXaOifn.UT8x7JrS5pS2.1d7f8ec9a644998c1f49682601f40b024868d8e62c0f93d79b26a3ebbe2dc5f6";

    document.body.appendChild(script)
  };
  useEffect(()=>{
    // track()
    connect()
  },[])
  return (
    <>
      <div className="bolt-checkout-button"></div>
      {/* <div data-tid="instant-bolt-checkout-button">
        <object
          data={`https://connect.bolt.com/v1/checkout_button?publishable_key=JMO9OVXaOifn.UT8x7JrS5pS2.1d7f8ec9a644998c1f49682601f40b024868d8e62c0f93d79b26a3ebbe2dc5f6"`}
        />Check
      </div> */}
    </>
  );
}
