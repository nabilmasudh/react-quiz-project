import Styles from "../styles/Summary.module.css";
import myImage from "../assets/img//success.png";
import useFetch from "../hooks/useFetch";
import { useMemo } from "react";

export default function Summary({ score, noq }) {
  const getKeyword = useMemo(() => {
    if ((score / (noq * 5)) * 100 < 50) {
      return "failed";
    } else if ((score / (noq * 5)) * 100 < 75) {
      return "good";
    } else if ((score / (noq * 5)) * 100 < 100) {
      return "very good";
    } else {
      return "excellent";
    }
  }, [score, noq]);

  const { loading, error, result } = useFetch(
    `https://api.pexels.com/v1/search?query=${getKeyword}&per_page=1`,
    "GET",
    {
      Authorization: process.env.REACT_APP_PEXELS_API_KEY,
    }
  );

  const image = result ? result?.photos[0].src.medium : myImage;

  return (
    <div className={Styles.summary}>
      <div className={Styles.point}>
        <p className={Styles.score}>
          Your score is <br />
          {score} out of {noq * 5}
        </p>
      </div>

      {loading && <div className={Styles.badge}>Loading your badge...</div>}

      {error && <div className={Styles.badge}>An error occured!</div>}

      {!loading && !error && (
        <div className={Styles.badge}>
          <img src={image} alt="Success" />
        </div>
      )}
    </div>
  );
}
