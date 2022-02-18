import myFace from "../../constant/images/myFace.jpg";

function Header() {
  return (
    <div className="Contact">
        <img src={ myFace } className="profile" alt="myFace"/>
        <p>Killian ALLAIRE</p>
        <p>Middle Child in a family of four</p>
    </div>
  );
}

export default Header;
