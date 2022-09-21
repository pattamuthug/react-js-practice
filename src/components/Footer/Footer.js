import './Footer.css';

function Footer() {
    return(
       <section className="footer">
        <section className="container">
            <section className="footer-top-wrapper">
                <section className="footer-box-1">
                    <h2>Oreao</h2>
                    <p>A108 Adam Street
                        New York, NY 535022
                        United States</p>
                </section>
                <section className="footer-box-2">
                    <h4>Useful Links</h4>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Terms Of services</li>
                        <li>Privacy policy</li>
                    </ul>
                </section>
                <section className="footer-box-2">
                    <h4>Our Services</h4>
                    <ul>
                        <li>Web Design</li>
                        <li>Web Development</li>
                        <li>Product Management</li>
                        <li>Marketing</li>
                        <li>graphic Design</li>
                    </ul>
                </section>
                <section className="footer-top-2">
                    <h4>Join Our Newsletter</h4>
                    <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                    <form id="subscribe">
                        <input className="empty" type="text" name="emailaddress" placeholder=""/>
                        <button className="text" type="submit">subscribe</button>
                    </form>
                </section>

            </section>
            <section className="footer-bottom-wrapper">
                <section className="footer-bottom-1">&copy; Copyright <b>Tempo</b>. All Rights Reserved <p>Designed by
                        <b>BootstrapMade</b>
                    </p>
                </section>
                <section className="footer-bottom-2">
                    <section className="icons">
                        <i id="muthu" className="fa fa-twitter" ></i>
                        <i id="muthu" className="fa fa-facebook"></i>
                        <i id="muthu" className="fa fa-instagram"></i>
                        <i id="muthu" className="fa fa-skype"></i>
                        <i id="muthu" className="fa fa-linkedin"></i>
                    </section>
                </section>
            </section>
        </section>
    </section>
       )
};
export default Footer;