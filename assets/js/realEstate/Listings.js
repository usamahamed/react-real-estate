import React, { Component} from 'react';

export default class Listings extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      ProdType:''
    }
  this.loopListings =  this.loopListings.bind(this);
  }

  loopListings(){
    const {listingsData} = this.props;
    let lable='';
    if(listingsData == undefined || listingsData.length == 0){
      return "Sorry, your filter did not match any listing"
    }

    return listingsData.map((listing, index)=>{

      if(listing.productType=="L"){
       this.state.ProdType = 'L'    
      }else{
     this.state.ProdType = 'S'    

      }


      if(this.props.globalState.view == "box"){
        // THIS IS THE BOX VIEW
        return(<div className="col-md-3" key={index}>

          
            <div className="listing" >
           <img className="listing_logo" src="http://www.laprevention.be/wp-content/uploads/2012/10/logprem.png" style={{ visibility: this.state.ProdType != 'S'? 'visible': 'hidden'}}/>

            <div className="listing-img" style={{background:`url(${listing.pictureUrl}) no-repeat center center`}}>

              <div className="details">
                <div className="col-md-3">
                  <div className="user-img">
                    <i className="fa fa-hospital-o fa-2x" aria-hidden="true"
                      style={{background:`no-repeat center center`}}>
                    </i>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="user-details">
                    <span className="user-name">Realtor: {listing.realtorName}</span>
                    <span className="user-date">{listing.date}</span>
                  </div>
                  <div className="listing-details">
                    <div className="floor-space">
                      <i className="fa fa-stack-exchange" aria-hidden="true"></i>
                      <span>{listing.floorSpace}</span>
                    </div>

                    <div className="bath">
                      <i className="fa fa-bath" aria-hidden="true"></i>
                      <span>For {listing.commercializationType}</span>
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-info" style={{ background: this.state.ProdType != 'L'? '#fff': '#b89856'}}>
              <span className="price">${listing.priceForTotalArea}</span>
              <span className="location">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                 {listing.addressToDisplay}
              </span>
            </div>
          </div>
          </div>)
      }
      else{
          // THIS IS THE LONG VIEW
        return(<div className="col-md-12 col-lg-6" key={index}>





            <div className="listing" >
           <img className="listing_logo" src="http://www.laprevention.be/wp-content/uploads/2012/10/logprem.png" style={{ visibility: this.state.ProdType != 'S'? 'visible': 'hidden'}}/>

            <div className="listing-img" style={{background:
                `url("${listing.pictureUrl}")
            no-repeat center center`}}>

              <div className="details">
                <div className="col-md-3">
                  <div className="user-img">
                    <i className="fa fa-hospital-o fa-2x" aria-hidden="true"
                      style={{background:`no-repeat center center`}}>
                    </i>
                  </div>
                </div>
                <div className="col-md-9">
                   

                  <div className="user-details">
                    <div className="bath">
                      <i className="fa fa-podcast" aria-hidden="true"></i>
                      <span>{listing.title}</span>
                    </div>

                  </div>
                  <div className="listing-details">
                    <div className="floor-space">
                      <i className="fa fa-stack-exchange" aria-hidden="true"></i>
                      <span>{listing.floorSpace}</span>
                    </div>
                    <div className="bedrooms">
                      <i className="fa fa-hand-spock-o" aria-hidden="true"></i>
                      <span>{listing.features[0]}</span>
                    </div>
                    <div className="bedrooms">
                      <i className="fa fa-grav" aria-hidden="true"></i>
                      <span>{listing.features[1]}</span>
                    </div>
                    <div className="bedrooms">
                      <i className="fa fa-asterisk" aria-hidden="true"></i>
                      <span>{listing.features[2]}</span>
                    </div>
                    <div className="bath">
                      <i className="fa fa-bath" aria-hidden="true"></i>
                      <span>For {listing.commercializationType}</span>
                    </div>
                  </div>
                 
                </div>

              </div>
            </div>
            <div className="bottom-info" style={{ background: this.state.ProdType != 'L'? '#fff': '#b89856'}}>
              <span className="price">${listing.priceForTotalArea}</span>
              <span className="location">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                 {listing.addressToDisplay}
              </span>
            </div>
          </div>
          </div>)
      }
    })
  }

  render () {
    return (
        <section id="Listings">
          <section className="search-area">
            <input type="text" name="search" placeholder="Search" onChange={this.props.change}/>
          </section>

          <section className="sortby-area">
            <div className="results">{this.props.globalState.filteredData.length} result(s) found</div>
            <div className="sort-options">
              <select name="sortby" className="sortby"
                onChange={this.props.change}>
                <option value="price-dsc">(L)Highest Price</option>
                <option value="price-asc">(S)Lowest Price </option>
              </select>
              <div className="view">
                <i className="fa fa-list-ul" aria-hidden="true" onClick={this.props.changeView.bind(null, "long")}></i>
                <i className="fa fa-th" aria-hidden="true" onClick={this.props.changeView.bind(null, "box")}></i>
              </div>
            </div>
          </section>

          <section className="listings-results">
            <div className="row">
              {this.loopListings()}
            </div>
          </section>

          <section className="pagination" id="pagination">
            <div className="row">
              <ul className="pages">
                <li>Prev</li>
                <li className="active">1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>Next</li>
              </ul>
            </div>
          </section>
        </section>
    )
  }
}
