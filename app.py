import os
from flask import Flask, render_template, redirect, request, url_for
from flask_pymongo import PyMongo
from bson.objectid import ObjectId

app = Flask(__name__)
app.config['MONGO_DBNAME'] = 'ccRecipes'
app.config['MONGO_URI'] = os.getenv('MONGO_URI')

mongo = PyMongo(app)


@app.route('/')
@app.route('/get_categories')
def get_categories():
    return render_template('home.html',
                           categories=mongo.db.categories.find().sort('category_name'))


@app.route('/recipes<category_id>')
def recipes(category_id):
    mongo.db.recipes.find(
        {'category_id': ObjectId(category_id)}
    )
    return render_template('recipes.html')


if __name__ == "__main__":
    app.run(host=os.environ.get('IP'),
            port=int(os.environ.get('PORT')),
            debug=True)
