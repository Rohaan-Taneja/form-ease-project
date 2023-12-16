import React from "react";
import TextInputFiled from "../general/TextInputFiled";

const Logistics_input_template = () => {
  return (
    <div>
      <div className="logistics_rows">
        <TextInputFiled
          labelheading={"Style of cause"}
          placeholder_text={"Type here"}
        />

        <TextInputFiled
          labelheading={"Court file #"}
          placeholder_text={"Type here"}
        />

        <div class="calendar-input">
          <label for="calendar" className="calender_label">Booking Dates</label>
          <input
            type="date"
            id="calendar"
            name="calendar"
            placeholder="Select a date"
          />
        </div>
      </div>

      <div className="logistics_rows">
        <div>
          <TextInputFiled
            labelheading={"Start Time"}
            placeholder_text={"Type here"}
          />
        </div>

        <TextInputFiled
          labelheading={"End Time"}
          placeholder_text={"Type here"}
        />

        <TextInputFiled
          labelheading={"Time Zone"}
          placeholder_text={"Type here"}
        />
      </div>

      {/* thrid row  */}

      <div className="logistics_rows">
        <TextInputFiled
          labelheading={"Arbitrator(s)"}
          placeholder_text={"chair's name"}
        />
        <div className="dot_dot_dot">...</div>

        <TextInputFiled labelheading={"."} placeholder_text={"email"} />

      </div>


        {/* row 4  */}
      <div className="logistics_rows">
        <TextInputFiled
          labelheading={"."}
          placeholder_text={"Add additional arbitrator"}
        />
        <div className="dot_dot_dot">...</div>

        <TextInputFiled labelheading={"."} placeholder_text={""} />
        
      </div>
    </div>
  );
};

export default Logistics_input_template;
