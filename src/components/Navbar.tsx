import React, { useState } from 'react'
import { Layout, Menu } from 'antd'

import CreatePartyModal from './CreatePartyModal'
import JoinPartyModal from './JoinPartyModal'

import './navbar.css'

const Navbar: React.FC = () => {
  const { Header } = Layout

  const [isCreatePartyVisible, setIsCreatePartyVisible] = useState(false)
  const [isJoinPartyVisible, setIsJoinPartyVisible] = useState(false)

  const handleCreateParty = () => {
    setIsCreatePartyVisible(true)
  }

  const handleJoinParty = () => {
    setIsJoinPartyVisible(true)
  }

  return (
    <Header className="nav-bar">
      <Menu mode="horizontal">
        <Menu.Item>YouParty </Menu.Item>
        <Menu.Item key="2" onClick={handleJoinParty} className="float-right">
          Join
        </Menu.Item>
        <Menu.Item key="1" onClick={handleCreateParty} className="float-right">
          Create
        </Menu.Item>
      </Menu>
      <CreatePartyModal isVisible={isCreatePartyVisible} setIsVisible={setIsCreatePartyVisible} />
      <JoinPartyModal isVisible={isJoinPartyVisible} setIsVisible={setIsJoinPartyVisible} />
    </Header>
  )
}
export default Navbar
