import "./BlogCard.css";

function BlogCard() {
  return (
    <div className="blog-card">
      <img
        src="https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/projects-images/blog-card/starter/img/blog-article-image.jpg"
        alt="living room with modern furniture"
        className="blog-card__image"
      />
      <div className="blog-card__info-container">
        <span className="blog-card__tag">Interior</span>
        <div className="blog-card__title">Top 5 Living Room Inspirations</div>
        <p className="blog-card__description">
          Curated vibrants colors for your living, make it pop & calm in the
          same time.
        </p>
        <button className="blog-card__button">
          <span className="blog-card__button-text">Read more</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.4763 9.16658L9.00633 4.69657L10.1848 3.51807L16.6667 9.99992L10.1848 16.4817L9.00633 15.3032L13.4763 10.8332H3.33333V9.16658H13.4763Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default BlogCard;
