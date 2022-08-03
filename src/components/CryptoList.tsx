import React, { FC, useEffect, useState } from 'react'
import { http } from '../helpers/http'
import { response } from '../types/response'
import CryptoCard from './CryptoCard'
import Modal from './Modal'


const CryptoList: FC = () => {
  let [data, setData] = useState<any[]>([])
  let [isOpen, setIsOpen] = useState<boolean>(false)
  let [id, setId] = useState<number>(0)

  const getCryptoData = async () => {
    let response = await http<response>(`https://api.coincap.io/v2/assets/`)
    setData(response.data)
  }

  useEffect(() => {
    getCryptoData()
  }, [])
  
  return (
    <div className="crypto-list">
      <div className="crypto-list__title">
        <span>Rank</span>
        <div>Name</div>
        <div>Price USD</div>
        <span>Add</span>
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