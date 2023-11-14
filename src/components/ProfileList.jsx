import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getProfileListAction } from "../redux/actions"


const ProfileList = ()=>{

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getProfileListAction())
    },[])

    return (<div>ciao</div>)
}

export default ProfileList