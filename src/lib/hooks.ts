"use client";
import { useInView } from "react-intersection-observer";
import { SectionName } from "./types";
import { useActiveSectionContext } from "@/contexts/active-section";
import { useEffect, useState } from "react";

export const useSectionView = (
  sectionName: SectionName,
  threshold: number = 0.7,
) => {
  const isMobile = useMedia("(max-width: 640px)", false);
  const { ref, inView } = useInView({
    threshold: isMobile ? 0.4 : threshold,
  });

  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, sectionName, timeOfLastClick, setActiveSection]);

  return {
    ref,
  };
};

export const useMedia = (query: string, defaultState?: boolean) => {
  const getInitialState = (query: string, defaultState?: boolean) => {
    if (defaultState !== undefined) {
      return defaultState;
    }

    if (typeof window === undefined) {
      return window.matchMedia(query).matches;
    }

    // A default value has not been provided, and you are rendering on the server, warn of a possible hydration mismatch when defaulting to false.
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        "`useMedia` When server side rendering, defaultState should be defined to prevent a hydration mismatches.",
      );
    }

    return false;
  };

  const [state, setState] = useState(getInitialState(query, defaultState));

  useEffect(() => {
    let mounted = true;
    let mql = window.matchMedia(query);
    const onChange = () => {
      if (!mounted) return;
      setState(!!mql.matches);
    };
    mql.addEventListener("change", onChange);
    setState(mql.matches);
    return () => {
      mounted = false;
      mql.removeEventListener("change", onChange);
    };
  }, [query]);

  return state;
};
