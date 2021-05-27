import Head from 'next/head'
import FeedbackForm from '../../components/FeedbackForm';


Mirror.getInitialProps = async ({ query }) => {
    const {id} = query
    return {id}
}

export default function Mirror({id, submit, answeredQuestion, readyToSubmit}) {
  return (
      <div className="flex flex-grow justify-center bg-black p-2 h-full">
    <div className="bg-gray w-766 p-0 m-0">
      <Head>
        <title>Mirror</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className="bg-darkgray-200 pt-6 pl-4 pb-4 text-white text-2xl">TANSEC mirror</div>
      <div className="bg-gray w-full p-0 m-0">
        <img src="mirror/main.png"></img>
      </div>
      <FeedbackForm id={id} submit={submit} answeredQuestion={answeredQuestion} readyToSubmit={readyToSubmit} solution="mirror" next="penpot" config="remember different objects for different tasks" />
       </div> 
    </div>
  )
}
