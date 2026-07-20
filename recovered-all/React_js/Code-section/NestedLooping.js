import React from 'react';

const arr = [
  {
    id: 1,
    name: 'pawan',
    roll: 40,
    subject: [{ id: 101, title: 'Post1' }],
  },
  {
    id: 2,
    name: 'Pranav',
    roll: 41,
    subject: [{ id: 102, title: 'Post2' }],
  },
  {
    id: 3,
    name: 'Shivam sharma',
    roll: 90,
    subject: [{ id: 103, title: 'Post3' }],
  },
];

export default function Loop() {
  return (
    <>
      <h1
        style={{
          color: 'red',
          display: 'flex',
          flexdirection: 'center',
          justifyContent: 'center',
          background: 'tan',
        }}
      >
        Loop
      </h1>
      {arr.map((item) => (
        <React.Fragment key={item.id}>
          <h2
            style={{
              background: 'black',
              color: 'white',
              boxShadow: '5px 5px 10px 9px rgba(0,0,0,0.5)',
            }}
          >
            {item.name} {item.roll}
          </h2>
          {item.subject.map((subj) => (
            <p key={subj.id}>{subj.title}</p>
          ))}
        </React.Fragment>
      ))}
    </>
  );
}
