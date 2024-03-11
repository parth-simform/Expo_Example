import { useRouter, useSegments } from 'expo-router';
import React, { useEffect, useState } from 'react';

const AuthContext = React.createContext(null)

export function useAuth() {
    return React.useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const rootSegment = useSegments()
    const router = useRouter()
    const [user, setUser] = useState('')
    const [channel, setChannel] = useState();
    const [thread, setThread] = useState();

    useEffect(() => {
        if (user === undefined) return;

        if (!user && rootSegment !== '(auth)') {
            router.replace('/(auth)/login')
        }

    }, [user, rootSegment])

    return (
        <AuthContext.Provider value={{
            user: user,
            signIn: () => { setUser('Hello'), router.replace('/') },
            signOut: () => { setUser('') },
            setChannel: setChannel,
            setThread: setThread,
            channel: channel,
            thread: thread

        }}>
            {children}
        </AuthContext.Provider>
    )
}