import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/avis"
import {useState} from 'react'
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)
  const ajoutAvi = (newAvi) => {
    newAvi.id = Math.random()*500
    setFeedback([newAvi, ...feedback])

  }
  const suprimer = (id) => {
    if (window.confirm(` Etes vous sure de vouloir suprimer cet avi?`)) {
      setFeedback(feedback.filter((avi) => ((avi.id !== id))))

    }
  }
  return (
    <>
    <Header text="COLLECTE DES AVIS"/>
    <FeedbackForm handleAdd={ajoutAvi}/>
    <FeedbackStats avis={feedback}/>
    <FeedbackList feedback={feedback}
    handleDelete={suprimer}/>
    </>




  )
}

export default App

