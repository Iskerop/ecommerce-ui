import "bootstrap/dist/css/bootstrap.css";
import "../../components/product";
import SearchView from "../../components/searchView";
import SideBar from "../../components/sideBar";
import Header from "../../components/Header";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";

export default function Home(bookData) {
  const handleSearchChange = (event) => {
    console.log("The search type has been updated: " + event.target.value);
  };

  const router = useRouter();
  const { search } = router.query;

  toast((t) => <span>search: {search}</span>);

  const test = {
    isbn: 1365465464,
    title: "Disappointed in Raejae",
    author: "End Me",
    description:
      "im going to end myself with a rusty spoon because love is hard and unobtainable",
    publishedDate: "12-3-2001",
    language: "english",
  };

  const temp = "dfgnlsdjnfsd";

  const handleClick = () => {
    toast.success("doing database query");
    getSearch(search);
  };

  // async function getSearch(data) {
  //   console.log(data);
  //   try {
  //     fetch("http://localhost:3000/api/test", {
  //       body: JSON.stringify(data),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       method: "POST",
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  async function getSearch(search) {
    // console.log(search);
    try {
      fetch("http://localhost:3000/api/search", {
        body: JSON.stringify(search),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
    } catch (err) {
      console.log(err);
    }
  }

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
          <h1>Search: {search}</h1>
          {/* <p>This is text under the header</p> */}
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

export async function getStaticProps(context) {
  return {
    props: {
      bookData,
    },
  };
}

export async function getStaticPaths() {
  console.log(userData);
}
