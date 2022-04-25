import { useEffect, useRef, useState } from 'react'
import { database } from '../firebase/config'

// firestore imports
import { collection, onSnapshot, query, where } from 'firebase/firestore'

export const useCollection = (c, _q) => {
    const [documents, setDocuments ] = useState(null)

    // set up query
    const q = useRef(_q).current

    useEffect (() => {
      let ref = collection(database, c)

      if (q) {
        ref = query(ref, where(...q)) 
      }
  
      const unsub = onSnapshot(ref, (snapshot) => {
        let results = []  
        snapshot.docs.forEach(doc => {
              results.push({...doc.data(), id: doc.id})
          })
          setDocuments(results)
      })

      return () => unsub()
    }, [c, q])

    return { documents }
}