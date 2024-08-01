import { classNames } from 'shared/lib/classNames';
import { Modal } from 'shared/ui/Modal';
import { LoginForm } from '../LoginForm/LoginForm';
import classes from './LoginModal.module.scss';

interface ILoginModal {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = (props: ILoginModal) => {
  const { isOpen, onClose, className } = props;

  return (
    <Modal className={classNames(classes.LoginModal, {}, className)} isOpen={isOpen} onClose={onClose} lazy>
      <LoginForm />
    </Modal>
  );
};
