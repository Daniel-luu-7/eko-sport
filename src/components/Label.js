import b_corp from '../assets/label/b_corp.svg'
import fair_trade from '../assets/label/fair_trade.svg'
import origine_france from '../assets/label/origine_france.svg'
import '../styles/Label.css'

function Label({ labels }) {
  return (
    <div>
      {labels.map((label, index) =>
        label === 'b_corp' ? (
          <img
            key={index}
            className="eko-label"
            src={b_corp}
            alt="b_corp label"
          />
        ) : label === 'fair_trade' ? (
          <img
            key={index}
            className="eko-label"
            src={fair_trade}
            alt="fair_trade label"
          />
        ) : label === 'origine_france' ? (
          <img
            key={index}
            className="eko-label"
            src={origine_france}
            alt="origine_france label"
          />
        ) : null
      )}
    </div>
  )
}

export default Label
