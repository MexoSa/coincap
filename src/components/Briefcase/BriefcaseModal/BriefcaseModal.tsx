import Modal from "../../UI/Modal/Modal"

type BriefcaseModal = {
  onClose: () => void,
}

const BriefcaseModal: React.FC<BriefcaseModal> = ({ onClose }) => {

  return (
    <Modal closeModal={onClose}>
    </Modal>
  )
}

export default BriefcaseModal