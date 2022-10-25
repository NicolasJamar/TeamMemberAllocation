import { useState } from "react";

const GroupedTeamMembers = ({employees, selectedTeam, setTeam}) => {

  const [groupedEmployees, setGroupedData] = useState(groupTeamMembers())

  function groupTeamMembers() {
    const teams = []
    const teamAMembers = employees.filter(employee => employee.teamName === "TeamA")
    const teamBMembers = employees.filter(employee => employee.teamName === "TeamB")
    const teamCMembers = employees.filter(employee => employee.teamName === "TeamC")
    const teamDMembers = employees.filter(employee => employee.teamName === "TeamD")

    const teamA = {team: "TeamA", 
                  members:teamAMembers, 
                  collapse: selectedTeam === "TeamA"? false:true}
    teams.push(teamA);
    const teamB = {team: "TeamB", 
                  members:teamBMembers, 
                  collapse: selectedTeam === "TeamB"? false:true}
    teams.push(teamB);
    const teamC = {team: "TeamC", 
                  members: teamCMembers, 
                  collapse: selectedTeam === "TeamC"? false:true}
    teams.push(teamC);
    const teamD = {team: "TeamD", 
                  members:teamDMembers, 
                  collapse: selectedTeam === "TeamD"? false:true}
    teams.push(teamD);

    return teams;
  }

  function handleTeamClick(event) {
    const newGroupData = groupedEmployees.map(groupedData => {
      
    })
  }

  return(
    <main className="container">
      {
        groupedEmployees.map(item => {
          return(
            <div key={item.team} className="card mt-2" style={{cursor:"pointer"}}>
              <h4 id={item.team}
                  className="card-header text-secondary bg-white"
                  onClick={handleTeamClick}>
                Team Name: {item.team}
              </h4>
              <div id={"collapse_" + item.team}
                    className={item.collapsed === true? "collapsed":""}>
                <hr/>
                {
                  item.members.map( member => {
                    return(
                      <div className="mt-2">
                        <h5 className="card-title mt-2">
                          <span className="text-dark">Full Name: {member.fullName}</span>
                        </h5>
                        <p>Designation: {member.designation}</p>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }
    </main>
  )
}

export default GroupedTeamMembers