import { useEffect, useState } from 'react'
import { database } from '../firebase/config'

// firestore imports
import { collection, onSnapshot } from 'firebase/firestore'

export const useCollection = (c) => {
    const [documents, setDocuments ] = useState(null)

    useEffect (() => {
      let ref = collection(database, c)
  
      const unsub = onSnapshot(ref, (snapshot) => {
        let results = []  
        snapshot.docs.forEach(doc => {
              results.push({...doc.data(), id: doc.id})
          })
          setDocuments(results)
      })

      return () => unsub()
    }, [c])

    return { documents }
}