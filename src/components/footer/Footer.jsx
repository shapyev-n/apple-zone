import React, { Fragment } from "react";
import "./footer.scss";
import { footerTxt } from "../../helpers/const";
import { NavLink } from "react-router-dom";

const Footer = () => {
  let {
    textTop: {
      1: p1,
      2: { 2.1: p2_1, 2.2: p2_2 },
      3: p3,
      4: p4,
      5: p5,
      6: p6,
      7: p7,
      8: p8,
    },
    footerNavs: {
      c1: n1,
      c2: n2,
      c3: n3,
      c4: n4,
      c5: n5,
      c6: n6,
      c7: n7,
      c8: n8,
      c9: n9,
      c10: n10,
      c11: n11,
    },
    textBottom: {
      aa1: a1,
      aa2: a2,
      a1: ap1,
      a2: ap2,
      a3: ap3,
      b1: bp1,
      b2: b_nav,
      b3: bp3,
    },
  } = footerTxt;
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div className="top">
            <p>{p1}</p>
            <p>
              {p2_1}
              <NavLink style={{ textDecoration: "underline" }}>
                apple.com
              </NavLink>
              {p2_2}
            </p>
            <p>{p3}</p>
            <p>{p4}</p>
            <p>{p5}</p>
            <p>
              {p6}
              <NavLink style={{ textDecoration: "underline" }}>
                support.apple.com/kb/HT209218
              </NavLink>
              .
            </p>
            <p>{p7}</p>
            <p>{p8}</p>
          </div>
          <div className="center">
            <div>
              {n1.map((el, idx) => (
                <p>{idx !== 0 ? <NavLink>{el}</NavLink> : el}</p>
              ))}
            </div>
            <div>
              {n2.map((el, idx) => (
                <p>{idx !== 0 ? <NavLink>{el}</NavLink> : el}</p>
              ))}
            </div>
            <div>
              {n3.map((el, idx) => (
                <p>{idx !== 0 ? <NavLink>{el}</NavLink> : el}</p>
              ))}
            </div>
            <div>
              {n4.map((el, idx) => (
                <p>{idx !== 0 ? <NavLink>{el}</NavLink> : el}</p>
              ))}
            </div>
            <div className="cov" >
              {n5.map((el, idx) => (
                <p>{idx !== 0 ? <NavLink>{el}</NavLink> : el}</p>
              ))}
            </div>
            <div>
              {n6.map((el, idx) => (
                <p>{idx !== 0 ? <NavLink>{el}</NavLink> : el}</p>
              ))}
            </div>
            <div>
              {n7.map((el, idx) => (
                <p>{idx !== 0 ? <NavLink>{el}</NavLink> : el}</p>
              ))}
            </div>
            <div>
              {n8.map((el, idx) => (
                <p>{idx !== 0 ? <NavLink>{el}</NavLink> : el}</p>
              ))}
            </div>
            <div>
              {n9.map((el, idx) => (
                <p>{idx !== 0 ? <NavLink>{el}</NavLink> : el}</p>
              ))}
            </div>
            <div>
              {n10.map((el, idx) => (
                <p>{idx !== 0 ? <NavLink>{el}</NavLink> : el}</p>
              ))}
            </div>
            <div>
              {n11.map((el, idx) => (
                <p>{idx !== 0 ? <NavLink>{el}</NavLink> : el}</p>
              ))}
            </div>
          </div>
          <div className="bottom">
            <div className="top_in">
              <p>
                {ap1}
                <NavLink>{a1}</NavLink>
                {ap2}
                <NavLink>{a2}</NavLink>
                {ap3}
              </p>
            </div>
            <div className="bottom_in">
              <div>
                <p>{bp1}</p>
                <div>
                  {b_nav.map((el, idx) => (
                    <Fragment key={idx}>
                      <NavLink>{el}</NavLink>
                      {idx !== b_nav.length - 1 && <span>|</span>}
                    </Fragment>
                  ))}
                </div>
              </div>
              <NavLink>{bp3}</NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
