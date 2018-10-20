import React, {Component} from 'react';
import Album from './Album';
import './App.css';

class SingerInfo extends Component{
  constructor(props){
    super(props);
    this.state = {
      value: this.props.name,
      isClick: true
    }
  }

  // clickCancel = (e) =>{
  //   this.setState({
  //     isClick: true
  //   })
  // }
  clickEvent = (e) => {
    // this.setState({
    //   isClick: !this.state.isClick
    // })
    // console.log(this.state.isClick)
    this.props.changeStatus('detail')
  }
  return = () => {
    this.props.changeStatus('list')
  }

  render(){
    const isClickYes = this.state.isClick
  return(
    <div onClick={this.clickEvent}>
    {/* {isClickYes ? (<img src = {this.state.value.image} className = "ArtistAlbum" onClick={this.clickEvent}/>
    ) : (
    <p>{this.state.value.album}</p>
    )} */}
    {isClickYes && <img src = {this.state.value.image} className = "ArtistAlbum"/>}
    {!isClickYes && <p>{this.state.value.album}</p>}
    <div className = "ArtistName">{this.state.value.name}</div>
    </div>
  )}
}

// const SingerInfo = ({name, love}) =>{
//   return(
//     <div>
//      <img src = {name.image} className = "ArtistAlbum" alt="" />
//      <div className = "ArtistName">{name.name}{love}</div>
//     </div>
//   )
// }

export default SingerInfo;