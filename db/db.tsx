import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('fitness_app.db');

// Export the database connection
export default db;
