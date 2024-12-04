#Add a new user, a run, or steps
    
from sqlite3 import Cursor
import sqlite3
conn = sqlite3.connect('fitness_app.db')
cursor = conn.cursor()

def add_user(name, email):
    cursor.execute("INSERT INTO Users (name, email) VALUES (?, ?)", (name, email))
    conn.commit()

def add_run(user_id, date, distance, time):
    cursor.execute("INSERT INTO Runs (user_id, date, distance, time) VALUES (?, ?, ?, ?)", 
                   (user_id, date, distance, time))
    conn.commit()

def add_steps(user_id, date, steps_count):
    cursor.execute("INSERT INTO Steps (user_id, date, steps_count) VALUES (?, ?, ?)", 
                   (user_id, date, steps_count))
    conn.commit()

# Example Usage
add_user("John Doe", "john@example.com")
add_run(1, "2024-12-04", 5.2, 30)
add_steps(1, "2024-12-04", 7500)

#Retrieve information from the database
def get_users():
    cursor.execute("SELECT * FROM Users")
    return cursor.fetchall()

def get_user_runs(user_id):
    cursor.execute("SELECT * FROM Runs WHERE user_id = ?", (user_id,))
    return cursor.fetchall()

def get_user_steps(user_id):
    cursor.execute("SELECT * FROM Steps WHERE user_id = ?", (user_id,))
    return cursor.fetchall()

# Example Usage
print(get_users())
print(get_user_runs(1))
print(get_user_steps(1))

#Update users
def update_user(user_id, name=None, email=None):
    if name:
        cursor.execute("UPDATE Users SET name = ? WHERE id = ?", (name, user_id))
    if email:
        cursor.execute("UPDATE Users SET email = ? WHERE id = ?", (email, user_id))
    conn.commit()

def update_steps(step_id, new_count):
    cursor.execute("UPDATE Steps SET steps_count = ? WHERE id = ?", (new_count, step_id))
    conn.commit()

# Example Usage
update_user(1, name="John Smith")
update_steps(1, 8000)

#Delete or removing information
def delete_user(user_id):
    cursor.execute("DELETE FROM Users WHERE id = ?", (user_id,))
    cursor.execute("DELETE FROM Runs WHERE user_id = ?", (user_id,))
    cursor.execute("DELETE FROM Steps WHERE user_id = ?", (user_id,))
    conn.commit()

def delete_run(run_id):
    cursor.execute("DELETE FROM Runs WHERE id = ?", (run_id,))
    conn.commit()

def delete_steps(step_id):
    cursor.execute("DELETE FROM Steps WHERE id = ?", (step_id,))
    conn.commit()

# Example Usage
delete_user(1)
delete_run(1)
delete_steps(1)

#closing connection
conn.close()
