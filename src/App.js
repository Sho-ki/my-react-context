import "./App.css";
import { createContext, useContext } from "react";

const LanguageContext = createContext();

function App() {
  const languages = ["JavaScript", "Python", "Java", "Golang"];
  return (
    <LanguageContext.Provider value={{ languages }}>
      <div className="background">
        Background　
        <p className="languages">
          Pass languages[JavaScript, Python, Java, Golang] to Container 3
        </p>
        <Container1 />
      </div>
    </LanguageContext.Provider>
  );
}

function Container1() {
  return (
    <div className="container1">
      Container 1
      <Container2 />
    </div>
  );
}

function Container2() {
  return (
    <div className="container2">
      Container 2
      <Container3 />
    </div>
  );
}

function Container3() {
  const ctx = useContext(LanguageContext);
  console.log(ctx.languages);
  return (
    <div className="container3">
      Container 3
      <ul className="languages-area">
        {ctx.languages.map((language, i) => (
          <li key={i}>{language}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

// Props version
// import "./App.css";

// function App() {
//   const languages = ["JavaScript", "Python", "Java", "Golang"];
//   return (
//     <div className="background">
//       Background
//       <p className="languages">
//         Pass languages[JavaScript, Python, Java, Golang] to Container 3
//       </p>
//       {/* languages ->  Container1*/}
//       <Container1 languages={languages} />
//     </div>
//   );
// }

// export default App;

// function Container1({ languages }) {
//   return (
//     <div className="container1">
//       Container 1
//       <Container2 languages={languages} />
//       {/* Container1 ->  Container2 */}
//     </div>
//   );
// }

// function Container2({ languages }) {
//   return (
//     <div className="container2">
//       Container 2
//       <Container3 languages={languages} />
//       {/* Container2 ->  Container3 */}
//     </div>
//   );
// }

// function Container3({ languages }) {
//   return (
//     <div className="container3">
//       Container 3
//       <ul className="languages-area">
//         {languages.map((language, i) => (
//           <li key={i}>{language}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
