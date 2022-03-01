import { useContext, useEffect, useState } from "react";
import "./ProgressDots.scss";
import { ReactComponent as YourSvg } from "./check.svg";
import MainContext from "../../_helpers/contexts/mainContext";
import { useHistory } from "react-router-dom";

const ProgressDots = () => {
  const { step, setStep } = useContext(MainContext);
  const { ifManagerGlobal, setManagerGlobal } = useContext(MainContext);
  const history = useHistory();
  const [stepNames, setStepNames] = useState([
    ["step0", ["Start", 0, "step", "/"]],
    ["step1", ["Sposób złożenia", 1, "step", "/step1"]],
    ["step2", ["Dane nieruchomości", 2, "step", "/step2"]],
    ["step3", ["Dane podmiotu", 3, "step", "/step3"]],
    ["step4", ["Wysokość opłaty", 4, "step", "/step4"]],
    ["step5", ["Podsumowanie", 5, "step", "/step5"]],
  ]);

  const setProgressBar = (stepName) => {
    const matchIndex = (array) => array[0] === stepName;
    const matchIndexManager = (array) => array[0] === "stepManager";
    let tempProgress = [...stepNames];
    let managerNumber = tempProgress.findIndex(matchIndexManager);
    if (ifManagerGlobal === true && managerNumber === -1) {
      tempProgress.push([
        "stepManager",
        ["Dane zarządcy", 3.1, "step", "/stepManager"],
      ]);
    } else if (ifManagerGlobal === false && managerNumber > -1) {
      tempProgress.splice(managerNumber, 1);
    }
    sortArray(tempProgress);
    let stepNumber = tempProgress.findIndex(matchIndex);
    tempProgress.forEach((e, i) => {
      if (i < stepNumber) e[1][2] = "is-complete";
      else if (i == stepNumber) e[1][2] = "is-current";
      else if (i > stepNumber) e[1][2] = "step";
    });
    setStepNames(tempProgress);
  };

  const setManager = () => {
    let localStorageData = localStorage.getItem("step3");
    if (localStorageData) {
      let data = JSON.parse(localStorageData);
      if (data) {
        if (data.ifManager == true) {
          if (setManagerGlobal) {
            setManagerGlobal(true);
          }
        }
      }
    }
  };

  useEffect(() => {
    setManager();
  }, []);

  useEffect(() => {
    setProgressBar(step);
  }, [ifManagerGlobal]);

  const isStepLegit = (stepName) => {
    const matchIndex = (array) => array[0] === stepName;
    let stepNumber = stepNames.findIndex(matchIndex);

    if (stepName === "stepManager") {
      return true;
    }
    if (stepNumber === -1) return false;
    else if (stepNumber === 0) return true;
    else if (stepNumber === 1) return true;
    else if (stepName === "step5") {
      var localStorageData = localStorage.getItem("step4valid");
      if (localStorageData === "true") return true;
    } else if (stepNumber > 1) {
      let previousStep = stepNames[stepNumber - 1];
      console.log(stepNames);
      console.log(previousStep, "prev");

      var localStorageData = localStorage.getItem(previousStep[0]);
      if (localStorageData && localStorageData.length > 0) {
        const data = JSON.parse(localStorageData);
        if (data.valid === true) return true;
      }
    }
    return false;
  };

  const sortArray = (items) => {
    items.sort(function (first, second) {
      if (first && second) return second[1][1] - first[1][1];
      else return null;
    });
    items.reverse();
  };

  useEffect(() => {
    if (step) {
      if (!isStepLegit(step))
        history.push({
          pathname: "/",
          state: { new: false, fromLocalStorage: true },
        });
      else setProgressBar(step);
    }
  }, [step]);

  return (
    <>
      <div className="wrapper">
        <h1>Postęp</h1>

        <ol className="ProgressBar" id="ProgressBar">
          {stepNames.map(function (object, i) {
            return (
              <li
                key={stepNames[i][0]}
                className={"ProgressBar-step " + stepNames[i][1][2]}
                onClick={() => {
                  if (
                    isStepLegit(stepNames[i][0]) &&
                    stepNames[i][1][2] === "is-complete"
                  ) {
                    history.push({
                      pathname: "." + stepNames[i][1][3],
                      state: { new: false, fromLocalStorage: true },
                    });
                  }
                }}
              >
                <YourSvg className="ProgressBar-icon" />{" "}
                <span className="ProgressBar-stepLabel">
                  {stepNames[i][1][0]}
                </span>
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
};

export { ProgressDots };
