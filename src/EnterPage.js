import { Link } from "react-router-dom";

function EnterPage(){
  return <Link style={{textDecoration: "none"}} to='/'><div style={
    {justifyContent: 'center', flexDirection: 'column', display: 'flex', height: '100vh',
     backgroundColor: "#059669",
     }}>
    <h1 style={{fontSize: '90px', color: "white"}}>Jobly</h1>
  </div></Link>
}

export default EnterPage;