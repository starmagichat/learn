'use client'

import { useState, useEffect } from 'react'
import { tableFetch } from '@/app/utils/tableFetch'

interface Todo {
    id: number
    title: string
    // 他の必要なフィールドを追加
}

export default function Todos() {
    const [todos, setTodos] = useState<Todo[]>([])

    useEffect(() => {
        async function loadTodos() {
            const tabledFetch:any = await tableFetch()
            setTodos(tabledFetch)
        }
        loadTodos()
    }, [])

    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    )
}