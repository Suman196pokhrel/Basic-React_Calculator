import React ,{useState} from 'react'
import '../styles/style1.css'
import Display  from './Display'
import buttons from '../buttons'

var exp = ''

function App(props){
     const [out, setOut] = useState('...')
     
     function btnPressed(val){
         try {
          if(val !=='='){
               if(val === '<'){
                    exp = exp.slice(0,exp.length-1)
                    setOut(exp)
                    
               }else if(val === 'AC'){
                    exp = ''
                    setOut(exp)
               }else{
                    exp = exp+val
               setOut(exp)
               }

               val = ''
               
               
          }
          else{
               exp = eval(exp).toFixed(2)
               setOut(exp)
               exp = `${exp}`
          }                        
         } catch (error) {
              console.log(error)
              exp = ''
         }
          
     }
     
     return <div className='main'>
               <div className='mainCard'>
                         
                         <Display out={out}/>

                         <div className='keypad'>
                              
                              {buttons.map((button)=>{
                                   return <button onClick={()=>btnPressed(button.value)}>{button.value}</button>
                                   
                                   
                              })}
                         </div>

                    
               </div>
          
          </div>
}


export default App