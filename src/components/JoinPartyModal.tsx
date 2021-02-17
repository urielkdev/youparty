import React from 'react'
import { Modal } from 'antd'

import { JoinPartyModal } from '../util/types'

const RoomModal: React.FC<JoinPartyModal> = ({ isVisible, setIsVisible }) => {
  return (
    <Modal
      title="Join Party"
      centered
      visible={isVisible}
      onOk={() => setIsVisible(false)}
      onCancel={() => setIsVisible(false)}
      style={{ textAlign: 'center' }}
    >
      create a input for the code ...
    </Modal>
  )
}

export default RoomModal