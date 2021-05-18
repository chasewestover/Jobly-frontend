import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import JoblyApi from "./api";
import List from './List';
import UserContext from "./UserContext";

function CompanyDetails() {
  const { handle } = useParams();
  const { user } = useContext(UserContext);
  const [cDetails, setCDetails] = useState(null);
  const [apps, setApps] = useState(null)


  useEffect(() => {
    async function getCompanyAndApps() {
      try {
        const company = await JoblyApi.getCompany(handle);
        setCDetails(company)
      } catch (e) {
        console.log(e)
      }
      const userResult = await JoblyApi.getUser(user);
      setApps(new Set(userResult.applications))
    }
    getCompanyAndApps();
  }, [user, handle]);

  if(!apps) return <div>Loading</div>

  return (
    <div>
      {cDetails
        ? (<div className="CompanyDetails">
            <h2>{cDetails.name}</h2>
            <p>{cDetails.description}</p>
            <List list={cDetails.jobs} type="jobs" other={apps}/>
          </div>)
        : <p>Company does not exist</p>
      }
    </div>

  );
}
export default CompanyDetails;