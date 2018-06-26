import React, { Component } from 'react';
import '../../styles/bracket.css';

class Bracket extends Component {
  hello = () => {
    if (this.props.groups) {
    console.log("Hello")
    console.log(this.props.groups[0].group.id)
  }
  else {
    console.log('nothing')
    }
  }
  render() {

    const bracket = this.props.groups ?

    <div>
    <head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet"/>
      <link href='https://fonts.googleapis.com/css?family=Holtwood+One+SC' rel='stylesheet' type='text/css'/>
      <link href='https://fonts.googleapis.com/css?family=Kaushan+Script|Herr+Von+Muellerhoff' rel='stylesheet' type='text/css'/>
      <link href='https://fonts.googleapis.com/css?family=Abel' rel='stylesheet' type='text/css'/>
      <link href='https://fonts.googleapis.com/css?family=Istok+Web|Roboto+Condensed:700' rel='stylesheet' type='text/css'/>
      <title>March Madness Stock Matchup</title>
    </head>

    <body>
      <header class="hero">
        <div class="hero-wrap">
          <p class="intro" id="intro">flexbox</p>
          <h1 id="headline">Tournament</h1>
          <p class="year"><i class="fa fa-star"></i> 2015 <i class="fa fa-star"></i></p>
          <p>Ballin Outta Control</p>
         </div>
      </header>

      <section id="bracket">
        <div class="container">
          <div class="split split-one">
            <div class="round round-one current">
              <div class="round-details">Group Stage
                <br/>

              </div>
              <div class="group-details">Group {this.props.groups[0].group.letter}</div>
              <ul class="matchup-round1">
                <li class="team"><span class="position">A1</span>{this.props.groups[0].group.teams[0].team.country}<span class="score">{this.props.groups[0].group.teams[0].team.points}</span></li>
                <li class="team"><span class="position">A2</span>{this.props.groups[0].group.teams[1].team.country}<span class="score">{this.props.groups[0].group.teams[1].team.points}</span></li>
                <li class="team">{this.props.groups[0].group.teams[2].team.country}<span class="score">{this.props.groups[0].group.teams[2].team.points}</span></li>
                <li class="team">{this.props.groups[0].group.teams[3].team.country}<span class="score">{this.props.groups[0].group.teams[3].team.points}</span></li>
              </ul>
              <br/>
              <div class="group-details">Group {this.props.groups[2].group.letter}</div>
              <ul class="matchup-round1">
                <li class="team">{this.props.groups[2].group.teams[0].team.country}<span class="score">68</span></li>
                <li class="team">{this.props.groups[2].group.teams[1].team.country}<span class="score">54</span></li>
                <li class="team">{this.props.groups[2].group.teams[2].team.country}<span class="score">74</span></li>
                <li class="team">{this.props.groups[2].group.teams[3].team.country}<span class="score">92</span></li>
              </ul>
              <br/>
              <div class="group-details">Group {this.props.groups[4].group.letter}</div>
              <ul class="matchup-round1">
              <li class="team">{this.props.groups[4].group.teams[0].team.country}<span class="score">68</span></li>
              <li class="team">{this.props.groups[4].group.teams[1].team.country}<span class="score">54</span></li>
              <li class="team">{this.props.groups[4].group.teams[2].team.country}<span class="score">74</span></li>
              <li class="team">{this.props.groups[4].group.teams[3].team.country}<span class="score">92</span></li>
              </ul>
              <br/>
              <div class="group-details">Group {this.props.groups[6].group.letter}</div>
              <ul class="matchup-round1">
              <li class="team">{this.props.groups[6].group.teams[0].team.country}<span class="score">68</span></li>
              <li class="team">{this.props.groups[6].group.teams[1].team.country}<span class="score">54</span></li>
              <li class="team">{this.props.groups[6].group.teams[2].team.country}<span class="score">74</span></li>
              <li class="team">{this.props.groups[6].group.teams[3].team.country}<span class="score">92</span></li>
              </ul>
            </div>

            <div class="round round-two current">
                <div class="round-details">Round of 16<br/><span class="date">March 18</span></div>
                <ul class="matchup">
                    <li class="team team-top"><span class="position">A1</span>{this.props.groups[0].group.teams[0].team.country}<span class="score">&nbsp;</span></li>
                    <li class="team team-bottom"><span class="position">B2</span>{this.props.groups[1].group.teams[1].team.country}<span class="score">&nbsp;</span></li>
                </ul>
                <ul class="matchup">
                    <li class="team team-top"><span class="position">C1</span>&nbsp;<span class="score">&nbsp;</span></li>
                    <li class="team team-bottom"><span class="position">D2</span>&nbsp;<span class="score">&nbsp;</span></li>
                </ul>
                <ul class="matchup">
                    <li class="team team-top"><span class="position">E1</span>&nbsp;<span class="score">&nbsp;</span></li>
                    <li class="team team-bottom"><span class="position">F2</span>&nbsp;<span class="score">&nbsp;</span></li>
                </ul>
                <ul class="matchup">
                    <li class="team team-top"><span class="position">G1</span>&nbsp;<span class="score">&nbsp;</span></li>
                    <li class="team team-bottom"><span class="position">H2</span>&nbsp;<span class="score">&nbsp;</span></li>
                </ul>
            </div>

            <div class="round round-three">
                <div class="round-details">Quarter Finals<br/><span class="date">March 22</span></div>
                <ul class="matchup">
                    <li class="team team-top">&nbsp;<span class="score">&nbsp;</span></li>
                    <li class="team team-bottom">&nbsp;<span class="score">&nbsp;</span></li>
                </ul>
                <ul class="matchup">
                    <li class="team team-top">&nbsp;<span class="score">&nbsp;</span></li>
                    <li class="team team-bottom">&nbsp;<span class="score">&nbsp;</span></li>
                </ul>
            </div>

          </div>

          <div class="champion">

            <div class="semis-l">
              <div class="round-details">Semi Final <br/><span class="date">March 26-28</span></div>
              <ul class ="matchup championship">
                <li class="team team-top">&nbsp;<span class="vote-count">&nbsp;</span></li>
                <li class="team team-bottom">&nbsp;<span class="vote-count">&nbsp;</span></li>
              </ul>
            </div>

            <div class="final">
              <i class="fa fa-trophy"></i>
              <div class="round-details">Final <br/><span class="date">March 30 - Apr. 1</span></div>
              <ul class ="matchup championship">
                <li class="team team-top">&nbsp;<span class="vote-count">&nbsp;</span></li>
                <li class="team team-bottom">&nbsp;<span class="vote-count">&nbsp;</span></li>
              </ul>
            </div>

            <div class="semis-r">
              <ul class ="matchup championship">
                <li class="team team-top">&nbsp;<span class="vote-count">&nbsp;</span></li>
                <li class="team team-bottom">&nbsp;<span class="vote-count">&nbsp;</span></li>
              </ul>
              <div class="bottom-semis">Semi Final <br/><span class="date">March 26-28</span></div>
            </div>
          </div>

          <div class="split split-two">

            <div class="round round-three">
              <div class="round-details">Quarterfinals<br/><span class="date">March 22</span></div>
              <ul class="matchup">
                <li class="team team-top">Georgia<span class="score">&nbsp;</span></li>
                <li class="team team-bottom">&nbsp;<span class="score">&nbsp;</span></li>
              </ul>
              <ul class="matchup">
                <li class="team team-top">&nbsp;<span class="score">&nbsp;</span></li>
                <li class="team team-bottom">&nbsp;<span class="score">&nbsp;</span></li>
              </ul>
            </div>

            <div class="round round-two current">
              <div class="round-details">Round of 16<br/><span class="date">March 18</span></div>
              <ul class="matchup">
                <li class="team team-top"><span class="position">B1</span>&nbsp;<span class="score">&nbsp;</span></li>
                <li class="team team-bottom"><span class="position">A2</span>&nbsp;<span class="score">&nbsp;</span></li>
              </ul>
              <ul class="matchup">
                <li class="team team-top"><span class="position">D1</span>&nbsp;<span class="score">&nbsp;</span></li>
                <li class="team team-bottom"><span class="position">C2</span>&nbsp;<span class="score">&nbsp;</span></li>
              </ul>
              <ul class="matchup">
                <li class="team team-top"><span class="position">F1</span>&nbsp;<span class="score">&nbsp;</span></li>
                <li class="team team-bottom"><span class="position">E2</span>&nbsp;<span class="score">&nbsp;</span></li>
              </ul>
              <ul class="matchup">
                <li class="team team-top"><span class="position">H1</span>&nbsp;<span class="score">&nbsp;</span></li>
                <li class="team team-bottom"><span class="position">G2</span>&nbsp;<span class="score">&nbsp;</span></li>
              </ul>
            </div>

            <div class="round round-one current">
              <div class="round-details">Group Stage<br/></div>
              <div class="group-details">Group {this.props.groups[1].group.letter}</div>
              <ul class="matchup-round1">
              <li class="team">{this.props.groups[1].group.teams[0].team.country}<span class="score">68</span></li>
              <li class="team">{this.props.groups[1].group.teams[1].team.country}<span class="score">54</span></li>
              <li class="team">{this.props.groups[1].group.teams[2].team.country}<span class="score">74</span></li>
              <li class="team">{this.props.groups[1].group.teams[3].team.country}<span class="score">92</span></li>
              </ul>
              <br/>
              <div class="group-details">Group {this.props.groups[3].group.letter}</div>
              <ul class="matchup-round1">
              <li class="team">{this.props.groups[3].group.teams[0].team.country}<span class="score">68</span></li>
              <li class="team">{this.props.groups[3].group.teams[1].team.country}<span class="score">54</span></li>
              <li class="team">{this.props.groups[3].group.teams[2].team.country}<span class="score">74</span></li>
              <li class="team">{this.props.groups[3].group.teams[3].team.country}<span class="score">92</span></li>
              </ul>
              <br/>
              <div class="group-details">Group {this.props.groups[5].group.letter}</div>
              <ul class="matchup-round1">
              <li class="team">{this.props.groups[5].group.teams[0].team.country}<span class="score">68</span></li>
              <li class="team">{this.props.groups[5].group.teams[1].team.country}<span class="score">54</span></li>
              <li class="team">{this.props.groups[5].group.teams[2].team.country}<span class="score">74</span></li>
              <li class="team">{this.props.groups[5].group.teams[3].team.country}<span class="score">92</span></li>
              </ul>
              <br/>
              <div class="group-details">Group {this.props.groups[7].group.letter}</div>
              <ul class="matchup-round1">
              <li class="team">{this.props.groups[7].group.teams[0].team.country}<span class="score">68</span></li>
              <li class="team">{this.props.groups[7].group.teams[1].team.country}<span class="score">54</span></li>
              <li class="team">{this.props.groups[7].group.teams[2].team.country}<span class="score">74</span></li>
              <li class="team">{this.props.groups[7].group.teams[3].team.country}<span class="score">92</span></li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      <section class="share">
        <div class="share-wrap">
          <a class="share-icon" href="https://twitter.com/basement47"><i class="fa fa-twitter"></i></a>
          <a class="share-icon" href="#"><i class="fa fa-facebook"></i></a>
          <a class="share-icon" href="#"><i class="fa fa-envelope"></i></a>
        </div>
      </section>
    </body>
    </div>
    :
    <div>
    </div>


    return (
      <div>
      <button onClick={this.hello}/>
        {bracket}
      </div>
    );
  }
}

export default Bracket;