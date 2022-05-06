import React from 'react'
import Card from '../shared/Card'
import RatingSelect from './RatingSelect'
import Button from "../shared/Button"
import {useState} from "react"

function FeedbackForm({handleAdd}) {
    const [message, setmessage] = useState('')
    const[text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [rating, setRating] = useState(5)
    const handleTextChange = (e) => {
        if (text ==='') {
            setBtnDisabled(true)
            setmessage(null)
        } else if (text !=='' && text.trim().length <= 10) {
            setmessage('Votre avi doit avoir aumoins 10 lettres!')
            setBtnDisabled(true)

        } else {
            setBtnDisabled(false)
            setmessage(null)


        }
        setText(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 10) {
            const newAvi = {
                text:text,
                rating:rating
            }
            handleAdd(newAvi)
            setText('')
        }
    }
      return (
    <Card>
    <form onSubmit={handleSubmit}>
        <h2> Donnez nous votre avi par rapport au service!</h2>
        <RatingSelect
        select={ (rating) =>{
            (console.log(rating))
            setRating(rating)
        }  }
        ></RatingSelect>
        <div className='input-group'>
            <input
            type="text"
            placeholder='Ecrire un avi'
            onChange={handleTextChange}
            value={text}
            />
            <Button
            type="submit"
            version="secondary"
            desactiver= {btnDisabled}
            >Envoyer</Button>
        </div>
        { message && <div className='message'> {message}</div> }
    </form>

    </Card>
  )
}

export default FeedbackForm
