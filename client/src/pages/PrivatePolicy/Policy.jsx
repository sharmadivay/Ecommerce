import Layout from "../../components/Layouts/Layout";
import Policy_Image from "../../assets/images/Policy_Iamge.png";
import "./Policy.css";
const Policy = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img src={Policy_Image} alt="contactus" style={{ width: "100%" }} />
        </div>
        <div className="col-md-4">
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
