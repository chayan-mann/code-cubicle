from flask import Flask, jsonify, request,session
from flask_bcrypt import bcrypt
import mysql.connector

app = Flask(__name__)
app.secret_key = 'vkdfjvlk33wl'

# Configure MariaDB connection
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'DATABASE'


# Function to establish a database connection
def connect_db():
    return mysql.connector.connect(
        host=app.config['MYSQL_HOST'],
        user=app.config['MYSQL_USER'],
        password=app.config['MYSQL_PASSWORD'],
        database=app.config['MYSQL_DB']
    )


# Route to display data from the database
@app.route('/')
def index():
    # Establish database connection
    conn = connect_db()
    cursor = conn.cursor()

    # Execute query
    cursor.execute("SELECT * FROM Users")
    data = cursor.fetchall()

    # Close connection
    conn.close()

    # Display data
    return str(data)


# Signup endpoint
@app.route('/signup', methods=['POST'])
def signup():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({'message': 'Username and password are required'}), 400

    #hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

    conn = connect_db()
    cursor = conn.cursor()
    cursor.execute("INSERT INTO users (username, password) VALUES (%s, %s)", (username, password))
    conn.commit()
    conn.close()

    return jsonify({'message': 'User created successfully'}), 201

# Login endpoint
@app.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({'message': 'Username and password are required'}), 400

    conn = connect_db()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM users WHERE username = %s AND password = %s", (username, password))
    user = cursor.fetchone()
    conn.close()

    if user:
        session['user_id'] = user['id']
        return jsonify({'message': 'Login successful'}), 200
    else:
        return jsonify({'message': 'Invalid username or password'}), 401
    

if __name__ == '__main__':
    app.run(debug=True)
