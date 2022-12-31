import React, {useState} from 'react';

type TaskType = {
    id: number
    title: string

}

type CustomType = TaskType & { isDone: boolean }

export const LocalStorage = () => {

    const [showTask, setShowTask] = useState<CustomType[]>([])

    const tasks: CustomType[] = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 1, title: "JS", isDone: false},
        {id: 1, title: "ReactJS", isDone: true},
    ]

    const saveTodolistHandler = () => {
        const StateString = JSON.stringify(tasks)
        localStorage.setItem("taskKey", StateString)
    }

    const shoveTodolistHandler = () => {
        const LocalString = localStorage.getItem("taskKey")
        if (LocalString !==null) {
            setShowTask(JSON.parse(LocalString))
        }

    }

    const cleanTodolistHandler =()=> {
        localStorage.removeItem("taskKey")
        setShowTask([])
    }

    return (
        <div>
            <h1>LocalStorage</h1>
            <button onClick={saveTodolistHandler}>SaveTodo</button>
            <button onClick={shoveTodolistHandler}>ShoveFromTodo</button>
            <button onClick={cleanTodolistHandler}>CleanLocalStorage</button>

            {
                showTask.length > 0
                    ? <ul>
                        {showTask.map(t =>
                            <li key={t.id}>
                                <input type="checkbox" checked={t.isDone}/>
                                <span>{t.title}</span>
                            </li>
                        )
                        }
                    </ul>
                    : <div>Empty</div>
            }

        </div>
    );
};

