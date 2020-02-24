// look at project


//talk about context of getting a job
// make sure the code you are starting with is a good state
npm run test 
// check out coverage
npm run test -- --coverage 

// folder where jest executes __tests__
//example tests returns x given y
//test.only
//test.skip


// genMessage===========================================>
describe('generateMEssage function', () => {
  //won tied lost
  test('Given "won" returns "Very Nice" ', () => {
      const status = "Won"
      const result = generateMessage(status);
      expect(result).toBe('very nice')
  })

  // check matchers
  // test runner vs asertions compare objects

  //implicit fail vs success
  
})

// in helper
export const generateMessage = (status) => {
  return 'very nice';
}

  // complete tests for
  //tied
  //lost
  //waiting
  // 

//in test generateMessage to our test
// look at test coverage breakdown 

// robot choose===========================================>
describe('chooseRobotItem function', () => {
  test('returns "Tree" if player is "Moai" and cheating is true', () => {
    const cheating = true;
    const playerChoice = 'Moai';
    const result = chooseRobotItem(cheating, playerChoice);
    expect(result).toEqual('Tree');
  });
});

export const chooseRobotItem = (cheating, playerItem) => {
  const lookup = {
    'Tree': 'Axe',
    'Moai': 'Tree',
    'Axe': 'Moai'
  };
  if (cheating) {
    return lookup[playerItem];
  } else {
    const choices = ["Moai", "Axe", "Tree"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
};


//INTEGRATION=TESTS==========================================>

//toggle cheating===========================================>

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Game from './Game';

test('Change cheat state when clicking on robot', () => {
  const { getByTestId, getByText } = render(<Game />);
  const robotIcon = getByTestId('robot-icon');

  fireEvent.click(getByText('🤖'));
  expect(robotIcon).toHaveClass('cheating');

  fireEvent.click(getByText('🤖'));
  expect(robotIcon).not.toHaveClass('cheating');
});

//add cheating toggle
const {state, setState} = props;

const handleClick = () => {
  return setState((prev) => (
    {...prev, cheating: (prev.cheating ? false : true)}
  ));
};

className={ state.cheating ? 'cheating' : '' }
onClick={ handleClick }


//test result component===========================================>


import React from 'react'
import { render, getByTestId } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Result from './Result'

test('Shows appropriate message when the status is "Waiting"', () => {
  const fakeState = {
    compSelection: null,
    playerSelection: null,
    status: 'Waiting',
    cheating: false
  };
  const { container } = render(<Result status={fakeState.status} />);

  expect(getByTestId(container, 'result_footer')).toHaveTextContent('Waiting for your call!');
});

// add to 

import React from 'react';
import { genFeedbackMessage } from '../helpers/helpers';

export default function Result(props) {
  const message = genFeedbackMessage(props.status);
  return(
    <footer data-testid="result_footer">
      <h2>{ message }</h2>
    </footer>
  );
}
