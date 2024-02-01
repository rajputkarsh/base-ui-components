import { useStyletron } from "styletron-react";
import "./App.css";
import Avatar from "./components/Avatar";

function App() {
  const [css] = useStyletron();

  const componentStyle = css({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "1rem",
    marginBlock: "0.8rem",
  });

  const componentTextStyle = css({
    fontWeight: "700",
    fontSize: "1.5rem",
  });

  return (
    <div className="appRoute">
      <h2 className="margin-bottom">
        <u>Base UI Components</u>
      </h2>

      <div className={componentStyle}>
        <span className={componentTextStyle}>Avatar with text - </span>
        <Avatar name="Utkarsh" bgColor="red" />
      </div>

      <div className={componentStyle}>
        <span className={componentTextStyle}>Avatar with image - </span>
        <Avatar
          name="Utkarsh"
          imageUrl="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          bgColor="red"
        />
      </div>

      <div className={componentStyle}>
        <span className={componentTextStyle}>
          Avatar with text and ribbon -{" "}
        </span>
        <Avatar name="Utkarsh" bgColor="white" openToCollab={true} />
      </div>

      <div className={componentStyle}>
        <span className={componentTextStyle}>
          Avatar with image and ribbon -{" "}
        </span>
        <Avatar
          name="Utkarsh"
          imageUrl="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          bgColor="white"
          openToCollab={true}
        />
      </div>

      <div className={componentStyle}>
        <span className={componentTextStyle}>
          Avatar with image and storyline -{" "}
        </span>
        <Avatar
          name="Utkarsh"
          imageUrl="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          bgColor="white"
          storyline={true}
        />
      </div>
    </div>
  );
}

export default App;
