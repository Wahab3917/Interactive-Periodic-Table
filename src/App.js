import React, { Component, Fragment } from "react"
import { elements } from "./_data"
import Element from "./Element"
import Navbar from "./components/Navbar"
import SearchBar from "./components/Searchbar";
import ReactionBar from "./components/Reactionbar";
import ElementsColorDesc from "./components/ElementsColorDesc";


class App extends Component {

  // const handleSearch = (query) => {
  //   // Implement your search logic here
  //   console.log('Searching for:', query);
  // };

  state = {
    showInfo: false,
    element: {}
  }

  showInfo = num => {
    this.setState({ showInfo: true, element: elements[num] })
  }

  closeInfo = () => {
    this.setState({ showInfo: false })
  }

  /**
   * Helper method that will generate a number of elements
   * from start index to end index to avoid copy pasting
   * all the hundred elements
   * @param {number} start
   * @param {number} end
   * @return {Array<Object>}
   */
  populateElements = (start, end) => {
    let items = []
    for (let i = start; i <= end; i++) {
      items.push(<Element showInfo={this.showInfo} num={i} />)
    }
    return items
  }

  render() {
    let {
      name,
      summary,
      symbol,
      category,
      number,
      source,
      appearance,
      atomic_mass,
      molar_heat,
      density,
      melt,
      boil
    } = this.state.element

    return (
      <>

        <Navbar/>

        <div className="container">
          <SearchBar/>
          <ReactionBar/>
        </div>

        <div className="container elements-color-desc">
          <ElementsColorDesc/>
        </div>

        {/* Element Info Section */}
        <div className="container info-section">
          {this.state.showInfo && (
            <Fragment>
              <div id="element-box" className={`${category}`}>
                <div className="number">{number}</div>
                <div className="symbol">{symbol}</div>
                <div className="element-name">{name}</div>
              </div>
              <div id="information">
                <div onClick={this.closeInfo} className="close-button" title="Close Info" style={{fontSize: "18px"}}>&times;</div>
                <div>
                  <h1 className="big_title">{name}</h1>
                  <span className={`cat_name ${category}`}>{category}</span>
                  {appearance && (
                    <div className="appearance">
                      <strong>Appearance:</strong> {appearance}
                    </div>
                  )}
                  <div className="atom_info">
                    <span>Atomic Mass: {atomic_mass} | </span>
                    <span>Density: {density}</span>
                    {molar_heat && <span> | Molar Heat: {molar_heat}</span>}
                    {melt && <span> | Melt: {melt}K</span>}
                    {boil && <span> | Boil: {boil}K</span>}
                  </div>
                  <div>
                    {summary} ...{" "}
                    <a target="_blank" href={source} rel="noreferrer">Source</a>
                  </div>
                </div>
              </div>
            </Fragment>
          )}
        </div>
      
        {/* PERIODIC TABLE */}
        <div className="wrapper">
          <div id="table">
            {/* Elements 1-4 */}
            {this.populateElements(1, 4)}
            {/* Populating elements from 5-57 */}
            {this.populateElements(5, 57)}
            {/* Lanthanoids split 72-89 */}
            {this.populateElements(72, 89)}
            {/* Actinoids split 104-119*/}
            {this.populateElements(104, 118)}
            {/* Lanthenoids 58-71*/}
            {this.populateElements(58, 71)}
            {/* Actionoids 90-103 */}
            {this.populateElements(90, 103)}
          </div>
        </div>

      </>
    )
  }
}

export default App