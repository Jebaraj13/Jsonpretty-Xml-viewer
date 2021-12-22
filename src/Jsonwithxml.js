import XMLExport from "./XMLExport";
import JSONPretty from "react-json-prettify";


export default function Jsonwithxml() {
  const dataForXml = [
    {
      Name: "The Great Gatsby",
      Author: "F. Scott Fitzgerald",
      Subject: "History",
      "Publication Date": 1981,
      "additional data": {
        rating: 9.9,
        opinion: "Nice to have",
      },
    },
    {
      Name: "L'Ancien Régime et la Révolution",
      Author: "Alexis de Tocqueville",
      Subject: "History",
      "Publication Date": 1866,
    },
    {
      Name: "A Brief History of Time",
      Author: "Stephen Hawking",
      Subject: "Cosmology",
      "Publication Date": 1988,
    },
    {
      Name: "A Passage to India",
      Author: "E.M. Forster ",
      Subject: "Novel",
      "Publication Date": 1995,
    },
  ];

  //this mapping allows you to change tags in the file
  // field names are corresponding to the field names in the data,
  // while values will be used as tags, hyphen-joined, eg <additional-data-column-header>
  const fieldsAsObjects = {
    Name: "Name column header",
    Author: "Author column header",
    Subject: "Subject column header",
    "Publication Date": "Publication Date column header",
    "additional data": "additional data column header",
  };

  //this way you just pick fields that are supposed to be included in the file
  //   const fieldsAsStrings = [
  //     "Name",
  //     "Author",
  //     "Subject",
  //     "Publication Date",
  //     "additional data"
  //   ];

  return (
    <div>
      <h1>JSONPretty</h1>
      <JSONPretty json={dataForXml} />

      <h4>Download Above Json in XML format</h4>
      <XMLExport data={dataForXml} fields={fieldsAsObjects} />
    </div>
  );
}
