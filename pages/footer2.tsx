import React from 'react'
import Styles from '../styles/Footer2.module.css'

export default function footer2() {
  return (
    <div>
        <footer className={Styles.footer}>
    <div className={Styles.footercontainer}>
      <div className={Styles.footersection}>
        <h3>About Us</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className={Styles.footersection}>
        <h3>Products</h3>
        <ul>
          <li><a href="#">Product 1</a></li>
          <li><a href="#">Product 2</a></li>
          <li><a href="#">Product 3</a></li>
        </ul>
      </div>
      <div className={Styles.footersection}>
        <h3>Contact Us</h3>
        <ul>
          <li><a href="#">Email</a></li>
          <li><a href="#">Phone</a></li>
          <li><a href="#">Address</a></li>
        </ul>
      </div>
    </div>
  </footer>
  </div>
  )
}
