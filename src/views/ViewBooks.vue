<template>
    <main>
        <Navbar />
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1 class="text-center">View Books</h1>
                    <a href="/add" class="btn btn-primary">Add Book</a>
                    <table class="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Title</th>
                            <th scope="col">Author</th>
                            <th scope="col">Genre</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="book in books" :key="book.id">
                            <th scope="row">{{book.id}}</th>
                            <td>{{book.title}}</td>
                            <td>{{book.author.name}}</td>
                            <td>{{book.genre.name}}</td>
                            <td>
                              <a class="btn btn-primary" :href="`/edit/${book.id}`">Edit</a>
                              <button class="btn btn-danger mx-2" @click="deleteBook(book.id)">Delete</button>
                              <a class="btn btn-primary" :href="`/comments/${book.id}`">Comments</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                </div>
            </div>
        </div>
    </main>
</template>


<script>
import Navbar from '../components/Navbar.vue'

    export default {
        name: 'ViewBooks',
        components: {
            Navbar
        },
        data() {
            return {
                books: []
            }
        },

        beforeMount(){
            this.getBooks();
        },

        methods: {
            getBooks() {
                fetch('/books/all')
                .then(response => response.json())
                .then(data => {
                    this.books = data
                    console.log(data)
                })
            },
            deleteBook(id){
                fetch(`/books/${id}`, {
                    method: 'DELETE'
                })
                .then(data => {
                    console.log(data)
                    this.getBooks()
                })
            }
        }

    }

</script>