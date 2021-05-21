export default async (req, res) => {
    const {solution=""} = req.query;

    const docRef = firebase.collection('responses').doc(solution);
  
    await docRef.set({
      first: 'Ada',
      last: 'Lovelace',
      born: 1815
    });
  
    res.status(200).json({ name: 'John Doe' })
  }
  