import "./Spinner.scss"

/**
 * Spinner Component
 * @param color
 * @param type
 * @param size
 * @returns {JSX.Element}
 * @constructor
 */
const Spinner = ({color, size}) => {
    return <div
        role="progressbar"
        className={`spinner`} style={{
        width: `${size}px`,
        height: `${size}px`,
        color: {color},
    }}>
        <svg viewBox="22 22 44 44">
            <circle className="spinner__circle" cx="44" cy="44" r="20.2" fill="none" strokeWidth="4"/>
        </svg>
    </div>
}

export default Spinner
