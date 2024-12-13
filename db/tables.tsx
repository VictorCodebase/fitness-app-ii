import db from './db';

// Initialize database tables
export const initializeTables = () => {
  db.transaction((tx: { executeSql: (arg0: string) => void; }) => {
    // Users table
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS Users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        age INTEGER,
        gender TEXT,
        weight REAL,
        mydistance REAL DEFAULT 0,
        created_at TEXT DEFAULT (datetime('now'))
      );`
    );

    // Runs table
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS Runs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        date TEXT NOT NULL,
        distance REAL NOT NULL,
        duration INTEGER NOT NULL,
        pace REAL,
        calories REAL,
        route TEXT,
        FOREIGN KEY (user_id) REFERENCES Users (id)
      );`
    );

    // Goals table
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS Goals (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        goal_type TEXT NOT NULL,
        target_value REAL NOT NULL,
        progress REAL DEFAULT 0,
        start_date TEXT NOT NULL,
        end_date TEXT NOT NULL,
        FOREIGN KEY (user_id) REFERENCES Users (id)
      );`
    );

    // Achievements table
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS Achievements (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        title TEXT NOT NULL,
        description TEXT,
        date TEXT DEFAULT (datetime('now')),
        FOREIGN KEY (user_id) REFERENCES Users (id)
      );`
    );

    console.log('All tables created successfully!');
  });
};
