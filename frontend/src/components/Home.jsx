import React from "react";
import { useState } from "react";
import Party_Information from "./party information/Party_Information";
import Logistics from "./logistics/Logistics";
import Additional_Services from "./Additional services/Additional_Services";

const Home = () => {
  const [which_form_open, setwhich_form_open] = useState("2");

  const get_active_form_page = () => {
    if (which_form_open === "2") {
      return <Party_Information />;
    } else if (which_form_open === "3") {
      return <Logistics />;
    } else if (which_form_open === "4") {
      return <Additional_Services />;
    }
  };

  // Setting the active forms , on the basis of which button is clicked
  function active_form(Event) {

    // getting all the buttons
    const tab_bttns = document.querySelectorAll(".form_bttn");

    const text_below_bttns=document.querySelectorAll(".bttn_below_text");


    const active_lines=document.querySelectorAll(".line");

    // remove active state from all the three tabs
    for (const btn of tab_bttns) {
      btn.classList.remove("active_bttn");
    }

    // removing active button state from the text as well 
    for (const t of text_below_bttns) {
      t.classList.remove("active_bttn");
    }

    // removing active line state from the lines as well 
    for (const l of active_lines) {
      l.classList.remove("active_line");
    }

    

    // adding active class to the clicked buttoon
    const clickedbttn = Event.target;
    setwhich_form_open(clickedbttn.textContent)
    // console.log(clickedbttn)
    clickedbttn.classList.add("active_bttn");

    // seeting the colour of the text below active button to blue 
    const textBelowButton = clickedbttn.nextElementSibling;
    textBelowButton.classList.add("active_bttn");


    var i = 1
    // changing the colour of the lines according to the selected button 
    // if 3rd button is selelcted then previous 2 lines colour = blue 
    for (const l of active_lines) {
      if(i < parseInt(clickedbttn.textContent)){
        l.classList.add("active_line");
        i++

      }

      
    }



  }

  return (

    // this div contain all the button list 
    <div>
      <div className="heading_bttns_row">

        <div className="bttn_and_text_div">
          <button className="form_bttn " >1</button>
          <div className="bttn_below_text">Initial Information</div>
        </div>

        <div class="line active_line"></div>

        <div className="bttn_and_text_div">
          <button className="form_bttn active_bttn" onClick={active_form}>2</button>
          <div className="bttn_below_text active_bttn">Party Information</div>
        </div>

        <div class="line"></div>
        
        <div className="bttn_and_text_div">
          <button className="form_bttn" onClick={active_form}>3</button>
          <div className="bttn_below_text">Logistics</div>
        </div>

        <div class="line"></div>

        <div className="bttn_and_text_div">
          <button className="form_bttn" onClick={active_form}>4</button>
          <div className="bttn_below_text">Additional Information</div>
        </div>


      </div>
      {get_active_form_page()}
    </div>
  );
};

export default Home;
