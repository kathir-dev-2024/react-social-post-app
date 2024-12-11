import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const Editpost = ({
  posts,
  handleedit,
  editbody,
  seteditbody,
  edittitle,
  setedittitle,
}) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  useEffect(() => {
    if (post) {
      setedittitle(post.title);
      seteditbody(post.body);
    }
  }, [post, setedittitle, seteditbody]);

  return (
    <main className="NewPost">
      {edittitle && (
        <>
          <h2>Edit Post</h2>
          <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="postTitle">Title:</label>
            <input
              type="text"
              id="postTitle"
              required
              value={edittitle}
              onChange={(e) => setedittitle(e.target.value)}
            />
            <label htmlFor="postbody">Post:</label>
            <textarea
              type="text"
              id="postbody"
              required
              value={editbody}
              onChange={(e) => seteditbody(e.target.value)}
            />
            <button type="submit" onClick={() => handleedit(post.id)}>
              submit
            </button>
          </form>
        </>
      )}
      {!edittitle && (
        <>
          <h2>Page Not Found</h2>
          <p>Well,thats's disappointing</p>
          <Link to="/">
            <p>Visit Our Homepage</p>
          </Link>
        </>
      )}
    </main>
  );
};

export default Editpost;
