import TitleCol from "./TitleCol";


function Container({children}) {
  return (
    <div className="form-container">
      <TitleCol />
      {children}
    </div>
  );
}

export default Container;
