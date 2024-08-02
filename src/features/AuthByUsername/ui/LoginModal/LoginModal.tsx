import { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader';
import { Modal } from 'shared/ui/Modal';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface ILoginModal {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = (props: ILoginModal) => {
  const { isOpen, onClose, className } = props;

  return (
    <Modal className={className} isOpen={isOpen} onClose={onClose} lazy>
      <Suspense fallback={<Loader />}>
        <LoginFormAsync />
      </Suspense>
    </Modal>
  );
};
