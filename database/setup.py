import sqlite3

# Connect to SQLite database
conn = sqlite3.connect('fitness_app.db')
cursor = conn.cursor()

# Create Users table
cursor.execute('''
CREATE TABLE IF NOT EXISTS Users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL
)
''')

# Create Runs table
cursor.execute('''
CREATE TABLE IF NOT EXISTS Runs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    date TEXT NOT NULL,
    distance REAL NOT NULL,
    time REAL NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users (id)
)
''')

# Create Steps table
cursor.execute('''
CREATE TABLE IF NOT EXISTS Steps (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    date TEXT NOT NULL,
    steps_count INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users (id)
)
''')

conn.commit()
print("Database and tables created successfully.")
