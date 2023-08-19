'use client'

import Script from 'next/script'

export default function ScriptTerceros() {
    return <>
<Script 
    src='https://connect.facebook.net/en_US/sdk.js'
    strategy='lazyOnload'
    onLoad={()=>
        console.log(`Script cargo completamente`)
      }
    />
    
    </>
}
