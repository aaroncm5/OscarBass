import "./About.scss"

import headshot from "../../assets/oscarhs.jpg"

const About = () => {
    return (
      <section className="about">
        <div className="aboutContainer">
          <div className="aboutText">
            <div className="aboutTitleContainer">
              <h2 id="title">About</h2>
            </div>
            <div className="aboutBlurb">
              <p id="blurb">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur error dicta obcaecati ut debitis delectus modi
                dolorem alias eligendi facere perferendis provident unde quis ab
                animi molestias esse rerum illo, aliquam omnis deserunt mollitia
                sunt quasi. Quam, explicabo magni deserunt atque architecto
                voluptas voluptatum laborum at soluta nostrum hic quidem tenetur
                itaque repellat aliquam, officia nobis quos enim accusamus!
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur error dicta obcaecati ut debitis delectus modi
                dolorem alias eligendi facere perferendis provident unde quis ab
                animi molestias esse rerum illo, aliquam omnis deserunt mollitia
                sunt quasi. Quam, explicabo magni deserunt atque architecto
                voluptas voluptatum laborum at soluta nostrum hic quidem tenetur
                itaque repellat aliquam, officia nobis quos enim accusamus!
              </p>
            </div>
          </div>
          <div className="aboutHeadshot">
            <img src={headshot} alt="Oscar Anesetti" />
          </div>
        </div>
      </section>
    );
}

export default About;