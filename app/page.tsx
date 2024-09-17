// 'use client'

// import { useState, useEffect } from 'react'
// import { tableFetch } from '@/app/utils/tableFetch'

// interface Todo {
//     id: number
//     title: string
//     // 他の必要なフィールドを追加
// }

// export default function Todos() {
//     const [todos, setTodos] = useState<Todo[]>([])

//     useEffect(() => {
//         async function loadTodos() {
//             const tabledFetch = await tableFetch()
//             setTodos(tabledFetch)
//         }
//         loadTodos()
//     }, [])

//     return (
//         <ul>
//             {todos.map((todo) => (
//                 <li key={todo.id}>{todo.title}</li>
//             ))}
//         </ul>
//     )
// }

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
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        async function loadTodos() {
            try {
                setIsLoading(true)
                const fetchedTodos = await tableFetch()
                if (fetchedTodos) {
                    setTodos(fetchedTodos)
                } else {
                    setError("データの取得に失敗しました。")
                }
            } catch (err) {
                setError("エラーが発生しました: " + (err instanceof Error ? err.message : String(err)))
            } finally {
                setIsLoading(false)
            }
        }
        loadTodos()
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>

    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    )
}