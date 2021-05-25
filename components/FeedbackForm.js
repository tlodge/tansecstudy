import Link from 'next/link'
import {useState, useEffect} from 'react';

export default function FeedbackForm({id, submit, answeredQuestion, readyToSubmit, solution, next}) {
  
  const [understand, setUnderstand] = useState();
  const [secure, setSecure] = useState();
  const [securityfollowup, setSecurityFollowup] = useState("");
  const [memory, setMemory] = useState();
  const [rating, setRating] = useState();
  const [ratingfollowup, setRatingFollowup] = useState("");
  const [use, setUse] = useState();
  const [usefollowup, setUseFollowup] = useState("");
  const [feedback, setFeedback] = useState("");

  const answerUnderstand = ()=>{
    setUnderstand(!understand);
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

  const answerUse = ()=>{
    setUse(!use);
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

  const renderSecureFollowup = ()=>{
    return <div>
              <div className="text-white text-sm mt-6 mb-1">
                  In what way(s) could you imagine security being compromised?
              </div>
              <textarea onChange={(e)=>answerSecurityFollowup(e.target.value)} className="resize border rounded-md w-full"></textarea>
          </div>
  }

  const renderUnderstand = ()=>{
      return  <div className="grid grid-cols-12">
              <div className="col-span-10 p-4 text-white">
                 Do you understand the overall approach?
              </div>
              <div className="col-span-2 p-4 text-white text-bold" onClick={answerUnderstand}>
                    <span style={{"color" : understand ? "red" : "white"}}>YES</span> / <span style={{"color" : understand == false ? "red" : "white"}}>NO</span>
              </div>
      </div>
  }

  const renderSecure = ()=>{
    return <>
            <div className="grid grid-cols-12">
              <div className="col-span-12 p-4">
                 <div className="text-white">How secure do you judge the approach to be?</div>
                 <div className="text-white opacity-50 text-xs">assuming you don't necessarily trust everyone in your home</div>
               </div>
            </div>
            <div className="color white w-full pl-6 pr-6">
                    <div className="bg-lightgray p-4">
                    <div className="grid grid-cols-12 mb-4">
                        <div style={{background: secure==="insecure" ? "red" :"none", padding:10, margin:8}}onClick={()=>answerSecure("insecure")} className="col-span-4">
                               <div className="text-lg text-white">Insecure</div> 
                               <div className="text-xs pr-6 text-orange ">This would provide little to no extra security</div> 
                        </div>    
                        <div style={{background: secure==="mostly secure" ? "red" :"none", padding:10, margin:8}} onClick={()=>answerSecure("mostly secure")} className="col-span-4">
                               <div className="text-lg text-white">Mostly Secure</div> 
                               <div className="text-xs pr-6 text-orange">This would add more security but there are some weaknesses</div> 
                        </div>
                        <div style={{background: secure==="secure" ? "red" :"none", padding:10, margin:8}} onClick={()=>answerSecure("secure")} className="col-span-4">
                               <div className="text-lg text-white">Secure</div> 
                               <div className="text-xs pr-6 text-orange">This is a secure solution that would be difficult to break</div> 
                        </div>
                    </div>
                    
                    {secure && secure !== "secure" && renderSecureFollowup()}
                    </div>
              </div>
        </>
  }

  const renderMemory = ()=>{
    return <><div className="col-span-10 p-4">
                 <div className="text-white">How easy do you think it would be to remember different configurations?</div>
                 <div className="text-white opacity-50 text-xs">i.e. remember different book placements for a range of authorised tasks</div>
              </div>
              <div className="color white w-full pl-6 pr-6">
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
              <div className="col-span-10 p-4">
                 <div className="text-white">How would you rate this system?</div>
                 <div className="text-white opacity-50 text-xs">taking into account ease of use and security</div>
              </div>
              <div className="color white w-full pl-6 pr-6">
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
                        <div className="text-white mb-4 text-sm">Why did you provide this rating?</div>
                        <textarea onChange={(e)=>answerRatingFollowup(e.target.value)}  className="resize border rounded-md w-full"></textarea>
                    </div>

                </div>
                </>
  }

  const renderUse = ()=>{
    return  <div className="grid grid-cols-12">
    <div className="col-span-10 p-4 text-white">
        Would you ever consider using this system?
    </div>

    <div onClick={answerUse} className="col-span-2 p-4 text-white text-bold">
        <span style={{"color" : use ? "red" : "white"}}>YES</span> / <span style={{"color" : use == false ? "red" : "white"}}>NO</span>
    </div>
    <div className="col-span-12 pl-4 mb-1 text-white text-sm">
        Why did you give this answer?
    </div>
    <div className="col-span-12 pl-4 text-black text-bold">
        <textarea  onChange={(e)=>answerUseFollowup(e.target.value)} className="resize border rounded-md w-full"></textarea>
    </div>
</div>   
  }

  const renderFeedback = ()=>{
      return <div className="p-4">
          <div className="text-white mb-2">
              Please provide any thoughts or feedback on this solution
          </div>
          <div className="">
              <textarea  onChange={(e)=>answerFeedback(e.target.value)} className="resize border rounded-md w-full"></textarea>
          </div>
      </div>   
  }

  return (<>
        <div className="bg-grey ">
          <div className="text-white text-base p-4 font-bold bg-black text-center">
              Please answer the following <span className="text-orange">six questions</span> about the solution above.
          </div> 
          {renderUnderstand()}
          {renderSecure()}
          {renderMemory()}
          {renderRating()}
          {renderUse()}
          {renderFeedback()}
        </div>
        {readyToSubmit(solution) && <div className="w-full flex justify-center p-2">
            <Link href={`/${next}?id=${id}`}>
              <a onClick={()=>submit(solution)} className="text-white font-bold text-center">SUBMIT AND GO TO NEXT</a>
            </Link>
          </div>}
       </> 
  )
}
