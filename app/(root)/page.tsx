export default function Home() {
  // const data = await fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json());
  // const data = await fetch("http://localhost:3000/api").then((res) => res.json());
  {
    /* <code>{JSON.stringify(data, null, 2)} </code> */
  }

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.</p>
      </section>

      <section className="section_container"></section>
    </>
  );
}
