import Proptypes from 'prop-types'
function Header( {text, bgColor} ) {
  return (
    <header style={{ backgroundColor: 'pink' }}>
        <div className="container">
            <h2> {text}</h2>
        </div>

    </header>
  )
}
Header.defaultProps = {
    text: ' AVIS UI!'
}
Header.propTypes = {
    text: Proptypes.string
}

export default Header
