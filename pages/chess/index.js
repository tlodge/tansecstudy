import Head from 'next/head'
import FeedbackForm from '../../components/FeedbackForm';


Chess.getInitialProps = async ({ query }) => {
    const {id} = query
    return {id}
}


export default function Chess({id, submit, answeredQuestion, readyToSubmit}) {
  return (
      <div className="flex flex-grow justify-center bg-black p-2 h-full">
    <div className="bg-gray w-766 p-0 m-0">
      <Head>
        <title>Chessboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className="bg-darkgray-200 pt-6 pl-4 pb-4 text-white text-2xl">TANSEC chessboard</div>
      <div className="bg-gray w-full p-0 m-0">
        <img src="chess/main.png"></img>
      </div>
      <FeedbackForm id={id} submit={submit} answeredQuestion={answeredQuestion} readyToSubmit={readyToSubmit} solution="chess" next="table" config="remember different piece configurations for different tasks"/>
       </div> 
    </div>
  )
}
