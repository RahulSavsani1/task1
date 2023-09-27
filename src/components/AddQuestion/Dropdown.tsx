import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { MdOutlineList } from 'react-icons/md'

export const Dropdown = () => {
  return (
    <div className='.extracontainer_body'>
      <h3> Question : </h3>
      <textarea id="extra_body"></textarea>
      <div className='dropdown_choice_container'>
        <h4> Choice : </h4>
        <div className='dropdown_choice'>
          <MdOutlineList /><input type='text' placeholder='Type Here' /> <AiOutlinePlus />
        </div>
      </div>

      <div className='addquestion_btn'>
        <button className='addquestion_delete'> Delete Question </button>
        <button className='addquestion_save'> Save </button>
      </div>
    </div>
  )
}
