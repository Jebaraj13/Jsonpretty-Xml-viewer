import JSONPretty from "react-json-prettify";
import { atomOneLight } from "react-json-prettify/dist/themes";


const json = {
   
  
  name: "John Doe",
  age: 20,
  admin: true,
  member: null,
  permissions: ["read", "write", "edit"],
  deep: [
    {
      a: {
        b: {
          c: null,
          d: ["e", "f", [1, null]],
        },
      },
    },
  ],

};

const customTheme = {
  ...atomOneLight,
  value: {
    ...atomOneLight.value,
    string: (value) => (value === "foo" ? "red" : "green"),
  },
};

const Jsonpretty = () => {
  return (
    <div>
      <JSONPretty json={json}/>
      <JSONPretty json={customTheme} padding={4} />
      
    </div>
  );
};
export default Jsonpretty;
