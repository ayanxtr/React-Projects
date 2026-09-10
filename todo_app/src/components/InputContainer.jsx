import './InputContainer.css'
import { useState } from 'react'

const InputContainer = () => {

    const [todos, setTodo] = useState([]);
    const [input, setInput] = useState('');
    const [editIndex, setEditIndex] = useState(null);

    const handleAdd = () => {
        if (input.trim() === '') return;

        if(editIndex !== null){
            const newTodo =[...todos];
            newTodo[editIndex] = input;
            setTodo(newTodo);
            setEditIndex(null);
        }
        else{setTodo([...todos, input]);}

        setInput('');
    }

    const handleDelete = (index) => {
        const newTodo = todos.filter((_, i) => i !== index);
        setTodo(newTodo);
    }

    const handleEdit = (index) => {
        setInput(todos[index]);
        setEditIndex(index);

    }

    return (
        <>
            <div className='container0' >
                <div className='container' >
                    <input onChange={(e) => { setInput(e.target.value) }} value={input} type="text" />
                    <button onClick={handleAdd} value={todos} className='add' >Add</button>
                </div>
                <h2>Todos</h2>
                <div className='todos' >
                    {todos.map((todo, index) => (
                        <div className="todo">
                            <p key={index}>{todo}</p>
                            <div className="btn">
                                <button onClick={() => handleEdit(index)} className='edit' >Edit</button>
                                <button onClick={() => handleDelete(index)} className='delete'>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default InputContainer
