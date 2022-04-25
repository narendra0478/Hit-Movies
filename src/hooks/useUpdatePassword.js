import { useState } from "react"
import { useAuthContext } from "./useAuthContext"

// firebase import
import { updatePassword } from "firebase/auth"

export const useUpdatePassword = () => {
    const [error, setError] = useState(null)
    const { user } = useAuthContext()

    const updatepassword = (password) => {
        setError(null)
        updatePassword(user, password)
            .then(() => {
                console.log('password updated successfully')
            })
            .catch((err) => {
                setError(err.message)
            })
    }

    return { error, updatepassword }
}