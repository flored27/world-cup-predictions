import React, { Component } from 'react';
import '../../styles/bracket.css';

class Bracket extends Component {

  render() {
    console.log(this.props.groups)
    const bracket = this.props.groups && this.props.matches ?

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
              <div class="group-details">Group {this.props.groups[0].letter}</div>
              <ul class="matchup-round1">
                <li class="team"><span class="position">A1</span>{this.props.groups[0].ordered_teams[0].country}<span class="score">{this.props.groups[0].ordered_teams[0].points}</span></li>
                <li class="team"><span class="position">A2</span>{this.props.groups[0].ordered_teams[1].country}<span class="score">{this.props.groups[0].ordered_teams[1].points}</span></li>
                <li class="team">{this.props.groups[0].ordered_teams[2].country}<span class="score">{this.props.groups[0].ordered_teams[2].points}</span></li>
                <li class="team">{this.props.groups[0].ordered_teams[3].country}<span class="score">{this.props.groups[0].ordered_teams[3].points}</span></li>
              </ul>
              <br/>
              <div class="group-details">Group {this.props.groups[2].letter}</div>
              <ul class="matchup-round1">
                <li class="team">{this.props.groups[2].ordered_teams[0].country}<span class="score">{this.props.groups[2].ordered_teams[0].points}</span></li>
                <li class="team">{this.props.groups[2].ordered_teams[1].country}<span class="score">{this.props.groups[2].ordered_teams[1].points}</span></li>
                <li class="team">{this.props.groups[2].ordered_teams[2].country}<span class="score">{this.props.groups[2].ordered_teams[2].points}</span></li>
                <li class="team">{this.props.groups[2].ordered_teams[3].country}<span class="score">{this.props.groups[2].ordered_teams[3].points}</span></li>
              </ul>
              <br/>
              <div class="group-details">Group {this.props.groups[4].letter}</div>
              <ul class="matchup-round1">
              <li class="team">{this.props.groups[4].ordered_teams[0].country}<span class="score">{this.props.groups[4].ordered_teams[0].points}</span></li>
              <li class="team">{this.props.groups[4].ordered_teams[1].country}<span class="score">{this.props.groups[4].ordered_teams[1].points}</span></li>
              <li class="team">{this.props.groups[4].ordered_teams[2].country}<span class="score">{this.props.groups[4].ordered_teams[2].points}</span></li>
              <li class="team">{this.props.groups[4].ordered_teams[3].country}<span class="score">{this.props.groups[4].ordered_teams[3].points}</span></li>
              </ul>
              <br/>
              <div class="group-details">Group {this.props.groups[6].letter}</div>
              <ul class="matchup-round1">
              <li class="team">{this.props.groups[6].ordered_teams[0].country}<span class="score">{this.props.groups[6].ordered_teams[0].points}</span></li>
              <li class="team">{this.props.groups[6].ordered_teams[1].country}<span class="score">{this.props.groups[6].ordered_teams[1].points}</span></li>
              <li class="team">{this.props.groups[6].ordered_teams[2].country}<span class="score">{this.props.groups[6].ordered_teams[2].points}</span></li>
              <li class="team">{this.props.groups[6].ordered_teams[3].country}<span class="score">{this.props.groups[6].ordered_teams[3].points}</span></li>
              </ul>
            </div>

            <div class="round round-two current">
                <div class="round-details">Round of 16<br/><span class="date">March 18</span></div>
                <ul class="matchup">
                    <li class="team team-top"><span class="position">A1</span>{this.props.matches[48].home_team.country}<span class="score">{this.props.matches[48].home_team.goals}</span></li>
                    <li class="team team-bottom"><span class="position">B2</span>{this.props.matches[48].away_team.country}<span class="score">{this.props.matches[48].away_team.goals}</span></li>
                </ul>
                <ul class="matchup">
                    <li class="team team-top"><span class="position">C1</span>{this.props.matches[49].home_team.country}<span class="score">{this.props.matches[49].home_team.goals}</span></li>
                    <li class="team team-bottom"><span class="position">D2</span>{this.props.matches[49].away_team.country}<span class="score">{this.props.matches[49].away_team.goals}</span></li>
                </ul>
                <ul class="matchup">
                    <li class="team team-top"><span class="position">E1</span>{this.props.matches[52].home_team.country}<span class="score">{this.props.matches[52].home_team.goals}</span></li>
                    <li class="team team-bottom"><span class="position">F2</span>{this.props.matches[52].away_team.country}<span class="score">{this.props.matches[52].away_team.goals}</span></li>
                </ul>
                <ul class="matchup">
                    <li class="team team-top"><span class="position">G1</span>{this.props.matches[53].home_team.country}<span class="score">{this.props.matches[53].home_team.goals}</span></li>
                    <li class="team team-bottom"><span class="position">H2</span>{this.props.matches[53].away_team.country}<span class="score">{this.props.matches[53].away_team.goals}</span></li>
                </ul>
            </div>

            <div class="round round-three">
                <div class="round-details">Quarter Finals<br/><span class="date">March 22</span></div>
                <ul class="matchup">
                    <li class="team team-top">{this.props.matches[56].away_team.country}<span class="score">{this.props.matches[56].away_team.goals}</span></li>
                    <li class="team team-bottom">{this.props.matches[56].home_team.country}<span class="score">{this.props.matches[56].home_team.goals}</span></li>
                </ul>
                <ul class="matchup">
                    <li class="team team-top">{this.props.matches[57].home_team.country}<span class="score">{this.props.matches[57].home_team.goals}</span></li>
                    <li class="team team-bottom">{this.props.matches[57].away_team.country}<span class="score">{this.props.matches[57].away_team.goals}</span></li>
                </ul>
            </div>

          </div>

          <div class="champion">

            <div class="semis-l">
              <div class="round-details">Semi Final <br/><span class="date">March 26-28</span></div>
              <ul class ="matchup championship">
                <li class="team team-top">{this.props.matches[60].home_team.country}<span class="score">{this.props.matches[60].home_team.goals}</span></li>
                <li class="team team-bottom">{this.props.matches[60].away_team.country}<span class="score">{this.props.matches[60].away_team.goals}</span></li>
              </ul>
            </div>

            <div class="final">
              <i class="fa fa-trophy"></i>
              <div class="round-details">Final <br/><span class="date">March 30 - Apr. 1</span></div>
              <ul class ="matchup championship">
                <li class="team team-top">{this.props.matches[63].home_team.country}<span class="score">{this.props.matches[63].home_team.goals}</span></li>
                <li class="team team-bottom">{this.props.matches[63].away_team.country}<span class="score">{this.props.matches[63].away_team.goals}</span></li>
              </ul>
            </div>

            <div class="semis-r">
              <ul class ="matchup championship">
                <li class="team team-top">{this.props.matches[61].home_team.country}<span class="score">{this.props.matches[61].home_team.goals}</span></li>
                <li class="team team-bottom">{this.props.matches[61].away_team.country}<span class="score">{this.props.matches[61].away_team.goals}</span></li>
              </ul>
              <div class="bottom-semis">Semi Final <br/><span class="date">March 26-28</span></div>
            </div>
          </div>

          <div class="split split-two">

            <div class="round round-three">
              <div class="round-details">Quarterfinals<br/><span class="date">March 22</span></div>
              <ul class="matchup">
                <li class="team team-top">{this.props.matches[59].home_team.country}<span class="score">{this.props.matches[59].home_team.goals}</span></li>
                <li class="team team-bottom">{this.props.matches[59].away_team.country}<span class="score">{this.props.matches[59].away_team.goals}</span></li>
              </ul>
              <ul class="matchup">
                <li class="team team-top">{this.props.matches[58].home_team.country}<span class="score">{this.props.matches[58].home_team.goals}</span></li>
                <li class="team team-bottom">{this.props.matches[58].away_team.country}<span class="score">{this.props.matches[58].away_team.goals}</span></li>
              </ul>
            </div>

            <div class="round round-two current">
              <div class="round-details">Round of 16<br/><span class="date">March 18</span></div>
              <ul class="matchup">
                <li class="team team-top"><span class="position">B1</span>{this.props.matches[50].home_team.country}<span class="score">{this.props.matches[50].home_team.goals}</span></li>
                <li class="team team-bottom"><span class="position">A2</span>{this.props.matches[50].away_team.country}<span class="score">{this.props.matches[50].away_team.goals}</span></li>
              </ul>
              <ul class="matchup">
                <li class="team team-top"><span class="position">D1</span>{this.props.matches[51].home_team.country}<span class="score">{this.props.matches[51].home_team.goals}</span></li>
                <li class="team team-bottom"><span class="position">C2</span>{this.props.matches[51].away_team.country}<span class="score">{this.props.matches[51].away_team.goals}</span></li>
              </ul>
              <ul class="matchup">
                <li class="team team-top"><span class="position">F1</span>{this.props.matches[54].home_team.country}<span class="score">{this.props.matches[54].home_team.goals}</span></li>
                <li class="team team-bottom"><span class="position">E2</span>{this.props.matches[54].away_team.country}<span class="score">{this.props.matches[54].away_team.goals}</span></li>
              </ul>
              <ul class="matchup">
                <li class="team team-top"><span class="position">H1</span>{this.props.matches[55].home_team.country}<span class="score">{this.props.matches[55].home_team.goals}</span></li>
                <li class="team team-bottom"><span class="position">G2</span>{this.props.matches[55].away_team.country}<span class="score">{this.props.matches[55].away_team.goals}</span></li>
              </ul>
            </div>

            <div class="round round-one current">
              <div class="round-details">Group Stage<br/></div>
              <div class="group-details">Group {this.props.groups[1].letter}</div>
              <ul class="matchup-round1">
              <li class="team">{this.props.groups[1].ordered_teams[0].country}<span class="score">{this.props.groups[1].ordered_teams[0].points}</span></li>
              <li class="team">{this.props.groups[1].ordered_teams[1].country}<span class="score">{this.props.groups[1].ordered_teams[1].points}</span></li>
              <li class="team">{this.props.groups[1].ordered_teams[2].country}<span class="score">{this.props.groups[1].ordered_teams[2].points}</span></li>
              <li class="team">{this.props.groups[1].ordered_teams[3].country}<span class="score">{this.props.groups[1].ordered_teams[3].points}</span></li>
              </ul>
              <br/>
              <div class="group-details">Group {this.props.groups[3].letter}</div>
              <ul class="matchup-round1">
              <li class="team">{this.props.groups[3].ordered_teams[0].country}<span class="score">{this.props.groups[3].ordered_teams[0].points}</span></li>
              <li class="team">{this.props.groups[3].ordered_teams[1].country}<span class="score">{this.props.groups[3].ordered_teams[1].points}</span></li>
              <li class="team">{this.props.groups[3].ordered_teams[2].country}<span class="score">{this.props.groups[3].ordered_teams[2].points}</span></li>
              <li class="team">{this.props.groups[3].ordered_teams[3].country}<span class="score">{this.props.groups[3].ordered_teams[3].points}</span></li>
              </ul>
              <br/>
              <div class="group-details">Group {this.props.groups[5].letter}</div>
              <ul class="matchup-round1">
              <li class="team">{this.props.groups[5].ordered_teams[0].country}<span class="score">{this.props.groups[5].ordered_teams[0].points}</span></li>
              <li class="team">{this.props.groups[5].ordered_teams[1].country}<span class="score">{this.props.groups[5].ordered_teams[1].points}</span></li>
              <li class="team">{this.props.groups[5].ordered_teams[2].country}<span class="score">{this.props.groups[5].ordered_teams[2].points}</span></li>
              <li class="team">{this.props.groups[5].ordered_teams[3].country}<span class="score">{this.props.groups[5].ordered_teams[3].points}</span></li>
              </ul>
              <br/>
              <div class="group-details">Group {this.props.groups[7].letter}</div>
              <ul class="matchup-round1">
              <li class="team">{this.props.groups[7].ordered_teams[0].country}<span class="score">{this.props.groups[7].ordered_teams[0].points}</span></li>
              <li class="team">{this.props.groups[7].ordered_teams[1].country}<span class="score">{this.props.groups[7].ordered_teams[1].points}</span></li>
              <li class="team">{this.props.groups[7].ordered_teams[2].country}<span class="score">{this.props.groups[7].ordered_teams[2].points}</span></li>
              <li class="team">{this.props.groups[7].ordered_teams[3].country}<span class="score">{this.props.groups[7].ordered_teams[3].points}</span></li>
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
        {bracket}
      </div>
    );
  }
}

export default Bracket;
