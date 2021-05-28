// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import firebase from '../../lib/firebase';

export default async (req, res) => {
  console.log(req.body);
  const {solution=""} = req.body;
  const docRef = firebase.collection('feedback').doc(solution);
  await docRef.set({...req.body, ts:Date.now()});
  res.status(200).json({ success: true})
}