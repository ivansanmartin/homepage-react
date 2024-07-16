import Blogs from "../components/Blogs";

const Blog = () => {
    return (
        <>
            <div className="d-flex flex-column fade-in justify-content-center all-projects p-4 gap-4">
                <div className="general-info">
                    <h1 className="text-start fw-bold">Blogs</h1>
                    <p className="fs-5 text-white-50">Explore my blog section! Stay updated on my latest learnings and discoveries in the realm of programming and more. I share insights and experiences on topics I'm passionate about, aiming to make them both useful and engaging for you.
                    </p>
                </div>
                <div className="general">
                    <Blogs />
                </div>
            </div>
        </>
    );
};

export default Blog;