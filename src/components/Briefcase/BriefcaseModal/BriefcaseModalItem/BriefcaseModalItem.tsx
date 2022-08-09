import React from "react"
import { roundTo } from "../../../../helpers/roundTo"
import { LocalStorageCryptoList } from "../../../../types/LocalStorageCryptoList"
import Button from "../../../UI/Button/Button"

type BriefcaseModalItemProps = {
  onClick: () => void,
  item: LocalStorageCryptoList
  currentPrice: string | undefined
}

const BriefcaseModalItem: React.FC<BriefcaseModalItemProps> = ({ item, onClick, currentPrice }) => {
  const { id, amount } = item

  return (
    <div className="briefcase-modal-item" key={id}>
      <div className="briefcase-modal-item__info">
        <div className="briefcase-modal-item__name">{item.id.toUpperCase()}</div>
        <div className="briefcase-modal-item__amount">Amount: {amount}</div>
        <div className="briefcase-modal-item__sum">
          TOTAL CRYPTO SUM:
          {
            currentPrice !== undefined && +currentPrice > 0
              ? ` ${roundTo(`${+amount * +currentPrice}`)} USD`
              : "Recalculation..."
          }
        </div>
      </div>
      <Button onClick={onClick}>Remove</Button>
    </div>
  )
}

export default BriefcaseModalItem