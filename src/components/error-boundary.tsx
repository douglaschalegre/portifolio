'use client';

import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="flex min-h-[400px] flex-col items-center justify-center gap-4 p-4 text-center">
            <h2 className="text-2xl font-bold text-white">
              Ops! Algo deu errado.
            </h2>
            <p className="text-gray-300">
              Desculpe pelo inconveniente. Por favor, tente recarregar a página.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="rounded-md bg-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500/90"
            >
              Recarregar página
            </button>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
