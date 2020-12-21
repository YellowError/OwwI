import React from 'react'
import { Link } from 'react-router-dom'
import SvgsMenu from '../components/SvgsMenu'

function MainButton({ title, svg, logic, link,style }) {
    return (
        <>
            {link ?
                <Link href={link}>
                    <a onClick={logic} className={style}>
                        <div className="">
                            <SvgsMenu choice={svg}/>
                            <p className="text-center">{title}</p>
                        </div>
                    </a>
                </Link>
                :
                <a onClick={logic} className={style,"relative flex justify-center"}>
                    <div className="absolute w-full p-2 rounded-lg shadow-md bg-white topNegative">
                        <SvgsMenu choice={svg}/>
                        <p className="text-center">{title}</p>
                        
                    </div>
                </a>

            }
        </>
    )
}

export default MainButton
