import React from 'react'
import Details_Template from './Details_Template'

const Add_parties = () => {

    // onclick of the bttn this Componentwill be removed form the dom

    const remove_this_add_parties=()=>{
        const this_componenet=document.querySelector('.OUTER_OF_ADDITION_PARTIES')
        this_componenet.remove();
    }
  return (
    <div className='OUTER_OF_ADDITION_PARTIES'>
        <div>
        <button className='addition_parties_bttn' onClick={remove_this_add_parties}> X ADDITIONAL PARTIES</button>

        </div>
        
        <Details_Template />
      
    </div>
  )
}

export default Add_parties
