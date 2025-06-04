import React, { useState } from 'react'

const TodoList = () => {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('all');

    const changeHandler = e => {
        setTask(e.target.value);
    }

    const submitHandler = e => {
        e.preventDefault();
        if (task.trim()) {
            const newTodo = {
                id: Date.now(),
                text: task.trim(),
                completed: false,
                createdAt: new Date().toLocaleString()
            };
            setTodos([...todos, newTodo]);
            setTask("");
        }
    }

    const deleteHandler = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const toggleComplete = (id) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    }

    const clearCompleted = () => {
        setTodos(todos.filter(todo => !todo.completed));
    }

    const filteredTodos = todos.filter(todo => {
        if (filter === 'active') return !todo.completed;
        if (filter === 'completed') return todo.completed;
        return true;
    });

    const styles = {
        container: {
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            padding: '40px 20px',
            fontFamily: "'Inter', sans-serif"
        },
        todoCard: {
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            borderRadius: '25px',
            padding: '40px',
            boxShadow: '0 25px 80px rgba(0, 0, 0, 0.15)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            maxWidth: '600px',
            margin: '0 auto'
        },
        title: {
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#2d3748',
            marginBottom: '30px',
            textAlign: 'center',
            fontFamily: "'Poppins', sans-serif",
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
        },
        form: {
            display: 'flex',
            gap: '15px',
            marginBottom: '30px'
        },
        input: {
            flex: 1,
            padding: '15px 20px',
            fontSize: '1rem',
            border: '2px solid #e2e8f0',
            borderRadius: '12px',
            outline: 'none',
            transition: 'all 0.3s ease',
            fontFamily: "'Inter', sans-serif"
        },
        addButton: {
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            border: 'none',
            padding: '15px 25px',
            fontSize: '1rem',
            fontWeight: '600',
            borderRadius: '12px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
            minWidth: '100px'
        },
        filterContainer: {
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '25px',
            flexWrap: 'wrap'
        },
        filterButton: {
            padding: '8px 16px',
            border: '2px solid #e2e8f0',
            borderRadius: '20px',
            background: 'transparent',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            fontSize: '0.9rem',
            fontWeight: '500'
        },
        filterButtonActive: {
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            borderColor: 'transparent'
        },
        todoList: {
            maxHeight: '400px',
            overflowY: 'auto',
            marginBottom: '20px'
        },
        todoItem: {
            display: 'flex',
            alignItems: 'center',
            padding: '15px',
            margin: '10px 0',
            background: 'rgba(102, 126, 234, 0.05)',
            borderRadius: '12px',
            border: '1px solid rgba(102, 126, 234, 0.1)',
            transition: 'all 0.3s ease'
        },
        todoItemCompleted: {
            background: 'rgba(78, 205, 196, 0.1)',
            borderColor: 'rgba(78, 205, 196, 0.2)'
        },
        checkbox: {
            width: '20px',
            height: '20px',
            marginRight: '15px',
            cursor: 'pointer',
            accentColor: '#667eea'
        },
        todoText: {
            flex: 1,
            fontSize: '1rem',
            color: '#2d3748'
        },
        todoTextCompleted: {
            textDecoration: 'line-through',
            color: '#718096'
        },
        todoMeta: {
            fontSize: '0.8rem',
            color: '#718096',
            marginLeft: '15px'
        },
        deleteButton: {
            background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)',
            color: 'white',
            border: 'none',
            padding: '8px 12px',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '0.9rem',
            fontWeight: '500',
            marginLeft: '10px',
            transition: 'all 0.3s ease'
        },
        stats: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '15px 0',
            borderTop: '1px solid #e2e8f0',
            fontSize: '0.9rem',
            color: '#718096'
        },
        clearButton: {
            background: 'transparent',
            color: '#ff6b6b',
            border: '1px solid #ff6b6b',
            padding: '6px 12px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '0.8rem',
            transition: 'all 0.3s ease'
        },
        emptyState: {
            textAlign: 'center',
            padding: '40px 20px',
            color: '#718096',
            fontSize: '1.1rem'
        }
    };

    return (
        <div style={styles.container}>
            <style>
                {`
                    .todo-input:focus {
                        border-color: #667eea !important;
                        box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1) !important;
                    }
                    .add-button:hover {
                        transform: translateY(-2px);
                        box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
                    }
                    .delete-button:hover {
                        transform: translateY(-1px);
                        box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4);
                    }
                    .todo-item:hover {
                        transform: translateY(-2px);
                        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
                    }
                    .clear-button:hover {
                        background: #ff6b6b;
                        color: white;
                    }
                `}
            </style>

            <div style={styles.todoCard}>
                <h1 style={styles.title}>Todo List</h1>
                
                <form onSubmit={submitHandler} style={styles.form}>
                    <input
                        type="text"
                        value={task}
                        onChange={changeHandler}
                        placeholder="Add a new task..."
                        style={styles.input}
                        className="todo-input"
                    />
                    <button
                        type="submit"
                        style={styles.addButton}
                        className="add-button"
                    >
                        Add Task
                    </button>
                </form>

                <div style={styles.filterContainer}>
                    {['all', 'active', 'completed'].map(filterType => (
                        <button
                            key={filterType}
                            onClick={() => setFilter(filterType)}
                            style={{
                                ...styles.filterButton,
                                ...(filter === filterType ? styles.filterButtonActive : {})
                            }}
                        >
                            {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
                        </button>
                    ))}
                </div>

                <div style={styles.todoList}>
                    {filteredTodos.length === 0 ? (
                        <div style={styles.emptyState}>
                            {filter === 'all' ? 'No tasks yet. Add one above!' :
                             filter === 'active' ? 'No active tasks!' :
                             'No completed tasks!'}
                        </div>
                    ) : (
                        filteredTodos.map(todo => (
                            <div
                                key={todo.id}
                                style={{
                                    ...styles.todoItem,
                                    ...(todo.completed ? styles.todoItemCompleted : {})
                                }}
                                className="todo-item"
                            >
                                <input
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => toggleComplete(todo.id)}
                                    style={styles.checkbox}
                                />
                                <span
                                    style={{
                                        ...styles.todoText,
                                        ...(todo.completed ? styles.todoTextCompleted : {})
                                    }}
                                >
                                    {todo.text}
                                </span>
                                <span style={styles.todoMeta}>
                                    {todo.createdAt}
                                </span>
                                <button
                                    onClick={() => deleteHandler(todo.id)}
                                    style={styles.deleteButton}
                                    className="delete-button"
                                >
                                    Delete
                                </button>
                            </div>
                        ))
                    )}
                </div>

                {todos.length > 0 && (
                    <div style={styles.stats}>
                        <span>
                            {todos.filter(todo => !todo.completed).length} of {todos.length} tasks remaining
                        </span>
                        {todos.some(todo => todo.completed) && (
                            <button
                                onClick={clearCompleted}
                                style={styles.clearButton}
                                className="clear-button"
                            >
                                Clear Completed
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default TodoList