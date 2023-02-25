import React, { useState, useEffect } from 'react'

function ErrorBoundary(props) {
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    function handleError(error, errorInfo) {
      // Log the error to an error reporting service
      console.error(error, errorInfo)
      setHasError(true)
    }

    window.addEventListener('error', handleError)
    return () => window.removeEventListener('error', handleError)
  }, [])

  if (hasError) {
    // Display fallback UI
    return <h1>Something went wrong.</h1>
  }

  return props.children
}

export default ErrorBoundary
