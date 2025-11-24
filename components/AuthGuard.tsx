"use client";

import React, { useState, useEffect } from 'react';

interface AuthGuardProps {
    children: React.ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // 環境変数から認証情報を取得（ビルド時に埋め込まれる）
    const AUTH_USERNAME = process.env.NEXT_PUBLIC_AUTH_USERNAME || 'admin';
    const AUTH_PASSWORD = process.env.NEXT_PUBLIC_AUTH_PASSWORD || 'password';

    useEffect(() => {
        // デバッグ用：環境変数の値を確認
        console.log('=== Auth Debug ===');
        console.log('AUTH_USERNAME:', AUTH_USERNAME);
        console.log('AUTH_PASSWORD:', AUTH_PASSWORD ? '***' : 'not set');
        console.log('process.env.NEXT_PUBLIC_AUTH_USERNAME:', process.env.NEXT_PUBLIC_AUTH_USERNAME);
        console.log('process.env.NEXT_PUBLIC_AUTH_PASSWORD:', process.env.NEXT_PUBLIC_AUTH_PASSWORD ? '***' : 'not set');
        console.log('==================');
        
        // localStorageから認証状態を確認
        const authStatus = localStorage.getItem('portfolio_auth');
        if (authStatus === 'authenticated') {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }, [AUTH_USERNAME, AUTH_PASSWORD]);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        // 入力値をトリム（前後の空白を削除）
        const trimmedUsername = username.trim();
        const trimmedPassword = password.trim();
        const trimmedAuthUsername = AUTH_USERNAME.trim();
        const trimmedAuthPassword = AUTH_PASSWORD.trim();

        // デバッグ用：ログイン試行時の値を確認
        console.log('=== Login Attempt ===');
        console.log('Input username:', JSON.stringify(trimmedUsername));
        console.log('Input password:', JSON.stringify(trimmedPassword));
        console.log('Expected username:', JSON.stringify(trimmedAuthUsername));
        console.log('Expected password:', JSON.stringify(trimmedAuthPassword));
        console.log('Username match:', trimmedUsername === trimmedAuthUsername);
        console.log('Password match:', trimmedPassword === trimmedAuthPassword);
        console.log('=====================');

        if (trimmedUsername === trimmedAuthUsername && trimmedPassword === trimmedAuthPassword) {
            localStorage.setItem('portfolio_auth', 'authenticated');
            setIsAuthenticated(true);
        } else {
            setError('IDまたはパスワードが正しくありません');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('portfolio_auth');
        setIsAuthenticated(false);
        setUsername('');
        setPassword('');
    };

    // 認証状態が確定するまで何も表示しない
    if (isAuthenticated === null) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-pColor dark:text-white">読み込み中...</div>
            </div>
        );
    }

    // 認証されていない場合はログインフォームを表示
    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center px-5">
                <div className="w-full max-w-md bg-white dark:bg-boxDark rounded-lg shadow-sectionBoxShadow p-8 md:p-10">
                    <h1 className="text-3xl font-poppins font-semibold mb-2 dark:text-white text-center">
                        Tamagawa Portfolio
                    </h1>
                    <p className="text-sm text-pColor dark:text-white/70 mb-8 text-center">
                        ポートフォリオを閲覧するには認証が必要です
                    </p>
                    
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium mb-2 dark:text-white">
                                ID
                            </label>
                            <input
                                id="username"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                                required
                                autoFocus
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium mb-2 dark:text-white">
                                パスワード
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                                required
                            />
                        </div>

                        {error && (
                            <div className="text-red-600 dark:text-red-400 text-sm">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full py-3 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-lg hover:opacity-80 transition-opacity"
                        >
                            ログイン
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    // 認証されている場合は通常のコンテンツを表示
    return <>{children}</>;
};

export default AuthGuard;

