import os
from flask import Flask, render_template, redirect, request, url_for
import json
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


@app.route('/add_recipe')
def add_recipe():
    return render_template('addrecipe.html', categories=mongo.db.categories.find().sort('category_name'), ratings=mongo.db.rating.find())


@app.route('/insert_recipe', methods=['POST'])
def insert_recipe():
    recipes = mongo.db.recipes
    authors = mongo.db.authors
    categories = mongo.db.categories
    rating = mongo.db.rating
    if 'fileInput' in request.files:
        fileInput = request.files['fileInput']
        mongo.save_file(fileInput.filename, fileInput)

    recipes.insert({
        'category_id': 'category_id',
        'recipe_name': request.form.get('recipe_name'),
        'servings': request.form.get('servings'),
        'carbs': request.form.get('carbs'),
        'protein': request.form.get('protein'),
        'fat': request.form.get('fat'),
        'prep_time': request.form.get('prep_time'),
        'cook_time': request.form.get('cook_time'),
        'ingredients': request.form.getlist('display-ing'),
        'method': request.form.getlist('display-method'),
        'image': fileInput.filename
    })

    # authors.insert({
    #     'author_name': request.form.get('author_name'),
    #     'weblink': request.form.get('weblink'),
    #     'recipe_id': ObjectId('recipe_id')
    # })
    # categories.update({
    #     'recipe_id': ObjectId('recipe_id')
    # })
    # rating.update({
    #     'recipe_id': ObjectId('recipe_id')
    # })
    return redirect(url_for('add_recipe'))


if __name__ == "__main__":
    app.run(host=os.environ.get('IP'),
            port=int(os.environ.get('PORT')),
            debug=True)
