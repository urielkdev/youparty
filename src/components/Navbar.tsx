import React, { useState } from 'react'
import { Layout, Menu } from 'antd'

import RoomModal from './CreatePartyModal'

import './navbar.css'

const Navbar: React.FC = () => {
  const { Header } = Layout

  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleConnect = () => {
    setIsModalVisible(true)
  }

  return (
    <Header className="nav-bar">
      <Menu mode="horizontal">
        <Menu.Item>YouParty</Menu.Item>
        <Menu.Item key="2" onClick={handleConnect} className="float-right">
          Join
        </Menu.Item>
        <Menu.Item key="1" onClick={handleConnect} className="float-right">
          Create
        </Menu.Item>
      </Menu>
      <RoomModal isVisible={isModalVisible} setIsVisible={setIsModalVisible} />
    </Header>
  )
}
export default Navbar
