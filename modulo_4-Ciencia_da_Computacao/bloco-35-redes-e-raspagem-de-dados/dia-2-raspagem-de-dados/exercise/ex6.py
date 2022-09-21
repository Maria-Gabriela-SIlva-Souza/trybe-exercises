from pymongo import MongoClient


category = input("Escolha uma categoria: ")
with MongoClient() as client:
    db = client.books
    for book in db.books.find({"categories": category}):
        print(book["title"])
