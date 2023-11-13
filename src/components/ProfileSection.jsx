import { useEffect } from "react"
import { getProfileAction } from "../redux/actions"
import { useDispatch } from "react-redux"


const ProfileSection = ()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getProfileAction())
    }, [])

    return(<div>
        ciao
    </div>)
}

export default ProfileSection