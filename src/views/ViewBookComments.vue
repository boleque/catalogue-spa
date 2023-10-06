<template>
    <main>
        <Navbar />
        <div class="container">
            <a class="btn btn-primary" :href="`/`">Back</a>
            <p/>
            <div class="row">
                <div class="col-md-12">
                    <table class="table table-striped">
                        <tbody>
                          <tr v-for="comment in bookCommentsInfo.comments">
                            <td>{{comment}}</td>
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
        name: 'ViewBookComments',
        components: {
            Navbar
        },
        data() {
            return {
                bookCommentsInfo: {
                    id: '',
                    title: '',
                    authorName: '',
                    genreName: '',
                    comments: []
                }
            }
        },

    created() {
      this.getBookComments();
    },

        methods: {
            getBookComments() {
              fetch(`/books/${this.$route.params.id}/comments`)
              .then(res => res.json())
              .then(data => {
                  this.bookCommentsInfo = data;
                  console.log(this.book);
              })
          },
        }

    }

</script>