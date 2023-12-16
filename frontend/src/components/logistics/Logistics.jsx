import React from "react";
import Logistics_input_template from "./Logistics_input_template";
import Logistics_input_template2 from "./Logistics_input_template2";
import Logistics_input_template3 from "./Logistics_input_template3";

const Logistics = () => {
  return (
    <div className="outer_div_for_logistics">

      {/* heading  */}
      <div className="heading"> Basic Logistics</div>

      {/* heading 2 for upload photo  */}
      <div className="row_of_file_upload">
        <div className="text_above_file_upload">
          Upload Cover Page (optional)
        </div>
        <label for="file-upload" class="custom-file-upload">
          <span>Choose File here</span>
          <input type="file" id="file-upload" class="file_upload" />
          <i class="fa-solid fa-upload fa-2x"></i>
        </label>
      </div>

      {/* all text field template  */}
      <Logistics_input_template />


      {/* second template with tribute secretary  */}
      <Logistics_input_template2 />


      {/* third template with virtual logistics  */}
      <Logistics_input_template3 />



    </div>
  );
};

export default Logistics;
