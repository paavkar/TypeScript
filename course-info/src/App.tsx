const Header = ({name}: string): JSX.Element => {
  return (
    <div>
      <h1> {name} </h1>
    </div>
  );
};



const Content = ( props: [] ) => {
  return (
    <div>
    <p>
        {props.courseParts[0].name} {courseParts[0].exerciseCount}
    </p>
    <p>
        {courseParts[1].name} {courseParts[1].exerciseCount}
     </p>
    <p>
        {courseParts[2].name} {courseParts[2].exerciseCount}
    </p>
    </div>
  );
};


const App = () => {
  const courseName = "Half Stack application development";
  const courseParts = [
    {
      name: "Fundamentals",
      exerciseCount: 10
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14
    }
  ];

  return (
    <div>
      <Header name={courseName} />
      <Content  courseParts={courseParts} />
      <p>
        Number of exercises{" "}
        {courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)}
      </p>
    </div>
  );
};

export default App;