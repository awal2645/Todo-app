import React,{useState} from 'react'
import './Todo.css'
import todo from './note.png'
const Todo = () => {
    const [input, setInput] = useState('');
    const [add, setAdd] = useState([]);
    const addItem = ()=>{
        if(!input){

        }else{
            setAdd([...add,input]);
            setInput('');
        }
        }
        const del=(id)=>{
            const updateItem=add.filter((elem,ind)=>{
                return ind!=id;
                
            })
            setAdd(updateItem);

        }
        const delAll=()=>{
            setAdd([]);
        }
       
  return (
    <>
        <div className='main-div'>
            <div className='child-div'>
            <figure>
                <img src={todo} alt="todologo"  />
                <figcaption><b>Wrtie Your Item</b> </figcaption>
            </figure>


            <div className=' addItems'> 
            <input type="text" placeholder='Enter your Item' 
            value={input} 
            onChange={(e)=>setInput(e.target.value)}
            
            />
            <i className="fa fa-plus add-btn" title="Add Item" onClick={addItem} ></i>
            </div>


            <div className='showItems'>

            {
                add.map((elem ,ind)=>{
                    return (
                        <div className='eachItem' key={ind}>
                        <h3>{elem}</h3>
                        <i className='far fa-trash-alt add-btn' title='Delete item' onClick={()=>del(ind)}></i>
                        </div>
                    )
                })
            }
                

                
            </div>
            <div className='showItems'>
                <button className='btn effect04' data-sm-link-text="Remove All" onClick={delAll}><span>Check List </span></button>
            </div>

            </div>
        </div>
    </>
  )
}

export default Todo