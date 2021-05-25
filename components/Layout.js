
import React, {useState} from 'react';

export default function Layout({id, children}) {
    console.log(id);

    const [answers, setAnswers] = useState({});

    const answeredQuestion = (solution, _answers)=>{
        console.log(solution, answers);
        setAnswers({
            ...answers,
            [solution] : _answers,
        })
    }

    const readyToSubmit = (solution)=>{
        
        if (!answers[solution]) return false;

        return ["understand","use","secure","rating", "memory"].reduce((acc,item)=>{
            return acc && answers[solution][item] !== undefined;
        },true);
    }

    const submit = (solution)=>{
        console.log("submitted!", answers[solution]);
    }
   
    return (<>
        {React.cloneElement(children, { answeredQuestion, submit, readyToSubmit })}
      </>
    );
  }
  
export async function getServerSideProps(context) {
    return {
      props: {id: Math.round(Math.random()  * 500)}
    }
  }
  