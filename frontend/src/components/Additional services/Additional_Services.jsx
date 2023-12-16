import React, { useState } from "react";
import TextInputFiled from "../general/TextInputFiled";
import Toggle_Bttn from "../general/Toggle_Bttn";

const Additional_Services = () => {
  const [multilingual, setmultilingual] = useState(false);

  const [toggle1, settoggle1] = useState(false);

  const [toggle5, settoggle5] = useState(false);

  const [toggle2, settoggle2] = useState(false);

  const change_the_additional_services_toggle2 = () => {
    settoggle2(!toggle2);
  };
  // this wll change the multilingugal
  const change_the_multilingual = () => {
    setmultilingual(!multilingual);
  };
  const change_the_additional_services_toggle1 = () => {
    settoggle1(!toggle1);
  };

  const change_the_additional_services_toggle5 = () => {
    settoggle5(!toggle5);
  };
  return (
    <div className="outer_div_for_AS">
      {/* div 1  */}
      <div className="AS_columns">
        <div className="AS_HEADING">Court Reporting</div>

        <div className="heading_and_toggle">
          <div className="AS_sub_heading">
            Will this matter plan to have a <br />
            Court reporter?
          </div>

          {/* toggle bttn1 */}
          <div>
            <label class="toggle">
              <input
                type="checkbox"
                onChange={change_the_additional_services_toggle1}
              />
              <span class="slider"></span>
              <span class="label-text yes">Yes</span>
              <span class="label-text no">No</span>
            </label>
          </div>
        </div>
      </div>

      {/* this is initially hidden , will be displayed when toggle1 is yess  */}
      {toggle1 && (
        <div>
          {/* row 1 */}
          <div className="hidden_row_1">
            <div className="AS_sub_heading">
              Would you like an arbitration place <br />
              Court Reporter ?
            </div>

            {/* toggle bttn5 */}
            <div>
              <label class="toggle">
                <input
                  type="checkbox"
                  onChange={change_the_additional_services_toggle5}
                />
                <span class="slider"></span>
                <span class="label-text yes">Yes</span>
                <span class="label-text no">No</span>
              </label>
            </div>
          </div>

          {/* this is also initially hidden will be displayed when toggle5 above is yes */}
          {toggle5 && (
            <div className="textfield1">
              <i class="fa-solid fa-circle-question"></i>
              <TextInputFiled
                labelheading={
                  "Is there a specific Arbitration place court reporter you prefer?"
                }
                placeholder_text={"select AP Court Reporter"}
              />
            </div>
          )}

          {/* row3 */}
          <div className="hidden_row_1">
            <div className="AS_sub_heading">Will a transcript be required?</div>

            {/* toggle bttn5 */}
            <Toggle_Bttn />
          </div>

          {/* row 4  */}
          <div className="textfield1">
            <i class="fa-solid fa-circle-question"></i>
            <TextInputFiled
              labelheading={"Turnaround time?"}
              placeholder_text={"Standard"}
            />
          </div>

          {/* row 5 */}
          <div className="hidden_row_1">
            <i class="fa-solid fa-circle-question"></i>

            <div className="AS_sub_heading">Multilingual?</div>

            {/* toggle bttn5 */}
            <div>
              <label class="toggle">
                <input type="checkbox" onChange={change_the_multilingual} />
                <span class="slider"></span>
                <span class="label-text yes">Yes</span>
                <span class="label-text no">No</span>
              </label>
            </div>
          </div>

          {/* this field will be displayed when multilingugal is on  */}
          {multilingual && (
            <div className="select_languages">
              <TextInputFiled
                labelheading={
                  "please list the non-english languages you would like accomodated (seperated by comma)"
                }
                placeholder_text={"input"}
              />
            </div>
          )}

          {/* row 6 */}
          <div className="textfield1">
            <i class="fa-solid fa-circle-question"></i>
            <TextInputFiled
              labelheading={"Daily Rough Draft"}
              placeholder_text={"i dont know"}
            />
          </div>

          {/* row 7  */}
          <div className="textfield1">
            <i class="fa-solid fa-circle-question"></i>
            <TextInputFiled
              labelheading={"Realtime reporting?"}
              placeholder_text={"i dont know"}
            />
          </div>
        </div>
      )}

      {/* div 2  */}
      <div>
        <div className="AS_HEADING">Additional Features</div>

        <div className="heading_and_toggle">
          <div className="AS_sub_heading">Do you require interpretaion?</div>

          {/* toggle bttn2 */}
          <div>
            <label class="toggle">
              <input
                type="checkbox"
                onChange={change_the_additional_services_toggle2}
              />
              <span class="slider"></span>
              <span class="label-text yes">Yes</span>
              <span class="label-text no">No</span>
            </label>
          </div>
        </div>

        {toggle2 && (
          <div className="interpreted_laguages">
            <TextInputFiled
              labelheading={
                "Please list all languages to be interpreted (seperated by comma)"
              }
              placeholder_text={"input"}
            />
          </div>
        )}

        <div className="heading_and_toggle">
          <div className="AS_sub_heading">Do you require CART services?</div>

          {/* toggle bttn3 */}
          <Toggle_Bttn   />
        </div>

        <div className="heading_and_toggle">
          <div className="AS_sub_heading">
            Will you need a quote prior to
            <br />
            confirmation?
          </div>

          {/* toggle bttn4 */}
          <Toggle_Bttn  />
        </div>
      </div>

      <TextInputFiled
        labelheading={
          "Please list any additional requests or considerations you might have at this time"
        }
        placeholder_text={"input"}
      />
    </div>
  );
};

export default Additional_Services;
