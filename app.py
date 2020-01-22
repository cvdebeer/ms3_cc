import os
from flask import Flask, jsonify, render_template, redirect, request, url_for
import json
from flask_pymongo import PyMongo
from bson.objectid import ObjectId


app = Flask(__name__)
app.config['MONGO_DBNAME'] = 'ccRecipes'
app.config['MONGO_URI'] = os.getenv('MONGO_URI')

mongo = PyMongo(app)

ingredients = []
methods = []


@app.route('/')
@app.route('/get_categories')
def get_categories():
    return render_template('home.html', categories=mongo.db.categories.find().sort('category_name'))


@app.route('/get_recipes/<category_id>')
def get_recipes(category_id):
    category = mongo.db.categories.find({'_id': ObjectId(category_id)})
    the_recipes = mongo.db.recipes.find(
        {'category_id': ObjectId(category_id)})
    return render_template('recipes.html', category=category, recipes=the_recipes)


@app.route('/add_recipe')
def add_recipe():
    categories = mongo.db.categories.find().sort('category_name')
    ratings = mongo.db.rating.find()
    return render_template('addrecipe.html', categories=categories, ratings=ratings)


'''  Code for communication between JS and python taken from an article https://healeycodes.com/javascript/python/beginners/webdev/2019/04/11/talking-between-languages.html
 and adapted for use in this app '''


@app.route('/getData', methods=['GET', 'POST'])
def getData():
    if request.method == 'POST':
        data = request.get_json()

        print(data)
        print(data['ingredients'])
        for ingredient in data['ingredients']:
            print(ingredient)
            ingredients.append(ingredient)
        print(ingredients)
        return data

    else:
        message = {'Error!'}
        return jsonify(message)


@app.route('/getMet', methods=['GET', 'POST'])
def getMet():
    if request.method == 'POST':
        data = request.get_json()

        print(data)
        print(data['methods'])
        for method in data['methods']:
            print(method)
            methods.append(method)
        print(methods)
        return data

    else:
        print('hello')
        message = {'Error!'}
        return jsonify(message)


@app.route('/test')
def test_page():
    return render_template(url_for('add_recipe'))


@app.route('/insert_recipe', methods=['POST'])
def insert_recipe():
    recipes = mongo.db.recipes
    authors = mongo.db.authors
    categories = mongo.db.categories
    rating = mongo.db.rating

    if 'fileInput' in request.files:
        fileInput = request.files['fileInput']
        mongo.save_file(fileInput.filename, fileInput)
    original_id = ObjectId()
    recipes.insert({
        'recipe_name': request.form.get('recipe_name'),
        'category_name': request.form.get('category_name'),
        'author_name': request.form.get('author_name'),
        'weblink': request.form.get('weblink'),
        'servings': request.form.get('servings'),
        'carbs': request.form.get('carbs'),
        'protein': request.form.get('protein'),
        'fat': request.form.get('fat'),
        'prep_time': request.form.get('prep_time'),
        'cook_time': request.form.get('cook_time'),
        'image': fileInput.filename,
        'ingredients': ingredients,
        'method': methods,
    })
    authors.insert({
        'author_name': request.form.get('author_name'),
        'weblink': request.form.get('weblink'),
        'recipe_id': original_id
    })
    return redirect(url_for('add_recipe'))


if __name__ == "__main__":
    app.run(host=os.environ.get('IP'),
            port=int(os.environ.get('PORT')),
            debug=True)
