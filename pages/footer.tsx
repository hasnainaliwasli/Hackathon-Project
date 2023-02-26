import style from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <div className={style.parent}>
      <div className={style.footerFlex}>
        <div>
          <p>Special Events</p>
          <p>Event Winner </p>
          <p>Fsd Special</p>
          <p>Event Guide</p>
        </div>
        <div>
          <p>Types Events</p>
          <p>Singing</p>
          <p>Sufi Night</p>
          <p>Bazm e jaan</p>
        </div>
        <div>
          <p>Poetry </p>
          <p>Punjabi </p>
          <p>Pashto </p>
          <p>Urdu</p>
        </div>
        <div>
          <p>Contact Us</p>
          <p>xyz@gmail.com</p>
          
        </div>
      </div>
      <hr />
      <div>
        <p>© 2022 EventWinner</p>
      </div>
    </div>
  )
}
export default Footer