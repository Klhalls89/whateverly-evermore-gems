import React, { Component } from 'react';
import GemCard from './GemCard';

class GemsPage extends Component {
    constructor() {
        super();
        this.state = {
          gemPage: false,
          searchInput: '',
          searchedGems: []
        };
    }

  updateInputValue = e => {
    let searchInput = e.target.value;
    this.setState({
      searchInput: searchInput.toLowerCase()
    })
  }

  gemsByName = () => {
    let searchedGems = this.props.gems.filter(gem => {
      return gem.name.toLowerCase().includes(this.state.searchInput);
      })
    this.setState({
      searchedGems
    })
  }

  selectColor = (e) => {
    let clickedColor = e.target.value
    let searchedGems = this.props.gems.filter(gem => {
      return gem.color.includes(clickedColor)
    })
    this.setState({
      searchedGems
    })
    console.log('searched gems',searchedGems)
  }

  render() {
    const GemPageDisplay = this.state.GemPage ? { display: 'none' } : {};
    const gemCards = this.state.searchedGems.map(gem => {
      return <GemCard key={gem.id} gemName={gem.name} gemFam={gem.family} gemImg={gem.image}/>
    })

    return (
      <div style={GemPageDisplay}>
        <div>
          <h1>Evermore Gems</h1>
          <h2>Instructions</h2>
          <input value={this.state.searchInput} onChange={this.updateInputValue} type="text" />
          <button onClick={this.gemsByName}>Search</button>
          <select onChange={this.selectColor}>
            <option value="White">White</option>
            <option value="Red">Red</option>
            <option value="Orange">Orange</option>
            <option value="Yellow">Yellow</option>
            <option value="Green">Green</option>
            <option value="Blue">Blue</option>
            <option value="Purple">Purple</option>
            <option value="Pink">Pink</option>
            <option value="Brown">Brown</option>
            <option value="Grey">Grey</option>
            <option value="Black">Black</option>
          </select>
        </div>
        <div className="result">
          {gemCards}
        </div>
      </div>
    );
  }
}


export default GemsPage;