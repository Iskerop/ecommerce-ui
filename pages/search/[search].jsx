import "bootstrap/dist/css/bootstrap.css";
import "../../components/product";
import SearchView from "../../components/searchView";
import SideBar from "../../components/sideBar";
import Header from "../../components/Header";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import { prisma } from "../../lib/prisma";

async function getSearch() {
  const book = await prisma.user.create({
    data: {
      isbn: 6554984656546,
      title: "i hate this",
      author: "End Me",
      description:
        "I am going to literally, maybe not literally, end myself using a rusty spork",
    },
  });
  console.log(book);
  // return {
  //   props: {
  //     book,
  //   },
  // };
}

export default function Home() {
  const handleSearchChange = (event) => {
    console.log("The search type has been updated: " + event.target.value);
  };

  const router = useRouter();
  const { search } = router.query;

  toast((t) => <span>search: {search}</span>);

  const handleClick = () => {
    getSearch();
  };

  return (
    <div
      className="min-h-screen w-screen"
      style={{ backgroundColor: "#dfbea9" }}
    >
      {/* <MenuSideBar /> */}
      <Toaster />
      <div id="page-wrap">
        <div className="" style={{ backgroundColor: "#B98B73" }}>
          <Header />
          {/* <Banner /> */}
        </div>
        <div className="container-lg my-4">
          <h1>This is a header</h1>
          <p>This is text under the header</p>
          <a onClick={handleClick}>add bogus to database</a>
          <form>
            <div className="input-group mb-3">
              <select
                className="btn dropdown-toggle"
                onChange={handleSearchChange}
                style={{
                  backgroundColor: "#B98B73",
                  border: "none",
                  borderRadius: ".25rem 0rem 0rem .25rem",
                }}
              >
                <option value="title">Search by Title</option>
                <option value="author">Search by Author</option>
                <option value="isbn">Search by ISBN</option>
              </select>
              <input
                type="text"
                className="form-control"
                placeholder="Sample Search"
              />
            </div>
          </form>

          <div className="row">
            <div className="col-lg-3 col-sm-3">
              <SideBar />
            </div>
            <div className="col">
              <SearchView />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
