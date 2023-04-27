/**

ErrorBoundary.tsx
This file contains a React ErrorBoundary component. The ErrorBoundary component
is used to catch and handle errors that occur in child components. If an error
occurs, it logs the error and displays a fallback message.
*/

import React, { Component, ErrorInfo } from 'react';

interface ErrorBoundaryProps {
	children: React.ReactNode;
}

interface ErrorBoundaryState {
	hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(_: Error): ErrorBoundaryState {
		return { hasError: true };
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
		console.error('Error caught in ErrorBoundary:', error, errorInfo);
	}

	render(): React.ReactNode {
		if (this.state.hasError) {
			return <h1>Something went wrong.</h1>;
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
