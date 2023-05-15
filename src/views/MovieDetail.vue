<template>
    <div class="movie-detail">
        <!--Variable that call the movie's id-->
        <h2>{{ movie.Title }}</h2>
        <p>{{ movie.Released }}</p>
        <img :src="movie.Poster" alt="Movie Poster" class="featured-img"/>
        <p class="genre">Genre: {{ movie.Genre}}</p>
        <p>{{ movie.Plot }}</p>  
    </div>
</template>

<script>
    import { ref, onBeforeMount } from "vue";
    import { useRoute } from "vue-router";
    import env from "../env";

    export default {
        setup(){
            const movie = ref("");
            const route = useRoute();

            onBeforeMount(() => {
                fetch(`http://www.omdbapi.com/?apikey=${env.apikey}&i=${route.params.id}&plot=full`)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                        movie.value = data;
                    });
            });

            return {
                movie
            }
        }
    }
</script>

<style lang="scss" scoped>
.movie-detail {
    padding: 16px;

    h2 {
        color: #fff;
        font-size:  28px;
        font-weight: 600;
        margin-bottom: 16px;
    }

    .featured-img{
        display: block;
        max-width: 300px;

    }

    p{
        color: #fff;
        font-size: 18px;
        line-height: 1.4;
    }

    .genre{
        margin-bottom: 16px;
    }
}
</style>