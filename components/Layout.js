
import React, {useState} from 'react';
import request from 'superagent';

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
        console.log("ready to submit", solution);

        if (!answers[solution]) return false;

        if (answers[solution]["understand"] == "no"){
            return true;
        }
        return ["understand","use","secure","rating", "memory"].reduce((acc,item)=>{
            return acc && answers[solution][item] !== undefined;
        },true);
    }

    const submit = async (solution)=>{
        await request.post('/api/response').set('Content-Type', 'application/json').send({id:Number(id),solution,...answers[solution]});
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
  