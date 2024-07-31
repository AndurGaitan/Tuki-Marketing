import "./SocialMedia.css"

function SocialMedia() {
  return (
  <>
    <div className="social-menu">
      <ul>
        <li><a href="https://web.whatsapp.com/" target="_blank" className="buttonIcon">
              <i className="icon fa-brands fa-whatsapp"></i>
            </a>
        </li>
        <li>        
            <a href="https://www.instagram.com/tuki.marketing/" target="_blank" className="buttonIcon">
            <i className="icon fa-brands fa-instagram"></i>
          </a>
        </li>
      </ul>
    </div>
  </>
  ) 
}

export default SocialMedia