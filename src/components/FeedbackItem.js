/* import { useState } from 'react' */
import Card from '../shared/Card'
import { MdOutlineDelete } from "react-icons/md";

function FeedbackItem({item, handleDelete}) {
  return (
    <Card>
        <div className='num-display'>{item.rating}</div>
        <button onClick={() =>handleDelete(item.id)}
        className="close">
        <MdOutlineDelete color='Purple'></MdOutlineDelete></button>
        <div className='text-display'>{item.text}</div>


    </Card>
  )
}

export default FeedbackItem
