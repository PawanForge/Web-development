import React from "react";
export default function StudentTable(){
  const students=[
    {name:"Alice",
    subjects:[
      {name:"Math",score:90},
      {name:"Science" , score:85},
    ],
  },
  {
    name:"Bob",
    subjects:[
      {name:"Math" , score:75},
      {name:"Science", score:80},
      {name:"History" , score:70},
    ],
  },
  ];
  return(
    <div>
    {
      students.map((student,i)=>(
        <div key={i}>
          <h3>{student.name}</h3>
          <ul>
            {
              student.subjects.map((subject,j)=>(
                <li key={j}>
                  
                   { subject.name}:{subject.score}
                  </li>
              ))
        
        }
        </ul>
        </div>
      ))
    }
    </div>
  );
}
