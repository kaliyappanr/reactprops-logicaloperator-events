import Car from './Car';
import Truck from './Truck';
import Apple from './Apple';
// import Cap from './Cap';

function Van() {
  
  return (
    <>
      <h3>Adding one component</h3>
      <Car/>
      <Truck/>
      <Apple/>
      
      {/* <Cap/> */}
    </>
  );
}

export default Van;