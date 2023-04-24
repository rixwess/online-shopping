import Source from "../../Image.png"
import "./Section.css"

const Section = () => {
  return (
    <div className="showcase">
      <div className="left">
        <h1>
          Best Place to Buy <br />
          <span>Everything.</span>
        </h1>
        <p>
          At Selfie, you can shop for all your favorite beautify brands,
          clothes. <br />
          house hold products and more at a single place.
        </p>
        <button>Shopping Now</button>
        <div className="text"></div>
      </div>
      <div className="right">
        <img src={Source} alt="" />
      </div>
    </div>
  )
}
export default Section
