import React from "react";
import cx from "classnames";

import List from "../components/List";
import Entry from "../components/Entry";
import { H1, H2, P } from "../components/Typography";
import Section from "../components/Section";

import styles from "./index.module.scss";

import { useEffect, useCallback, useRef } from "react";

// React hook for delaying calls with time
// returns callback to use for cancelling

const useTimeout = (
  callback: () => void, // function to call. No args passed.
  // if you create a new callback each render, then previous callback will be cancelled on render.
  timeout: number = 0 // delay, ms (default: immediately put into JS Event Queue)
): (() => void) => {
  const timeoutIdRef = useRef<NodeJS.Timeout>();
  const cancel = useCallback(() => {
    const timeoutId = timeoutIdRef.current;
    if (timeoutId) {
      timeoutIdRef.current = undefined;
      clearTimeout(timeoutId);
    }
  }, [timeoutIdRef]);

  useEffect(() => {
    timeoutIdRef.current = setTimeout(callback, timeout);
    return cancel;
  }, [callback, timeout, cancel]);

  return cancel;
};

const Home = () => {
  return (
    <div className={styles.Page}>
      <div className={styles.Wrapper}>
        <div className={styles.Header}>
          <H2 className={styles.Date}>August 22 & 23</H2>
          <H1>Poly Nation</H1>
        </div>
        <div className={styles.MainWrapper}></div>
        <footer className={styles.Footer}>
          <a
            className={styles.ExternalLink}
            href="http://www.portad.ca"
            target="_blank"
            rel="noopener noreferrer"
          >{`Site made with ♡ by Amanda Haynes`}</a>
        </footer>
      </div>
    </div>
  );
};

export default Home;
