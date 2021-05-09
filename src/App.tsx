import { useState } from 'react';
import Modal from 'react-modal'
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header'
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from './styles/global';

//Accessibility =>
Modal.setAppElement('#root')

export function App() {
  const [
    isNewTransactionModalOpen, 
    setisNewTransactionModalOpen] 
    = 
    useState(false)

  // Handle = User Click => 
  function handleOpenNewTransactionModal() {
    setisNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setisNewTransactionModalOpen(false)
  }

  return (
  <>
    <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
    <Dashboard />
    <NewTransactionModal 
     isOpen={isNewTransactionModalOpen}
     onRequestClose={handleCloseNewTransactionModal} 
    />
    <GlobalStyle />

  </>
  )
}

