import React from 'react'

interface ISomethingWentWrongProps {
  error: Error
  resetErrorBoundary: () => void
}

const SomethingWentWrong: React.FunctionComponent<ISomethingWentWrongProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

export default SomethingWentWrong
