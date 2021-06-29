import React from 'react';

export const IncompleteTodo = (props) => {
    const { incompleteTodos, onClickCompleat, onClickDelete } = props;
    return (
        <div className="incomplete-area">
            <p className="title">未完了のToDo</p>
            <ul id="incomplete-list">
                {incompleteTodos.map((todo, index) => {
                    return (
                        <li key={todo} className="list-row">
                            {todo}
                            <button onClick={() => onClickCompleat(index)}>完了</button>
                            <button onClick={() => onClickDelete(index)}>削除</button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};