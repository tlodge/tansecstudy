// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import firebase from '../../lib/firebase';

export default async (req, res) => {
  console.log(process.env.FIREBASE_SERVICE_ACCOUNT);

  const docRef = firebase.collection('users').doc('alovelace');

  await docRef.set({
    first: 'Ada',
    last: 'Lovelace',
    born: 1815
  });

  res.status(200).json({ name: 'John Doe' })
}
