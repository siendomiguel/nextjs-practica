'use client'
import './NewPostCard.css'

function PostCard({ post }) {
  const title = post.slug.replace(/-/g, ' ')
  const primaryCategory = post.category_list
  const regex = /<a[^>]*>([^<]+)<\/a>/
  const match = primaryCategory.match(regex)
  const category = match ? match[1] : '' // Obtén el texto capturado

  return (
    <div className="card-post">
      <div
        className="container-image"
        style={{ backgroundImage: `url(${post.featured_image_urls.full[0]})` }}
      >
        <div className="category">
          <h3>{category}</h3>
        </div>
        <p className="title-post">
          {title[0].toUpperCase() + title.substring(1)}
        </p>
      </div>
    </div>
  )
}

export default PostCard
