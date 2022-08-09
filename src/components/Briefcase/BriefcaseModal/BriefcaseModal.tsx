import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import getListFromLocalStorage from "../../../helpers/getListFromLocalStorage"
import reduceBriefcaseById from "../../../helpers/reduceBriefcaseById"
import removeFromLocalStorage from "../../../helpers/removeFromLocalStorage"
import { roundTo } from "../../../helpers/roundTo"
import { getCurrentCryptoPriceList } from "../../../store/actions/briefcaseActions"
import { GlobalState } from "../../../types/GlobalState"
import Modal from "../../UI/Modal/Modal"
import BriefcaseModalItem from "./BriefcaseModalItem/BriefcaseModalItem"

type BriefcaseModal = {
  onClose: () => void,
}

const BriefcaseModal: React.FC<BriefcaseModal> = ({ onClose }) => {
  const [briefcase, setBriefcase] = useState(getListFromLocalStorage("briefcase"))
  const currentSum = useSelector((state: GlobalState) => state.briefcaseReducer.currentSum)
  const currentCryptoPrice = useSelector((state: GlobalState) => state.briefcaseReducer.currentCryptoPrice)
  const dispatch = useDispatch()

  const removeItem = (id: string) => {
    removeFromLocalStorage(id)
    setBriefcase(getListFromLocalStorage("briefcase"))
    dispatch(getCurrentCryptoPriceList())
  }

  return (
    <Modal closeModal={onClose}>
      <div className="briefcase-modal">
        <div className="briefcase-modal__title">
          BRIEFCASE
        </div>
        {
          briefcase.length > 0 ?
            <div className="briefcase-modal__list">
              {
                reduceBriefcaseById(briefcase).map(crypto => (
                  <BriefcaseModalItem
                    key={crypto.id}
                    item={crypto}
                    onClick={() => removeItem(crypto.id)}
                    currentPrice={currentCryptoPrice.find(cryptoPrice => cryptoPrice.id === crypto.id)?.priceUsd} />
                ))
              }
            </div>
            :
            <div className="briefcase-modal__empty">Empty</div>
        }
        <div className="briefcase-modal__price">
          <div className="briefcase-modal__price_title">TOTAL BRIEFCASE SUM</div>
          <div className="briefcase-modal__price_value">{
            currentSum > 0
              ? `${roundTo(`${currentSum}`)} USD`
              : "0 USD"
          }
          </div>
        </div>
      </div>
    </Modal >
  )
}

export default BriefcaseModal