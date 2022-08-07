import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { roundTo } from '../../../helpers/roundTo'
import { CryptoData } from '../../../types/Crypto/CryptoData'
import { GlobalState } from '../../../types/GlobalState'
import AddToBriefcaseModal from '../../Briefcase/AddToBriefcaseModal/AddToBriefcaseModal'
import Button from '../../UI/Button/Button'

type CryptoContentProps = {
  className: string
}

const CryptoContent: React.FC<CryptoContentProps> = ({ className }) => {
  const cryptoInfo = useSelector((state: GlobalState) => state.cryptoReducer.byId.cryptoById) as CryptoData
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className={`${className} crypto-content`}>
        <div className='crypto-full-info__name'>{cryptoInfo.id.toUpperCase()}</div>
        <div className='crypto-full-info__price'>Current Price: {roundTo(cryptoInfo.priceUsd)}</div>
        <div className='crypto-full-info__change'
          style={cryptoInfo && +cryptoInfo.changePercent24Hr > 0 ? { background: "#7aef7c" } : { background: "#ff8282" }}>
          24h Change: {roundTo(cryptoInfo.changePercent24Hr)}%
        </div>
        <Button className="crypto-full-info__button" onClick={() => setIsOpen(true)} >Add To Briefcase</Button>
      </div>
      {
        isOpen && <AddToBriefcaseModal id={cryptoInfo.id} price={cryptoInfo.priceUsd} onClose={() => setIsOpen(false)} />
      }
    </>
  )
}

export default CryptoContent