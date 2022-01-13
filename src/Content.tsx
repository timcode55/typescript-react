import React from 'react';
import Part from './Part';

interface ContentProps {
  name: string;
  exerciseCount: number;
  type: string;
  description?: string;
  exerciseSubmissionLink?: string;
  requirements?: string[];
  groupProjectCount?: number;
}

// const Content: React.FC<ContentProps> = (props: ContentProps) => {
const Content = ({ data }: { data: ContentProps[] }) => {
  console.log(data, 'DATA');
  return (
    <div>
      {data.map((item) => {
        return (
          <div key={item.name}>
            <h1>
              {item.name} {item.exerciseCount}
            </h1>
            <i>{item.description}</i>
            <p>{item.exerciseSubmissionLink}</p>
            {item.requirements && <p>Required Skills: {item.requirements}</p>}
            {item.groupProjectCount && (
              <p>Project Exercises: {item.groupProjectCount}</p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Content;
