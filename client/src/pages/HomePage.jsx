import { useEffect, useState } from "react";
import Layout from "../components/Layouts/Layout.jsx";
import axios from "axios";
import { Prices } from "../components/Prices.jsx";
import { Checkbox, Radio } from "antd";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/cart.jsx";
import toast from "react-hot-toast";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [categories, setCategories] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useCart();
  const navigate = useNavigate();

  // get all products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `http://localhost:8080/api/product/product-list/${page}`
      );
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
  }, [checked.length, radio.length]);

  //get all catergory
  const getAllCategories = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/api/category/get-category"
      );
      setCategories(data.category);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllCategories();
    getTotal();
  }, []);

  // filter
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };

  //getTOtal COunt
  const getTotal = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/api/product/product-count"
      );
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);

  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `http://localhost:8080/api/product/product-list/${page}`
      );
      setLoading(false);
      setProducts([...products, ...data.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  //get filterd product
  const filterProduct = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:8080/api/product/product-filters",
        {
          checked,
          radio,
        }
      );
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);
  return (
    <div>
      <Layout>
        <div className="container-fluid  row mt-3">
          <div className="col-md-2">
            <h4 className="text-center"> Filter By Category</h4>
            <div className="d-flex flex-column">
              {categories?.map((c) => (
                <Checkbox
                  key={c._id}
                  onChange={(e) => handleFilter(e.target.checked, c._id)}
                >
                  {c.name}
                </Checkbox>
              ))}
            </div>
            {/* price filter */}
            <h4 className="text-center mt-4">Filter By Price</h4>
            <div className="d-flex flex-column">
              <Radio.Group onChange={(e) => setRadio(e.target.value)}>
                {Prices?.map((p, index) => (
                  <div key={index}>
                    <Radio value={p.array}>{p.name}</Radio>
                  </div>
                ))}
              </Radio.Group>
            </div>
            <div className="d-flex flex-column">
              <button
                className="btn btn-danger mt-3"
                onClick={() => window.location.reload()}
              >
                RESET FILTERS
              </button>
            </div>
          </div>
          <div className="col-md-9 ">
            <h1 className="text-center">All Products</h1>
            <div className="d-flex flex-wrap w-100 ">
              {products?.map((p) => (
                <div key={p._id} className="col-md-4 ">
                  <div className="card m-2  " style={{ width: "18rem" }}>
                    <img
                      src={`http://localhost:8080/api/product/product-photo/${p._id}`}
                      className="card-img-top"
                      alt={p.name}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{p.name}</h5>
                      <p className="card-text">
                        {p.description.substring(0, 30)}...
                      </p>
                      <p className="card-text">${p.price}</p>
                      <button
                        className="btn btn-primary ms-1"
                        onClick={() => navigate(`/product/${p.slug}`)}
                      >
                        More Details
                      </button>
                      <button
                        className="btn btn-secondary ms-2"
                        onClick={() => {
                          setCart(
                            [...cart, p],
                            localStorage.setItem(
                              "cart",
                              JSON.stringify([...cart, p])
                            ),
                            toast.success("Item added to cart")
                          );
                        }}
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="m-2 p-3">
              {products && products.length < total && (
                <button
                  className="btn btn-warning"
                  onClick={(e) => {
                    e.preventDefault();
                    setPage(page + 1);
                  }}
                >
                  {loading ? "Loading ..." : "Loadmore"}
                </button>
              )}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default HomePage;
