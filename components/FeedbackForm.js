import Link from 'next/link'
import {useState, useEffect} from 'react';


export default function FeedbackForm({id, submit, answeredQuestion, readyToSubmit, solution, next, config}) {
  
  const [understand, setUnderstand] = useState();
  const [secure, setSecure] = useState();
  const [securityfollowup, setSecurityFollowup] = useState("");
  const [memory, setMemory] = useState();
  const [rating, setRating] = useState();
  const [ratingfollowup, setRatingFollowup] = useState("");
  const [use, setUse] = useState();
  const [usefollowup, setUseFollowup] = useState("");
  const [feedback, setFeedback] = useState("");
  const [waiting, setWaiting] = useState(false);

  const linktext = waiting ? "..." : "SUBMIT AND GO TO NEXT";

  const answerUnderstand = (value)=>{
    setUnderstand(value);
  }

  const answerSecure = (security)=>{
    setSecure(security);
  }
  
  const answerSecurityFollowup = (text)=>{
    setSecurityFollowup(text);
  }

  const answerRatingFollowup = (text)=>{
    setRatingFollowup(text);
  }

  const answerMemory = (e)=>{
    setMemory(e.target.value);
  }

  const answerRating= (e)=>{
    setRating(e.target.value);
  }

  const answerUse = (value)=>{
    setUse(value);
  }

  const answerUseFollowup = (text)=>{
    setUseFollowup(text);
  }

  const answerFeedback = (text)=>{
    setFeedback(text);
  }
  
  useEffect(()=>{ 
    answeredQuestion(solution, {
      id,
      understand,
      secure,
      securityfollowup,
      memory,
      rating,
      ratingfollowup,
      use,
      usefollowup, 
      feedback
    })
  },[understand, secure, securityfollowup,memory,rating,ratingfollowup,use, usefollowup, feedback]);

  const calcsecuritystyle = (value)=>{
    return {
        background: secure===value  ? "#4087CF" :"none", 
        borderRadius:secure===value ? 6 : 0,
        boxShadow: secure===value ? "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)" : "none",
        padding: 10,
        margin: 8,    
    }
  }


  const renderSecureFollowup = ()=>{
    return <div>
              <div className="text-white text-sm mt-6 mb-1">
                  In what way(s) could you imagine security being compromised? (optional)
              </div>
              <textarea onChange={(e)=>answerSecurityFollowup(e.target.value)} className="resize border rounded-md w-full p-2"></textarea>
          </div>
  }

  const renderUnderstand = ()=>{
      return  <div className="grid grid-cols-12">
              <div className="col-span-9 p-4 text-white ">
                 Do you understand the overall approach?
              </div>
              <div className="col-span-3 p-4 text-white text-bold text-xs" >
                    <span onClick={()=>answerUnderstand("yes")} style={{"color" : understand == "yes" ? "red" : "white"}}>YES</span> / <span onClick={()=>answerUnderstand("no")}  style={{"color" : understand == "no" ? "red" : "white"}}>NO</span>
              </div>
      </div>
  }

  const renderSecure = ()=>{
    return <>
            <hr className="text-lightgray m-4"/>
            <div className="grid grid-cols-12">
              <div className="col-span-12 p-4">
                 <div className="text-white">How secure do you judge the approach to be?</div>
                 <div className="text-white opacity-50 text-xs">assuming you don't necessarily trust everyone in your home</div>
               </div>
            </div>
            <div className="color white w-full pl-6 pr-6 pb-6">
                    <div className="bg-lightgray p-4">
                    <div className="grid grid-cols-12 mb-4">
                        <div style={calcsecuritystyle("insecure")} onClick={()=>answerSecure("insecure")} className="col-span-12 md:col-span-4">
                               <div className="text-lg text-orange">Insecure</div> 
                               <div className="text-xs pr-6 text-white ">This would provide little to no extra security</div> 
                        </div>    
                        <div style={calcsecuritystyle("mostly secure")}  onClick={()=>answerSecure("mostly secure")} className="col-span-12 md:col-span-4">
                               <div className="text-lg text-orange">Mostly Secure</div> 
                               <div className="text-xs pr-6 text-white">This would add more security but there are some weaknesses</div> 
                        </div>
                        <div style={calcsecuritystyle("secure")}  onClick={()=>answerSecure("secure")} className="col-span-12 md:col-span-4">
                               <div className="text-lg text-orange">Secure</div> 
                               <div className="text-xs pr-6 text-white">This is a secure solution that would be difficult to break</div> 
                        </div>
                    </div>
                    
                    {secure && secure !== "secure" && renderSecureFollowup()}
                    </div>
              </div>
        </>
  }

  const renderMemory = ()=>{
    return <><hr className="text-lightgray m-4"/>
             <div className="col-span-10 p-4">
                 <div className="text-white">Assuming you used this approach for a few different tasks, how easy do you think it would be to remember different configurations?</div>
                 <div className="text-white opacity-50 text-xs">{`i.e. ${config}`}</div>
              </div>
              <div className="color white w-full pl-6 pr-6 pb-6">
                    <div className="bg-lightgray p-4">
                    <div className="grid grid-cols-7">
                        <div className="col-span-1">
                               <div className="text-xs font-bold text-orange pr-4">Very difficult</div> 
                        </div>
                        <div className="col-span-1 text-center">
                            <input onClick={answerMemory} type="radio" className="form-radio" name="memory" value="0"/>
                        </div>
                        <div className="col-span-1 text-center">
                            <input onClick={answerMemory} type="radio" className="form-radio" name="memory" value="1"/>
                        </div>
                        <div className="col-span-1 text-center">
                            <input onClick={answerMemory} type="radio" className="form-radio" name="memory" value="2"/>
                        </div>
                        <div className="col-span-1 text-center">
                            <input onClick={answerMemory} type="radio" className="form-radio" name="memory" value="3"/>
                        </div>
                        <div className="col-span-1 text-center">
                            <input onClick={answerMemory} type="radio" className="form-radio" name="memory" value="4"/>
                        </div>
                        <div className="col-span-1">
                               <div className="text-xs font-bold text-orange">Very Easy</div> 
                        </div>
                      </div>
                      </div>
                </div></>
  }

  const renderRating = ()=>{
    return <>
              <hr className="text-lightgray m-4"/>
              <div className="col-span-10 p-4">
                 <div className="text-white">How would you rate this system?</div>
                 <div className="text-white opacity-50 text-xs">taking into account ease of use and security</div>
              </div>
              <div className="color white w-full pl-6 pr-6 pb-6">
                    <div className="bg-lightgray p-4">
                    <div className="grid grid-cols-7 mb-4">
                        <div className="col-span-1">
                               <div className="text-xs text-orange font-bold">I hate it</div> 
                        </div>
                        <div className="col-span-1 text-center">
                            <input onClick={answerRating} type="radio" className="form-radio" name="rating" value="0"/>
                        </div>
                        <div className="col-span-1 text-center">
                            <input onClick={answerRating} type="radio" className="form-radio" name="rating" value="1"/>
                        </div>
                        <div className="col-span-1 text-center">
                            <input onClick={answerRating} type="radio" className="form-radio" name="rating" value="2"/>
                        </div>
                        <div className="col-span-1 text-center">
                            <input onClick={answerRating} type="radio" className="form-radio" name="rating" value="3"/>
                        </div>
                        <div className="col-span-1 text-center">
                            <input onClick={answerRating} type="radio" className="form-radio" name="rating" value="4"/>
                        </div>
                        <div className="col-span-1 ">
                            <div className="text-xs text-orange font-bold">I love it</div> 
                        </div>
                    </div>
                        <div className="text-white mb-4 text-sm">Why did you provide this rating? (optional)</div>
                        <textarea onChange={(e)=>answerRatingFollowup(e.target.value)}  className="resize border rounded-md w-full p-2"></textarea>
                    </div>

                </div>
                </>
  }

  const renderUse = ()=>{
    return <> <hr className="text-lightgray m-4"/><div className="grid grid-cols-12 pb-4">
    <div className="col-span-9 p-4 text-white">
        Would you ever consider using this system?
    </div>

    <div className="col-span-3 p-4 text-white text-bold">
        <span onClick={()=>answerUse("yes")} style={{"color" : use == "yes" ? "red" : "white"}}>YES</span> / <span onClick={()=>answerUse("no")}  style={{"color" : use == "no" ? "red" : "white"}}>NO</span>
    </div>
    <div className="col-span-12 pl-4 mb-1 text-white">
        Why did you give this answer? (optional)
    </div>
    <div className="col-span-12 pl-4 text-black text-bold">
        <textarea  onChange={(e)=>answerUseFollowup(e.target.value)} className="resize border rounded-md w-full p-2"></textarea>
    </div>
</div>   </>
  }

  const renderFeedback = ()=>{
      return <><hr className="text-lightgray m-4"/><div className="p-4">
          <div className="text-white mb-2">
              Please provide any thoughts or feedback on this solution (optional)
          </div>
          <div className="">
              <textarea  onChange={(e)=>answerFeedback(e.target.value)} className="resize border rounded-md w-full p-2"></textarea>
          </div>
      </div>   </>
  }

  return (<>
        <div className="bg-darkgray text-xs md:text-base pb-10">
          <hr className="text-white mb-6"/>
              <div className="text-white text-center p-2">Please answer the following <span className="text-orange">six questions</span> about the solution above.</div> 
          <hr className="text-white mb-6 mt-6"/>
          {renderUnderstand()}
          {understand == "yes" && renderSecure()}
          {understand == "yes" && secure && renderMemory()}
          {understand == "yes" && secure && memory && renderRating()}
          {understand == "yes" && secure && memory && rating && renderUse()}
          {understand == "yes" && secure && memory && rating && use && renderFeedback()}
        
        {readyToSubmit(solution) && <div className="w-full flex justify-center p-2">
            <Link href={`/${next}?id=${id}`}>
              <a onClick={()=>{setWaiting(true);submit(solution)}} className="text-white font-bold text-center">{linktext}</a>
            </Link>
          </div>}
          </div>
       </> 
  )
}
