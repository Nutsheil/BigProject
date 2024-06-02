import type { ErrorInfo, ReactNode } from 'react';
import React, { Suspense } from 'react';
import { PageError } from 'widgets/PageError';

interface IErrorBoundary {
  children: ReactNode;
}

interface IErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<IErrorBoundary, IErrorBoundaryState> {
  constructor(props: IErrorBoundary) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.log(error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <Suspense fallback=''>
          <PageError />
        </Suspense>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
