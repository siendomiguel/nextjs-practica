import PostCard from './NewPostCard'
import './LastPosts.css'

async function loadPosts() {
  const res = await fetch('https://bitfinanzas.com/wp-json/wp/v2/posts', {
    headers: {
      'Cache-Control': 'no-store', // Indica que no se debe almacenar en caché
      'Pragma': 'no-cache', // Indica que no se debe almacenar en caché (compatibilidad con navegadores antiguos)
    }
  })
  
  const data = await res.json()
  return data
}

async function LastPosts() {
  const posts = await loadPosts()
  return (
    <div className='grid-post'>
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  )
}

export default LastPosts
