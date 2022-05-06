

function FeedbackStats({avis}) {
    const moyenne = avis.reduce((acc, curr)=> {
        console.log(avis.length);
       return acc + curr.rating / avis.length
    }, 0)
  return (
    <div className='feedback-stats'>
    <h4>{avis.length} Revues</h4>
    <h4> Moyenne des avis: {isNaN(moyenne)? 0 : moyenne.toFixed(2) }</h4>

    </div>
  )
}

export default FeedbackStats
