import Head from 'next/head'
import {useState, useEffect} from 'react'
import request from 'superagent';
import { useRouter } from 'next/router'


About.getInitialProps = async ({ query }) => {
    const {id} = query
    return {id}
}

export default function About({id}) {
  const router = useRouter()
  const [experience, setExperience] = useState(); 
  const [household, setHousehold]   = useState(); 
  const [complete, setComplete] = useState(false);
  const [waiting, setWaiting] = useState(false);

  const linkText = waiting ? "..." : "NEXT"

  const answerExperience  = (value)=>{
    setExperience(value);
  }

  const answerHousehold  = (value)=>{
    setHousehold(value);
  }

  const next = async ()=>{
    setWaiting(true);
    await request.post('/api/about').set('Content-Type', 'application/json').send({id:Number(id),household, experience});
    router.push(`/shelves?id=${id}`);
  }

  useEffect(()=>{
      setComplete(household && experience)
  },[household, experience]);

 const calcexstyle = (value)=>{
    return {
        background: experience===value  ? "#4087CF" :"none", 
        borderRadius:experience===value ? 6 : 0,
        boxShadow: experience===value ? "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)" : "none",
        padding: 10,
        margin: 8,    
    }
  }

  const calchstyle = (value)=>{
    return {
        background: household===value  ? "#4087CF" :"none", 
        borderRadius:household===value ? 6 : 0,
        boxShadow: household===value ? "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)" : "none",
        padding: 10,
        margin: 8,    
    }
  }
  return (
    <div className="flex flex-grow justify-center bg-lightgray p-1">
        <div className="bg-gray w-766 p-0 m-0 rounded shadow-xl">
            <Head>
                <title>About you</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="bg-darkgray p-4">
            <div className="text-white p-4 text-center"> A couple of quick questions about you</div>
           
                <div className="text-white pb-4"> Which of the following best describes your familiarity with computer and network security?</div>
                <hr className="mb-6 text-white"/>
                <div className="grid grid-cols-12 mb-4">
                    <div  style={calcexstyle("none")} onClick={()=>answerExperience("none")} className="col-span-6">
                            <div className="text-lg text-orange mb-2">Very little</div> 
                            <div className="text-xs pr-6 text-white ">You may know in general terms why networks and devices need to be secure, but are mostly unfamiliar with approaches that can improve security.</div> 
                    </div>    
                    <div  style={calcexstyle("little")} onClick={()=>answerExperience("little")} className="col-span-6">
                            <div className="text-lg text-orange mb-2">Some understanding</div> 
                            <div className="text-xs pr-6 text-white">You know some of the basics; you know the difference between http and https, you know about some attacks that can be performed on devices and networks - you've taken some steps to improve your network and device security.</div> 
                    </div>
                    <div style={calcexstyle("good")} onClick={()=>answerExperience("good")} className="col-span-6">
                            <div className="text-lg text-orange mb-2">A good understanding</div> 
                            <div className="text-xs pr-6 text-white">You have practical experience with improving your device and network security; You have a good understanding of exploits and attacks and are familiar with security terms and techniques.</div> 
                    </div>
                    <div style={calcexstyle("professional")} onClick={()=>answerExperience("professional")} className="col-span-6">
                            <div className="text-lg text-orange mb-2">Security professional</div> 
                            <div className="text-xs pr-6 text-white">You have a strong academic or professional experience relating to privacy and/or security.</div> 
                    </div>
                </div>
            </div>

            <div className="bg-darkgray p-4 ">
            <div className="text-white pb-4"> Which of the following best describes the household that you live in?</div>
            <hr className="mb-6 text-white"/>
            <div className="grid grid-cols-12 mb-4">
                <div style={calchstyle("lone")} onClick={()=>answerHousehold("lone")} className="col-span-6">
                        <div className="text-lg text-orange">Lone</div> 
                        <div className="text-xs pr-6 text-white ">You live on your own</div> 
                </div>    
                <div style={calchstyle("couple")}onClick={()=>answerHousehold("couple")} className="col-span-6">
                        <div className="text-lg text-orange">Couple</div> 
                        <div className="text-xs pr-6 text-white">You live with a partner</div> 
                </div>
                <div style={calchstyle("family")} onClick={()=>answerHousehold("family")} className="col-span-6">
                        <div className="text-lg text-orange">Family</div> 
                        <div className="text-xs pr-6 text-white">You live with members of your family (children, older parents etc.)</div> 
                </div>
                <div style={calchstyle("shared")} onClick={()=>answerHousehold("shared")} className="col-span-6">
                        <div className="text-lg text-orange">Shared</div> 
                        <div className="text-xs pr-6 text-white">You live with non-family members (e.g.: friends, students, lodgers).</div> 
                </div>
            </div>
            <div onClick={next} className="text-orange font-bold text-center" style={{cursor: "pointer", opacity: complete? 1: 0.3}}>{linkText}</div>
            </div>
        </div> 
       
    </div>
  )
}