import React, { Component} from 'react';

export default class Filter extends Component {
  constructor () {
    super()
    this.state = {
      name: ''
    }
    this.commercials = this.commercials.bind(this)

  }

  componentWillMount(){
    this.props.populateAction()
  }

commercials() {
  if (this.props.globalState.populateFormsData.commercials != undefined){
    let {commercials} =  this.props.globalState.populateFormsData
    return commercials.map((item) => {
      return(
        <option key={item} value={item}> {item}</option>
      )
    })

  }
}









  render () {
    return (
      <div className="inside">
        <section id="filter">
          <h4>Filter</h4>
          <label htmlFor="commercializationType"></label>
          <span className="title city">commercializationType</span>
          <select name="commercializationType" className="filters commercializationType"
            onChange={this.props.change}>
            <option value="Any">Any commercializationType</option>
            {this.commercials()}

          </select>

          


         <div className="filters extras">
            <label htmlFor="extras">
              <span>COMMISSION_FREE</span>
              <input type="checkbox" value="COMMISSION_FREE" name="COMMISSION_FREE"
                onChange={this.props.change}/>
            </label>

            <label htmlFor="extras">
              <span>FIRST_TIME_USE</span>
              <input type="checkbox" value="FIRST_TIME_USE" name="FIRST_TIME_USE"
                onChange={this.props.change}/>
            </label>

            <label htmlFor="extras">
              <span>PRAXIS</span>
              <input type="checkbox" value="PRAXIS" name="PRAXIS"
                onChange={this.props.change}/>
            </label>

            <label htmlFor="extras">
              <span>LIFT</span>
              <input type="checkbox" value="LIFT" name="LIFT"
                onChange={this.props.change}/>
            </label>

            <label htmlFor="extras">
              <span>AIR_CONDITIONING</span>
              <input type="checkbox" value="AIR_CONDITIONING" name="AIR_CONDITIONING"
                onChange={this.props.change}/>
            </label>

              <label htmlFor="extras">
              <span>WELL_KEPT</span>
              <input type="checkbox" value="WELL_KEPT" name="WELL_KEPT"
                onChange={this.props.change}/>
            </label>

              <label htmlFor="extras">
              <span>OFFICE</span>
              <input type="checkbox" value="OFFICE" name="OFFICE"
                onChange={this.props.change}/>
            </label>

              <label htmlFor="extras">
              <span>NETWORK_WIRING</span>
              <input type="checkbox" value="NETWORK_WIRING" name="NETWORK_WIRING"
                onChange={this.props.change}/>
            </label>



          </div>

        </section>
      </div>
      )
  }
};
