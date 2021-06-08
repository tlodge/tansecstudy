// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import firebase from '../../lib/firebase';

export default async (req, res) => {
  const {id} = req.body;
  const docRef = firebase.collection('consent').doc(`${id}`);
  console.log(req.body);

  await docRef.set({...req.body, ts:Date.now()});

  res.status(200).json({ success: true})
}
