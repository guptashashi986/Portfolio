import React from 'react'
import java from "../../public/java.png"
import css from "../../public/css.jpg"
import html from "../../public/html.png"
import javascript from "../../public/javascript.png"
import reactjs from "../../public/reactjs.png"
import node from "../../public/node.png"
import sql from "../../public/sql.png"

const Exprience = () => {
    const cardItem=[
        {
            id:1,
            logo:html,
            name:"HTML"
        },
        {
            id:2,
            logo:css,
            name:"CSS"
        },
        {
            id:3,
            logo:javascript,
            name:"JavaScript"
        },
        {
            id:4,
            logo:reactjs,
            name:"ReactJs"
        },
        {
            id:5,
            logo:node,
            name:"NodeJs"
        }
        ,
        {
            id:6,
            logo:java,
            name:"Java"
        },
        {
            id:7,
            logo:sql,
            name:"SQL"
        }
    ]
  return (
    <div name="Exprience" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
        <div>
            <h1 className='text-3xl font-bold mb-5'>Exprience</h1>
            <p className=' '>I have more than 6 month of exprience of below technologies.</p>
            <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-5'>
                {cardItem.map(({id,logo,name})=>(
                    <div className='flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px]  md:h-[200px]  p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
                        <img src={logo} className='w-[150px]   rounded-full ' alt=''/>
                        <div>
                            <div className=''>{name}</div>
                            
                        </div>
                        

                    </div>
                )

                )}
            </div>

        </div>

    </div>
  )
}

export default Exprience;