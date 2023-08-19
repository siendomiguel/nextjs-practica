'use client'
import Link from "next/link"

function PostCard({ post }) {
  return (
    <div>
      <h3>
        {post.id}. {post.title}
      </h3>
      <p>{post.body}</p>
      <Link href={`/posts/${post.id}`}>
      <button onClick={() => {
      }}>Ir al post</button>

      </Link>
    </div>
  )
}

export default PostCard
