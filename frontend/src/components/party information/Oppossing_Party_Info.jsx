import React from 'react'
import TextInputFiled from '../general/TextInputFiled'

const Oppossing_Party_Info = () => {
  return (
    <div>
        
              {/* row 1 with 3 input field */}
      <div className="rows">
        <TextInputFiled
          labelheading={"First Name"}
          placeholder_text={"input"}
        />
        <TextInputFiled
          labelheading={"Booking Contact Name"}
          placeholder_text={"Type here"}
        />

        <TextInputFiled
          labelheading={"Phone Number(no spaces)"}
          placeholder_text={"Type here"}
        />
      </div>

      {/* row 2 with 3 input field */}
      <div className="rows">
        <TextInputFiled
          labelheading={"Billing Address"}
          placeholder_text={"input"}
        />
        <TextInputFiled
          labelheading={"Zip/Postal code"}
          placeholder_text={"input"}
        />
        <TextInputFiled
          labelheading={"country/City"}
          placeholder_text={"input"}
        />
      </div>

      <div className="two_inputfield_rows_list">
        {/* row 3 with 2 input field */}
        <div className="rows_type_2">
          <TextInputFiled labelheading={"Role"} placeholder_text={"input"} />
          <TextInputFiled
            labelheading={"Name of Represted Client"}
            placeholder_text={"input"}
          />
        </div>

        {/* row 4 with 2 input field */}
        <div className="rows_type_2">
          <TextInputFiled
            labelheading={"Lead counsel(s) information"}
            placeholder_text={"name"}
          />
          <div className="dot_dot_dot">...</div>
          <TextInputFiled labelheading={""} placeholder_text={"input"} />
        </div>

        {/* row 5 with 2 input field */}
        <div className="rows_type_2">
          <div className="plus_sign">+</div>
          <TextInputFiled
            labelheading={""}
            placeholder_text={"An additional Counsel"}
          />

          <div className="dot_dot_dot">...</div>
          <TextInputFiled labelheading={""} placeholder_text={"input"} />
        </div>
      </div>
      
    </div>
  )
}

export default Oppossing_Party_Info
