import React from "react";
import { useState, useEffect } from "react";
import TextInputFiled from "../general/TextInputFiled";
import Toggle_Bttn from "../general/Toggle_Bttn";

const Logistics_input_template3 = () => {
  const [toggle, settoggle] = useState(false);

  //   function to toggle
  const change_the_virtual_toggle = () => {
    settoggle(!toggle);
  };

  //   usestate to show toggle result
  useEffect(() => {
    const VIRTUAL_hidden_div = document.querySelector(".VD");
    if (toggle === true) {
        VIRTUAL_hidden_div.classList.remove("VD_HIDDEN_DIV");
    } else {
        VIRTUAL_hidden_div.classList.add("VD_HIDDEN_DIV");
    }
  }, [toggle]);
  return (
    <div className="virtual_logistics_outer_div">
      {/* heaing  */}
      <div className="virtual_logistics_heading">Virtual Logistics</div>

      {/* sub heading  */}
      <div className="virtual_text_and_toggle_bttn">
        <i class="fa-solid fa-circle-question"></i>
        <div className="asking_for_vcm">
          Do you require VCM(Virtual case management)?
        </div>

        <Toggle_Bttn />
      </div>

      {/* first row  */}
      <div className="selecting_partcula_vcm_div">
        <i class="fa-solid fa-circle-question"></i>
        <TextInputFiled
          labelheading={"is there a particular VCM you want to work with?"}
          placeholder_text={"VCM's name"}
        />
      </div>

      {/* <second row  */}
      <div className="second_row_vcm_div">
        <i class="fa-solid fa-circle-question"></i>
        <TextInputFiled
          labelheading={"Select a Virtual platform"}
          placeholder_text={"Zoom"}
        />

        <TextInputFiled
          labelheading={"Number of virtual breakout rooms"}
          placeholder_text={""}
        />
      </div>

      {/* third row , asking for , do you want us to provide dms? */}
      <div className="virtual_text_and_toggle_bttn">
        <i class="fa-solid fa-circle-question"></i>
        <div className="asking_for_vcm">
          Do you need us to provide <br />
          document management services?
        </div>

        {/* toggle button  */}
        <div>
          <label class="toggle">
            <input type="checkbox" onChange={change_the_virtual_toggle} />
            <span class="slider"></span>
            <span class="label-text yes">Yes</span>
            <span class="label-text no">No</span>
          </label>
        </div>
      </div>

      {/* initiaaly hidden div  */}
      <div className="virtual_form_div">
        <i class="fa-solid fa-circle-question"></i>
        <TextInputFiled
          labelheading={
            "Do you have any special accomodations for your  boooking that out I.T team can look prior to the startdate?"
          }
          placeholder_text={"input"}
        />

        <div className="VD VD_HIDDEN_DIV">
        <div className="recorded">Would you like that your matter to be recorded?</div>
        <div className="tgglv"> <Toggle_Bttn/> </div>
        
      </div>

        </div>
        
    </div>
  );
};

export default Logistics_input_template3;
