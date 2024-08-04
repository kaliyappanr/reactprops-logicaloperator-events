// Inline CSS Styling and CSS stylesheet
import'./Header.css';
import newOne from './Header.module.css';
function Header() {
    const mystyle = {
        color : "red",
        backgroundColor :"lightblue",
        padding : "20px",
        fontfamily : "Sans-Serif"
    }

    
    
    return(
        <>
        {/* <h1 style={mystyle}>Hello Styling</h1> */}
        <h1 className={newOne.newStyle}>Hello World!</h1>
        <p>A little Style in React Js</p>
        </>
    );
}
    

export default Header;