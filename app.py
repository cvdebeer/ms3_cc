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
    recipes = mongo.db.recipes.find()
    categories = mongo.db.categories.find().sort('category_name')
    return render_template('home.html', categories=categories, recipes=recipes)


@app.route('/get_recipes/<category_name>')
def get_recipes(category_name):
    all_recipes = mongo.db.recipes.find({'category_name': category_name})
    return render_template('recipes.html', recipes=all_recipes)


@app.route('/recipe/<recipe_id>')
def recipe(recipe_id):
    recipes = mongo.db.recipes.find({'_id': ObjectId(recipe_id)})
    return render_template('recipe.html', recipe=recipes)


@app.route('/add_recipe')
def add_recipe():
    ingredients.clear()
    methods.clear()
    categories = mongo.db.categories.find().sort('category_name')
    ratings = mongo.db.rating.find()
    return render_template('addrecipe.html', categories=categories, ratings=ratings)


'''  Code for communication between JS and python taken from an article https://healeycodes.com/javascript/python/beginners/webdev/2019/04/11/talking-between-languages.html
 and adapted for use in this app '''


@app.route('/getData', methods=['GET', 'POST'])
def getData():
    ingredients.clear()
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
        message = "Error!"
        return jsonify(message)


@app.route('/giveData', methods=['GET', 'POST'])
def giveData():

    if request.method == 'GET':
        message = ingredients
        return jsonify(message)

    else:
        print("Error!")

    ingredients.clear()


@app.route('/getMet', methods=['GET', 'POST'])
def getMet():
    ingredients.clear()
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

        message = "Error!"
        return jsonify(message)


@app.route('/giveMet', methods=['GET', 'POST'])
def giveMet():

    if request.method == 'GET':
        message = methods
        return jsonify(message)

    else:
        print("Error!")

    methods.clear()


@app.route('/test')
def test_page():
    return render_template(url_for('add_recipe'))


@app.route('/insert_recipe', methods=['POST'])
def insert_recipe():
    recipes = mongo.db.recipes
    authors = mongo.db.authors
    categories = mongo.db.categories
    rating = mongo.db.rating
# Code for uploading and downloading images :https://www.youtube.com/watch?v=DsgAuceHha4
    if 'fileInput' in request.files:
        fileInput = request.files['fileInput']
        mongo.save_file(fileInput.filename, fileInput)
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
            'total_time': request.form.get('total_time'),
            'rating': request.form.get('rating'),
            'image': fileInput.filename,
            'ingredients': ingredients,
            'method': methods
        })

    return redirect(url_for('add_recipe'))

# Code for uploading and downloading images :https://www.youtube.com/watch?v=DsgAuceHha4
@app.route('/file/<filename>')
def file(filename):
    return mongo.send_file(filename)


@app.route('/edit_recipe/<recipe_id>')
def edit_recipe(recipe_id):
    ingredients.clear()
    methods.clear()
    recipe = mongo.db.recipes.find_one({'_id': ObjectId(recipe_id)})
    categories = mongo.db.categories.find()
    ratings = mongo.db.rating.find()
    ingredients.append(recipe['ingredients'])
    methods.append(recipe['method'])
    print(ingredients)
    print(methods)

    return render_template('editrecipe.html', recipes=recipe, categories=categories, ratings=ratings)


@app.route('/update_recipe/<recipe_id>', methods=['POST'])
def update_recipe(recipe_id):
    recipes = mongo.db.recipes

    if 'fileInput' in request.files:
        fileInput = request.files['fileInput']
        mongo.save_file(fileInput.filename, fileInput)

    recipes.update_one({'_id': ObjectId(recipe_id)},
    {
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
        'total_time': request.form.get('total_time')},
        {'$set': {'ingredients': ingredients,
                'method': methods}}
    )
        
 
                    #  'image': fileInput.filename},


    return redirect(url_for('get_categories'))


@app.route('/delete_recipe/<recipe_id>')
def delete_recipe(recipe_id):
    mongo.db.recipes.remove({'_id': ObjectId(recipe_id)})
    return redirect(url_for('get_categories'))


if __name__ == "__main__":
    app.run(host=os.environ.get('IP'),
            port=int(os.environ.get('PORT')),
            debug=True)
