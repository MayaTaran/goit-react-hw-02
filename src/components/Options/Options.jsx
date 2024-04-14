import css from "./Options.module.css";
export const Options = ({ good, neutral, bad }) => {
    return (
      <div>
            <p>Good:{good }</p>
            <p>Neutral:{ neutral}</p>
              <p>Bad:{bad }</p>
            
        </div>
  );
};