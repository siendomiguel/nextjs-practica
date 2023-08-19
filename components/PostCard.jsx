'use client'
import Link from "next/link"
import './PostCard.css'

function PostCard({ post }) {
  return (
    <div className="card-post">
      <h3>
        {post.id}. {post.title}
      </h3>
      <p>{post.body}</p>
      <Link href={`/posts/${post.id}`}>
      <button className="button" onClick={() => {
      }}>Ir al post</button>

      </Link>
    </div>
  )
}

export default PostCard
