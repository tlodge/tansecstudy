import Head from 'next/head'
import Link from 'next/link'
import FeedbackForm from '../../components/FeedbackForm';


Clock.getInitialProps = async ({ query }) => {
    const {id} = query
    return {id}
}


export default function Clock({id, submit, answeredQuestion, readyToSubmit}) {
  return (
      <div className="flex flex-grow justify-center bg-black p-4">
    <div className="bg-gray w-766 p-0 m-0">
      <Head>
        <title>Clock</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className="bg-darkgray-200 pt-6 pl-4 pb-4 text-white text-2xl">TANSEC atomic clock</div>
      <div className="bg-gray w-full p-0 m-0">
        <img src="clock/main.png"></img>
      </div>
      <FeedbackForm id={id} submit={submit} answeredQuestion={answeredQuestion} readyToSubmit={readyToSubmit} solution="clock" next="noticeboard" />
       </div> 
    </div>
  )
}
