import PostCard from '@/components/PostCard'
import '../global.css'

async function loadPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  return data
}

//Renderizado en pantalla
export default async function PostPages() {
  //Otro componente que recibe otra funcion
  const posts = await loadPosts()

  return (
    <div>
      <h1>Posts</h1>
      <p>Listado de todos los post</p>
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  )
}
