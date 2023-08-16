import { getProducts } from "@/common/query/product";
import Layout from "@/components/Layout";
import { Button, Title } from "@mantine/core";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";


export default function ProductPage(){
  
  const [IsOpenAdd, setIsOpenAdd] = useState(false)
  const [skip, setSkip] =useState(0)

  const {data, refetch, isFetching} = useQuery(['list-product', skip],
  () => getProducts(skip), {
    initialData:{}
  });

  console.log('data product:', data.data?.products, 'isFetching', isFetching)

  return (
    <>
      <Layout title='Product Page'>
        <main>
          <section
          style={{
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center"
          }}>
            <Title order={1} style={{marginBottom:"10px"}}>List Product</Title>
          <Button
          onClick={()=>setIsOpenAdd(true)}
          >Add Product
          </Button>
          </section>
          </main>
          
      </Layout>
    </>
  )
}