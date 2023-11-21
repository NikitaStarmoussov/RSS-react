

import React from 'react'
import { useSearchParams } from 'next/navigation'
import { fetchItem } from '../../../src/Helpers/api';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface itemProps {
  productName: string
}

export default async function Item({productName}: itemProps): Promise<JSX.Element> {
  const router = useRouter();
  const item = await fetchItem(productName as string)

  const closeModal = () => {
    router.back();
  };

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={closeModal}>
          &#10006;
        </button>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <img src={item.thumbnail} alt={item.title} />
      </div>
    </div>
  )
}