import React from 'react';

export const CompleteTodo = (props) => {
    const { completeTodos, onClick } = props;
    return (
        <div className="complete-area">
            <p className="title">完了したToDo</p>
            <ul id="complete-list">
                {completeTodos.map((todo, index) => {
                    return (
                        <li key={todo} className="list-row">
                            {todo}
                            <button onClick={() => onClick(index)}>戻す</button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};