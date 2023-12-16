import React from "react";

const TextInputFiled = (props) => {
  return (
    <div>
      <div class="form-group">
        <label className="label" for="inputField">{props.labelheading}</label>
        <input
          type="text"
          id="inputField"
          name="inputField"
          placeholder={props.placeholder_text}
        />
      </div>
    </div>
  );
};

export default TextInputFiled;
