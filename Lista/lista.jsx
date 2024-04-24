import React from 'react';

class Lista extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itens: [],
      contador: 0
    };
  }

  adicionarItem = () => {
    const { itens, contador } = this.state;
    this.setState({
      itens: [...itens, `Item${contador === 0 ? '' : ' ' + contador}`],
      contador: contador + 1
    });
  };

  removerItem = () => {
    const { itens, contador } = this.state;
    if (itens.length === 0) return;
    const novosItens = [...itens];
    novosItens.pop();
    this.setState({
      itens: novosItens,
      contador: contador - 1
    });
  };

  render() {
    const { itens } = this.state;
    return (
      <div>
        <button onClick={this.adicionarItem}>Adicionar Item</button>
        <button onClick={this.removerItem}>Remover Item</button>
        <ul>
          {itens.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Lista;