import React, { Component } from 'react';
// import '../../styles/bracket-detail.css';
import Bracket from '../presentational/bracket'

class BracketDetail extends Component {
  constructor(props){
      super(props);
      this.state={
        groups: null,
        matches: null
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
    .then(fetch(`https://worldcup.sfg.io/matches`)
    .then(data => data.json())
    .then(data=> {
      this.setState({
        matches: data
      })
    })

    )


  }

  render() {
    console.log(this.state.matches)
    return (
      <div>
      <Bracket groups={this.state.groups} matches={this.state.matches}/>
      </div>
  );
  }
}

export default BracketDetail;
