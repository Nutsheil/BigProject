import { useTheme } from 'app/provider/ThemeProvider';
import type { ReactNode } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Portal } from '../Portal';
import classes from './Modal.module.scss';

interface IModal {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: IModal) => {
  const { isOpen, onClose, children, className } = props;

  const { theme } = useTheme();

  const [isClosing, setIsClosing] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timeoutRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeHandler();
      }
    },
    [closeHandler],
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      clearTimeout(timeoutRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  const mods: Record<string, boolean> = {
    [classes.opened]: isOpen,
    [classes.isClosing]: isClosing,
  };

  return (
    <Portal>
      <div className={classNames(classes.Modal, mods, [className, classes[theme]])}>
        <div className={classes.overlay} onClick={closeHandler}>
          <div className={classes.content} onClick={e => e.stopPropagation()}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
