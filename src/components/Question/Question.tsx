import { useState } from 'react'
import { Switch, Upload } from 'antd';
import { AiOutlinePlus, AiOutlineUpload } from 'react-icons/ai';
import './question.css'
import Questiontype from '../AddQuestion/Questiontype';

export const Question = () => {
    const { Dragger } = Upload;

    const [additionalQuestionArr, setadditionalQuestionArr ] = useState<JSX.Element[]>([])
    const [additionalPersonalArr, setadditionalPersonalArr ] = useState<JSX.Element[]>([])
    const [additionalProfileArr, setadditionalPeofileArr ] = useState<JSX.Element[]>([])

    const personaladd = () => {
        setadditionalPersonalArr([...additionalPersonalArr, <Questiontype />] )
    }
    const profileadd = () => {
        setadditionalPeofileArr([...additionalProfileArr, <Questiontype />] )
    }
    const additionaladd = () => {
        setadditionalQuestionArr([...additionalQuestionArr, <Questiontype />] )
    }
    
    const onChange = (checked: boolean) => {
        console.log(`switch to ${checked}`);
      };
    return (
        <div className='question_container'>
            <div className='uploadcoverimage_container'>
                <h3 className='uploadcoverimage_header'> Upload Cover Image </h3>
                <div className='uploadcoverimage_body'>
                    <Dragger>
                        <p className="icon">
                            <AiOutlineUpload />
                        </p>
                        <p className="ant-upload-text"> Upload Cover Image </p>
                        <p className="ant-upload-hint">
                            16:9 ratio recommended. Max image size 1mb.
                        </p>
                    </Dragger>
                </div>
            </div>
            <div className='personalinfo_container'>
                <h3 className='personalinfo_header'> Personal Information </h3>
                <div className='personalinfo_body'>
                    <div className='personalinfo_body_ques'>
                        <h4> First Name </h4>
                    </div>
                    <div className='personalinfo_body_ques'>
                        <h4> Last Name </h4>
                    </div>
                    <div className='personalinfo_body_ques'>
                        <h4> Email </h4>
                    </div>
                    <div className='personalinfo_body_ques'>
                        <h4> Phone (without dial code) </h4>
                            <div className='ques_checkbok_container'>
                                <input type='checkbox' /> Internal 
                            </div>
                            <div className='ques_radio_container'>                               
                                <Switch onChange={onChange} /> Hide                               
                            </div>
                    </div>
                    <div className='personalinfo_body_ques'>
                        <h4> Nationality </h4>
                            <div className='ques_checkbok_container'>
                                <input type='checkbox' /> Internal 
                            </div>
                            <div className='ques_radio_container'>                               
                                <Switch onChange={onChange} /> Hide                                
                            </div>
                    </div>
                    <div className='personalinfo_body_ques'>
                        <h4> Current Residence </h4>
                            <div className='ques_checkbok_container'>
                                <input type='checkbox' /> Internal 
                            </div>
                            <div className='ques_radio_container'>                               
                                <Switch onChange={onChange} /> Hide                               
                            </div>
                    </div>
                    <div className='personalinfo_body_ques'>
                        <h4> Id Number </h4>
                            <div className='ques_checkbok_container'>
                                <input type='checkbox' /> Internal 
                            </div>
                            <div className='ques_radio_container'>                               
                                <Switch onChange={onChange} /> Hide                                
                            </div>
                    </div>
                    <div className='personalinfo_body_ques'>
                        <h4> Date Of Birth </h4>
                            <div className='ques_checkbok_container'>
                                <input type='checkbox' /> Internal 
                            </div>
                            <div className='ques_radio_container'>                               
                                <Switch onChange={onChange} /> Hide                                
                            </div>
                    </div>
                    <div className='personalinfo_body_ques'>
                        <h4> Gender </h4>
                            <div className='ques_checkbok_container'>
                                <input type='checkbox' /> Internal 
                            </div>
                            <div className='ques_radio_container'>                               
                                <Switch  onChange={onChange} /> Hide                              
                            </div>
                    </div>
                    <div>
                        {
                            additionalPersonalArr
                        }
                    </div>
                    <div className='Add_question'>
                        <button onClick={personaladd} className='Add_question_btn'> <AiOutlinePlus /> Add a question </button>
                    </div>
                </div>
            </div>
            <div className='profileinfo_container'>
                <h3 className='profileinfo_header'> Personal Information </h3>
                <div className='profileinfo_body'>
                    <div className='profileinfo_body_ques'>
                        <h4> Education </h4>
                            <div className='ques_checkbok_container'>
                                <input type='checkbox' /> Internal 
                            </div>
                            <div className='ques_radio_container'>                               
                                <Switch  onChange={onChange} /> Hide                               
                            </div>
                    </div>
                    <div className='profileinfo_body_ques'>
                        <h4> Experience </h4>
                            <div className='ques_checkbok_container'>
                                <input type='checkbox' /> Internal 
                            </div>
                            <div className='ques_radio_container'>                               
                                <Switch  onChange={onChange} /> Hide                                
                            </div>
                    </div>
                    <div className='profileinfo_body_ques'>
                        <h4> Resume </h4>
                            <div className='ques_checkbok_container'>
                                <input type='checkbox' /> Internal 
                            </div>
                            <div className='ques_radio_container'>                               
                            <Switch  onChange={onChange} /> Hide                                
                            </div>
                    </div>
                    <div>
                        {
                            additionalProfileArr
                        }
                    </div>
                    <div className='Add_question'>
                        <button onClick={profileadd} className='Add_question_btn'> <AiOutlinePlus /> Add a question </button>
                    </div>
                </div>
            </div>
            <div className='profileinfo_container'>
                <h3 className='profileinfo_header'> Additional Question </h3>
                <div className='profileinfo_body' >
                    <div>
                        {
                            additionalQuestionArr
                        }
                    </div>
                    <div className='Add_question'>
                        <button onClick={additionaladd} className='Add_question_btn'> <AiOutlinePlus /> Add a question </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
