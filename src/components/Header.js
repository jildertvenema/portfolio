import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">About</a></li>
             <li><a className="smoothscroll" href="#resume">Resume</a></li>
               <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
               {/* <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
               <li><a className="smoothscroll" href="#contact">Contact</a></li> */}
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">JILDERT.DEV</h1>
               <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>
                 Software Developer
               </h3>
               <hr/>
               <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank"><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                    
                  }
                  <li>
                    <a href="https://codesandbox.io/u/jildertvenema" target="_blank">
                      <svg className="codeSandbox-svg" aria-label="CodeSandbox" role="presentation" x="0px" y="0px" width="35px" height="30px" viewBox="0 0 452 452"><path fill-rule="evenodd" clip-rule="evenodd" d="M226 228.286V447.293C229.813 447.293 232.319 446.466 235.742 444.51L411.107 344.302C418.031 340.333 420.855 334.19 420.855 326.208V123.008C420.855 119.004 420.011 116.609 418.066 113.266L231.61 218.619C228.141 220.601 226 224.29 226 228.286ZM323.425 354.044C323.425 359.611 321.337 362.395 316.466 365.178L258.011 398.581C253.836 401.365 248.269 399.973 248.269 394.406V245.485C248.269 241.501 251.775 236.338 255.227 234.351L388.839 157.803C392.55 155.667 395.797 159.088 395.797 163.37V242.701C395.797 246.814 393.859 250.509 390.23 252.444L330.384 284.455C326.755 286.39 323.425 290.085 323.425 294.197V354.044Z" fill="#B8B9BA"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M31.1505 326.208V123.008C31.1505 115.017 35.3465 107.488 42.2848 103.523L212.082 7.49014C215.74 5.55143 221.825 4.7066 226 4.7066C230.175 4.7066 236.617 5.74065 239.918 7.49017L408.324 103.523C411.656 105.492 416.181 110.027 418.066 113.266L231.567 219.041C228.098 221.023 226 224.788 226 228.784V447.293C222.187 447.293 218.289 446.466 214.866 444.51L43.6766 345.693C36.7382 341.729 31.1505 334.2 31.1505 326.208ZM56.2026 163.37V242.701C56.2026 248.269 57.5944 251.052 63.1615 253.836L121.616 287.238C127.184 290.022 128.575 294.197 128.575 298.373V354.044C128.575 359.611 129.967 362.395 135.534 365.178L193.989 398.581C199.556 401.364 203.732 399.973 203.732 394.406V245.485C203.732 241.31 202.34 237.134 196.773 234.351L65.9451 159.194C61.7697 156.411 56.2026 157.803 56.2026 163.37ZM284.455 68.7286L232.959 97.956C228.784 100.74 223.217 100.74 219.041 97.956L167.545 68.7286C164.155 66.8127 159.806 66.8225 156.411 68.7286L92.3889 104.915C86.8218 107.699 86.8218 113.266 92.3889 116.049L220.433 189.814C223.86 191.776 228.14 191.776 231.567 189.814L359.611 116.049C363.787 113.266 365.178 107.699 359.611 104.915L295.589 68.7286C292.194 66.8225 287.845 66.8127 284.455 68.7286Z" fill="#F2F2F2"></path></svg>
                    </a>
                  </li>

               </ul>
            </div>
         </div>


        <div className='row quick-buttons'>
          <a className='quick-button' href="https://csb-tflhc.netlify.app/" target='_blank'>
            Chess Bot
          </a>
          <a className='quick-button' href="https://chat.jildert.dev/" target='_blank'>
            Chat Bot
          </a>
        </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
  }
}

// {
//   "name": "codesandbox",
//   "url": "https://codesandbox.io/u/jildertvenema",
//   "className": 'fa fa-codesandbox'
// }
