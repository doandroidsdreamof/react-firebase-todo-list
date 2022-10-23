import { auth } from '../firebase'

export const signOutUser = () => {
       auth.signOut()
}


