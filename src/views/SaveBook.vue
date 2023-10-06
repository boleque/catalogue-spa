<template>
    <main>
        <Navbar/>
        <div class="my-5">
            <div class="mx-auto w-25 " style="max-width:100%;">
              <h2 class="text-center mb-3">Save Book</h2>
              <form @submit.prevent="updateBook">
                <!--title-->
                <div class="row">
                  <div class="col-md-12 form-group mb-3">
                    <label for="title" class="form-label">Title</label>
                    <input id="title"  type="text" name="title" class="form-control" placeholder="title" required v-model="book.title">
                  </div>
                </div>

                <!--author-->
                <div class="row">
                  <div class="col-md-12 form-group mb-3">
                  <label for="Author" class="form-label">Author</label>
                    <select class="form-control" :disabled="authorsList.length == 0" :required="true" v-model="book.author">
                      <option :value="null" disabled>Select Author</option>
                      <option v-for="(state, index) in authorsList" :key="index" :value="state"> {{ state.name }} </option>
                    </select>
                  </div>
                </div>

                <!--genre -->
                <div class="row">
                  <div class="col-md-12 form-group mb-3">
                  <label for="Genre" class="form-label">Genre</label>
                    <select class="form-control" :disabled="genresList.length == 0" :required="true" v-model="book.genre">
                      <option :value="null" disabled>Select Genre</option>
                      <option v-for="(state, index) in genresList" :key="index" :value="state"> {{ state.name }} </option>
                    </select>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-12 form-group">
                    <input class="btn btn-primary w-100" type="submit" value="Submit">
                  </div>
                </div>
      
                <div>
                  
                </div>
              </form>
        
            </div>
          </div>

    </main>
</template>


<script>
  import Navbar from '../components/Navbar.vue';

  export default {
      name: 'UpdatePatient',
      components: {
          Navbar
      },

      data() {
          return {
              book: {
                  id: '',
                  title: '',
                  author: {id: '', name: ''},
                  genre: {id: '', name: ''}
              },
              authorsList: [],
              genresList: [],
          }
      },

    created() {
      this.getBook();
      this.getAuthors();
      this.getGenres();
    },

      methods: {
          getSelected() {
            console.log(this.selectedCourse)
          },
          getAuthors() {
              fetch(`/authors/all`)
              .then(res => res.json())
              .then(data => {
                  this.authorsList = data;
                  console.log(this.authorsList);
              })
          },
          getGenres() {
              fetch(`/genres/all`)
              .then(res => res.json())
              .then(data => {
                  this.genresList = data;
                  console.log(this.genresList);
              })
          },
          getBook() {
              fetch(`/books/${this.$route.params.id}`)
              .then(res => res.json())
              .then(data => {
                  this.book = data;
                  console.log(this.book);
              })
          },
          updateBook() {
              fetch(`/books`, {
                  method: 'PUT',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(this.book)
              })
              .then(data => {
                  console.log(data);
                  this.$router.push('/');
              })
          }
      }
  }

</script>