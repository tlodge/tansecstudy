import Head from 'next/head'
import Link from 'next/link'

export default function Consent({id}) {

  return (
      <div className="flex flex-grow justify-center bg-gray text-white flex-col p-10">
        <div className="bg-gray w-766 p-0 m-0">
            <Head>
                <title>TANSEC Multifactor authentication study - consent</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </div>
        <div className="text-xl text-bold">Study Information</div>
        <div style={{height:380, overflowY:"auto"}}>
        <div className="text-bold pt-6 text-orange">Purpose of the research.</div>
        <div className="text-sm">
            This study investigates new approaches to multi-factor authentication (i.e., using multiple means to verify that a user is allowed to perform a privileged task).  The study presents a set of solutions that embed secrets within common household objects (such as tables, noticeboards, shelves, mirrors, pen pots).  These secrets are used as a part of the process to permit users to perform tasks on their home network and smart devices, such as, for example, setting up a virtual private network (VPN).
        </div>
        <div className="text-bold pt-6 text-orange">Nature of participation.</div>
        <div className="text-sm">
            Participation in the research is voluntary and relies on the participant providing data through an online questionnaire.
        </div>
        <div className="text-bold pt-6 text-orange">Participant engagement.</div>
        <div className="text-sm">
            In taking part in this study, participants will first be asked two general questions about their security experience and the type of household they live in.  They will then be presented with nine different solutions and will be asked a set of structured questions on each. These questions relate to a participant’s perceptions on a solution’s security and how easy it is to understand and use.
        </div>
        <div className="text-bold pt-6 text-orange">Benefits and risks of the research.</div>
        <div className="text-sm">
            This work will investigate whether household objects used in authentication is an acceptable and understandable approach to multifactor authentication. It will gather user perceptions and reactions to a range of solutions and determine whether there are a set of features of the solution that are more promising and warrant further study.  This research may therefore result in new approaches to multifactor authentication that are both secure and usable and which may offer better approaches than those currently in use.  There is very little risk involved in participating in this research.  No personal identifiers are recorded during this research and no participants can be identified unless personal information is entered in response to free text questions (in which case it will be anonymised).  
        </div>
        <div className="text-bold pt-6 text-orange">Use of your data.</div>
        <div className="text-sm">
            Aggregate results of the work will be discussed amongst a small group of researchers involved in the project.  The results of the research will be disseminated in publications and presentations, but it will not be possible to identify any study participants in this material.
        </div>
        <div className="text-bold pt-6 text-orange">Future use of your data.</div> 
        <div className="text-sm">
            The data may be archived and reused in future for purposes that are in the public interest, or for historical, scientific or statistical purposes. 
        </div>
        <div className="text-bold pt-6 text-orange">Procedure for withdrawal from the research.</div> 
        <div className="text-sm">
            You may withdraw from the study at any time and do not have to give reasons for why you no longer want to take part. If you wish to withdraw please contact the researcher who gathered the data, this can be done via email: thomas.lodge@nottingham.ac.uk. Because we do not seek any identifying information, <span className="text-orange"> to withdraw you will need to provide the following code:  {id} </span>which we will use to locate your responses and delete them. If you receive no response from the researcher please contact the School of Computer Science’s Ethics Committee. This research is being conducted by a researcher in the Horizon Centre for Doctoral Training. It has been reviewed and approved by the University of Nottingham, School of Computer Science Research Ethics Committee.
        </div>
        <div className="text-bold pt-6 text-orange">Contact details of the ethics committee.</div> 
        <div className="text-sm">
            If you wish to file a complaint or exercise your rights you can contact the Ethics Committee at the following address: cs-ethicsadmin@cs.nott.ac.uk
        </div>
        </div>
        <div className="mt-10">
            <div className="text-xl text-bold">Your consent</div>
        </div>
        <div className="flex flex-row pt-4 text-sm">
            <div className="flex flex-grow" style={{width:300}}></div>
            <div className="w-54 pr-7  flex items-center justify-center" >
                <input  type="checkbox" id="yes" name="yes"/><label className="pl-2 pr-6" for="yes">yes to all</label>
               
            </div>    
            </div>
        <div className="text-bold pt-6 pb-4 text-orange">Taking part in the study</div>
        <div className="flex flex-row text-sm">
            <div className="flex-grow pr-6">I have read and understood the project information presented above.</div>
            <div className="w-54 flex items-center justify-center" >
                <input  type="checkbox" id="yes" name="yes"/><label className="pl-2 pr-6" for="yes">yes</label>
                <input type="checkbox" id="no" name="no"/><label className="pl-2 pr-6" for="no">no</label>
            </div>    
        </div> 
        <div className="flex flex-row pt-4 text-sm">
            <div className="flex-grow pr-6" style={{width:300}}>
                I consent voluntarily to be a participant in this study and understand that I can refuse to answer questions and I can withdraw from the study at any time, without having to give a reason. 
            </div>
            <div className="w-54 flex items-center justify-center" >
                <input type="checkbox" id="yes" name="yes"/><label className="pl-2 pr-6" for="yes">yes</label>
                <input type="checkbox" id="no" name="no"/><label className="pl-2 pr-6" for="no">no</label>
            </div>    
        </div> 
      
        <div className="flex flex-row pt-4 text-sm">
            <div className="flex-grow pr-6" style={{width:300}}>
                I understand that taking part in the study requires me to provide data and that this will involve providing feedback via an online questionnaire.
            </div>
            <div className="w-54 flex items-center justify-center" >
                <input type="checkbox" id="yes" name="yes"/><label className="pl-2 pr-6" for="yes">yes</label>
                <input type="checkbox" id="no" name="no"/><label className="pl-2 pr-6" for="no">no</label>
            </div>    
        </div> 

        <div className="text-bold pt-6 pb-4 text-orange">Use of my data in the study</div>
        <div className="flex flex-row text-sm">
            <div className="flex-grow pr-6"> I understand that data which can identify me will not be shared beyond the project team.</div>
            <div className="w-54 flex items-center justify-center" >
                <input  type="checkbox" id="yes" name="yes"/><label className="pl-2 pr-6" for="yes">yes</label>
                <input type="checkbox" id="no" name="no"/><label className="pl-2 pr-6" for="no">no</label>
            </div>    
        </div> 
        <div className="flex flex-row pt-4 text-sm">
            <div className="flex-grow pr-6" style={{width:300}}>
                I consent voluntarily to be a participant in this study and understand that I can refuse to answer questions and I can withdraw from the study at any time, without having to give a reason. 
            </div>
            <div className="w-54 flex items-center justify-center" >
                <input type="checkbox" id="yes" name="yes"/><label className="pl-2 pr-6" for="yes">yes</label>
                <input type="checkbox" id="no" name="no"/><label className="pl-2 pr-6" for="no">no</label>
            </div>    
        </div> 
      
        <div className="flex flex-row pt-4 text-sm">
            <div className="flex-grow" style={{width:300}}>
                I agree that the data provided by me may be used for the following purposes:
            </div>
        </div>


        <div className="flex flex-row pt-4 text-sm">
            <div className="flex-grow pr-6" style={{width:300}}>
             - Presentation and discussion of the project and its results in research activities (e.g., in supervision sessions, project meetings, conferences).
            </div>
            <div className="w-54 flex items-center justify-center" >
                <input type="checkbox" id="yes" name="yes"/><label className="pl-2 pr-6" for="yes">yes</label>
                <input type="checkbox" id="no" name="no"/><label className="pl-2 pr-6" for="no">no</label>
            </div>    
        </div> 

        <div className="flex flex-row pt-4 text-sm">
            <div className="flex-grow pr-6" style={{width:300}}>
             - Publications and reports describing the project and its results.
            </div>
            <div className="w-54 flex items-center justify-center" >
                <input type="checkbox" id="yes" name="yes"/><label className="pl-2 pr-6" for="yes">yes</label>
                <input type="checkbox" id="no" name="no"/><label className="pl-2 pr-6" for="no">no</label>
            </div>    
        </div> 

        <div className="flex flex-row pt-4 text-sm">
            <div className="flex-grow pr-6" style={{width:300}}>
            – Dissemination of the project and its results, including publication of data on web pages and databases.
            </div>
            <div className="w-54 flex items-center justify-center" >
                <input type="checkbox" id="yes" name="yes"/><label className="pl-2 pr-6" for="yes">yes</label>
                <input type="checkbox" id="no" name="no"/><label className="pl-2 pr-6" for="no">no</label>
            </div>    
        </div> 
       		
        <div className="flex flex-row pt-4 text-sm">
            <div className="flex-grow pr-6" style={{width:300}}>
                I give permission for my words to be quoted for the purposes described above.
            </div>
            <div className="w-54 flex items-center justify-center" >
                <input type="checkbox" id="yes" name="yes"/><label className="pl-2 pr-6" for="yes">yes</label>
                <input type="checkbox" id="no" name="no"/><label className="pl-2 pr-6" for="no">no</label>
            </div>    
        </div> 

        <div className="text-bold pt-6 pb-4 text-orange">Reuse of my data</div>
        <div className="flex flex-row text-sm">
            <div className="flex-grow pr-6">
                I give permission for the data that I provide to be reused for the sole purposes of future research and learning. 
            </div>
            <div className="w-54 flex items-center justify-center" >
                <input  type="checkbox" id="yes" name="yes"/><label className="pl-2 pr-6" for="yes">yes</label>
                <input type="checkbox" id="no" name="no"/><label className="pl-2 pr-6" for="no">no</label>
            </div>    
        </div> 
        <div className="flex flex-row pt-4 text-sm">
            <div className="flex-grow pr-6" style={{width:300}}>
                I understand and agree that this may involve depositing my data in a data repository, which may be accessed by other researchers.
            </div>
            <div className="w-54 flex items-center justify-center" >
                <input type="checkbox" id="yes" name="yes"/><label className="pl-2 pr-6" for="yes">yes</label>
                <input type="checkbox" id="no" name="no"/><label className="pl-2 pr-6" for="no">no</label>
            </div>    
        </div> 
      

        <div className="text-bold pt-6 pb-4 text-orange">Security of my data</div>
        <div className="flex flex-row text-sm">
            <div className="flex-grow pr-6">
            I understand that safeguards will be put in place to protect my identity and my data during the research, and if my data is kept for future use.
            </div>
            <div className="w-54 flex items-center justify-center" >
                <input  type="checkbox" id="yes" name="yes"/><label className="pl-2 pr-6" for="yes">yes</label>
                <input type="checkbox" id="no" name="no"/><label className="pl-2 pr-6" for="no">no</label>
            </div>    
        </div> 
        <div className="flex flex-row pt-4 text-sm">
            <div className="flex-grow pr-6" style={{width:300}}>
            I confirm these safeguards have been shown to online in the University’s privacy notice, and that they are acceptable to me.
            </div>
            <div className="w-54 flex items-center justify-center" >
                <input type="checkbox" id="yes" name="yes"/><label className="pl-2 pr-6" for="yes">yes</label>
                <input type="checkbox" id="no" name="no"/><label className="pl-2 pr-6" for="no">no</label>
            </div>    
        </div> 
        <div className="flex flex-row pt-4 text-sm">
            <div className="flex-grow pr-6" style={{width:300}}>
            I understand that no computer system is completely secure and that there is a risk that a third party could obtain a copy of my data.
            </div>
            <div className="w-54 flex items-center justify-center" >
                <input type="checkbox" id="yes" name="yes"/><label className="pl-2 pr-6" for="yes">yes</label>
                <input type="checkbox" id="no" name="no"/><label className="pl-2 pr-6" for="no">no</label>
            </div>    
        </div> 

        <div className="text-bold pt-6 pb-4 text-orange">Copyright</div>
        <div className="flex flex-row text-sm">
            <div className="flex-grow pr-6">
            I give permission for data gathered during this project to be used, copied, excerpted, annotated, displayed and distributed for the purposes to which I have consented.

            </div>
            <div className="w-54 flex items-center justify-center" >
                <input  type="checkbox" id="yes" name="yes"/><label className="pl-2 pr-6" for="yes">yes</label>
                <input type="checkbox" id="no" name="no"/><label className="pl-2 pr-6" for="no">no</label>
            </div>    
        </div>

           <div className="text-bold pt-6 pb-4 text-orange">Researcher's contact details</div>
        <div className="flex flex-col text-sm">
            <div>
                Name: Tom Lodge
            </div>
            <div>
                Phone: 07972639571
            </div>
            <div>
                Email: thomas.lodge@nottingham.ac.uk
            </div>
        </div>

        <div className="text-2xl p-10 text-white text-center">
          <Link href={`/shelves?id=${id}`}>
              <a className="text-orange font-bold text-center">Get started</a>
          </Link>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {id: Math.round(Math.random()  * 50000)}
  }
}
