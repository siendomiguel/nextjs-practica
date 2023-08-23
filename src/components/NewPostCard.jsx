'use client'
import './NewPostCard.css'

function PostCard({ post }) {
  return (
    <div className="card-post">
      <h3>
        {post.slug}
      </h3>
      <p>{post.excerpt.rendered}</p>
    </div>
  )
}

export default PostCard
