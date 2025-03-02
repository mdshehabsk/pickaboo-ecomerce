import Image from 'next/image'
import {AiOutlineStar} from 'react-icons/ai' 
import { FC } from 'react'
import { IProduct } from '@/types/product'
import Link from 'next/link'
interface IProps  {
  product: IProduct
}
const Main_product_item : FC<IProps> = ({product}) => {
  return (
    <Link  className='group' href={`/product-details/${product?.slug}`} >
   <div className='border border-gray-100 p-2  hover:shadow-lg ' >
   <div className="flex justify-center  " >
        <Image src={product?.imageArr?.[0]} alt="no Image" width={300} height={300}  />
    </div>
    <h3 className="text-sm font-medium group-hover:text-mainBlueColor text-ellipsis whitespace-nowrap overflow-hidden " > {product?.name} </h3>
    <div className="flex items-center " >
    <span className="text-sm text-mainBlueColor" >৳</span>
    <p className="text-sm text-mainBlueColor font-semibold" >20,000</p>
    <del className="ml-3 text-sm" >৳20,000</del>
    </div>
    {/* <div className=" flex items-center gap-1" >
      <div className="flex" >
      <AiOutlineStar/>
      <AiOutlineStar/>
      <AiOutlineStar/>
      <AiOutlineStar/>
      </div>
      <div>
        <p className="text-sm" >(4)</p>
      </div>
    </div> */}
   </div>
    </Link>
  )
}

export default Main_product_item