'use client'

import React, { useState } from 'react'
import { supabase } from '@/utils/supabase'

const SignUp: React.FC = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault()

        const { data, error } = await supabase.auth.signUp({
            email,
            password,
        })

        if (error) {
            console.error('サインアップエラー:', error)
            setMessage(`サインアップエラー: ${error.message}`)
        } else {
            console.log('サインアップ成功:', data)
            setMessage('サインアップ成功！確認メールを確認してください。')
        }
    }

    return (
        <form onSubmit={handleSignUp}>
            <input
                className='text-black'
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="メールアドレス"
                required
            />
            <input
                className='text-black'
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="パスワード"
                required
            />
            <button type="submit">サインアップ</button>
            {message && <p>{message}</p>}
        </form>
    )
}

export default SignUp