import Head from 'next/head'
import Link from 'next/link'
export default function Start() {

  return (
      <div className="flex flex-grow flex-col  justify-center bg-lightgray p-2">
    <div className="bg-gray w-766 p-0 m-0">
      <Head>
        <title>TANSEC Multifactor authentication study</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
    <div className="bg-darkgray p-6 rounded shadow-xl">
      <div className="text-xl text-bold flex-col text-white text-center">TANSEC Multifactor authentication study</div>
   
      <div className="text-base text-white pt-10 pb-10">
         We're investigating ways that we can help users to perform complicated home network security tasks by interacting with common household objects. 
       </div>
       <div className="text-base text-white pb-10">
        In this study we're considering solutions that might help people to set up a secure connection (a VPN) between their mobile device and the devices in their homes. To set up this connection, secure keys have to be exchanged between a mobile phone and the home router.  It is important that these keys are not leaked to anyone, as they would then be able to gain access to your home network. 
      </div>
      <div className="text-base text-white pb-10">
      Each of the nine solutions presented in this study require some form of interaction between a householder and an object in the home before keys can then be exchanged.  We would like to determine how acceptable, practical and understandable each solution is, and more generally, to understand which features (if any) could be developed to create secure usable solutions for home user authentication.
      </div>
      <div className="text-base text-white">
         If you are willing to take part, the study shouldn't take more than 15 minutes of your time. To get going, we'll first need to get your consent to take part in the study, which we'll do next.
      </div>
      <div className="text-2xl p-10 text-white text-center">
          <Link href={`/consent`}>
              <a className="text-orange font-bold text-center" style={{cursor: "pointer"}}>GET STARTED</a>
          </Link>
      </div>
      </div>
    </div>
  )
}