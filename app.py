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
        {'category_name': ObjectId(category_id)})
    return render_template('recipes.html', category=category, recipe=the_recipes)


@app.route('/add_recipe')
def add_recipe():
    return render_template('addrecipe.html', categories=mongo.db.categories.find().sort('category_name'), ratings=mongo.db.rating.find().sort('rating'))


@app.route('/getData', methods=['GET', 'POST'])
def getData():

    # POST request

    if request.method == 'POST':
        data = request.get_json()
        # print(request.get_json())  # parse as JSON
        # ingredients.append(data)
        # print(ingredients)
        # for ingredient in data[0]['ingredients']:
        #     ingredients.append(ingredient)
        #     # ingredients.append(data)
        # print(ingredients)
        print(data)
        print(data['ingredients'])
        for ingredient in data['ingredients']:
            print(ingredient)
            ingredients.append(ingredient)
        print(ingredients)
        return data

    # GET request

    else:

        message = {'Error!'}

        return jsonify(message)  # serialize and use JSON headers


@app.route('/getMet', methods=['GET', 'POST'])
def getMet():

    # POST request

    if request.method == 'POST':
        data = request.get_json()
        methods.append(data)
        print(data)
        print(methods)
        return data

    # GET request

    else:
        print('hello')
        message = {'Error!'}

        return jsonify(message)  # serialize and use JSON headers


@app.route('/test')
def test_page():
    # look inside `templates` and serve `index.html`
    return render_template(url_for('add_recipe'))


@app.route('/insert_recipe', methods=['POST'])
def insert_recipe():
    recipes = mongo.db.recipes
    authors = mongo.db.authors
    categories = mongo.db.categories
    rating = mongo.db.rating
    # test = getData
    # print(test)

    if 'fileInput' in request.files:
        fileInput = request.files['fileInput']
        mongo.save_file(fileInput.filename, fileInput)
    original_id = ObjectId()
    recipes.insert({
        'category_id': original_id,
        'recipe_name': request.form.get('recipe_name'),
        'servings': request.form.get('servings'),
        'carbs': request.form.get('carbs'),
        'protein': request.form.get('protein'),
        'fat': request.form.get('fat'),
        'prep_time': request.form.get('prep_time'),
        'cook_time': request.form.get('cook_time'),
        'image': fileInput.filename,
        'ingredients': ingredients
        # 'ingredients': test,
        # 'method': methods,
    })
    # recipes.update({}, {'$set': {ingredients}}, multi=True)

    # authors.find({'author_name'}) == request.form.get('author_name'):

    # Not getting error but also not pusing anything up
    authors.update({'author_id': original_id}, {
                   '$push': {'recipe_id': original_id}})
    # else:
    #     authors.insert({
    #         'author_name': request.form.get('author_name'),
    #         'weblink': request.form.get('weblink'),
    #         'recipe_id': original_id
    #     })
    categories.update({'recipe_id': original_id}, {
                      '$push': {'recipe_id': original_id}})
    #
    # rating.update({
    #     'recipe_id': original_id
    # })
    return redirect(url_for('add_recipe'))


if __name__ == "__main__":
    app.run(host=os.environ.get('IP'),
            port=int(os.environ.get('PORT')),
            debug=True)
