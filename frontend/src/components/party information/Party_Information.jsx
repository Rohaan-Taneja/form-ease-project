import React from "react";
import Details_Template from "./Details_Template";
import Oppossing_Party_Info from "./Oppossing_Party_Info";
import Toggle_Bttn from "../general/Toggle_Bttn";
import Add_parties from "./Add_parties";
import { useState } from "react";

const Party_Information = () => {

  const [components, setComponents] = useState([]);


  // onclick of the add parties button , this will add component in the array 
  const handleClick = () => {
    const newComponents = [...components, <Add_parties key={components.length} />];
    setComponents(newComponents);
  };

  return (

    <div className="outer_div_for_booking_party_info">

      {/* heading  */}
      <div className="heading_rows">
        <div className="heading">Booking party Information </div>
        <div className="sub_heading"> (Enter as much as possible)</div>
      </div>

      {/* sub heading contain toggle bttn  */}
      <div className="text_and_toggle_bttn">
        <div>use information on acount</div>
        <Toggle_Bttn />
       
      </div>

      {/* this contain all the text fields  */}
      <Details_Template />



      {/* opposite party info  */}
      <div className="opposite_party_info heading">Opposing party information</div>
      <Oppossing_Party_Info />


      {/* when the below button is clicked , here the new add parties component will be added */}
      <div id="targetDiv">
        {components.map((Component, index) => (
          <React.Fragment key={index}>{Component}</React.Fragment>
        ))}
      </div>

        {/* button to add new additional party  */}
      <div className="addition_bttn_div">
        <button className="addition_bttn" onClick={handleClick} >+ ADDITIONAL PARTIES</button>

      </div>
      


    </div>
  );
};

export default Party_Information;
