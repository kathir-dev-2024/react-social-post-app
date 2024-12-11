import Feed from "./Feed";

const Home = ({ searchresults }) => {
  console.log("Search Results:", searchresults);

  return (
    <main className="Home">
      {searchresults.length ? (
        <Feed posts={searchresults} />
      ) : (
        <p style={{ marginTop: "2rem"  }}>No Posts to display...</p>
      )}
    </main>
  );
};

export default Home;
