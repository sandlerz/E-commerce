import { instagram, facebook } from '../Assets/Images/index'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__contact">
        <div className="footer__contact__network">
          <span className="footer__title">Social Media</span>
          <div className="footer__contact__network__container-icons">
            <div className="footer__contact__network__container-icons__icon">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={instagram} alt="" />
              </a>
            </div>
            <div className="footer__contact__network__container-icons__icon">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={facebook} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer__contact__contact">
          <span className="footer__title">Contact information</span>
          <span className="footer__contact__contact__info">
            +1 700-502-52-20
          </span>
          <span className="footer__contact__contact__info">
            E-Commerce@Null.com
          </span>
        </div>
      </div>
      <span className="footer__copyright">Copyright © 2022 lorem ipsum</span>
    </footer>
  )
}
