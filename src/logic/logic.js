import { loadModules, loadSemesters } from "../storage/storage"

const gradePointsMap = {
  "A+": 5,
  "A": 5,
  "A-": 4.5,
  "B+": 4,
  "B": 3.5,
  "B-": 3,
  "C+": 2.5,
  "C": 2,
  "D+": 1.5,
  "D": 1,
  "F": 0,
}

const ungraded = ["S", "U", "CS", "CU", "IC", "IP"]

export const gradeOptions = Object.keys(gradePointsMap).concat(ungraded)

export const getCumulativeReport = () => {
  const semesters = loadSemesters() ?? [];
  let totalPoints = 0;
  let totalGradedCredits = 0;
  let totalCredits = 0;
  semesters.forEach((s) => {
    const mods = loadModules(s) ?? [];
    mods.forEach((m) => {
      console.log(m)
      totalCredits += m.credits;
      if (ungraded.includes(m.grade)) {
        return;
      }
      const numberGrade = gradePointsMap[m.grade];
      totalGradedCredits += m.credits;
      const points = numberGrade * m.credits;
      totalPoints += points;
    })
  })

  if (totalGradedCredits === 0) {
    return {
      cap: 0,
      totalCredits,
      totalGradedCredits
    };
  }
  return {
    cap: totalPoints / totalGradedCredits,
    totalCredits,
    totalGradedCredits
  };
}

export const getSemesterReport = (sem) => {
  let totalPoints = 0;
  let totalGradedCredits = 0;
  let totalCredits = 0;
  const mods = loadModules(sem) ?? [];
  mods.forEach((m) => {
    totalCredits += m.credits;
    if (ungraded.includes(m.grade)) {
      return;
    }
    const numberGrade = gradePointsMap[m.grade];
    totalGradedCredits += m.credits;
    const points = numberGrade * m.credits;
    totalPoints += points;
  })

  if (totalGradedCredits === 0) {
    return {
      sap: 0,
      totalCredits,
      totalGradedCredits
    };
  }
  return {
    sap: totalPoints / totalGradedCredits,
    totalCredits,
    totalGradedCredits
  };
}
