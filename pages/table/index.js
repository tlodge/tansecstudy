import Head from 'next/head'
import FeedbackForm from '../../components/FeedbackForm';

Table.getInitialProps = async ({ query }) => {
    const {id} = query
    return {id}
}

export default function Table({id,submit,answeredQuestion,readyToSubmit}) {
  return (
      <div className="flex flex-grow justify-center bg-black p-4">
    <div className="bg-gray w-766 p-0 m-0">
      <Head>
        <title>Table</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-darkgray-200 pt-6 pl-4 pb-4 text-white text-2xl flex flex-row">
        <div className="flex flex-grow">
          TANSEC table
        </div>
        <div className="pl-6 pr-6 text-vlightgray">
          9 of 9 - last one - thanks!
        </div>
      </div>
      <div className="bg-gray w-full p-0 m-0">
        <img src="table/main.png"></img>
      </div>
      <FeedbackForm id={id} submit={submit} answeredQuestion={answeredQuestion} readyToSubmit={readyToSubmit} solution="table" next="thanks" config="remember different object placements for different tasks"/>
    </div>
    </div>
  )
}
