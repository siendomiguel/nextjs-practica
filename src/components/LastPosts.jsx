import PostCard from './NewPostCard'

async function loadPosts() {
  const res = await fetch('https://bitfinanzas.com/wp-json/wp/v2/posts')
  const data = await res.json()
  return data
}

async function LastPosts() {
  const posts = await loadPosts()
  return (
    <div>
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  )
}

export default LastPosts
