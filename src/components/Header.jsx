//import chefClaudeLogo from "../assets/Chef-Claude-Icon.png"
// export default function Header() {
//     return (
//       <header className="navbar">
//         <div className="header-container">
//           <img src={chefClaudeLogo} alt="Robot Chef" className="chef-icon"/>
//           <span className="title">Chef Claude</span>
//         </div>
//       </header>
     
//     )
//   }

import chefClaudeLogo from "../assets/Chef-Claude-Icon.png"
export default function Header() {
    return (
      <header className="navbar">
          <img src={chefClaudeLogo} alt="Robot Chef" className="chef-icon"/>
          <h1 className="title">Chef Claude</h1>
      </header>
     
    )
  }