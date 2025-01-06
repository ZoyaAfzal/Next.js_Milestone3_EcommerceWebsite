'use client'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductType, StateProps } from '../../../type';
import { X } from 'lucide-react';
import { addToCart, removeFromFavorite, resetFavorite } from '@/redux/proSlice';
import toast, { Toaster } from 'react-hot-toast';
import Image from 'next/image';
import FormattedPrice from '../../components/FormattedPrice';
import Title from '@/components/Title';
import { useRouter } from 'next/navigation';
import Link from 'next/link';


const WishList = () => {

  const { favoriteData } = useSelector((state: StateProps) => state.pro);
  const dispatch = useDispatch();
  const router = useRouter();
 

  const handleReset = () => {
    const confirmReset = window.confirm('Are you sure you want to reset your WishList?');
    if (confirmReset) {
      dispatch(resetFavorite()),
      toast.success('WishList Reset Successfully');
      router.push('/');
    }
  }

  return (
    <div className="my-10 mx-4">
      <Title title="Your Wishlist" />
      {favoriteData.length > 0 ? (
        <div className="mt-5 flex flex-col md:gap-6">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-white uppercase bg-zinc-950">
                <tr>
                  <th scope="col" className="px-4 md:px-6 xs:px-2 py-3">
                    Product Information
                  </th>
                  <th scope="col" className="px-4 md:px-6 xs:px-2 py-3">
                    Unit Price
                  </th>
                  <th scope="col" className="px-4 md:px-6 xs:px-2 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-4 md:px-6 xs:px-2 py-3">
                    Brand
                  </th>
                  <th scope="col" className="px-4 md:px-6 xs:px-2 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              {favoriteData.map((item: ProductType) => (
                <tbody key={item?._id}>
                  <tr className="bg-white border-b-[1px] border-b-zinc-300">
                    <th
                      scope="row"
                      className="px-4 md:px-6 py-4 flex flex-col md:flex-row items-center gap-3"
                    >
                      <X
                        onClick={() => {
                          dispatch(removeFromFavorite(item?._id));
                          toast.success(`${item.title} is removed from Wishlist!`);
                        }}
                        className="w-4 h-4 hover:text-red-600 cursor-pointer duration-200"
                      />
                      <Image
                        src={item?.image || '/placeholder.png'}
                        alt={item?.title || 'Product Image'}
                        width={500}
                        height={500}
                        className="w-20 md:w-24 object-contain"
                      />
                      <p className="text-base font-medium text-black">
                        {item?.title || 'Unknown Product'}
                      </p>
                    </th>
                    <td className="px-4 md:px-6 py-4">
                      <FormattedPrice amount={item?.price} />
                    </td>
                    <td className="px-4 md:px-6 py-4">
                      <span className="border border-zinc-300 p-1 rounded-md hover:border-zinc-800 cursor-pointer duration-200 inline-flex items-center justify-center">
                        {item?.category || 'N/A'}
                      </span>
                    </td>
                    <td className="px-4 md:px-6 py-4">{item?.brand || 'N/A'}</td>
                    <td className="py-4">
                      <button
                        onClick={() => {
                          dispatch(addToCart(item));
                          toast.success(`${item?.title} is added to Cart.`);
                        }}
                        className="px-4 py-1 rounded-md uppercase text-sm md:text-[16px] font-semibold underline underline-offset-2 hover:text-designColor duration-200"
                      >
                        Add to Cart
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>

          <div className="flex flex-col gap-4">
            <button
              onClick={handleReset}
              className="bg-zinc-950 text-white w-32 md:w-34 py-3 rounded-md uppercase text-xs font-semibold hover:bg-red-700  duration-200 self-center"
            >
              Reset WishList
            </button>
          </div>
        </div>
      ) : (
        <div className="py-10 flex flex-col items-center gap-4">
          <p className="text-lg font-bold">Your WishList is Empty</p>
          <Link
            href="/"
            className="text-sm uppercase font-semibold underline underline-offset-2 hover:text-blue-500 duration-200"
          >
            Go back to Shopping
          </Link>
        </div>
      )}
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#000',
            color: '#fff',
          },
        }}
      />
    </div>
  );
};

export default WishList;
