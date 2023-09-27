import './Questiontype.css'

export const Shortanswer = () => {
  return (
    <div className='.extracontainer_body'>
        <h3> Question : </h3>
        <textarea id="extra_body"></textarea>
        <div className='addquestion_btn'>
                <button className='addquestion_delete'> Delete Question </button>
                <button className='addquestion_save'> Save </button>
            </div>
    </div>
  )
}
