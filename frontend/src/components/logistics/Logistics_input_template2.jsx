import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import TextInputFiled from "../general/TextInputFiled";
import Toggle_Bttn from "../general/Toggle_Bttn";

const Logistics_input_template2 = () => {

    // usestate to toggle 
  const [toggle, settoggle] = useState(false);

//   function to toggle 
  const change_the_toggle = () => {
    settoggle(!toggle);
  };

//   usestate to show toggle result 
  useEffect(() => {
    const hidden_div = document.querySelector("#this_hiiden_div");
    if (toggle === true) {
      hidden_div.classList.remove("initially_set_hidden");
    } else {
      hidden_div.classList.add("initially_set_hidden");
    }
  }, [toggle]);

  return (
    <div className="tribunal_secretary_div">
      <div className="heading_rows">
        <div className="heading">Tribunal Secretary</div>

        {/* toggle button  */}
        <div>
          <label class="toggle" >
            <input type="checkbox" onChange={change_the_toggle} />
            <span class="slider" ></span>
            <span class="label-text yes">Yes</span>
            <span class="label-text no">No</span>
          </label>
        </div>

      </div>

      <div className="tribunal_secretary_input_div">
        {/* row 1 initially hidden , will be displayed when toggle to yes  */}

        
        <div
          className="logistics_rows initially_set_hidden"
          id="this_hiiden_div"
        >
          <TextInputFiled
            labelheading={""}
            placeholder_text={"tribunal secretary name"}
          />

          <div className="dot_dot_dot">...</div>
          <TextInputFiled labelheading={""} placeholder_text={""} />
        </div>

        {/* row 2 */}
        <div className="logistics_rows">
          <TextInputFiled
            labelheading={"Witness(es)"}
            placeholder_text={"Wittness name"}
          />
          <div className="dot_dot_dot">...</div>
          <TextInputFiled labelheading={"."} placeholder_text={"email"} />
        </div>

        {/* row3 */}
        <div className="logistics_rows">
          <div className="plus_sign">+</div>
          <TextInputFiled
            labelheading={""}
            placeholder_text={"An additional witness"}
          />

          <div className="dot_dot_dot">...</div>
          <TextInputFiled labelheading={""} placeholder_text={""} />
        </div>
      </div>
    </div>
  );
};

export default Logistics_input_template2;
