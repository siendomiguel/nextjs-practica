import Link from "next/link";

export default function NotFound(){
  return <>
    <h1>Pagina no encontrada</h1>
    <Link href='/'>Volver al inicio</Link>

  </>
}