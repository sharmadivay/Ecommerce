import Layout from "../../components/Layouts/Layout";
import AboutImage from "../../assets/images/About_Image.jpg";
import "./About.css";
const About = () => {
  return (
    <Layout>
      <div className="row contactus h-full  ">
        <div className="col-md-6 image-container">
          <img
            src={AboutImage}
            alt="contactus"
            style={{ width: "100%", height: "50%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            officiis obcaecati esse tempore unde ratione, eveniet mollitia,
            perferendis eius temporibus dicta blanditiis doloremque explicabo
            quasi sunt vero optio cum aperiam vel consectetur! Laborum enim
            accusantium atque, excepturi sapiente amet! Tenetur ducimus aut
            commodi illum quidem neque tempora nam.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
