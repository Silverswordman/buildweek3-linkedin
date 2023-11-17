
import { useState } from "react"
import { Form, FormGroup } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { setCommentsAction } from "../redux/actions"



const Comments = (props)=>{
    const comments = useSelector(state=>state.comments.content)
  
    const postComments = comments.filter((el)=> el.elementId === props.profileId)

    const [query,setQuery] = useState('')
    const dispatch = useDispatch()
    // console.log(postComments)
    // console.log(postComments)
    const handleForm = (e)=>{
        e.preventDefault()
        dispatch(setCommentsAction(query, props.profileId))
        setQuery('')
    }

    return (
        <>

            {postComments.map((el)=>{
              return (

                <div>
                    {el.comment}

                </div>

              )
            })}
           <Form className="mt-3" onSubmit={handleForm}>
            <Form.Group className="mb-3" c>
            
            <Form.Control type="text" placeholder="Inserisci il commento" onChange={(e)=>{setQuery(e.target.value)}} value={query}/>
            </Form.Group>
           </Form>
             
        </>
    )
}

export default Comments