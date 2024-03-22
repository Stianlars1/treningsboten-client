"use client";
import React, { ErrorInfo, ReactNode } from "react";

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render(): ReactNode | null {
    const { children, fallback } = this.props;

    if (this.state.error) {
      return fallback;
    }

    return children;
  }
}

type Props = {
  children: ReactNode;
  fallback: ReactNode;
  pageTitle: string;
};

type State = {
  error: Error | null;
  errorInfo: ErrorInfo | null;
};
