import db from './db';

// Helper function for executing SQL
const executeSql = (query: string, params: any[] = [], successCallback?: (result: any) => void, errorCallback?: (error: any) => void) => {
  db.transaction(tx => {
    tx.executeSql(
      query,
      params,
      (_, result) => successCallback && successCallback(result),
      (_, error) => {
        errorCallback && errorCallback(error);
        return false;
      }
    );
  });
};

// CRUD Methods

// USERS TABLE
export const insertUser = (name: string, email: string, password: string, age: number, gender: string, weight: number) => {
  executeSql(
    `INSERT INTO Users (name, email, password, age, gender, weight) VALUES (?, ?, ?, ?, ?, ?);`,
    [name, email, password, age, gender, weight],
    result => console.log('User added successfully!', result),
    error => console.error('Error adding user:', error)
  );
};

export const fetchUsers = (callback: (users: any[]) => void) => {
  executeSql(
    `SELECT * FROM Users;`,
    [],
    result => callback(result.rows._array),
    error => console.error('Error fetching users:', error)
  );
};

export const updateUser = (id: number, name: string, email: string, age: number, gender: string, weight: number) => {
  executeSql(
    `UPDATE Users SET name = ?, email = ?, age = ?, gender = ?, weight = ? WHERE id = ?;`,
    [name, email, age, gender, weight, id],
    result => console.log('User updated successfully!', result),
    error => console.error('Error updating user:', error)
  );
};

export const deleteUser = (id: number) => {
  executeSql(
    `DELETE FROM Users WHERE id = ?;`,
    [id],
    result => console.log('User deleted successfully!', result),
    error => console.error('Error deleting user:', error)
  );
};

// RUNS TABLE
export const insertRun = (userId: number, date: string, distance: number, duration: number, pace: number, calories: number, route: string | null) => {
  executeSql(
    `INSERT INTO Runs (user_id, date, distance, duration, pace, calories, route) VALUES (?, ?, ?, ?, ?, ?, ?);`,
    [userId, date, distance, duration, pace, calories, route],
    result => console.log('Run added successfully!', result),
    error => console.error('Error adding run:', error)
  );
};

export const fetchRuns = (userId: number, callback: (runs: any[]) => void) => {
  executeSql(
    `SELECT * FROM Runs WHERE user_id = ?;`,
    [userId],
    result => callback(result.rows._array),
    error => console.error('Error fetching runs:', error)
  );
};

export const updateRun = (id: number, distance: number, duration: number, pace: number, calories: number, route: string | null) => {
  executeSql(
    `UPDATE Runs SET distance = ?, duration = ?, pace = ?, calories = ?, route = ? WHERE id = ?;`,
    [distance, duration, pace, calories, route, id],
    result => console.log('Run updated successfully!', result),
    error => console.error('Error updating run:', error)
  );
};

export const deleteRun = (id: number) => {
  executeSql(
    `DELETE FROM Runs WHERE id = ?;`,
    [id],
    result => console.log('Run deleted successfully!', result),
    error => console.error('Error deleting run:', error)
  );
};

// GOALS TABLE
export const insertGoal = (userId: number, goalType: string, targetValue: number, startDate: string, endDate: string) => {
  executeSql(
    `INSERT INTO Goals (user_id, goal_type, target_value, start_date, end_date) VALUES (?, ?, ?, ?, ?);`,
    [userId, goalType, targetValue, startDate, endDate],
    result => console.log('Goal added successfully!', result),
    error => console.error('Error adding goal:', error)
  );
};

export const fetchGoals = (userId: number, callback: (goals: any[]) => void) => {
  executeSql(
    `SELECT * FROM Goals WHERE user_id = ?;`,
    [userId],
    result => callback(result.rows._array),
    error => console.error('Error fetching goals:', error)
  );
};

export const updateGoal = (id: number, progress: number) => {
  executeSql(
    `UPDATE Goals SET progress = ? WHERE id = ?;`,
    [progress, id],
    result => console.log('Goal updated successfully!', result),
    error => console.error('Error updating goal:', error)
  );
};

export const deleteGoal = (id: number) => {
  executeSql(
    `DELETE FROM Goals WHERE id = ?;`,
    [id],
    result => console.log('Goal deleted successfully!', result),
    error => console.error('Error deleting goal:', error)
  );
};

// ACHIEVEMENTS TABLE
export const insertAchievement = (userId: number, title: string, description: string) => {
  executeSql(
    `INSERT INTO Achievements (user_id, title, description) VALUES (?, ?, ?);`,
    [userId, title, description],
    result => console.log('Achievement added successfully!', result),
    error => console.error('Error adding achievement:', error)
  );
};

export const fetchAchievements = (userId: number, callback: (achievements: any[]) => void) => {
  executeSql(
    `SELECT * FROM Achievements WHERE user_id = ?;`,
    [userId],
    result => callback(result.rows._array),
    error => console.error('Error fetching achievements:', error)
  );
};

export const deleteAchievement = (id: number) => {
  executeSql(
    `DELETE FROM Achievements WHERE id = ?;`,
    [id],
    result => console.log('Achievement deleted successfully!', result),
    error => console.error('Error deleting achievement:', error)
  );
};
