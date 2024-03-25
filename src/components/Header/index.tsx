import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'

import logoImage from '../../assets/logo.svg'

import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImage} alt="" />

        <Dialog.Root>
          <Dialog.DialogTrigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.DialogTrigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
