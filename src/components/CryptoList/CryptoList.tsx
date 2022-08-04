import React, { FC, useEffect, useState } from 'react'
import { http } from '../../helpers/http'
import { cryptoData, response } from '../../types/response'
import CryptoCard from '../CryptoCard/CryptoCard'
import Modal from '../Modal/Modal'

const CryptoList: FC = () => {
  let [data, setData] = useState<cryptoData[]>([])
  let [isOpen, setIsOpen] = useState<boolean>(false)
  let [id, setId] = useState<string>('')

  const getCryptoData = async () => {
    let response = await http<response>(`https://api.coincap.io/v2/assets/`)
    setData(response.data)
  }

  useEffect(() => {
    getCryptoData()
  }, [])

  return (
    <div className="crypto-list">
      <div className="crypto-list__table-title table-title">
        <div className="table-title__rank">Rank</div>
        <div className="table-title__name">Name</div>
        <div className="table-title__price">Price USD</div>
        <div className="table-title__add-crypto">Add</div>
      </div>
      {data.map(item => <CryptoCard key={item.id} {...item} openModal={() => setIsOpen(true)} setId={setId} />)}
      {
        isOpen && <Modal closeModal={() => setIsOpen(false)} >
          <div>{id}</div>
        </Modal>
      }
    </div>
  )
}

export default CryptoList