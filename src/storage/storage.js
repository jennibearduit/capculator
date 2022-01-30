const semesters_key = "SEMESTERS"

export const saveSemesters = (semesters) => {
  const json_sems = JSON.stringify(semesters);
  localStorage.setItem(semesters_key, json_sems);
}

export const loadSemesters = () => {
  const json_sems = localStorage.getItem(semesters_key);
  return JSON.parse(json_sems);
}

export const saveModules = (sem, modules) => {
  const json_mods = JSON.stringify(modules);
  localStorage.setItem(sem, json_mods);
}

export const loadModules = (sem) => {
  const json_mods = localStorage.getItem(sem);
  const modules = JSON.parse(json_mods);
  return modules.map((m) => ({...m, credits: parseInt(m.credits)}))
}

export const renameSemester = (oldName, newName) => {
  const moduleData = localStorage.getItem(oldName);
  localStorage.setItem(newName, moduleData);
  localStorage.removeItem(oldName);
}

export const deleteSemester = (name) => {
  localStorage.removeItem(name);
}
