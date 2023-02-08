import React from "react";
import './About.css';
import AboutImg1 from "../assets/img/about-img1.jpg";

const About = () => {
    return (
        <section className="section">
            <div className="container">
                <h1 className="section-title">About</h1>
                <div className="about-container">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, alias quod omnis consequatur fugiat ullam quae aperiam saepe veniam maxime. Repellat incidunt maiores ab sequi ipsa. Repudiandae vel error blanditiis?
                    Cupiditate ipsum sapiente, sint eos quasi, qui modi quibusdam adipisci aperiam, ut atque facilis illo est. Consequuntur repellendus porro nisi voluptate hic, sed nostrum! Dicta ut non reprehenderit obcaecati consequuntur?
                    Pariatur ad doloribus repudiandae eaque voluptatibus inventore at deleniti soluta voluptatum qui, natus dignissimos, velit autem explicabo, magni placeat! Deserunt iure officiis amet, sint voluptate culpa saepe iusto veritatis quod.
                    Recusandae adipisci laudantium accusantium tempore facilis quis molestias blanditiis autem ratione nisi inventore dolorem minima dolor dolorum sequi cumque asperiores, cum fugit non ab mollitia sint aliquid! Quidem, et iusto?</p>
                    <img src={AboutImg1} alt="about-img1" />
                </div>
            </div>
        </section>
    )
}

export default About;