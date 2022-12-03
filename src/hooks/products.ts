
import { useEffect, useState } from "react";
import { IProduct } from "../models";
import axios, {AxiosError} from 'axios'

export function useProducts() {
    const [products, setProducts] = useState<IProduct[]>([])
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState('');
  
    const fetchProdcuts =  async () => {
      try{
      setError('')
      setLoading(true);
      const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products')
      setProducts(response.data)
      setLoading(false);
         
      } catch(e: unknown){
        const error = e as AxiosError
        setLoading(false);
        setError(error.message)
      }
    }

    const addProduct = (product: IProduct) => {
      setProducts(prev => [...prev, product])
    }
  
    useEffect(() => {
      fetchProdcuts()
    },[])

    return {products, error, loading,addProduct}
}