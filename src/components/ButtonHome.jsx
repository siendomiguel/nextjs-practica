'use client'

import { useRouter } from 'next/navigation'

function ButtonHome() {
  const router = useRouter()

  return (
    <button className='button' onClick={() => {
      alert('Volviendo al inicio . . .')
      router.push('/')}}>
      Ir al home
    </button>
  )
}

export default ButtonHome
