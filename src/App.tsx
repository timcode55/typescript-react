import React from 'react';
import Header from './Header';
import Content from './Content';
import Total from './Total';

const App = () => {
  const courseName = 'Half Stack application development';
  // new types
  interface CoursePartBase {
    name: string;
    exerciseCount: number;
    type: string;
  }

  interface CoursePartOne extends CoursePartBase {
    name: 'Fundamentals';
    description: string;
  }

  interface CoursePartTwo extends CoursePartBase {
    name: 'Advanced';
    description: string;
  }
  interface CoursePartThree extends CoursePartBase {
    name: 'Using props to pass data';
    groupProjectCount: number;
  }

  interface CoursePartFour extends CoursePartBase {
    name: 'Deeper type usage';
    description: string;
    exerciseSubmissionLink: string;
  }

  interface CoursePartFive extends CoursePartBase {
    name: 'Backend development';
    description: string;
    requirements: string[];
  }

  type CoursePart =
    | CoursePartOne
    | CoursePartTwo
    | CoursePartThree
    | CoursePartFour
    | CoursePartFive;

  // this is the new coursePart variable
  const courseParts: CoursePart[] = [
    {
      name: 'Fundamentals',
      exerciseCount: 10,
      description: 'This is the leisured course part',
      type: 'normal'
    },
    {
      name: 'Advanced',
      exerciseCount: 7,
      description: 'This is the harded course part',
      type: 'normal'
    },
    {
      name: 'Using props to pass data',
      exerciseCount: 7,
      groupProjectCount: 3,
      type: 'groupProject'
    },
    {
      name: 'Deeper type usage',
      exerciseCount: 14,
      description: 'Confusing description',
      exerciseSubmissionLink: 'https://fake-exercise-submit.made-up-url.dev',
      type: 'submission'
    },
    {
      name: 'Backend development',
      exerciseCount: 21,
      description: 'Typing the backend',
      requirements: ['nodejs', 'jest'],
      type: 'special'
    }
  ];

  const totalExerciseCount = courseParts.reduce(
    (carry, part) => carry + part.exerciseCount,
    0
  );

  return (
    <div>
      <Header name={courseName} />
      <Content data={courseParts} />
      <Total total={totalExerciseCount} />
    </div>
  );
};

export default App;
