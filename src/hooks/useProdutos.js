import { useEffect, useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from "../../App"

function useProdutos () {
  const [produtos, setProdutos] = useState([])
  const [produtosCollection, loadingProdutos, error] = useCollection(
    db?.collection('produtos')
      .orderBy('created', 'desc')
      .limit(500)
  )

  useEffect(() => {
    const newProdutos = produtosCollection?.docs
      .map(doc => ({
        ...doc.data(),
        key: doc.id
      })).reverse() || []

    setProdutos(newProdutos)
  }, [produtosCollection])

  return {
    produtos,
    loadingProdutos,
    error
  }
}

export default useProdutos