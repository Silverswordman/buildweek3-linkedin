
import { Form, FormGroup } from "react-bootstrap"
import { useSelector } from "react-redux"



const Comments = (props)=>{
    const comments = useSelector(state=>state.comments.content)
  
    const postComments = comments.filter((el)=> el.elementId === props.profileId)

    // console.log(postComments)
    console.log(postComments)

    return (
        <>

            {postComments.map((el)=>{
              return (

                <div>
                    {el.comment}

                </div>

              )
            })}
           
             
        </>
    )
}

export default Comments