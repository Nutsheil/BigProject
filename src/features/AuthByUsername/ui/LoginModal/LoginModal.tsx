import { Modal } from 'shared/ui/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

interface ILoginModal {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = (props: ILoginModal) => {
  const { isOpen, onClose, className } = props;

  return (
    <Modal className={className} isOpen={isOpen} onClose={onClose} lazy>
      <LoginForm />
    </Modal>
  );
};
