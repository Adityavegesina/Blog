import { Link } from "react-router-dom";

const BlogList = (/*props or*/{ blogs }) => {
    //const blogs = props.blogs;
    // const title = props.title;

    return (
        <div className="blog-list">

            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </Link>

                </div>
            ))}
        </div>
    );
}

export default BlogList;