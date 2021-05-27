import Head from 'next/head'
import Link from 'next/link'
import FeedbackForm from '../../components/FeedbackForm';


export default function Shelves({id, submit, answeredQuestion, readyToSubmit}) {
 
  return (
      <div className="flex flex-grow justify-center bg-black p-4">
    <div className="bg-gray w-766 p-0 m-0">
      <Head>
        <title>Shelves</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className="bg-darkgray-200 pt-6 pl-4 pb-4 text-white text-2xl">TANSEC shelves</div>
      <div className="bg-gray w-full p-0 m-0">
        <img src="shelves/main.png"></img>
      </div>
      <FeedbackForm id={id} submit={submit} answeredQuestion={answeredQuestion} readyToSubmit={readyToSubmit} solution="shelves" next="lamp" config="remember different book positions for different tasks" />
       </div> 
    </div>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {id: Math.round(Math.random()  * 50000)}
  }
}
