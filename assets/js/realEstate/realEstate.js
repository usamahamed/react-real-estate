import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.js';
import Filter from './Filter.js';
import Listings from './Listings.js';
import listingsData from './data/serverResponse.json';

class App extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      listingsData: listingsData.resultlistEntries,
      commercializationType:"Any",
      COMMISSION_FREE: false,
      FIRST_TIME_USE: false,
      PRAXIS: false,
      LIFT: false,
      AIR_CONDITIONING: false,
      WELL_KEPT: false,
      OFFICE: false,
      NETWORK_WIRING: false,
      filteredData: listingsData.resultlistEntries,
      populateFormsData:"",
      sortby: "price-asc",
      view: "long",
      search: ""
    }

    this.change = this.change.bind(this)
    this.filteredData = this.filteredData.bind(this)
    this.populateForms = this.populateForms.bind(this)
    this.changeView = this.changeView.bind(this)

  }

componentWillMount(){

const listingsData = this.state.listingsData.sort((a,b)=>{
return a.productType > b.productType ? 1 : -1;
})

  this.setState({
    listingsData: listingsData
  })
}

change(event){
  const name = event.target.name
  const value = (event.target.type === "checkbox") ? event.target.checked : event.target.value
  this.setState({
    [name]: value
  }, () => {
   // console.log(this.state)
    this.filteredData()
  })
}

changeView(viewName){
  this.setState({
    view: viewName
  })
}

filteredData(){
  let newData;

    if(this.state.sortby == "price-dsc"){
     newData = this.state.listingsData.sort((a,b) =>{
      return a.productType > b.productType ? 1 : -1;
     })
   }

   if(this.state.sortby == "price-asc"){
     newData = this.state.listingsData.sort((a,b) =>{
      return a.productType > b.productType ? -1 : 1;
     })
   }

  if (this.state.commercializationType != "Any") {
  newData = this.state.listingsData.filter((item) => {
    return item.commercializationType == this.state.commercializationType
  })
}

 


  else if (this.state.COMMISSION_FREE != false) {
     newData = this.state.listingsData.filter((item) => {
       return item.features.includes("COMMISSION_FREE") == true
     })
   }
  


   else if (this.state.FIRST_TIME_USE != false) {
     newData = this.state.listingsData.filter((item) => {
       return item.features.includes("FIRST_TIME_USE") == true
     })
   }
 


     else if (this.state.PRAXIS != false) {
     newData = this.state.listingsData.filter((item) => {
       return item.features.includes("PRAXIS") == true
     })
   }
  


    else if (this.state.LIFT != false) {
     newData = this.state.listingsData.filter((item) => {
       return item.features.includes("LIFT") == true
     })
   }
  



       else if (this.state.AIR_CONDITIONING != false) {
     newData = this.state.listingsData.filter((item) => {
       return item.features.includes("AIR_CONDITIONING") == true
     })
   }
  

   else if (this.state.WELL_KEPT != false) {
     newData = this.state.listingsData.filter((item) => {
       return item.features.includes("WELL_KEPT") == true
     })
   }
 

   else if (this.state.OFFICE != false) {
     newData = this.state.listingsData.filter((item) => {
       return item.features.includes("OFFICE") == true
     })
   }
 

 else if (this.state.NETWORK_WIRING != false) {
     newData = this.state.listingsData.filter((item) => {
       return item.features.includes("NETWORK_WIRING") == true
     })
   }
   else {
     newData = this.state.listingsData
     
   }


  

  

   if(this.state.search != ""){
     newData = this.state.listingsData.filter((item) => {
       const title = item.title.toLowerCase()
       const searchText = this.state.search.toLowerCase()
       const n = title.match(searchText)

       if(n != null) {
         return true
       }
     })
   }

this.setState({
  filteredData: newData
})
}

populateForms() {
//commercializationType
let commercials = this.state.listingsData.map((item)=> {
  return item.commercializationType
})
commercials = new Set(commercials)
commercials = [...commercials]

commercials = commercials.sort()



this.setState({
  populateFormsData: {
    commercials,
  }
}, () => {
  console.log(this.state)
})
}


  render () {
    return (<div>
        <Header />
        <section id="content-area">
          <Filter  change={this.change} globalState = {this.state}
            populateAction={this.populateForms}/>

          <Listings listingsData={this.state.filteredData}
            change= {this.change} globalState = {this.state} changeView={this.changeView}/>
        </section>
      </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
