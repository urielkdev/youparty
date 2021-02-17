import React from 'react'
import { Modal, Typography } from 'antd'

import { CreatePartyModal } from '../util/types'

const RoomModal: React.FC<CreatePartyModal> = ({ isVisible, setIsVisible }) => {
  const { Title } = Typography
  return (
    <Modal
      title="Create a Party"
      centered
      visible={isVisible}
      onOk={() => setIsVisible(false)}
      onCancel={() => setIsVisible(false)}
      style={{ textAlign: 'center' }}
    >
      <Title level={3}>Your party code is:</Title>
      <Title copyable>A23J8A7S</Title>
    </Modal>
  )
}

export default RoomModal