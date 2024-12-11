


const NewPost = ({
  handlesubmit,
  posttitle,
  setposttitle,
  postbody,
  setpostbody,
}) => {
  
  return (
    <main className="NewPost">
      <h2>New Post</h2>
      <form className="newPostForm" onSubmit={handlesubmit}>
        <label htmlFor="PostTitle">Title:</label>
        <input
          type="text"
          id="PostTitle"
          required
          value={posttitle}
          onChange={(e) => setposttitle(e.target.value)}
        />
        <label htmlFor="PostBody">Post:</label>
        <textarea
          id="PostBody"
          required
          value={postbody}
          onChange={(e) => setpostbody(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default NewPost;
