import React, { Component } from 'react';
// import '../../styles/bracket-detail.css';
import Bracket from '../presentational/bracket'

class BracketDetail extends Component {
  constructor(props){
      super(props);
      this.state={
        groups: null
      }
    }

  // calls on componentDidMount in order to load the book array, re-render,
  // and push the information to the BookList.js child, which displays the information
  componentDidMount(){
    fetch(`https://worldcup.sfg.io/teams/group_results`)
    .then(data => data.json())
    .then(data=> {
      this.setState({
        groups: data
      })
    })
  }

  render() {
    const books = this.state.groups && this.state.groups.map( (book, i) => {
      return(
        console.log(this.state.groups[0].group.id)
      )
    })


    return (
      <div>
      <Bracket groups={this.state.groups} />
      </div>
  );
  }
}

export default BracketDetail;
