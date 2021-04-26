import Head from 'next/head'
import Link from 'next/link'

export default function NoticeBoard() {
  return (
      <div className="flex flex-grow justify-center bg-black p-4">
    <div className="bg-gray w-766 p-0 m-0">
      <Head>
        <title>Noticeboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className="bg-darkgray-200 pt-6 pl-4 pb-4 text-white text-2xl">TANSEC noticeboard</div>
      <div className="bg-gray w-full p-0 m-0">
        <img src="noticeboard/main.png"></img>
      </div>
      <div className="bg-grey">
          <div className="text-white text-base p-4 font-bold bg-black text-center">Please answer the following <span className="text-orange">six questions</span> about the solution above.</div>
          <div className="grid grid-cols-12">
              <div className="col-span-10 p-4 text-white">
                 Do you understand the overall approach?
              </div>
              <div className="col-span-2 p-4 text-white text-bold">
                    YES / NO
              </div>
              <div className="col-span-12 p-4">
                 <div className="text-white">How secure do you judge the approach to be?</div>
                 <div className="text-white opacity-50 text-xs">assuming you don't necessarily trust everyone in your home</div>
              </div>
            </div>
            <div className="color white w-full pl-6 pr-6">
                    <div className="bg-lightgray p-4">
                    <div className="grid grid-cols-12 mb-4">
                        <div className="col-span-4">
                               <div className="text-lg text-white">Insecure</div> 
                               <div className="text-xs pr-6 text-orange ">This would not offer any extra security in my home</div> 
                        </div>
                        <div className="col-span-4">
                               <div className="text-lg text-white">Mostly Secure</div> 
                               <div className="text-xs pr-6 text-orange">This would add more security though I see how it could be broken</div> 
                        </div>
                        <div className="col-span-4">
                               <div className="text-lg text-white">Secure</div> 
                               <div className="text-xs pr-6 text-orange">This is a secure solution that would be difficult to break</div> 
                        </div>
                    </div>
                    <div className="text-white text-sm mt-6 mb-1">
                        In what way(s) could you imagine security being compromised?
                    </div>
                    <textarea className="resize border rounded-md w-full"></textarea>
                    </div>

              </div>



              <div className="col-span-10 p-4">
                 <div className="text-white">How easy do you think it would be to remember different configurations?</div>
                 <div className="text-white opacity-50 text-xs">i.e. remember different peg placements for a range of authorised tasks</div>
              </div>
              <div className="color white w-full pl-6 pr-6">
                    <div className="bg-lightgray p-4">
                    <div className="grid grid-cols-7">
                        <div className="col-span-1">
                               <div className="text-xs font-bold text-orange pr-4">Very difficult</div> 
                        </div>
                        <div className="col-span-1 text-center">
                            <input type="radio" className="form-radio" name="memory" value="0"/>
                        </div>
                        <div className="col-span-1 text-center">
                            <input type="radio" className="form-radio" name="memory" value="0"/>
                        </div>
                        <div className="col-span-1 text-center">
                            <input type="radio" className="form-radio" name="memory" value="0"/>
                        </div>
                        <div className="col-span-1 text-center">
                            <input type="radio" className="form-radio" name="memory" value="0"/>
                        </div>
                        <div className="col-span-1 text-center">
                            <input type="radio" className="form-radio" name="memory" value="0"/>
                        </div>
                        <div className="col-span-1">
                               <div className="text-xs font-bold text-orange">Very Easy</div> 
                        </div>
                      </div>
                      </div>
                </div>



              <div className="col-span-10 p-4">
                 <div className="text-white">How would you rate this system?</div>
                 <div className="text-white opacity-50 text-xs">please consider how easy it would be to use as well as security</div>
              </div>
              <div className="color white w-full pl-6 pr-6">
                    <div className="bg-lightgray p-4">
                    <div className="grid grid-cols-7 mb-4">
                        <div className="col-span-1">
                               <div className="text-xs text-orange font-bold">I hate it</div> 
                        </div>
                        <div className="col-span-1 text-center">
                            <input type="radio" className="form-radio" name="rating" value="0"/>
                        </div>
                        <div className="col-span-1 text-center">
                            <input type="radio" className="form-radio" name="rating" value="0"/>
                        </div>
                        <div className="col-span-1 text-center">
                            <input type="radio" className="form-radio" name="rating" value="0"/>
                        </div>
                        <div className="col-span-1 text-center">
                            <input type="radio" className="form-radio" name="rating" value="0"/>
                        </div>
                        <div className="col-span-1 text-center">
                            <input type="radio" className="form-radio" name="rating" value="0"/>
                        </div>
                        <div className="col-span-1 ">
                            <div className="text-xs text-orange font-bold">I love it</div> 
                        </div>
                    </div>
                        <div className="text-white mb-4 text-sm">Why did you provide this rating?</div>
                        <textarea className="resize border rounded-md w-full"></textarea>
                    </div>

                </div>
                <div className="grid grid-cols-12">
                    <div className="col-span-10 p-4 text-white">
                        Would you ever consider using this system?
                    </div>
                
                    <div className="col-span-2 p-4 text-white text-bold">
                        YES / NO
                    </div>
                    <div className="col-span-12 pl-4 mb-1 text-white text-sm">
                        Why did you give this answer?
                    </div>
                    <div className="col-span-12 pl-4 text-white text-bold">
                        <textarea className="resize border rounded-md w-full"></textarea>
                    </div>
                </div>   

                <div className="p-4">
                    <div className="text-white mb-2">
                        Please provide any thoughts or feedback on this solution
                    </div>
                    <div className="">
                        <textarea className="resize border rounded-md w-full"></textarea>
                    </div>
                </div>   
            </div>
            <div className="w-full flex justify-center p-2">
            <Link href="/">
                <a className="text-white font-bold text-center">SUBMIT AND GO TO NEXT</a>
            </Link>
            </div>
       </div> 
    </div>
  )
}
