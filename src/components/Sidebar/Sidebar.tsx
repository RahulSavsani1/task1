import { AiOutlineHome, AiOutlineMenu } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { LiaClipboardListSolid } from 'react-icons/lia'
import './sidebar.css'

export const Sidebar = () => {
  return (
    <div className='sidebar_container'>
        <div className="top_sidebar">
            <div className='side_btn'>
                <AiOutlineMenu />
            </div>
            <AiOutlineHome className='side_btn'/>
            <LiaClipboardListSolid className='side_btn'/>
        </div>
        <div className="bottom_sidebar">
            <CgProfile className='side_btn'/>
        </div>
    </div>
  )
}
