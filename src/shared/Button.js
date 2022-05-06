

function Button({type, version, children, desactiver}) {
  return (
    <button
    type={type}
    disabled={desactiver}
    className={`btn btn-${version}`}

    >
    {children}

    </button>
  )
}
Button.defaultProps = {
    version: 'primary',
    type: ' button',
    desactiver: false
}

export default Button
