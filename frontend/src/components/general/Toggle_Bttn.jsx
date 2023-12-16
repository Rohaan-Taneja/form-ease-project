import React from "react";

const Toggle_Bttn = () => {
  return (
    <div>
      <label class="toggle">
        <input type="checkbox" />
        <span class="slider"></span>
        <span class="label-text yes">Yes</span>
        <span class="label-text no">No</span>
      </label>
    </div>
  );
};

export default Toggle_Bttn;
