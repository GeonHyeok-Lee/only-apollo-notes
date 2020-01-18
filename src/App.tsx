import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_CACHE } from "./apolloClient/queries";

const App: React.FC = () => {
  const { data } = useQuery(GET_CACHE);
  console.log(data);
  return <div></div>;
};

export default App;
