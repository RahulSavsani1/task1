import { Navbar } from '../Navbar/Navbar'
import { Question } from '../Question/Question'
import './maincontainer.css'
import {useState } from 'react'
export const Maincontainer = () => {

    const getcomponent = () => {
        switch(tab) {
            case '0':
                return(<h1> Program Detail </h1>)
                
            case '1':
                return(<Question />)
                
            case '2':
                return(<h1> Workflow </h1>)
                
            case '3':
                return(<h1> Preview </h1>)
        }
    }
    const [tab,settab] = useState('0')
    const selectedtab = (data:string) => {
        settab(data);
    }
    return (
        <div className='main_container'>
            <Navbar callback={selectedtab} />
            
            <div className='bottom_container'>
                {/* <Question /> */}
                {getcomponent()}
            </div>
        </div>
    )
}
