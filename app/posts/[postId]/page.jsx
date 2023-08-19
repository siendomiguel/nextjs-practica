import ScriptTerceros from '@/components/ScriptTereceros'

async function loadPosts(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data = await res.json()
  return data
}

async function Page({ params }) {
  const post = await loadPosts(params.postId)

  return (
    <>
      <ScriptTerceros/>
      <h1>{post.id}. {post.title}</h1>
      <p>{post.body}</p>
    </>
  )
}

export default Page
