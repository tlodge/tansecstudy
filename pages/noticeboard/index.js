import Head from 'next/head'
import Link from 'next/link'
import FeedbackForm from '../../components/FeedbackForm';


NoticeBoard.getInitialProps = async ({ query }) => {
    const {id} = query
    return {id}
}


export default function NoticeBoard({id, submit, answeredQuestion, readyToSubmit}) {
  return (
      <div className="flex flex-grow justify-center bg-black p-2 h-screen">
    <div className="bg-gray w-766 p-0 m-0">
      <Head>
        <title>Noticeboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-darkgray-200 pt-6 pl-4 pb-4 text-white text-2xl flex flex-row">
        <div className="flex flex-grow">
          TANSEC noticeboard
        </div>
        <div className="pl-6 pr-6 text-vlightgray">
          5 of 9
        </div>
      </div>
      <div className="bg-gray w-full p-0 m-0">
        <img src="noticeboard/main.png"></img>
      </div>
      <FeedbackForm id={id} submit={submit} answeredQuestion={answeredQuestion} readyToSubmit={readyToSubmit} solution="noticeboard" next="mirror" config="remember different noticeboard pin configurations for different tasks" />
       </div> 
    </div>
  )
}
