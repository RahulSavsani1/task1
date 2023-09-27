import React, { useState } from 'react';
import {Paragraph} from './Paragraph';
import {Shortanswer} from './Shortanswer';
import {Dropdown} from './Dropdown';
import {Multiplechoice} from './Multiplechoice';
import {Date} from './Date';
import {Number} from './Number';
import {Fileupload} from './Fileupload';
import {Videoquestion} from './Videoquestion';
import {Yesorno} from './YesorNo';
import './Questiontype.css'


export default function Questiontype() {
    const [questionType, setQuestionType] = useState<string>('text'); // Default question type

    const handleQuestionTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setQuestionType(event.target.value);
    };
    
    return (
        <div className='addquestion_container'>
            <h2 className='addquestion_header'>Question</h2>
            <div className='addquestion_body'>
                <h3> Type : </h3>
                <select id="questionType" value={questionType} onChange={handleQuestionTypeChange}>
                    <option> Select Type </option>
                    <option value={'1'}> Paragraph </option>
                    <option value={'2'}> Short Answer </option>
                    <option value={'3'}> Yes or No </option>
                    <option value={'4'}> Dropdown </option>
                    <option value={'5'}> Multiple Choice </option>
                    <option value={'6'}> Date </option>
                    <option value={'7'}> Number </option>
                    <option value={'8'}> File Upload </option>
                    <option value={'9'}> Video Question </option>
                </select>
            
                {questionType === '1' && <Paragraph />}
                {questionType === '2' && <Shortanswer />}
                {questionType === '3' && <Yesorno />}
                {questionType === '4' && <Dropdown />}
                {questionType === '5' && <Multiplechoice />}
                {questionType === '6' && <Date />}
                {questionType === '7' && <Number />}
                {questionType === '8' && <Fileupload />}
                {questionType === '9' && <Videoquestion />}
            </div>
        </div>
    );
}

