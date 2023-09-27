import './navbar.css'
import { useState} from 'react'

type requiredprops = {
  callback: (value:string) => void
}
export const Navbar = ({callback}:requiredprops) => {
  const [currentTab, setcurrentTab] = useState('0')

  return (
    <div className='header_container'>
        <ul>
            <li style={currentTab==='0'?{background:"lightgray", borderRight: '4px solid lightgray', color:'white'}:{borderRight: '4px solid lightgray'}} onClick={()=>{callback('0')
              setcurrentTab('0')
            }}> Program Details </li>
            <li style={currentTab==='1'?{background:"lightgray", borderRight: '4px solid lightgray', color:'white'}:{borderRight: '4px solid lightgray'}} onClick={()=>{callback('1')
              setcurrentTab('1')
            }}> Application Form </li>
            <li style={currentTab==='2'?{background:"lightgray", borderRight: '4px solid lightgray', color:'white'}:{borderRight: '4px solid lightgray'}} onClick={()=>{callback('2')
              setcurrentTab('2')
            }}> Workflow </li>
            <li style={currentTab==='3'?{background:"lightgray", color:'white'}:{}}  onClick={()=>{callback('3')
              setcurrentTab('3')
            }}> Preview </li>
        </ul>
    </div>
  )
}
