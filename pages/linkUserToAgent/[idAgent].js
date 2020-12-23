import React from "react";

const [idAgent] = () => {
  const [etatUser, setEtatUser] = useState(fetchUser);
  useEffect(() => {
    if (user) {
      setEtatUser(user);
      findSpecificUsers();
      console.log(user.id);
    }
  }, [user]);
  // async function findSpecificUsers(typeOfUser) {
  //   try {
  //     const token = localStorage.getItem("req-token");
  //     let response = await fetch(
  //       `https://techno-api.azurewebsites.net/api/Authorization/filter-users?role=0&filter=0&querry=${user.id}`,
  //       {
  //         method: "get",
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     // let decrypte = typeOfUser === UserRole.client? "clients" : "agents"
  //     // let response = await fetch(`http://localhost:3001/${decrypte}`);

  //     if (!response.ok) {
  //       // bad request
  //       onLogout();
  //       throw new Error(await response.text());
  //     } else {
  //       // good request
  //       var responseJson = await response.json();
  //       console.log(responseJson.applicationUsers);
  //       const applicationUser = responseJson.applicationUsers;
  //       if (typeOfUser === UserRole.confirmedAgent)
  //         setAgents([...applicationUser]);
  //       else setClients([...applicationUser]);
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }
  // const [search, setSearch] = useState("");
  // const [clients, setClients] = useState([]);

  // function handleInputChange(e) {
  //   let input = e.target.value;
  //   let result;

  //   setSearch(input);

  //   if (input.length > 0) {
  //     const role = needListAgents ? agents : clients;
  //     result = role.filter((user) => {
  //       let name = user.lastName.toLowerCase();
  //       if (name.includes(input.toLowerCase())) {
  //         return user;
  //       }
  //     });

  //     if (result.length != 0) {
  //       needListAgents ? setAgents([...result]) : setClients([...result]);
  //     } else {
  //       needListAgents ? setAgents([]) : setClients([]);
  //     }
  //   }

  //   if (!input.length) {
  //     needListAgents
  //       ? findAllUsers(UserRole.confirmedAgent)
  //       : findAllUsers(UserRole.client);
  //   }
  // }
  return <div></div>;
};

export default [idAgent];
