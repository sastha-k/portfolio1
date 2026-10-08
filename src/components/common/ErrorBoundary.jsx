import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: '100vh',
            backgroundColor: '#FCF8F2',
            color: '#1F1F1F',
            padding: '2rem',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              maxWidth: '650px',
              backgroundColor: '#FFFFFF',
              border: '2px solid #8F0028',
              borderRadius: '16px',
              padding: '2rem',
              boxShadow: '0 10px 25px rgba(143, 0, 40, 0.1)',
            }}
          >
            <h1 style={{ color: '#8F0028', margin: '0 0 1rem 0', fontSize: '1.5rem', fontWeight: 800 }}>
              Application Render Error
            </h1>
            <p style={{ margin: '0 0 1.5rem 0', fontSize: '0.95rem', color: '#666' }}>
              An unexpected error occurred while rendering the page:
            </p>
            <pre
              style={{
                backgroundColor: '#FAF4EB',
                border: '1px solid #F2E5D1',
                borderRadius: '8px',
                padding: '1rem',
                fontSize: '0.85rem',
                color: '#8F0028',
                textAlign: 'left',
                overflowX: 'auto',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
                margin: '0 0 1.5rem 0',
              }}
            >
              {this.state.error?.toString() || 'Unknown error'}
            </pre>
            <button
              onClick={() => window.location.reload()}
              style={{
                backgroundColor: '#8F0028',
                color: '#FCF8F2',
                border: 'none',
                borderRadius: '8px',
                padding: '0.75rem 1.5rem',
                fontSize: '0.875rem',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
