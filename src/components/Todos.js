import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { getAllTodos } from '../services/actions/todosActions';

const Todos = () => {
    const {isLoading,todos,error} = useSelector((state)=>state);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllTodos())
    },[])
    return (
        <div>
            <h2>Todos App</h2>
            {isLoading && <h4>Loading...</h4>}
            {error && <h4>{error.message}</h4>}
            <section className='row'>
                {
                    todos && todos.map((todo)=>{
                        const {id, title} = todo;
                        return <article style={{border:'1px solid white'}} className='col-md-4 bg-dark text-white' key={todo.id}>
                            <h4>{id}</h4>
                            <h4>{title}</h4>
                        </article>
                    })
                }
            </section>
            </div>
    );
};

export default Todos;