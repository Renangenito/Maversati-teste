import "./Footer.css";
import React from "react";
import { BiLogoInstagramAlt, BiLogoFacebookCircle, BiLogoBehance } from "react-icons/bi";

export default function Footer() {
  return (
    <div className="footer-container">
      <hr className="line" />
      <div className="footer-content">
        <p className="text-footer">maversati@gmail.com</p>
        <p className="text-footer">Rua Dr. Luís Vergueiro, 101. Nova Pereiras, Pereiras-SP </p>
        <p className="text-footer">(14)99119-5434</p>
        <div className="btns-footer">
          <button type="button" className="btn-footer">
            <a
              href="https://instagram.com/maversati?igshid=YzcxN2Q2NzY0OA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLogoInstagramAlt />
            </a>
          </button>
          <button type="button" className="btn-footer">
            <a href="https://www.facebook.com/Maversati" target="_blank" rel="noopener noreferrer">
              <BiLogoFacebookCircle />
            </a>
          </button>
          <button type="button" className="btn-footer">
            <a
              href="https://www.behance.net/marinamelo637c"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLogoBehance />
            </a>
          </button>
        </div>
        <p className="text-footer">Copyright &copy; Ricardo Rebelo Junior</p>
      </div>
    </div>
  );
}
