import Modal from "react-modal"
import { Container, TransactionTypeContainer, RadioBox } from './styles'
import Income from '../../assets/income.svg'
import Outcome from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg'
import { FormEvent, useState } from "react"

interface NewTransactionModal {
  isOpen: boolean;
  onRequestClose:  () => void;
}

function handleCreateNewTransaction(event: FormEvent) {
  event.preventDefault()
}


export function NewTransactionModal({ isOpen, onRequestClose}: NewTransactionModal){
  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState('')
  const [ type, setType] = useState('deposit');

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      >

        <button 
        type="button" 
        onClick={onRequestClose} 
        className="react-modal-close">
          <img src={closeImg} alt="fechar mdodal"/>
        </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input 
          placeholder="Titulo"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <input 
          type="number"
          placeholder="Valor"
          value={value}
          onChange={event => setValue(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox 
          type="button"
          onClick={() => { setType('deposit'); }}
          isActive={type === 'deposit'}
          activeColor="green"
          >
            <img src={Income} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox 
          type="button"
          onClick={() => { setType('withdraw'); }}
          isActive={type === 'withdraw'}
          activeColor="red"

          >
            <img src={Outcome} alt="Saida" />
            <span>Saida</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input placeholder="Categoria"
        value={category}
        onChange={event => setCategory(event.target.value)}
        />

        <button type="submit">
          Cadastrar
        </button>

      </Container>
    </Modal>
  )
}
