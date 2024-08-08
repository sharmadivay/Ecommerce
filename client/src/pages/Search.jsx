import Layout from "../components/Layouts/Layout";
import { useSearch } from "../Context/search";

const Search = () => {
  const [values] = useSearch();
  return (
    <Layout>
      <div className="container">
        <div className="text-center">
          <h1>Search Results</h1>
          <h6>
            {values?.results?.length < 1
              ? "no products"
              : `Found ${values?.results?.length} `}
          </h6>
          <div className="d-flex flex-wrap w-100 ">
            {values?.results?.map((p) => (
              <div key={p._id} className="col-md-4 ">
                <div className="card m-2  " style={{ width: "18rem" }}>
                  <img
                    src={`${window.location.origin}/api/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">
                      {p.description.substring(0, 30)}...
                    </p>
                    <p className="card-text">${p.price}</p>
                    <button className="btn btn-primary ms-1">
                      More Details
                    </button>
                    <button className="btn btn-secondary ms-2">
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
