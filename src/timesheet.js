const HALF_HOUR = 0.5;

function isValidProjectName(projectName) {
  return typeof projectName === 'string' && projectName.trim() !== '';
}

function isValidDuration(duration) {
  return (
    Number.isFinite(duration) &&
    duration > 0 &&
    Number.isInteger(duration / HALF_HOUR)
  );
}

function normalizeProjectName(projectName) {
  return projectName.trim().toLowerCase();
}

class Timesheet {
  #entries = [];

  submitTimesheet(projectName, duration) {
    if (!isValidProjectName(projectName) || !isValidDuration(duration)) {
      return false;
    }
    this.#entries.push({ projectName: projectName.trim(), duration });
    return true;
  }

  getTimesheets() {
    return this.#entries.map((entry) => ({ ...entry }));
  }

  getTotalTimesheetHours(projectName) {
    if (!isValidProjectName(projectName)) {
      return 0;
    }
    const key = normalizeProjectName(projectName);
    return this.#entries
      .filter((entry) => normalizeProjectName(entry.projectName) === key)
      .reduce((total, entry) => total + entry.duration, 0);
  }
}

module.exports = Timesheet;
