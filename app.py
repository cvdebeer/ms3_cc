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
    return render_template('home.html', categories=mongo.db.categories.find().sort('category_name'))


@app.route('/get_recipes/<category_id>')
def get_recipes(category_id):
    category = mongo.db.categories.find({'_id': ObjectId(category_id)})
    the_recipes = mongo.db.recipes.find(
        {'category_name': ObjectId(category_id)})
    return render_template('recipes.html', category=category, recipe=the_recipes)


@app.route('/add_recipe')
def add_recipe():
    return render_template('addrecipe.html', categories=mongo.db.categories.find().sort('category_name'), ratings=mongo.db.rating.find())


if __name__ == "__main__":
    app.run(host=os.environ.get('IP'),
            port=int(os.environ.get('PORT')),
            debug=True)
