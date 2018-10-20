import React, { Component } from 'react';
import SingerInfo from './SingerInfo';

class SingerList extends Component{
  state = {
    name: []
  }
handleFilter=(e)=>{
  this.setState({
    name: e.target.value
  })
}
render(){
  console.log(this.props.testData)
  let artistName = this.props.testData.filter(name => {
    return name.name.indexOf(this.state.name) !==-1;
  })
  return(
    <div>
      {/* <input type="text" value={this.state.name} onChange={this.handleFilter}/> */}
      <ul>
        {artistName.map((artist) => {return <SingerInfo name = {artist} love="Great Artist" key={artist.id} changeStatus={this.props.changeStatus}/>})}
      </ul>
      
    </div>
)}}
export default SingerList;
// 
// <checkBox 1 check={rate >= 1}> <checkBox 2 checked={rate >= 2}> <checkBox 3> <checkBox 4> <checkBox 5>