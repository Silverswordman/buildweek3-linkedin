import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getExperiencesAction } from "../redux/actions"



const Experiences = (props)=>{

    const dispatch = useDispatch()
  
    console.log(props.profileId)

    useEffect(()=>{
        if(typeof props.profileId === 'string' && props.profileId.trim() !== ''){
            dispatch(getExperiencesAction(props.profileId))
        }
    }, [dispatch, props.profileId])
  

    return(
        <div>ciao</div>
    )
}

export default Experiences