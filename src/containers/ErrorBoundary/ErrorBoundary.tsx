import React from 'react'
import {
  ErrorBoundary as ErrorBoundaryUIWrapper,
  FallbackProps,
} from 'react-error-boundary'
import './styles.css'
import SomethingWentWrong from './components/SomethingWentWrong'
import { ExceptionService } from '../../services'

function FallbackComponent({ error, resetErrorBoundary }: FallbackProps) {
  switch (error.name) {
    default:
      return (
        <SomethingWentWrong
          error={error}
          resetErrorBoundary={resetErrorBoundary}
        />
      )
  }
}

const ErrorBoundary: React.FunctionComponent = (props) => (
  <ErrorBoundaryUIWrapper
    FallbackComponent={FallbackComponent}
    onError={(error) => ExceptionService.handleError(error)}
    onReset={() => window.location.reload()}>
    {props.children}
  </ErrorBoundaryUIWrapper>
)

export default ErrorBoundary
