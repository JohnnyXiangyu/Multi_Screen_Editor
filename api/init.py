from flask import Flask
app = Flask(__name__)

userID = [] # a list of users' id (string)

@app.route('/')
def hello():
    return "Hello World!"

if __name__ == '__main__':
    app.run()
