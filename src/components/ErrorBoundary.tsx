import React, { Component, ReactNode } from 'react';

class ErrorButton extends Component<{ onError: () => void }> {
  handleClick = () => {
    try {
      throw new Error('Ошибка при нажатии кнопки');
    } catch (error) {
      console.error('Ошибка:', error);
      this.props.onError(); 
    }
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        Вызвать ошибку
      </button>
    );
  }
}

export class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
    constructor(props: { children: ReactNode }) {
      super(props);
      this.state = {
        hasError: false,
      };
    }
  
    handleError = () => {
      this.setState({ hasError: true });
    };
  
    render() {
      if (this.state.hasError) {
        return (
          <div>
            <h1>Ошибка</h1>
            <p>Что-то пошло не так.</p>
          </div>
        );
      }
  
      return (
        <div>
          <ErrorButton onError={this.handleError} />
          {this.props.children}
        </div>
      );
    }
  }