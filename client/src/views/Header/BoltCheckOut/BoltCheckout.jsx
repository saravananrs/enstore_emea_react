import React, { useEffect } from "react";
import axios from "axios";
export default function BoltCheckoutBtn() {
  useEffect(()=>{
    const sandBox = async() =>{
        await axios.get('https://media-store-stg.enphase.com/static/version1663583777/frontend/Hiddentechies/bizkick/en_US/Magento_Ui/templates/modal/modal-popup.html')
        .then((res)=>{
          console.log(res.data,"data")
        })
        .catch((err)=>{
            console.log(err,"err");
        })
    }
    sandBox()
},[])
useEffect(()=>{
  const sandBoxModal = async() =>{
      await axios.get('https://media-store-stg.enphase.com/static/version1663583777/frontend/Hiddentechies/bizkick/en_US/Magento_Ui/templates/modal/modal-custom.html')
      .then((res)=>{
        console.log(res.data,"data")
      })
      .catch((err)=>{
          console.log(err,"err");
      })
  }
  sandBoxModal()
},[])
  const track = async () => {
      const script = document.createElement("script");
      script.id = "bolt-track";
      script.type = "text/javascript";
      script.src = "https://connect-sandbox.bolt.com/track.js";
      script.async = true;
      script.data_publishable_key =
        "JMO9OVXaOifn.8WBmis_CHml2.091ae19223c17843b08bd920977dd0d4a294024024c3d9b46790dfa5ea04009f";
        script.crossOrigin = "anonymous"

    document.body.appendChild(script)
  };
  const connect = async () => {
    const script = document.createElement("script");
    script.id = "bolt-connect";
    script.type = "text/javascript";
    script.src = "https://connect-sandbox.bolt.com/connect.js";
    script.async = true;
    script.data_publishable_key ="JMO9OVXaOifn.8WBmis_CHml2.091ae19223c17843b08bd920977dd0d4a294024024c3d9b46790dfa5ea04009f";

    document.body.appendChild(script);
  };
  useEffect(() => {
    track()
    connect();
  }, []);
  return (
    <>
      {/* <div className="bolt-checkout-button"></div> */}
      <div class="bolt-checkout-button bolt-multi-step-checkout"></div>
      {/* <div data-tid="instant-bolt-checkout-button">
        <object
          data={`https://connect.bolt.com/v1/checkout_button?publishable_key=JMO9OVXaOifn.UT8x7JrS5pS2.1d7f8ec9a644998c1f49682601f40b024868d8e62c0f93d79b26a3ebbe2dc5f6"`}
        />Check
      </div> */}
    </>
  );
}
