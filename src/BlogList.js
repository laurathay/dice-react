const BlogList = ({ blogs, title, handleDelete }) => {
    // const title = props.title;
    // const blogs = props.blogs;

    return ( 
        <div className="blog-list">
            <h2> { title }</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.name }</h2>
                    <p> scores { blog.score }</p>
                    <button onClick={() => handleDelete(blog.id)}> delete roll</button>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;