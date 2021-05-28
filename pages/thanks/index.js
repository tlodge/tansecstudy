import Head from 'next/head'
import Link from 'next/link'
export default function Thanks() {

  return (
      <div className="flex flex-grow flex-col  justify-center bg-lightgray p-2">
    <div className="bg-gray w-766 p-0 m-0">
      <Head>
        <title>Thank you!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
    <div className="bg-darkgray p-6 rounded shadow-xl h-screen flex flex-col items-center justify-center">
      <div className="text-4xl text-bold flex-col text-white text-center">Thank you!</div>
      <div className="text-orange p-6 text-lg">
         That's it.  All done.  
       </div>
       <div className="text-base p-12 text-vlightgray">
         Thank you so much for taking part in our study.  If you have any additional concerns, observations or feedback, please contact Tom Lodge (thomas.lodge@nottingham.ac.uk)
       </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {id: Math.round(Math.random()  * 50000)}
  }
}
