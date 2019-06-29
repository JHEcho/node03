import React, { Component } from 'react';
import { log } from 'ruucm-util';
import { map } from 'lodash';
// Import Styles!
import './use-data.scss';

var obj = {
  method: 'GET',
  headers: {
    'X-Auth-Token': 'e600784123014d489c796ab72ed9587d',
  },
};
export default class UseData extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    log('getData 😍');
    fetch('https://api.football-data.org/v1/competitions/394/leagueTable', obj)
      .then(response => response.json())
      .then(responseJson => {
        log('setSate 🛍', responseJson);
        this.setState({
          data: [
            {
              name: 'Bayern',
              goalsAgainst: responseJson.standing[0].goalsAgainst,
              goals: responseJson.standing[0].goals,
              wins: responseJson.standing[0].wins,
              draws: responseJson.standing[0].draws,
              losses: responseJson.standing[0].losses,
            },
            {
              name: 'BVB',
              goalsAgainst: responseJson.standing[1].goalsAgainst,
              goals: responseJson.standing[1].goals,
              wins: responseJson.standing[1].wins,
              draws: responseJson.standing[1].draws,
              losses: responseJson.standing[1].losses,
            },
            {
              name: 'Leverkusen',
              goalsAgainst: responseJson.standing[2].goalsAgainst,
              goals: responseJson.standing[2].goals,
              wins: responseJson.standing[2].wins,
              draws: responseJson.standing[2].draws,
              losses: responseJson.standing[2].losses,
            },
            {
              name: 'Gladbach',
              goalsAgainst: responseJson.standing[3].goalsAgainst,
              goals: responseJson.standing[3].goals,
              wins: responseJson.standing[3].wins,
              draws: responseJson.standing[3].draws,
              losses: responseJson.standing[3].losses,
            },
          ],
        });
      });
  }
  render() {
    return (
      <div className="use-data-default-style">
        <p>Data를 가져온후, 리액트에서는</p>
        <p>
          <strong>this.setState</strong>를 이용해 보관합니다 🛍
        </p>
        <br />
        <p>사용시에는,</p>
        <p>
          <strong>this.state</strong> 라는것을 이용해 아래처럼 가져다가 씁니다
          💎
        </p>
        {log('this.state 💎', this.state)}
        {map(this.state.data, (result, id) => (
          <li key={id}>
            {result.name} : {result.goals} Goals
          </li>
        ))}
      </div>
    );
  }
}
